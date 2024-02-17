import axios from "axios"
import { useState , useEffect} from "react"
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "ccc7a45803704b0e7d89b5a56001dee9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      if (!location.trim()) {
        return;
      }
      console.log("Location:", location);

      // console.log("URL:", url);
      axios
        .get(url)
        .then((res) => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
      setLocation("")
    }
  };

  useEffect(() => {
    const defaultCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=${API_KEY}`;
    axios
      .get(defaultCityUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching default city weather data:", error);
      });
  }, [API_KEY]);

  return (
    <div className="w-screen h-screen bg-gradient ">
      <p className="text-3xl text-center font-semibold py-2">Welcome to Weather App</p>
      <Search
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <Weather weatherData={data} />
    </div>

  )
}

export default App
