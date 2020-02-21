import React from "react"

import { withPrefix } from "gatsby"

const BeautifulLink = ({to, children, color=`black`, underLine=true}) => {
    return <a href={withPrefix(to)}
        css={{
            color: color,
            textDecoration: underLine ? `underline` : `none`,
            cursor: `pointer`,
            ':hover': {
                textDecoration: underLine ? `underline` : `none`,
            },
        }}
        >
        {children}
    </a>
}

export default BeautifulLink