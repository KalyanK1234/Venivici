import React, { useState, useEffect } from 'react';
import { fetchRandomData } from './services/apiService';
import ItemCard from './components/ItemCard';
import BanList from './components/BanList';

const App = () => {
  const [item, setItem] = useState(null);
  const [bannedAttributes, setBannedAttributes] = useState([]);

  // Fetch new data, ensuring banned attributes are avoided
  const getNewItem = async () => {
    let newItem;
    do {
      newItem = await fetchRandomData();
    } while (newItem && bannedAttributes.includes(newItem.city));

    setItem(newItem);
  };

  // Handle adding an attribute to the ban list
  const handleAttributeClick = (attribute) => {
    if (!bannedAttributes.includes(attribute)) {
      setBannedAttributes([...bannedAttributes, attribute]);
    }
  };

  // Fetch initial item on mount
  useEffect(() => {
    getNewItem();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Veni Vici!</h1>
      <button onClick={getNewItem} style={{ margin: '1rem' }}>
        Get Random User
      </button>

      <ItemCard item={item} onAttributeClick={handleAttributeClick} />
      <BanList bannedAttributes={bannedAttributes} />
    </div>
  );
};

export default App;
