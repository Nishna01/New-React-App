import React, { useState } from 'react';
import './filter.css';
function FilterSidebar() {
  const [selectedRecommendation, setSelectedRecommendation] = useState("");

  // Handle recommendation change
  const handleRecommendationChange = (e) => {
    setSelectedRecommendation(e.target.value);
  };

  return (
    <div className="filter">
      <h2>Filters</h2>

      {/* Gender Filters Section */}
      <div className="filter-section gender-filter">
        <h3>Gender</h3>
        <label>
          <input type="checkbox" /> Male
        </label>
        <label>
          <input type="checkbox" /> Female
        </label>
        <label>
          <input type="checkbox" /> Kids
        </label>
      </div>

  
      <div className="filter-section recommendation-filter">
        <h3>Recommendations</h3>
        <select 
          value={selectedRecommendation} 
          onChange={handleRecommendationChange}
        >
          <option value="">Select</option>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSidebar;
