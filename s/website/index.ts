import {css, html} from "lit"
import {view} from "@e280/sly"


export const LandingPage = view(use => () => {
	use.styles(css`:host {
		background: #141110;
		width: 100%;
		display: block;
	}`)

	const sections = use.wake(() => use.shadow.querySelectorAll("section"))

	return html`
	`
})
