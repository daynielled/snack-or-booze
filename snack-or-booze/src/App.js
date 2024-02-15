import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import DrinkItem from "./DrinkItem"; 
import AddFoodForm from "./AddFoodForm";


/**
 * 
 * Main component representing the application.
 * Responsible for managing data fetching and routing.
 * @returns {JSX.Element} - App component
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]); 

  useEffect(() => {
    /**Fetches snack and drinks data from the API and updates the state */
    async function fetchData() {
      try {
        const snacksData = await SnackOrBoozeApi.getSnacks();
        const drinksData = await SnackOrBoozeApi.getDrinks(); 
        setSnacks(snacksData);
        setDrinks(drinksData); 
        setIsLoading(false);
        console.log("Fetched drinks:", drinksData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

// Function to add a new snack
const addSnack = async (snackData) => {
  try {
    const newSnack = await SnackOrBoozeApi.addSnack(snackData);
    setSnacks([...snacks, newSnack]); // Add the new snack to the existing list
  } catch (error) {
    console.error("Error adding snack:", error);
  }
};

// Function to add a new drink
const addDrink = async (drinkData) => {
  try {
    const newDrink = await SnackOrBoozeApi.addDrink(drinkData);
    setDrinks([...drinks, newDrink]); // Add the new drink to the existing list
  } catch (error) {
    console.error("Error adding drink:", error);
  }
};


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} /> {/* Pass drinks state to Home component */}
            </Route>

            <Route exact path="/snacks">
              <FoodMenu items={snacks} type="snacks" />
            </Route>

            <Route exact path="/drinks">
              <FoodMenu items={drinks} type="drinks" /> {/* Render drinks using FoodMenu */}
            </Route>

            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>

            <Route path="/drinks/:id">
              <DrinkItem items={drinks} cantFind="/drinks" /> {/* Use DrinkItem component */}
            </Route>

            <Route path="/add-food/:type" render={(routeProps) => {
              console.log(routeProps);
              return <AddFoodForm onAddSnack={addSnack} onAddDrink={addDrink} type={routeProps.match.params.type} />
            }}>
            </Route>
          
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


