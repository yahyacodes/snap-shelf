"use client";
import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/snippets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Snippet submitted successfully");
    } else {
      alert("Error submitting snippet");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <textarea
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
          className="textarea textarea-bordered w-full"
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
