import React, { useState } from 'react';
import styles from '../styles/UploadtoFilestack.module.css'
import * as filestack from 'filestack-js';

const client = filestack.init("ApdLzyLEKReKPidpb0rR3z");

const handleClick = () => {
    client.picker().open();
}

function UploadtoFilestack() {
    return (
        <div className={styles.UploadtoFilestack}>
            <button onClick={handleClick}>Upload</button>
        </div>
    )
}

export default UploadtoFilestack;