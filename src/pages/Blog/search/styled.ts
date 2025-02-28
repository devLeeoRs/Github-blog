import { styled } from "styled-components";

export const SearchContainer = styled.form`
  margin-top: 4.5rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.125rem;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.baseSpan};
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    margin-top: 0.75rem;
    padding: 0 0.75rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.baseBorder};
    background: ${({ theme }) => theme.baseInput};
    color: ${({ theme }) => theme.baseText};

    &::placeholder {
      color: ${({ theme }) => theme.baseLabel};
    }
  }
`;
