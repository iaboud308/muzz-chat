import Main from "./Components/Main";
import AppContextProvider from "./Context/AppContext";
import './index.css';


function App() {
  return (
    <div className="">
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </div>
  );
}

export default App;
