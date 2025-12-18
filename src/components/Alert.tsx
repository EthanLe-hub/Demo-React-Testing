import { ReactNode } from "react"; // Importing ReactNode type for typing the children prop.

interface AlertProps {
  children: ReactNode; // strings, fragments, HTML elements, etc.
  onClose: () => void; // Generic onClose handler (function that takes no parameters and returns nothing) to be reuseable.
}

const Alert = ({ children, onClose }: AlertProps) => {
  // Set the onClick prop to the onClose function passed from the outside (from App.tsx) to handle the close button click event.
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  ); // Return the Alert component with default Bootstrap styling, printing the text prop.
};

export default Alert;
