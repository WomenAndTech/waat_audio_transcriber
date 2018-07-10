import * as SDK from 'microsoft-speech-browser-sdk';

const subscriptionKey = process.env.COGNITIVESERVICESKEY;
const language = "en-CA";
const speechResultFormat = "Simple";

function RecognizerSetup(SDK, recognitionMode, language, format, subscriptionKey, audioFile) {          
  const recognitionMode = SDK.RecognitionMode.Conversation;

  const recognizerConfig = new SDK.RecognizerConfig(
    new SDK.SpeechConfig(
      new SDK.Context(
        new SDK.OS(navigator.userAgent, "Browser", null),
        new SDK.Device("SpeechSample", "SpeechSample", "1.0.00000")
      )
    ),
    recognitionMode,
    language, // Supported languages are specific to each recognition mode. Refer to docs.
    format); // SDK.SpeechResultFormat.Simple (Options - Simple/Detailed)

  const authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);
  
  return SDK.CreateRecognizerWithFileAudioSource(recognizerConfig, authentication, audioFile);
}