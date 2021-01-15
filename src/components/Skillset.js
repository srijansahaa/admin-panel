import React from 'react';
import { ReactSVG } from 'react-svg'
import "aos/dist/aos.css";

const Skillset = ({name, percentage, icon, bar, themeType}) => {
    return (
        <div 
            className={themeType} 
            style={{width: "504px"}} 
            data-aos="fade-up"
        >
            <div className="skillSet">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex" style={{marginLeft: "25px", marginBottom: "10px"}}>
                            <ReactSVG src={icon}/>
                            <div style={{marginLeft: "20px"}}>{name}</div>
                        </div>
                        <div style={{marginRight: "25px"}}>{percentage}</div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="skillSet__wrap">
                        <div className="skillSet__wrap--bar" style={{width: bar}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillset