import React from "react"

import { replacePathPrefixHTML } from "../utils";

const ImageWithPathPrefix = ({width, src}) => {
  return <img width={width} src={replacePathPrefixHTML(src)}/>
}

export default ImageWithPathPrefix