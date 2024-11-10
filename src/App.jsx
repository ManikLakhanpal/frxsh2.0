import Home from "./containers/Home";
import Shop from "./containers/Shop";
import CustomCursor from "./components/cursor/Cursor";
import NavigationBar from "./containers/NavigationBar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <CustomCursor/>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
    
  );
}

export default App;
