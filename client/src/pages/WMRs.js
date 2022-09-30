import React from 'react';
import aug26 from "../files/WMRs/aug26.pdf";
import sept2 from "../files/WMRs/sept2.pdf";
import sept9 from "../files/WMRs/sept9_v2.pdf";
import sept16 from "../files/WMRs/sept16.pdf";
import sept23 from "../files/WMRs/sept23.pdf";
import sept30 from "../files/WMRs/sept30.pdf";

export default function WMRs() {

    var wmrList = [
        {
            "id": 6,
            "title": "September 30, 2022",
            "url": sept30
        },
        {
            "id": 5,
            "title": "September 23, 2022",
            "url": sept23
        },
        {
            "id": 4,
            "title": "September 16, 2022",
            "url": sept16
        },
        {
            "id": 3,
            "title": "September 9, 2022",
            "url": sept9
        },
        {
            "id": 2,
            "title": "September 2, 2022",
            "url": sept2
        },
        {
            "id": 1,
            "title": "August 26, 2022",
            "url": aug26
        }
    ];


    return (
        <>
            <h1>Weekly Management Reports</h1>
            <p>Here are the weekly management reports for the project.</p>
            <ul>
                {wmrList.map((wmr) => (
                    <li key={wmr.id}>
                        <a href={wmr.url}>{wmr.title}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}
