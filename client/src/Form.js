import { createContext } from "react";
import "./App.css";
import Form from "./pages/Home/Home.js";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
   const [ThemeContext, setTheme] = useState("light");
   const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
   };
   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
         <Form />
      </div>
      </ThemeContext.Provider>
   );
}

export default App;