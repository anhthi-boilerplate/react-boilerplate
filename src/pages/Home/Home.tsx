import { HomeWrapper } from "./Home.styled";

import HeartSvg from "../../assets/icons/heart.svg";
import reactJsPng from "../../assets/images/reactjs.png";

const Home = () => {
  return (
    <HomeWrapper>
      <p>
        Welcome to webpack-ts-boilerplate repo! <HeartSvg />
      </p>
      <img src={reactJsPng} width="100px" />
    </HomeWrapper>
  );
};

export default Home;
