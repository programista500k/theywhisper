import {css, html} from "lit"
import {view} from "@e280/sly"

import {Nav} from "./dom/nav/view.js"
import {Hero} from "./dom/hero/view.js"
import {Body} from "./dom/body/view.js"
import {Footer} from "./dom/footer/view.js"

export const LandingPage = view(use => () => {
	use.styles(css`:host {
		background: #141110;
		width: 100%;
	}`)

	const sections = use.wake(() => use.shadow.querySelectorAll("section"))

	return html`
		${Nav(sections)}
		${Hero()}
		${Body()}
		${Footer()}
	`
})
