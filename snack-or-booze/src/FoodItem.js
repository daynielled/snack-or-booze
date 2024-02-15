import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";



/**
 * Component representing a specific snack/food item
 * @param {Array} items - Array of snack items
 * @param {string} cantFind - Path to redirect if the snack item is not found
 * @returns {JSX.Element}- FoodItem component
 */
function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  //Find the snack item by its ID
  let food = items.find(item => item.id === id);

   //If the snack item is not found, redirect to the specified path
  if (!food) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food.name}
          </CardTitle>
          <CardText className="font-italic">{food.description}</CardText>
          <p>
            <b>Recipe:</b> {food.recipe}
          </p>
          <p>
            <b>Serve:</b> {food.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;


