import React, { useEffect } from 'react';
import PDF from '../../assets/Resume.pdf';

function Resume() {
    return (
        <div className="middle-align">
            <h2>This is the resume page</h2>
            <a href = {PDF} target='_blank' rel="noreferrer">Download my resume</a>
        </div>
    );
}

export default Resume;