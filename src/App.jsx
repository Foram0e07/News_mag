import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NewsBoard from './Components/NewsBoard';
import { useState } from 'react';

export const App = () => { 
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState('');
  return ( 
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  ); 
}

export default App;