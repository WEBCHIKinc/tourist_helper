import "./App.scss";
import CityInfo from "./components/city-info/main-city-info/MainCityInfo";
import MainCityPhoto from "./components/city-info/main-city-components/MainCityPhoto";
import { MainCityNavbar } from "./components/city-info/main-city-components/MainCityNavbar";
import { CityPhoto } from "./components/city-photo/city-photo";

function App() {
  return (
    <div className="App">
      <div className="city-browser-content">
        <div className="main__box">
          <CityPhoto />
          <CityInfo />
          <MainCityNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
