import { useState } from "react";

import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

// data import
import products from './db/data';

function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);

  //input filter
  const[query, setQuery] = useState('');

  const handleInputChange = event  => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
);

// radio filter
const handleChange = event => {
  setSelectedCategory(event.target.value)
}

// button filter
const handleClick= event => {
  setSelectedCategory(event.target.value)
}

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;