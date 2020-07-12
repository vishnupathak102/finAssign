import React,{component} from 'react';

const Header = ()=>{
  
    return (
        <>
     <div className = 'invest-header'>
         <p>Invest</p>
     </div>
     <div className='header-main-div search-background'>
        <p>All Funds</p>
        <p>Screener</p>
        <p>Filter by AMC</p>
    <span >  <i class="fas fa-search "></i></span>
     </div>
     </>
    )
}

export default Header;