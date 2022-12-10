import styled from 'styled-components'
import Header from '../common/Header'
import Text from '../common/Text'
import classes from '../../Index.module.css'

const Container = styled('div')`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e3e3e3;
`

export default function PageNotFoundComponent() {
  return (
    <Container>
      <Header className={[classes.my1, classes.fontLarge]}>404</Header>
      <Text className={classes.fontRegular}>Uh Ohh!</Text>
      <Text className={classes.fontMedium}>There's nothing here!</Text>
    </Container>
  )
}
