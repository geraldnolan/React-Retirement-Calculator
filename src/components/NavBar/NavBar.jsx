import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-materialize';

class NavBar extends Component {

  render() {

    return (
    <React.Fragment>
      <style jsx>{`

              h1#logo {
                text-indent: 100%;
                white-space: nowrap;
                overflow: hidden;
                background-image: url(../img/legend_logo.svg);
                background-repeat: no-repeat;
                width: 195px;
                height: 66px;
                padding-bottom: 10px;
                background-size: contain;
              }

              .background-header-wrapper {
                background-image: url(../img/header.svg);
                height: 220px;
                margin-top: -15px;
                /*background-size: cover;*/
                width: 100%;
                margin-left:90px;
                background-repeat: no-repeat;
              }

              .background-header-flower {
                background-image: url(../img/header-flower.svg);
                height: 0;
                padding-bottom: 12%;
                /* background-size: 10%; */
                background-repeat: no-repeat;
                display: block;
                position: relative;
                margin-bottom: -10%;
                
              }

      `}</style>
         <div className="background-header-flower">
         </div>
          <Navbar elevation={0} style={{ backgroundColor: "transparent", boxShadow: "none" }} brand='' left>
            <li><Link to='/calculator'>Calculator</Link></li>
            <h1 id="logo">The Legend Group </h1>
          
          </Navbar>
        
        </React.Fragment>
    )
  }
  
}

export default NavBar;

