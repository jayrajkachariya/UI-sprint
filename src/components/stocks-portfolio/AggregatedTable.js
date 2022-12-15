import { format } from 'date-fns'
import { fullTableHeader } from './utils'
import classes from './StocksPortfolio.module.css'

export default function AggregateTable({ data, onSort }) {
  return (
    <div className={`${classes.shortTable} ${classes.card}`}>
      <table>
        <thead>
          <tr>
            {Object.keys(fullTableHeader).map((key) => (
              <th key={key} onClick={onSort(key, 'selectedData')}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {data.map((row, _index) => (
            <tr
              key={_index}
              className={_index % 2 ? classes.tableRowActive : classes.tableRow}
            >
              {Object.keys(fullTableHeader).map((key, index) => (
                <td
                  key={`${key}_${index}`}
                  className={`${
                    ['int', 'float'].includes(fullTableHeader[key])
                      ? classes.textAlignRight
                      : classes.textAlignLeft
                  }
                      ${
                        key === 'Symbol'
                          ? classes.cursorPointer
                          : classes.cursorSelect
                      }
                      ${
                        fullTableHeader[key] === 'float' &&
                        !['Buy Value', 'Sell Value'].includes(key)
                          ? row[key].toFixed(2) > 0
                            ? classes.colorPositive
                            : row[key].toFixed(2) < 0
                            ? classes.colorNegative
                            : classes.colorNormal
                          : classes.colorNormal
                      }
                    `}
                >
                  {fullTableHeader[key] === 'float'
                    ? row[key].toFixed(2)
                    : fullTableHeader[key] === 'date'
                    ? format(new Date(row[key]), 'dd/MM/yyyy')
                    : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
