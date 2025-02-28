import { styled } from "styled-components";

export const PostContainer = styled.div`
  width: 54rem;
  margin: 0 auto;
`;

export const PostBox = styled.div`
  width: 54rem;
  height: 10.5rem;
  background-color: ${({ theme }) => theme.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;

  h1 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }
`;

export const PostButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.blue};
    font-weight: 700;
    cursor: pointer;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.baseSpan};
  }
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  p {
    margin-bottom: 1rem;
  }
  h2 {
    margin-top: 2rem;
    color: ${({ theme }) => theme.blue};
    font-size: 1rem;
  }

  pre {
    background-color: ${({ theme }) => theme.basePost};
    padding: 1rem;
    border-radius: 2px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;
