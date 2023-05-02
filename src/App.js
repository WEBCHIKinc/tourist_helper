import "./App.scss";
import CityInfo from "./components/city-info/main-city-info/MainCityInfo";
import MainCityPhoto from "./components/city-info/main-city-components/MainCityPhoto";
import { MainCityNavbar } from "./components/city-info/main-city-components/MainCityNavbar";

function App() {
  return (
    <div className="App">
      <div className="city-browser-content">
        <div className="main__box">
          <MainCityPhoto />
          <CityInfo />
          <MainCityNavbar />
        </div>
        <div className="main__box">
          <MainCityPhoto />
          <CityInfo />
          <MainCityNavbar />
        </div>
        <div className="main__box">
          <MainCityPhoto />
          <CityInfo />
          <MainCityNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
