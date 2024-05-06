import { FunctionComponent } from "react";
import CustomNavBar from "./pages/navBar/customNavBar";
import Login from "./pages/inlog/inlogpage";

const App: FunctionComponent = () => {
  
  return (
    <>
      <CustomNavBar />
      <Login />
    </>
  );
}

export default App;