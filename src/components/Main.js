import StyledLink from './common/Link'
import classes from './Main.module.css'
import { lazy } from 'react'
const Header = lazy(() => import('./common/Header'))
const Catalogue = lazy(() => import('./common/Catalogue'))

export default function Main() {
  return (
    <div className={classes.p20}>
      <Header className={[classes.mb3, classes.font32]}>UI Sprint</Header>
      <div className={classes.container}>
        <StyledLink to="/online-learning-platform">
          <Catalogue
            title="Online Learning Platform"
            designedBy="Solomia Kravets 👽"
            designerURL="https://dribbble.com/solomiakr"
            img="online-learning-platform.webp"
            imageAlt="online-learning-platform"
          />
        </StyledLink>
        <StyledLink to="/e-commerce-app">
          <Catalogue
            title="Ecommerce App Concept"
            designedBy="Mehedi Hasan Rownock"
            designerURL="https://dribbble.com/Mehedi_Hasan"
            img="e-commerce-app.webp"
            imageAlt="e-commerce-app"
          />
        </StyledLink>
      </div>
    </div>
  )
}
