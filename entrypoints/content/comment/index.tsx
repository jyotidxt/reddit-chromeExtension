import React from "react";
import Header from "../common/header";
import { IComment } from "../scripts/scrap";

interface CommentModal{
  comments: IComment[];
  onRemove: () => void;
}

export default function CommentModal({ comments, onRemove }: CommentModal) {
  const displayComments = comments || [];

  return (
    <div style={{ width: '90%', maxWidth: '800px', maxHeight: '90vh', margin: 'auto', backgroundColor: '#111827', borderRadius: '12px', padding: '16px', color: 'white', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column',    overflow: 'hidden',
      scrollbarWidth: 'none',      
          msOverflowStyle: 'none' }}>

       <style>{`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>

      <Header title="Comments" count={displayComments.length} onRemove={onRemove} />
      
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', marginTop: '10px' }}>
        {displayComments.length > 0 ? (
          displayComments.map((c) => (
            <div key={c.id} style={{ padding: '16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#2a353d', marginBottom: '10px' }}>
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