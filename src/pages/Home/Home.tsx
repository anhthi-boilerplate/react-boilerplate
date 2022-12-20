import HeartSvg from "src/assets/icons/heart.svg";
import pokemonPng from "src/assets/images/pokemon.png";
import { useAppDispatch, useAppSelector } from "src/core/hooks";

import { useGetPokemonByIndexQuery } from "./Home.api";
import { setPokemonIndex } from "./Home.slice";
import {
  MovingIndexButton,
  DescriptionMsg,
  HomeContainer,
  WelcomeMsg,
  MovingButtonWrapper,
} from "./Home.styled";

const Home = () => {
  const dispatch = useAppDispatch();
  const currentIndex = useAppSelector((state) => state.home.pokemonIndex);
  const { data, isFetching } = useGetPokemonByIndexQuery(currentIndex);

  const previousPokemon = () => {
    dispatch(setPokemonIndex(currentIndex - 1));
  };

  const nextPokemon = () => {
    dispatch(setPokemonIndex(currentIndex + 1));
  };

  /**
   * Render
   */

  const renderWelcomeAndDescriptionMsgs = () => {
    return (
      <>
        <WelcomeMsg data-testid="welcome-message">
          Welcome to webpack-ts-boilerplate repo! &nbsp;
          <HeartSvg />
        </WelcomeMsg>
        <DescriptionMsg>
          The app is running in port {process.env.PORT}
        </DescriptionMsg>
      </>
    );
  };

  const renderPokemonLogo = () => {
    return (
      <img src={pokemonPng} width="200px" alt="heart" data-testid="logo" />
    );
  };

  const renderMovingButtons = () => {
    return (
      <MovingButtonWrapper>
        <MovingIndexButton label="Previous Pokemon" onClick={previousPokemon} />
        <MovingIndexButton label="Next Pokemon" onClick={nextPokemon} />
      </MovingButtonWrapper>
    );
  };

  const renderPokemonPhoto = () => {
    if (isFetching) {
      return <p>Loading...</p>;
    }

    return <img src={data?.sprites?.front_shiny} alt={data?.species?.name} />;
  };

  return (
    <HomeContainer>
      {renderWelcomeAndDescriptionMsgs()}
      {renderPokemonLogo()}
      {renderMovingButtons()}
      {renderPokemonPhoto()}
    </HomeContainer>
  );
};

export default Home;
