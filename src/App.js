import "./App.scss";
import { CityInfo } from "./components/city-info/CityInfo";

import { MainCityNavbar } from "./components/city-info/main-city-components/MainCityNavbar";
import { CityPhoto } from "./components/city-photo/CityPhoto";

function App() {
  return (
    <div className="App">
      <div className="city-browser-content">
        <div className="main__box">
          <CityPhoto />
          <CityInfo />
          {/* <MainCityNavbar /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
