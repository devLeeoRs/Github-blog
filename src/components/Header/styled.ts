import styled from "styled-components";
import background from "../../assets/background.png";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18.5rem;
  position: relative;

  background-color: ${({ theme }) => theme.baseProfile};

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
