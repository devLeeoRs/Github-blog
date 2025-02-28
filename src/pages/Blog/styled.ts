import styled from "styled-components";

export const BlogContainer = styled.main`
  width: 54rem;
  margin: 0 auto;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  padding: 2rem 2.5rem;
  gap: 2rem;
  border-radius: 10px;
  width: 100%;
  background: ${(props) => props.theme.baseProfile};
  margin-top: -5.5rem;
  position: relative;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }
`;

export const ProfileInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    font-weight: 700;
    color: ${({ theme }) => theme.blue};
    cursor: pointer;
  }
`;

export const ProfileBiography = styled.div`
  height: 3.125rem;
  margin-top: 0.5rem;
  line-height: 160%;
  color: ${({ theme }) => theme.baseText};
`;

export const ProfileInfo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.baseLabel};
    }
  }
`;

export const CardContainer = styled.main`
  margin: 3rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-rows: 2rem;
`;
