import React, { useEffect, useState } from 'react';

import Card from '../Card/Card.component';

const Tiles = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [tiles, setTiles] = useState([]);

   useEffect(() => {
      (async () =>
      {
         
         setIsLoading(true);
         const response = await fetch(
            'https://bitbucket.org/ghofranebenhmaid/ghofrane.dev/raw/4143b52f8bd811cd8b8c0a62070e2a6db72ab499/src/assets/data/data.json'
         );
         const { tiles: jsonResponse } = await response.json();

         setTiles(jsonResponse);
         setIsLoading(false);
      })();
   }, []);
   return (
      <div className='tiles container  flex--wrap'>
         {isLoading && 'Loading...'}
         {!isLoading && tiles.length === 0 && 'Sorry, nothing found.'}
         {tiles.length > 0 &&
            tiles.map((data, index) => (
               <Card
                  key={index}
                  image={data.image}
                  title={data.title}
                  discription={data.discription}
                  goto={data.href}
               />
            ))}
      </div>
   );
};

export default Tiles;
