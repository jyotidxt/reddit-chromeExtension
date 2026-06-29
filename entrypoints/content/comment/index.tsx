// import { useState } from "react";
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import Markdown from "react-markdown";
// import Header from "../common/header";

// export default function CommentModal({
//   posts,
//   comments,
//   onRemove,
// }: {
//   posts?: any;
//   comments?: any;
//   onRemove: () => void;
// }) {
//   const { formData } = useFormData();
//   const [loading, setLoading] = useState(false);

//   const commentData = [
//     { id: 1, author: "user123", comment: "This is a fantastic article, I learned so much.", score: 5 },
//     { id: 2, author: "user123", comment: "Really insightful points, thanks for sharing!", score: 19 },
//     { id: 3, author: "user123", comment: "Great explanation of React hooks.", score: 6 },
//     { id: 4, author: "user123", comment: "Super helpful, keep it up!", score: 16 },
//   ];

//   const markdownText = "## Hello World\n- Item 1\n- Item 2\n- Item 3";

//   return (
//     <div style={{
//       width: '100%',
//       maxWidth: '800px', 
//       margin: '0 auto',
//       backgroundColor: '#111827',
//       borderRadius: '12px',
//       padding: '16px',
//       boxSizing: 'border-box',
//       fontFamily: 'sans-serif'
//     }}>
//       <div id="reddit-modal" style={{
//         backgroundColor: '#1f2937',
//         borderRadius: '8px',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         height: '80vh' // Limits height to 80% of screen height
//       }}>
        
//         <Header title="comments" count={commentData.length} onRemove={onRemove} />

//         {loading && (
//           <p style={{ textAlign: 'center', color: 'white', padding: '20px' }}>Loading...</p>
//         )}

//         {/* Scrollable Area */}
//         <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
//           {/* Markdown Section */}
//           <div style={{ color: '#d1d5db', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>
//             <Markdown>{markdownText}</Markdown>
//           </div>

//           {/* Comments List */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             {commentData.map((comment) => (
//               <div key={comment.id} style={{
//                 padding: '16px',
//                 borderRadius: '8px',
//                 border: '1px solid #374151',
//                 backgroundColor: '#2a353d',
//                 position: 'relative'
//               }}>
//                 <div style={{ fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>
//                   {comment.author}
//                 </div>
//                 <p style={{ fontSize: '14px', color: '#e5e7eb', margin: '0 0 8px 0' }}>
//                   {comment.comment}
//                 </p>
//                 <div style={{ fontSize: '12px', color: '#60a5fa' }}>
//                   {comment.score} Points
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ANOTHER UI 
// // import { useState } from "react";
// // import { useFormData } from "@/entrypoints/hooks/useFormData";
// // import Header from "../common/header";

// // export default function CommentModal({
// //   onRemove,
// // }: {
// //   posts?: [];
// //   comments?: any;
// //   onRemove: () => void;
// // }) {
// //   const [loading] = useState(false);

// //   const commentData = [
// //     { id: 1, author: "user123", comment: "This is a fantastic article, I learned so much.", score: 5 },
// //     { id: 2, author: "user456", comment: "Really insightful points, thanks for sharing!", score: 19 },
// //     { id: 3, author: "dev_guru", comment: "Great explanation of React hooks.", score: 6 },
// //     { id: 4, author: "react_fan", comment: "Super helpful, keep it up!", score: 16 },
// //   ];

// //   return (
// //     <div style={{
// //       width: '600px',
// //       backgroundColor: '#1a1c1e',
// //       borderRadius: '16px',
// //       padding: '20px',
// //       border: '1px solid #374151',
// //       color: 'white',
// //       fontFamily: 'sans-serif',
// //       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
// //     }}>
// //       <Header title="Comments" count={commentData.length} onRemove={onRemove} />

// //       {loading && (
// //         <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>
// //       )}

// //       <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '400px', overflowY: 'auto' }}>
// //         {commentData.map((comment) => (
// //           <div key={comment.id} style={{
// //             backgroundColor: '#2a353d',
// //             padding: '16px',
// //             borderRadius: '12px',
// //             border: '1px solid #4b5563',
// //             position: 'relative'
// //           }}>
// //             <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', marginBottom: '4px' }}>
// //               {comment.author}
// //             </div>
// //             <p style={{ fontSize: '14px', color: '#e5e7eb', marginBottom: '8px', lineHeight: '1.4' }}>
// //               {comment.comment}
// //             </p>
// //             <div style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 'bold' }}>
// //               {comment.score} Points 🔼
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// new ui 

// import { useState } from "react";
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import Markdown from "react-markdown";
// import Header from "../common/header";

// export default function CommentModal({ onRemove }: { onRemove: () => void }) {
//   const { formData } = useFormData();
//   const [loading, setLoading] = useState(false);

//   const commentData = [
//     { id: 1, author: "user123", comment: "This is a fantastic article, I learned so much.", score: 5 },
//     { id: 2, author: "user456", comment: "Really insightful points, thanks for sharing!", score: 19 },
//     { id: 3, author: "dev_guru", comment: "Great explanation of React hooks.", score: 6 },
//     { id: 4, author: "react_fan", comment: "Super helpful, keep it up!", score: 16 },
//   ];

//   const markdownText = "## Hello World\n- Item 1\n- Item 2\n- Item 3";

//   return (
//     <div style={{ width: '90%', maxWidth: '800px', margin: 'auto', backgroundColor: '#111827', borderRadius: '12px', padding: '16px', color: 'white', fontFamily: 'sans-serif' }}>
//       <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '80vh' }}>
//         <Header title="comments" count={commentData.length} onRemove={onRemove} />
//         {loading && <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>}
        
//         <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
//           <div style={{ color: '#d1d5db', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>
//             <Markdown>{markdownText}</Markdown>
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             {commentData.map((comment) => (
//               <div key={comment.id} style={{ padding: '16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#2a353d', position: 'relative' }}>
//                 <div style={{ fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>{comment.author}</div>
//                 <p style={{ fontSize: '14px', color: '#e5e7eb', margin: '0 0 8px 0' }}>{comment.comment}</p>
//                 <div style={{ fontSize: '12px', color: '#60a5fa' }}>{comment.score} Points 🔼</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// newwwwwwwwwwwwwwwww
 import { useState } from "react";
import Markdown from "react-markdown";
import Header from "../common/header";

export default function CommentModal({ 
  formData, 
  onRemove 
}: { 
  formData: any; 
  onRemove: () => void; 
}) {
  const [loading] = useState(false);
  const commentData = [
    { id: 1, author: "user123", comment: "Fantastic article!", score: 5 }
  ];

  return (
    <div style={{ width: '90%', maxWidth: '800px', margin: 'auto', backgroundColor: '#111827', borderRadius: '12px', padding: '16px', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', display: 'flex', flexDirection: 'column', height: '80vh' }}>
        <Header title="comments" count={commentData.length} onRemove={onRemove} />
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          <Markdown>## Hello World</Markdown>
          {commentData.map((c) => (
            <div key={c.id} style={{ padding: '16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#2a353d', margin: '10px 0' }}>
              <div style={{ fontWeight: 'bold' }}>{c.author}</div>
              <p style={{ fontSize: '14px' }}>{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}