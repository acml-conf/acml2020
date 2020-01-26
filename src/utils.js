import { withPrefix } from "gatsby"

export const replacePathPrefixHTML = (html) => {
    return html.replace(/pathPrefix::\/(.+?)/g, withPrefix("$1"))
}