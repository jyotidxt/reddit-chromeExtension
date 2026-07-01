import React, { useState } from "react";
import Header from "../common/header";
import { IPost } from "../scripts/scrap";
import Search from "../comment/search";
// import './style.css';
import "@/entrypoints/popup/style.css";
interface PostModalProps {
  posts: IPost[];
  formData: any;
  onRemove: () => void;
}

export default function PostModal({ posts, formData, onRemove }: PostModalProps) {
  const displayPosts = posts || [];

  const handlePostClick = (post: IPost) => {
    if (post.link) {
      window.open(post.link, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div style={{
      width: '90%',
      maxWidth: '600px',
      maxHeight: '80vh',
      margin: 'auto',
      backgroundColor: '#1a1c1e',
      borderRadius: '16px',
      padding: '20px',
      border: 'none',
      color: 'white',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
      <style>{`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
      <div style={{ borderBottom: 'none' }}>
        <Header title="Posts" count={displayPosts.length} onRemove={onRemove} />
        <Search handleSearch={() => {}}/>
      </div>

      {/*  Container */}
      <div style={{
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        overflowY: 'auto',
        flexGrow: 1,
        paddingRight: '10px'
      }}>
        {displayPosts.length > 0 ? (
          displayPosts.map((post) => (
            <div key={post.id}
              onClick={() => handlePostClick(post)}
              style={{
                backgroundColor: '#2a353d',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #4b5563',
              }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', color: '#9ca3af' }}>
                {post.tag}
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '8px 0' }}>
                {post.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '12px' }}>
                {post.description}
              </p>

              <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid #4b5563', paddingTop: '8px' }}>
                <span style={{ fontSize: '12px', color: '#fbbf24' }}>Score: {post.score || 0}</span>
                <span style={{ fontSize: '12px', color: '#34d399' }}>Comments: {post.comments || 0}</span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#9ca3af' }}>
            No posts found...
          </p>
        )}
      </div>
    </div>
  );
}