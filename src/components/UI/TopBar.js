import React from "react";

import AccountDropdown from './AccountDropdown';
import AvailableBalance from './AvailableBalance';


const TopBar = () => {
    return (
        <div className="container topBar-bottom-border mw-100 padding-10">
            <div className="row">
                <div className="col-8">
                   
                </div>
                <div className="col-2">
                    <AvailableBalance></AvailableBalance>
                </div>
                <div className="col-2">
                    <AccountDropdown></AccountDropdown>
                </div>
            </div>
        </div>
    );
};

export default TopBar;