import { useState } from "react";
import Output from "./output";

function Greetings() {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <>
      <h2>Hello World!!</h2>
      {!changeText && <Output>It's good to be alive.</Output>}
      {changeText && <Output>Text Changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </>
  );
}

export default Greetings;
