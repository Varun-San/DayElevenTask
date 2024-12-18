import image from "./assets/2890.jpg";
import Rural from "./cities/Rural";
import UrbanCity from "./cities/UrbanCity";

function App() {
  return (
    <>
      <div className="head-div">
        <h2>Welcome to My Blog</h2>
        <UrbanCity />
        <Rural />
      </div>
    </>
  );
}

export default App;
