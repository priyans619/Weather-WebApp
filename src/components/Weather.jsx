import React from 'react'

const Weather = ({ weatherData }) => {

  return (
    <div className=''>
      {weatherData.weather ? (
        <div className="w-[500px] h-[250px] bg-blue-300 shadow-lg rounded-xl m-auto
         relative px-8 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex- flex-col items-start justify-between h-full">
                <div>
                  <p className='text-xl'>
                    {weatherData.name},
                    {weatherData.sys.country}
                  </p>
                  <p className='text-sm'>
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className='text-6xl font-semibold'> 
                  {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
                <div className="relative">
                  <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-[120px]' />
                </div>
            </div>
          </div>

        </div>
      ) : null}
    </div>
  )
}

export default Weather