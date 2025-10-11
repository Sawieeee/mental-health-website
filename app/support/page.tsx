"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { validateMessageContent } from "../utils/badWordsFilter";
import "./SupportPage.css"; // link to your CSS file

type Post = {
  id: number;
  user: string;
  message: string;
  timestamp: string;
};

export default function SupportPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Fix hydration error by initializing posts on client side only
  useEffect(() => {
    setIsClient(true);
    setPosts([
      {
        id: 1,
        user: "Jane Doe",
        message: "I've been feeling anxious lately, but meditation helps me a lot.",
        timestamp: new Date().toLocaleString(),
      },
      {
        id: 2,
        user: "John Smith",
        message: "Remember, it's okay to take breaks and care for yourself 💙",
        timestamp: new Date().toLocaleString(),
      },
    ]);
  }, []);

  // Filtered posts based on search term
  const filteredPosts = useMemo(() => {
    if (!filterTerm.trim()) return posts;
    
    const searchTerm = filterTerm.toLowerCase();
    return posts.filter(post => 
      post.message.toLowerCase().includes(searchTerm) || 
      post.user.toLowerCase().includes(searchTerm)
    );
  }, [posts, filterTerm]);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error
    
    if (!newMessage.trim()) {
      setErrorMessage("Please enter a message before posting.");
      return;
    }

    // Validate message content for bad words and concerning content
    const validation = validateMessageContent(newMessage);
    
    if (!validation.isValid) {
      setErrorMessage(validation.message || "Message contains inappropriate content.");
      return;
    }

    const newPost: Post = {
      id: posts.length + 1,
      user: userName.trim() || "Anonymous",
      message: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setNewMessage("");
    setUserName("");
    setErrorMessage(""); // Clear error on successful post
  };

  // Don't render until client-side to avoid hydration errors
  if (!isClient) {
    return (
      <div className="support-page">
        <h1 className="support-title">Support Groups</h1>
        <p className="support-description">
          Join the discussion, share your experiences, and support each other in a safe environment.
        </p>
        <div style={{textAlign: 'center', padding: '2rem'}}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="support-page">
      <h1 className="support-title">Support Groups</h1>
      <p className="support-description">
        Join the discussion, share your experiences, and support each other in a safe environment.
      </p>
      <Image src="/images/support-illustration.svg" alt="Support" width={640} height={200} style={{margin: '0 auto 1.5rem'}} />

      {/* Filter Messages */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="🔍 Search messages by keyword or username..."
          className="filter-input"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />
      </div>

      {/* Post Form */}
      <form onSubmit={handlePost} className="post-form">
        {errorMessage && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            <span>{errorMessage}</span>
          </div>
        )}
        <input
          type="text"
          placeholder="Your name (optional - will show as Anonymous if empty)"
          className="name-input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          placeholder="Share your thoughts or experiences..."
          className="post-textarea"
          rows={3}
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
            // Clear error when user starts typing
            if (errorMessage) setErrorMessage("");
          }}
        ></textarea>
        <button type="submit" className="post-button">
          Post Message
        </button>
      </form>

      {/* Posts Feed */}
      <div className="posts-feed">
        {filteredPosts.length === 0 && filterTerm.trim() ? (
          <div className="no-results">
            <p>No messages found matching "{filterTerm}"</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <span className="post-user">{post.user}</span>
                <span className="post-time">{post.timestamp}</span>
              </div>
              <p className="post-message">{post.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
