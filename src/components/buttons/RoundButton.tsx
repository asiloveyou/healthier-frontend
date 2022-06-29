import styled from "styled-components";
import { IButton } from "../../interfaces/component";

const Container = styled.section<{
  backgroundColor: string;
  outline: string;
  radius: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35rem;
  height: 5.2rem;

  background-color: ${({ backgroundColor }) => backgroundColor};

  border: 1px solid ${({ outline }) => outline};
  border-radius: ${({ radius }) => radius}rem;
`;
const ButtonText = styled.section<{ color: string }>`
  color: ${({ color }) => color};
`;

const RoundButton = ({
  outline,
  backgroundColor,
  color,
  text,
  radius,
}: IButton) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      outline={outline}
      radius={radius}
    >
      <ButtonText color={color}>{text}</ButtonText>
    </Container>
  );
};

export default RoundButton;
