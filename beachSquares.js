/********************* 
 * Beachsquares Test *
 *********************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'beachSquares';  // from the Builder filename that created this script
let expInfo = {'workerId': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const practiceTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceTrialsLoopBegin, practiceTrialsLoopScheduler);
flowScheduler.add(practiceTrialsLoopScheduler);
flowScheduler.add(practiceTrialsLoopEnd);
flowScheduler.add(trial_instructRoutineBegin());
flowScheduler.add(trial_instructRoutineEachFrame());
flowScheduler.add(trial_instructRoutineEnd());
const conditionLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(conditionLoopBegin, conditionLoopScheduler);
flowScheduler.add(conditionLoopScheduler);
flowScheduler.add(conditionLoopEnd);
flowScheduler.add(endExpRoutineBegin());
flowScheduler.add(endExpRoutineEachFrame());
flowScheduler.add(endExpRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'predefinedpractice.csv', 'path': 'predefinedpractice.csv'},
    {'name': 'handposition.jpg', 'path': 'handposition.jpg'}
  ]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.0';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(((((((('<YOURPASSINGURL>' + expInfo['workerId']) + '&participant=') + expInfo['workerId']) + '&SESSION_ID=') + expInfo['SESSION_ID']) + '&STUDY_ID=') + expInfo['STUDY_ID']), '');

  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_image;
var intruct_text;
var key_resp_instrEnd;
var fix_practiceClock;
var fixtext_practice;
var practiceClock;
var key_resp_trialEnd_practice;
var background_practice;
var foreground_practice;
var polygon_rightTexture;
var polygon_leftTexture;
var winDimsS;
var browserDet;
var NewX;
var NewY;
var warn;
var currX;
var currY;
var logRow;
var fmouse;
var varias;
var offs;
var sloth;
var wrap;
var mouseX;
var mouseY;
var track_sloth;
var track_wrap;
var track_Env_key;
var track_Env_T;
var track_Env_Frame;
var track_Model_key;
var track_Model_T;
var track_Model_Frame;
var track_logrowT;
var bgc;
var foreL;
var foreR;
var vis;
var op1;
var op2;
var op3;
var op4;
var LH;
var LH1;
var LH2;
var LH3;
var LH4;
var colour;
var c1;
var c2;
var c3;
var c4;
var practice_TrialCount;
var mouse_practice;
var key_resp_side_practice;
var key_resp_model_practice;
var polygon_1_practice;
var polygon_1txt_practice;
var polygon_2_practice;
var polygon_2txt_practice;
var polygon_3_practice;
var polygon_3txt_practice;
var polygon_4_practice;
var polygon_4txt_practice;
var text_vis;
var which_practiceClock;
var key_resp_which_practice;
var key_resp_whichEnd_practice;
var polygon_highlight_practice;
var polygon_background;
var which_text_practice;
var polygon_1Choose_practice;
var poly1txtChoose_practice;
var polygon_2Choose_practice;
var poly2txtChoose_practice;
var polygon_3Choose_practice;
var poly3txtChoose_practice;
var polygon_4Choose_practice;
var poly4txtChoose_practice;
var polygon_ZChoose_practice;
var polyZtxtChoose_practice;
var confidence_practiceClock;
var key_resp_conf_practice;
var key_resp_confEnd_practice;
var conf_text_practice;
var slider_conf_practice;
var agent_practiceClock;
var key_resp_agent_practice;
var key_resp_agentEnd_practice;
var agent_text_practice;
var slider_agent_practice;
var feed_practiceClock;
var feedpractice_text;
var key_resp_feedpractice;
var polygon_1Feedback_practice;
var poly1txtFeedback_practice;
var feedbackTxt_zer0;
var warning_practiceClock;
var warn_text_practice;
var warn_resp_practice;
var warning_mouse_practiceClock;
var warn_mouse_practice_resp;
var warn_mouse_practice_text;
var trial_instructClock;
var instructTrial_text;
var key_resp_trial_instruct;
var fixClock;
var fixtext;
var trialClock;
var key_resp_trialEnd;
var background;
var foreground;
var colours;
var TrialCount;
var conds;
var condSelect;
var mouse;
var key_resp_side;
var key_resp_model;
var polygon_1;
var polygon_1txt;
var polygon_2;
var polygon_2txt;
var polygon_3;
var polygon_3txt;
var polygon_4;
var polygon_4txt;
var which_objClock;
var key_resp_which;
var key_resp_whichEnd;
var polygon_highlight;
var polygon_background_which;
var which_text;
var polygon_1Choose;
var poly1txtChoose;
var polygon_2Choose;
var poly2txtChoose;
var polygon_3Choose;
var poly3txtChoose;
var polygon_4Choose;
var poly4txtChoose;
var polygon_ZChoose;
var polyZtxtChoose;
var confidenceClock;
var key_resp_conf;
var key_resp_confEnd;
var conf_text;
var slider_conf;
var agentClock;
var key_resp_agent;
var key_resp_agentEnd;
var agent_text;
var slider_agent;
var warningClock;
var warn_text;
var warn_resp;
var warning_mouseClock;
var warn_mouse_resp;
var warn_mouse_text;
var break_1Clock;
var text_break;
var key_resp_break;
var f_blockCount;
var b_blockCount;
var sub_text_break;
var endExpClock;
var text;
var key_resp_expEnd;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_image', units : undefined, 
    image : 'handposition.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.085)], size : [0.45, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  intruct_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intruct_text',
    text: 'Welcome to the experiment! \n\nPlease do not exit fullscreen during the task, even during breaks, unless something goes wrong and you need to restart.\n \nPlease place your dominant hand on the mouse \n(a separate mouse is preferable to a trackpad, and probably more comfortable!). \nYour non-dominant hand will be pressing the numbers on the keyboard and the letters ‘Q’ and ‘R’.\nWe recommend resting your hand in this position:   \n\n\n\n\n\n\n\n\n\n\n\n\nPress spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.005], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_instrEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix_practice"
  fix_practiceClock = new util.Clock();
  fixtext_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixtext_practice',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  key_resp_trialEnd_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  background_practice = new visual.Rect ({
    win: psychoJS.window, name: 'background_practice', 
    width: [1.8, 1.0][0], height: [1.8, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  foreground_practice = new visual.Rect ({
    win: psychoJS.window, name: 'foreground_practice', 
    width: [1.6, 0.8][0], height: [1.6, 0.8][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  polygon_rightTexture = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_rightTexture', 
    width: [0.8, 0.798][0], height: [0.8, 0.798][1],
    ori: 0, pos: [0.399, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  polygon_leftTexture = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_leftTexture', 
    width: [0.8, 0.798][0], height: [0.8, 0.798][1],
    ori: 0, pos: [(- 0.399), 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  winDimsS = psychoJS.window.size;
  browserDet = [navigator.userAgent];
  psychoJS.experiment.addData('browserDet',browserDet); 
  // Declare vars
  NewX = [];
  NewY= [];
  warn = 1;
  currX = 0;
  currY = 0;
  logRow = 0;
  fmouse = [];
  varias = [];
  offs = [];
  sloth = [];
  wrap = [];
  // Assert tracking variables
  mouseX = [];
  mouseY = [];
  track_sloth = [];
  track_wrap = [];
  // Track presses
  track_Env_key = [];
  track_Env_T = [];
  track_Env_Frame = [];
  track_Model_key = [];
  track_Model_T = [];
  track_Model_Frame = [];
  track_logrowT = [];
  // Create alot of zero variables
  bgc = [0,0,0];
  foreL = [0,0,0];
  foreR = [0,0,0];
  vis = [];
  op1 =0;
  op2 =0;
  op3 =0;
  op4 =0;
  LH =[];
  LH1 = 0.02;
  LH2 = 0.02;
  LH3 = 0.02;
  LH4 = 0.02;
  colour = [[1,0,0], [0,1,0], [0,0,1],[1,1,0]];
  c1 = [0,0,0];
  c2 = [0,0,0];
  c3 = [0,0,0];
  c4 = [0,0,0];
  // Track practice trials
  practice_TrialCount = 0;
  mouse_practice = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_practice.mouseClock = new util.Clock();
  key_resp_side_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_model_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_1_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_1_practice', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  polygon_1txt_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_1txt_practice',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -10.0 
  });
  
  polygon_2_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2_practice', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -11, interpolate: true,
  });
  
  polygon_2txt_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_2txt_practice',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -12.0 
  });
  
  polygon_3_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3_practice', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -13, interpolate: true,
  });
  
  polygon_3txt_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_3txt_practice',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -14.0 
  });
  
  polygon_4_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4_practice', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  polygon_4txt_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_4txt_practice',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -16.0 
  });
  
  text_vis = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_vis',
    text: "' '",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  // Initialize components for Routine "which_practice"
  which_practiceClock = new util.Clock();
  key_resp_which_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_whichEnd_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_highlight_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_highlight_practice', 
    width: [0.1325, 0.1325][0], height: [0.1325, 0.1325][1],
    ori: 0, pos: [0, 0],
    lineWidth: 3, lineColor: new util.Color([0, 1, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  polygon_background = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_background', 
    width: [0.8, 0.15][0], height: [0.8, 0.15][1],
    ori: 0, pos: [0, 0.1],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  which_text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'which_text_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  polygon_1Choose_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_1Choose_practice', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.12), (- 0.05)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  poly1txtChoose_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly1txtChoose_practice',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.12), (- 0.05)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  polygon_2Choose_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2Choose_practice', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.12, (- 0.05)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  poly2txtChoose_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly2txtChoose_practice',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0.12, (- 0.05)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  polygon_3Choose_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3Choose_practice', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.12), (- 0.29)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  poly3txtChoose_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly3txtChoose_practice',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.12), (- 0.29)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  polygon_4Choose_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4Choose_practice', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.12, (- 0.29)],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -12, interpolate: true,
  });
  
  poly4txtChoose_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly4txtChoose_practice',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0.12, (- 0.29)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  polygon_ZChoose_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_ZChoose_practice', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, (- 0.17)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  polyZtxtChoose_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'polyZtxtChoose_practice',
    text: '0',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.17)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  // Initialize components for Routine "confidence_practice"
  confidence_practiceClock = new util.Clock();
  key_resp_conf_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_confEnd_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  conf_text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'conf_text_practice',
    text: 'How confident are you that your answer is correct?\n\nPlease rate your confidence from 1 (Not at all) to 9 (Very confident).\n\nOnce you are happy with your selection press the spacebar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  slider_conf_practice = new visual.Slider({
    win: psychoJS.window, name: 'slider_conf_practice',
    size: [0.8, 0.05], pos: [0, 0], units: 'height',
    labels: ['Not at all', 'Very confident'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "agent_practice"
  agent_practiceClock = new util.Clock();
  key_resp_agent_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_agentEnd_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  agent_text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'agent_text_practice',
    text: 'How much agency/control did you feel in that trial?\n\nUse the numbers on the keyboard to answer from 1 (No agency) to 9 (Complete agency).\n\nOnce you have made your selection press the space bar to move forward.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  slider_agent_practice = new visual.Slider({
    win: psychoJS.window, name: 'slider_agent_practice',
    size: [0.8, 0.05], pos: [0, 0], units: 'height',
    labels: ['No agency', 'Complete agency'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "feed_practice"
  feed_practiceClock = new util.Clock();
  feedpractice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedpractice_text',
    text: 'The correct answer was:\n\n\n\n\n\n\n\n\n\n\nPress spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_feedpractice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_1Feedback_practice = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_1Feedback_practice', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  poly1txtFeedback_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly1txtFeedback_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  feedbackTxt_zer0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackTxt_zer0',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.09)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "warning_practice"
  warning_practiceClock = new util.Clock();
  warn_text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'warn_text_practice',
    text: "WARNING!\n\nWe notice you didn't use the keyboard to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  warn_resp_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "warning_mouse_practice"
  warning_mouse_practiceClock = new util.Clock();
  warn_mouse_practice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  warn_mouse_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warn_mouse_practice_text',
    text: "WARNING!\n\nWe noticed you didn't use the mouse very much to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial_instruct"
  trial_instructClock = new util.Clock();
  instructTrial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructTrial_text',
    text: 'That is the end of the practice block.\nIf you would like a break before beginning the actual task, you may take one now.\n\nPress spacebar to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_trial_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  fixtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixtext',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp_trialEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  background = new visual.Rect ({
    win: psychoJS.window, name: 'background', 
    width: [1.8, 1.0][0], height: [1.8, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  foreground = new visual.Rect ({
    win: psychoJS.window, name: 'foreground', 
    width: [1.6, 0.8][0], height: [1.6, 0.8][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array
  }
  NewX = [];
  NewY= [];
  currX = [];
  currY = [];
  logRow = 0;
  fmouse = [];
  varias = [];
  offs = [];
  sloth = [];
  wrap = [];
  warn = 1;
  //assert tracking variables
  mouseX = [];
  mouseY = [];
  track_sloth = [];
  track_wrap = [];
  // Track presses
  track_Env_key = [];
  track_Env_T = [];
  track_Env_Frame = [];
  track_Model_key = [];
  track_Model_T = [];
  track_Model_Frame = [];
  track_logrowT = [];
  colours = [[-0.4196,0.6000,0.7804], [0.7255,0.4588,-0.8981], [1.000,0.2784,0.2784],[0.4588,0.4039,0.9843]];
   c1 = [0,0,0];
   c2 = [0,0,0];
   c3 = [0,0,0];
   c4 = [0,0,0];
   TrialCount = 0;
   // Load resources for use
  conds =  ['predefinedtrials1.csv', 'predefinedtrials2.csv', 'predefinedtrials3.csv','predefinedtrials4.csv'];
  conds = shuffle(conds);
  condSelect = conds[0];
  psychoJS.downloadResources([
      // Relative path to index.html
      { name: condSelect, path: condSelect},
  ]);
  psychoJS.experiment.addData('condSelect',condSelect);
  winDimsS = psychoJS.window.size;
  // Get IP Address
  $.getJSON('https://api.ipify.org?format=json', function(data){
      console.log(data.ip);
      localStorage.setItem('ip',data.ip);
      psychoJS.experiment.addData('IP_Addresss', data.ip)
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  key_resp_side = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_model = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_1 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_1', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  polygon_1txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_1txt',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  polygon_2txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_2txt',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  polygon_3 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  polygon_3txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_3txt',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -12.0 
  });
  
  polygon_4 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  polygon_4txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon_4txt',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -14.0 
  });
  
  // Initialize components for Routine "which_obj"
  which_objClock = new util.Clock();
  key_resp_which = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_whichEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_highlight = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_highlight', 
    width: [0.1325, 0.1325][0], height: [0.1325, 0.1325][1],
    ori: 0, pos: [0, 0],
    lineWidth: 3, lineColor: new util.Color([0, 1, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  polygon_background_which = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_background_which', 
    width: [0.8, 0.15][0], height: [0.8, 0.15][1],
    ori: 0, pos: [0, 0.1],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  which_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'which_text',
    text: 'Use the keyboard to input the number of the square you controlled. \nIf you think you controlled none of the squares, type 0.  \n\nPress the spacebar to submit the final response',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  polygon_1Choose = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_1Choose', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  poly1txtChoose = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly1txtChoose',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.12), (- 0.05)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  polygon_2Choose = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2Choose', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  poly2txtChoose = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly2txtChoose',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0.12, (- 0.05)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  polygon_3Choose = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3Choose', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  poly3txtChoose = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly3txtChoose',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.12), (- 0.29)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  polygon_4Choose = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4Choose', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -12, interpolate: true,
  });
  
  poly4txtChoose = new visual.TextStim({
    win: psychoJS.window,
    name: 'poly4txtChoose',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0.12, (- 0.29)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  polygon_ZChoose = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_ZChoose', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -14, interpolate: true,
  });
  
  polyZtxtChoose = new visual.TextStim({
    win: psychoJS.window,
    name: 'polyZtxtChoose',
    text: '0',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.17)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  // Initialize components for Routine "confidence"
  confidenceClock = new util.Clock();
  key_resp_conf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_confEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  conf_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'conf_text',
    text: 'How confident are you that your answer is correct?\n\nPlease rate your confidence from 1 (Not at all) to 9 (Very confident).\n\nOnce you are happy with your selection press the spacebar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  slider_conf = new visual.Slider({
    win: psychoJS.window, name: 'slider_conf',
    size: [0.8, 0.05], pos: [0, 0], units: 'height',
    labels: ['Not at all', 'Very confident'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "agent"
  agentClock = new util.Clock();
  key_resp_agent = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_agentEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  agent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'agent_text',
    text: 'How much agency/control did you feel in that trial?\n\nUse the numbers on the keyboard to answer from 1 (No agency) to 9 (Complete agency).\n\nOnce you have made your selection press the space bar to move forward.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  slider_agent = new visual.Slider({
    win: psychoJS.window, name: 'slider_agent',
    size: [0.8, 0.05], pos: [0, 0], units: 'height',
    labels: ['No agency', 'Complete agency'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "warning"
  warningClock = new util.Clock();
  warn_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warn_text',
    text: "WARNING!\n\nWe notice you didn't use the keyboard to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  warn_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "warning_mouse"
  warning_mouseClock = new util.Clock();
  warn_mouse_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  warn_mouse_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warn_mouse_text',
    text: "WARNING!\n\nWe noticed you didn't use the mouse very much to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "break_1"
  break_1Clock = new util.Clock();
  text_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_break',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_break = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  f_blockCount = 0;
  b_blockCount = 3;
  sub_text_break = "";
  
  // Initialize components for Routine "endExp"
  endExpClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Thank for your participation!\n\nPlease press the spacebar to move to the next section of the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_expEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_instrEnd_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_instrEnd.keys = undefined;
    key_resp_instrEnd.rt = undefined;
    _key_resp_instrEnd_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_image);
    instrComponents.push(intruct_text);
    instrComponents.push(key_resp_instrEnd);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_image* updates
    if (t >= 0.0 && instr_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_image.tStart = t;  // (not accounting for frame time here)
      instr_image.frameNStart = frameN;  // exact frame index
      
      instr_image.setAutoDraw(true);
    }

    
    // *intruct_text* updates
    if (t >= 0.0 && intruct_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intruct_text.tStart = t;  // (not accounting for frame time here)
      intruct_text.frameNStart = frameN;  // exact frame index
      
      intruct_text.setAutoDraw(true);
    }

    
    // *key_resp_instrEnd* updates
    if (t >= 0.0 && key_resp_instrEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instrEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_instrEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instrEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrEnd.clearEvents(); });
    }

    if (key_resp_instrEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instrEnd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instrEnd_allKeys = _key_resp_instrEnd_allKeys.concat(theseKeys);
      if (_key_resp_instrEnd_allKeys.length > 0) {
        key_resp_instrEnd.keys = _key_resp_instrEnd_allKeys[_key_resp_instrEnd_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instrEnd.rt = _key_resp_instrEnd_allKeys[_key_resp_instrEnd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practiceTrials;
var currentLoop;
function practiceTrialsLoopBegin(practiceTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practiceTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'predefinedpractice.csv',
    seed: undefined, name: 'practiceTrials'
  });
  psychoJS.experiment.addLoop(practiceTrials); // add the loop to the experiment
  currentLoop = practiceTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeTrial of practiceTrials) {
    const snapshot = practiceTrials.getSnapshot();
    practiceTrialsLoopScheduler.add(importConditions(snapshot));
    practiceTrialsLoopScheduler.add(fix_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(fix_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(fix_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(which_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(which_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(which_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(confidence_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(confidence_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(confidence_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(agent_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(agent_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(agent_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(feed_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(feed_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(feed_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(warning_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(warning_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(warning_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(warning_mouse_practiceRoutineBegin(snapshot));
    practiceTrialsLoopScheduler.add(warning_mouse_practiceRoutineEachFrame(snapshot));
    practiceTrialsLoopScheduler.add(warning_mouse_practiceRoutineEnd(snapshot));
    practiceTrialsLoopScheduler.add(endLoopIteration(practiceTrialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practiceTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(practiceTrials);

  return Scheduler.Event.NEXT;
}


var condition;
function conditionLoopBegin(conditionLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  condition = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condSelect,
    seed: undefined, name: 'condition'
  });
  psychoJS.experiment.addLoop(condition); // add the loop to the experiment
  currentLoop = condition;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCondition of condition) {
    const snapshot = condition.getSnapshot();
    conditionLoopScheduler.add(importConditions(snapshot));
    conditionLoopScheduler.add(fixRoutineBegin(snapshot));
    conditionLoopScheduler.add(fixRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(fixRoutineEnd(snapshot));
    conditionLoopScheduler.add(trialRoutineBegin(snapshot));
    conditionLoopScheduler.add(trialRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(trialRoutineEnd(snapshot));
    conditionLoopScheduler.add(which_objRoutineBegin(snapshot));
    conditionLoopScheduler.add(which_objRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(which_objRoutineEnd(snapshot));
    conditionLoopScheduler.add(confidenceRoutineBegin(snapshot));
    conditionLoopScheduler.add(confidenceRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(confidenceRoutineEnd(snapshot));
    conditionLoopScheduler.add(agentRoutineBegin(snapshot));
    conditionLoopScheduler.add(agentRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(agentRoutineEnd(snapshot));
    conditionLoopScheduler.add(warningRoutineBegin(snapshot));
    conditionLoopScheduler.add(warningRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(warningRoutineEnd(snapshot));
    conditionLoopScheduler.add(warning_mouseRoutineBegin(snapshot));
    conditionLoopScheduler.add(warning_mouseRoutineEachFrame(snapshot));
    conditionLoopScheduler.add(warning_mouseRoutineEnd(snapshot));
    conditionLoopScheduler.add(break_1RoutineBegin(snapshot));
    conditionLoopScheduler.add(break_1RoutineEachFrame(snapshot));
    conditionLoopScheduler.add(break_1RoutineEnd(snapshot));
    conditionLoopScheduler.add(endLoopIteration(conditionLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function conditionLoopEnd() {
  psychoJS.experiment.removeLoop(condition);

  return Scheduler.Event.NEXT;
}


var fix_practiceComponents;
function fix_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fix_practice'-------
    t = 0;
    fix_practiceClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fix_practiceComponents = [];
    fix_practiceComponents.push(fixtext_practice);
    
    for (const thisComponent of fix_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fix_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fix_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fix_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixtext_practice* updates
    if (t >= 0.0 && fixtext_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixtext_practice.tStart = t;  // (not accounting for frame time here)
      fixtext_practice.frameNStart = frameN;  // exact frame index
      
      fixtext_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixtext_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixtext_practice.setAutoDraw(false);
    }
    if ((qOn === 0)) {
        continueRoutine = false;
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fix_practice'-------
    for (const thisComponent of fix_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_trialEnd_practice_allKeys;
var poly1x;
var poly1y;
var poly2x;
var poly2y;
var poly3x;
var poly3y;
var poly4x;
var poly4y;
var spos1;
var spos2;
var spos3;
var spos4;
var sposListX;
var sposListY;
var order;
var side;
var foreLRc;
var gotValidClick;
var _key_resp_side_practice_allKeys;
var _key_resp_model_practice_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_trialEnd_practice.keys = undefined;
    key_resp_trialEnd_practice.rt = undefined;
    _key_resp_trialEnd_practice_allKeys = [];
    function normal(mean, sigma,nsamples) {
        var xList = []
        for (var i = 0; i < nsamples; i++) { 
            var u = Math.random()*0.682;
            var x = ((u % 1e-8 > 5e-9 ? 1 : -1) * (Math.sqrt(-Math.log(Math.max(1e-9, u)))-0.618))*1.618 * sigma + mean;
        xList.push(parseFloat(x.toFixed(5)));
        }
        return xList
    }
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array
    }
    function randPos(xm, xsd, ym, ysd) {
        var polys = 4;
        while (1) {
            var countX = 0;
            var countY = 0;
            var sposListX = normal(xm, xsd, polys);
            var sposListY = normal(ym, ysd, polys);
            var sqrsize = 0.35;
            for (var itemX, _pj_c = 0, _pj_a = sposListX, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemX = _pj_a[_pj_c];
                if (((itemX < (xm+sqrsize)) && (itemX > (xm-sqrsize)))) {
                    countX += 1;
                }
            }
            for (var itemY, _pj_c = 0, _pj_a = sposListY, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemY = _pj_a[_pj_c];
                if (((itemY < (ym+sqrsize)) && (itemY > (ym-sqrsize)))) {
                    countY += 1;
                }
            }
            if (((countX === polys) && (countY === polys))) {
                break;
            }
        }
        return [sposListX, sposListY];
    }
    logRow = 0; //#iterated through within trial
    //# Randomise start position
    warn = 1;
    mouseX = [];
    mouseY = [];
    NewX = [];
    NewY= [];
    track_sloth = [];
    track_wrap = [];
    //Rezero position tracking variables
    poly1x = [];
    poly1y = [];
    poly2x = [];
    poly2y = [];
    poly3x = [];
    poly3y = [];
    poly4x = [];
    poly4y = [];
    // Zero out object position variables
    spos1 = [];
    spos2 = [];
    spos3 = [];
    spos4 = [];
    // Track presses
    track_Env_key = [];
    track_Env_T = [];
    track_Env_Frame = [];
    track_Model_key = [];
    track_Model_T = [];
    track_Model_Frame = [];
    track_logrowT = [];
    //allow part to move in play trials
    if ((corrAns !== 5)) {
        sloth = [10000,10000,10000,10000]
    } else {    
        sloth = [5,5,5,5];
    }
    fmouse = mouse_practice.getPos();
    mouseX.push(fmouse[0]);
    mouseY.push(fmouse[1]);
    sposListX = [];
    sposListY = [];
    // Define random start positions
    [sposListX,sposListY] = randPos(0,0.2,0,0.2);
    spos1 = [sposListX[0],sposListY[0]];
    spos2 = [sposListX[1],sposListY[1]];
    spos3 = [sposListX[2],sposListY[2]];
    spos4 = [sposListX[3],sposListY[3]];
    // Remove mouse
    //document.body.style.cursor='none';
    document.body.style.cursor='crosshair';
    // Reassert Fullscreen
    document.documentElement.requestFullscreen();
    // Evaluate variables into lists
    varias = [eval(S1_E1_Var), eval(S2_E1_Var), eval(S3_E1_Var), eval(S4_E1_Var), eval(S1_E2_Var), eval(S2_E2_Var), eval(S3_E2_Var), eval(S4_E2_Var)];
    offs = [eval(S1_OffsetDir), eval(S2_OffsetDir), eval(S3_OffsetDir), eval(S4_OffsetDir)];
    bgc = [0,0,0];
    // Object and text visibility
    vis = eval(visible);
    op1 = vis[0];
    op2 = vis[1];
    op3 = vis[2];
    op4 = vis[3];
    text_vis.setText(words);
    key_resp_side_practice.clearEvents();
    key_resp_model_practice.clearEvents();
    // Shuffle order per trial
    order = shuffle([0,1,2,3]);
    // Shuffle side of the screen
    side = shuffle([1,2]);
     c1 = colour[order[0]];
     c2 = colour[order[1]];
     c3 = colour[order[2]];
     c4 = colour[order[3]];
    // Set environment background
    foreLRc = [[0.4,0.5,0],[0,0,0.5]]
    if ((EnvClass === 1)) {
        foreL = [0.4,0.5,0];
        foreR = [0.4,0.5,0];
    } else if ((EnvClass === 2)) {
        foreL = [0,0,0.5];
        foreR = [0,0,0.5];
    } else if ((EnvClass === 3)) {
        //side = 1 right env == list 2 == second list water
        //side = 2 right env == list 1 == first list sand
        foreL = foreLRc[side[0]-1]; 
        foreR = foreLRc[side[1]-1];
    } else {
        foreL = [0,0,0];
        foreR = [0,0,0];
    }
    //Remove not needed variables
    practiceTrials._trialList[practice_TrialCount].S1_E1_Var = [];
    practiceTrials._trialList[practice_TrialCount].S2_E1_Var = [];
    practiceTrials._trialList[practice_TrialCount].S3_E1_Var = [];
    practiceTrials._trialList[practice_TrialCount].S4_E1_Var = [];
    practiceTrials._trialList[practice_TrialCount].S1_E2_Var = [];
    practiceTrials._trialList[practice_TrialCount].S2_E2_Var = [];
    practiceTrials._trialList[practice_TrialCount].S3_E2_Var = [];
    practiceTrials._trialList[practice_TrialCount].S4_E2_Var = [];
    practiceTrials._trialList[practice_TrialCount].S1_OffsetDir = [];
    practiceTrials._trialList[practice_TrialCount].S2_OffsetDir = [];
    practiceTrials._trialList[practice_TrialCount].S3_OffsetDir = [];
    practiceTrials._trialList[practice_TrialCount].S4_OffsetDir = [];
    practiceTrials._trialList[practice_TrialCount].words = [];
    practice_TrialCount += 1;
    // setup some python lists for storing info about the mouse_practice
    gotValidClick = false; // until a click is received
    key_resp_side_practice.keys = undefined;
    key_resp_side_practice.rt = undefined;
    _key_resp_side_practice_allKeys = [];
    key_resp_model_practice.keys = undefined;
    key_resp_model_practice.rt = undefined;
    _key_resp_model_practice_allKeys = [];
    polygon_1txt_practice.setOpacity(op1);
    polygon_1txt_practice.setHeight(LH1);
    polygon_2txt_practice.setOpacity(op2);
    polygon_2txt_practice.setHeight(LH2);
    polygon_3txt_practice.setOpacity(op3);
    polygon_3txt_practice.setHeight(LH3);
    polygon_4txt_practice.setOpacity(op4);
    polygon_4txt_practice.setHeight(LH4);
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(key_resp_trialEnd_practice);
    practiceComponents.push(background_practice);
    practiceComponents.push(foreground_practice);
    practiceComponents.push(polygon_rightTexture);
    practiceComponents.push(polygon_leftTexture);
    practiceComponents.push(mouse_practice);
    practiceComponents.push(key_resp_side_practice);
    practiceComponents.push(key_resp_model_practice);
    practiceComponents.push(polygon_1_practice);
    practiceComponents.push(polygon_1txt_practice);
    practiceComponents.push(polygon_2_practice);
    practiceComponents.push(polygon_2txt_practice);
    practiceComponents.push(polygon_3_practice);
    practiceComponents.push(polygon_3txt_practice);
    practiceComponents.push(polygon_4_practice);
    practiceComponents.push(polygon_4txt_practice);
    practiceComponents.push(text_vis);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var polys;
function practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_trialEnd_practice* updates
    if (t >= 0.0 && key_resp_trialEnd_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_trialEnd_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_trialEnd_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_trialEnd_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trialEnd_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trialEnd_practice.clearEvents(); });
    }

    if (key_resp_trialEnd_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_trialEnd_practice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_trialEnd_practice_allKeys = _key_resp_trialEnd_practice_allKeys.concat(theseKeys);
      if (_key_resp_trialEnd_practice_allKeys.length > 0) {
        key_resp_trialEnd_practice.keys = _key_resp_trialEnd_practice_allKeys[_key_resp_trialEnd_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_trialEnd_practice.rt = _key_resp_trialEnd_practice_allKeys[_key_resp_trialEnd_practice_allKeys.length - 1].rt;
      }
    }
    
    
    // *background_practice* updates
    if (t >= 0.0 && background_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_practice.tStart = t;  // (not accounting for frame time here)
      background_practice.frameNStart = frameN;  // exact frame index
      
      background_practice.setAutoDraw(true);
    }

    
    if (background_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      background_practice.setFillColor(new util.Color(bgc));
    }
    
    // *foreground_practice* updates
    if (t >= 0.0 && foreground_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      foreground_practice.tStart = t;  // (not accounting for frame time here)
      foreground_practice.frameNStart = frameN;  // exact frame index
      
      foreground_practice.setAutoDraw(true);
    }

    
    if (foreground_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      foreground_practice.setOpacity(1);
      foreground_practice.setFillColor(new util.Color([0, 0, 0]));
      foreground_practice.setLineColor(new util.Color([1, 1, 1]));
    }
    
    // *polygon_rightTexture* updates
    if (t >= 0.0 && polygon_rightTexture.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_rightTexture.tStart = t;  // (not accounting for frame time here)
      polygon_rightTexture.frameNStart = frameN;  // exact frame index
      
      polygon_rightTexture.setAutoDraw(true);
    }

    
    if (polygon_rightTexture.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_rightTexture.setFillColor(new util.Color(foreR));
      polygon_rightTexture.setLineColor(new util.Color(foreR));
    }
    
    // *polygon_leftTexture* updates
    if (t >= 0.0 && polygon_leftTexture.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_leftTexture.tStart = t;  // (not accounting for frame time here)
      polygon_leftTexture.frameNStart = frameN;  // exact frame index
      
      polygon_leftTexture.setAutoDraw(true);
    }

    
    if (polygon_leftTexture.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_leftTexture.setFillColor(new util.Color(foreL));
      polygon_leftTexture.setLineColor(new util.Color(foreL));
    }
    function degrees (angle) {
      return angle * (180 / Math.PI);
    }
    function radians(degrees) {
        return degrees * Math.PI / 180;
    }
    function normal(mean, sigma,nsamples) {
        var xList = []
        for (var i = 0; i < nsamples; i++) { 
            var u = Math.random()*0.682;
            var x = ((u % 1e-8 > 5e-9 ? 1 : -1) * (Math.sqrt(-Math.log(Math.max(1e-9, u)))-0.618))*1.618 * sigma + mean;
        xList.push(parseFloat(x.toFixed(5)));
        }
        return xList
    }
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array
    }
    function randPos(xm, xsd, ym, ysd) {
        // Normally distribute within box limit
        var polys = 4;
        while (1) {
            var countX = 0;
            var countY = 0;
            var sposListX = normal(xm, xsd, polys);
            var sposListY = normal(ym, ysd, polys);
            var sqrsize = 0.35;
            for (var itemX, _pj_c = 0, _pj_a = sposListX, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemX = _pj_a[_pj_c];
                if (((itemX < (xm+sqrsize)) && (itemX > (xm-sqrsize)))) {
                    countX += 1;
                }
            }
            for (var itemY, _pj_c = 0, _pj_a = sposListY, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemY = _pj_a[_pj_c];
                if (((itemY < (ym+sqrsize)) && (itemY > (ym-sqrsize)))) {
                    countY += 1;
                }
            }
            if (((countX === polys) && (countY === polys))) {
                break;
            }
        }
        return [sposListX, sposListY];
    }
    function distAng(side, sloth, preMouse, objPrev, currVar, dirAngle, logRow) {
        var a, currX, currY, prevMX, prevMY, deltaAngle, deltaDist, deltaX, deltaY, SpatOffX, SpatOffY, nsqr, NewX, NewY, prevX, prevY, winX, winY, wrap;
        [prevX, prevY] = objPrev; //previous object location x,y
        [currX, currY] = mouse_practice.getPos(); //find mouse location x,y
        currX = (parseFloat(currX.toFixed(5))); // reduce
        currY = (parseFloat(currY.toFixed(5))); // reduce
        prevMX = preMouse[0]; //previous mouse position x
        prevMY = preMouse[1]; //previous mouse position y
        winX = 0.75;
        winY = 0.35;
        nsqr = 4;
        deltaX = ((currX) - (parseFloat(prevMX.toFixed(5))));
        deltaY = ((currY) - (parseFloat(prevMY.toFixed(5))));
        if (((deltaX === prevMX) && (deltaY === prevMY))) {
            deltaAngle = NaN;
        } else if (((deltaX >= 0) && (deltaY >= 0))) {
            deltaAngle = Math.abs(degrees(Math.atan((deltaY / deltaX))));
        } else if (((deltaX <= 0) && (deltaY >= 0))) {
            deltaAngle = (180 - Math.abs(degrees(Math.atan((deltaY / deltaX)))));
        } else if (((deltaX <= 0) && (deltaY <= 0))) {
            deltaAngle = (180 + Math.abs(degrees(Math.atan((deltaY / deltaX)))));
        } else if (((deltaX >= 0) && (deltaY <= 0))) {
            deltaAngle = (360 - Math.abs(degrees(Math.atan((deltaY / deltaX)))));
        }
        deltaDist = (Math.sqrt((Math.pow(deltaX, 2) + Math.pow(deltaY, 2))));
        //#loop for all variables
        a = new Array(nsqr).fill(NaN);
        NewX = new Array(nsqr).fill(0);
        NewY = new Array(nsqr).fill(0);
        wrap = new Array(nsqr).fill(0);
        //Move or not
        if (((deltaX === 0) && (deltaY === 0))) {
            NewX = prevX;
            NewY = prevY;
            SpatOffX = new Array(nsqr).fill(0);
            SpatOffY = new Array(nsqr).fill(0);
            wrap[k] = 0;
        //} else if (sloth[0] == 10000) { //if you don't want any movement at all
        //    NewX = prevX;
        //    NewY = prevY;
        //    var SpatOffX = new Array(nsqr).fill(0);
        //    var SpatOffY = new Array(nsqr).fill(0);
        } else {
            SpatOffX = new Array(nsqr).fill(0);
            SpatOffY = new Array(nsqr).fill(0);
            for (var k = 0, _pj_a = nsqr; (k < _pj_a); k += 1) {
                if ((side[0] === 1)) { //x right then env = 2
                    if ((prevX[k] > 0)) {
                       var j = k+4; //#use the second or first environment
                    } else {
                       var j = k;
                    }
                } else if ((side[0] === 2)) { //x left then env = 2
                    if ((prevX[k] < 0)) {
                        var j = k+4; //#use the second or first environment
                    } else {
                        var j = k;
                    }
                }
                // Set angle for objects
                a[k] = ((deltaAngle - dirAngle[k]) + currVar[j]);
                if (((((90 >= a[k]) && (a[k] >= 0)) || (((- 270) >= a[k]) && (a[k] >= (- 360)))) || ((450 >= a[k]) && (a[k] >= 360)))) {
                    SpatOffX[k] = ((deltaDist/sloth[k]) * degrees(Math.cos(radians(a[k]))));
                    SpatOffY[k] = ((deltaDist/sloth[k])* degrees(Math.sin(radians(a[k]))));
                } else if (((((180 >= a[k]) && (a[k] >= 90)) || (((- 180) >= a[k]) && (a[k] >= (- 270)))) || ((540 >= a[k]) && (a[k] >= 450)))) {
                    SpatOffX[k] = ((- (deltaDist/sloth[k])) * degrees(Math.cos(radians(180 - a[k]))));
                    SpatOffY[k] = ((deltaDist/sloth[k])* degrees(Math.sin(radians(180 - a[k]))));
                } else if (((((270 >= a[k]) && (a[k] >= 180)) || (((- 90) >= a[k]) && (a[k] >= (- 180)))) || ((630 >= a[k]) && (a[k] >= 540)))) {
                    SpatOffX[k] = ((- (deltaDist/sloth[k])) * degrees(Math.cos(radians(180 + a[k]))));
                    SpatOffY[k] = ((- (deltaDist/sloth[k])) * degrees(Math.sin(radians(180 + a[k]))));
                } else if (((((360 >= a[k]) && (a[k] >= 270)) || ((0 >= a[k]) && (a[k] >= (- 90)))) || ((720 >= a[k]) && (a[k] >= 630)))) {
                    SpatOffX[k] = ((deltaDist/sloth[k]) * degrees(Math.cos(radians(360 - a[k]))));
                    SpatOffY[k] = ((- (deltaDist/sloth[k])) * degrees(Math.sin(radians(360 - a[k]))));
                } else {
                    console.log("ERROR - calculated angle outside specified quadrants");
                }
                // Define new locations
                NewX[k] = (parseFloat((prevX[k] + (SpatOffX[k])).toFixed(5)));
                NewY[k] = (parseFloat((prevY[k] + (SpatOffY[k])).toFixed(5)));
                wrap[k] = 0;
                // Wrap if new locations are off the screen
                if ((NewX[k] >= winX)) {
                    NewX[k] = (NewX[k]-(winX*2));
                    wrap[k] = 1;
                } else if ((NewX[k] <= -winX)) {
                    NewX[k] = (NewX[k]+(winX*2));
                    wrap[k] = 3;
                }
                if ((NewY[k]>= winY)) {
                    NewY[k] = (NewY[k]-(winY*2));
                    wrap[k] = 2;
                } else if ((NewY[k] <= -winY)) {
                    NewY[k] = (NewY[k]+(winY*2));
                    wrap[k] = 4;
                }
            } //console.log(a);
        }
        logRow = (logRow + 1);
        return [NewX, NewY, currX, currY,logRow, sloth, wrap] 
    }
    t = parseFloat(t.toFixed(5));
    //model choice
    // key state down
    document.addEventListener('keydown', function(event) {
        if ((event.code === 'Digit1' )  && (corrAns !== 5)) {
            bgc = colour[order[0]];
            sloth = [5,2.5,2.5,2.5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '1')) {
                    track_Model_key.push('1');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('1');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        } else if ((event.code === 'Digit2' ) && (corrAns !== 5)) {
            bgc = colour[order[1]];
            sloth = [2.5,5,2.5,2.5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '2')) {
                    track_Model_key.push('2');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('2');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        } else if ((event.code === 'Digit3' ) && (corrAns !== 5)) {
            bgc = colour[order[2]];
            sloth = [2.5,2.5,5,2.5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '3')) {
                    track_Model_key.push('3');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('3');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        } else if ((event.code === 'Digit4' ) && (corrAns !== 5)) {
            bgc = colour[order[3]];
            sloth = [2.5,2.5,2.5,5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '4')) {
                    track_Model_key.push('4');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('4');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        }
    });
    // key state up
    document.addEventListener('keyup', function(event) {
        if (((event.code === 'Digit1' ) || (event.code === 'Digit2' ) || (event.code === 'Digit3' ) || (event.code === 'Digit4' ))  && (corrAns !== 5)) {
             // Only assign when there is key lift
             if (track_Model_key) {
                if (track_Model_key.length === 1) { 
                    var sb1 = (track_Model_key.slice(- 1)[0]);
                    if ((sb1.includes('None')) === false) {
                        track_Model_key.push('None'+ event.code);
                        track_Model_T.push(t);
                        track_Model_Frame.push(frameN);
                        bgc = [0,0,0];
                        sloth = [10000,10000,10000,10000];
                    } 
                } else if (track_Model_key.length > 1) { 
                    var sb1 = (track_Model_key.slice(- 1)[0]);
                    var sb2 = (track_Model_key.slice(- 2)[0]);
                    if (((sb1.includes('None')) === false) && ((sb2.includes('None')) === false)) {
                        track_Model_key.push('None'+ event.code);
                        track_Model_T.push(t);
                        track_Model_Frame.push(frameN);
                        //swtich back to the previous colour
                        if (sb2 === '1') {
                            bgc = colour[order[0]];
                            sloth = [5,2.5,2.5,2.5];
                            track_Model_key.push('1');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        } else if (sb2 === '2') {
                            bgc = colour[order[1]];
                            sloth = [2.5,5,2.5,2.5]; 
                            track_Model_key.push('2');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        } else if (sb2 === '3'){
                            bgc = colour[order[2]];
                            sloth = [2.5,2.5,5,2.5];
                            track_Model_key.push('3');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        } else if (sb2 === '4') {
                            bgc = colour[order[3]];
                            sloth = [2.5,2.5,2.5,5];
                            track_Model_key.push('4');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        }
                    } else if (((sb1.includes('None')) === false) && ((sb2.includes('None')) === true) && event.code.includes(sb1)) {
                        track_Model_key.push('None'+ event.code);
                        track_Model_T.push(t);
                        track_Model_Frame.push(frameN);
                        bgc = [0,0,0];
                        sloth = [10000,10000,10000,10000];
                    }
                }
            } else {
                    track_Model_key.push('None');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
                    bgc = [0,0,0];
                    sloth = [10000,10000,10000,10000];
            }
        }
    });
    //allow for infinite looping
    if ((key_resp_trialEnd_practice.keys === 'space') && (qOn === 0)) {
        continueRoutine = false;
    }
    if (((logRow >= (450-1)) && (qOn === 0))) {
        logRow = 0;
        mouseX = [];
        mouseY = [];
        fmouse = mouse_practice.getPos();
        mouseX.push(fmouse[0]);
        mouseY.push(fmouse[1]);
    } else if ((((logRow >= (450-1)) || t >= 15.0) && (qOn === 1))) {
        continueRoutine = false; // end loop if qOn
    }
    // Calls
    // Every other frame [30Hz]
    if ((frameN % 2) === 0) {
        var preMouse = [mouseX, mouseY];
        [NewX, NewY, currX, currY, logRow, sloth, wrap] = distAng(side,sloth,[preMouse[0][logRow],preMouse[1][logRow]],[[spos1[0],spos2[0],spos3[0],spos4[0]],[spos1[1],spos2[1],spos3[1],spos4[1]]], [varias[0][logRow], varias[1][logRow], varias[2][logRow], varias[3][logRow], varias[4][logRow], varias[5][logRow], varias[6][logRow], varias[7][logRow]],[offs[0][logRow],offs[1][logRow],offs[2][logRow],offs[3][logRow]], logRow);
        mouseX.push(currX);
        mouseY.push(currY);
    
        //#assignment
        spos1 = [NewX[0], NewY[0]];
        spos2 = [NewX[1], NewY[1]];
        spos3 = [NewX[2], NewY[2]];
        spos4 = [NewX[3], NewY[3]];
    }
    polys = 4;
    // If position is reset by ends
    if (EnvOn === 1) {
        let theseKeys2 = key_resp_side_practice.getKeys({keyList: ['q', 'r'], waitRelease: false});
        if ((theseKeys2.length) > 0) {
            if ((theseKeys2[theseKeys2.length-1].name === "q")) {
                // Normally distribute within box limit
                [NewX, NewY]  = randPos(-0.4,0.2,0,0.2);
                spos1 = [NewX[0], NewY[0]];
                spos2 = [NewX[1], NewY[1]];
                spos3 = [NewX[2], NewY[2]];
                spos4 = [NewX[3], NewY[3]];
                track_Env_key.push('q');
                track_Env_T.push(t);
                track_Env_Frame.push(frameN);
            }    
            if ((theseKeys2[theseKeys2.length-1].name === "r")) {
                [NewX, NewY]  = randPos(0.4,0.2,0,0.2);
                spos1 = [NewX[0], NewY[0]];
                spos2 = [NewX[1], NewY[1]];
                spos3 = [NewX[2], NewY[2]];
                spos4 = [NewX[3], NewY[3]];
                track_Env_key.push('r');
                track_Env_T.push(t);
                track_Env_Frame.push(frameN);
            } 
        }
    }
    if ((frameN % 2) === 0) {
        //put new location in variables
        poly1x.push([NewX[0]]);
        poly1y.push([NewY[0]]);
        poly2x.push([NewX[1]]);
        poly2y.push([NewY[1]]);
        poly3x.push([NewX[2]]);
        poly3y.push([NewY[2]]);
        poly4x.push([NewX[3]]);
        poly4y.push([NewY[3]]);
        // additional tracking variables
        track_sloth.push(sloth);
        track_wrap.push(wrap);
        track_logrowT.push(t);
    }
    // warning if not key press
    if ((track_Model_key.length) > 0) {
        warn = 0;
    } else {
        warn = 1; //default to displaying warning
    }
    
    // *key_resp_side_practice* updates
    if (t >= 0.0 && key_resp_side_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_side_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_side_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_side_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_side_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_side_practice.clearEvents(); });
    }

    if (key_resp_side_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_side_practice.getKeys({keyList: ['q', 'r'], waitRelease: false});
      _key_resp_side_practice_allKeys = _key_resp_side_practice_allKeys.concat(theseKeys);
      if (_key_resp_side_practice_allKeys.length > 0) {
        key_resp_side_practice.keys = _key_resp_side_practice_allKeys.map((key) => key.name);  // storing all keys
        key_resp_side_practice.rt = _key_resp_side_practice_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *key_resp_model_practice* updates
    if (t >= 0.0 && key_resp_model_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_model_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_model_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_model_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_model_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_model_practice.clearEvents(); });
    }

    if (key_resp_model_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_model_practice.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_model_practice_allKeys = _key_resp_model_practice_allKeys.concat(theseKeys);
      if (_key_resp_model_practice_allKeys.length > 0) {
        key_resp_model_practice.keys = _key_resp_model_practice_allKeys[_key_resp_model_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_model_practice.rt = _key_resp_model_practice_allKeys[_key_resp_model_practice_allKeys.length - 1].rt;
      }
    }
    
    
    // *polygon_1_practice* updates
    if (t >= 0.0 && polygon_1_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1_practice.tStart = t;  // (not accounting for frame time here)
      polygon_1_practice.frameNStart = frameN;  // exact frame index
      
      polygon_1_practice.setAutoDraw(true);
    }

    
    if (polygon_1_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1_practice.setOpacity(op1);
      polygon_1_practice.setPos(spos1);
      polygon_1_practice.setFillColor(new util.Color(c1));
    }
    
    // *polygon_1txt_practice* updates
    if (t >= 0.0 && polygon_1txt_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1txt_practice.tStart = t;  // (not accounting for frame time here)
      polygon_1txt_practice.frameNStart = frameN;  // exact frame index
      
      polygon_1txt_practice.setAutoDraw(true);
    }

    
    if (polygon_1txt_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1txt_practice.setPos(spos1);
    }
    
    // *polygon_2_practice* updates
    if (t >= 0.0 && polygon_2_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2_practice.tStart = t;  // (not accounting for frame time here)
      polygon_2_practice.frameNStart = frameN;  // exact frame index
      
      polygon_2_practice.setAutoDraw(true);
    }

    
    if (polygon_2_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_2_practice.setOpacity(op2);
      polygon_2_practice.setPos(spos2);
      polygon_2_practice.setFillColor(new util.Color(c2));
    }
    
    // *polygon_2txt_practice* updates
    if (t >= 0.0 && polygon_2txt_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2txt_practice.tStart = t;  // (not accounting for frame time here)
      polygon_2txt_practice.frameNStart = frameN;  // exact frame index
      
      polygon_2txt_practice.setAutoDraw(true);
    }

    
    if (polygon_2txt_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_2txt_practice.setPos(spos2);
    }
    
    // *polygon_3_practice* updates
    if (t >= 0.0 && polygon_3_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3_practice.tStart = t;  // (not accounting for frame time here)
      polygon_3_practice.frameNStart = frameN;  // exact frame index
      
      polygon_3_practice.setAutoDraw(true);
    }

    
    if (polygon_3_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_3_practice.setOpacity(op3);
      polygon_3_practice.setPos(spos3);
      polygon_3_practice.setFillColor(new util.Color(c3));
    }
    
    // *polygon_3txt_practice* updates
    if (t >= 0.0 && polygon_3txt_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3txt_practice.tStart = t;  // (not accounting for frame time here)
      polygon_3txt_practice.frameNStart = frameN;  // exact frame index
      
      polygon_3txt_practice.setAutoDraw(true);
    }

    
    if (polygon_3txt_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_3txt_practice.setPos(spos3);
    }
    
    // *polygon_4_practice* updates
    if (t >= 0.0 && polygon_4_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4_practice.tStart = t;  // (not accounting for frame time here)
      polygon_4_practice.frameNStart = frameN;  // exact frame index
      
      polygon_4_practice.setAutoDraw(true);
    }

    
    if (polygon_4_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_4_practice.setOpacity(op4);
      polygon_4_practice.setPos(spos4);
      polygon_4_practice.setFillColor(new util.Color(c4));
    }
    
    // *polygon_4txt_practice* updates
    if (t >= 0.0 && polygon_4txt_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4txt_practice.tStart = t;  // (not accounting for frame time here)
      polygon_4txt_practice.frameNStart = frameN;  // exact frame index
      
      polygon_4txt_practice.setAutoDraw(true);
    }

    
    if (polygon_4txt_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_4txt_practice.setPos(spos4);
    }
    
    // *text_vis* updates
    if (t >= 0.0 && text_vis.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_vis.tStart = t;  // (not accounting for frame time here)
      text_vis.frameNStart = frameN;  // exact frame index
      
      text_vis.setAutoDraw(true);
    }

    
    if (text_vis.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_vis.setColor(new util.Color('white'));
    }
    psychoJS.window._fullRefresh();
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var winDims;
function practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice'-------
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('poly1x',poly1x);
    psychoJS.experiment.addData('poly1y',poly1y);
    psychoJS.experiment.addData('poly2x',poly2x);
    psychoJS.experiment.addData('poly2y',poly2y);
    psychoJS.experiment.addData('poly3x',poly3x);
    psychoJS.experiment.addData('poly3y',poly3y);
    psychoJS.experiment.addData('poly4x',poly4x);
    psychoJS.experiment.addData('poly4y',poly4y);
    // Screen dim every trial
    winDims = psychoJS.window.size;
    psychoJS.experiment.addData('winDims',winDims);
    psychoJS.experiment.addData('side',side[0]);
    psychoJS.experiment.addData('order',order);
    //
    psychoJS.experiment.addData('mouseX',mouseX);
    psychoJS.experiment.addData('mouseY',mouseY);
    psychoJS.experiment.addData('track_sloth', track_sloth);
    psychoJS.experiment.addData('track_wrap', track_wrap);
    psychoJS.experiment.addData('warn',warn);
    //
    psychoJS.experiment.addData('track_Env_key', track_Env_key);
    psychoJS.experiment.addData('track_Env_T', track_Env_T);
    psychoJS.experiment.addData('track_Env_Frame', track_Env_Frame);
    //
    psychoJS.experiment.addData('track_Model_key', track_Model_key);
    psychoJS.experiment.addData('track_Model_T', track_Model_T);
    psychoJS.experiment.addData('track_Model_Frame', track_Model_Frame);
    psychoJS.experiment.addData('track_logrowT',track_logrowT);
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_side_practice.keys', key_resp_side_practice.keys);
    if (typeof key_resp_side_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_side_practice.rt', key_resp_side_practice.rt);
        }
    
    key_resp_side_practice.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_which_practice_allKeys;
var _key_resp_whichEnd_practice_allKeys;
var posSelect;
var opSelect;
var whichKey;
var spacelen_which;
var which_practiceComponents;
function which_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'which_practice'-------
    t = 0;
    which_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_which_practice.keys = undefined;
    key_resp_which_practice.rt = undefined;
    _key_resp_which_practice_allKeys = [];
    key_resp_whichEnd_practice.keys = undefined;
    key_resp_whichEnd_practice.rt = undefined;
    _key_resp_whichEnd_practice_allKeys = [];
    posSelect = [0, 0.1];
    opSelect = 0;
    whichKey = [];
    spacelen_which = 0;
    
    // keep track of which components have finished
    which_practiceComponents = [];
    which_practiceComponents.push(key_resp_which_practice);
    which_practiceComponents.push(key_resp_whichEnd_practice);
    which_practiceComponents.push(polygon_highlight_practice);
    which_practiceComponents.push(polygon_background);
    which_practiceComponents.push(which_text_practice);
    which_practiceComponents.push(polygon_1Choose_practice);
    which_practiceComponents.push(poly1txtChoose_practice);
    which_practiceComponents.push(polygon_2Choose_practice);
    which_practiceComponents.push(poly2txtChoose_practice);
    which_practiceComponents.push(polygon_3Choose_practice);
    which_practiceComponents.push(poly3txtChoose_practice);
    which_practiceComponents.push(polygon_4Choose_practice);
    which_practiceComponents.push(poly4txtChoose_practice);
    which_practiceComponents.push(polygon_ZChoose_practice);
    which_practiceComponents.push(polyZtxtChoose_practice);
    
    for (const thisComponent of which_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function which_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'which_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = which_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_which_practice* updates
    if (t >= 0.0 && key_resp_which_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_which_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_which_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_which_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_which_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_which_practice.clearEvents(); });
    }

    if (key_resp_which_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_which_practice.getKeys({keyList: ['0', '1', '2', '3', '4'], waitRelease: false});
      _key_resp_which_practice_allKeys = _key_resp_which_practice_allKeys.concat(theseKeys);
      if (_key_resp_which_practice_allKeys.length > 0) {
        key_resp_which_practice.keys = _key_resp_which_practice_allKeys[_key_resp_which_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_which_practice.rt = _key_resp_which_practice_allKeys[_key_resp_which_practice_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_which_practice.keys == corrAns) {
            key_resp_which_practice.corr = 1;
        } else {
            key_resp_which_practice.corr = 0;
        }
      }
    }
    
    
    // *key_resp_whichEnd_practice* updates
    if (t >= 0.0 && key_resp_whichEnd_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_whichEnd_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_whichEnd_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_whichEnd_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_whichEnd_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_whichEnd_practice.clearEvents(); });
    }

    if (key_resp_whichEnd_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_whichEnd_practice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_whichEnd_practice_allKeys = _key_resp_whichEnd_practice_allKeys.concat(theseKeys);
      if (_key_resp_whichEnd_practice_allKeys.length > 0) {
        key_resp_whichEnd_practice.keys = _key_resp_whichEnd_practice_allKeys.map((key) => key.name);  // storing all keys
        key_resp_whichEnd_practice.rt = _key_resp_whichEnd_practice_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *polygon_highlight_practice* updates
    if (t >= 0.0 && polygon_highlight_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_highlight_practice.tStart = t;  // (not accounting for frame time here)
      polygon_highlight_practice.frameNStart = frameN;  // exact frame index
      
      polygon_highlight_practice.setAutoDraw(true);
    }

    
    if (polygon_highlight_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_highlight_practice.setOpacity(opSelect);
      polygon_highlight_practice.setPos(posSelect);
    }
    
    // *polygon_background* updates
    if (t >= 0.0 && polygon_background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_background.tStart = t;  // (not accounting for frame time here)
      polygon_background.frameNStart = frameN;  // exact frame index
      
      polygon_background.setAutoDraw(true);
    }

    
    if (polygon_background.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_background.setFillColor(new util.Color([0, 0, 0]));
      polygon_background.setLineColor(new util.Color([0, 0, 0]));
    }
    if ((corrAns === 5)) {
        continueRoutine = false;
    }
    if ((corrAns !== 5)) {
        if ((whichKey.length > 0)) {
            if (((key_resp_which_practice.keys === "1") && (key_resp_which_practice.keys !== whichKey.slice((- 1))[0]))) {
                opSelect = 1;
                posSelect = poly1txtChoose_practice.pos;
                whichKey.push("1");
            }
            if (((key_resp_which_practice.keys === "2") && (key_resp_which_practice.keys !== whichKey.slice((- 1))[0]))) {
                opSelect = 1;
                posSelect = poly2txtChoose_practice.pos;
                whichKey.push("2");
            }
            if (((key_resp_which_practice.keys === "3") && (key_resp_which_practice.keys !== whichKey.slice((- 1))[0]))) {
                opSelect = 1;
                posSelect = poly3txtChoose_practice.pos;
                whichKey.push("3");
            }
            if (((key_resp_which_practice.keys === "4") && (key_resp_which_practice.keys !== whichKey.slice((- 1))[0]))) {
                opSelect = 1;
                posSelect = poly4txtChoose_practice.pos;
                whichKey.push("4");
            }
            if (((key_resp_which_practice.keys === "0") && (key_resp_which_practice.keys !== whichKey.slice((- 1))[0]))) {
                opSelect = 1;
                posSelect = polyZtxtChoose_practice.pos;
                whichKey.push("0");
            }
        } else {
            if ((key_resp_which_practice.keys === "1")) {
                opSelect = 1;
                posSelect = poly1txtChoose_practice.pos;
                whichKey.push("1");
            }
            if ((key_resp_which_practice.keys === "2")) {
                opSelect = 1;
                posSelect = poly2txtChoose_practice.pos;
                whichKey.push("2");
            }
            if ((key_resp_which_practice.keys === "3")) {
                opSelect = 1;
                posSelect = poly3txtChoose_practice.pos;
                whichKey.push("3");
            }
            if ((key_resp_which_practice.keys === "4")) {
                opSelect = 1;
                posSelect = poly4txtChoose_practice.pos;
                whichKey.push("4");
            }
            if ((key_resp_which_practice.keys === "0")) {
                opSelect = 1;
                posSelect = polyZtxtChoose_practice.pos;
                whichKey.push("0");
            }
        }
        if (key_resp_whichEnd_practice.keys) {
            if (((key_resp_whichEnd_practice.keys.length > 0) && (! key_resp_which_practice.keys))) {
                spacelen_which = key_resp_whichEnd_practice.keys.length;
            }
            if ((key_resp_whichEnd_practice.keys.length > spacelen_which)) {
                whichKey.push("space");
            }
        }
    }
    if ((corrAns !== 5)) {
        if (whichKey) {
            if (((whichKey.slice((- 1))[0] === "space") && (whichKey.length > 1))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *which_text_practice* updates
    if (t >= 0.0 && which_text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      which_text_practice.tStart = t;  // (not accounting for frame time here)
      which_text_practice.frameNStart = frameN;  // exact frame index
      
      which_text_practice.setAutoDraw(true);
    }

    
    if (which_text_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      which_text_practice.setColor(new util.Color('white'));
      which_text_practice.setText('Use the keyboard to input the number of the square you controlled. \nIf you think you controlled none of the squares, type 0.  \n\nPress the spacebar to submit the final response');
    }
    
    // *polygon_1Choose_practice* updates
    if (t >= 0.0 && polygon_1Choose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1Choose_practice.tStart = t;  // (not accounting for frame time here)
      polygon_1Choose_practice.frameNStart = frameN;  // exact frame index
      
      polygon_1Choose_practice.setAutoDraw(true);
    }

    
    if (polygon_1Choose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1Choose_practice.setFillColor(new util.Color(c1));
      polygon_1Choose_practice.setLineColor(new util.Color([1, 1, 1]));
    }
    
    // *poly1txtChoose_practice* updates
    if (t >= 0.0 && poly1txtChoose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly1txtChoose_practice.tStart = t;  // (not accounting for frame time here)
      poly1txtChoose_practice.frameNStart = frameN;  // exact frame index
      
      poly1txtChoose_practice.setAutoDraw(true);
    }

    
    if (poly1txtChoose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly1txtChoose_practice.setColor(new util.Color('black'));
    }
    
    // *polygon_2Choose_practice* updates
    if (t >= 0.0 && polygon_2Choose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2Choose_practice.tStart = t;  // (not accounting for frame time here)
      polygon_2Choose_practice.frameNStart = frameN;  // exact frame index
      
      polygon_2Choose_practice.setAutoDraw(true);
    }

    
    if (polygon_2Choose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_2Choose_practice.setFillColor(new util.Color(c2));
      polygon_2Choose_practice.setLineColor(new util.Color([1, 1, 1]));
    }
    
    // *poly2txtChoose_practice* updates
    if (t >= 0.0 && poly2txtChoose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly2txtChoose_practice.tStart = t;  // (not accounting for frame time here)
      poly2txtChoose_practice.frameNStart = frameN;  // exact frame index
      
      poly2txtChoose_practice.setAutoDraw(true);
    }

    
    if (poly2txtChoose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly2txtChoose_practice.setColor(new util.Color('black'));
    }
    
    // *polygon_3Choose_practice* updates
    if (t >= 0.0 && polygon_3Choose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3Choose_practice.tStart = t;  // (not accounting for frame time here)
      polygon_3Choose_practice.frameNStart = frameN;  // exact frame index
      
      polygon_3Choose_practice.setAutoDraw(true);
    }

    
    if (polygon_3Choose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_3Choose_practice.setFillColor(new util.Color(c3));
      polygon_3Choose_practice.setLineColor(new util.Color([1, 1, 1]));
    }
    
    // *poly3txtChoose_practice* updates
    if (t >= 0.0 && poly3txtChoose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly3txtChoose_practice.tStart = t;  // (not accounting for frame time here)
      poly3txtChoose_practice.frameNStart = frameN;  // exact frame index
      
      poly3txtChoose_practice.setAutoDraw(true);
    }

    
    if (poly3txtChoose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly3txtChoose_practice.setColor(new util.Color('black'));
    }
    
    // *polygon_4Choose_practice* updates
    if (t >= 0.0 && polygon_4Choose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4Choose_practice.tStart = t;  // (not accounting for frame time here)
      polygon_4Choose_practice.frameNStart = frameN;  // exact frame index
      
      polygon_4Choose_practice.setAutoDraw(true);
    }

    
    if (polygon_4Choose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_4Choose_practice.setFillColor(new util.Color(c4));
      polygon_4Choose_practice.setLineColor(new util.Color([1, 1, 1]));
    }
    
    // *poly4txtChoose_practice* updates
    if (t >= 0.0 && poly4txtChoose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly4txtChoose_practice.tStart = t;  // (not accounting for frame time here)
      poly4txtChoose_practice.frameNStart = frameN;  // exact frame index
      
      poly4txtChoose_practice.setAutoDraw(true);
    }

    
    if (poly4txtChoose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly4txtChoose_practice.setColor(new util.Color('black'));
    }
    
    // *polygon_ZChoose_practice* updates
    if (t >= 0.0 && polygon_ZChoose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_ZChoose_practice.tStart = t;  // (not accounting for frame time here)
      polygon_ZChoose_practice.frameNStart = frameN;  // exact frame index
      
      polygon_ZChoose_practice.setAutoDraw(true);
    }

    
    if (polygon_ZChoose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_ZChoose_practice.setFillColor(new util.Color([0, 0, 0]));
    }
    
    // *polyZtxtChoose_practice* updates
    if (t >= 0.0 && polyZtxtChoose_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polyZtxtChoose_practice.tStart = t;  // (not accounting for frame time here)
      polyZtxtChoose_practice.frameNStart = frameN;  // exact frame index
      
      polyZtxtChoose_practice.setAutoDraw(true);
    }

    
    if (polyZtxtChoose_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polyZtxtChoose_practice.setColor(new util.Color('black'));
    }
    psychoJS.window._fullRefresh();
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of which_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function which_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'which_practice'-------
    for (const thisComponent of which_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_which_practice.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_which_practice.corr = 1;  // correct non-response
      } else {
         key_resp_which_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_which_practice.keys', key_resp_which_practice.keys);
    psychoJS.experiment.addData('key_resp_which_practice.corr', key_resp_which_practice.corr);
    if (typeof key_resp_which_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_which_practice.rt', key_resp_which_practice.rt);
        }
    
    key_resp_which_practice.stop();
    psychoJS.experiment.addData('key_resp_whichEnd_practice.keys', key_resp_whichEnd_practice.keys);
    if (typeof key_resp_whichEnd_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_whichEnd_practice.rt', key_resp_whichEnd_practice.rt);
        }
    
    key_resp_whichEnd_practice.stop();
    psychoJS.experiment.addData('whichKey', whichKey);
    // the Routine "which_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_conf_practice_allKeys;
var _key_resp_confEnd_practice_allKeys;
var Conf;
var conf_spacelen;
var confidence_practiceComponents;
function confidence_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'confidence_practice'-------
    t = 0;
    confidence_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_conf_practice.keys = undefined;
    key_resp_conf_practice.rt = undefined;
    _key_resp_conf_practice_allKeys = [];
    key_resp_confEnd_practice.keys = undefined;
    key_resp_confEnd_practice.rt = undefined;
    _key_resp_confEnd_practice_allKeys = [];
    key_resp_conf_practice.clearEvents();
    Conf = [];
    conf_spacelen = 0;
    
    slider_conf_practice.reset()
    // keep track of which components have finished
    confidence_practiceComponents = [];
    confidence_practiceComponents.push(key_resp_conf_practice);
    confidence_practiceComponents.push(key_resp_confEnd_practice);
    confidence_practiceComponents.push(conf_text_practice);
    confidence_practiceComponents.push(slider_conf_practice);
    
    for (const thisComponent of confidence_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function confidence_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'confidence_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = confidence_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_conf_practice* updates
    if (t >= 0.0 && key_resp_conf_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_conf_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_conf_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_conf_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_conf_practice.start(); }); // start on screen flip
    }

    if (key_resp_conf_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_conf_practice.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_conf_practice_allKeys = _key_resp_conf_practice_allKeys.concat(theseKeys);
      if (_key_resp_conf_practice_allKeys.length > 0) {
        key_resp_conf_practice.keys = _key_resp_conf_practice_allKeys[_key_resp_conf_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_conf_practice.rt = _key_resp_conf_practice_allKeys[_key_resp_conf_practice_allKeys.length - 1].rt;
      }
    }
    
    
    // *key_resp_confEnd_practice* updates
    if (t >= 0.0 && key_resp_confEnd_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_confEnd_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_confEnd_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_confEnd_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_confEnd_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_confEnd_practice.clearEvents(); });
    }

    if (key_resp_confEnd_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_confEnd_practice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_confEnd_practice_allKeys = _key_resp_confEnd_practice_allKeys.concat(theseKeys);
      if (_key_resp_confEnd_practice_allKeys.length > 0) {
        key_resp_confEnd_practice.keys = _key_resp_confEnd_practice_allKeys.map((key) => key.name);  // storing all keys
        key_resp_confEnd_practice.rt = _key_resp_confEnd_practice_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *conf_text_practice* updates
    if (t >= 0.0 && conf_text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conf_text_practice.tStart = t;  // (not accounting for frame time here)
      conf_text_practice.frameNStart = frameN;  // exact frame index
      
      conf_text_practice.setAutoDraw(true);
    }

    if ((qOn === 0)) {
        continueRoutine = false;
    }
    if ((qOn === 1)) {
        if ((Conf.length > 0)) {
            if (((key_resp_conf_practice.keys === "1") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("1");
                slider_conf_practice.markerPos = 1;
            }
            if (((key_resp_conf_practice.keys === "2") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("2");
                slider_conf_practice.markerPos = 2;
            }
            if (((key_resp_conf_practice.keys === "3") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("3");
                slider_conf_practice.markerPos = 3;
            }
            if (((key_resp_conf_practice.keys === "4") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("4");
                slider_conf_practice.markerPos = 4;
            }
            if (((key_resp_conf_practice.keys === "5") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("5");
                slider_conf_practice.markerPos = 5;
            }
            if (((key_resp_conf_practice.keys === "6") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("6");
                slider_conf_practice.markerPos = 6;
            }
            if (((key_resp_conf_practice.keys === "7") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("7");
                slider_conf_practice.markerPos = 7;
            }
            if (((key_resp_conf_practice.keys === "8") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("8");
                slider_conf_practice.markerPos = 8;
            }
            if (((key_resp_conf_practice.keys === "9") && (key_resp_conf_practice.keys !== Conf.slice((- 1))[0]))) {
                Conf.push("9");
                slider_conf_practice.markerPos = 9;
            }
        } else {
            if ((key_resp_conf_practice.keys === "1")) {
                Conf.push("1");
                slider_conf_practice.markerPos = 1;
            }
            if ((key_resp_conf_practice.keys === "2")) {
                Conf.push("2");
                slider_conf_practice.markerPos = 2;
            }
            if ((key_resp_conf_practice.keys === "3")) {
                Conf.push("3");
                slider_conf_practice.markerPos = 3;
            }
            if ((key_resp_conf_practice.keys === "4")) {
                Conf.push("4");
                slider_conf_practice.markerPos = 4;
            }
            if ((key_resp_conf_practice.keys === "5")) {
                Conf.push("5");
                slider_conf_practice.markerPos = 5;
            }
            if ((key_resp_conf_practice.keys === "6")) {
                Conf.push("6");
                slider_conf_practice.markerPos = 6;
            }
            if ((key_resp_conf_practice.keys === "7")) {
                Conf.push("7");
                slider_conf_practice.markerPos = 7;
            }
            if ((key_resp_conf_practice.keys === "8")) {
                Conf.push("8");
                slider_conf_practice.markerPos = 8;
            }
            if ((key_resp_conf_practice.keys === "9")) {
                Conf.push("9");
                slider_conf_practice.markerPos = 9;
            }
        }
        if (key_resp_confEnd_practice.keys) {
            if (((key_resp_confEnd_practice.keys.length > 0) && (! key_resp_conf_practice.keys))) {
                conf_spacelen = key_resp_confEnd_practice.keys.length;
            }
            if ((key_resp_confEnd_practice.keys.length > conf_spacelen)) {
                Conf.push("space");
            }
        }
    }
    if ((qOn === 1)) {
        if (Conf) {
            if (((Conf.slice((- 1))[0] === "space") && (Conf.length > 1))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *slider_conf_practice* updates
    if (t >= 0.0 && slider_conf_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_conf_practice.tStart = t;  // (not accounting for frame time here)
      slider_conf_practice.frameNStart = frameN;  // exact frame index
      
      slider_conf_practice.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of confidence_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function confidence_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'confidence_practice'-------
    for (const thisComponent of confidence_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_conf_practice.keys', key_resp_conf_practice.keys);
    if (typeof key_resp_conf_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_conf_practice.rt', key_resp_conf_practice.rt);
        }
    
    key_resp_conf_practice.stop();
    psychoJS.experiment.addData('key_resp_confEnd_practice.keys', key_resp_confEnd_practice.keys);
    if (typeof key_resp_confEnd_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_confEnd_practice.rt', key_resp_confEnd_practice.rt);
        }
    
    key_resp_confEnd_practice.stop();
    psychoJS.experiment.addData('Conf', Conf);
    // the Routine "confidence_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_agent_practice_allKeys;
var _key_resp_agentEnd_practice_allKeys;
var Agent;
var agent_spacelen;
var agent_practiceComponents;
function agent_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'agent_practice'-------
    t = 0;
    agent_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_agent_practice.keys = undefined;
    key_resp_agent_practice.rt = undefined;
    _key_resp_agent_practice_allKeys = [];
    key_resp_agentEnd_practice.keys = undefined;
    key_resp_agentEnd_practice.rt = undefined;
    _key_resp_agentEnd_practice_allKeys = [];
    key_resp_agent_practice.clearEvents();
    Agent = [];
    agent_spacelen = 0;
    
    slider_agent_practice.reset()
    // keep track of which components have finished
    agent_practiceComponents = [];
    agent_practiceComponents.push(key_resp_agent_practice);
    agent_practiceComponents.push(key_resp_agentEnd_practice);
    agent_practiceComponents.push(agent_text_practice);
    agent_practiceComponents.push(slider_agent_practice);
    
    for (const thisComponent of agent_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function agent_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'agent_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = agent_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_agent_practice* updates
    if (t >= 0.0 && key_resp_agent_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_agent_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_agent_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_agent_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_agent_practice.start(); }); // start on screen flip
    }

    if (key_resp_agent_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_agent_practice.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_agent_practice_allKeys = _key_resp_agent_practice_allKeys.concat(theseKeys);
      if (_key_resp_agent_practice_allKeys.length > 0) {
        key_resp_agent_practice.keys = _key_resp_agent_practice_allKeys[_key_resp_agent_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_agent_practice.rt = _key_resp_agent_practice_allKeys[_key_resp_agent_practice_allKeys.length - 1].rt;
      }
    }
    
    
    // *key_resp_agentEnd_practice* updates
    if (t >= 0.0 && key_resp_agentEnd_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_agentEnd_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_agentEnd_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_agentEnd_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_agentEnd_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_agentEnd_practice.clearEvents(); });
    }

    if (key_resp_agentEnd_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_agentEnd_practice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_agentEnd_practice_allKeys = _key_resp_agentEnd_practice_allKeys.concat(theseKeys);
      if (_key_resp_agentEnd_practice_allKeys.length > 0) {
        key_resp_agentEnd_practice.keys = _key_resp_agentEnd_practice_allKeys.map((key) => key.name);  // storing all keys
        key_resp_agentEnd_practice.rt = _key_resp_agentEnd_practice_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *agent_text_practice* updates
    if (t >= 0.0 && agent_text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_text_practice.tStart = t;  // (not accounting for frame time here)
      agent_text_practice.frameNStart = frameN;  // exact frame index
      
      agent_text_practice.setAutoDraw(true);
    }

    if ((qOn === 0)) {
        continueRoutine = false;
    }
    if ((qOn === 1)) {
        if ((Agent.length > 0)) {
            if (((key_resp_agent_practice.keys === "1") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("1");
                slider_agent_practice.markerPos = 1;
            }
            if (((key_resp_agent_practice.keys === "2") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("2");
                slider_agent_practice.markerPos = 2;
            }
            if (((key_resp_agent_practice.keys === "3") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("3");
                slider_agent_practice.markerPos = 3;
            }
            if (((key_resp_agent_practice.keys === "4") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("4");
                slider_agent_practice.markerPos = 4;
            }
            if (((key_resp_agent_practice.keys === "5") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("5");
                slider_agent_practice.markerPos = 5;
            }
            if (((key_resp_agent_practice.keys === "6") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("6");
                slider_agent_practice.markerPos = 6;
            }
            if (((key_resp_agent_practice.keys === "7") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("7");
                slider_agent_practice.markerPos = 7;
            }
            if (((key_resp_agent_practice.keys === "8") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("8");
                slider_agent_practice.markerPos = 8;
            }
            if (((key_resp_agent_practice.keys === "9") && (key_resp_agent_practice.keys !== Agent.slice((- 1))[0]))) {
                Agent.push("9");
                slider_agent_practice.markerPos = 9;
            }
        } else {
            if ((key_resp_agent_practice.keys === "1")) {
                Agent.push("1");
                slider_agent_practice.markerPos = 1;
            }
            if ((key_resp_agent_practice.keys === "2")) {
                Agent.push("2");
                slider_agent_practice.markerPos = 2;
            }
            if ((key_resp_agent_practice.keys === "3")) {
                Agent.push("3");
                slider_agent_practice.markerPos = 3;
            }
            if ((key_resp_agent_practice.keys === "4")) {
                Agent.push("4");
                slider_agent_practice.markerPos = 4;
            }
            if ((key_resp_agent_practice.keys === "5")) {
                Agent.push("5");
                slider_agent_practice.markerPos = 5;
            }
            if ((key_resp_agent_practice.keys === "6")) {
                Agent.push("6");
                slider_agent_practice.markerPos = 6;
            }
            if ((key_resp_agent_practice.keys === "7")) {
                Agent.push("7");
                slider_agent_practice.markerPos = 7;
            }
            if ((key_resp_agent_practice.keys === "8")) {
                Agent.push("8");
                slider_agent_practice.markerPos = 8;
            }
            if ((key_resp_agent_practice.keys === "9")) {
                Agent.push("9");
                slider_agent_practice.markerPos = 9;
            }
        }
        if (key_resp_agentEnd_practice.keys) {
            if (((key_resp_agentEnd_practice.keys.length > 0) && (! key_resp_agent_practice.keys))) {
                agent_spacelen = key_resp_agentEnd_practice.keys.length;
            }
            if ((key_resp_agentEnd_practice.keys.length > agent_spacelen)) {
                Agent.push("space");
            }
        }
    }
    if ((qOn === 1)) {
        if (Agent) {
            if (((Agent.slice((- 1))[0] === "space") && (Agent.length > 1))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *slider_agent_practice* updates
    if (t >= 0.0 && slider_agent_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_agent_practice.tStart = t;  // (not accounting for frame time here)
      slider_agent_practice.frameNStart = frameN;  // exact frame index
      
      slider_agent_practice.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of agent_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function agent_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'agent_practice'-------
    for (const thisComponent of agent_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_agent_practice.keys', key_resp_agent_practice.keys);
    if (typeof key_resp_agent_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_agent_practice.rt', key_resp_agent_practice.rt);
        }
    
    key_resp_agent_practice.stop();
    psychoJS.experiment.addData('key_resp_agentEnd_practice.keys', key_resp_agentEnd_practice.keys);
    if (typeof key_resp_agentEnd_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_agentEnd_practice.rt', key_resp_agentEnd_practice.rt);
        }
    
    key_resp_agentEnd_practice.stop();
    psychoJS.experiment.addData('Agent', Agent);
    // the Routine "agent_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_feedpractice_allKeys;
var zeroAns;
var cpf1;
var p1f;
var feed_practiceComponents;
function feed_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feed_practice'-------
    t = 0;
    feed_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_feedpractice.keys = undefined;
    key_resp_feedpractice.rt = undefined;
    _key_resp_feedpractice_allKeys = [];
    zeroAns = " ";
    cpf1 = [0, 0, 0];
    p1f = [(- 1), (- 1), (- 1)];
    if ((corrAns !== 5)) {
        cpf1 = colour[order[(corrAns - 1)]];
    }
    if ((corrAns === 0)) {
        cpf1 = [0, 0, 0];
        zeroAns = "This was a trial where you did not control any of the squares. \nLook out for these, and respond with a 0 to the first question.";
    }
    
    // keep track of which components have finished
    feed_practiceComponents = [];
    feed_practiceComponents.push(feedpractice_text);
    feed_practiceComponents.push(key_resp_feedpractice);
    feed_practiceComponents.push(polygon_1Feedback_practice);
    feed_practiceComponents.push(poly1txtFeedback_practice);
    feed_practiceComponents.push(feedbackTxt_zer0);
    
    for (const thisComponent of feed_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feed_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feed_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feed_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedpractice_text* updates
    if (t >= 0.0 && feedpractice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedpractice_text.tStart = t;  // (not accounting for frame time here)
      feedpractice_text.frameNStart = frameN;  // exact frame index
      
      feedpractice_text.setAutoDraw(true);
    }

    
    if (feedpractice_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      feedpractice_text.setColor(new util.Color([1, 1, 1]));
    }
    
    // *key_resp_feedpractice* updates
    if (t >= 0.0 && key_resp_feedpractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_feedpractice.tStart = t;  // (not accounting for frame time here)
      key_resp_feedpractice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_feedpractice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feedpractice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feedpractice.clearEvents(); });
    }

    if (key_resp_feedpractice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_feedpractice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_feedpractice_allKeys = _key_resp_feedpractice_allKeys.concat(theseKeys);
      if (_key_resp_feedpractice_allKeys.length > 0) {
        key_resp_feedpractice.keys = _key_resp_feedpractice_allKeys[_key_resp_feedpractice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_feedpractice.rt = _key_resp_feedpractice_allKeys[_key_resp_feedpractice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon_1Feedback_practice* updates
    if (t >= 0.0 && polygon_1Feedback_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1Feedback_practice.tStart = t;  // (not accounting for frame time here)
      polygon_1Feedback_practice.frameNStart = frameN;  // exact frame index
      
      polygon_1Feedback_practice.setAutoDraw(true);
    }

    
    if (polygon_1Feedback_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1Feedback_practice.setFillColor(new util.Color(cpf1));
    }
    
    // *poly1txtFeedback_practice* updates
    if (t >= 0.0 && poly1txtFeedback_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly1txtFeedback_practice.tStart = t;  // (not accounting for frame time here)
      poly1txtFeedback_practice.frameNStart = frameN;  // exact frame index
      
      poly1txtFeedback_practice.setAutoDraw(true);
    }

    
    if (poly1txtFeedback_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly1txtFeedback_practice.setColor(new util.Color(p1f));
      poly1txtFeedback_practice.setText(corrAns);
    }
    if ((corrAns === 5)) {
        continueRoutine = false;
    }
    
    
    // *feedbackTxt_zer0* updates
    if (t >= 0.0 && feedbackTxt_zer0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackTxt_zer0.tStart = t;  // (not accounting for frame time here)
      feedbackTxt_zer0.frameNStart = frameN;  // exact frame index
      
      feedbackTxt_zer0.setAutoDraw(true);
    }

    
    if (feedbackTxt_zer0.status === PsychoJS.Status.STARTED){ // only update if being drawn
      feedbackTxt_zer0.setColor(new util.Color('white'));
      feedbackTxt_zer0.setText(zeroAns);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feed_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feed_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feed_practice'-------
    for (const thisComponent of feed_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "feed_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _warn_resp_practice_allKeys;
var warning_practiceComponents;
function warning_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'warning_practice'-------
    t = 0;
    warning_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    warn_resp_practice.keys = undefined;
    warn_resp_practice.rt = undefined;
    _warn_resp_practice_allKeys = [];
    // keep track of which components have finished
    warning_practiceComponents = [];
    warning_practiceComponents.push(warn_text_practice);
    warning_practiceComponents.push(warn_resp_practice);
    
    for (const thisComponent of warning_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function warning_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'warning_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = warning_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *warn_text_practice* updates
    if (t >= 0.0 && warn_text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_text_practice.tStart = t;  // (not accounting for frame time here)
      warn_text_practice.frameNStart = frameN;  // exact frame index
      
      warn_text_practice.setAutoDraw(true);
    }

    
    // *warn_resp_practice* updates
    if (t >= 0.0 && warn_resp_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_resp_practice.tStart = t;  // (not accounting for frame time here)
      warn_resp_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { warn_resp_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { warn_resp_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { warn_resp_practice.clearEvents(); });
    }

    if (warn_resp_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = warn_resp_practice.getKeys({keyList: ['space'], waitRelease: false});
      _warn_resp_practice_allKeys = _warn_resp_practice_allKeys.concat(theseKeys);
      if (_warn_resp_practice_allKeys.length > 0) {
        warn_resp_practice.keys = _warn_resp_practice_allKeys[_warn_resp_practice_allKeys.length - 1].name;  // just the last key pressed
        warn_resp_practice.rt = _warn_resp_practice_allKeys[_warn_resp_practice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if (((warn === 0) || (qOn === 0))) {
        continueRoutine = false;
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of warning_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function warning_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'warning_practice'-------
    for (const thisComponent of warning_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('warn_resp_practice.keys', warn_resp_practice.keys);
    if (typeof warn_resp_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('warn_resp_practice.rt', warn_resp_practice.rt);
        routineTimer.reset();
        }
    
    warn_resp_practice.stop();
    // the Routine "warning_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var warnX;
var warnY;
var _warn_mouse_practice_resp_allKeys;
var warning_mouse_practiceComponents;
function warning_mouse_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'warning_mouse_practice'-------
    t = 0;
    warning_mouse_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    warnX  = 0;
    warnY  = 0;
    warn_mouse_practice_resp.keys = undefined;
    warn_mouse_practice_resp.rt = undefined;
    _warn_mouse_practice_resp_allKeys = [];
    // keep track of which components have finished
    warning_mouse_practiceComponents = [];
    warning_mouse_practiceComponents.push(warn_mouse_practice_resp);
    warning_mouse_practiceComponents.push(warn_mouse_practice_text);
    
    for (const thisComponent of warning_mouse_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function warning_mouse_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'warning_mouse_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = warning_mouse_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    function moveAlarm(vec, minPer) {
        var alarm, count;
        count = 0;
        alarm = 0;
        for (var ind = 1, _pj_a = vec.length; (ind < _pj_a); ind += 1) {
            if ((Math.abs((vec[ind] - vec[(ind - 1)]))) === 0) {
                count += 1;
            }
        }
        if (((count / vec.length) > minPer)) {
            alarm = 1;
        }
        return alarm;
    }
    warnX = moveAlarm(mouseX, 0.9);
    warnY = moveAlarm(mouseY, 0.9);
    // Don't show if something has moved in x or y, or you've been warned about something else.
    if ((warnX  === 0) || (warnY === 0) || (warn === 1) || (qOn === 0)) {
        continueRoutine = false;
    }
    
    // *warn_mouse_practice_resp* updates
    if (t >= 0.0 && warn_mouse_practice_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_mouse_practice_resp.tStart = t;  // (not accounting for frame time here)
      warn_mouse_practice_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { warn_mouse_practice_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { warn_mouse_practice_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { warn_mouse_practice_resp.clearEvents(); });
    }

    if (warn_mouse_practice_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = warn_mouse_practice_resp.getKeys({keyList: ['space'], waitRelease: false});
      _warn_mouse_practice_resp_allKeys = _warn_mouse_practice_resp_allKeys.concat(theseKeys);
      if (_warn_mouse_practice_resp_allKeys.length > 0) {
        warn_mouse_practice_resp.keys = _warn_mouse_practice_resp_allKeys[_warn_mouse_practice_resp_allKeys.length - 1].name;  // just the last key pressed
        warn_mouse_practice_resp.rt = _warn_mouse_practice_resp_allKeys[_warn_mouse_practice_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *warn_mouse_practice_text* updates
    if (t >= 0.0 && warn_mouse_practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_mouse_practice_text.tStart = t;  // (not accounting for frame time here)
      warn_mouse_practice_text.frameNStart = frameN;  // exact frame index
      
      warn_mouse_practice_text.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of warning_mouse_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function warning_mouse_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'warning_mouse_practice'-------
    for (const thisComponent of warning_mouse_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('warnX',warnX);
    psychoJS.experiment.addData('warnY',warnY);
    // the Routine "warning_mouse_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_trial_instruct_allKeys;
var trial_instructComponents;
function trial_instructRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_instruct'-------
    t = 0;
    trial_instructClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_trial_instruct.keys = undefined;
    key_resp_trial_instruct.rt = undefined;
    _key_resp_trial_instruct_allKeys = [];
    // keep track of which components have finished
    trial_instructComponents = [];
    trial_instructComponents.push(instructTrial_text);
    trial_instructComponents.push(key_resp_trial_instruct);
    
    for (const thisComponent of trial_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trial_instructRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_instruct'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructTrial_text* updates
    if (t >= 0.0 && instructTrial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructTrial_text.tStart = t;  // (not accounting for frame time here)
      instructTrial_text.frameNStart = frameN;  // exact frame index
      
      instructTrial_text.setAutoDraw(true);
    }

    
    // *key_resp_trial_instruct* updates
    if (t >= 0.0 && key_resp_trial_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_trial_instruct.tStart = t;  // (not accounting for frame time here)
      key_resp_trial_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_trial_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trial_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trial_instruct.clearEvents(); });
    }

    if (key_resp_trial_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_trial_instruct.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_trial_instruct_allKeys = _key_resp_trial_instruct_allKeys.concat(theseKeys);
      if (_key_resp_trial_instruct_allKeys.length > 0) {
        key_resp_trial_instruct.keys = _key_resp_trial_instruct_allKeys[_key_resp_trial_instruct_allKeys.length - 1].name;  // just the last key pressed
        key_resp_trial_instruct.rt = _key_resp_trial_instruct_allKeys[_key_resp_trial_instruct_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_instructRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_instruct'-------
    for (const thisComponent of trial_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixComponents;
function fixRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fix'-------
    t = 0;
    fixClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixComponents = [];
    fixComponents.push(fixtext);
    
    for (const thisComponent of fixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function fixRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fix'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixtext* updates
    if (t >= 0.0 && fixtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixtext.tStart = t;  // (not accounting for frame time here)
      fixtext.frameNStart = frameN;  // exact frame index
      
      fixtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixtext.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fix'-------
    for (const thisComponent of fixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_trialEnd_allKeys;
var _key_resp_side_allKeys;
var _key_resp_model_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_trialEnd.keys = undefined;
    key_resp_trialEnd.rt = undefined;
    _key_resp_trialEnd_allKeys = [];
    function normal(mean, sigma,nsamples) {
        var xList = []
        for (var i = 0; i < nsamples; i++) { 
            var u = Math.random()*0.682;
            var x = ((u % 1e-8 > 5e-9 ? 1 : -1) * (Math.sqrt(-Math.log(Math.max(1e-9, u)))-0.618))*1.618 * sigma + mean;
        xList.push(parseFloat(x.toFixed(5)));
        }
        return xList
    }
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array
    }
    function randPos(xm, xsd, ym, ysd) {
        // Normally distribute within box limit
        var polys = 4;
        while (1) {
            var countX = 0;
            var countY = 0;
            var sposListX = normal(xm, xsd, polys);
            var sposListY = normal(ym, ysd, polys);
            var sqrsize = 0.35;
            for (var itemX, _pj_c = 0, _pj_a = sposListX, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemX = _pj_a[_pj_c];
                if (((itemX < (xm+sqrsize)) && (itemX > (xm-sqrsize)))) {
                    countX += 1;
                }
            }
            for (var itemY, _pj_c = 0, _pj_a = sposListY, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemY = _pj_a[_pj_c];
                if (((itemY < (ym+sqrsize)) && (itemY > (ym-sqrsize)))) {
                    countY += 1;
                }
            }
            if (((countX === polys) && (countY === polys))) {
                break;
            }
        }
        return [sposListX, sposListY];
    }
    // Rezero assert tracking variables
    logRow = 0; //#iterated through within trial
    sloth = [10000,10000,10000,10000];
    bgc = [0,0,0];
    warn = 1;
    mouseX = [];
    mouseY = [];
    NewX = [];
    NewY= [];
    track_sloth = [];
    track_wrap = []
    //Rezero position tracking variables
    poly1x = [];
    poly1y = [];
    poly2x = [];
    poly2y = [];
    poly3x = [];
    poly3y = [];
    poly4x = [];
    poly4y = [];
    // Zero out object position variables
    spos1 = [];
    spos2 = [];
    spos3 = [];
    spos4 = [];
    // Track presses
    track_Env_key = [];
    track_Env_T = [];
    track_Env_Frame = [];
    track_Model_key = [];
    track_Model_T = [];
    track_Model_Frame = [];
    track_logrowT = [];
    // Start mouse position
    fmouse = mouse.getPos();
    mouseX.push(fmouse[0]);
    mouseY.push(fmouse[1]);
    // Randomise X Y object positions
    sposListX = [];
    sposListY = [];
    [sposListX, sposListY] = randPos(0, 0.2, 0, 0.2);
    // Assign positions
    spos1 = [sposListX[0],sposListY[0]];
    spos2 = [sposListX[1],sposListY[1]];
    spos3 = [sposListX[2],sposListY[2]];
    spos4 = [sposListX[3],sposListY[3]];
    // Remove mouse
    //document.body.style.cursor='none';
    document.body.style.cursor='crosshair';
    // Reassert Fullscreen
    document.documentElement.requestFullscreen();
    // Evaluation creates lists from strings
    varias = [eval(S1_E1_Var), eval(S2_E1_Var), eval(S3_E1_Var), eval(S4_E1_Var), eval(S1_E2_Var), eval(S2_E2_Var), eval(S3_E2_Var), eval(S4_E2_Var)];
    offs = [eval(S1_OffsetDir), eval(S2_OffsetDir), eval(S3_OffsetDir), eval(S4_OffsetDir)];
    //clear any lingering events
    key_resp_side.clearEvents();
    key_resp_model.clearEvents();
    // Shuffle order per trial
    order = shuffle([0,1,2,3]);
    //shuffle side
    side = shuffle([1,2]);
    c1 = colours[order[0]];
    c2 = colours[order[1]];
    c3 = colours[order[2]];
    c4 = colours[order[3]];
    //remove unimportant var storage
    condition._trialList[TrialCount].S1_E1_Var = [];
    condition._trialList[TrialCount].S2_E1_Var = [];
    condition._trialList[TrialCount].S3_E1_Var = [];
    condition._trialList[TrialCount].S4_E1_Var = [];
    condition._trialList[TrialCount].S1_E2_Var = [];
    condition._trialList[TrialCount].S2_E2_Var = [];
    condition._trialList[TrialCount].S3_E2_Var = [];
    condition._trialList[TrialCount].S4_E2_Var = [];
    condition._trialList[TrialCount].S1_OffsetDir = [];
    condition._trialList[TrialCount].S2_OffsetDir = [];
    condition._trialList[TrialCount].S3_OffsetDir = [];
    condition._trialList[TrialCount].S4_OffsetDir = [];
     TrialCount += 1;
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    key_resp_side.keys = undefined;
    key_resp_side.rt = undefined;
    _key_resp_side_allKeys = [];
    key_resp_model.keys = undefined;
    key_resp_model.rt = undefined;
    _key_resp_model_allKeys = [];
    polygon_1.setFillColor(new util.Color(c1));
    polygon_2.setFillColor(new util.Color(c2));
    polygon_3.setFillColor(new util.Color(c3));
    polygon_4.setFillColor(new util.Color(c4));
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp_trialEnd);
    trialComponents.push(background);
    trialComponents.push(foreground);
    trialComponents.push(mouse);
    trialComponents.push(key_resp_side);
    trialComponents.push(key_resp_model);
    trialComponents.push(polygon_1);
    trialComponents.push(polygon_1txt);
    trialComponents.push(polygon_2);
    trialComponents.push(polygon_2txt);
    trialComponents.push(polygon_3);
    trialComponents.push(polygon_3txt);
    trialComponents.push(polygon_4);
    trialComponents.push(polygon_4txt);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_trialEnd* updates
    if (t >= 0.0 && key_resp_trialEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_trialEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_trialEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_trialEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trialEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trialEnd.clearEvents(); });
    }

    if (key_resp_trialEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_trialEnd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_trialEnd_allKeys = _key_resp_trialEnd_allKeys.concat(theseKeys);
      if (_key_resp_trialEnd_allKeys.length > 0) {
        key_resp_trialEnd.keys = _key_resp_trialEnd_allKeys[_key_resp_trialEnd_allKeys.length - 1].name;  // just the last key pressed
        key_resp_trialEnd.rt = _key_resp_trialEnd_allKeys[_key_resp_trialEnd_allKeys.length - 1].rt;
      }
    }
    
    
    // *background* updates
    if (t >= 0.0 && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }

    
    if (background.status === PsychoJS.Status.STARTED){ // only update if being drawn
      background.setFillColor(new util.Color(bgc));
    }
    
    // *foreground* updates
    if (t >= 0.0 && foreground.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      foreground.tStart = t;  // (not accounting for frame time here)
      foreground.frameNStart = frameN;  // exact frame index
      
      foreground.setAutoDraw(true);
    }

    
    if (foreground.status === PsychoJS.Status.STARTED){ // only update if being drawn
      foreground.setFillColor(new util.Color([0, 0, 0]));
    }
    function degrees (angle) {
      return angle * (180 / Math.PI);
    }
    function radians(degrees) {
        return degrees * Math.PI / 180;
    }
    function normal(mean, sigma,nsamples) {
        var xList = []
        for (var i = 0; i < nsamples; i++) { 
            var u = Math.random()*0.682;
            var x = ((u % 1e-8 > 5e-9 ? 1 : -1) * (Math.sqrt(-Math.log(Math.max(1e-9, u)))-0.618))*1.618 * sigma + mean;
        xList.push(parseFloat(x.toFixed(5)));
        }
        return xList
    }
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array
    }
    function randPos(xm, xsd, ym, ysd) {
        // Normally distribute within box limit
        var polys = 4;
        while (1) {
            var countX = 0;
            var countY = 0;
            var sposListX = normal(xm, xsd, polys);
            var sposListY = normal(ym, ysd, polys);
            var sqrsize = 0.35;
            for (var itemX, _pj_c = 0, _pj_a = sposListX, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemX = _pj_a[_pj_c];
                if (((itemX < (xm+sqrsize)) && (itemX > (xm-sqrsize)))) {
                    countX += 1;
                }
            }
            for (var itemY, _pj_c = 0, _pj_a = sposListY, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                itemY = _pj_a[_pj_c];
                if (((itemY < (ym+sqrsize)) && (itemY > (ym-sqrsize)))) {
                    countY += 1;
                }
            }
            if (((countX === polys) && (countY === polys))) {
                break;
            }
        }
        return [sposListX, sposListY];
    }
    function distAng(side,sloth, preMouse, objPrev, currVar, dirAngle, logRow) {
        var a, currX, currY, prevMX, prevMY, deltaAngle, deltaDist, deltaX, deltaY, SpatOffX, SpatOffY, nsqr, NewX, NewY, prevX, prevY, winX, winY, wrap;
        // Add an on/off var that essentially prevents movement until participant response
        [prevX, prevY] = objPrev;
        [currX, currY] = mouse.getPos();
        currX = (parseFloat(currX.toFixed(5)));
        currY = (parseFloat(currY.toFixed(5)));
        prevMX = preMouse[0];
        prevMY = preMouse[1];
        winX = 0.75;
        winY = 0.35;
        nsqr = 4;
        // Trig for mouse
        deltaX = ((currX) - (parseFloat(prevMX.toFixed(5))));
        deltaY = ((currY) - (parseFloat(prevMY.toFixed(5))));
        if (((deltaX === prevMX) && (deltaY === prevMY))) {
            deltaAngle = NaN;
        } else if (((deltaX >= 0) && (deltaY >= 0))) {
            deltaAngle = Math.abs(degrees(Math.atan((deltaY / deltaX))));
        } else if (((deltaX <= 0) && (deltaY >= 0))) {
            deltaAngle = (180 - Math.abs(degrees(Math.atan((deltaY / deltaX)))));
        } else if (((deltaX <= 0) && (deltaY <= 0))) {
            deltaAngle = (180 + Math.abs(degrees(Math.atan((deltaY / deltaX)))));
        } else if (((deltaX >= 0) && (deltaY <= 0))) {
            deltaAngle = (360 - Math.abs(degrees(Math.atan((deltaY / deltaX)))));
        }
        deltaDist = (Math.sqrt((Math.pow(deltaX, 2) + Math.pow(deltaY, 2))));
        // loop for all variables
        a = new Array(nsqr).fill(NaN);
        NewX = new Array(nsqr).fill(0);
        NewY = new Array(nsqr).fill(0);
        wrap = new Array(nsqr).fill(0);
        //Move or not
        if (((deltaX === 0) && (deltaY === 0))) {
            NewX = prevX;
            NewY = prevY;
            SpatOffX = new Array(nsqr).fill(0);
            SpatOffY = new Array(nsqr).fill(0);
            wrap[k] = 0;
        // Mouse did move
        } else {
            SpatOffX = new Array(nsqr).fill(0);
            SpatOffY = new Array(nsqr).fill(0);
            // Loop for each square
            for (var k = 0, _pj_a = nsqr; (k < _pj_a); k += 1) {
                if ((side[0] === 1)) { //x right then env = 2
                    if ((prevX[k] > 0)) {
                       var j = k+4; //#use the second or first environment
                    } else {
                        var j = k;
                    }
                } else if ((side[0] === 2)) { //x left then env = 2
                    if ((prevX[k] < 0)) {
                       var j = k+4; //#use the second or first environment
                    } else {
                        var j = k;
                    }
                }
                // Calculate change to square positions
                a[k] = ((deltaAngle - dirAngle[k]) + currVar[j]);
                if (((((90 >= a[k]) && (a[k] >= 0)) || (((- 270) >= a[k]) && (a[k] >= (- 360)))) || ((450 >= a[k]) && (a[k] >= 360)))) {
                    SpatOffX[k] = ((deltaDist/sloth[k]) * degrees(Math.cos(radians(a[k]))));
                    SpatOffY[k] = ((deltaDist/sloth[k]) * degrees(Math.sin(radians(a[k]))));
                } else if (((((180 >= a[k]) && (a[k] >= 90)) || (((- 180) >= a[k]) && (a[k] >= (- 270)))) || ((540 >= a[k]) && (a[k] >= 450)))) {
                    SpatOffX[k] = ((- (deltaDist/sloth[k])) * degrees(Math.cos(radians(180 - a[k]))));
                    SpatOffY[k] = ((deltaDist/sloth[k]) * degrees(Math.sin(radians(180 - a[k]))));
                } else if (((((270 >= a[k]) && (a[k] >= 180)) || (((- 90) >= a[k]) && (a[k] >= (- 180)))) || ((630 >= a[k]) && (a[k] >= 540)))) {
                    SpatOffX[k] = ((- (deltaDist/sloth[k])) * degrees(Math.cos(radians(180 + a[k]))));
                    SpatOffY[k] = ((- (deltaDist/sloth[k])) * degrees(Math.sin(radians(180 + a[k]))));
                } else if (((((360 >= a[k]) && (a[k] >= 270)) || ((0 >= a[k]) && (a[k] >= (- 90)))) || ((720 >= a[k]) && (a[k] >= 630)))) {
                    SpatOffX[k] = ((deltaDist/sloth[k]) * degrees(Math.cos(radians(360 - a[k]))));
                    SpatOffY[k] = ((- (deltaDist/sloth[k])) * degrees(Math.sin(radians(360 - a[k]))));
                } else {
                    console.log("ERROR - calculated angle outside specified quadrants");
                }
                // Define new locations
                NewX[k] = (parseFloat((prevX[k] + (SpatOffX[k])).toFixed(5)));
                NewY[k] = (parseFloat((prevY[k] + (SpatOffY[k])).toFixed(5)));
                wrap[k] = 0;
                // Wrap if new locations are off the screen
                if ((NewX[k] >= winX)) {
                    NewX[k] = (NewX[k]-(winX*2));
                    wrap[k] = 1;
                } else if ((NewX[k] <= -winX)) {
                    NewX[k] = (NewX[k]+(winX*2));
                    wrap[k] = 3;
                }
                if ((NewY[k]>= winY)) {
                    NewY[k] = (NewY[k]-(winY*2));
                    wrap[k] = 2;
                } else if ((NewY[k] <= -winY)) {
                    NewY[k] = (NewY[k]+(winY*2));
                    wrap[k] = 4;
                }
            }
        }
        logRow = (logRow + 1);
        return [NewX, NewY, currX, currY, logRow, sloth, wrap];
    }
    //
    t = parseFloat(t.toFixed(4));
    // key state down
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Digit1' ) {
            bgc = colours[order[0]];
            sloth = [5,2.5,2.5,2.5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '1')) {
                    track_Model_key.push('1');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('1');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        } else if (event.code === 'Digit2' ) {
            bgc = colours[order[1]];
            sloth = [2.5,5,2.5,2.5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '2')) {
                    track_Model_key.push('2');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('2');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        } else if (event.code === 'Digit3' ) {
            bgc = colours[order[2]];
            sloth = [2.5,2.5,5,2.5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '3')) {
                    track_Model_key.push('3');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('3');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        } else if (event.code === 'Digit4' ) {
            bgc = colours[order[3]];
            sloth = [2.5,2.5,2.5,5];
            // Only assign when there is a choice
            if (track_Model_key) {
                if ((track_Model_key.slice((- 1))[0] !== '4')) {
                    track_Model_key.push('4');
                    track_Model_T.push(t);
                    track_Model_Frame.push(frameN);
                } 
            } else {
                    track_Model_key.push('4');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
            }
        }
    });
    // key state up
    document.addEventListener('keyup', function(event) {
        if (((event.code === 'Digit1' ) || (event.code === 'Digit2' ) || (event.code === 'Digit3' ) || (event.code === 'Digit4' ))) {
             // Only assign when there is key lift
             if (track_Model_key) {
                if (track_Model_key.length === 1) { 
                    var sb1 = (track_Model_key.slice(- 1)[0]);
                    if ((sb1.includes('None')) === false) {
                        track_Model_key.push('None'+ event.code);
                        track_Model_T.push(t);
                        track_Model_Frame.push(frameN);
                        bgc = [0,0,0];
                        sloth = [10000,10000,10000,10000];
                    } 
                } else if (track_Model_key.length > 1) { 
                    var sb1 = (track_Model_key.slice(- 1)[0]);
                    var sb2 = (track_Model_key.slice(- 2)[0]);
                    if (((sb1.includes('None')) === false) && ((sb2.includes('None')) === false)) {
                        track_Model_key.push('None'+ event.code);
                        track_Model_T.push(t);
                        track_Model_Frame.push(frameN);
                        //swtich back to the previous colour
                        if (sb2 === '1') {
                            bgc = colours[order[0]];
                            sloth = [5,2.5,2.5,2.5];
                            track_Model_key.push('1');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        } else if (sb2 === '2') {
                            bgc = colours[order[1]];
                            sloth = [2.5,5,2.5,2.5]; 
                            track_Model_key.push('2');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        } else if (sb2 === '3'){
                            bgc = colours[order[2]];
                            sloth = [2.5,2.5,5,2.5];
                            track_Model_key.push('3');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        } else if (sb2 === '4') {
                            bgc = colours[order[3]];
                            sloth = [2.5,2.5,2.5,5];
                            track_Model_key.push('4');
                            track_Model_T.push(t);
                            track_Model_Frame.push(frameN);
                        }
                    } else if (((sb1.includes('None')) === false) && ((sb2.includes('None')) === true) && event.code.includes(sb1)) {
                        track_Model_key.push('None'+ event.code);
                        track_Model_T.push(t);
                        track_Model_Frame.push(frameN);
                        bgc = [0,0,0];
                        sloth = [10000,10000,10000,10000];
                    }
                }
            } else {
                    track_Model_key.push('None');
                    track_Model_T.push(t); 
                    track_Model_Frame.push(frameN);
                    bgc = [0,0,0];
                    sloth = [10000,10000,10000,10000];
            }
        }
    });
    //end trial on log row
    if ((logRow >= (450-1)) || t >= 15.0) {
        continueRoutine = false; // end loop
    }
    //calls
    if ((frameN % 2) === 0) {
        var preMouse = [mouseX, mouseY];
        [NewX, NewY, currX, currY,logRow, sloth, wrap] = distAng(side,sloth,[preMouse[0][logRow],preMouse[1][logRow]],[[spos1[0],spos2[0],spos3[0],spos4[0]],[spos1[1],spos2[1],spos3[1],spos4[1]]], [varias[0][logRow], varias[1][logRow], varias[2][logRow], varias[3][logRow], varias[4][logRow], varias[5][logRow], varias[6][logRow], varias[7][logRow]],[offs[0][logRow],offs[1][logRow],offs[2][logRow],offs[3][logRow]], logRow);
        //put mouse variables in trialwise tracker
        mouseX.push(currX);
        mouseY.push(currY);
        //#assignment
        spos1 = [NewX[0], NewY[0]];
        spos2 = [NewX[1], NewY[1]];
        spos3 = [NewX[2], NewY[2]];
        spos4 = [NewX[3], NewY[3]];
    }
    polys = 4;
    //if position is reset by ends
    let theseKeys2 = key_resp_side.getKeys({keyList: ['q', 'r'], waitRelease: false});
    if ((theseKeys2.length) > 0) {
        if ((theseKeys2[theseKeys2.length-1].name === "q")) {
            // Normally distribute within box limit
            [NewX, NewY] = randPos(-0.4, 0.2, 0, 0.2);
            spos1 = [NewX[0], NewY[0]];
            spos2 = [NewX[1], NewY[1]];
            spos3 = [NewX[2], NewY[2]];
            spos4 = [NewX[3], NewY[3]];
            track_Env_key.push('q');
            track_Env_T.push(t);
            track_Env_Frame.push(frameN);
        }    
        if ((theseKeys2[theseKeys2.length-1].name === "r")) {
            // Normally distribute within box limit
            [NewX, NewY] = randPos(0.4, 0.2, 0, 0.2);
            spos1 = [NewX[0], NewY[0]];
            spos2 = [NewX[1], NewY[1]];
            spos3 = [NewX[2], NewY[2]];
            spos4 = [NewX[3], NewY[3]];
            track_Env_key.push('r');
            track_Env_T.push(t);
            track_Env_Frame.push(frameN);
        } 
    }
    //put new location in variables
    if ((frameN % 2) === 0) {
        poly1x.push([NewX[0]]);
        poly1y.push([NewY[0]]);
        poly2x.push([NewX[1]]);
        poly2y.push([NewY[1]]);
        poly3x.push([NewX[2]]);
        poly3y.push([NewY[2]]);
        poly4x.push([NewX[3]]);
        poly4y.push([NewY[3]]);
        // additional tracking variables
        track_sloth.push(sloth);
        track_wrap.push(wrap);
        track_logrowT.push(t);
     }
    // warning if not key press
    if ((track_Model_key.length) > 0) {
        warn = 0;
    } else {
        warn = 1; //default to displaying warning
    }
    
    // *key_resp_side* updates
    if (t >= 0.0 && key_resp_side.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_side.tStart = t;  // (not accounting for frame time here)
      key_resp_side.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_side.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_side.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_side.clearEvents(); });
    }

    if (key_resp_side.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_side.getKeys({keyList: ['q', 'r'], waitRelease: false});
      _key_resp_side_allKeys = _key_resp_side_allKeys.concat(theseKeys);
      if (_key_resp_side_allKeys.length > 0) {
        key_resp_side.keys = _key_resp_side_allKeys.map((key) => key.name);  // storing all keys
        key_resp_side.rt = _key_resp_side_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *key_resp_model* updates
    if (t >= 0.0 && key_resp_model.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_model.tStart = t;  // (not accounting for frame time here)
      key_resp_model.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_model.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_model.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_model.clearEvents(); });
    }

    if (key_resp_model.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_model.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_model_allKeys = _key_resp_model_allKeys.concat(theseKeys);
      if (_key_resp_model_allKeys.length > 0) {
        key_resp_model.keys = _key_resp_model_allKeys[_key_resp_model_allKeys.length - 1].name;  // just the last key pressed
        key_resp_model.rt = _key_resp_model_allKeys[_key_resp_model_allKeys.length - 1].rt;
      }
    }
    
    
    // *polygon_1* updates
    if (t >= 0.0 && polygon_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1.tStart = t;  // (not accounting for frame time here)
      polygon_1.frameNStart = frameN;  // exact frame index
      
      polygon_1.setAutoDraw(true);
    }

    
    if (polygon_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1.setPos(spos1);
    }
    
    // *polygon_1txt* updates
    if (t >= 0.0 && polygon_1txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1txt.tStart = t;  // (not accounting for frame time here)
      polygon_1txt.frameNStart = frameN;  // exact frame index
      
      polygon_1txt.setAutoDraw(true);
    }

    
    if (polygon_1txt.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1txt.setPos(spos1);
    }
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    
    if (polygon_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_2.setPos(spos2);
    }
    
    // *polygon_2txt* updates
    if (t >= 0.0 && polygon_2txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2txt.tStart = t;  // (not accounting for frame time here)
      polygon_2txt.frameNStart = frameN;  // exact frame index
      
      polygon_2txt.setAutoDraw(true);
    }

    
    if (polygon_2txt.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_2txt.setPos(spos2);
    }
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }

    
    if (polygon_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_3.setPos(spos3);
    }
    
    // *polygon_3txt* updates
    if (t >= 0.0 && polygon_3txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3txt.tStart = t;  // (not accounting for frame time here)
      polygon_3txt.frameNStart = frameN;  // exact frame index
      
      polygon_3txt.setAutoDraw(true);
    }

    
    if (polygon_3txt.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_3txt.setPos(spos3);
    }
    
    // *polygon_4* updates
    if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }

    
    if (polygon_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_4.setPos(spos4);
    }
    
    // *polygon_4txt* updates
    if (t >= 0.0 && polygon_4txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4txt.tStart = t;  // (not accounting for frame time here)
      polygon_4txt.frameNStart = frameN;  // exact frame index
      
      polygon_4txt.setAutoDraw(true);
    }

    
    if (polygon_4txt.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_4txt.setPos(spos4);
    }
    psychoJS.window._fullRefresh();
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('poly1x',poly1x);
    psychoJS.experiment.addData('poly1y',poly1y);
    psychoJS.experiment.addData('poly2x',poly2x);
    psychoJS.experiment.addData('poly2y',poly2y);
    psychoJS.experiment.addData('poly3x',poly3x);
    psychoJS.experiment.addData('poly3y',poly3y);
    psychoJS.experiment.addData('poly4x',poly4x);
    psychoJS.experiment.addData('poly4y',poly4y);
    //get screen dim on every trial
    winDims = psychoJS.window.size;
    psychoJS.experiment.addData('winDims',winDims);
    psychoJS.experiment.addData('side',side[0]);
    psychoJS.experiment.addData('order',order);
    psychoJS.experiment.addData('mouseX',mouseX);
    psychoJS.experiment.addData('mouseY',mouseY);
    //
    psychoJS.experiment.addData('track_sloth',track_sloth);
    psychoJS.experiment.addData('track_wrap',track_wrap);
    psychoJS.experiment.addData('warn',warn);
    //
    psychoJS.experiment.addData('track_Env_key',track_Env_key);
    psychoJS.experiment.addData('track_Env_T',track_Env_T); 
    psychoJS.experiment.addData('track_Env_Frame',track_Env_Frame);
    //
    psychoJS.experiment.addData('track_Model_key', track_Model_key);
    psychoJS.experiment.addData('track_Model_T', track_Model_T); 
    psychoJS.experiment.addData('track_Model_Frame', track_Model_Frame);
    psychoJS.experiment.addData('track_logrowT',track_logrowT);
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_side.keys', key_resp_side.keys);
    if (typeof key_resp_side.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_side.rt', key_resp_side.rt);
        }
    
    key_resp_side.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_which_allKeys;
var _key_resp_whichEnd_allKeys;
var which_objComponents;
function which_objRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'which_obj'-------
    t = 0;
    which_objClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_which.keys = undefined;
    key_resp_which.rt = undefined;
    _key_resp_which_allKeys = [];
    key_resp_whichEnd.keys = undefined;
    key_resp_whichEnd.rt = undefined;
    _key_resp_whichEnd_allKeys = [];
    posSelect = [0, 0.1];
    opSelect = 0;
    key_resp_which.clearEvents();
    whichKey = [];
    spacelen_which = 0;
    
    // keep track of which components have finished
    which_objComponents = [];
    which_objComponents.push(key_resp_which);
    which_objComponents.push(key_resp_whichEnd);
    which_objComponents.push(polygon_highlight);
    which_objComponents.push(polygon_background_which);
    which_objComponents.push(which_text);
    which_objComponents.push(polygon_1Choose);
    which_objComponents.push(poly1txtChoose);
    which_objComponents.push(polygon_2Choose);
    which_objComponents.push(poly2txtChoose);
    which_objComponents.push(polygon_3Choose);
    which_objComponents.push(poly3txtChoose);
    which_objComponents.push(polygon_4Choose);
    which_objComponents.push(poly4txtChoose);
    which_objComponents.push(polygon_ZChoose);
    which_objComponents.push(polyZtxtChoose);
    
    for (const thisComponent of which_objComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function which_objRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'which_obj'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = which_objClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_which* updates
    if (t >= 0.0 && key_resp_which.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_which.tStart = t;  // (not accounting for frame time here)
      key_resp_which.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_which.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_which.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_which.clearEvents(); });
    }

    if (key_resp_which.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_which.getKeys({keyList: ['0', '1', '2', '3', '4'], waitRelease: false});
      _key_resp_which_allKeys = _key_resp_which_allKeys.concat(theseKeys);
      if (_key_resp_which_allKeys.length > 0) {
        key_resp_which.keys = _key_resp_which_allKeys[_key_resp_which_allKeys.length - 1].name;  // just the last key pressed
        key_resp_which.rt = _key_resp_which_allKeys[_key_resp_which_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_which.keys == corrAns) {
            key_resp_which.corr = 1;
        } else {
            key_resp_which.corr = 0;
        }
      }
    }
    
    
    // *key_resp_whichEnd* updates
    if (t >= 0.0 && key_resp_whichEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_whichEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_whichEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_whichEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_whichEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_whichEnd.clearEvents(); });
    }

    if (key_resp_whichEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_whichEnd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_whichEnd_allKeys = _key_resp_whichEnd_allKeys.concat(theseKeys);
      if (_key_resp_whichEnd_allKeys.length > 0) {
        key_resp_whichEnd.keys = _key_resp_whichEnd_allKeys.map((key) => key.name);  // storing all keys
        key_resp_whichEnd.rt = _key_resp_whichEnd_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *polygon_highlight* updates
    if (t >= 0.0 && polygon_highlight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_highlight.tStart = t;  // (not accounting for frame time here)
      polygon_highlight.frameNStart = frameN;  // exact frame index
      
      polygon_highlight.setAutoDraw(true);
    }

    
    if (polygon_highlight.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_highlight.setOpacity(opSelect);
      polygon_highlight.setPos(posSelect);
    }
    
    // *polygon_background_which* updates
    if (t >= 0.0 && polygon_background_which.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_background_which.tStart = t;  // (not accounting for frame time here)
      polygon_background_which.frameNStart = frameN;  // exact frame index
      
      polygon_background_which.setAutoDraw(true);
    }

    
    if (polygon_background_which.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_background_which.setFillColor(new util.Color([0, 0, 0]));
      polygon_background_which.setLineColor(new util.Color([0, 0, 0]));
    }
    if ((whichKey.length > 0)) {
        if (((key_resp_which.keys === "1") && (key_resp_which.keys !== whichKey.slice((- 1))[0]))) {
            opSelect = 1;
            posSelect = poly1txtChoose.pos;
            whichKey.push("1");
        }
        if (((key_resp_which.keys === "2") && (key_resp_which.keys !== whichKey.slice((- 1))[0]))) {
            opSelect = 1;
            posSelect = poly2txtChoose.pos;
            whichKey.push("2");
        }
        if (((key_resp_which.keys === "3") && (key_resp_which.keys !== whichKey.slice((- 1))[0]))) {
            opSelect = 1;
            posSelect = poly3txtChoose.pos;
            whichKey.push("3");
        }
        if (((key_resp_which.keys === "4") && (key_resp_which.keys !== whichKey.slice((- 1))[0]))) {
            opSelect = 1;
            posSelect = poly4txtChoose.pos;
            whichKey.push("4");
        }
        if (((key_resp_which.keys === "0") && (key_resp_which.keys !== whichKey.slice((- 1))[0]))) {
            opSelect = 1;
            posSelect = polyZtxtChoose.pos;
            whichKey.push("0");
        }
    } else {
        if ((key_resp_which.keys === "1")) {
            opSelect = 1;
            posSelect = poly1txtChoose.pos;
            whichKey.push("1");
        }
        if ((key_resp_which.keys === "2")) {
            opSelect = 1;
            posSelect = poly2txtChoose.pos;
            whichKey.push("2");
        }
        if ((key_resp_which.keys === "3")) {
            opSelect = 1;
            posSelect = poly3txtChoose.pos;
            whichKey.push("3");
        }
        if ((key_resp_which.keys === "4")) {
            opSelect = 1;
            posSelect = poly4txtChoose.pos;
            whichKey.push("4");
        }
        if ((key_resp_which.keys === "0")) {
            opSelect = 1;
            posSelect = polyZtxtChoose.pos;
            whichKey.push("0");
        }
    }
    if (key_resp_whichEnd.keys) {
        if (((key_resp_whichEnd.keys.length > 0) && (! key_resp_which.keys))) {
            spacelen_which = key_resp_whichEnd.keys.length;
        }
        if ((key_resp_whichEnd.keys.length > spacelen_which)) {
            whichKey.push("space");
        }
    }
    if (whichKey) {
        if (((whichKey.slice((- 1))[0] === "space") && (whichKey.length > 1))) {
            continueRoutine = false;
        }
    }
    
    
    // *which_text* updates
    if (t >= 0.0 && which_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      which_text.tStart = t;  // (not accounting for frame time here)
      which_text.frameNStart = frameN;  // exact frame index
      
      which_text.setAutoDraw(true);
    }

    
    if (which_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      which_text.setColor(new util.Color('white'));
    }
    
    // *polygon_1Choose* updates
    if (t >= 0.0 && polygon_1Choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1Choose.tStart = t;  // (not accounting for frame time here)
      polygon_1Choose.frameNStart = frameN;  // exact frame index
      
      polygon_1Choose.setAutoDraw(true);
    }

    
    if (polygon_1Choose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_1Choose.setOpacity(1);
      polygon_1Choose.setPos([(- 0.12), (- 0.05)]);
      polygon_1Choose.setFillColor(new util.Color(c1));
    }
    
    // *poly1txtChoose* updates
    if (t >= 0.0 && poly1txtChoose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly1txtChoose.tStart = t;  // (not accounting for frame time here)
      poly1txtChoose.frameNStart = frameN;  // exact frame index
      
      poly1txtChoose.setAutoDraw(true);
    }

    
    if (poly1txtChoose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly1txtChoose.setColor(new util.Color('black'));
    }
    
    // *polygon_2Choose* updates
    if (t >= 0.0 && polygon_2Choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2Choose.tStart = t;  // (not accounting for frame time here)
      polygon_2Choose.frameNStart = frameN;  // exact frame index
      
      polygon_2Choose.setAutoDraw(true);
    }

    
    if (polygon_2Choose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_2Choose.setOpacity(1);
      polygon_2Choose.setPos([0.12, (- 0.05)]);
      polygon_2Choose.setFillColor(new util.Color(c2));
    }
    
    // *poly2txtChoose* updates
    if (t >= 0.0 && poly2txtChoose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly2txtChoose.tStart = t;  // (not accounting for frame time here)
      poly2txtChoose.frameNStart = frameN;  // exact frame index
      
      poly2txtChoose.setAutoDraw(true);
    }

    
    if (poly2txtChoose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly2txtChoose.setColor(new util.Color('black'));
    }
    
    // *polygon_3Choose* updates
    if (t >= 0.0 && polygon_3Choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3Choose.tStart = t;  // (not accounting for frame time here)
      polygon_3Choose.frameNStart = frameN;  // exact frame index
      
      polygon_3Choose.setAutoDraw(true);
    }

    
    if (polygon_3Choose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_3Choose.setOpacity(1);
      polygon_3Choose.setPos([(- 0.12), (- 0.29)]);
      polygon_3Choose.setFillColor(new util.Color(c3));
    }
    
    // *poly3txtChoose* updates
    if (t >= 0.0 && poly3txtChoose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly3txtChoose.tStart = t;  // (not accounting for frame time here)
      poly3txtChoose.frameNStart = frameN;  // exact frame index
      
      poly3txtChoose.setAutoDraw(true);
    }

    
    if (poly3txtChoose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly3txtChoose.setColor(new util.Color('black'));
    }
    
    // *polygon_4Choose* updates
    if (t >= 0.0 && polygon_4Choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4Choose.tStart = t;  // (not accounting for frame time here)
      polygon_4Choose.frameNStart = frameN;  // exact frame index
      
      polygon_4Choose.setAutoDraw(true);
    }

    
    if (polygon_4Choose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_4Choose.setOpacity(1);
      polygon_4Choose.setPos([0.12, (- 0.29)]);
      polygon_4Choose.setFillColor(new util.Color(c4));
    }
    
    // *poly4txtChoose* updates
    if (t >= 0.0 && poly4txtChoose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      poly4txtChoose.tStart = t;  // (not accounting for frame time here)
      poly4txtChoose.frameNStart = frameN;  // exact frame index
      
      poly4txtChoose.setAutoDraw(true);
    }

    
    if (poly4txtChoose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      poly4txtChoose.setColor(new util.Color('black'));
    }
    
    // *polygon_ZChoose* updates
    if (t >= 0.0 && polygon_ZChoose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_ZChoose.tStart = t;  // (not accounting for frame time here)
      polygon_ZChoose.frameNStart = frameN;  // exact frame index
      
      polygon_ZChoose.setAutoDraw(true);
    }

    
    if (polygon_ZChoose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polygon_ZChoose.setOpacity(1);
      polygon_ZChoose.setPos([0, (- 0.17)]);
      polygon_ZChoose.setFillColor(new util.Color([0, 0, 0]));
    }
    
    // *polyZtxtChoose* updates
    if (t >= 0.0 && polyZtxtChoose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polyZtxtChoose.tStart = t;  // (not accounting for frame time here)
      polyZtxtChoose.frameNStart = frameN;  // exact frame index
      
      polyZtxtChoose.setAutoDraw(true);
    }

    
    if (polyZtxtChoose.status === PsychoJS.Status.STARTED){ // only update if being drawn
      polyZtxtChoose.setColor(new util.Color('black'));
    }
    psychoJS.window._fullRefresh();
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of which_objComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function which_objRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'which_obj'-------
    for (const thisComponent of which_objComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_which.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_which.corr = 1;  // correct non-response
      } else {
         key_resp_which.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_which.keys', key_resp_which.keys);
    psychoJS.experiment.addData('key_resp_which.corr', key_resp_which.corr);
    if (typeof key_resp_which.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_which.rt', key_resp_which.rt);
        }
    
    key_resp_which.stop();
    psychoJS.experiment.addData('key_resp_whichEnd.keys', key_resp_whichEnd.keys);
    if (typeof key_resp_whichEnd.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_whichEnd.rt', key_resp_whichEnd.rt);
        }
    
    key_resp_whichEnd.stop();
    psychoJS.experiment.addData('whichKey', whichKey);
    // the Routine "which_obj" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_conf_allKeys;
var _key_resp_confEnd_allKeys;
var confidenceComponents;
function confidenceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'confidence'-------
    t = 0;
    confidenceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_conf.keys = undefined;
    key_resp_conf.rt = undefined;
    _key_resp_conf_allKeys = [];
    key_resp_confEnd.keys = undefined;
    key_resp_confEnd.rt = undefined;
    _key_resp_confEnd_allKeys = [];
    key_resp_conf.clearEvents();
    Conf = [];
    conf_spacelen = 0;
    
    slider_conf.reset()
    // keep track of which components have finished
    confidenceComponents = [];
    confidenceComponents.push(key_resp_conf);
    confidenceComponents.push(key_resp_confEnd);
    confidenceComponents.push(conf_text);
    confidenceComponents.push(slider_conf);
    
    for (const thisComponent of confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function confidenceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'confidence'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_conf* updates
    if (t >= 0.0 && key_resp_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_conf.tStart = t;  // (not accounting for frame time here)
      key_resp_conf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_conf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_conf.start(); }); // start on screen flip
    }

    if (key_resp_conf.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_conf.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_conf_allKeys = _key_resp_conf_allKeys.concat(theseKeys);
      if (_key_resp_conf_allKeys.length > 0) {
        key_resp_conf.keys = _key_resp_conf_allKeys[_key_resp_conf_allKeys.length - 1].name;  // just the last key pressed
        key_resp_conf.rt = _key_resp_conf_allKeys[_key_resp_conf_allKeys.length - 1].rt;
      }
    }
    
    
    // *key_resp_confEnd* updates
    if (t >= 0.0 && key_resp_confEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_confEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_confEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_confEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_confEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_confEnd.clearEvents(); });
    }

    if (key_resp_confEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_confEnd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_confEnd_allKeys = _key_resp_confEnd_allKeys.concat(theseKeys);
      if (_key_resp_confEnd_allKeys.length > 0) {
        key_resp_confEnd.keys = _key_resp_confEnd_allKeys.map((key) => key.name);  // storing all keys
        key_resp_confEnd.rt = _key_resp_confEnd_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *conf_text* updates
    if (t >= 0.0 && conf_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conf_text.tStart = t;  // (not accounting for frame time here)
      conf_text.frameNStart = frameN;  // exact frame index
      
      conf_text.setAutoDraw(true);
    }

    if ((Conf.length > 0)) {
        if (((key_resp_conf.keys === "1") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("1");
            slider_conf.markerPos = 1;
        }
        if (((key_resp_conf.keys === "2") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("2");
            slider_conf.markerPos = 2;
        }
        if (((key_resp_conf.keys === "3") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("3");
            slider_conf.markerPos = 3;
        }
        if (((key_resp_conf.keys === "4") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("4");
            slider_conf.markerPos = 4;
        }
        if (((key_resp_conf.keys === "5") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("5");
            slider_conf.markerPos = 5;
        }
        if (((key_resp_conf.keys === "6") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("6");
            slider_conf.markerPos = 6;
        }
        if (((key_resp_conf.keys === "7") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("7");
            slider_conf.markerPos = 7;
        }
        if (((key_resp_conf.keys === "8") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("8");
            slider_conf.markerPos = 8;
        }
        if (((key_resp_conf.keys === "9") && (key_resp_conf.keys !== Conf.slice((- 1))[0]))) {
            Conf.push("9");
            slider_conf.markerPos = 9;
        }
    } else {
        if ((key_resp_conf.keys === "1")) {
            Conf.push("1");
            slider_conf.markerPos = 1;
        }
        if ((key_resp_conf.keys === "2")) {
            Conf.push("2");
            slider_conf.markerPos = 2;
        }
        if ((key_resp_conf.keys === "3")) {
            Conf.push("3");
            slider_conf.markerPos = 3;
        }
        if ((key_resp_conf.keys === "4")) {
            Conf.push("4");
            slider_conf.markerPos = 4;
        }
        if ((key_resp_conf.keys === "5")) {
            Conf.push("5");
            slider_conf.markerPos = 5;
        }
        if ((key_resp_conf.keys === "6")) {
            Conf.push("6");
            slider_conf.markerPos = 6;
        }
        if ((key_resp_conf.keys === "7")) {
            Conf.push("7");
            slider_conf.markerPos = 7;
        }
        if ((key_resp_conf.keys === "8")) {
            Conf.push("8");
            slider_conf.markerPos = 8;
        }
        if ((key_resp_conf.keys === "9")) {
            Conf.push("9");
            slider_conf.markerPos = 9;
        }
    }
    if (key_resp_confEnd.keys) {
        if (((key_resp_confEnd.keys.length > 0) && (! key_resp_conf.keys))) {
            conf_spacelen = key_resp_confEnd.keys.length;
        }
        if ((key_resp_confEnd.keys.length > conf_spacelen)) {
            Conf.push("space");
        }
    }
    if (Conf) {
        if (((Conf.slice((- 1))[0] === "space") && (Conf.length > 1))) {
            continueRoutine = false;
        }
    }
    
    
    // *slider_conf* updates
    if (t >= 0.0 && slider_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_conf.tStart = t;  // (not accounting for frame time here)
      slider_conf.frameNStart = frameN;  // exact frame index
      
      slider_conf.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of confidenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function confidenceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'confidence'-------
    for (const thisComponent of confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_conf.keys', key_resp_conf.keys);
    if (typeof key_resp_conf.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_conf.rt', key_resp_conf.rt);
        }
    
    key_resp_conf.stop();
    psychoJS.experiment.addData('key_resp_confEnd.keys', key_resp_confEnd.keys);
    if (typeof key_resp_confEnd.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_confEnd.rt', key_resp_confEnd.rt);
        }
    
    key_resp_confEnd.stop();
    psychoJS.experiment.addData('Conf', Conf);
    // the Routine "confidence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_agent_allKeys;
var _key_resp_agentEnd_allKeys;
var agentComponents;
function agentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'agent'-------
    t = 0;
    agentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_agent.keys = undefined;
    key_resp_agent.rt = undefined;
    _key_resp_agent_allKeys = [];
    key_resp_agentEnd.keys = undefined;
    key_resp_agentEnd.rt = undefined;
    _key_resp_agentEnd_allKeys = [];
    key_resp_agent.clearEvents();
    Agent = [];
    agent_spacelen = 0;
    
    slider_agent.reset()
    // keep track of which components have finished
    agentComponents = [];
    agentComponents.push(key_resp_agent);
    agentComponents.push(key_resp_agentEnd);
    agentComponents.push(agent_text);
    agentComponents.push(slider_agent);
    
    for (const thisComponent of agentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function agentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'agent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = agentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_agent* updates
    if (t >= 0.0 && key_resp_agent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_agent.tStart = t;  // (not accounting for frame time here)
      key_resp_agent.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_agent.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_agent.start(); }); // start on screen flip
    }

    if (key_resp_agent.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_agent.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_agent_allKeys = _key_resp_agent_allKeys.concat(theseKeys);
      if (_key_resp_agent_allKeys.length > 0) {
        key_resp_agent.keys = _key_resp_agent_allKeys[_key_resp_agent_allKeys.length - 1].name;  // just the last key pressed
        key_resp_agent.rt = _key_resp_agent_allKeys[_key_resp_agent_allKeys.length - 1].rt;
      }
    }
    
    
    // *key_resp_agentEnd* updates
    if (t >= 0.0 && key_resp_agentEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_agentEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_agentEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_agentEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_agentEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_agentEnd.clearEvents(); });
    }

    if (key_resp_agentEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_agentEnd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_agentEnd_allKeys = _key_resp_agentEnd_allKeys.concat(theseKeys);
      if (_key_resp_agentEnd_allKeys.length > 0) {
        key_resp_agentEnd.keys = _key_resp_agentEnd_allKeys.map((key) => key.name);  // storing all keys
        key_resp_agentEnd.rt = _key_resp_agentEnd_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *agent_text* updates
    if (t >= 0.0 && agent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_text.tStart = t;  // (not accounting for frame time here)
      agent_text.frameNStart = frameN;  // exact frame index
      
      agent_text.setAutoDraw(true);
    }

    if ((Agent.length > 0)) {
        if (((key_resp_agent.keys === "1") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("1");
            slider_agent.markerPos = 1;
        }
        if (((key_resp_agent.keys === "2") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("2");
            slider_agent.markerPos = 2;
        }
        if (((key_resp_agent.keys === "3") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("3");
            slider_agent.markerPos = 3;
        }
        if (((key_resp_agent.keys === "4") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("4");
            slider_agent.markerPos = 4;
        }
        if (((key_resp_agent.keys === "5") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("5");
            slider_agent.markerPos = 5;
        }
        if (((key_resp_agent.keys === "6") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("6");
            slider_agent.markerPos = 6;
        }
        if (((key_resp_agent.keys === "7") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("7");
            slider_agent.markerPos = 7;
        }
        if (((key_resp_agent.keys === "8") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("8");
            slider_agent.markerPos = 8;
        }
        if (((key_resp_agent.keys === "9") && (key_resp_agent.keys !== Agent.slice((- 1))[0]))) {
            Agent.push("9");
            slider_agent.markerPos = 9;
        }
    } else {
        if ((key_resp_agent.keys === "1")) {
            Agent.push("1");
            slider_agent.markerPos = 1;
        }
        if ((key_resp_agent.keys === "2")) {
            Agent.push("2");
            slider_agent.markerPos = 2;
        }
        if ((key_resp_agent.keys === "3")) {
            Agent.push("3");
            slider_agent.markerPos = 3;
        }
        if ((key_resp_agent.keys === "4")) {
            Agent.push("4");
            slider_agent.markerPos = 4;
        }
        if ((key_resp_agent.keys === "5")) {
            Agent.push("5");
            slider_agent.markerPos = 5;
        }
        if ((key_resp_agent.keys === "6")) {
            Agent.push("6");
            slider_agent.markerPos = 6;
        }
        if ((key_resp_agent.keys === "7")) {
            Agent.push("7");
            slider_agent.markerPos = 7;
        }
        if ((key_resp_agent.keys === "8")) {
            Agent.push("8");
            slider_agent.markerPos = 8;
        }
        if ((key_resp_agent.keys === "9")) {
            Agent.push("9");
            slider_agent.markerPos = 9;
        }
    }
    if (key_resp_agentEnd.keys) {
        if (((key_resp_agentEnd.keys.length > 0) && (! key_resp_agent.keys))) {
            agent_spacelen = key_resp_agentEnd.keys.length;
        }
        if ((key_resp_agentEnd.keys.length > agent_spacelen)) {
            Agent.push("space");
        }
    }
    if (Agent) {
        if (((Agent.slice((- 1))[0] === "space") && (Agent.length > 1))) {
            continueRoutine = false;
        }
    }
    
    
    // *slider_agent* updates
    if (t >= 0.0 && slider_agent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_agent.tStart = t;  // (not accounting for frame time here)
      slider_agent.frameNStart = frameN;  // exact frame index
      
      slider_agent.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of agentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function agentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'agent'-------
    for (const thisComponent of agentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_agent.keys', key_resp_agent.keys);
    if (typeof key_resp_agent.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_agent.rt', key_resp_agent.rt);
        }
    
    key_resp_agent.stop();
    psychoJS.experiment.addData('key_resp_agentEnd.keys', key_resp_agentEnd.keys);
    if (typeof key_resp_agentEnd.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_agentEnd.rt', key_resp_agentEnd.rt);
        }
    
    key_resp_agentEnd.stop();
    psychoJS.experiment.addData('Agent', Agent);
    // the Routine "agent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _warn_resp_allKeys;
var warningComponents;
function warningRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'warning'-------
    t = 0;
    warningClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    warn_resp.keys = undefined;
    warn_resp.rt = undefined;
    _warn_resp_allKeys = [];
    // keep track of which components have finished
    warningComponents = [];
    warningComponents.push(warn_text);
    warningComponents.push(warn_resp);
    
    for (const thisComponent of warningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function warningRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'warning'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *warn_text* updates
    if (t >= 0.0 && warn_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_text.tStart = t;  // (not accounting for frame time here)
      warn_text.frameNStart = frameN;  // exact frame index
      
      warn_text.setAutoDraw(true);
    }

    
    // *warn_resp* updates
    if (t >= 0.0 && warn_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_resp.tStart = t;  // (not accounting for frame time here)
      warn_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { warn_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { warn_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { warn_resp.clearEvents(); });
    }

    if (warn_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = warn_resp.getKeys({keyList: ['space'], waitRelease: false});
      _warn_resp_allKeys = _warn_resp_allKeys.concat(theseKeys);
      if (_warn_resp_allKeys.length > 0) {
        warn_resp.keys = _warn_resp_allKeys[_warn_resp_allKeys.length - 1].name;  // just the last key pressed
        warn_resp.rt = _warn_resp_allKeys[_warn_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((warn === 0)) {
        continueRoutine = false;
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of warningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function warningRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'warning'-------
    for (const thisComponent of warningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('warn_resp.keys', warn_resp.keys);
    if (typeof warn_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('warn_resp.rt', warn_resp.rt);
        routineTimer.reset();
        }
    
    warn_resp.stop();
    // the Routine "warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _warn_mouse_resp_allKeys;
var warning_mouseComponents;
function warning_mouseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'warning_mouse'-------
    t = 0;
    warning_mouseClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    warnX = 0;
    warnY = 0;
    warn_mouse_resp.keys = undefined;
    warn_mouse_resp.rt = undefined;
    _warn_mouse_resp_allKeys = [];
    // keep track of which components have finished
    warning_mouseComponents = [];
    warning_mouseComponents.push(warn_mouse_resp);
    warning_mouseComponents.push(warn_mouse_text);
    
    for (const thisComponent of warning_mouseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function warning_mouseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'warning_mouse'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = warning_mouseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    function moveAlarm(vec, minPer) {
        var alarm, count;
        count = 0;
        alarm = 0;
        for (var ind = 1, _pj_a = vec.length; (ind < _pj_a); ind += 1) {
            if ((Math.abs((vec[ind] - vec[(ind - 1)]))) === 0) {
                count += 1;
            }
        }
        if (((count / vec.length) > minPer)) {
            alarm = 1;
        }
        return alarm;
    }
    warnX = moveAlarm(mouseX, 0.9);
    warnY = moveAlarm(mouseY, 0.9);
    // Don't show if something has moved in x or y, or you've been warned about something else.
    if ((warnX  === 0) || (warnY === 0) || (warn === 1)) {
        continueRoutine = false;
    }
    
    // *warn_mouse_resp* updates
    if (t >= 0.0 && warn_mouse_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_mouse_resp.tStart = t;  // (not accounting for frame time here)
      warn_mouse_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { warn_mouse_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { warn_mouse_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { warn_mouse_resp.clearEvents(); });
    }

    if (warn_mouse_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = warn_mouse_resp.getKeys({keyList: ['space'], waitRelease: false});
      _warn_mouse_resp_allKeys = _warn_mouse_resp_allKeys.concat(theseKeys);
      if (_warn_mouse_resp_allKeys.length > 0) {
        warn_mouse_resp.keys = _warn_mouse_resp_allKeys[_warn_mouse_resp_allKeys.length - 1].name;  // just the last key pressed
        warn_mouse_resp.rt = _warn_mouse_resp_allKeys[_warn_mouse_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *warn_mouse_text* updates
    if (t >= 0.0 && warn_mouse_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warn_mouse_text.tStart = t;  // (not accounting for frame time here)
      warn_mouse_text.frameNStart = frameN;  // exact frame index
      
      warn_mouse_text.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of warning_mouseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function warning_mouseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'warning_mouse'-------
    for (const thisComponent of warning_mouseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('warnX',warnX);
    psychoJS.experiment.addData('warnY',warnY);
    // the Routine "warning_mouse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_break_allKeys;
var break_1Components;
function break_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'break_1'-------
    t = 0;
    break_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_break.keys = undefined;
    key_resp_break.rt = undefined;
    _key_resp_break_allKeys = [];
    if ((((TrialCount % 16) === 0) && (TrialCount !== condition.trialList.length))) {
        f_blockCount += 1;
        b_blockCount -= 1;
        sub_text_break = "This is the end of block @.\nPlease take a break if you need to, but do not exit full screen.\nThere are now $ blocks to go.\n\nWhen you would like to continue press the spacebar.";
        sub_text_break = sub_text_break.replace("@", f_blockCount).replace("$", b_blockCount);
    }
    
    // keep track of which components have finished
    break_1Components = [];
    break_1Components.push(text_break);
    break_1Components.push(key_resp_break);
    
    for (const thisComponent of break_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function break_1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'break_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = break_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_break* updates
    if (t >= 0.0 && text_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_break.tStart = t;  // (not accounting for frame time here)
      text_break.frameNStart = frameN;  // exact frame index
      
      text_break.setAutoDraw(true);
    }

    
    if (text_break.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_break.setText(sub_text_break);
    }
    
    // *key_resp_break* updates
    if (t >= 0.0 && key_resp_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_break.tStart = t;  // (not accounting for frame time here)
      key_resp_break.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_break.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_break.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_break.clearEvents(); });
    }

    if (key_resp_break.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_break.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_break_allKeys = _key_resp_break_allKeys.concat(theseKeys);
      if (_key_resp_break_allKeys.length > 0) {
        key_resp_break.keys = _key_resp_break_allKeys[_key_resp_break_allKeys.length - 1].name;  // just the last key pressed
        key_resp_break.rt = _key_resp_break_allKeys[_key_resp_break_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((((TrialCount % 16) !== 0) || (TrialCount === condition.trialList.length))) {
        continueRoutine = false;
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'break_1'-------
    for (const thisComponent of break_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "break_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_expEnd_allKeys;
var endExpComponents;
function endExpRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'endExp'-------
    t = 0;
    endExpClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_expEnd.keys = undefined;
    key_resp_expEnd.rt = undefined;
    _key_resp_expEnd_allKeys = [];
    // keep track of which components have finished
    endExpComponents = [];
    endExpComponents.push(text);
    endExpComponents.push(key_resp_expEnd);
    
    for (const thisComponent of endExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endExpRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'endExp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_expEnd* updates
    if (t >= 0.0 && key_resp_expEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_expEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_expEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_expEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_expEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_expEnd.clearEvents(); });
    }

    if (key_resp_expEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_expEnd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_expEnd_allKeys = _key_resp_expEnd_allKeys.concat(theseKeys);
      if (_key_resp_expEnd_allKeys.length > 0) {
        key_resp_expEnd.keys = _key_resp_expEnd_allKeys[_key_resp_expEnd_allKeys.length - 1].name;  // just the last key pressed
        key_resp_expEnd.rt = _key_resp_expEnd_allKeys[_key_resp_expEnd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endExpRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'endExp'-------
    for (const thisComponent of endExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "endExp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
