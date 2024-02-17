import axios from "axios"
import { useState } from "react"

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");


  const searchLocation = (event) => {
    if(event.key === "Enter") {
      if (!location.trim()) {
        return;
      }
      console.log("Location:", location);
      
      // console.log("URL:", url);
      axios.get(url)
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
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-2 px-3 w-[700px] text-lg rounded-3xl
           border border-gray-200 text-gray-600 placeholder:text-gray-400
           focus:outline-none bg-white-600/100 shadow-md "
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
    </div>


  )
}

export default App
