import { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const onDarkMode = () => {
    setDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} onDarkMode={onDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
