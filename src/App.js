import "./App.scss";
import MainCityPhoto from "./components/main-city-components/MainCityPhoto";
import CityInfo from "./components/city-info/MainCityInfo";
import MainCityNavbar from "./components/main-city-components/MainCityNavbar";
import { useSelector, useDispatch } from "react-redux";
import { setIsHovered } from "./store/reducers/city-info";

function App() {
  const dispatch = useDispatch();
  let hoverTimeout = null;

  function cardMainMouseLeave() {
    hoverTimeout = setTimeout(() => {
      dispatch(setIsHovered(false));
    }, 3000);
  }

  function cardMainMouseEnter() {
    dispatch(setIsHovered(true));
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
