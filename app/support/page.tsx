"use client";

import { useState } from "react";

type Post = {
  id: number;
  user: string;
  message: string;
  timestamp: string;
};

export default function SupportPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Jane Doe",
      message: "I’ve been feeling anxious lately, but meditation helps me a lot.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      user: "John Smith",
      message: "Remember, it’s okay to take breaks and care for yourself 💙",
      timestamp: new Date().toLocaleString(),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    const newPost: Post = {
      id: posts.length + 1,
      user: "Anonymous", // later we can replace this with real logged-in user
      message: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Support Groups</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Join the discussion, share your experiences, and support each other in a safe environment.
      </p>

      {/* Post Form */}
      <form
        onSubmit={handlePost}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <textarea
          placeholder="Share your thoughts or experiences..."
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post Message
        </button>
      </form>

      {/* Posts Feed */}
      <div className="max-w-2xl mx-auto space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md border"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-blue-600">{post.user}</span>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
            </div>
            <p className="text-gray-800">{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
