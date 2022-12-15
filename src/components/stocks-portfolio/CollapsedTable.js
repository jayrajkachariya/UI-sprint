import { format } from 'date-fns'
import { collapsedTableHeader } from './utils'
import classes from './StocksPortfolio.module.css'

export default function CollapsedTable({
  onSort,
  onCellClick,
  data,
  activeSymbol,
}) {
  return (
    <div className={`${classes.table} ${classes.card}`}>
      <table>
        <thead>
          <tr>
            {Object.keys(collapsedTableHeader).map((key) => (
              <th key={key} onClick={onSort(key, 'aggregatedData')}>
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
              {Object.keys(collapsedTableHeader).map((key, index) => (
                <td
                  key={`${key}_${index}`}
                  className={`${
                    ['int', 'float'].includes(collapsedTableHeader[key])
                      ? classes.textAlignRight
                      : classes.textAlignLeft
                  }
                      ${
                        key === 'Symbol'
                          ? classes.cursorPointer
                          : classes.cursorSelect
                      }
                      ${
                        key === 'Symbol' && row[key] === activeSymbol
                          ? classes.activeCell
                          : classes.inActiveCell
                      }
                      ${
                        collapsedTableHeader[key] === 'float' &&
                        !['Buy Value', 'Sell Value'].includes(key)
                          ? row[key].toFixed(2) > 0
                            ? classes.colorPositive
                            : row[key].toFixed(2) < 0
                            ? classes.colorNegative
                            : classes.colorNormal
                          : classes.colorNormal
                      }
                    `}
                  onClick={onCellClick({ key, value: row[key] })}
                >
                  {collapsedTableHeader[key] === 'float'
                    ? row[key].toFixed(2)
                    : collapsedTableHeader[key] === 'date'
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
