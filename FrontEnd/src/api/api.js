// export async function checkClaim(text, modelDir = "./news_model") {
//   const resp = await fetch("http://localhost:8000/predict", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ text, model_dir: modelDir }),
//   });
//   if (!resp.ok) throw new Error(`Server error: ${resp.status}`);
//   return resp.json();
// }

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
