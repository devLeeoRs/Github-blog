import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SyntaxHighlighterStyled } from "./styled";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  return (
    <SyntaxHighlighterStyled language={language} style={atomOneDark}>
      {code}
    </SyntaxHighlighterStyled>
  );
}
