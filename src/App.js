import "./App.css";
import MainCityPhoto from "./components/main-city-components/MainCityPhoto";
import CityInfo from "./components/city-info/MainCityInfo";
import MainCityNavbar from "./components/main-city-components/MainCityNavbar";

function App() {
  return (
    <div className="App">
      <div>
        <MainCityPhoto />
        <CityInfo />
        <MainCityNavbar />
      </div>
    </div>
  );
}

export default App;
