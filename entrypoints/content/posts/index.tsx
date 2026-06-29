
import { useState } from "react";
import Header from "../common/header";

export default function PostModal({ 
  formData, 
  onRemove 
}: { 
  formData: any; 
  onRemove: () => void; 
}) {
  const [loading] = useState(false);
  
  // Use formData here (e.g., console.log(formData))
  const postData = [
    { id: 1, tag: "Technology", title: "Revolutionizing AI", description: "...", score: 450, comments: 23 }
  ];

  return (
    <div style={{ width: '90%', maxWidth: '600px', margin: 'auto', backgroundColor: '#1a1c1e', borderRadius: '16px', padding: '20px', border: '1px solid #374151', color: 'white', fontFamily: 'sans-serif' }}>
      <Header title="Posts" count={postData.length} onRemove={onRemove} />
      {loading && <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>}
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {postData.map((post) => (
          <div key={post.id} style={{ backgroundColor: '#2a353d', padding: '16px', borderRadius: '12px', border: '1px solid #4b5563' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', color: '#9ca3af' }}>{post.tag}</span>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '8px 0' }}>{post.title}</h3>
            <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '12px' }}>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import Header from "../common/header";
// export default function PostModal({
//   posts,
//   onRemove,
// }: {
//   posts: [];
//   onRemove: () => void;
// }) {
//   const { formData } = useFormData();
//   const [loading, setLoading] = useState(false);

//   const postData = [
//     { id: 1, tag: "Technology", title: "Revolutionizing AI with Quantum Computing", description: "Explore the groundbreaking advancements in combining artificial intelligence.", score: 450, comments: 23 },
//     { id: 2, tag: "Science", title: "The Mysteries of Dark Matter Unveiled", description: "A deep-dive into the latest research and theories surrounding dark matter.", score: 320, comments: 15 },
//     { id: 3, tag: "Programming", title: "Advanced React Hooks for Efficient State Management", description: "Learn how to leverage complex React hooks to manage application state.", score: 510, comments: 35 }
//   ];

//   return (
  
//     <div style={{
//       width: '600px',
//       backgroundColor: '#1a1c1e',
//       borderRadius: '16px',
//       padding: '20px',
//       border: '1px solid #374151',
//       color: 'white',
//       fontFamily: 'sans-serif'
//     }}>
//       <Header title="Posts" count={postData.length} onRemove={onRemove} />

//       {/* Posts List container */}
//       <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
//         {postData.map((post) => (
//           // Individual Box Card: 
//           <div key={post.id} style={{
//             backgroundColor: '#2a353d',
//             padding: '16px',
//             borderRadius: '12px',
//             border: '1px solid #4b5563'
//           }}>
//             <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', color: '#9ca3af' }}>
//               {post.tag}
//             </span>
//             <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '8px 0' }}>
//               {post.title}
//             </h3>
//             <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '12px' }}>
//               {post.description}
//             </p>
//             <div style={{ fontSize: '12px', color: '#9ca3af' }}>
//               Score: <span style={{ color: 'white', fontWeight: 'bold' }}>{post.score} ⭐</span> &nbsp; 
//               {post.comments} comments 💬
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// new ui 
// import { useState } from "react";
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import Header from "../common/header";

// export default function PostModal({
//   posts,
//   onRemove,
// }: {
//   posts?: any; // Optional kar diya hai taaki error na aaye
//   onRemove: () => void;
// }) {
//   const { formData } = useFormData();
//   const [loading, setLoading] = useState(false);

//   const postData = [
//     { id: 1, tag: "Technology", title: "Revolutionizing AI with Quantum Computing", description: "Explore the groundbreaking advancements in combining artificial intelligence.", score: 450, comments: 23 },
//     { id: 2, tag: "Science", title: "The Mysteries of Dark Matter Unveiled", description: "A deep-dive into the latest research and theories surrounding dark matter.", score: 320, comments: 15 },
//     { id: 3, tag: "Programming", title: "Advanced React Hooks for Efficient State Management", description: "Learn how to leverage complex React hooks to manage application state.", score: 510, comments: 35 }
//   ];

//   return (
//     // Responsive Modal Container
//     <div style={{
//       width: '90%',
//       maxWidth: '600px', // Laptop par 600px limit
//       margin: '0 auto',  // Screen ke center mein lane ke liye
//       backgroundColor: '#1a1c1e',
//       borderRadius: '16px',
//       padding: '20px',
//       border: '1px solid #374151',
//       color: 'white',
//       fontFamily: 'sans-serif'
//     }}>
//       <Header title="Posts" count={postData.length} onRemove={onRemove} />

//       {loading && (
//         <p style={{ textAlign: 'center', padding: '20px', color: '#9ca3af' }}>Loading...</p>
//       )}

//       {/* Posts List container */}
//       <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
//         {postData.map((post) => (
//           <div key={post.id} style={{
//             backgroundColor: '#2a353d',
//             padding: '16px',
//             borderRadius: '12px',
//             border: '1px solid #4b5563'
//           }}>
//             <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', color: '#9ca3af' }}>
//               {post.tag}
//             </span>
//             <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '8px 0' }}>
//               {post.title}
//             </h3>
//             <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '12px' }}>
//               {post.description}
//             </p>
//             <div style={{ fontSize: '12px', color: '#9ca3af' }}>
//               Score: <span style={{ color: 'white', fontWeight: 'bold' }}>{post.score} ⭐</span> &nbsp; 
//               {post.comments} comments 💬
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );


