import React, { useState } from "react";
import Header from "../common/header";
import { extractJsonListFromMarkDown, IPost } from "../scripts/scrap";
import Search from "../comment/search";
import "@/entrypoints/popup/style.css";
import { useFormData } from "@/entrypoints/hooks/useFormData";
import  axios  from "axios";
import "@/entrypoints/content/script.t/scrap.tsk"
import { customToast } from "../common/customToat";
// import CustomToast from "@/entrypoints"


interface PostModalProps {
  posts: IPost[];
  formData: any;
  onRemove: () => void;
}

export default function PostModal({ posts, onRemove }: PostModalProps) {
  const displayPosts = posts || [];

  const {formData} = useFormData()
const [loading, setLoading] = useState(false)
const [geminiResponse, setGeminiResponse] = useState<IPost[]>([]);

  const handlePostClick = (post: IPost) => {
    if (post.link) {
      window.open(post.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    setGeminiResponse([]);
const url =`${formData?.endpoint}?key=${formData?.apiKey}`;

const payLoad = {
  contents: [
    {
      parts: [
        {
          text:`This is the prompt: ${searchQuery}
          This is the dataset od posts in js array: '''${JSON.stringify (posts)}''' 

          Now based on this post dataset and the prompt,
          give me all the related posts match matched with what prompt asked.
           Use, description, title, tag, score, comments, for matching most relevant post. Give me the list of posts with the same format as I have given you.
          Don't give me an extra text even if you failed to find any post.
          Just give me empty array if not match found. And if found give me the list of posts with the same data format.`,
        },
      ],
    },
  ],
};

try {
  const response = await axios.post(url, payLoad, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.data?.candidates?.[0]?.content?.parts?.[0]?.text; 
  const extractData = extractJsonListFromMarkDown(
  data as string ) as IPost[];
  console.info(extractData);
  setGeminiResponse(extractData);
}catch (error) {
  customToast({
    message: "API error gnerating response",
    status: "error",
  });
  setGeminiResponse([]);
}finally {
  setLoading(false);
}
  }
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
        <Search handleSearch={() => {handleSearch}}/>
          {loading && (
          <p className="text-center text-white text-2xl">Loading...</p>
          )}
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