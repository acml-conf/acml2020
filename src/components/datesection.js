import React from "react"

import DateWarning from "../components/datewarning"


// converting miliseconds to days
const dateNormalizer = 1000 * 3600 * 24

const todayTimestamp = new Date().getTime() / dateNormalizer

const isPassed = (date) => {
  const parsedDateTimestamp = Date.parse(date.split("-").pop()) / dateNormalizer

  if (todayTimestamp > parsedDateTimestamp + 1) {
    return true
  } else {
    return false
  }
}

const DateSection = ({name, events, showDeadlineWarning=true}) => {
  return <div css={{marginBottom: `20px`}}>
    { name && events.length > 0 &&
      <h3>{name}</h3>
    } <table css={{marginLeft: 0, marginBottom: 0}}>
      {
        events.map(e => {
          const eventPassed = e.forcePassed || isPassed(e.date)
          return <tr css={{
              listStyle: `none`,
              margin: 0,
              textDecoration: eventPassed ? `line-through`: `none`,
              color: eventPassed ? `#bbb`: `black`
            }}>
            <td width="250px">
              {e.date}
            </td>
            <td>
              <b>{e.event}</b>
            </td>
          </tr>
        })
      }
    </table>
    { showDeadlineWarning && <DateWarning/>}
  </div>
}

export default DateSection