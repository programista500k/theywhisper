import {SocialCard} from "@e280/scute"
import {constants} from "../constants.js"

export const socialCard = (title: string): SocialCard => ({
	title,
	themeColor: "#6d63f2",
	siteName: "example.app",
	description: "example description",
	image: `https://${constants.domain}${constants.favicon}`,
})
