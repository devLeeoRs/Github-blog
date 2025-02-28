import SyntaxHighlighter from "react-syntax-highlighter";
import { styled } from "styled-components";

export const SyntaxHighlighterStyled = styled(SyntaxHighlighter)`
  border-radius: 2px !important;
  padding: 1rem 1rem 2rem 1rem !important;
  background: ${({ theme }) => theme.basePost} !important;
  color: #fff !important;
`;
