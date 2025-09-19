'use client'

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchFormProps {
  currentCategory: string;
  currentQuery?: string;
}

export default function SearchForm({ currentCategory, currentQuery }: SearchFormProps) {
  const [query, setQuery] = useState(currentQuery || '');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop/${currentCategory}?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/shop/${currentCategory}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <div className="gap-x-1 hidden md:flex" id="search-input-container">
      <button 
        onClick={handleSearch}
        className="flex items-center"
      >
        <Search strokeWidth={2} className="w-4 pt-0.25"/>
      </button>
      <input 
        type="text" 
        placeholder="search" 
        id="search_input" 
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="border-0 decoration-0 outline-0 text-left"
      />
    </div>
  );
}