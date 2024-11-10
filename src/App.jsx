import Home from "./containers/Home";
import Shop from "./containers/Shop";
import NavigationBar from "./containers/NavigationBar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
    
  );
}

export default App;
