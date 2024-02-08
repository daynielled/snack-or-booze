import React, { useState } from "react";
import { Button, Form, FormGroup,Label,Input } from "reactstrap";
import "./AddFoodForm.css";
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddFoodForm(type) {
    const history = useHistory();
    const [foodData, setFoodData] = useState({
        type: "Food",
        name: "",
        description: "",
        recipe: "",
        serve: "",
    });

    const [message, setMessage]= useState("");

    //Update food item when input fields change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //API call to add new snack or drink item
            await SnackOrBoozeApi.addFood(foodData);
            setMessage(`${foodData.type} added successully!`);

            //Clear form fields and reset type to Food
            setFoodData({
                type: "Food",
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