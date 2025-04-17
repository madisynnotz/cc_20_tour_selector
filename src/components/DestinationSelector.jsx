function DestinationSelector({ tours, selectedDestination, onSelect }) {
    // Grab all unique tour names from the data
    const destinationNames = ['All', ...new Set(tours.map(tour => tour.name))];
  
    return (
      <div className="destination-selector">
        <label htmlFor="destination-select">Choose a destination:</label>
        <select
          id="destination-select"
          value={selectedDestination}
          onChange={(e) => onSelect(e.target.value)}
        >
          {destinationNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;
  