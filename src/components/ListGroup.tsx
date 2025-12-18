// Like importing classes from packages in Java.
//import { MouseEvent } from "react"; // Importing event type for TypeScript (for type annotation for event variables).
import { useState } from "react"; // Importing useState hook from React for managing state in functional components.

// { items: [], heading: string }
interface ListGroupProps {
  // Define props type (titles, items, etc.) here:
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // Generic onClick event to be reuseable -- a function that takes a string and returns void (nothing).
} // Props (immutable -- read only): inputs passed to a component (similar to function parameters).
// State (mutable): data managed by a component that can change over time (similar to local variables).

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Destructuring props DIRECTLY in the parameter list.
  // Use ctrl + d to select multiple occurrences of a word.

  // Hook (a function that allows us to tap into built-in features in React):
  const [selectedIndex, setSelectedIndex] = useState(-1); // This State Hook tells React that this component can have data or state that will change over time.

  // Function to get message based on number of items (conditional rendering):
  /*const getMessage = () => {
    return items.length === 0 ? <p>No items found, you dummy</p> : null; // Conditional rendering using a ternary operator returned from a function.
  };*/

  /** JSX Cheatsheet: */
  // <h1>...</h1> translates to a header element in HTML; aka, translates to React.createElement('h1', null, 'List').
  // Outer <> ... </> represents a React Fragment. Fragment is a component that allows grouping multiple elements without adding extra nodes to the DOM (tree).
  // <p>...</p> translates to a paragraph element in HTML.
  // {items.length === 0 && <p>...</p>} -- If true, result is the paragraph element; if false, result is false and nothing is rendered.

  // Event handler (click event as a variable):
  //const handleClick = (event: MouseEvent) => console.log(event); // TypeScript type annotation for the event parameter.

  // Use the map method to iterate over the 'items' array and create a list item for each element:
  // Can only use HTML elements or other React components inside JSX (inside the return statement) -- only exception is {}.
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found, you dummy</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            } // Highlight selected item using conditional (ternary) operator -- set highlight as active if true.
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} // Inline event handler for click events.
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); // Using the ListGroup component inside the App component. Always close React components or else you will get compilation errors.
}

export default ListGroup; // Exporting ListGroup as default object from this module to be used elsewhere.
