import React from "react"

const DateSection = ({name, events, showDeadlineWarning=true}) => {
  return <div css={{marginBottom: `20px`}}>
    { name && events.length > 0 &&
      <h3>{name}</h3>
    }
    <ul css={{marginLeft: 0, marginBottom: 0}}>
      {
        events.map(e => {
          return <li css={{listStyle: `none`, margin: 0}}>{e.date}: <b>{e.event}</b></li>
        })
      }
    </ul>
    { showDeadlineWarning &&
      <div css={{fontSize: `0.8em`, marginTop: `10px`}}>
        ⚠️{` `}Deadlines are 23:59 Pacific Time (PST/PDT) for all dates.
      </div>
    }
  </div>
}

export default DateSection