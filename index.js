// const PORT = 8000;
// const axios = require("axios").default;
// const express = require("express");
// // require('dotenv').config()
// const cors = require("cors");

// const app = express();

// app.use(cors());

// app.get('/word', (req, res) => {
//     const options = {
//         method: 'GET',
//         url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
//         params: { count: '10', wordLength: '5' },
//         headers: {
//             'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
//             // 'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//             'X-RapidAPI-Key': '8389fef422msh6f018ad22ce5a23p1f8ab6jsn67ccb40b7ab3',
//         }
//     };

//     axios.request(options).then((response) => {
//         console.log(response.data);
//         res.json(response.data[0]);
//     }).catch((error) => {
//         console.error(error);
//     });
// })

// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));