import React from 'react'

const RotateText = () => {
    return (
        <div>
            <svg
               className='rotate-center'
               viewBox='0 0 100 100'
               
            >
               <defs>
                  <path
                     id='circle'
                     d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
                  />
               </defs>
               <text letter-spacing='2' font-size='12'>
                  <textPath href='#circle'>GHOFRANE BEN HMAID - 2020</textPath>
               </text>
            </svg>
        </div>
    )
}

export default RotateText
