import React from "react";
import Header from "../common/header";
import { IComment, IPost } from "../scripts/scrap";
import Search from "../comment/search";

// import './style.css'
import "@/entrypoints/popup/style.css";
interface CommentModal{
  post?:IPost | null;
  comments: IComment[];
  onRemove: () => void;
}

export default function CommentModal({ post, comments, onRemove }: CommentModal) {
  const displayComments = comments || [];

   const handleCommentClick =(c: IComment) => {
    if(c.permalink){
      window.open(c.permalink, "_blank" , "noopener,noreferrer");
    }
   };
  return (
    <div
     style={{ 
      width: '90%', maxWidth: '800px', maxHeight: '90vh', margin: 'auto', backgroundColor: '#111827', borderRadius: '12px', padding: '16px', color: 'white', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column',    overflow: 'hidden',
      scrollbarWidth: 'none',      
          msOverflowStyle: 'none'
           }}>

       <style>{`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
{/* NAYA SECTION: if u want to show on which post commnets are */}
      {/* {post && (
        <div style={{ 
          margin: '10px 16px 0 16px', 
          padding: '12px', 
          backgroundColor: '#1f2937', 
          borderRadius: '8px',
          borderLeft: '4px solid #fbbf24' // Highlight karne ke liye
        }}>
          <h2 style={{ fontSize: '16px', margin: '0 0 5px 0', color: '#fbbf24' }}>{post.title}</h2>
          <p style={{ fontSize: '13px', color: '#d1d5db', margin: 0 }}>{post.description}</p>
        </div>
      )} */}
      <Header title="Comments" count={displayComments.length} onRemove={onRemove} />
        <Search handleSearch={() => {}}/>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', marginTop: '10px' }}>
        {displayComments.length > 0 ? (
          displayComments.map((c) => (
            <div key={c.id} 
            onClick={()=> handleCommentClick(c)}
            style={{ padding: '16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#2a353d', marginBottom: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#9ca3af' }}>{c.author}</div>
              <p style={{ fontSize: '14px', margin: '8px 0' }}>{c.comments}</p>
              <div style={{ fontSize: '11px', color: '#fbbf24' }}>Score: {c.score}</div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>No comments found...</p>
        )}
      </div>
    </div>
  );
}