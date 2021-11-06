// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');
var persistenceAdapter = getPersistenceAdapter();
const closeprimaria = require('./closeprimaria');
const closeinfantil = require('./closeinfantil');
const openprimaria = require('./openprimaria');
const openinfantil= require('./openinfantil');
let questions='';


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const {attributesManager}= handlerInput;
        const sessionAttributes= attributesManager.getSessionAttributes();
        let speakOutput="Hola, ¿quién eres?";
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('No le he entendido, ¿puedes repetirlo?. Para entendernos, dí, mi nombre es ...')
            .getResponse();
    }
};

// Handler para almacenar el nombre y preguntar la edad.
const RegisterNameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RegisterNameIntent';
    },
    handle(handlerInput) {
        const {attributesManager}= handlerInput;
        const intent= handlerInput.requestEnvelope.request.intent;
        const sessionAttributes = attributesManager.getSessionAttributes();

        sessionAttributes['name']='';
        const name = intent.slots.name.value;
        
        sessionAttributes.name=name;
        
        let speakOutput = "Hola " + name + ", ¿Cuántos años tienes?." 
        + "Para entenderlo claramente, por favor, utiliza la fórmula: Tengo diez años";
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Disculpe. No le he entendido .' + speakOutput)
            .getResponse();
    }
};

// Handler para almacenar la edad y preguntar el tipo de preguntas.
const RegisterAgeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RegisterAgeIntent';
    },
    handle(handlerInput) {
        const {attributesManager}= handlerInput;
        const intent= handlerInput.requestEnvelope.request.intent;
        const sessionAttributes = attributesManager.getSessionAttributes();

        sessionAttributes['age']='';
        const age = intent.slots.age.value;
        
        sessionAttributes.age=age;

        let speakOutput = "¿Qué juego quieres, preguntas abiertas o cerradas?"
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('No le he entendido.' + speakOutput)
            .getResponse();
    }
};

// Handler para iniciar las preguntas cerradas
const CloseQuestionIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CloseQuestionIntent';
    },
    handle(handlerInput) {
        const {attributesManager} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();

        let speechText = "Bienvenido al juego de preguntas cerradas! Son 5 preguntas en las que hay que responder"
        + "con un sí o con un no. Si fallas 3 preguntas, estás eliminado. Vamos a por ello! ";
        sessionAttributes['id'] = 1;
        sessionAttributes['aciertos']=0;
        sessionAttributes['fallos'] = 0;
        sessionAttributes['preguntas realizadas']= 0;
        
        const module = getModule(sessionAttributes['id'],sessionAttributes['age']);
        speechText += module.question;
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }    
    
};

// Handler para iniciar las preguntas abiertas
const OpenQuestionIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'OpenQuestionIntent'
            || Alexa.getIntentName(handlerInput.requestEnvelope)=== 'AMAZON.StartOverIntent');
    },
    handle(handlerInput) {
        const {attributesManager} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();

        return startGame(handlerInput, sessionAttributes.age);
    }    
    
};

// Handler para las respuestas de las preguntas abiertas
const AnswerIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent'
            || handlerInput.requestEnvelope.request.intent.name === 'DontKnowIntent');
    },
    handle(handlerInput) {
        const {attributesManager} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();

        if (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent') {
            return handlerResponseUser(false, handlerInput, sessionAttributes.age);
        }
        
        return handlerResponseUser(true, handlerInput, sessionAttributes.age);
    },
};

// Handler para repetir la pregunta abierta
const RepeatIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let speechOutput = sessionAttributes.speechOutput;
        let repromptText = sessionAttributes.repromptText;
   
        return handlerInput.responseBuilder.speak(speechOutput)
            .reprompt(repromptText)
            .getResponse();
    },
};

// Handler cuando se contesta sí en las preguntas cerradas
const YesHandler = {
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
    },
    handle(handlerInput){
        return responseLoopHandler(handlerInput, 'yes');
    }
}

// Handler cuando se contesta no en las preguntas cerradas
const NoHandler = {
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
    },
    handle(handlerInput){
        return responseLoopHandler(handlerInput, 'no');
    }
}

// Handler cuando se solicita ayuda
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Si estás participando en las preguntas abiertas, debes responder con el número de la opción que creas que es correcta. '
                + 'Si estás participando en las preguntas cerradas, debes responder con un sí o con un no.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Handler cuando se finaliza anticipadamente
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Gracias por jugar. Hasta pronto!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Disculpa no le he entendido, puedes repetir?`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


// ------------------------------------ FUNCTIONS -------------------------

// Extrae las preguntas cerradas según la edad
function getModule(id,age) {
    if(age>5) return closeprimaria.game.filter(function(i) { return i.id === id; })[0];
    else return closeinfantil.game2.filter(function(i) { return i.id === id; })[0];
}

// Extrae la siguiente pregunta cerrada de manera aleatoria
function getNextModule(id, choice, age) {
    const module = getModule(id,age);
    if(module[choice].targets.length === 0) return null;
    const nextTarget = module[choice].targets[Math.floor(Math.random() * module[choice].targets.length)];
    return getModule(nextTarget,age);
}

// Actualiza las variables del ejercicio de preguntas cerradas
function calculateGameVariables(sessionAttributes, fallosC, preguntasC, aciertosC) {
    sessionAttributes['fallos'] += fallosC;
    sessionAttributes['preguntas realizadas'] += preguntasC;
    sessionAttributes['aciertos'] += aciertosC;
    console.log(sessionAttributes);
}

// Maneja el sí o el no como respuesta
function responseLoopHandler(handlerInput, choice){
    const {attributesManager} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();
    const moduleId = sessionAttributes['id'];
    const age= sessionAttributes['age'];
    const module = getModule(moduleId, age);
    const nextModule = getNextModule(moduleId, choice, age);
    if(nextModule) sessionAttributes['id'] = nextModule.id;
    let speechText;
    let repromptText="Disculpa no le he entendido. ¿Puedes repetirlo? ";
    calculateGameVariables(sessionAttributes, module[choice].fallos, module[choice].numpreguntas, module[choice].aciertos);
    if(sessionAttributes['fallos'] === 3) {
        speechText = "Lamentablemente, has llegado a los tres fallos. Tu marcador final es " 
        + sessionAttributes['aciertos'] + " de " + sessionAttributes['preguntas realizadas']+ ". Hasta la próxima!";
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();
    }
    
    speechText = module[choice].answer;
    module[choice].warning ? speechText += module[choice].warning : speechText;
    
    if(sessionAttributes['preguntas realizadas'] !== 5){
            speechText += "Tu marcador es " + sessionAttributes['aciertos'] + " de " + sessionAttributes['preguntas realizadas'] + ". ";
    }
    
    if(sessionAttributes['preguntas realizadas'] === 4) {
            sessionAttributes['id'] = 10;
            const module = getModule(sessionAttributes['id'], sessionAttributes['age']);
            speechText += module.question;
            return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
        }
    if(sessionAttributes['id']===10){
        speechText += "Tu marcador final es " + sessionAttributes['aciertos'] + " de " + sessionAttributes['preguntas realizadas'] + ". Hasta la próxima! ";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt()
            .getResponse();
    }
    if(module.audio){
        speechText += module.audio;
    }
    if(nextModule) {
        speechText += nextModule.question;
        //handlerInput.responseBuilder.reprompt(repromptText)
    }
    return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
}

// --------------------------------------------------------------------------------------
var ANSWER_COUNT = 3;
var GAME_LENGTH = 5;

// Inicia el juego de preguntas abiertas
function startGame(handlerInput, age) {
    if(age>5) {
        questions=openprimaria;
    }
    else{ 
        questions=openinfantil;
    }
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    let speechOutput = 'Bienvenido al juego de preguntas abiertas! Serán 5 preguntas. '
    + 'Debes responder indicando el número de la opción que consideres correcta. A por ellas!';
    const gameQuestions = populateGameQuestions();
    const correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));

    const roundAnswers = populateRoundAnswers(gameQuestions,0,correctAnswerIndex);
    const currentQuestionIndex = 0;
    const spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
    let repromptText = "Pregunta número 1. " + spokenQuestion + " "

    for (var i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }

    speechOutput += repromptText;
    const sessionAttributes = {};

    Object.assign(sessionAttributes, {
        speechOutput: repromptText,
        repromptText,
        currentQuestionIndex,
        correctAnswerIndex: correctAnswerIndex + 1,
        questions: gameQuestions,
        age:age,
        score: 0,
        correctAnswerText: questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    });

    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  
    return handlerInput.responseBuilder
        .speak(speechOutput)
        .reprompt("Por favor, responde con el número de la opción que consideres correcta. " + repromptText)
        .getResponse();
}

// Comprueba las respuestas en las preguntas abiertas y muestra la siguiente pregunta
function handlerResponseUser(userGaveUp, handlerInput, age) {
    const { requestEnvelope, attributesManager, responseBuilder } = handlerInput;
    const { intent } = requestEnvelope.request;
    
      if(age>5) {
        questions=openprimaria
    }
    else{ 
        questions=openinfantil
    }

    const answerSlotValid = isAnswerSlotValid(intent);
  
    let speechOutput = '';
    let speechOutputAnalysis = '';
    const sessionAttributes = attributesManager.getSessionAttributes();
    const gameQuestions = sessionAttributes.questions;
    let correctAnswerIndex = parseInt(sessionAttributes.correctAnswerIndex);
    let currentScore = parseInt(sessionAttributes.score);
    let currentQuestionIndex = parseInt(sessionAttributes.currentQuestionIndex);
    const { correctAnswerText } = sessionAttributes;
    const requestAttributes = attributesManager.getRequestAttributes();

    if (answerSlotValid && parseInt(intent.slots.Answer.value) === sessionAttributes.correctAnswerIndex) {
        currentScore += 1;
        speechOutputAnalysis = 'Respuesta correcta! ';
    } else {
        if (!userGaveUp) {
            speechOutputAnalysis = 'Lástima, has fallado! ';
    }
        speechOutputAnalysis += "La respuesta correcta es " + correctAnswerIndex + ": " + correctAnswerText + ". ";
    }

    if (sessionAttributes.currentQuestionIndex === GAME_LENGTH - 1) {
        speechOutput += speechOutputAnalysis + "Tu marcador final ha sido " + currentScore + " de "
            + GAME_LENGTH + ". Gracias por jugar. Hasta la próxima!"; 
            
        return responseBuilder
            .speak(speechOutput)
            .reprompt()
            .getResponse();
    }
    currentQuestionIndex += 1;
    correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
    var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
    var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),
    questionIndexForSpeech = currentQuestionIndex + 1;
    let repromptText = "Pregunta número " + questionIndexForSpeech+ ". " + spokenQuestion + " ";
    for (var i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". ";
    }
  
    speechOutput += speechOutputAnalysis + "Tu marcador es  " + currentScore + " de " + currentQuestionIndex + ". " + repromptText;
 
    Object.assign(sessionAttributes, {
        speechOutput: repromptText,
        repromptText,
        currentQuestionIndex,
        correctAnswerIndex: correctAnswerIndex + 1,
        questions: gameQuestions,
        age:age,
        score: currentScore,
        correctAnswerText: questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    });

  
    return responseBuilder
        .speak(speechOutput)
        .reprompt("Por favor, responde con el número de la opción que consideres correcta. " + repromptText)
        .getResponse();
}

// Escoge las preguntas de manera aleatoria, sin repetir
function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

//Pone la respuesta correcta en el índice seleccionado
function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    var answers = [],
    answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
    temp, i;

    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

// Comprueba que la respuesta esté almacenada en el slot
function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}


//-------------------------------------------- PERSISTENCE ----------------------

function getPersistenceAdapter() {
    const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');
        return new S3PersistenceAdapter({
            bucketName: process.env.S3_PERSISTENCE_BUCKET
        });
}

const LoadAttributesRequestInterceptor = {
    async process(handlerInput) {
        const {attributesManager, requestEnvelope} = handlerInput;
        if(requestEnvelope.session['new']){ //is this a new session? this check is not enough if using auto-delegate
            const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
            //copy persistent attribute to session attributes
            attributesManager.setSessionAttributes(persistentAttributes);
        }
    }
};


const SaveAttributesResponseInterceptor = {
    async process(handlerInput, response) {
        if(!response) return; // avoid intercepting calls that have no outgoing response due to errors
        const {attributesManager, requestEnvelope} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();
        const shouldEndSession = (typeof response.shouldEndSession === "undefined" ? true : response.shouldEndSession); //is this a session end?
        if(shouldEndSession || requestEnvelope.request.type === 'SessionEndedRequest') { // skill was stopped or timed out
            attributesManager.setPersistentAttributes(sessionAttributes);
            await attributesManager.savePersistentAttributes();
        }
    }
};




// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        RegisterNameIntentHandler,
        RegisterAgeIntentHandler,
        CloseQuestionIntentHandler,
        OpenQuestionIntentHandler,
        AnswerIntent,
        RepeatIntent,
        YesHandler,
        NoHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
   .addRequestInterceptors(LoadAttributesRequestInterceptor)
    .addResponseInterceptors(SaveAttributesResponseInterceptor)
    .addErrorHandlers(ErrorHandler)
    .withPersistenceAdapter(persistenceAdapter)
    .lambda();
    
  
