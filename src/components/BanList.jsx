const BanList = ({ bannedAttributes }) => (
    <div style={{ marginTop: '1rem' }}>
      <h3>Banned Attributes:</h3>
      {bannedAttributes.length === 0 ? (
        <p>No banned attributes.</p>
      ) : (
        <ul>
          {bannedAttributes.map((attr, index) => (
            <li key={index}>{attr}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default BanList;
  