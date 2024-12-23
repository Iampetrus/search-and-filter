import { useState } from "react";

import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
import "./index.css";

// data import
import products from './db/data';

function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);
  
  //input filter
  const[query, setQuery] = useState('');
  const handleInputChange = (event)  => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

// radio filter
const handleChange = (event) => {
  setSelectedCategory(event.target.value)
}

// button filter
const handleClick= (event) => {
  setSelectedCategory(event.target.value)
}

function filteredData(products, selected, query) {
  let filteredProducts  = products;

  //filtering input items
  if(query) {
    filteredProducts = filteredItems;
  }

  //selected filter
  if(selected) {
    filteredProducts= filteredProducts.filter(
      ({category, color, company, newPrice, title}) =>
        category === selected ||
        color === selected ||
        company  === selected ||
        newPrice === selected ||
        title === selected
    );
  }

return filteredProducts.map(
  ({img, title, star, reviews, prevPrice, newPrice}) => (
  <Card
    Key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />
  ));
}

const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;