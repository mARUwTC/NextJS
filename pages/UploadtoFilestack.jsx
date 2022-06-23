import React, { useState } from 'react';
import styles from '../styles/UploadtoFilestack.module.css'
import * as filestack from 'filestack-js';

function UploadtoFilestack() {

    const client = filestack.init("ApdLzyLEKReKPidpb0rR3z");

    const options = {
        onFileUploadFinished(file) {
            console.log(file.url);
            return (
                {url}
            );
        }
    }

    const handleClick = () => {
        client.picker(options).open();
    }

    return (
        <>
        <div className={styles.UploadtoFilestack}>
            <button onClick={handleClick}>Upload</button>
            <options></options>
        </div>
        </>
    )
}

export default UploadtoFilestack;