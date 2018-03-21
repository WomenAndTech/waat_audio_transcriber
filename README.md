# Women&&Tech Audio Transcription Service

## Goal

Currently it takes over 20hours to get an interview published.  The goal of this project is to make transcribing interivews faster and easier, with the end result being that we are able to cut the publishing time down to something more acceptable. 

## Tools

- Slack
- Microsoft Bot Framework
- Azure Functions
- Azure Blob Storage
- Azure Cognitive Services Speech API

## Workflow

- A contributor/team member will use Slack, and will be able to upload a new audio file (interview) to a specific channel (e.g. #transribe)
- A bot will then pick up the new file and upload it to Azure Blob Storage
- An Azure Function will fire as a result of the new uploaded audio file
- The Azure Function will trigger Azure Cognitive Services (Speech API) to process the audio file
- Azure Cognitive Services will transcribe the file and return the full text of the interview
- The Azure Function will pass the returned transcribed interivew back to the Slack Channel (or save it to another storage type e.g. Database or as a text file in Azure Blob Storage...TBD)

## Contributors

- [Ray Kao](https://github.com/raykao)