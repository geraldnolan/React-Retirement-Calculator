import React from 'react'
import { Footer } from 'react-materialize'

const Foot = props => (
  <Footer
    copyrights="&copy; 2019 The Legend Group All Rights Reserved"
      links={
        <ul>
          <p className="white-text"> Find Us on facebook</p>
          <a href="https://www.facebook.com/LincolnInvestment">
            <i alt="LinkedIn Logo" className="fa fa-facebook-square fa-2x" aria-hidden="true" ></i>
          </a>
        </ul>
      }
      >
     
           

           
           
                <a href="https://advisorsite.legendgroup.com/">Financial Professional Login</a><br />
                <a href="http://broker.gotoassist.com/h/lip/">Client Help Desk</a><br />

                <div class="btn-group">
                    <a class="btn dropdown-toggle" data-toggle="dropdown" id="othersites">Visit Other Legend Sites <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="https://www.403bregs.com/">403(b) Plan Sponsors</a></li>
                        <li><a href="https://www.lincolninvestment.com/Advisors">Prospective Advisors</a></li>
                  
				            </ul>
                 </div>
          
      
  </Footer>
);

export default Foot;
