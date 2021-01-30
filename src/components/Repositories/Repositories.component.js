import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.component';


const Repositories = () =>
{
    const [isLoading, setIsLoading] = useState(true);
    const [repositories, setRepositories] = useState([]);


    useEffect(() => {
        (async () =>
        {
      const url = 'https://bitbucket.org/ghofranebenhmaid/ghofrane.dev/raw/4143b52f8bd811cd8b8c0a62070e2a6db72ab499/src/assets/data/data.json';
          
         setIsLoading(true);
         const response = await fetch(url);
         const  {repositories: jsonResponse } = await response.json();
         setRepositories(jsonResponse);
         console.log(jsonResponse);
         setIsLoading(false);
      })();
    }, []);
    
    return (
        <div className='grid'>
            {isLoading && 'Loading...' }
         {!isLoading && repositories.length === 0 && 'Sorry, nothing found.'}
{repositories.length > 0 &&
            repositories.map((data, index) => (
               <Card
                  key={index}
                  image={data.image}
                  title={data.title}
                  goto={data.href}
               />
            ))}
         
        </div>
    )
}

export default Repositories
