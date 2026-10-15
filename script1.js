import dotenv from 'dotenv';
dotenv.config();
import axios from "axios";
import { useState } from 'react';

const api = process.env.API
// console.log(api)

async function fetchApi(req,res) {
    const quoteElement = document.getElementById("quote");
    try {
        
        const response = await axios.get(api);
        console.log(response.data.quote);
        
        // feeding  the response to html
        quoteElement.textContent=response.data.quote;
    } catch (error) {
        console.error (error);
    }
}

fetchApi()

export default fetchApi; 
