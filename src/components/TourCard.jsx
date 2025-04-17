function TourCard({ tour, onRemove }) {
    const { id, name, image, info, price } = tour;
  
    return (
      <div className="tour-card">
        <img src={image} alt={name} style={{ width: '300px', height: '200px' }} />
        <div className="tour-details">
          <h2>{name}</h2>
          <p><strong>Price:</strong> ${price}</p>
          <p>{info}</p>
          <button onClick={() => onRemove(id)}>Not Interested</button>
        </div>
      </div>
    );
  }
  
  export default TourCard;
  