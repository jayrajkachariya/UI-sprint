import styled from "styled-components";
import Header from "../common/Header";
import Text from "../common/Text";
import "../../index.css";

const Container = styled("div")`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e3e3e3;
`;

export default function PageNotFoundComponent() {
  return (
    <Container>
      <Header className="my-1 fontLarge">404</Header>
      <Text className="fontRegular">Uh Ohh!</Text>
      <Text className="fontMedium">There's nothing here!</Text>
    </Container>
  );
}
