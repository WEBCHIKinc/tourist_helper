import './App.scss';
import { CityCard } from './components/city-card/CityCard';
import { cityService } from './services/cityService';

function App() {
  const cities = cityService.getCities();

  return (
    <div className="App">
        <div className="city-browser-content">
          {cities.map((cityData) => (
            <CityCard key={cityData.name} cityData={cityData} />
          ))}
        </div>
    </div>
  );
}

export default App;
