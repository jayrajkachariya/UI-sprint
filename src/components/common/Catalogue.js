import Header from './Header'
import Text from './Text'
import classes from '../../Index.module.css'

export default function Catalogue({ img, imageAlt, title, designedBy }) {
  return (
    <div className={classes.thumbnailContainer}>
      <img src={img} alt={imageAlt} className={classes.thumbnailImage} />
      <div className={classes.thumbnailContent}>
        <Header className={classes.mx2}>{title}</Header>
        <Text className={[classes.mx2, classes.my1]}>By {designedBy}</Text>
      </div>
    </div>
  )
}
