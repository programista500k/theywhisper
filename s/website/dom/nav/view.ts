import {html} from "lit"
import {view} from "@e280/sly"

import {styles} from "../hero/style.css"

export const Nav = view(use => (sections: NodeListOf<HTMLElement>) => {
	use.styles(styles)

	return html`
		<nav></nav>
	`
})
