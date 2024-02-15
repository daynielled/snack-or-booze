import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


/**
 * Component representing a specific drink item
 * @param {Array} items - Array of drink items
 * @param {string} cantFind - Path to redirect if the drink item is not found
 * @returns {JSX.Element}- DrinkItem component
 */
function DrinkItem({ items, cantFind }) {
  const { id } = useParams();

  //Find the drink item by its ID
  let drink = items.find(drink => drink.id === id);

  //If the drink item is not found, redirect to the specified path
  if (!drink) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkItem;
