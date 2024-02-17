import React from "react";

const Search = ({ location, setLocation, searchLocation }) => {
  return (
    <div className="text-center px-4 md:px-8 py-4 md:py-8">
      <input
        type="text"
        className="py-2 px-3 md:w-[700px] w-full text-lg rounded-3xl
           border border-gray-200 text-gray-600 placeholder:text-gray-400
           focus:outline-none bg-white-600/100 shadow-md"
        placeholder="Enter Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
      />
    </div>
  );
};

export default Search;