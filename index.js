/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 **/

const Alexa = require('alexa-sdk');

const FACTS = [
"Money notes are not made from paper, they are made mostly from a special blend of cotton and linen. In 1932, when a shortage of cash occurred in Tenino, Washington, USA, notes were made out of wood for a brief period.",
"If you sneeze too hard, you can fracture a rib.",
"23% of all photocopier faults worldwide are caused by people sitting on them and photocopying their butts.",
"Every human spent about half an hour as a single cell.",
"Over 75% of people who read this will try to lick their elbow.",
"In a study of 200,000 ostriches over a period of 80 years, no one reported a single case where an ostrich buried its head in the sand",
"Wearing headphones for just an hour will increase the bacteria in your ear by 700 times.",
"Every year about 98% of atoms in your body are replaced.",
"More than 50% of the people in the world have never made or received a telephone call.",
"People say "Bless you" when you sneeze because when you sneeze,your heart stops for a mili-second.",
"If you sneeze too hard, you can fracture a rib",
"Rats multiply so quickly that in 18 months, two rats could have over a million descendants",
];

const SKILL_NAME = 'My School Facts';
const GET_FACT_MESSAGE = "Here's your school fact: ";
const HELP_MESSAGE = 'You can say tell me a fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetFactIntent');
  },
  'GetFactIntent': function () {
    const factArr = FACTS;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(':responseReady');
  },
  'SessionEndedRequest': function () {
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = "amzn1.ask.skill.cc9de6ba-effa-4c14-9196-c4c825e510be";
  alexa.registerHandlers(handlers);
  alexa.execute();
};
