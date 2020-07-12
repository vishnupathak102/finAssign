import React,{component} from 'react';
import fundData from  '../funds'
import _ from 'lodash';
import logo from '../logo192.png';
const Body = ()=>{
  console.log(fundData,"fund");
    return (
      <div className='body-main'>
          {
              _.map(fundData.result.funds,val=>(
                  <>
                  <div className = "box-shadow-main"> 
                <div className = "fund-data">
                   <div><img className = "company-logo" src ={logo} /></div>
                   <div>
                       <p>{val.name}</p>
                       <p>{val.FundType}</p>
                   </div>
                   <div><i class="fas fa-chevron-right"></i></div>
                </div>
                <div className = "flex-box">
                <span>Show Performance details</span>
                <span>Invest Now</span>
                </div>
                </div>
                </>
              ))
          }
        
      </div>
    )
}

export default Body;