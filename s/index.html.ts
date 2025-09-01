import {html, ssg} from "@e280/scute"
import {constants} from "./constants.js"
import {socialCard} from "./website/social-card.js"

export default ssg.page(import.meta.url, async orb => {
	const title = "theywhisper"

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
			<script>
			</script>
		`,
		body: html`
<!-- ====== HEAD (w CodePen: wklej w panel HTML) ====== -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Creepster&family=VT323&display=swap" rel="stylesheet" />

<body>
  <!-- INTRO: creepy face + tagline -->
  <div id="intro" aria-hidden="true">
    <div class="scan"></div>
    <img
      class="intro-face"
      src="https://i.postimg.cc/qRmy5nrr/unnamed.png"
      alt="creepy face"
    />
    <p class="intro-tag">you are not supposed to be here</p>
  </div>

  <!-- TOPBAR: CA – wyśrodkowany; Copy po lewej -->
  <header id="topbar" class="topbar">
    <div class="topbar-wrap">
      <button id="copyCA" class="copy-btn" aria-label="Copy contract address">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M9 3h6a2 2 0 012 2v1h1a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h1V5a2 2 0 012-2zm0 3h6V5H9v1z" fill="currentColor"/>
        </svg>
        <span>Copy</span>
      </button>

      <div class="ca-line">
        <strong class="label">CA:</strong>
        <span id="caText" class="value">
          just launched
        </span>
      </div>
    </div>
  </header>

  <main>
    <!-- HERO: flicker line -->
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
          <!-- KARTA 01 -->
<figure class="card">
  <div class="media">
    <img src="/assets/logo/sub1.png" alt="subject 01" />
    <video muted playsinline loop preload="metadata" src="/assets/logo/sub1.mp4"></video>
  </div>
  <figcaption>
    <h3>subject 01</h3>
    <p>cause of disappearance: found whispering at the vault door.</p>
  </figcaption>
</figure>

          <!-- KARTA 02 -->
          <figure class="card">
            <div class="media">
              <img src="/assets/logo/sub2.png" alt="subject 02" />
              <video muted playsinline loop preload="metadata" src="/assets/logo/sub22.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 02</h3>
              <p>last seen: staring at a blank screen; eyes kept moving.</p>
            </figcaption>
          </figure>

          <!-- KARTA 03 -->
          <figure class="card">
            <div class="media">
              <img src="REPLACE_IMAGE_URL_3.jpg" alt="subject 03" />
              <video muted playsinline loop preload="metadata" src="REPLACE_VIDEO_URL_3.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 03</h3>
              <p>cause of silence: hands on the glass, breath on the other side.</p>
            </figcaption>
          </figure>

          <!-- KARTA 04 -->
          <figure class="card">
            <div class="media">
              <img src="REPLACE_IMAGE_URL_4.jpg" alt="subject 04" />
              <video muted playsinline loop preload="metadata" src="REPLACE_VIDEO_URL_4.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 04</h3>
              <p>cause of silence: no reflection in the mirror.</p>
            </figcaption>
          </figure>

          <!-- KARTA 05 -->
          <figure class="card">
            <div class="media">
              <img src="REPLACE_IMAGE_URL_5.jpg" alt="subject 05" />
              <video muted playsinline loop preload="metadata" src="REPLACE_VIDEO_URL_5.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 05</h3>
              <p>last seen: whispering names that were never his.</p>
            </figcaption>
          </figure>

          <!-- KARTA 06 -->
          <figure class="card">
            <div class="media">
              <img src="REPLACE_IMAGE_URL_6.jpg" alt="subject 06" />
              <video muted playsinline loop preload="metadata" src="REPLACE_VIDEO_URL_6.mp4"></video>
            </div>
            <figcaption>
              <h3>subject 06</h3>
              <p>cause of disappearance: followed shadows too far.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- LINKI -->
    <section id="links" class="section compact">
      <div class="container actions">
        <a class="btn" href="https://twitter.com/vaultversecoin" target="_blank" rel="noopener noreferrer">
          Twitter Community
        </a>
        <a class="btn ghost" href="https://pump.fun" target="_blank" rel="noopener noreferrer">
          pump.fun coin
        </a>
      </div>
    </section>
  </main>
</body>

		`,
	})
})
