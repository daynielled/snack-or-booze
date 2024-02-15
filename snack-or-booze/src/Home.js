import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/**
 * Component representing the home page of the application.
 * @returns {JSX.Element} - Home component.
 */
function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
