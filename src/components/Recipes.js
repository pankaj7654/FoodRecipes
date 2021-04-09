import React from 'react'
import RecipeItem from './RecipeItem';

const Recipes = (props) =>{
    const {recipes} = props;
    return(
        <div className="card-columns">
        {
            recipes.map(recipe => (<RecipeItem 
            key={Math.random() * 100}  //for pass unique key
            name={recipe.recipe.lable} 
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
            />))
        }
        </div>
        
    )
};

export default Recipes;