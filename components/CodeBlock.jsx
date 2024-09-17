"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

const CodeBlock = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-4">
      {/* Code Block */}
      <pre className="p-4 bg-gray-900 text-gray-100 rounded overflow-auto">
        {code}
      </pre>

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
      >
        {copied ? (
          <Check className="w-4 h-4 text-warning" />
        ) : (
          <Clipboard className="w-4 h-4 text-warning" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
