import axios from "axios"
import { useState } from "react"
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");


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
  }
  return (
    <div className="w-screen h-screen bg-gradient ">
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
