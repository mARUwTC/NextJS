import React, { useState } from 'react';
import styles from '../styles/UploadbyHTTPrequest.module.css';

function handleClick(event) {
    console.log(event.target.value);
}

function UploadbyHTTPrequest() {
    return (
        <div className={styles.UploadbyHTTPrequest}>
            <button onClick={handleClick}>Upload</button>
        </div>
    )
}

export default UploadbyHTTPrequest;