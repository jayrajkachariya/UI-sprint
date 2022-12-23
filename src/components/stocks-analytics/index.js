import classes from './StocksAnalytics.module.css'
import LeftSideBar from './LeftSideBar'
import ContentArea from './ContentArea'
import { useEffect, useMemo, useState } from 'react'
import {
  aggregatedDataForCollapsedView,
  collapsedTableHeader,
  fullTableHeader,
  isEmpty,
  sortArray,
} from './utils'

export default function StocksAnalytics() {
  document.title = 'Stock Analytics..'
  const [activeIndex, setActiveIndex] = useState(0)
  const [data, setData] = useState([])
  const avtivateTabe = (tabIndex) => () => setActiveIndex(tabIndex)

  const [isFullTableView, setIsFullTableView] = useState(false)
  const [selectedData, setSelectedData] = useState([])
  const [inverted, setInverted] = useState(true)
  const [activeSymbol, setActiveSymbol] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true' ? true : false
  )

  const aggregatedData = useMemo(
    () =>
      sortArray(
        Object.values(aggregatedDataForCollapsedView(data)),
        true,
        'Profit in %',
        true
      ),
    [data]
  )

  useEffect(() => {
    if (!isEmpty(aggregatedData)) {
      setTimeout(
        onCellClick({ key: 'Symbol', value: aggregatedData[0]['Symbol'] })
      )
    }
  }, [aggregatedData])

  const onToggleChange = () => setIsFullTableView((prev) => !prev)

  const onThemeChange = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem('isDarkMode', !prev)
      return !prev
    })
  }

  const onSort = (key, from) => {
    return () => {
      setData((prev) =>
        sortArray(
          prev,
          inverted,
          key,
          ['int', 'float'].includes(fullTableHeader[key])
        )
      )
      setInverted((prev) => !prev)
    }
  }

  const onCellClick = ({ key, value }) => {
    return () => {
      if (key === 'Symbol') {
        setActiveSymbol(value)
        setSelectedData(data.filter((row) => row['Symbol'] === value))
      }
    }
  }

  return (
    <div
      className={`${classes.container} ${
        isDarkMode ? classes.darkMode : classes.lightMode
      }`}
    >
      <LeftSideBar
        activeIndex={activeIndex}
        setActiveIndex={avtivateTabe}
        setData={setData}
        isDarkMode={isDarkMode}
        onThemeChange={onThemeChange}
      />
      <div className={classes.contentContainer}>
        <ContentArea
          activeIndex={activeIndex}
          data={data}
          onSort={onSort}
          onCellClick={onCellClick}
          activeSymbol={activeSymbol}
          aggregatedData={aggregatedData}
        />
      </div>
    </div>
  )
}
