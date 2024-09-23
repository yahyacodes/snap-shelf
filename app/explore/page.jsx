import React from "react";
import CodeBlock from "../../components/CodeBlock";
const getSnippets = async () => {
  try {
    const res = await fetch("/api/snippets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch snippets");
    }

    const data = await res.json();
    return { snippets: data.snippets }; // Ensure you return an object with `snippets`
  } catch (error) {
    console.log("Error loading Snippets", error);
    return { snippets: [] }; // Return an empty array in case of an error
  }
};

const SnippetsList = async () => {
  const { snippets } = await getSnippets();
  console.log(snippets);

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-center text-center">
        <h1 className="text-4xl mb-4 font-bold">Recent Snippets</h1>
      </div>
      <div className="space-y-4">
        {snippets.map((snippet, idx) => (
          <div key={idx} className="p-4">
            <div>
              <h2 className="font-bold text-2xl">{snippet.title}</h2>
              <div>{snippet.description}</div>
              <CodeBlock code={snippet.code} />
              <p className="text-sm text-gray-400">
                Tags: {snippet.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnippetsList;
