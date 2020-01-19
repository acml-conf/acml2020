import React from "react"

const DateSection = ({name, events}) => {
  return <div>
    { name && events.length > 0 &&
      <h3>{name}</h3>
    }
    <ul css={{marginLeft: 0}}>
      {
        events.map(e => {
          return <li css={{listStyle: `none`, margin: 0}}>{e.date}: <b>{e.event}</b></li>
        })
      }
    </ul>
  </div>
}

export default DateSection