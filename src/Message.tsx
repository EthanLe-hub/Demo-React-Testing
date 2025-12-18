// .ts for plain TypeScript files, .tsx for React Components.

function Message() { // PascalCasing for React components. 

    // What the UI is going to look like:
    // JSX: JavaScript XML 
    const name = 'Lloyd'; // Embedding JavaScript inside JSX. 
    if (name) { // If name exists, show personalized message. 
        return <h1>Hello {name}</h1>; // Embed the value of the variable name inside the JSX. 
    }
    // If name is falsy (null, undefined, empty string, etc.), show generic message. 
    return <h1>Hello World</h1>; // This code is going to get compiled into JavaScript under the hood. 
}

export default Message; // Export as default object from this module. 