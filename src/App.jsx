import './App.css';
import posts from './data/posts';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Feed posts={posts} />
    </div>
  )
}

export default App
