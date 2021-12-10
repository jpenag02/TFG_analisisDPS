'use strict';

// include the testing framework
const alexaTest = require('alexa-skill-test-framework');

// Initialise the testing framework
alexaTest.initialize(
	require('./index.js'),
	'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
	'amzn1.ask.account.VOID'
);

// tests the behavior of the skill's LaunchRequest
describe('TFG Skill', function() {
  describe("LaunchRequest", function () {
		alexaTest.test([
			{
				request: alexaTest.getLaunchRequest(),
				says: "Hola, ¿quién eres?", repromptsNothing: false, shouldEndSession: false
			}
		]);
	});


  // tests the behavior of the skill's RegisterNameIntent
	describe('RegisterNameIntent', function () {
		const slot = {'name': 'Juan'};
		const requestWithSlot = alexaTest.getIntentRequest('RegisterNameIntent', slot);
    let speakOutput = "Hola " + slot.name + ", ¿Cuántos años tienes?." 
    + "Para entenderlo claramente, por favor, utiliza la fórmula: Tengo diez años";
			
		alexaTest.test([
			{
				request: requestWithSlot,
				says: speakOutput, shouldEndSession: false, repromptsNothing: false
			}
		]);
	});

  // tests the behavior of the skill's RegisterAgeIntent
	describe('RegisterAgeIntent', function () {
		const slot = {'age': 5};
		const requestWithSlot = alexaTest.getIntentRequest('RegisterAgeIntent', slot);
    let speakOutput = "¿Qué juego quieres, preguntas abiertas o cerradas?";
			
		alexaTest.test([
			{
				request: requestWithSlot,
				says: speakOutput, shouldEndSession: false, repromptsNothing: false
			}
		]);
	});

  // tests the behavior of the skill's CloseQuestionIntent
  describe('CloseQuestionIntent', function () {
    const speakOutput = "Bienvenido al juego de preguntas cerradas! Son 5 preguntas en las que hay que responder"
    + " con un sí o con un no. Si fallas 3 preguntas, estás eliminado. Vamos a por ello!";
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest('CloseQuestionIntent'),
				saysLike: speakOutput, repromptsNothing: false, shouldEndSession: false
			}
		]);
	});

  // tests the behavior of the skill's OpenQuestionIntent
  describe('OpenQuestionIntent into AMAZON.StartOverIntent', function () {
    const speakOutput = 'Bienvenido al juego de preguntas abiertas! Serán 5 preguntas.'
    + ' Debes responder indicando el número de la opción que consideres correcta. A por ellas!'
    
		alexaTest.test([
      {
				request: alexaTest.getIntentRequest('OpenQuestionIntent'),
				saysLike: speakOutput, repromptsNothing: false, shouldEndSession: false
			},
			{
				request: alexaTest.getIntentRequest('AMAZON.StartOverIntent'),
				saysLike: speakOutput , shouldEndSession: false, repromptsNothing: false
			}
		]);
	});

  // tests the behavior of the skill's AnswerIntent
  describe('AnswerIntent', function () {
    const slot = {'Answer': 1};
		const requestWithSlot = alexaTest.getIntentRequest('AnswerIntent', slot);
    alexaTest.test([
			{
				request: requestWithSlot,
				shouldEndSession: false
			}
		]);
	});

  // tests the behavior of the skill's AMAZON.RepeatIntent
  describe('AMAZON.RepeatIntent', function () {
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest('AMAZON.RepeatIntent'),
				shouldEndSession: false
			}
		]);
	});

  // tests the behavior of the skill's AMAZON.YesIntent and AMAZON.NoIntent
  describe('AMAZON.YesIntent into AMAZON.NoIntent', function () {
    const speakOutput = "Tu marcador"; 
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest('AMAZON.YesIntent'),
			  shouldEndSession: false
			},
      {
				request: alexaTest.getIntentRequest('AMAZON.NoIntent'),
			  shouldEndSession: false
			}
		]);
	});

  // tests the behavior of the skill's AMAZON.HelpIntent
	describe('AMAZON.HelpIntent', function () {
    const speakOutput = 'Si estás participando en las preguntas abiertas, debes responder con el número de la opción que creas que es correcta. '
                + 'Si estás participando en las preguntas cerradas, debes responder con un sí o con un no.';
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest('AMAZON.HelpIntent'),
				says: speakOutput, repromptsNothing: false, shouldEndSession: false
			}
		]);
	});

  // tests the behavior of the skill's AMAZON.STOPIntent and AMAZON.CancelIntent
  describe('AMAZON.CancelIntent into AMAZON.StopIntent', function () {
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest('AMAZON.CancelIntent'),
				says: 'Gracias por jugar. Hasta pronto!', repromptsNothing: true, shouldEndSession: true
			},
			{
				request: alexaTest.getIntentRequest('AMAZON.StopIntent'),
				says: 'Gracias por jugar. Hasta pronto!', shouldEndSession: true, repromptsNothing: true
			}
		]);
	});

});