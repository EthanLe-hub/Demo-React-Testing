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
