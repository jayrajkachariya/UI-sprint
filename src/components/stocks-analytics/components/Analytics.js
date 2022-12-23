import { formatNumber } from '../utils'
import classes from '../StocksAnalytics.module.css'
import { Header } from './Header'
import { useState } from 'react'

function Card({ label, value, secondaryValue, valueType, className, onClick }) {
  return (
    <div className={`${classes.card} ${className}`} onClick={onClick}>
      <div className={classes.cardLabel}>{label}</div>
      {(value !== 0 || value) && (
        <div
          className={`${classes.cardValue} ${
            valueType === 'number'
              ? value > 0
                ? classes.colorPositive
                : value < 0
                ? classes.colorNegative
                : classes.colorNormal
              : classes.colorNormal
          }`}
        >
          {valueType === 'string' ? value : formatNumber(value)}
          {secondaryValue && (
            <Header className={classes.floatRight}>({secondaryValue})</Header>
          )}
        </div>
      )}
    </div>
  )
}

function RenderCards({ data, setShowFull, showFull }) {
  return (
    <>
      {data.map((data) => (
        <Card
          key={data.Symbol}
          label={data.Symbol}
          value={data.Profit}
          secondaryValue={`${data['Profit in %']} %`}
          valueType="number"
          className={classes.roundedCard}
        />
      ))}
      {!showFull && (
        <Card
          key={Symbol}
          label={'Show More'}
          value={'>'}
          valueType="string"
          className={`${classes.roundedCard} ${classes.cursorPointer}`}
          onClick={setShowFull}
        />
      )}
    </>
  )
}

function RenderSection({ header, data }) {
  const [showFull, setShowFull] = useState(false)
  return (
    <div>
      <Header>{header}</Header>
      <div className={classes.gridContainer}>
        <RenderCards
          data={showFull ? data : data.filter((x, i) => i < 10)}
          setShowFull={() => setShowFull(true)}
          showFull={showFull}
        />
      </div>
    </div>
  )
}

export default function Analytics({ aggregatedData }) {
  return (
    <div>
      <RenderSection
        header="Top Gainer"
        data={[...aggregatedData].reverse().filter(({ Profit }) => Profit > 0)}
      />
      <RenderSection
        header="Top Looser"
        data={aggregatedData.filter(({ Profit }) => Profit <= 0)}
      />
    </div>
  )
}
