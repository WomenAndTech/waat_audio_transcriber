var fs = require('fs');
var os = require('os');
var path = require('path');
var {BingSpeechClient} = require('bingspeech-api-client');

if (!process.env.COGNITIVESERVICESKEY) {
  console.error('You need to set a COGNITIVESERVICESKEY env var');
  process.exit(1);
}

var bing = new BingSpeechClient(process.env.COGNITIVESERVICESKEY);

/**
 * Speech To Text example
 */
var wave = fs.readFileSync('/Users/raykao/Downloads/audio/' + 'out00003.wav');

  bing.recognizeStream(wave).then(result => {
    console.log('Speech To Text completed');
    console.log(result.results[0].name)
    console.log('\n');
  })
  .catch(err => console.log(err));


// /**
//  * Text To Speech example (default lang & genre)
//  */
// bing.synthesize('All for one and one for all').then(result => {
//   var file = path.join(os.tmpdir(), 'bingspeech-api-client.wav');
//   var wstream = fs.createWriteStream(file);
//   wstream.write(result.wave);
//   console.log('Text To Speech completed. Audio file written to', file);
// });

// /**
//  * Text To Speech example (spanish female)
//  */
// bing.synthesize('Todos para uno y uno para todos', 'es-es', 'female').then(result => {
//   var file = path.join(os.tmpdir(), 'bingspeech-api-client.wav');
//   var wstream = fs.createWriteStream(file);
//   wstream.write(result.wave);
//   console.log('Text To Speech completed. Audio file written to', file);
// });