import { useState } from 'react'
import classes from './Sheet.module.css'

export const Cell = ({ isSelected, content, id, onSelectCell }) => {
  return (
    <div
      className={`${isSelected ? classes.selectedCell : classes.cell} ${
        typeof content === 'number' ? classes.textRight : classes.textCenter
      }`}
      key={id}
      id={id}
      onClick={onSelectCell}
    >
      {content}
    </div>
  )
}

export const Row = ({
  selectedCellIndex,
  selectedRowIndex,
  currRowIndex,
  cellCounts,
  onSelectCell,
}) => {
  const cells = []
  for (let i = 0; i < cellCounts + 1; i++) {
    const columnIndex = String.fromCharCode(64 + i)
    cells.push(
      <Cell
        key={`cell_${i}`}
        isSelected={
          selectedCellIndex === i && selectedRowIndex === currRowIndex
        }
        content={
          !currRowIndex && i
            ? columnIndex
            : currRowIndex && !i
            ? currRowIndex
            : ''
        }
        onSelectCell={onSelectCell(i, currRowIndex)}
        id={`${columnIndex}${i}`}
      />
    )
  }
  return <div className={classes.row}>{cells}</div>
}

export default function Sheet({ rowCounts = 1000 }) {
  const [selectedCellIndex, setSelectedCellIndex] = useState(1)
  const [selectedRowIndex, setSelectedRowIndex] = useState(1)

  const onSelectCell = (column, row) => {
    return function () {
      setSelectedCellIndex(column)
      setSelectedRowIndex(row)
    }
  }

  let rows = []
  for (let i = 0; i < rowCounts + 1; i++) {
    rows.push(
      <Row
        selectedCellIndex={selectedCellIndex}
        selectedRowIndex={selectedRowIndex}
        currRowIndex={i}
        cellCounts={26}
        onSelectCell={onSelectCell}
        key={`row_${i}`}
      />
    )
  }
  return <div>{rows}</div>
}
