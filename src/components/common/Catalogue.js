import Header from './Header'
import Text from './Text'
import StyledLink from './StyledLink'
import classes from './Catalogue.module.css'

export default function Catalogue({
  img,
  imageAlt,
  title,
  designedBy,
  onVisitDesign,
  onVisitDesigner,
  link,
}) {
  return (
    <div className={classes.thumbnailContainer}>
      <StyledLink to={link}>
        <img src={img} alt={imageAlt} className={classes.thumbnailImage} />
      </StyledLink>
      <div className={classes.cardFooter}>
        <div className={classes.cardFooterText}>
          <StyledLink to={link}>
            <Header>{title}</Header>
          </StyledLink>
          <Text className={classes.secondaryHeader} onClick={onVisitDesigner}>
            By {designedBy}
          </Text>
        </div>
        <button onClick={onVisitDesign} className={classes.button}>
          <Text className={[classes.mx2, classes.my1]}>Visit Design</Text>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
