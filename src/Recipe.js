import React from 'react'
import style from './recipe.module.css'

 function Recipe({image,title,calories,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
             <ol>
                 {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li> 
                 ))}
             </ol>
            <p>calories:{calories.toFixed(2)}</p>
            <img className={style.image}src={image} alt=""/>

        </div>
    )
}
export default Recipe;
