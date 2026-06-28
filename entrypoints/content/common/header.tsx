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
    <div className="flex items-center justify-between p-4 bg-white bg-gray-900 border-b border-gray-200 shadow-sm rounded-t-lg">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        {title}
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
          ({count})
        </span>
      </h2>

      <button
        onClick={onRemove}
        className="p-2 transition-colors duration-200 rounded-full hover:bg-red-100 group"
        aria-label="Remove"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-500 group-hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}