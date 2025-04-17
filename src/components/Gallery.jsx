import TourCard from './TourCard';

function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  // If it's still loading, show a simple message
  if (loading) {
    return <p>Loading tours...</p>;
  }

  // If something went wrong during fetch
  if (error) {
    return <p>{error}</p>;
  }

  // If no tours are left, show a reset button
  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  // Otherwise, show the list of TourCards
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;
