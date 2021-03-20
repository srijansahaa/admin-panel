import React from 'react';
import Heading from './Heading';
import Worktiles from './Worktiles';
import ReadyGo from '../assets/ReadyGo.PNG';
import WeatherFinder from '../assets/WeatherFinder.PNG';
import ZimbabweEmbassy from '../assets/ZimbabweEmbassy.png';
import Unsplash from '../assets/Unsplash.PNG';
import InstructorHQ from '../assets/InstructorHQ.PNG';
import Maynooth from '../assets/Maynooth.PNG';
import RentedPlanet from '../assets/RentedPlanet.png';
import ShivaIndustries from '../assets/ShivaIndustries.png'

function Work(themeType) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Heading heading={"Work"} version={themeType.themeType.themeType === "dark-theme" ? "darkSecHeadings" : "secHeadings"}/>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-around workRows">
                    <Worktiles
                        image={ReadyGo}
                        link={"https://readygo.netlify.app/"}
                        type={"WEBSITE"}
                        themeType={themeType.themeType.themeType}
                    />
                    <Worktiles
                        image={WeatherFinder}
                        link={"https://find-your-weather.netlify.app/"}
                        type={"WEBSITE"}
                        themeType={themeType.themeType.themeType}
                    />
                </div>
                <div className="row d-flex justify-content-around workRows">
                    <Worktiles
                        image={ZimbabweEmbassy}
                        link={"https://zimbabweembassy.netlify.app/"}
                        type={"WEBSITE"}
                        themeType={themeType.themeType.themeType}
                    />
                    <Worktiles
                        image={Unsplash}
                        link={"https://unsplashimagegallery.netlify.app/"}
                        type={"WEBSITE"}
                        themeType={themeType.themeType.themeType}
                    />
                </div>
                <div className="row d-flex justify-content-around workRows">
                    <Worktiles
                        image={InstructorHQ}
                        link={"https://xd.adobe.com/view/9e5d15f2-523e-497b-42c5-508938d2f8c4-e86c/?fullscreen"}
                        type={"UI DESIGN"}
                        themeType={themeType.themeType.themeType}
                    />
                    <Worktiles
                        image={Maynooth}
                        link={"https://xd.adobe.com/view/ad6fd2c3-3695-4ef1-5341-0c516779dea8-db5e/?fullscreen"}
                        type={"UI DESIGN"}
                        themeType={themeType.themeType.themeType}
                    />
                </div>
                <div className="row d-flex justify-content-around workRows">
                    <Worktiles
                        image={RentedPlanet}
                        link={"https://www.figma.com/file/I1dduSEBxhOde77icGT17A/UI?node-id=0%3A1"}
                        type={"UI DESIGN"}
                        themeType={themeType.themeType.themeType}
                    />
                    <Worktiles
                        image={ShivaIndustries}
                        link={"https://www.sumocement.in"}
                        type={"WEBSITE"}
                        themeType={themeType.themeType.themeType}
                    />
                </div>
            </div>
        </div>
    )
}

export default Work