/*
import ListGroup from "./components/ListGroup"; // Importing the ListGroup component from the components folder.

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Goomadoon"]; // An array of items to display in the list. There are NO "for" loops in JSX!
  // Testing conditional rendering when the list is empty (need to change from "const" to "let" if you are reassigning a variable).

  const handleSelectItem = (item: string) => {
    console.log(item); // A function that logs the selected item to the console.
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  ); // Return a simple JSX element.
}

export default App; // Export as default object from this module to be used elsewhere.
*/

import Alert from "./components/Alert"; // Importing the Alert component from the components folder.
import Button from "./components/Button"; // Importing the Button component from the components folder.
import { useState } from "react"; // Importing the useState Hook from React. the

function App() {
  // Use StateHook:
  const [alertVisible, setAlertVisibility] = useState(false); // Initialize alertVisibile to false to hide the Alert by default.
  // When button is clicked, set alertVisible to true to SHOW the Alert.
  // When Alert's close button is clicked, set alertVisible to false to HIDE the Alert.
  // {someCondition && <p>...</p>} -- If true, result is the paragraph element; if false, result is false and nothing is rendered.

  /** Summary of fetch API usage */
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // We fetch data from an API endpoint (which is just a URL that provides data) using the fetch function, which returns a Promise that resolves to the Response object representing the response to the request.
    method: "POST", // Create a new user at this API by just doing a POST request.
    headers: {
      "Content-Type": "application/json", // Specify that the request body is in JSON format.
    },
    body: JSON.stringify({
      // Convert the JavaScript object to a JSON string.
      name: "User 1", // Pass the data for that user in the body as a JSON object.
    }),
  })
    .then((response) => {
      if (response.ok) {
        // We can then check if the response was successful by checking the ok property of the Response object.
        // Check if the response status is OK (in the range 200-299).
        console.log("SUCCESS"); // If the response was successful, we can parse the response body as JSON using the json() method of the Response object, which also returns a Promise that resolves to the parsed JSON data.
        return response.json(); // Parse the response body as JSON. We can then use the parsed JSON data as needed in our application.
      } else {
        console.log("Not Successful");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR")); // If the response was NOT successful, we can handle the error accordingly.
  // Fetch always succeeds, no matter what (even with a 404 error) -- only fails on network failure or if anything prevented the request from completing.
  // Thus, the failures come from fetching the website itself, not from the API you are calling.

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>
        Click Me <span>NOW</span>
      </Button>
    </div>
  ); // Set up the App component to render the Alert component with "Hello, World" as its children (Alert.tsx handles the styling).
  // Set up the App component to render the Button component with "Click Me NOW" as its children (Button.tsx handles the styling).
  // Use <span>...</span> to demonstrate that Alert can accept ANY valid ReactNode as children (strings, fragments, HTML elements, etc.).
}

export default App; // Export as default object from this module to be used elsewhere.
