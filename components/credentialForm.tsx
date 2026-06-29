import { IFormData, useFormData } from "@/entrypoints/hooks/useFormData";
import toast from "react-hot-toast"
// import 'react-hot-toast/dist/index.css'
export default function CredentialForm() {

  const {formData, setFormData} = useFormData();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const {name , value} = e.target;
    setFormData((prev: IFormData)=>({...prev, [name]:value}));
  };
  console.log(formData);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); 
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); 
  
  // if (!formData?.endpoint || !formData?.apiKey) {
  //   toast.error("Endpoint/API Key missing!");
  //   return;
  // }

  // chrome.storage.local.set({ formData }, () => {
  //   // Ye raha aapka chhota, green toast
  //   toast.success("Saved successfully!", {
  //     duration: 3000,
  //     position: 'top-center',
  //     style: {
  //       background: '#065f46', // Green background
  //       color: '#fff',
  //       fontSize: '14px',
  //       borderRadius: '10px',
  //     },
  //   });
  // });
};
  console.log("Submit clicked. Current formData:", formData);

  if (!formData.endpoint || !formData.apiKey) {
    console.error("Error: Endpoint or API Key is empty!");
    return;
  }

  chrome.storage.local.set({ formData }, () => {
    console.log("Data saved successfully to Chrome Storage!");
    alert("Data Saved Successfully!");
  });
};

 
   
  return (
    <div className="flex flex-col  items-center justify-center w-100 min-h-screen bg-orange-700 p-6">
      {/* Main Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-orange-100 mb-6">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-2">API Configuration</h2>
          <p className="text-orange-600 text-sm">Enter your credentials to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="endpoint" className="block text-sm font-semibold text-orange-800 mb-2">
              Endpoint
            </label>
            <input
              type="url"
              id="endpoint"
              name="endpoint"
              required
              className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:ring-4 focus:ring-orange-100 outline-none transition-all bg-orange-50/50 text-orange-900 placeholder:text-orange-300"
              value={formData?.endpoint}
              onChange={handleChange}
              placeholder="https://api.example.com/v1"
            />
          </div>

          <div>
            <label htmlFor="apikey" className="block text-sm font-semibold text-orange-800 mb-2">
              API Key
            </label>
            <input
              type="password"
              id="apiKey"
              name='apiKey'
              required
              className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:ring-4 focus:ring-orange-100 outline-none transition-all bg-orange-50/50 text-orange-900"
              onChange={handleChange}
              value={formData?.apiKey}
              placeholder="••••••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 active:scale-[0.98]"
            onClick={handleSubmit}
          >
           Save
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 flex items-center justify-center text-orange-400 text-[11px] gap-2">
          <span>🔒</span>
          <p>Your API credentials are processed securely on-device.</p>
        </div>
      </div>

      {/* Copyright Footer */}
      <p className="text-white text-xs font-medium">
        Copyright © Dixit {new Date().getFullYear() > 2026 ? `2026 - ${new Date().getFullYear()}` : "2026"}
      </p>
    </div>
  );
}