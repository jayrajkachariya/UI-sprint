import classes from '../StocksAnalytics.module.css'

export function Header({ children, className }) {
  return <div className={`${classes.header} ${className}`}>{children}</div>
}
