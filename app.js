// import * as SDK from 'microsoft-speech-browser-sdk';

const restify = require('restify');
const server = restify.createServer();

const port = process.env.PORT || 4000;

const { BingSpeechClient, VoiceRecognitionResponse } = require('bingspeech-api-client');

const cognitiveServicesSpeechAPIKey = process.env.COGNITIVESERVICESKEY;

const speechToTextClient = new BingSpeechClient(cognitiveServicesSpeechAPIKey);

// speechToTextClient.recognizeStream(audioStream).then(response => console.log(response.results[0]));

function handleStream(stream){
  return new Promise((resolve, reject) => {
    speechToTextClient.recognizeStream(stream)
    .then(response => {
      console.log(response);
      resolve(response);
    })
    .catch(err => {
      console.log(err);
      reject(err);
    });
  });
}

// function RecognizerSetup(SDK, recognitionMode, language, format, subscriptionKey) {
//   let authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);

//   return SDK.Recognizer.Create(recognizerConfig, authentication);
// }


server.post('/', (req, res, next) => {
  req.pipe(handleStream)
  .then(response => console.log(response))
  .catch(err => console.log(err));
  // req.on('data', chunk => {
  
  // });
  // req.on('data', (chunk) => {
  //   speechToTextClient.recognizeStream(chunk)
  //     .then(response => console.log(response.results))
  //     .catch(error => console.log(error));
  // });

  req.on('end',()=>{
    res.send({
      status: 200,
      message: "received"
    });
  });
});

server.get('/liveness', (req, res, next) => {
  const statusCode = 200;

  res.send(statusCode, {
    status: statusCode,
    message: "I'm alive!"
  });
});

server.get('/readiness', (req, res, next) => {
  const statusCode = 200;

  res.send(statusCode, {
    status: statusCode,
      message: "I'm ready!"
   });
});

server.listen(port, function() {
  console.log(`${server.name}:${server.port} listening at ${server.url}`);
});
