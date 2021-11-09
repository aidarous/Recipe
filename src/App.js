import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

const APP_ID = 'aeaa4ac3';
const APP_KEY = 'a5f2877e626d5ee72ba678a85e8d1fa3'

const [recipes, setRecipes] = useState([]);
const [search,setSearch] = useState("")
const [query, setQuery] = useState('chicken'); // prevents fetching data with every key stroke in search bar



  useEffect( () => { 
    const getRecipe = async () => {
      try{
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
      const data = await res.json();
      console.log(data)
      setRecipes(data.hits);
      } catch (error) {
        console.error(error);
      }
    
    };
    getRecipe();
  }
  
    , [query])

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch}/>
        <button  >Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key= {recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image= {recipe.recipe.image}
        ingredients= {recipe.recipe.ingredients} />
      ) )}
    </div>
  );
}

export default App;
