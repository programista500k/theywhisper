// Reveal on view
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) (e.target as HTMLElement).classList.add("show");
    });
  },
  { threshold: 0.25 }
);
document.querySelectorAll<HTMLElement>(".section").forEach((s) => io.observe(s));

// Typing line (circle)
const typingTarget = document.getElementById("typing") as HTMLElement | null;
const typingLines: string[] = [
  "forging your key…",
  "salting the memory pool…",
  "binding the silent witnesses…",
  "engraving your absence…",
];
let l = 0,
  c = 0;
function typeLoop(): void {
  if (!typingTarget) return;
  const txt = typingLines[l % typingLines.length];
  if (c <= txt.length) {
    typingTarget.textContent = txt.slice(0, c++);
    window.setTimeout(typeLoop, 28 + Math.random() * 30);
  } else {
    window.setTimeout(() => {
      c = 0;
      l++;
      typeLoop();
    }, 900);
  }
}

// Whispers (scroll reactive word cloud)
const words = ["CONSUME", "ERASE", "ASCEND", "OBEY", "VANISH", "REMEMBER"];
const cloud = document.getElementById("cloud") as HTMLElement | null;
let w = 0,
  lastY = window.scrollY;
function updateCloud(): void {
  if (!cloud) return;
  cloud.textContent = words[w % words.length];
  w++;
}
window.addEventListener("scroll", () => {
  if (!cloud) return;
  const delta = Math.abs(window.scrollY - lastY);
  cloud.style.opacity = String(Math.min(1, 0.2 + delta / 400));
  cloud.style.transform = `translateY(${(window.scrollY / 10) % 40}px)`;
  lastY = window.scrollY;
  if (delta > 40) updateCloud();
});

// Pseudo-terminal (offering)
const term = document.getElementById("term") as HTMLElement | null;
const script: string[] = [
  "> checking access…",
  "> user found: [unknown]",
  "> balance: 0 souls",
  "> access: DENIED",
  "> …",
  "> override accepted.",
  "> the gate opens anyway.",
];
let si = 0,
  sk = 0;
let row: HTMLDivElement | null = null;

function termLoop(): void {
  if (!term) return;
  if (si >= script.length) return;
  if (!row) {
    row = document.createElement("div");
    term.appendChild(row);
  }
  const line = script[si];
  if (sk <= line.length) {
    row.textContent = line.slice(0, sk++);
    term.scrollTop = term.scrollHeight;
    window.setTimeout(termLoop, 20 + Math.random() * 25);
  } else {
    si++;
    sk = 0;
    row = null;
    window.setTimeout(termLoop, 300 + Math.random() * 300);
  }
}

// Start after intro fade + audio unlock
function startExperience(): void {
  typeLoop();
  updateCloud();
  termLoop();

  const audio = document.getElementById("whispers") as HTMLAudioElement | null;
  if (!audio) return;

  audio.volume = 0.25;
  audio
    .play()
    .catch(() => {
      // Autoplay policy fallback – klik gdziekolwiek
      document.body.addEventListener(
        "click",
        () => {
          audio.play().catch(() => {});
        },
        { once: true }
      );
    });
}

// Zgrane z animacją #intro (1.8s + fade 2s)
window.addEventListener("load", () => {
  window.setTimeout(startExperience, 1900);
});

