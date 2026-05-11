import axios from 'axios';
(async () => {
   try {
       const url = 'https://chatgpt.com/';
       console.log("\nTrying jina.ai with html accept...");
       const px = await axios.get('https://r.jina.ai/' + url, {
         headers: { 'Accept': 'text/html' }
       });
       console.log("Jina status:", px.status, px.headers['content-type'], px.data.substring(0, 100));
   } catch(e: any) {
       console.log("Error:", e.response ? e.response.status : e.message);
   }
})();
