// import { useState } from "react";
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// // import Markdown from "react-markdown"
// import Header from "../common/header";
// export default function CommentModal({
//   posts,
//   comments,
//   onRemove,
// }: {
//   posts: [];
//   comments:any;
//   onRemove: () => void;
// }) {
//   const { formData } = useFormData();
//   const [loading, setLoading] = useState(false);

//   const commentData = [
//     { id: 1, author: "user123", comment: "This is fantastic sd article I learned so much.", score: 5 },
//      { id: 2, author: "user123", comment: "This is fantastic sd article I learned so much.", score: 19 },
//       { id: 3, author: "user123", comment: "This is fantastic sd article I learned so much.", score:6 },
//         { id: 4, author: "user123", comment: "This is fantastic sd article I learned so much.", score:16 },

//   ];

//   return (
  
//     <div className="dark bg-gray-900 w-[7000px]" 
//     // style={{
//     //   width: '700px',
//     //   backgroundColor: '#1a1c1e',
//     //   borderRadius: '16px',
//     //   padding: '20px',
//     //   border: '1px solid #374151',
//     //   color: 'white',
//     //   fontFamily: 'sans-serif'
//     // }}
//     >
//         <div id="reddit-modal"
//         className="bg-card rounded-lg shadow-xl w-full max-w-3xl h-233">
//       <Header title="comments" count={commentData.length} onRemove={onRemove} />

// {loading && (
//   <p className="text-center text-white text-3xl">Loading...</p>
// )}
//       {/* Posts List container */}
//       <div className="overflow-y-auto p-4">
//         <Markdown>{
//             ## Hello World
//             This is a simple markdown example.
//             - Item 1
//             - Item 2
//             - Item 3
// }
//   </Markdown>
// </div>
      
//           <div className="px-2 flex-1 overflow-auto">
//             {commentData?.map((comment) =>{
//                 <div className="m-3 p-4 rounded-lg border border-border"
//                 key={comment.id}>
// <div className="absolute top-0 right-0 w-24 opacity ">
// <div>
//     <div>
// <span>{comment.quthor}</span>
//     </div>
//     <p>{comment.comment}</p>
//     <div>
//         <span>{comment.score}</span>
//     </div>
//     </div>
// </div>

           
//             })}
//             </div>
           
     
//   );
// }

import { useState } from "react";
import { useFormData } from "@/entrypoints/hooks/useFormData";
import Header from "../common/header";

export default function CommentModal({
  onRemove,
}: {
  posts?: [];
  comments?: any;
  onRemove: () => void;
}) {
  const [loading] = useState(false);

  const commentData = [
    { id: 1, author: "user123", comment: "This is a fantastic article, I learned so much.", score: 5 },
    { id: 2, author: "user456", comment: "Really insightful points, thanks for sharing!", score: 19 },
    { id: 3, author: "dev_guru", comment: "Great explanation of React hooks.", score: 6 },
    { id: 4, author: "react_fan", comment: "Super helpful, keep it up!", score: 16 },
  ];

  return (
    <div style={{
      width: '600px',
      backgroundColor: '#1a1c1e',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid #374151',
      color: 'white',
      fontFamily: 'sans-serif',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}>
      <Header title="Comments" count={commentData.length} onRemove={onRemove} />

      {loading && (
        <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>
      )}

      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '400px', overflowY: 'auto' }}>
        {commentData.map((comment) => (
          <div key={comment.id} style={{
            backgroundColor: '#2a353d',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #4b5563',
            position: 'relative'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', marginBottom: '4px' }}>
              {comment.author}
            </div>
            <p style={{ fontSize: '14px', color: '#e5e7eb', marginBottom: '8px', lineHeight: '1.4' }}>
              {comment.comment}
            </p>
            <div style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 'bold' }}>
              {comment.score} Points 🔼
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}