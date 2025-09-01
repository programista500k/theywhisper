import {html, ssg} from "@e280/scute"
import {constants} from "./constants.js"
import {socialCard} from "./website/social-card.js"

export default ssg.page(import.meta.url, async orb => {
	const title = "Example"

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
<!-- INTRO WITH FACE -->
<div id="intro" aria-hidden="true">
  <div class="scan"></div>
  <!-- Podmień src na swój plik/URL -->
  <img src="https://i.postimg.cc/qRmy5nrr/unnamed.png" alt="loading face" />
</div>

<!-- BACKGROUND AUDIO (podmień na publiczny URL https) -->
<audio id="whispers" src="AUDIO_URL_HERE.mp3" loop></audio>

<!-- 1) THE OATH -->
<section id="oath" class="section">
  <div class="container">
    <h1>you are not supposed to be here.</h1>
    <p class="lead"><span class="flicker">this room was meant to stay dark.</span></p>
    <a class="proceed" href="#circle">PROCEED</a>
    <div class="note mono">press — or scroll — at your own risk</div>
  </div>
</section>

<!-- 2) THE CIRCLE -->
<section id="circle" class="section">
  <div class="container ascii">
    <div class="sigils">△  ◼  ✝  ◯  ☍  ⌘  ☌</div>
    <h1>the ritual has started.</h1>
    <p class="lead mono"><span id="typing"></span><span class="caret"></span></p>
  </div>
</section>

<!-- 3) THE WHISPERS -->
<section id="whispersSection" class="section">
  <div class="whisper-cloud" id="cloud">ASCEND</div>
  <div class="container">
    <h1>do not listen to the walls.</h1>
    <p class="lead">they keep everything you say. and repeat it when you sleep.</p>
  </div>
</section>

<!-- 4) THE OFFERING -->
<section id="offering" class="section">
  <div class="container">
    <h1>the offering</h1>
    <div class="terminal mono" id="term"></div>
    <p class="lead">the gate measures what you have. then opens anyway.</p>
  </div>
</section>

<!-- 5) THE DESCENT -->
<section id="descent" class="section">
  <div class="container">
    <h1 class="pulse">welcome to vaultverse</h1>
    <p class="lead">we were waiting.</p>
    <div class="note mono">there is no way back, only deeper links.</div>
  </div>
</section>

		`,
	})
})
