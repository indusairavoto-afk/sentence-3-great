async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/extract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://chatgpt.com/share/67a36fd4-dc24-8002-aac6-ddb17adca3ea' })
    });
    const text = await res.text();
    console.log(res.status, text.substring(0, 500));
  } catch(e){
    console.error(e);
  }
}
test();
