import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
   const cursorRef = useRef();

   useEffect(() => {
      document.addEventListener('mousemove', (e) => {
         const { clientX, clientY } = e;
         const mouseX = clientX - cursorRef.current.clientWidth / 2;
         const mouseY = clientY - cursorRef.current.clientHeight / 2;

         // cursorRef.current.style.transform = `translate3d(${ mouseX }px, ${ mouseY }px, 0)`;
         cursorRef.current.setAttribute(
            'style',
            `top:${mouseY}px; left:${mouseX}px;`
         );
      });
   }, []);
   useEffect(() => {
      let navLinks = document.querySelectorAll('.nav-links');
      
      navLinks.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-grow');
            // link.classList.remove('hovered-link');
         });
         link.addEventListener('mouseenter', () => {
            cursorRef.current.classList.add('link-grow');
            // link.classList.add('hovered-link');
         });
      });

     
   }, []);
   useEffect(() => {
      let footerCursor = document.querySelectorAll('.footer-cursor');
      footerCursor.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('footer-cursor--white');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('footer-cursor--white');
         });
      });
   }, []);
   useEffect(() => {
      let footerCursor = document.querySelectorAll('.translate-cursor');
      footerCursor.forEach((link) => {
         link.addEventListener('mousedown', () => {
            cursorRef.current.classList.add('translate-cursor-router');
         });
           link.addEventListener('mouseup', () => {
              cursorRef.current.classList.remove('translate-cursor-router');
           });
      });
   }, []);

   return <div className='cursor' ref={cursorRef}></div>;
};

export default CustomCursor;
