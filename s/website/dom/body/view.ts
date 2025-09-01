import {html} from "lit"
import {view} from "@e280/sly"

import {styles} from "./style.css"

export const Body = view(use => () => {
	use.styles(styles)

	return html`
		<div></div>
	`
})
