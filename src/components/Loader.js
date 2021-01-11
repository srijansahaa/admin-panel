import React from 'react';

function Loader(themeType) {
    console.log(themeType.themeType)
    return (
        <div className="loader">
            WAIT FOR IT <span></span>
        </div>
    )
}

export default Loader