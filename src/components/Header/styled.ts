import styled from "styled-components";
import background from "../../assets/background.png";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 18.5rem;

  background-color: ${({ theme }) => theme.baseProfile};

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  img {
    margin-top: 64px;
    width: 9.25rem;
    height: 6.125rem;
  }
`;
