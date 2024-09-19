"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { NextAuthProvider } from "../Providers";

export default function SnippetForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCodeChange = (value) => {
    setFormData({
      ...formData,
      code: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/snippets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Snippet submitted successfully");
        // Optionally, reset form or redirect
      } else {
        alert("Error submitting snippet");
      }
    } catch (error) {
      console.error("Error submitting snippet:", error);
      alert("Error submitting snippet");
    }
  };

  return (
    <NextAuthProvider>
      <div className="container mx-auto p-36 min-h-screen">
        <div className="flex justify-center text-center">
          <h1 className="text-4xl mb-4 font-bold">Create Snippet</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields remain the same */}
          <div>
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label className="block">Code</label>
            <CodeMirror
              value={formData.code}
              height="600px"
              theme={dracula}
              extensions={[javascript()]}
              onChange={handleCodeChange}
            />
          </div>

          <div>
            <label className="block">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </NextAuthProvider>
  );
}
