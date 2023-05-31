import { useState } from 'react';

import Grid from './Grid/Grid.js'
import './Filter.css';

export default function Filter() {
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      const updateCategories = [name]
      setSelectedCategories(updateCategories)
    } else {
      const updatedCategories = selectedCategories.filter((category) => category !== name);
      setSelectedCategories(updatedCategories);
    }
  }
  
  return (
    <>
    <form className="form">
      <div className="design">
        <input name="design" type="checkbox" onChange={handleCategoryChange}></input>
        <label>design</label>
      </div>
      <div className="webdev">
        <input name="webdev" type="checkbox" onChange={handleCategoryChange}></input>
        <label>webdev</label>
      </div>
      <div className="frontend">
        <input name="frontend" type="checkbox" onChange={handleCategoryChange}></input>
        <label>frontend</label>
      </div>
      <div className="fullstack">
        <input name="fullstack" type="checkbox" onChange={handleCategoryChange}></input>
        <label>fullstack</label>
      </div>
    </form>

    <Grid selectedCategories={selectedCategories}/>
    </>
  )
}