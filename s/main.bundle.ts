// Szybkie selektory
const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel)!;
const $$ = <T extends HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

/** Init po zakończeniu intro (zgrane z CSS: intro znika po ~2.2s + 1.2s) */
window.addEventListener("load", () => {
  setTimeout(() => {
    initCopyCA();
    initGalleryHover();
    observePauseOffscreen();
  }, 2400);
});

/** Kopiowanie CA do schowka */
function initCopyCA(): void {
  const btn = document.getElementById("copyCA") as HTMLButtonElement | null;
  const caEl = document.getElementById("caText") as HTMLElement | null;
  if (!btn || !caEl) return;

  const ca = (caEl.textContent || "").trim();
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ca);
      const prev = btn.innerHTML;
      btn.innerHTML = "Copied";
      setTimeout(() => (btn.innerHTML = prev), 900);
    } catch {
      // Fallback (np. ograniczenia iOS)
      prompt("Copy address:", ca);
    }
  });
}

/** Galeria: hover = start video, blur/leave = pause */
function initGalleryHover(): void {
  const medias = $$(".media");
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  medias.forEach((box) => {
    const video = box.querySelector("video") as HTMLVideoElement | null;
    if (!video) return;

    video.muted = true;
    (video as any).playsInline = true;

    const play = () => {
      box.classList.add("playing");
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    const stop = () => {
      box.classList.remove("playing");
      video.pause();
    };

    if (!isTouch) {
      box.addEventListener("mouseenter", play);
      box.addEventListener("mouseleave", stop);
      box.addEventListener("focus", play, true);
      box.addEventListener("blur", stop, true);
    } else {
      // Mobile: tap toggle
      box.addEventListener("click", (e) => {
        e.preventDefault();
        if (box.classList.contains("playing")) stop();
        else play();
      });
    }
  });
}

/** Pauzuj video, gdy element niewidoczny */
function observePauseOffscreen(): void {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const box = e.target as HTMLElement;
        const video = box.querySelector("video") as HTMLVideoElement | null;
        if (!video) return;
        if (!e.isIntersecting) {
          video.pause();
          box.classList.remove("playing");
        }
      });
    },
    { threshold: 0.05 }
  );

  $$(".media").forEach((m) => io.observe(m));
}
// Preload ikonek w stopce
window.addEventListener("load", () => {
  document.querySelectorAll<HTMLImageElement>(".social__btn img").forEach(img => {
    const l = new Image();
    l.src = img.src;
  });
});

// Obsługa klawiatury (Enter/Space działa jak klik)
document.querySelectorAll<HTMLAnchorElement>(".social__btn").forEach(a => {
  a.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); a.click(); }
  });
});
document.querySelectorAll<HTMLAnchorElement>('.social__btn[href=""]').forEach(btn => {
  btn.addEventListener('click', e => e.preventDefault());
});