import {Link} from "gatsby"
import React, { Children } from "react"

const BeautifulLink = ({to, children, color=`black`}) => {
    return <a href={to}
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