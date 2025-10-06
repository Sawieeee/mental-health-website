"use client";

import { useState } from "react";
import "./SupportPage.css"; // link to your CSS file

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
      user: "Anonymous",
      message: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setNewMessage("");
  };

  return (
    <div className="support-page">
      <h1 className="support-title">Support Groups</h1>
      <p className="support-description">
        Join the discussion, share your experiences, and support each other in a safe environment.
      </p>

      {/* Post Form */}
      <form onSubmit={handlePost} className="post-form">
        <textarea
          placeholder="Share your thoughts or experiences..."
          className="post-textarea"
          rows={3}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="post-button">
          Post Message
        </button>
      </form>

      {/* Posts Feed */}
      <div className="posts-feed">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <span className="post-user">{post.user}</span>
              <span className="post-time">{post.timestamp}</span>
            </div>
            <p className="post-message">{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
