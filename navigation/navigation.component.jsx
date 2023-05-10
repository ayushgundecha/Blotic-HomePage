import { Outlet , Link } from 'react-router-dom';
import './navigation.styles.css';
import { Fragment } from 'react';
import {ReactComponent as Bloticlogo} from '../../Assets/blotic-logo.svg';

const Navigation=() => {
    return(
       <Fragment>
       <div className="navigation h-28 bg-navcolor w-full justify-between flex mb-0">
       <Link className='logo-container h-full w-16 items-center' to='/'>
       <Bloticlogo className='logo'/>
       </Link>
       <div className='nav-link-conatiner flex justify-end w-1/2 h-full items-center'>
       <Link className='nav-link cursor-pointer p-4'>AboutUs</Link>
       <Link className='nav-link cursor-pointer p-4'>Event</Link>
       <Link className='nav-link cursor-pointer p-4'>Learning</Link>
       <Link className='nav-link cursor-pointer p-4'>ContactUs</Link>
       </div>
       
       </div>
       
       <Outlet/>
       </Fragment>
       
    );
};

export default Navigation;