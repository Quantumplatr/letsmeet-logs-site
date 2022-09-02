import React from 'react'
import { Table } from 'react-bootstrap'

import ethan_aug26 from "../files/logs/ethan/Christensen26August2022.pdf";
import kolby_aug26 from "../files/logs/kolby/Kunz26August2022.pdf";
import hope_aug26 from "../files/logs/hope/Welch26August2022.pdf";
import lindsay_aug26 from "../files/logs/lindsay/Wilde26August2022.pdf";

import ethan_sept2 from "../files/logs/ethan/Christensen2September2022.pdf";
import kolby_sept2 from "../files/logs/kolby/Kunz2September2022.pdf";
import hope_sept2 from "../files/logs/hope/Welch2September2022.pdf";
import lindsay_sept2 from "../files/logs/lindsay/Wilde2September2022.pdf";



export default function Logs() {

    var logList = [
        {
            "week": "8/29 - 9/2",
            "ethan": ethan_sept2,
            "kolby": kolby_sept2,
            "hope": hope_sept2,
            "lindsay": lindsay_sept2
        },
        {
            "week": "8/22 - 8/26",
            "ethan": ethan_aug26,
            "kolby": kolby_aug26,
            "hope": hope_aug26,
            "lindsay": lindsay_aug26
        }
    ];

    return (
        <>
            <h1>Individual Logs</h1>
            <p>Here are the individual logs for the project.</p>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Week</th>
                        <th>Ethan Christensen</th>
                        <th>Kolby Kunz</th>
                        <th>Hope Welch</th>
                        <th>Lindsay Wilde</th>
                    </tr>
                </thead>
                <tbody>
                    {logList.map((log) => (
                        <tr key={log.week}>
                            <td>{log.week}</td>
                            <td>
                                <a href={log.ethan} target="_blank">Ethan</a>
                            </td>
                            <td>
                                <a href={log.kolby} target="_blank">Kolby</a>
                            </td>
                            <td>
                                <a href={log.hope} target="_blank">Hope</a>
                            </td>
                            <td>
                                <a href={log.lindsay} target="_blank">Lindsay</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
