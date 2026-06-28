// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import Header from "../common/header";

// export default function PostModal({
// posts,
// onRemove,
// ): {
//     posts:any;
//     onRemove:()=> void;
// })
// {
//     const {formData} = useFormData();
//     const [loading, setLoading] =useState(false);
//     console.log("formData, formData");
//     const postData = [
//         {
//             id:1,
//             tag:"Technology",
//             title:"Revolutionizing AI with Qunatum Computing",
//             description:"Explore the groundbreaking advancements in combining artificial intelligence",
//             score:450,
//             comments:23,
//         },
//         {
//              id:2,
//             tag:"Science",
//             title:"Revolutionizing AI with Qunatum Computing",
//             description:"Explore the groundbreaking advancemigence",
//             score:60,
//             comments:13,
//         },
//         {
//              id:3,
//             tag:"Science",
//             title:"Revolutionizing AI with Qunatum Computing",
//             description:"Explore the groundbreaking advancemigence",
//             score:630,
//             comments:139,
//         }
//     ];

//     return (
//         <div className="w-[700px dark bg-gray-900">
//         <div id="reddit-modal">

//         <Header title="Posts" count={postData.length} onRemove={onRemove} />
//         {
//             loading && (
//                 <p className="text-center text-2xl>"Loading...</p>
//             )}
//             <div>
//             {postData?.map((post)=>(
//                 <div key={post.id}>
// <div> 
// <div>
//     <span>{post.tag}</span>
// </div>
// <h3>{post.title}</h3>
// <p>{post.description}</p>
// <div>
//     <span>{post.score}</span>
//     <span>{post.comments}</span>
// </div>
// </div>
//                 </div>
//             ))}
//             </div>
//         </div>
        
//         </div>
//     );
// }

import { useState } from "react"; 
import { useFormData } from "@/entrypoints/hooks/useFormData";
import Header from "../common/header";

export default function PostModal({
  posts,
  onRemove,
}: {
  posts: any;
  onRemove: () => void;
}) {
  const { formData } = useFormData();
  const [loading, setLoading] = useState(false);

  const postData = [
    { id: 1, tag: "Technology", title: "Revolutionizing AI with Quantum Computing", description: "Explore groundbreaking advancements in AI and computing.", score: 450, comments: 23 },
    { id: 2, tag: "Science", title: "Quantum Supremacy Explained", description: "A deep dive into the latest scientific breakthroughs.", score: 60, comments: 13 },
    { id: 3, tag: "Science", title: "The Future of Space Exploration", description: "How new engines are changing our reach in the galaxy.", score: 630, comments: 139 },
  ];

  return (
    <div className="w-[700px] bg-regray-900 text-white rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
      <Header title="Posts" count={postData.length} onRemove={onRemove} />

      {loading ? (
        <div className="p-10 text-center text-xl text-gray-400">Loading insights...</div>
      ) : (
        <div className="max-h-[500px] overflow-y-auto p-4 space-y-4">
          {postData?.map((post) => (
            <div key={post.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <span className="text-[10px] uppercase font-bold text-gray-400 bg-blue-900/30 px-2 py-1 rounded">
                {post.tag}
              </span>
              <h3 className="text-lg font-bold mt-2 text-gray-100">{post.title}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{post.description}</p>
              
              <div className="flex gap-4 mt-3 text-xs text-gray-500">
                <span>🔥 {post.score} points </span>
                <span> 💬 {post.comments} comments</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}