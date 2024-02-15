import React, { useState } from "react";
import { Button, Form, FormGroup,Label,Input } from "reactstrap";
import "./AddFoodForm.css";
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


/**Functional component for adding food items.
 * @param {string} type - Type of food item(eg."snacks" or "drinks")
 * @returns {JSX.Element} - Add Food Form component
 */
function AddFoodForm({type, onAddSnack, onAddDrink}) {
    const history = useHistory();
    const [foodData, setFoodData] = useState({
        type: type,
        name: "",
        description: "",
        recipe: "",
        serve: "",
    });

    const [message, setMessage]= useState("");

    /**Handles change in the input fields and updates the food data state
     * @param {Object} e -Event object
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    /**
     * Submits the form data to add a new food item.
     * @param {Object} e -Event object
     */

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log("Submitting form data", foodData)
            if (type === "snacks") {
              await SnackOrBoozeApi.addSnack(foodData);
              onAddSnack(foodData); //Call onAddSnack with the new snack data
              
            } else if (type === "drinks"){
              await SnackOrBoozeApi.addDrink(foodData);
              onAddDrink(foodData); //Call onAddDrink with the new drink data
             
            }
           
            setMessage(`${foodData.type} added successully!`);

            console.log("Updated drinks state:", foodData);

            //Clear form fields and reset type to Food
            setFoodData({
                type: type,
                name: "",
                description: "",
                recipe: "",
                serve: ""
              });
              //Redirect to the respective menu
              history.push(foodData.type === "Snack" ? "/snacks" : "/drinks");
        } catch (error) {
            console.error("Error adding food:", error);
            setMessage(`Error adding ${foodData.type.toLowerCase()}`);
        }
};

console.log("FoodData in AddFoodForm:", foodData);

return(
    <div>
    <h2>Add Food Here</h2>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={foodData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={foodData.description}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
          type="text"
          name="recipe"
          id="recipe"
          value={foodData.recipe}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
          type="text"
          name="serve"
          id="serve"
          value={foodData.serve}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
    {message && <p>{message}</p>}
  </div>
)
}

export default AddFoodForm;
