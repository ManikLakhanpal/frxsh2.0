import Home from "./containers/Home";
import Shop from "./containers/Shop";
import { Context } from "./context/Context";
import CustomCursor from "./components/cursor/Cursor";
import NavigationBar from "./containers/NavigationBar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <Context>
      <CustomCursor />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic Route for Shop Categories */}
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Context>
  );
}

export default App;
