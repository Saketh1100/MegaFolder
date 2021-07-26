

window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =new window.SpeechRecognition();

recognition.interimResults=false;

recognition.addEventListener('result',(e)=>
{
  const text=Array.from(e.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join('');
  console.log(text);
  //const array
})

recognition.start();
