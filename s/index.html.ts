import {html, ssg} from "@e280/scute"
import {constants} from "./constants.js"
import {socialCard} from "./website/social-card.js"

export default ssg.page(import.meta.url, async orb => {
  const title = "$WHISP"

  return ({
    title,
    css: "style.css",
    js: "main.bundle.min.js",
    favicon: constants.favicon,
    dark: true,
    socialCard: socialCard(title),
    head: html`
      <meta data-version="${await orb.packageVersion("$/package.json")}"/>

      <!-- fonts for Body experience -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Creepster&family=VT323&display=swap" rel="stylesheet">
      <script></script>
    `,
    body: html`
<body>
  <!-- INTRO: creepy face + tagline -->
  <div id="intro" aria-hidden="true">
    <div class="scan"></div>
    <img class="intro-face" src="https://i.postimg.cc/qRmy5nrr/unnamed.png" alt="creepy face" />
    <p class="intro-tag">you are not supposed to be here</p>
  </div>

  <!-- TOPBAR -->
  <header id="topbar" class="topbar">
    <!-- Logo przy lewym brzegu okna -->
    <div class="logo-title">$WHISP</div>

    <div class="topbar-wrap">
      <button id="copyCA" class="copy-btn" aria-label="Copy contract address">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M9 3h6a2 2 0 012 2v1h1a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h1V5a2 2 0 012-2zm0 3h6V5H9v1z" fill="currentColor"/>
        </svg>
        <span>Copy</span>
      </button>

      <div class="ca-line">
        <strong class="label">CA:</strong>
        <span id="caText" class="value">AsnEgyU8SQsjpgcpLSgHT8AXJigPy5AVK47pEcrnpump</span>
      </div>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section id="hero" class="section">
      <div class="container">
        <h1 class="flicker">this room was meant to stay dark.</h1>
      </div>
    </section>

    <!-- GRAVEYARD -->
    <section id="graveyard" class="section">
      <div class="container">
        <h2 class="grave-title">graveyard</h2>

        <div class="grid">
          <!-- subject 01 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub1.png" alt="subject 01" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub111.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 01</h3>
              <p>cause of death: every piece of her stored in someone else’s stomach.</p>
            </figcaption>
          </figure>

          <!-- subject 02 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub2.png" alt="subject 02" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub222.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 02</h3>
              <p>cause of death: jaw locked in a smile that wasn’t his.</p>
            </figcaption>
          </figure>

          <!-- subject 03 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub3.png" alt="subject 03" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub333.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 03</h3>
              <p>cause of death: legs kept running long after the heart stopped.</p>
            </figcaption>
          </figure>

          <!-- subject 04 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub4.png" alt="subject 04" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub444.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 04</h3>
              <p>cause of death: staring too long, glass whispered first.</p>
            </figcaption>
          </figure>

          <!-- subject 05 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub55.png" alt="subject 05" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub555.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 05</h3>
              <p>cause of death: whispering names that were never his.</p>
            </figcaption>
          </figure>

          <!-- subject 06 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub6.png" alt="subject 06" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub666.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 06</h3>
              <p>cause of death: eyes wide open, body too tired to follow.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </main>

  <!-- SOCIAL BAR -->
  <footer class="social">
    <!-- Telegram – nieklikalny -->
    <span class="social__btn" role="button" tabindex="0" aria-label="Telegram">
      <img src="/assets/logo/telegram.png" alt="Telegram" loading="lazy">
    </span>

    <!-- X (Twitter) -->
    <a class="social__btn" href="https://x.com/trenchtroll452" target="_blank" rel="noopener">
      <img src="/assets/logo/x.png" alt="X (Twitter)" loading="lazy">
    </a>

    <!-- Pump -->
    <a class="social__btn" href="https://dexscreener.com" target="_blank" rel="noopener">
      <img src="/assets/logo/pump.png" alt="Pump" loading="lazy">
    </a>
  </footer>

  <!-- DISCLAIMER -->
  <p class="disclaimer">
    $WHISP is a memecoin with no intrinsic value. Its only purpose is entertainment,
    so you should invest only the amount you are willing to part with.
  </p>
</body>
    `,
  })
})
