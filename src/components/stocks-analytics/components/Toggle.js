import classes from '../StocksAnalytics.module.css'

export default function Toggle({ onToggleChange, left, right, value }) {
  return (
    <div className={`${classes.toggleContainer} ${classes.card}`}>
      <div className={classes.text}>{left}</div>
      <label className={classes.switch}>
        <input type="checkbox" onChange={onToggleChange} checked={value} />
        <span className={`${classes.toggle} ${classes.round}`}></span>
      </label>
      <div className={classes.text}>{right}</div>
    </div>
  )
}
