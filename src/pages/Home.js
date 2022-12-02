import React from 'react';
import designDoc from "../files/designDocs/designDoc-2022_12_01.pdf";
import userGuide from "../files/userGuides/userGuide-2022_10_20.pdf";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <h3>Important Links</h3>
            <ul>
                {/* Web App */}
                <li>
                    <a href="http://ec2-54-163-42-31.compute-1.amazonaws.com/">Our web app</a>
                </li>

                {/* Design Doc */}
                <li>
                    <a href={designDoc}>Our design document</a>
                </li>

                {/* User Guide */}
                <li>
                    <a href={userGuide}>Our user guide</a>
                </li>

                {/* Web App Repo */}
                <li>
                    <a href="https://github.com/KolbyRKunz/Let-s-Meet">Our web app repo</a>
                </li>

                {/* Mobile App Repo */}
                <li>
                    <a href="https://github.com/hopefully-purple/Mobile-Let-s-Meet">Our mobile app repo</a>
                </li>

                {/* Mockups */}
                <li>
                    <a href="https://www.figma.com/file/Twr1HGhmsy7gqEmIASeMBn/Let's-Meet-(Proto)">Our mockups</a>
                </li>
            </ul>
        </>
    )
}
