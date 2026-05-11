async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/extract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://chatgpt.com/share/6a01bd82-97b8-83e8-8fd1-51f43' })
    });
    const text = await res.text();
    console.log(res.status, text.substring(0, 500));
  } catch(e){
    console.error(e);
  }
}
test();
