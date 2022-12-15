import classes from './StocksPortfolio.module.css'

export default function Toggle({ onToggleChange, left, right }) {
  return (
    <div className={`${classes.toggleContainer} ${classes.card}`}>
      <div className={classes.text}>{left}</div>
      <label className={classes.switch}>
        <input type="checkbox" onChange={onToggleChange} />
        <span className={`${classes.toggle} ${classes.round}`}></span>
      </label>
      <div className={classes.text}>{right}</div>
    </div>
  )
}
