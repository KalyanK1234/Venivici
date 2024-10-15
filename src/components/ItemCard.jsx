const ItemCard = ({ item, onAttributeClick }) => {
  if (!item) return <p>No data available.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <img src={item.image} alt={item.name} style={{ width: '150px' }} />
      <h2>{item.name}</h2>
      <p onClick={() => onAttributeClick(item.city)} style={{ cursor: 'pointer' }}>
        City: {item.city}
      </p>
      <p onClick={() => onAttributeClick(item.country)} style={{ cursor: 'pointer' }}>
        Country: {item.country}
      </p>
    </div>
  );
};

export default ItemCard;
