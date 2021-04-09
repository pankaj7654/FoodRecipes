import React from "react";

const Jumbotron = props => {
  const {search , onInputChange , onSearchClick} = props;
  return (
    <div class="jumbotron jumbotron-fluid">
      <h1 class="container mx-auto text-center">
        <i class="display-1 brand-icon">
          <i class="fas fa-hamburger"></i> FoodRecipes
        </i>
      </h1>

      <div class="input-group mx-auto w-50">
        <input type="text" class="form-control border-0" 
        placeholder="Search Recipe.." value={search} 
        onChange={onInputChange}/>
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
        </div>
      </div>

      <p class="lead text-center">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </div>
  );
};

export default Jumbotron;
