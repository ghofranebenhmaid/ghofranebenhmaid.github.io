import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import './Header.style.scss';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';


const Navbar = ({ history }) => {
   // State of our Menu
   const [state, setState] = useState({
      initial: false,
      clicked: null,
      menuName: <HiMenuAlt3 />,
   });
   // State of our button
   const [disabled, setDisabled] = useState(false);

   //Use Effect
   useEffect(() => {
      //Listening for page changes.
      history.listen(() => {
         setState({ clicked: false, menuName: <HiMenuAlt3 /> });
      });
   }, [history]);

   // Toggle menu
   const handleMenu = () => {
      disableMenu();
      if (state.initial === false) {
         setState({
            initial: null,
            clicked: true,
            menuName: <HiOutlineX />,
         });
      } else if (state.clicked === true) {
         setState({
            clicked: !state.clicked,
            menuName: <HiMenuAlt3 />,
         });
      } else if (state.clicked === false) {
         setState({
            clicked: !state.clicked,
            menuName: <HiOutlineX />,
         });
      }
   };

   //Determine if out menu button should be disabled
   const disableMenu = () => {
      setDisabled(!disabled);
      setTimeout(() => {
         setDisabled(false);
      }, 1200);
   };

   return (
      <header>
         <div className='container'>
            <div className='wrapper'>
               <div className='inner-header'>
                  <div className='logo nav-links translate-cursor'>
                     <Link to='/'>GHOFRANE.</Link>
                  </div>

                  <div className='menu nav-links'>
                     <button
                        className='menu--btn'
                        disabled={disabled}
                        onClick={handleMenu}
                     >
                        {state.menuName}
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <Hamburger state={state} />
      </header>
   );
};

export default withRouter(Navbar);
