import React from 'react';
import loading from './logoloading.gif';

export default () => {
   return (
      <div className='loading flex--center '>
         <div className='loading__text '>
            <img
               src={loading}
               alt='Loading...'
               style={{ width: '80px', margin: '10px auto', display: 'block' }}
            />
            <p style={{ textAlign: 'center' }}>Loading..</p>
         </div>
      </div>
   );
};
