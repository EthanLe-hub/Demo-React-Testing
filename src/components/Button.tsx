import { ReactNode } from "react"; // Importing ReactNode type for typing the children prop.

// To make the Button text dynamic, we will use the children prop:
interface ButtonProps {
  // Define props type here if needed in the future:
  children: ReactNode; // Accept any valid ReactNode as children.
  color?: "primary" | "secondary" | "danger"; // Button color as a string prop -- the "?" makes it an OPTIONAL parameter when rendering Button.tsx inside App.tsx.
  // This specification means that the color parameter can only be one of these three string values (otherwise COMPILER will throw error).
  onClick: () => void; // Generic onClick handler (function that takes no parameters and returns nothing) to be reuseable.
}

const Button = ({ children, color = "danger", onClick }: ButtonProps) => {
  // color is going to be a string prop passed from the outside (from App.tsx).
  // onClick is going to be a function that is passed from the outside (from App.tsx).
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}; // Return a Bootstrap styled button (in the style of "danger") with the children prop.

export default Button;
