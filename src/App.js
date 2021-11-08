import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

const APP_ID = 'aeaa4ac3';
const APP_KEY = 'a5f2877e626d5ee72ba678a85e8d1fa3'

const getRecipe = async () => {
  try{
  const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
  const data = await res.json();
  console.log(data)
  } catch (error) {
    console.error(error);
  }
}

  useEffect( () => {
    getRecipe();

  },[])



  return (
    <div className="App">
      <form>
        <input />
        <button  >Search</button>
      </form>
      
    </div>
  );
}

export default App;
