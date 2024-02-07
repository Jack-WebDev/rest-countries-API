import { useState } from "react";
import Card from "../components/Card";

import data from "../data.json";

type Theme = "light__mode" | "dark__mode";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [theme, setTheme] = useState<Theme>("light__mode");

  localStorage.setItem("theme", theme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light__mode" ? "dark__mode" : "light__mode"
    );
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((country) => {
    const matchesRegion = !selectedRegion || country.region === selectedRegion;
    const matchesSearch =
      !searchQuery ||
      country.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className={`theme ${theme}`}>
      <header>
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>{theme}</button>
      </header>
      <div className="filters">
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
        />

        <select
          id="region"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <main>
        {filteredData.map((country, index) => (
          <div key={index}>
            <Card
              imgSrc={country.flags.svg}
              title={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
