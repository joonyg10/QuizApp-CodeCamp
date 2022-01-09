import React from "react";
import styled from "styled-components";
import { Card } from "../../styles/Card.styles";
import { Button } from "../../styles/Button.styles";
import { GAMESTATE } from "../../types/game.type";

interface IGameOver {
  score: number;
  setGameStatus: (gameState: GAMESTATE) => void;
}

const GameOverCard = (props: IGameOver) => {
  const { score, setGameStatus } = props;
  const comments = score >= 7 ? "awesome" : "try hard!";

  const restartTheGame = () => {
    setGameStatus(GAMESTATE.GAMESTART);
  };

  return (
    <GameOverBox>
      <h3>
        You've got {score} score {comments}
      </h3>
      <Button onClick={restartTheGame}>ReStart The Game</Button>
    </GameOverBox>
  );
};

export default GameOverCard;
const GameOverBox = styled(Card)``;
