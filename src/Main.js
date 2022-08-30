import StyledLink from "./components/common/Link";
import Header from "./components/common/Header";
import Text from "./components/common/Text";
import "./index.css";

function UICard({ img, imageAlt, title, designedBy }) {
  return (
    <div className="thumbnailContainer">
      <img src={img} alt={imageAlt} className="thumbnailImage" />
      <div className="thumbnailContent">
        <Header className="mx-2">{title}</Header>
        <Text className="mx-2 my-1">By {designedBy}</Text>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div style={{ padding: 20 }}>
      <Header className="mb-3" style={{ fontSize: 32 }}>
        UI Sprint
      </Header>
      <StyledLink to="/e-commerce-app">
        <UICard
          title="Ecommerce App Concept"
          designedBy="Mehedi Hasan Rownock"
          designerURL="https://dribbble.com/Mehedi_Hasan"
          img="e-commerce-app.webp"
          imageAlt="e-commerce-app"
        />
      </StyledLink>
    </div>
  );
}
