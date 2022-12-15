import { useEffect, useRef, useState } from 'react'
import DATA from './data.json'
import {
  sortArray,
  fullTableHeader,
  collapsedTableHeader,
  aggregatedDataForCollapsedView,
} from './utils'
import classes from './StocksPortfolio.module.css'
import Toggle from './Toggle'
import AggregatedTable from './AggregatedTable'
import CollapsedTable from './CollapsedTable'
import FullTable from './FullTable'
import Card from './Card'

export default function StocksPortfolio() {
  const [fullData, setFullData] = useState(DATA)
  const [aggregatedData, setAggregatedData] = useState([])
  const [isFullTableView, setIsFullTableView] = useState(false)
  const [selectedData, setSelectedData] = useState([])
  const [inverted, setInverted] = useState(true)
  const [activeSymbol, setActiveSymbol] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const totalProfit = useRef(
    DATA.reduce((acc, curr) => acc + curr['Taxable Profit'], 0).toFixed(2)
  )

  useEffect(() => {
    let result = Object.values(aggregatedDataForCollapsedView())
    setAggregatedData(result)
    setTimeout(onCellClick({ key: 'Symbol', value: result[0]['Symbol'] }))
  }, [])

  const onToggleChange = () => setIsFullTableView((prev) => !prev)

  const onThemeChange = () => setIsDarkMode((prev) => !prev)

  const onSort = (key, from) => {
    return () => {
      if (from === 'aggregatedData') {
        setAggregatedData((prev) =>
          sortArray(
            prev,
            inverted,
            key,
            ['int', 'float'].includes(collapsedTableHeader[key])
          )
        )
      } else if (from === 'selectedData') {
        setSelectedData((prev) =>
          sortArray(
            prev,
            inverted,
            key,
            ['int', 'float'].includes(fullTableHeader[key])
          )
        )
      } else {
        setFullData((prev) =>
          sortArray(
            prev,
            inverted,
            key,
            ['int', 'float'].includes(fullTableHeader[key])
          )
        )
      }
      setInverted((prev) => !prev)
    }
  }

  const onCellClick = ({ key, value }) => {
    return () => {
      if (key === 'Symbol') {
        setActiveSymbol(value)
        setSelectedData(fullData.filter((row) => row['Symbol'] === value))
      }
    }
  }

  return (
    <div
      className={`${classes.container} ${
        isDarkMode ? classes.darkMode : classes.lightMode
      }`}
    >
      <div className={classes.cardContainer}>
        <div>
          <div className={classes.cardContainer}>
            {activeSymbol ? (
              <Card
                label={activeSymbol}
                value={DATA.filter((curr) => curr['Symbol'] === activeSymbol)
                  .reduce((acc, curr) => acc + curr['Taxable Profit'], 0)
                  .toFixed(2)}
                valueType="number"
              />
            ) : (
              <div />
            )}
            <Card
              label="Combined Profit"
              value={totalProfit.current}
              valueType="number"
              className={classes.textAlignRight}
            />
          </div>
          {activeSymbol && (
            <AggregatedTable data={selectedData} onSort={onSort} />
          )}
        </div>
        <div>
          {isFullTableView ? (
            <FullTable
              data={fullData}
              onSort={onSort}
              onCellClick={onCellClick}
              activeSymbol={activeSymbol}
            />
          ) : (
            <CollapsedTable
              data={aggregatedData}
              onSort={onSort}
              onCellClick={onCellClick}
              activeSymbol={activeSymbol}
            />
          )}
          <div className={classes.grid3}>
            <Toggle
              onToggleChange={onToggleChange}
              left="Collapsed View"
              right="Full View"
            />
            <Toggle onToggleChange={onThemeChange} left="🌙" right="🌞" />
          </div>
        </div>
      </div>
    </div>
  )
}
