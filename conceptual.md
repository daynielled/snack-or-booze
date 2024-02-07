### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
* The purpose of react router is to facilitate navigation within a react application by dynamically rendering components based on the URL

- What is a single page application?
* A single page application (SPA) is a web application or website that dynamically updates the current page rather than loading entire new pages from the server. SPAs typically use AJAX and HTML5 to create fluid and responsive user experiences.

- What are some differences between client side and server side routing?
* Client-side Routing: Routing is handled by the browser on the client-side. Only the required data is fetched from the server, usually through APIs, and the page content is updated dynamically without a full page reload.
* Server-side Routing: The server renders the entire page and sends it to the client upon each request. Navigation triggers a full page reload as the server generates a new HTML page based on the requested URL.

- What are two ways of handling redirects with React Router? When would you use each?
* Using <Redirect> component: Suitable for handling redirects declaratively, typically based on certain conditions or user actions within components.
* Using history.push(): Used programmatically to redirect users based on certain logic within the application, such as after a successful form submission.

- What are two different ways to handle page-not-found user experiences using React Router? 
* Using <Switch> and <Route>: By placing a <Route> with a path of '*' or '/' at the bottom of the <Switch>, you can render a component for all unmatched routes, effectively creating a 404 page.
* Creating a custom 404 Component: Define a component to be rendered when no matching route is found. This component can display a user-friendly message indicating that the page does not exist.

- How do you grab URL parameters from within a component using React Router?
* You can access URL parameters within a component using the useParams() hook provided by React Router. It returns an object containing key-value pairs of the URL parameters.

- What is context in React? When would you use it?
* Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is particularly useful when certain data needs to be accessible by many components at different nesting levels.

- Describe some differences between class-based components and function
  components in React.
* Class-based Components: These are ES6 classes that extend React.Component. They have lifecycle methods, state, and the ability to use this.
* Function Components: These are JavaScript functions that accept props as an argument and return React elements. With the introduction of hooks, function components can now have state and lifecycle features, making them more versatile and concise compared to class-based components.

- What are some of the problems that hooks were designed to solve?
* Complexity of State and Lifecycle Management: Hooks simplify state management and lifecycle-related logic by allowing functional components to use state and lifecycle methods previously only available in class components.
* Code Reusability: Hooks enable better code reuse as logic can be encapsulated in custom hooks, which can then be shared across different components.
* Improving Readability and Maintainability: Hooks promote a more linear and functional style of writing components, making the code easier to understand and maintain.