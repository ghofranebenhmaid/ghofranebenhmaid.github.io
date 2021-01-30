import React from 'react';

const STYLES = ['normal--400', 'bold--700', 'lighter--100', 'bolder--800','subtitle'];
const SIZES = [
   'heading--h1',
   'heading--h2',
   'heading--h3',
   'heading--h4',
   'heading--h5',
   'heading--h6',
   'heading--large',
   'heading--medium',
   'heading--small',
];
const Title = (props) => {
   const { children, type, headingStyle, headingSize } = props;

   const checkTitleStyle = STYLES.includes(headingStyle)
      ? headingStyle
      : STYLES[0];
   const checkTitleSize = SIZES.includes(headingSize) ? headingSize : SIZES[0];

   return (
      <span className={`title ${checkTitleStyle} ${checkTitleSize}`}>
         {children}
      </span>
   );
};

export default Title;
