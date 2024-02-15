import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./FoodMenu.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";


/**
 * Component representing a menu of either snacks or drinks.
 * @param {Array} items - Array of snack or drink items
 * @param {string} type - Type of items ('snacks' or 'drinks').
 * @returns {JSX.Element}- FoodMenu component
 */
function FoodMenu({ items, type }) {
  const history = useHistory();

/**
 * Handles click event on the "Add Snack" or "Add Drink" button.
 * Redirects the user to the appropriate add food page based on the type
 */
  const handleAddButtonClick = () => {
    if (type === "snacks") {
      // Redirect to add snack page
      history.push("/add-food/snacks");
    } else if (type === "drinks") {
      // Redirect to add drink page
      history.push("/add-food/drinks");
    }
  };



  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type === "snacks" ? "Snacks" : "Drinks"} Menu
          </CardTitle>
          <CardText>
            Drinking makes you hungry and eating makes you happy and when you're happy why not drink. Lucky for you we have both! Now go on! Explore our menu's and enjoy!
            Snooze you Booze
          </CardText>
          <ListGroup>
            {/* Renders SnackItem or DrinkItem based on the type*/}
            {items.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id} className="list-link">
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Button onClick={handleAddButtonClick}>Add {type === "snacks" ? "Snack" : "Drink"}</Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;

