import {html} from "lit"
import {view} from "@e280/sly"

import {styles} from "./style.css"

export const Hero = view(use => () => {
	use.styles(styles)

	return html`
		<header></header>
	`
})
