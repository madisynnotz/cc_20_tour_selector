import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

function App() {
  // Set up state for the tours, loading status, errors, and which destination is selected
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All');

  // This function fetches tour data from the API
  const fetchTours = async () => {
    setLoading(true); // start loading
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project');
      const data = await response.json();
      setTours(data); // save the data to state
      setError(null); // clear any previous errors
    } catch (err) {
      setError('Couldn’t load tours. Try again later.');
    } finally {
      setLoading(false); // done loading either way
    }
  };

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Removes a tour card when the "Not Interested" button is clicked
  const handleRemoveTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  // Filter tours based on the selected destination (or show all)
  const filteredTours =
    selectedDestination === 'All'
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <div className="app">
      <h1>Tour Destination Selector</h1>

      {/* Dropdown to pick a destination */}
      <DestinationSelector
        tours={tours}
        selectedDestination={selectedDestination}
        onSelect={setSelectedDestination}
      />

      {/* Gallery to show filtered tour cards */}
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={handleRemoveTour}
        onRefresh={fetchTours}
      />
    </div>
  );
}

export default App;

