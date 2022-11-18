import React from 'react';
import aug26 from "../files/WMRs/aug26.pdf";
import sept2 from "../files/WMRs/sept2.pdf";
import sept9 from "../files/WMRs/sept9_v2.pdf";
import sept16 from "../files/WMRs/sept16.pdf";
import sept23 from "../files/WMRs/sept23.pdf";
import sept30 from "../files/WMRs/sept30.pdf";
import oct7 from "../files/WMRs/oct7.pdf";
import oct21 from "../files/WMRs/oct21.pdf";
import oct28 from "../files/WMRs/oct28.pdf";
import nov4 from "../files/WMRs/nov4.pdf";
import nov11 from "../files/WMRs/nov11.pdf";

export default function WMRs() {

    var wmrList = [
        {
            "id": 12,
            "title": "November 18, 2022",
            "url": nov18
        },
        {
            "id": 11,
            "title": "November 11, 2022",
            "url": nov11
        },
        {
            "id": 10,
            "title": "November 4, 2022",
            "url": nov4
        },
        {
            "id": 9,
            "title": "October 28, 2022",
            "url": oct28
        },
        {
            "id": 8,
            "title": "October 21, 2022",
            "url": oct21
        },
        {
            "id": 7,
            "title": "October 7, 2022",
            "url": oct7
        },
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
