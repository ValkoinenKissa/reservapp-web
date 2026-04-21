"use client";

import { cn } from "@/lib/utils";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import kotlin from "react-syntax-highlighter/dist/esm/languages/prism/kotlin";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Register Kotlin language
SyntaxHighlighter.registerLanguage("kotlin", kotlin);

type CodeBlockProps = {
  code: string;
  filename?: string;
  className?: string;
};

export function CodeBlock({ code, filename = "AuthService.kt", className }: CodeBlockProps) {
  return (
    <div className={cn("bg-[#282c34] w-full overflow-hidden rounded-xl border border-white/10 font-mono text-[13px] shadow-2xl", className)}>
      <div className="bg-[#21252b] flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-4">
            <div className="flex gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[11px] text-white/30 tracking-wider font-medium">{filename}</span>
        </div>
        <div className="flex gap-2">
            <div className="h-1 w-4 rounded-full bg-white/5" />
            <div className="h-1 w-1 rounded-full bg-white/5" />
        </div>
      </div>
      <div className="p-0 overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language="kotlin"
          style={oneDark}
          showLineNumbers={true}
          lineNumberStyle={{ 
            minWidth: "3.2em", 
            paddingRight: "1.5em", 
            color: "rgba(255,255,255,0.15)", 
            textAlign: "right",
            userSelect: "none"
          }}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            backgroundColor: "transparent",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
