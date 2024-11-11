import TextScene from "../components/Experience";
import Content from "../components/content";
import Products from "../components/Products";
import CustomCursor from "../components/cursor/Cursor";
function Home() {
  return (
    <>
    {/* <CustomCursor/> */}
      <TextScene />
      <Content />
      <Products />
    </>
  );
}

export default Home;