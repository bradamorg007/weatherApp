import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = (url) => {

    return new Promise((success, reject) => {
        axios
            .get(url)
            .then((data) => {
                success(data);
            })
            .catch((error) => {
                reject(error);
            })
    });

};

export default Fetch;