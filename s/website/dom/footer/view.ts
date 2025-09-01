import {html} from "lit"
import {view} from "@e280/sly"

import {styles} from "../nav/style.css"

export const Footer = view(use => () => {
	use.styles(styles)

	return html`
		<footer></footer>
	`
})
