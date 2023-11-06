import React from "react";

function App() {
  console.log("re-rendering");
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {};

  React.useEffect(() => {
    const timer = setTimeout(() => {
      //Make Server requests
      console.log("Calling server api", value);
    });
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <>
      <h1>Welcome to Javascript debounce</h1>
      <input type="text" onChange={handleChange} value={value} />
      <h2>{value}</h2>
    </>
  );
}

export default App;
