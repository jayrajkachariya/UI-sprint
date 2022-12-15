import { formatNumber } from './utils'
import classes from './StocksPortfolio.module.css'

export default function Card({ label, value, valueType, className }) {
  return (
    <div className={`${classes.card} ${className}`}>
      <div className={classes.cardLabel}>{label}</div>
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
        {formatNumber(value)}
      </div>
    </div>
  )
}
