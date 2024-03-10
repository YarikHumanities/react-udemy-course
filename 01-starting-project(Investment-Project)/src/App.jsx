import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  const [userInput, setUserInput] = useState({
    initial: 0,
    annual: 0,
    expected: 0,
    duration: 0,
  });
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {userInput.duration >= 1 ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than 0 (ZERO)</p>
      )}
    </>
  );
}

export default App;
