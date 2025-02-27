import styled from "styled-components";

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background-color: ${({ theme }) => theme.basePost};
  border-radius: 10px;
  padding: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  span {
    margin-top: 5px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.baseSpan};
    display: inline;
  }

  h2 {
    max-width: 283px;
    font-size: 1.25rem;
    line-height: 160%;
  }
`;

export const CardContent = styled.div`
  margin-top: 1.5rem;
`;
