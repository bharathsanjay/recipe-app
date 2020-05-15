import React from 'react';
import {useEffect,useState} from 'react'
import Recipe from './Recipe';
import './App.css'

function App() {
  const APP_ID = "fd64c65f";
  const APP_KEY = "bea7be8a22dd64551a6ccfefd7a1b6c5";
  const[recipes,setrecipes]= useState([]);
  const[search,setsearch]= useState('');
  const[query,setquery]= useState('');

  useEffect(()=>{
    const getRecipes = async ()=>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setrecipes(data.hits);
      
    };
    getRecipes();
  },[query])

 
  const updatesearch= e =>{
    setsearch(e.target.value);
  }
  const getSearch = e =>{
    e.preventDefault();
    setquery(search);
  
  }
  
  return (
    <div className="App">
      <form className="search-form"onSubmit={getSearch}>
      <input className="search-bar" type="text" value={search} onChange={updatesearch}/>
      <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe
         key={recipe.recipe.label}
         title={recipe.recipe.label} 
         image={recipe.recipe.image} 
         calories={recipe.recipe.calories}
         ingredients={recipe.recipe.ingredients}
        />
      ))
      }
      </div>
     
    </div>
  );
}

export default App;
