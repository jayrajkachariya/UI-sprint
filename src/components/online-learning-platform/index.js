import classes from './OnlineLearningPlatform.module.css'

export default function OnlineLearningPlatform(params) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.headerItem}>{`<codenow/>`}</div>
        </div>
        <div className={classes.headerRight}>
          <div className={classes.headerItem}>
            Courses{' '}
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div className={classes.headerItem}>
            Resource{' '}
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div className={classes.headerItem}>Community</div>
          <div className={classes.headerItem}>For business</div>
          <div className={classes.headerItem}>Contact</div>
          <div className={`${classes.headerItem} ${classes.mlauto}`}>
            Sign in
          </div>
        </div>
      </div>
      <div className={classes.contentArea}>
        <div className={classes.contentLeft}>
          <div className={classes.textLarge}>
            Learn how to code and build skills in{' '}
            <span
              className={`${classes.textLarge} ${classes.textBlue}`}
            >{`<programming/>`}</span>
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.textContent}>
            Because learning to code might be the easiest way to change your
            career.
          </div>
          <button className={classes.button}>Let's start coding</button>
        </div>
      </div>
      <div className={`${classes.colorStrip} ${classes.colorStrip1}`} />
      <div className={`${classes.colorStrip} ${classes.colorStrip2}`} />
      <div className={`${classes.colorStrip} ${classes.colorStrip3}`} />
      <div className={`${classes.colorStrip} ${classes.colorStrip4}`} />
    </div>
  )
}
