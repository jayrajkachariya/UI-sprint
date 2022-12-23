import FileUpload from './components/FileUpload'
import { TABS } from './utils'
import classes from './StocksAnalytics.module.css'
import Toggle from './components/Toggle'

export default function LeftSideBar({
  activeIndex,
  setActiveIndex,
  setData,
  isDarkMode,
  onThemeChange,
}) {
  return (
    <div className={classes.leftSideBar}>
      <div>
        {TABS.map(({ name, icon }, i) => (
          <div
            key={name}
            onClick={setActiveIndex(i)}
            className={`${classes.tab} ${
              activeIndex === i && classes.activeTab
            }`}
          >
            <div>
              <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
              <span className={classes.tabText}>{name}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Toggle
          value={isDarkMode}
          onToggleChange={onThemeChange}
          right="🌙"
          left="🌞"
        />
        <div className={`${classes.tab} ${classes.activeTab}`}>
          <div>
            <span className="material-symbols-outlined">upload_file</span>
          </div>
          <div className={classes.tabText}>
            <FileUpload setData={setData} />
          </div>
        </div>
      </div>
    </div>
  )
}
