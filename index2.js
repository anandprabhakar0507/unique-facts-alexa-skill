/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 **/

const Alexa = require('alexa-sdk');

const FACTS = [
"There is a ratio called gods ratio which coincides with a number one point six one eight and this ratio is found almost everywhere in universe,in dna,structure of ancient structures,structures of universe,structure of all including humans and thatswhy it proves mathematically that god is unique.",
"do you know that sundarban delta is largest delta in the world and it is situated in west bengal, india.",
"do you know that the vision capacity of our eyes of five hundred and seventy six megapixels and we can focus more images at faster rate than any artificial cameras.",
"India is the only country to reach on mars using its mars orbiter mission MOM in its first attempt and The all credits goes to ISRO Indian space research organisation and the budget for this mission was very low as approximately 400 crores.",
"nalanda a district in bihar contains one of the world and oldest university named nalanda university and it is now a heritage site and it is the symbol of knowledge and unity among neighbour countries and it is also a pilgrim place for people of many religions,when you go to bihar please have a visit to nalanda.",
"largest mountain peak in the world is mount everest in nepal its height is eight thousand eight hundred and forty eight metres and second largest is kanchanjanghaa in india and its height is about six and half thousand metres.",
"the ajanta and ellora caves in aurangabad maharashtra is made by cutting a mountain kept inverted and so it is said to be built by the aliens as in the present time none of human made technologies are able to create this type of architecture.",
"The united nations was established on twenty four of october in year ninteen forty five and united nation is the oragnisation for all nation that maintains peace in world,it has six major parts which solves different problems between and in countries.",
"The gmail was earlier garfield.email.com and later google purchased it from garfield and paid him large amount for this.",
"do you know that the branch of science that deals with data,data analysis and data experiments is known as data science and according to a fact the job data scientist is the sexiest job in the twenty first century.",
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
