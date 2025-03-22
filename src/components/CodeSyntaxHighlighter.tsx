import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeSyntaxHighlighterProps {
  code: string;
}

export function CodeSyntaxHighlighter({ code }: CodeSyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter language="json" style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
}
