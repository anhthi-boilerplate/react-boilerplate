import HeartSvg from "assets/icons/heart.svg";
import reactJsPng from "assets/images/reactjs.png";
import Button from "components/Button";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <p data-testid="welcome-message">
        Welcome to webpack-ts-boilerplate repo! <HeartSvg />
      </p>
      <p>The app is running in port {process.env.PORT}</p>
      <img src={reactJsPng} width="100px" alt="heart" data-testid="logo" />
      <Button />
    </HomeWrapper>
  );
};

export default Home;
