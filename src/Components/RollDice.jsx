
import styled from "styled-components";

const RollDice = ({current , rollDice}) => {
  
  
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/Images/dice_${current}.png`} alt="One dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
