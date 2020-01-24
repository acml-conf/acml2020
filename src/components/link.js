import React from "react"

import { withPrefix } from "gatsby"

const BeautifulLink = ({to, children, color=`black`}) => {
    return <a href={withPrefix(to)}
        css={{
            color: color,
            textDecoration: `none`,
            cursor: `pointer`,
            ':hover': {
                textDecoration: `underline`
            }
        }}
        >
        {children}
    </a>
}

export default BeautifulLink