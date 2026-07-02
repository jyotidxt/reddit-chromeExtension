// // import React from "react";
// // import Header from "../common/header";
// // import { IComment, IPost } from "../scripts/scrap";
// // import Search from "../comment/search";

// // // import './style.css'
// // import "@/entrypoints/popup/style.css";
// // interface CommentModal{
// //   post?:IPost | null;
// //   comments: IComment[];
// //   onRemove: () => void;
// // }

// // export default function CommentModal({ post, comments, onRemove }: CommentModal) {
// //   const displayComments = comments || [];

// //    const handleCommentClick =(c: IComment) => {
// //     if(c.permalink){
// //       window.open(c.permalink, "_blank" , "noopener,noreferrer");
// //     }
// //    };
// //   return (
// //     <div
// //      style={{ 
// //       width: '90%', maxWidth: '800px', maxHeight: '90vh', margin: 'auto', backgroundColor: '#111827', borderRadius: '12px', padding: '16px', color: 'white', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column',    overflow: 'hidden',
// //       scrollbarWidth: 'none',      
// //           msOverflowStyle: 'none'
// //            }}>

// //        <style>{`
// //           div::-webkit-scrollbar {
// //             display: none; /* Chrome, Safari, Opera */
// //           }
// //         `}</style>
// // {/* NAYA SECTION: if u want to show on which post commnets are */}
// //       {/* {post && (
// //         <div style={{ 
// //           margin: '10px 16px 0 16px', 
// //           padding: '12px', 
// //           backgroundColor: '#1f2937', 
// //           borderRadius: '8px',
// //           borderLeft: '4px solid #fbbf24' // Highlight karne ke liye
// //         }}>
// //           <h2 style={{ fontSize: '16px', margin: '0 0 5px 0', color: '#fbbf24' }}>{post.title}</h2>
// //           <p style={{ fontSize: '13px', color: '#d1d5db', margin: 0 }}>{post.description}</p>
// //         </div>
// //       )} */}
// //       <Header title="Comments" count={displayComments.length} onRemove={onRemove} />
// //         <Search handleSearch={() => {}}/>
// //       <div style={{ flex: 1, overflowY: 'auto', padding: '16px', marginTop: '10px' }}>
// //         {displayComments.length > 0 ? (
// //           displayComments.map((c) => (
// //             <div key={c.id} 
// //             onClick={()=> handleCommentClick(c)}
// //             style={{ padding: '16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#2a353d', marginBottom: '10px' }}>
// //               <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#9ca3af' }}>{c.author}</div>
// //               <p style={{ fontSize: '14px', margin: '8px 0' }}>{c.comments}</p>
// //               <div style={{ fontSize: '11px', color: '#fbbf24' }}>Score: {c.score}</div>
// //             </div>
// //           ))
// //         ) : (
// //           <p style={{ textAlign: 'center', color: '#9ca3af' }}>No comments found...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import Header from "../common/header";
// import { extractJsonListFromMarkDown, IComment, IPost } from "../scripts/scrap";
// import Search from "../comment/search";
// import "@/entrypoints/popup/style.css";
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import axios from "axios";
// import customToast from "../common/customToast";

// interface CommentModalProps {
//   post?: IPost | null;
//   comments: IComment[];
//   onRemove: () => void;
// }

// export default function CommentModal({ post, comments, onRemove }: CommentModalProps) {
//   const { formData } = useFormData();
//   const [loading, setLoading] = useState(false);
//   const [geminiResponse, setGeminiResponse] = useState<IComment[] | null>(null);

//   const displayComments = geminiResponse || comments || [];

//   const handleCommentClick = (c: IComment) => {
//     if (c.permalink) {
//       window.open(c.permalink, "_blank", "noopener,noreferrer");
//     }
//   };

//   const handleSearch = async (searchQuery: string) => {
//     if (!searchQuery.trim()) {
//       setGeminiResponse(null);
//       return;
//     }

//     setLoading(true);
//     const url = `${formData?.endpoint}?key=${formData?.apiKey}`;

//     const payLoad = {
//       contents: [
//         {
//           parts: [
//             {
//               text: `This is the prompt: ${searchQuery}
//               This is the dataset of comments in js array: '''${JSON.stringify(comments)}''' 

//               Now based on this comment dataset and the prompt,
//               give me all the related comments matched with what prompt asked.
//               Use author, comments, and score for matching most relevant comment. 
//               Give me the list of comments with the same format as I have given you.
//               Don't give me any extra text even if you failed to find any comment.
//               Just give me an empty array [] if no match found.`,
//             },
//           ],
//         },
//       ],
//     };

//     try {
//       const response = await axios.post(url, payLoad, {
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
//       const extractData = extractJsonListFromMarkDown(data as string) as IComment[];
      
//       setGeminiResponse(extractData || []);
//     } catch (error) {
//       customToast({
//         message: "API error generating response",
//         status: "error",
//       });
//       setGeminiResponse([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{
//       width: '90%', maxWidth: '800px', maxHeight: '90vh', margin: 'auto',
//       backgroundColor: '#111827', borderRadius: '12px', padding: '16px',
//       color: 'white', fontFamily: 'sans-serif', display: 'flex',
//       flexDirection: 'column', overflow: 'hidden'
//     }}>
//       <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      
//       <Header title="Comments" count={comments.length} onRemove={onRemove} />
//       <Search handleSearch={handleSearch} />
      
//       {loading && (
//         <p className="text-center text-white text-sm mt-2 animate-pulse">Searching comments...</p>
//       )}

//       <div style={{ flex: 1, overflowY: 'auto', padding: '16px', marginTop: '10px' }}>
//         {displayComments.length > 0 ? (
//           displayComments.map((c) => (
//             <div key={c.id} 
//               onClick={() => handleCommentClick(c)}
//               style={{ 
//                 padding: '16px', borderRadius: '8px', border: '1px solid #374151', 
//                 backgroundColor: '#2a353d', marginBottom: '10px', cursor: 'pointer' 
//               }}>
//               <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#9ca3af' }}>{c.author}</div>
//               <p style={{ fontSize: '14px', margin: '8px 0' }}>{c.comments}</p>
//               <div style={{ fontSize: '11px', color: '#fbbf24' }}>Score: {c.score}</div>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', color: '#9ca3af' }}>No comments found...</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Header from "../common/header";
import { extractJsonListFromMarkDown, IComment, IPost } from "../scripts/scrap";
import Search from "../comment/search";
import "@/entrypoints/popup/style.css";

import axios from "axios";
import customToast from "../common/customToast";
import { useFormData } from "@/entrypoints/hooks/useFormData";

interface CommentModalProps {
  post?: IPost | null;
  comments: IComment[];
  onRemove: () => void;
}

export default function CommentModal({ post, comments, onRemove }: CommentModalProps) {
  const { formData } = useFormData();
  const [loading, setLoading] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState<IComment[] | null>(null);

  // Single Source of Truth
  const displayComments = geminiResponse || comments || [];

  const handleCommentClick = (c: IComment) => {
    if (c.permalink) {
      window.open(c.permalink, "_blank", "noopener,noreferrer");
    }
  };

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setGeminiResponse(null);
      return;
    }

    setLoading(true);
    try {
      const url = `${formData?.endpoint}?key=${formData?.apiKey}`;
      const payLoad = {
        contents: [
          {
            parts: [
              {
                text: `This is the prompt: ${searchQuery}
                This is the dataset of comments in js array: '''${JSON.stringify(comments)}''' 
                Now based on this comment dataset and the prompt, give me all the related comments matched with what prompt asked.
                Use author, comments, and score for matching most relevant comment. 
                Give me the list of comments with the same format as I have given you.
                Don't give me any extra text even if you failed to find any comment.
                Just give me an empty array [] if no match found.`,
              },
            ],
          },
        ],
      };

      const response = await axios.post(url, payLoad, {
        headers: { "Content-Type": "application/json" },
      });
      
      const data = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      const extractData = extractJsonListFromMarkDown(data as string) as IComment[];
      
      setGeminiResponse(extractData || []);
    } catch (error) {
      customToast({
        message: "API error generating response",
        status: "error",
      });
      setGeminiResponse([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] max-w-[800px] max-h-[90vh] mx-auto bg-[#111827] rounded-xl p-4 text-white font-sans flex flex-col overflow-hidden">
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Header now uses displayComments.length for accurate count */}
      <Header title="Comments" count={displayComments.length} onRemove={onRemove} />
      
      <Search handleSearch={handleSearch} />

      {loading && (
        <p className="text-center text-white text-sm mt-2 animate-pulse">Searching comments...</p>
      )}

      <div className="flex-1 overflow-y-auto p-4 mt-2">
        {displayComments.length > 0 ? (
          displayComments.map((c) => (
            <div 
              key={c.id} 
              onClick={() => handleCommentClick(c)}
              className="p-4 rounded-lg border border-[#374151] bg-[#2a353d] mb-3 cursor-pointer hover:border-gray-500 transition-colors"
            >
              <div className="font-bold text-xs text-[#9ca3af]">{c.author}</div>
              <p className="text-sm my-2">{c.comments}</p>
              <div className="text-[11px] text-[#fbbf24]">Score: {c.score}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#9ca3af]">No comments found...</p>
        )}
      </div>
    </div>
  );
}