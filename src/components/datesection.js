import React from "react"

import DateWarning from "../components/datewarning"

const DateSection = ({name, events, showDeadlineWarning=true}) => {
  return <div css={{marginBottom: `20px`}}>
    { name && events.length > 0 &&
      <h3>{name}</h3>
    } <table css={{marginLeft: 0, marginBottom: 0}}>
      {
        events.map(e => {
          return <tr css={{listStyle: `none`, margin: 0}}>
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