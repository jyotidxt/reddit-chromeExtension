import { Search as SearchIcon } from "lucide-react";
import React, { JSX } from 'react';
// import '/style.css'
import "@/entrypoints/popup/style.css";
export default function Search({
    handleSearch,
}: {
    handleSearch: (searchQuery: string) => void;
}): JSX.Element {
    const [searchQuery, setSearchQuery] = React.useState("");
    const handleButtonClick = () => {
        handleSearch(searchQuery);
    }
    return (
        <div className="p-4 border-b border-border flex items-center">
            <div className="flex item-center w-full space-x-2">
                <input
                    type="text"
                    className="w-10/12 px-4 py-2 border border-input rounded"
                    placeholder="Ask anything..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleButtonClick();
                        }
                    }}
                />
                <button
                    onClick={handleButtonClick}
                    className="w-6/12 py-2 flex items-center justify-center cursor-pointer
                 bg-yellow-400"
                >
                    <SearchIcon className="h-6 w-4 mr-2 text-muted-foreground" />
                    <span>Search</span>
                </button>

            </div>
        </div>
    );
}