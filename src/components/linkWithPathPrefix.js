import React from "react"

import { replacePathPrefixHTML } from "../utils";

const LinkWithPathPrefix = ({text, href}) => {
  return <a href={replacePathPrefixHTML(href)}>{text}</a>
}

export default LinkWithPathPrefix