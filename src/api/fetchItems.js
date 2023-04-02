import { useEffect, useState } from 'react';

export const getFetchItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://64283f0e46fd35eb7c4eb5cf.mockapi.io/items`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return { data };
};
