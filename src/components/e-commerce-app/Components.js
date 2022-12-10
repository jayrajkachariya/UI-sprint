import styled from 'styled-components'

export const MobileView = styled('div')`
  height: 844px;
  width: 390px;
  border-radius: 48px;
  background: #fff;
  overflow: hidden;
`

export const AppContainer = styled('div')`
  height: 100vh;
  background: #ffcc00;
  padding: 40px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavigationContainer = styled('div')`
  padding: 40px 20px 20px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserIcon = styled('div')`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-image: url('profile_pic.svg');
  background-size: 50px;
`

export const LandingPageTopHalf = styled('div')`
  background: rgb(246, 246, 246);
`

export const LocationImage = styled('img')`
  /* filter: saturate(3); */
  /* filter: grayscale(100%); */
  /* filter: contrast(10%); */
  /* filter: brightness(-0.25); */
  /* filter: blur(3px); */
  filter: invert(60%);
  /* filter: sepia(100%); */
  /* filter: hue-rotate(180deg); */
  /* filter: opacity(50%); */
  margin-right: 8px;
`

export const LocationContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #b7b7b7;
  padding: 10px 18px;
`

export const HeaderText = styled('div')`
  padding: 0 20px;
  margin-bottom: 10px;
  font-size: 28px;
  font-family: 'Abel', sans-serif;
  color: #1e1e1e;
`
