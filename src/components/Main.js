import classes from './Main.module.css'
import { lazy } from 'react'
const Catalogue = lazy(() => import('./common/Catalogue'))

const PROJECTS = [
  {
    link: '/online-learning-platform',
    title: 'Online Learning Platform',
    designedBy: 'Solomia Kravets 👽',
    designerURL: 'https://dribbble.com/solomiakr',
    designURL: 'https://dribbble.com/shots/16550027--online-learning-platform',
    img: 'online-learning-platform.webp',
    imageAlt: 'online-learning-platform',
  },
  {
    link: '/e-commerce-app',
    title: 'Ecommerce App Concept',
    designedBy: 'Mehedi Hasan Rownock',
    designerURL: 'https://dribbble.com/Mehedi_Hasan',
    designURL: 'https://dribbble.com/shots/7501261-Ecommerce-App-Concept',
    img: 'e-commerce-app.webp',
    imageAlt: 'e-commerce-app',
  },
  {
    link: '/stocks-portfolio',
    title: 'Stocks Portfolio',
    designedBy: 'Jayraj Kachariya',
    designerURL: 'https://dribbble.com/jayraj_kachariya',
    designURL: 'https://dribbble.com/shots/7501261-Ecommerce-App-Concept',
    img: 'stocks-portfolio.webp',
    imageAlt: 'stocks-portfolio',
  },
]

export default function Main() {
  function onVisitURL(URL) {
    return function () {
      window.open(URL)
    }
  }
  return (
    <div className={classes.p20}>
      <div className={classes.header}>UI tries...</div>
      <div className={classes.container}>
        {PROJECTS.map((project) => (
          <div className={classes.gridItem} key={project.imageAlt}>
            <Catalogue
              {...project}
              onVisitDesign={onVisitURL(project.designURL)}
              onVisitDesigner={onVisitURL(project.designerURL)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
