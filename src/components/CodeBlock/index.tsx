import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Você pode trocar por outro tema

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre className="rounded-lg bg-gray-900 p-4 overflow-auto">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
