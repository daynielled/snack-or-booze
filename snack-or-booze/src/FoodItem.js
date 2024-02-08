import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let food = items.find(item => item.id === id);
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


