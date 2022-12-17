import Text from '../common/Text'
import {
  HeaderText,
  MobileView,
  LandingPageTopHalf,
  NavigationContainer,
  UserIcon,
  LocationContainer,
  LocationImage,
} from './Components'

export default function App() {
  document.title = 'Ecommerce App Concept'
  return (
    <MobileView>
      <LandingPageTopHalf>
        <NavigationContainer>
          <img
            src="https://img.icons8.com/ios-filled/30/000000/long-arrow-left.png"
            alt="back-arrow"
          />
          <UserIcon />
        </NavigationContainer>
        <HeaderText>Hi, Jayraj.</HeaderText>
        <HeaderText>What are you looking for?</HeaderText>
        <LocationContainer>
          <LocationImage
            src="https://img.icons8.com/material-outlined/24/000000/near-me.png"
            alt="near-me"
          />
          <Text>New Jersey Center, Sherlock Road, New Jersey</Text>
        </LocationContainer>
      </LandingPageTopHalf>
    </MobileView>
  )
}
