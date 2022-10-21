import React from 'react'

import ethanLogs from "../files/logs/Ethan's Logs.pdf";
import kolbyLogs from "../files/logs/Kolby's Logs.pdf";
import lindsayLogs from "../files/logs/Lindsay's Logs.pdf";
import hopeLogs from "../files/logs/Hope's Logs.pdf";

export default function Logs() {

    return (
        <>
            <h1>Individual Logs</h1>
            <p>Here are the individual logs for the project.</p>
            <ul>
                {/* Ethan */}
                <li>
                    <a href={ethanLogs}>Ethan's Logs</a>
                </li>

                {/* Kolby */}
                <li>
                    <a href={kolbyLogs}>Kolby's Logs</a>
                </li>

                {/* Lindsay */}
                <li>
                    <a href={lindsayLogs}>Lindsay's Logs</a>
                </li>

                {/* Hope */}
                <li>
                    <a href={hopeLogs}>Hope's Logs</a>
                </li>
            </ul>
        </>
    )
}
