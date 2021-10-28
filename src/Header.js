import React from 'react';

import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="header_left">
                <img src="https://www.arise.ph/wp-content/uploads/2021/10/arise-new-logo-small-high-res.png" alt="arise-logo"></img>
                
                <div className="header_menubar">
                    <button>Home</button>
                    <button>Home</button>
                    <button>Home</button>
                </div>

            </div>

            <div className="header_right">
                {/* image source will be changed once database is available */}
                <img src="https://www.apc.edu.ph/wp-content/uploads/2019/10/03_Seal-of-APC.png" alt="apc-logo"></img>

                <div className="header_menubar">
                    <button>Home</button>
                </div>

            </div>

        </div>
    )
    
}

export default Header;
