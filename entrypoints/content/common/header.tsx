import React from 'react';

export default function Header({
  title,
  count,
  onRemove,
}: {
  title: string;
  count: number;
  onRemove: () => void;
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '16px',
      marginBottom: '16px'
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>
        {title} ({count})
      </h2>

      <button
        onClick={onRemove}
        style={{
          background: 'none',
          border: 'none',
          color: '#9ca3af',
          cursor: 'pointer',
          padding: '4px'
        }}
        aria-label="Remove"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}