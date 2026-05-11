import axios from 'axios';
(async () => {
   try {
       const url = 'https://chatgpt.com/';
       console.log("\nTrying jina.ai...");
       const px = await axios.get('https://r.jina.ai/' + url);
       console.log("Jina status:", px.status, px.data.substring(0, 100));
   } catch(e: any) {
       console.log("Error:", e.response ? e.response.status : e.message);
   }
})();
