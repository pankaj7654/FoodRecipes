import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Jumbotron from "./components/Jumbotron";
import Axios from "axios";

function App() {
  const [search, setSeacrch] = useState();
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "aae07931";
  const APP_KEY = "28f4112483e3bb42e42b305513a9ff31";

  //hooks use for api
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSeacrch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };


  return (
    <div className="App">
      <Header />
      <Jumbotron search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}
       />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
