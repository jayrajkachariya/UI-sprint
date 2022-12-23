import Analytics from './components/Analytics'
import FullTable from './components/FullTable.js'

export default function ContentArea({
  activeIndex,
  data,
  onSort,
  onCellClick,
  activeSymbol,
  aggregatedData,
}) {
  switch (activeIndex) {
    case 0:
      return <Analytics aggregatedData={aggregatedData} />
    case 1:
      return (
        <FullTable
          data={data}
          onSort={onSort}
          onCellClick={onCellClick}
          activeSymbol={activeSymbol}
        />
      )
    default:
      return null
  }
}
