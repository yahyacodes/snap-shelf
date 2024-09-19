import CodeBlock from "../../components/CodeBlock";

// create a function to get the snippets
const getSnippets = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/snippets", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch snippets");
    }
    const data = await response.json();
    return { snippets: data }; // Ensure this is the correct structure
  } catch (error) {
    console.error("Error fetching snippets", error);
    return { snippets: [] }; // Return an object with an empty array
  }
};

const SnippetList = async () => {
  const { snippets } = await getSnippets(); // Destructure properly

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-center text-center">
        <h1 className="text-4xl mb-4 font-bold">Recent Snippets</h1>
      </div>
      <div className="space-y-4">
        {Array.isArray(snippets) && snippets.length > 0 ? ( // Ensure `snippets` is an array
          snippets.map((snippet) => (
            <div key={snippet._id} className="p-4 rounded">
              <h3 className="text-2xl font-semibold text-white">
                {snippet.title}
              </h3>
              <p>{snippet.description}</p>
              <CodeBlock code={snippet.code} language="javascript" />
              <p className="text-sm text-gray-400">
                Tags: {snippet.tags.join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p>No snippets found</p>
        )}
      </div>
    </div>
  );
};

export default SnippetList;
