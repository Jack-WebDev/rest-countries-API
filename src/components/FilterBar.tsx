import React, { useState } from 'react';

interface DataItem {
  id: number;
  name: string;
  region: string;
  // Add other properties as needed
}

interface Props {
  jsonData?: DataItem[];
}

const FilterComponent: React.FC<Props> = ({ jsonData }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  const filteredData = selectedRegion
    ? jsonData.filter((item) => item.region === selectedRegion)
    : jsonData;

  return (
    <div>
      <label htmlFor="region">Select Region:</label>
      <select id="region" value={selectedRegion} onChange={handleRegionChange}>
        <option value="">All Regions</option>
        {/* Assuming you have a finite set of regions */}
        <option value="Region1">Region 1</option>
        <option value="Region2">Region 2</option>
        {/* Add more options as needed */}
      </select>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
          {/* Render other properties as needed */}
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
