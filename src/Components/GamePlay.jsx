import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Score from "./Score";
import { useState } from "react";
import RollDice from "./RollDice";
import { Button } from "../Styled/button";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [current, setCurrent] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setRule] = useState(false);
  const generaterandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNum = generaterandom(1, 7);
    setCurrent((prev) => randomNum);

    if (!selected) {
      setError("You have not selected any Number");
      return;
    }

    if (selected === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }
    selected(undefined);
  };
   const resetScore = () =>{
    setScore(0);
   }
  return (
    <MainContainer>
      <div className="top_section">
        <Score score={score}></Score>
        <NumberSelector
          error={error}
          setError={setError}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <RollDice current={current} rollDice={rollDice}></RollDice>
      <div className="btns">
        <Button onClick={resetScore} className="Reset">Reset Score</Button>
        <Button onClick={() => setRule(prev=> !prev)}>
          {showRule ? "Hide " : "Show "}
          Rules</Button>
      </div>
     {showRule &&  <Rules></Rules> } 
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .Reset {
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover {
      background-color: black;
      border: 1px solid transparent;
      color: white;
      transition: 0.3s background ease-in;
    }
  }
`;
