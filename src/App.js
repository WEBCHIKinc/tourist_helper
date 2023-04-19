import "./App.scss";
import CityInfo from "./components/city-info/main-city-info/MainCityInfo";
import MainCityPhoto from "./components/city-info/main-city-components/MainCityPhoto";
import { MainCityNavbar } from "./components/city-info/main-city-components/MainCityNavbar";
import { useCityInfoActions } from "./hooks/useActions";

function App() {
  const { setIsHovered } = useCityInfoActions();
  let hoverTimeout = null;

  function cardMainMouseLeave() {
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  }

  function cardMainMouseEnter() {
    setIsHovered(true);
    clearTimeout(hoverTimeout);
  }

  return (
    <div className="App">
      <div onMouseEnter={cardMainMouseEnter} onMouseLeave={cardMainMouseLeave}>
        <MainCityPhoto />
        <CityInfo />
        <MainCityNavbar />
      </div>
    </div>
  );
}

export default App;
