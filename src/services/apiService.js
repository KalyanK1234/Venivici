import axios from 'axios';

// Example API endpoint – You can replace it with your preferred API
const API_URL = 'https://randomuser.me/api/';

export const fetchRandomData = async () => {
  try {
    const response = await axios.get(API_URL);
    const { name, picture, location } = response.data.results[0];
    return {
      name: `${name.first} ${name.last}`,
      image: picture.large,
      city: location.city,
      country: location.country,
    };
  } catch (error) {
    console.error('API fetch error:', error);
    return null;
  }
};
