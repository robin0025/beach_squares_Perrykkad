#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.3),
    on Wed 23 Jun 2021 17:23:05 AEST
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

import math
c1 = [1,0,0]
c2 = [0,1,0]
c3 = [0,0,1]
c4 = [1,1,0]
foreL = [0,0,0]
foreR = [0,0,0]
import math
c1 = [-0.4196,0.6000,0.7804]
c2 = [0.7255,0.4588,-0.8981]
c3 = [1.000,0.2784,0.2784]
c4 = [0.4588,0.4039,0.9843]




# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.3'
expName = 'kelseyTest'  # from the Builder filename that created this script
expInfo = {'workerId': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['workerId'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath=None,
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='add', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instr"
instrClock = core.Clock()
instr_image = visual.ImageStim(
    win=win,
    name='instr_image', 
    image='handposition.jpg', mask=None,
    ori=0, pos=(0, -0.085), size=(0.45, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
intruct_text = visual.TextStim(win=win, name='intruct_text',
    text='Welcome to the experiment! \n\nPlease do not exit fullscreen during the task, even during breaks, unless something goes wrong and you need to restart.\n \nPlease place your dominant hand on the mouse \n(a separate mouse is preferable to a trackpad, and probably more comfortable!). \nYour non-dominant hand will be pressing the numbers on the keyboard and the letters ‘Q’ and ‘R’.\nWe recommend resting your hand in this position:   \n\n\n\n\n\n\n\n\n\n\n\n\nPress spacebar to continue.',
    font='Arial',
    pos=(0, 0.005), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_instrEnd = keyboard.Keyboard()

# Initialize components for Routine "fix_practice"
fix_practiceClock = core.Clock()
fixtext_practice = visual.TextStim(win=win, name='fixtext_practice',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "practice"
practiceClock = core.Clock()
key_resp_trialEnd_practice = keyboard.Keyboard()
background_practice = visual.Rect(
    win=win, name='background_practice',
    width=(1.8, 1.0)[0], height=(1.8, 1.0)[1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=None, fillColor='white',
    opacity=1, depth=-1.0, interpolate=True)
foreground_practice = visual.Rect(
    win=win, name='foreground_practice',
    width=(1.6, 0.8)[0], height=(1.6, 0.8)[1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-2.0, interpolate=True)
polygon_rightTexture = visual.Rect(
    win=win, name='polygon_rightTexture',
    width=(0.8, 0.798)[0], height=(0.8, 0.798)[1],
    ori=0, pos=(0.399, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-3.0, interpolate=True)
polygon_leftTexture = visual.Rect(
    win=win, name='polygon_leftTexture',
    width=(0.8, 0.798)[0], height=(0.8, 0.798)[1],
    ori=0, pos=(-0.399, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-4.0, interpolate=True)
winDims = win.size
NewX = 0
NewY= 0
deltaAngle = 0
deltaDist = 0
deltaX = 0
deltaY = 0
SpatOffX = 0
SpatOffY = 0
a = 0
currX = 0
currY = 0
logRow = 0
wrap = 0
mouse_practice = event.Mouse(win=win)
x, y = [None, None]
mouse_practice.mouseClock = core.Clock()
key_resp_side_practice = keyboard.Keyboard()
key_resp_model_practice = keyboard.Keyboard()
polygon_1_practice = visual.Rect(
    win=win, name='polygon_1_practice',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-9.0, interpolate=True)
polygon_1txt_practice = visual.TextStim(win=win, name='polygon_1txt_practice',
    text='1',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-10.0);
polygon_2_practice = visual.Rect(
    win=win, name='polygon_2_practice',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-11.0, interpolate=True)
polygon_2txt_practice = visual.TextStim(win=win, name='polygon_2txt_practice',
    text='2',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-12.0);
polygon_3_practice = visual.Rect(
    win=win, name='polygon_3_practice',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-13.0, interpolate=True)
polygon_3txt_practice = visual.TextStim(win=win, name='polygon_3txt_practice',
    text='3',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-14.0);
polygon_4_practice = visual.Rect(
    win=win, name='polygon_4_practice',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-15.0, interpolate=True)
polygon_4txt_practice = visual.TextStim(win=win, name='polygon_4txt_practice',
    text='4',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-16.0);
text_vis = visual.TextStim(win=win, name='text_vis',
    text="' '",
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-17.0);

# Initialize components for Routine "which_practice"
which_practiceClock = core.Clock()
key_resp_which_practice = keyboard.Keyboard()
key_resp_whichEnd_practice = keyboard.Keyboard()
polygon_highlight_practice = visual.Rect(
    win=win, name='polygon_highlight_practice',
    width=(0.1325, 0.1325)[0], height=(0.1325, 0.1325)[1],
    ori=0, pos=[0,0],
    lineWidth=3,     colorSpace='rgb',  lineColor=[0,1,0], fillColor=[0,0,0],
    opacity=1.0, depth=-2.0, interpolate=True)
polygon_background = visual.Rect(
    win=win, name='polygon_background',
    width=(0.8, 0.15)[0], height=(0.8, 0.15)[1],
    ori=0, pos=(0, 0.1),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-3.0, interpolate=True)
which_text_practice = visual.TextStim(win=win, name='which_text_practice',
    text='',
    font='Arial',
    pos=(0, 0.1), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
polygon_1Choose_practice = visual.Rect(
    win=win, name='polygon_1Choose_practice',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.12,-0.05),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-6.0, interpolate=True)
poly1txtChoose_practice = visual.TextStim(win=win, name='poly1txtChoose_practice',
    text='1',
    font='Arial',
    pos=(-0.12,-0.05), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
polygon_2Choose_practice = visual.Rect(
    win=win, name='polygon_2Choose_practice',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.12,-0.05),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-8.0, interpolate=True)
poly2txtChoose_practice = visual.TextStim(win=win, name='poly2txtChoose_practice',
    text='2',
    font='Arial',
    pos=(0.12,-0.05), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
polygon_3Choose_practice = visual.Rect(
    win=win, name='polygon_3Choose_practice',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(-0.12, -0.29),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-10.0, interpolate=True)
poly3txtChoose_practice = visual.TextStim(win=win, name='poly3txtChoose_practice',
    text='3',
    font='Arial',
    pos=(-0.12, -0.29), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
polygon_4Choose_practice = visual.Rect(
    win=win, name='polygon_4Choose_practice',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0.12, -0.29),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-12.0, interpolate=True)
poly4txtChoose_practice = visual.TextStim(win=win, name='poly4txtChoose_practice',
    text='4',
    font='Arial',
    pos=(0.12, -0.29), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-13.0);
polygon_ZChoose_practice = visual.Rect(
    win=win, name='polygon_ZChoose_practice',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0, -0.17),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-14.0, interpolate=True)
polyZtxtChoose_practice = visual.TextStim(win=win, name='polyZtxtChoose_practice',
    text='0',
    font='Arial',
    pos=(0, -0.17), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-15.0);

# Initialize components for Routine "confidence_practice"
confidence_practiceClock = core.Clock()
key_resp_conf_practice = keyboard.Keyboard()
key_resp_confEnd_practice = keyboard.Keyboard()
conf_text_practice = visual.TextStim(win=win, name='conf_text_practice',
    text='How confident are you that your answer is correct?\n\nPlease rate your confidence from 1 (Not at all) to 9 (Very confident).\n\nOnce you are happy with your selection press the spacebar.',
    font='Arial',
    pos=(0, 0.15), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
slider_conf_practice = visual.Slider(win=win, name='slider_conf_practice',
    size=(0.8, 0.05), pos=(0, 0), units=None,
    labels=['Not at all', 'Very confident'], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=0,
    style=['whiteOnBlack'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-4, readOnly=False)

# Initialize components for Routine "agent_practice"
agent_practiceClock = core.Clock()
key_resp_agent_practice = keyboard.Keyboard()
key_resp_agentEnd_practice = keyboard.Keyboard()
agent_text_practice = visual.TextStim(win=win, name='agent_text_practice',
    text='How much agency/control did you feel in that trial?\n\nUse the numbers on the keyboard to answer from 1 (No agency) to 9 (Complete agency).\n\nOnce you have made your selection press the space bar to move forward.',
    font='Arial',
    pos=(0, 0.15), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
slider_agent_practice = visual.Slider(win=win, name='slider_agent_practice',
    size=(0.8, 0.05), pos=(0, 0), units=None,
    labels=['No agency', 'Complete agency'], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=0,
    style=['whiteOnBlack'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-4, readOnly=False)

# Initialize components for Routine "feed_practice"
feed_practiceClock = core.Clock()
feedpractice_text = visual.TextStim(win=win, name='feedpractice_text',
    text='The correct answer was:\n\n\n\n\n\n\n\n\n\n\nPress spacebar to continue.',
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_feedpractice = keyboard.Keyboard()
polygon_1Feedback_practice = visual.Rect(
    win=win, name='polygon_1Feedback_practice',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=(0,0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
poly1txtFeedback_practice = visual.TextStim(win=win, name='poly1txtFeedback_practice',
    text='',
    font='Arial',
    pos=(0,0), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
feedbackTxt_zer0 = visual.TextStim(win=win, name='feedbackTxt_zer0',
    text='',
    font='Arial',
    pos=(0, -0.09), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "warning_practice"
warning_practiceClock = core.Clock()
warn_text_practice = visual.TextStim(win=win, name='warn_text_practice',
    text="WARNING!\n\nWe notice you didn't use the keyboard to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
warn_resp_practice = keyboard.Keyboard()

# Initialize components for Routine "warning_mouse_practice"
warning_mouse_practiceClock = core.Clock()
warn_mouse_practice_resp = keyboard.Keyboard()
warn_mouse_practice_text = visual.TextStim(win=win, name='warn_mouse_practice_text',
    text="WARNING!\n\nWe noticed you didn't use the mouse very much to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "trial_instruct"
trial_instructClock = core.Clock()
instructTrial_text = visual.TextStim(win=win, name='instructTrial_text',
    text='That is the end of the practice block.\nIf you would like a break before beginning the actual task, you may take one now.\n\nPress spacebar to start the task.',
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_trial_instruct = keyboard.Keyboard()

# Initialize components for Routine "fix"
fixClock = core.Clock()
fixtext = visual.TextStim(win=win, name='fixtext',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
key_resp_trialEnd = keyboard.Keyboard()
background = visual.Rect(
    win=win, name='background',
    width=(1.8, 1.0)[0], height=(1.8, 1.0)[1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=None, fillColor='white',
    opacity=1, depth=-1.0, interpolate=True)
foreground = visual.Rect(
    win=win, name='foreground',
    width=(1.6, 0.8)[0], height=(1.6, 0.8)[1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
conds =  ['predefinedtrials1.csv', 'predefinedtrials2.csv', 'predefinedtrials3.csv','predefinedtrials4.csv']
condSelect = conds[0]
TrialCount = 0
wrap = 0
warn = 1
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
key_resp_side = keyboard.Keyboard()
key_resp_model = keyboard.Keyboard()
polygon_1 = visual.Rect(
    win=win, name='polygon_1',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-7.0, interpolate=True)
polygon_1txt = visual.TextStim(win=win, name='polygon_1txt',
    text='1',
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
polygon_2 = visual.Rect(
    win=win, name='polygon_2',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-9.0, interpolate=True)
polygon_2txt = visual.TextStim(win=win, name='polygon_2txt',
    text='2',
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
polygon_3 = visual.Rect(
    win=win, name='polygon_3',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-11.0, interpolate=True)
polygon_3txt = visual.TextStim(win=win, name='polygon_3txt',
    text='3',
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-12.0);
polygon_4 = visual.Rect(
    win=win, name='polygon_4',
    width=(0.075, 0.075)[0], height=(0.075, 0.075)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-13.0, interpolate=True)
polygon_4txt = visual.TextStim(win=win, name='polygon_4txt',
    text='4',
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-14.0);

# Initialize components for Routine "which_obj"
which_objClock = core.Clock()
key_resp_which = keyboard.Keyboard()
key_resp_whichEnd = keyboard.Keyboard()
polygon_highlight = visual.Rect(
    win=win, name='polygon_highlight',
    width=(0.1325, 0.1325)[0], height=(0.1325, 0.1325)[1],
    ori=0, pos=[0,0],
    lineWidth=3,     colorSpace='rgb',  lineColor=[0,1,0], fillColor=[0,0,0],
    opacity=1.0, depth=-2.0, interpolate=True)
polygon_background_which = visual.Rect(
    win=win, name='polygon_background_which',
    width=(0.8, 0.15)[0], height=(0.8, 0.15)[1],
    ori=0, pos=(0, 0.1),
    lineWidth=1,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-3.0, interpolate=True)
which_text = visual.TextStim(win=win, name='which_text',
    text='Use the keyboard to input the number of the square you controlled. \nIf you think you controlled none of the squares, type 0.  \n\nPress the spacebar to submit the final response',
    font='Arial',
    pos=(0, 0.1), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
polygon_1Choose = visual.Rect(
    win=win, name='polygon_1Choose',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-6.0, interpolate=True)
poly1txtChoose = visual.TextStim(win=win, name='poly1txtChoose',
    text='1',
    font='Arial',
    pos=(-0.12,-0.05), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
polygon_2Choose = visual.Rect(
    win=win, name='polygon_2Choose',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-8.0, interpolate=True)
poly2txtChoose = visual.TextStim(win=win, name='poly2txtChoose',
    text='2',
    font='Arial',
    pos=(0.12,-0.05), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
polygon_3Choose = visual.Rect(
    win=win, name='polygon_3Choose',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-10.0, interpolate=True)
poly3txtChoose = visual.TextStim(win=win, name='poly3txtChoose',
    text='3',
    font='Arial',
    pos=(-0.12, -0.29), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
polygon_4Choose = visual.Rect(
    win=win, name='polygon_4Choose',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-12.0, interpolate=True)
poly4txtChoose = visual.TextStim(win=win, name='poly4txtChoose',
    text='4',
    font='Arial',
    pos=(0.12, -0.29), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-13.0);
polygon_ZChoose = visual.Rect(
    win=win, name='polygon_ZChoose',
    width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1.0, depth=-14.0, interpolate=True)
polyZtxtChoose = visual.TextStim(win=win, name='polyZtxtChoose',
    text='0',
    font='Arial',
    pos=(0, -0.17), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-15.0);

# Initialize components for Routine "confidence"
confidenceClock = core.Clock()
key_resp_conf = keyboard.Keyboard()
key_resp_confEnd = keyboard.Keyboard()
conf_text = visual.TextStim(win=win, name='conf_text',
    text='How confident are you that your answer is correct?\n\nPlease rate your confidence from 1 (Not at all) to 9 (Very confident).\n\nOnce you are happy with your selection press the spacebar.',
    font='Arial',
    pos=(0, 0.15), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
slider_conf = visual.Slider(win=win, name='slider_conf',
    size=(0.8, 0.05), pos=(0, 0), units=None,
    labels=['Not at all', 'Very confident'], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=0,
    style=['whiteOnBlack'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-4, readOnly=False)

# Initialize components for Routine "agent"
agentClock = core.Clock()
key_resp_agent = keyboard.Keyboard()
key_resp_agentEnd = keyboard.Keyboard()
agent_text = visual.TextStim(win=win, name='agent_text',
    text='How much agency/control did you feel in that trial?\n\nUse the numbers on the keyboard to answer from 1 (No agency) to 9 (Complete agency).\n\nOnce you have made your selection press the space bar to move forward.',
    font='Arial',
    pos=(0, 0.15), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
slider_agent = visual.Slider(win=win, name='slider_agent',
    size=(0.8, 0.05), pos=(0, 0), units=None,
    labels=['No agency', 'Complete agency'], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=0,
    style=['whiteOnBlack'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-4, readOnly=False)

# Initialize components for Routine "warning"
warningClock = core.Clock()
warn_text = visual.TextStim(win=win, name='warn_text',
    text="WARNING!\n\nWe notice you didn't use the keyboard to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
warn_resp = keyboard.Keyboard()

# Initialize components for Routine "warning_mouse"
warning_mouseClock = core.Clock()
warn_mouse_resp = keyboard.Keyboard()
warn_mouse_text = visual.TextStim(win=win, name='warn_mouse_text',
    text="WARNING!\n\nWe noticed you didn't use the mouse very much to move the objects on the last trial.\n\nRemember to hold down a key (1-4) to select a numbered object whilst using the mouse to move the object.\nThis should help you find out which object you control.\n\nPlease press the spacebar to continue.",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "break_1"
break_1Clock = core.Clock()
text_break = visual.TextStim(win=win, name='text_break',
    text='',
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_break = keyboard.Keyboard()
f_blockCount = 0
b_blockCount = 3
sub_text_break = ""

# Initialize components for Routine "endExp"
endExpClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Thank for your participation!\n\nPlease press the spacebar to move to the next section of the experiment.',
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_expEnd = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instr"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instrEnd.keys = []
key_resp_instrEnd.rt = []
_key_resp_instrEnd_allKeys = []
# keep track of which components have finished
instrComponents = [instr_image, intruct_text, key_resp_instrEnd]
for thisComponent in instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr"-------
while continueRoutine:
    # get current time
    t = instrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_image* updates
    if instr_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_image.frameNStart = frameN  # exact frame index
        instr_image.tStart = t  # local t and not account for scr refresh
        instr_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_image, 'tStartRefresh')  # time at next scr refresh
        instr_image.setAutoDraw(True)
    
    # *intruct_text* updates
    if intruct_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intruct_text.frameNStart = frameN  # exact frame index
        intruct_text.tStart = t  # local t and not account for scr refresh
        intruct_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intruct_text, 'tStartRefresh')  # time at next scr refresh
        intruct_text.setAutoDraw(True)
    
    # *key_resp_instrEnd* updates
    waitOnFlip = False
    if key_resp_instrEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instrEnd.frameNStart = frameN  # exact frame index
        key_resp_instrEnd.tStart = t  # local t and not account for scr refresh
        key_resp_instrEnd.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instrEnd, 'tStartRefresh')  # time at next scr refresh
        key_resp_instrEnd.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instrEnd.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instrEnd.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instrEnd.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instrEnd.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instrEnd_allKeys.extend(theseKeys)
        if len(_key_resp_instrEnd_allKeys):
            key_resp_instrEnd.keys = _key_resp_instrEnd_allKeys[-1].name  # just the last key pressed
            key_resp_instrEnd.rt = _key_resp_instrEnd_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr"-------
for thisComponent in instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practiceTrials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('predefinedpractice.csv'),
    seed=None, name='practiceTrials')
thisExp.addLoop(practiceTrials)  # add the loop to the experiment
thisPracticeTrial = practiceTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPracticeTrial.rgb)
if thisPracticeTrial != None:
    for paramName in thisPracticeTrial:
        exec('{} = thisPracticeTrial[paramName]'.format(paramName))

for thisPracticeTrial in practiceTrials:
    currentLoop = practiceTrials
    # abbreviate parameter names if possible (e.g. rgb = thisPracticeTrial.rgb)
    if thisPracticeTrial != None:
        for paramName in thisPracticeTrial:
            exec('{} = thisPracticeTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fix_practice"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fix_practiceComponents = [fixtext_practice]
    for thisComponent in fix_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fix_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fix_practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fix_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fix_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixtext_practice* updates
        if fixtext_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixtext_practice.frameNStart = frameN  # exact frame index
            fixtext_practice.tStart = t  # local t and not account for scr refresh
            fixtext_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixtext_practice, 'tStartRefresh')  # time at next scr refresh
            fixtext_practice.setAutoDraw(True)
        if fixtext_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixtext_practice.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixtext_practice.tStop = t  # not accounting for scr refresh
                fixtext_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixtext_practice, 'tStopRefresh')  # time at next scr refresh
                fixtext_practice.setAutoDraw(False)
        if qOn == 0:
            continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fix_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fix_practice"-------
    for thisComponent in fix_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_trialEnd_practice.keys = []
    key_resp_trialEnd_practice.rt = []
    _key_resp_trialEnd_practice_allKeys = []
    logRow = 0 #iterated through within trial
    colour = [[1,0,0], [0,1,0], [0,0,1],[1,1,0]]
    order = [0,1,2,3]
    c1 = colour[order[0]]
    c2 = colour[order[1]]
    c3 = colour[order[2]]
    c4 = colour[order[3]]
    # Randomise start position
    (mouseX,mouseY) = ([],[])
    track_deltaAngle = []
    track_deltaDist = []
    track_deltaX = []
    track_deltaY = []
    track_SpatOffX = []
    track_SpatOffY = []
    track_a = []
    track_sloth = []
    track_wrap = []
    # Rezero position tracking variables
    poly1x = []
    poly1y = []
    poly2x = []
    poly2y = []
    poly3x = []
    poly3y = []
    poly4x = []
    poly4y = []
    # Zero out object position variables
    spos1 = []
    spos2 = []
    spos3 = []
    spos4 = []
    # Track presses
    track_Env_key = []
    track_Env_T = []
    track_Model_key = []
    track_Model_T = []
    # Start mouse position
    fmouse = mouse_practice.getPos()
    mouseX.append(fmouse[0])
    mouseY.append(fmouse[1])
    polys = 4
    if corrAns != 5:
        sloth=[10000,10000,10000,10000]
    else:
        sloth=[5,5,5,5]
    sposListX = []
    sposListY = []
    while 1:
        countX = 0
        countY = 0
        sposListX = normal(0,0.2,polys)
        sposListY = normal(0,0.2,polys)
        sqrsize = 0.35
        for itemX in sposListX:
            if itemX < (sqrsize) and itemX > -sqrsize:
            #if itemX < (winX) and itemX > 0:
                countX += 1
        for itemY in sposListY:
            if itemY < (sqrsize) and itemY > -sqrsize:
            #if itemY < (winY) and itemY > 0:
                countY += 1
        if countX == polys and countY == polys:
            break
    spos1 = (sposListX[0],sposListY[0])
    spos2 = (sposListX[1],sposListY[1])
    spos3 = (sposListX[2],sposListY[2])
    spos4 = (sposListX[3],sposListY[3])
    # Remove mouse from visibility
    win.mouseVisible = False
    # Set start position of each polygon
    bgc = [0,0,0]
    side = [1,2]
    op1 = visible[0]
    op2 = visible[1]
    op3 = visible[2]
    op4 = visible[3]
    LH1 = Lheight[0]
    LH2 = Lheight[1]
    LH3 = Lheight[2]
    LH4 = Lheight[3]
    text_vis.setText(words)
    key_resp_side_practice.clearEvents()
    key_resp_model_practice.clearEvents()
    #set environment background
    if EnvClass == 1:
        foreR = [0.4,0.5,0]
        foreL = [0.4,0.5,0]
    elif EnvClass == 2:
        foreL = [0,0,0.5]
        foreR = [0,0,0.5]
    elif EnvClass == 3:
        foreL = [0.4,0.5,0]
        foreR = [0,0,0.5]
    else:
        foreL = [0,0,0]
        foreR = [0,0,0]
    # setup some python lists for storing info about the mouse_practice
    gotValidClick = False  # until a click is received
    key_resp_side_practice.keys = []
    key_resp_side_practice.rt = []
    _key_resp_side_practice_allKeys = []
    key_resp_model_practice.keys = []
    key_resp_model_practice.rt = []
    _key_resp_model_practice_allKeys = []
    polygon_1txt_practice.setOpacity(op1)
    polygon_1txt_practice.setHeight(LH1)
    polygon_2txt_practice.setOpacity(op2)
    polygon_2txt_practice.setHeight(LH2)
    polygon_3txt_practice.setOpacity(op3)
    polygon_3txt_practice.setHeight(LH3)
    polygon_4txt_practice.setOpacity(op4)
    polygon_4txt_practice.setHeight(LH4)
    # keep track of which components have finished
    practiceComponents = [key_resp_trialEnd_practice, background_practice, foreground_practice, polygon_rightTexture, polygon_leftTexture, mouse_practice, key_resp_side_practice, key_resp_model_practice, polygon_1_practice, polygon_1txt_practice, polygon_2_practice, polygon_2txt_practice, polygon_3_practice, polygon_3txt_practice, polygon_4_practice, polygon_4txt_practice, text_vis]
    for thisComponent in practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice"-------
    while continueRoutine:
        # get current time
        t = practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_trialEnd_practice* updates
        waitOnFlip = False
        if key_resp_trialEnd_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_trialEnd_practice.frameNStart = frameN  # exact frame index
            key_resp_trialEnd_practice.tStart = t  # local t and not account for scr refresh
            key_resp_trialEnd_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_trialEnd_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_trialEnd_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_trialEnd_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_trialEnd_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_trialEnd_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_trialEnd_practice.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_trialEnd_practice_allKeys.extend(theseKeys)
            if len(_key_resp_trialEnd_practice_allKeys):
                key_resp_trialEnd_practice.keys = _key_resp_trialEnd_practice_allKeys[-1].name  # just the last key pressed
                key_resp_trialEnd_practice.rt = _key_resp_trialEnd_practice_allKeys[-1].rt
        
        # *background_practice* updates
        if background_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            background_practice.frameNStart = frameN  # exact frame index
            background_practice.tStart = t  # local t and not account for scr refresh
            background_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(background_practice, 'tStartRefresh')  # time at next scr refresh
            background_practice.setAutoDraw(True)
        if background_practice.status == STARTED:  # only update if drawing
            background_practice.setFillColor(bgc)
        
        # *foreground_practice* updates
        if foreground_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            foreground_practice.frameNStart = frameN  # exact frame index
            foreground_practice.tStart = t  # local t and not account for scr refresh
            foreground_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(foreground_practice, 'tStartRefresh')  # time at next scr refresh
            foreground_practice.setAutoDraw(True)
        if foreground_practice.status == STARTED:  # only update if drawing
            foreground_practice.setFillColor([0,0,0])
            foreground_practice.setOpacity(1)
            foreground_practice.setLineColor([1,1,1])
        
        # *polygon_rightTexture* updates
        if polygon_rightTexture.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_rightTexture.frameNStart = frameN  # exact frame index
            polygon_rightTexture.tStart = t  # local t and not account for scr refresh
            polygon_rightTexture.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_rightTexture, 'tStartRefresh')  # time at next scr refresh
            polygon_rightTexture.setAutoDraw(True)
        if polygon_rightTexture.status == STARTED:  # only update if drawing
            polygon_rightTexture.setFillColor(foreR)
            polygon_rightTexture.setLineColor(foreR)
        
        # *polygon_leftTexture* updates
        if polygon_leftTexture.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_leftTexture.frameNStart = frameN  # exact frame index
            polygon_leftTexture.tStart = t  # local t and not account for scr refresh
            polygon_leftTexture.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_leftTexture, 'tStartRefresh')  # time at next scr refresh
            polygon_leftTexture.setAutoDraw(True)
        if polygon_leftTexture.status == STARTED:  # only update if drawing
            polygon_leftTexture.setFillColor(foreL)
            polygon_leftTexture.setLineColor(foreL)
        def distAng(side,sloth,preMouse,objPrev, currVar, dirAngle, logRow):
            (prevX,prevY) = objPrev # obj xy or mouse xy?
            (currX,currY) = mouse_practice.getPos()
            (prevMX,prevMY)=(preMouse[0],preMouse[1])
            (winX,winY) = (0.75,0.35)
            #set number of objects
            nsqr = 4 #place holder for number of AI squares 
            wrap = 0
            #%% Distance -
            deltaX = (currX-prevMX[logRow])
            deltaY = (currY-prevMY[logRow])
            #%calculate the angle of motion of the mouse
            if deltaX == prevMX[logRow] and deltaY == prevMY[logRow]:
                deltaAngle = NaN
            elif deltaX >= 0 and deltaY >= 0: #%In quadrant I
                deltaAngle = abs(math.degrees(math.atan(deltaY/deltaX)))
            elif deltaX <= 0 and deltaY >= 0: #%In quadrant II
                deltaAngle = 180 - abs(math.degrees(math.atan(deltaY/deltaX)))
            elif deltaX <= 0 and deltaY <= 0: #%In quadrant III
                deltaAngle = 180 + abs(math.degrees(math.atan(deltaY/deltaX)))
            elif deltaX >= 0 and deltaY <= 0: #%In quadrant IV
                deltaAngle = 360 - abs(math.degrees(math.atan(deltaY/deltaX))) 
            #%hypotenuse of movement (overall distance moved across XY)
            deltaDist = (math.sqrt(((deltaX)**2)+((deltaY)**2)))
            #%% Generate Movement of the Distracter Squares %%
            #%preallocate offset variable
            a = np.empty(nsqr, 'float')
            a.fill(np.nan)
            #%movement
            NewX= np.zeros(nsqr)
            NewY= np.zeros(nsqr)
            if deltaX == 0 and deltaY == 0:
                NewX = prevX
                NewY = prevY
                SpatOffX = np.zeros(nsqr)
                SpatOffY = np.zeros(nsqr)
            #    %if there is no change in the mouse position, do nothing
            else: #%if the mouse has changed,
                SpatOffX = np.zeros(nsqr)
                SpatOffY = np.zeros(nsqr)
                for k in range(0,nsqr): # %place all distracter squares in new position
                    if side[0] == 1:
                         if prevX[k] > 0:
                                j = k+4 #use the second or first environment
                         else:
                                j   = k
                    elif side[0] == 2:
                        if prevX[k] < 0:
                                j = k+4 #use the second or first environment
                        else:
                                j   = k
                    a[k] = (deltaAngle - dirAngle[k][logRow]) + currVar[j][logRow]# %calculate the angle of movement of each square based on base angle, mouse movement angle and add variability based on distribution timeline
                    #        %define angle calculations per quadrant
                    if ((90 >= a[k]) and (a[k] >= 0)) or ((-270 >= a[k]) and (a[k] >= -360)) or ((450 >= a[k]) and (a[k] >= 360)): #%in quadrant I
                            SpatOffX[k] = (deltaDist/sloth[k])*math.degrees(math.cos(math.radians(a[k])))
                            SpatOffY[k] = (deltaDist/sloth[k])*math.degrees(math.sin(math.radians(a[k])))
                    elif ((180 >= a[k]) and (a[k] >= 90)) or ((-180 >= a[k]) and (a[k] >= -270)) or ((540 >= a[k]) and (a[k] >= 450)): #%in quadrant II
                            SpatOffX[k] = -(deltaDist/sloth[k])*math.degrees(math.cos(math.radians(180-a[k])))
                            SpatOffY[k] = (deltaDist/sloth[k])*math.degrees(math.sin(math.radians(180-a[k])))
                    elif ((270 >= a[k]) and (a[k] >=180)) or ((-90 >= a[k]) and (a[k] >= -180)) or ((630 >= a[k]) and (a[k] >= 540)): #%in quadrant III
                            SpatOffX[k] = -(deltaDist/sloth[k])*math.degrees(math.cos(math.radians(180+a[k])))
                            SpatOffY[k] = -(deltaDist/sloth[k])*math.degrees(math.sin(math.radians(180+a[k])))
                    elif ((360 >= a[k]) and (a[k] >= 270)) or ((0 >= a[k]) and (a[k] >= -90)) or ((720 >= a[k]) and (a[k]>= 630)): #%in quadrant III
                            SpatOffX[k] = (deltaDist/sloth[k])*math.degrees(math.cos(math.radians(360-a[k])))
                            SpatOffY[k] = -(deltaDist/sloth[k])*math.degrees(math.sin(math.radians(360-a[k])))   
                    else:
                        print('ERROR - calculated angle outside specified quadrants')
            #        %% Define new locations
                    NewX[k] = prevX[k] + (SpatOffX[k])
                    NewY[k] = prevY[k] + (SpatOffY[k])
            #        %wrap if new locations are off the screen
                    wrap = 0
                    if NewX[k] >= winX:
                        NewX[k] = (NewX[k]-(winX*2))
                        wrap = 1
                    elif NewX[k] <= -winX:
                        NewX[k] = (NewX[k]+(winX*2))
                        wrap = 3
            #        %y
                    if NewY[k] >= winY:
                        NewY[k] = (NewY[k]-(winY*2))
                        wrap = 2
                    elif NewY[k] <= -winY:
                        NewY[k] = (NewY[k]+(winY*2))
                        wrap = 4
            logRow = logRow +1; #%add one to the number of rows in the data log
            return (NewX, NewY, currX, currY, logRow, deltaAngle, deltaDist, deltaX, deltaY, SpatOffX, SpatOffY, a, sloth, wrap)
        
        #model choice
        if corrAns != 5:
            if key_resp_model_practice.keys:
                if key_resp_model_practice.keys[-1] == '1': 
                    bgc = [1,0,0]
                    sloth =[5,2.5,2.5,2.5]
                    if track_Model_key:
                        if track_Model_key[-1] != '1':
                            track_Model_key.append('1')
                            track_Model_T.append(t)
                    else:
                        track_Model_key.append('1')
                        track_Model_T.append(t) 
                    
                elif key_resp_model_practice.keys[-1] == '2':
                    bgc = [0,1,0]
                    sloth =[2.5,5,2.5,2.5]
                    if track_Model_key:
                        if track_Model_key[-1] != '2':
                            track_Model_key.append('2')
                            track_Model_T.append(t)
                    else:
                        track_Model_key.append('2')
                        track_Model_T.append(t) 
                elif key_resp_model_practice.keys[-1] == '3':
                    bgc = [0,0,1]
                    sloth =[2.5,2.5,5,2.5];
                    if track_Model_key:
                        if track_Model_key[-1] != '3':
                            track_Model_key.append('3')
                            track_Model_T.append(t)
                    else:
                        track_Model_key.append('3')
                        track_Model_T.append(t) 
                elif key_resp_model_practice.keys[-1] == '4':
                    bgc = [1,1,0]
                    sloth =[2.5,2.5,2.5,5];
                    if track_Model_key:
                        if track_Model_key[-1] != '4':
                            track_Model_key.append('4')
                            track_Model_T.append(t)
                    else:
                        track_Model_key.append('4')
                        track_Model_T.append(t) 
            else:
                bgc = [0,0,0];
                sloth = [2.5,2.5,2.5,2.5];
                if  track_Model_key:
                    if track_Model_key[-1] != 'None':
                        track_Model_key.append('None');
                else:
                    track_Model_key.append('None');
            #key_resp_practice.clearEvents()
        
        #allow for infinite looping
        if qOn == 0 and key_resp_trialEnd_practice.keys == 'space':
            continueRoutine = False
        if logRow >= 450-1 and qOn == 0:
            logRow = 0
            mouseX = []
            mouseY = []
            fmouse = mouse_practice.getPos()
            mouseX.append(fmouse[0])
            mouseY.append(fmouse[1])
        elif logRow >= 450-1 and qOn == 1:
            continueRoutine = False #end loop if qOn
        preMouse = (mouseX, mouseY)
        (NewX, NewY, currX, currY,logRow, deltaAngle, deltaDist, deltaX, deltaY, SpatOffX, SpatOffY, a, sloth, wrap) = distAng(side,sloth,preMouse,[[spos1[0],spos2[0],spos3[0],spos4[0]],[spos1[1],spos2[1],spos3[1],spos4[1]]], [S1_E1_Var, S2_E1_Var, S3_E1_Var, S4_E1_Var,S1_E2_Var, S2_E2_Var, S3_E2_Var, S4_E2_Var],[S1_OffsetDir, S2_OffsetDir, S3_OffsetDir, S4_OffsetDir], logRow)
        mouseX.append(currX), 
        mouseY.append(currY)
        #assignment
        spos1 = (NewX[0], NewY[0])
        spos2 = (NewX[1], NewY[1])
        spos3 = (NewX[2], NewY[2])
        spos4 = (NewX[3], NewY[3])
        #if position is reset by ends
        if EnvOn == 1:
            theseKeys2 = key_resp_side_practice.getKeys(keyList=['q', 'r'], waitRelease=False)
            if len(theseKeys2) > 0:
                if theseKeys2[-1].name == "q":
                    NewX = normal(-0.4, 0.1, polys)
                    NewY = normal(0, 0.1, polys)
                    spos1 = (NewX[0], NewY[0])
                    spos2 = (NewX[1], NewY[1])
                    spos3 = (NewX[2], NewY[2])
                    spos4 = (NewX[3], NewY[3]) 
                    track_Env_key.append('q');
                    track_Env_T.append(t);
                if theseKeys2[-1].name == "r":
                    NewX = normal(0.4, 0.1, polys)
                    NewY = normal(0, 0.1, polys)
                    spos1 = (NewX[0], NewY[0])
                    spos2 = (NewX[1], NewY[1])
                    spos3 = (NewX[2], NewY[2])
                    spos4 = (NewX[3], NewY[3])
                    track_Env_key.append('r');
                    track_Env_T.append(t);
        #add polygons to data stream
        poly1x.append(NewX[0])
        poly1y.append(NewY[0])
        poly2x.append(NewX[1])
        poly2y.append(NewY[1])
        poly3x.append(NewX[2])
        poly3y.append(NewY[2])
        poly4x.append(NewX[3])
        poly4y.append(NewY[3])
        # additional tracking variables
        track_deltaAngle.append(deltaAngle)
        track_deltaDist.append(deltaDist)
        track_deltaX.append(deltaX)
        track_deltaY.append(deltaY)
        track_SpatOffX.append(SpatOffX)
        track_SpatOffY.append(SpatOffY)
        track_a.append(a)
        track_sloth.append(sloth)
        track_wrap.append(wrap)
        
        # *key_resp_side_practice* updates
        waitOnFlip = False
        if key_resp_side_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_side_practice.frameNStart = frameN  # exact frame index
            key_resp_side_practice.tStart = t  # local t and not account for scr refresh
            key_resp_side_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_side_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_side_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_side_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_side_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_side_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_side_practice.getKeys(keyList=['q', 'r'], waitRelease=False)
            _key_resp_side_practice_allKeys.extend(theseKeys)
            if len(_key_resp_side_practice_allKeys):
                key_resp_side_practice.keys = [key.name for key in _key_resp_side_practice_allKeys]  # storing all keys
                key_resp_side_practice.rt = [key.rt for key in _key_resp_side_practice_allKeys]
        
        # *key_resp_model_practice* updates
        waitOnFlip = False
        if key_resp_model_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_model_practice.frameNStart = frameN  # exact frame index
            key_resp_model_practice.tStart = t  # local t and not account for scr refresh
            key_resp_model_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_model_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_model_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_model_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_model_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_model_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_model_practice.getKeys(keyList=['1', '2', '3', '4'], waitRelease=False)
            _key_resp_model_practice_allKeys.extend(theseKeys)
            if len(_key_resp_model_practice_allKeys):
                key_resp_model_practice.keys = _key_resp_model_practice_allKeys[-1].name  # just the last key pressed
                key_resp_model_practice.rt = _key_resp_model_practice_allKeys[-1].rt
        
        # *polygon_1_practice* updates
        if polygon_1_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1_practice.frameNStart = frameN  # exact frame index
            polygon_1_practice.tStart = t  # local t and not account for scr refresh
            polygon_1_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_1_practice.setAutoDraw(True)
        if polygon_1_practice.status == STARTED:  # only update if drawing
            polygon_1_practice.setFillColor(c1)
            polygon_1_practice.setOpacity(op1)
            polygon_1_practice.setPos(spos1)
        
        # *polygon_1txt_practice* updates
        if polygon_1txt_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1txt_practice.frameNStart = frameN  # exact frame index
            polygon_1txt_practice.tStart = t  # local t and not account for scr refresh
            polygon_1txt_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1txt_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_1txt_practice.setAutoDraw(True)
        if polygon_1txt_practice.status == STARTED:  # only update if drawing
            polygon_1txt_practice.setPos(spos1)
        
        # *polygon_2_practice* updates
        if polygon_2_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2_practice.frameNStart = frameN  # exact frame index
            polygon_2_practice.tStart = t  # local t and not account for scr refresh
            polygon_2_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_2_practice.setAutoDraw(True)
        if polygon_2_practice.status == STARTED:  # only update if drawing
            polygon_2_practice.setFillColor(c2)
            polygon_2_practice.setOpacity(op2)
            polygon_2_practice.setPos(spos2)
        
        # *polygon_2txt_practice* updates
        if polygon_2txt_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2txt_practice.frameNStart = frameN  # exact frame index
            polygon_2txt_practice.tStart = t  # local t and not account for scr refresh
            polygon_2txt_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2txt_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_2txt_practice.setAutoDraw(True)
        if polygon_2txt_practice.status == STARTED:  # only update if drawing
            polygon_2txt_practice.setPos(spos2)
        
        # *polygon_3_practice* updates
        if polygon_3_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3_practice.frameNStart = frameN  # exact frame index
            polygon_3_practice.tStart = t  # local t and not account for scr refresh
            polygon_3_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_3_practice.setAutoDraw(True)
        if polygon_3_practice.status == STARTED:  # only update if drawing
            polygon_3_practice.setFillColor(c3)
            polygon_3_practice.setOpacity(op3)
            polygon_3_practice.setPos(spos3)
        
        # *polygon_3txt_practice* updates
        if polygon_3txt_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3txt_practice.frameNStart = frameN  # exact frame index
            polygon_3txt_practice.tStart = t  # local t and not account for scr refresh
            polygon_3txt_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3txt_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_3txt_practice.setAutoDraw(True)
        if polygon_3txt_practice.status == STARTED:  # only update if drawing
            polygon_3txt_practice.setPos(spos3)
        
        # *polygon_4_practice* updates
        if polygon_4_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4_practice.frameNStart = frameN  # exact frame index
            polygon_4_practice.tStart = t  # local t and not account for scr refresh
            polygon_4_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_4_practice.setAutoDraw(True)
        if polygon_4_practice.status == STARTED:  # only update if drawing
            polygon_4_practice.setFillColor(c4)
            polygon_4_practice.setOpacity(op4)
            polygon_4_practice.setPos(spos4)
        
        # *polygon_4txt_practice* updates
        if polygon_4txt_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4txt_practice.frameNStart = frameN  # exact frame index
            polygon_4txt_practice.tStart = t  # local t and not account for scr refresh
            polygon_4txt_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4txt_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_4txt_practice.setAutoDraw(True)
        if polygon_4txt_practice.status == STARTED:  # only update if drawing
            polygon_4txt_practice.setPos(spos4)
        
        # *text_vis* updates
        if text_vis.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_vis.frameNStart = frameN  # exact frame index
            text_vis.tStart = t  # local t and not account for scr refresh
            text_vis.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_vis, 'tStartRefresh')  # time at next scr refresh
            text_vis.setAutoDraw(True)
        if text_vis.status == STARTED:  # only update if drawing
            text_vis.setColor('white', colorSpace='rgb')
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice"-------
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practiceTrials.addData('poly1x',poly1x)
    practiceTrials.addData('poly1y',poly1y)
    practiceTrials.addData('poly2x',poly2x)
    practiceTrials.addData('poly2y',poly2y)
    practiceTrials.addData('poly3x',poly3x)
    practiceTrials.addData('poly3y',poly3y)
    practiceTrials.addData('poly4x',poly4x)
    practiceTrials.addData('poly4y',poly4y)
    practiceTrials.addData('winDims',winDims);
    practiceTrials.addData('side',side[0]);
    practiceTrials.addData('order',order);
    practiceTrials.addData('mouseX',mouseX);
    practiceTrials.addData('mouseY',mouseY);
    practiceTrials.addData('c1',c1);
    practiceTrials.addData('c2',c2);
    practiceTrials.addData('c3',c3);
    practiceTrials.addData('c4',c4);
    practiceTrials.addData('track_deltaAngle', track_deltaAngle);
    practiceTrials.addData('track_deltaDist', track_deltaDist);
    practiceTrials.addData('track_deltaX', track_deltaX);
    practiceTrials.addData('track_deltaY', track_deltaY);
    practiceTrials.addData('track_SpatOffX', track_SpatOffX);
    practiceTrials.addData('track_SpatOffY', track_SpatOffY);
    practiceTrials.addData('track_a', track_a);
    practiceTrials.addData('track_sloth', track_sloth);
    practiceTrials.addData('track_wrap', track_wrap);
    practiceTrials.addData('track_Env_key', track_Env_key);
    practiceTrials.addData('track_Env_T', track_Env_T);
    practiceTrials.addData('track_Model_key', track_Model_key);
    practiceTrials.addData('track_Model_T', track_Model_T);
    # store data for practiceTrials (TrialHandler)
    practiceTrials.addData('mouse_practice.started', mouse_practice.tStartRefresh)
    practiceTrials.addData('mouse_practice.stopped', mouse_practice.tStopRefresh)
    # check responses
    if key_resp_side_practice.keys in ['', [], None]:  # No response was made
        key_resp_side_practice.keys = None
    practiceTrials.addData('key_resp_side_practice.keys',key_resp_side_practice.keys)
    if key_resp_side_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_side_practice.rt', key_resp_side_practice.rt)
    practiceTrials.addData('key_resp_side_practice.started', key_resp_side_practice.tStartRefresh)
    practiceTrials.addData('key_resp_side_practice.stopped', key_resp_side_practice.tStopRefresh)
    practiceTrials.addData('polygon_1_practice.started', polygon_1_practice.tStartRefresh)
    practiceTrials.addData('polygon_1_practice.stopped', polygon_1_practice.tStopRefresh)
    practiceTrials.addData('polygon_2_practice.started', polygon_2_practice.tStartRefresh)
    practiceTrials.addData('polygon_2_practice.stopped', polygon_2_practice.tStopRefresh)
    practiceTrials.addData('polygon_3_practice.started', polygon_3_practice.tStartRefresh)
    practiceTrials.addData('polygon_3_practice.stopped', polygon_3_practice.tStopRefresh)
    practiceTrials.addData('polygon_4_practice.started', polygon_4_practice.tStartRefresh)
    practiceTrials.addData('polygon_4_practice.stopped', polygon_4_practice.tStopRefresh)
    # the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "which_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_which_practice.keys = []
    key_resp_which_practice.rt = []
    _key_resp_which_practice_allKeys = []
    key_resp_whichEnd_practice.keys = []
    key_resp_whichEnd_practice.rt = []
    _key_resp_whichEnd_practice_allKeys = []
    posSelect = (0, 0.1)
    opSelect  = 0
    whichKey = []
    spacelen_which = 0
    # keep track of which components have finished
    which_practiceComponents = [key_resp_which_practice, key_resp_whichEnd_practice, polygon_highlight_practice, polygon_background, which_text_practice, polygon_1Choose_practice, poly1txtChoose_practice, polygon_2Choose_practice, poly2txtChoose_practice, polygon_3Choose_practice, poly3txtChoose_practice, polygon_4Choose_practice, poly4txtChoose_practice, polygon_ZChoose_practice, polyZtxtChoose_practice]
    for thisComponent in which_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    which_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "which_practice"-------
    while continueRoutine:
        # get current time
        t = which_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=which_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_which_practice* updates
        waitOnFlip = False
        if key_resp_which_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_which_practice.frameNStart = frameN  # exact frame index
            key_resp_which_practice.tStart = t  # local t and not account for scr refresh
            key_resp_which_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_which_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_which_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_which_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_which_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_which_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_which_practice.getKeys(keyList=['0', '1', '2', '3', '4'], waitRelease=False)
            _key_resp_which_practice_allKeys.extend(theseKeys)
            if len(_key_resp_which_practice_allKeys):
                key_resp_which_practice.keys = _key_resp_which_practice_allKeys[-1].name  # just the last key pressed
                key_resp_which_practice.rt = _key_resp_which_practice_allKeys[-1].rt
                # was this correct?
                if (key_resp_which_practice.keys == str(corrAns)) or (key_resp_which_practice.keys == corrAns):
                    key_resp_which_practice.corr = 1
                else:
                    key_resp_which_practice.corr = 0
        
        # *key_resp_whichEnd_practice* updates
        waitOnFlip = False
        if key_resp_whichEnd_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_whichEnd_practice.frameNStart = frameN  # exact frame index
            key_resp_whichEnd_practice.tStart = t  # local t and not account for scr refresh
            key_resp_whichEnd_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_whichEnd_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_whichEnd_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_whichEnd_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_whichEnd_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_whichEnd_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_whichEnd_practice.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_whichEnd_practice_allKeys.extend(theseKeys)
            if len(_key_resp_whichEnd_practice_allKeys):
                key_resp_whichEnd_practice.keys = [key.name for key in _key_resp_whichEnd_practice_allKeys]  # storing all keys
                key_resp_whichEnd_practice.rt = [key.rt for key in _key_resp_whichEnd_practice_allKeys]
        
        # *polygon_highlight_practice* updates
        if polygon_highlight_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_highlight_practice.frameNStart = frameN  # exact frame index
            polygon_highlight_practice.tStart = t  # local t and not account for scr refresh
            polygon_highlight_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_highlight_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_highlight_practice.setAutoDraw(True)
        if polygon_highlight_practice.status == STARTED:  # only update if drawing
            polygon_highlight_practice.setOpacity(opSelect)
            polygon_highlight_practice.setPos(posSelect)
        
        # *polygon_background* updates
        if polygon_background.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_background.frameNStart = frameN  # exact frame index
            polygon_background.tStart = t  # local t and not account for scr refresh
            polygon_background.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_background, 'tStartRefresh')  # time at next scr refresh
            polygon_background.setAutoDraw(True)
        if polygon_background.status == STARTED:  # only update if drawing
            polygon_background.setFillColor([0,0,0])
            polygon_background.setLineColor([0,0,0])
        #Model choice
        if corrAns == 5:
            continueRoutine = False
        
        if corrAns != 5:
            if len(whichKey) > 0: #make sure it's not the previous response other no need to add it
                if key_resp_which_practice.keys == "1" and key_resp_which_practice.keys != whichKey[-1]:
                    opSelect  = 1
                    posSelect = (poly1txtChoose_practice.pos)
                    whichKey.append("1")
                if key_resp_which_practice.keys == "2" and key_resp_which_practice.keys != whichKey[-1]:
                    opSelect  = 1
                    posSelect = (poly2txtChoose_practice.pos)
                    whichKey.append("2")
                if key_resp_which_practice.keys == "3" and key_resp_which_practice.keys != whichKey[-1]:
                    opSelect  = 1
                    posSelect = (poly3txtChoose_practice.pos)
                    whichKey.append("3")
                if key_resp_which_practice.keys == "4" and key_resp_which_practice.keys != whichKey[-1]:
                    opSelect  = 1
                    posSelect = (poly4txtChoose_practice.pos)
                    whichKey.append("4")
                if key_resp_which_practice.keys == "0" and key_resp_which_practice.keys != whichKey[-1]:
                    opSelect  = 1
                    posSelect = (polyZtxtChoose_practice.pos)
                    whichKey.append("0")
            else: #otherwise first time add
                if key_resp_which_practice.keys == "1":
                    opSelect  = 1
                    posSelect = (poly1txtChoose_practice.pos)
                    whichKey.append("1")
                if key_resp_which_practice.keys == "2":
                    opSelect  = 1
                    posSelect = (poly2txtChoose_practice.pos)
                    whichKey.append("2")
                if key_resp_which_practice.keys == "3":
                    opSelect  = 1
                    posSelect = (poly3txtChoose_practice.pos)
                    whichKey.append("3")
                if key_resp_which_practice.keys == "4":
                    opSelect  = 1
                    posSelect = (poly4txtChoose_practice.pos)
                    whichKey.append("4")
                if key_resp_which_practice.keys == "0":
                    opSelect  = 1
                    posSelect = (polyZtxtChoose_practice.pos)
                    whichKey.append("0")
            if key_resp_whichEnd_practice.keys:
                if len(key_resp_whichEnd_practice.keys) > 0 and not key_resp_which_practice.keys: 
                    spacelen_which = len(key_resp_whichEnd_practice.keys) #where we don't have a key response we can to know the length of spaces list
                if len(key_resp_whichEnd_practice.keys) > spacelen_which:
                    whichKey.append("space")
            
        
        #remove response if not complete
        if corrAns != 5:
            if whichKey:
                if whichKey[-1] == "space" and len(whichKey) > 1:
                    continueRoutine = False
        
        # *which_text_practice* updates
        if which_text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            which_text_practice.frameNStart = frameN  # exact frame index
            which_text_practice.tStart = t  # local t and not account for scr refresh
            which_text_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(which_text_practice, 'tStartRefresh')  # time at next scr refresh
            which_text_practice.setAutoDraw(True)
        if which_text_practice.status == STARTED:  # only update if drawing
            which_text_practice.setColor('white', colorSpace='rgb')
            which_text_practice.setText('Use the keyboard to input the number of the square you controlled. \nIf you think you controlled none of the squares, type 0.  \n\nPress the spacebar to submit the final response')
        
        # *polygon_1Choose_practice* updates
        if polygon_1Choose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1Choose_practice.frameNStart = frameN  # exact frame index
            polygon_1Choose_practice.tStart = t  # local t and not account for scr refresh
            polygon_1Choose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1Choose_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_1Choose_practice.setAutoDraw(True)
        if polygon_1Choose_practice.status == STARTED:  # only update if drawing
            polygon_1Choose_practice.setFillColor(c1)
            polygon_1Choose_practice.setLineColor([1,1,1])
        
        # *poly1txtChoose_practice* updates
        if poly1txtChoose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly1txtChoose_practice.frameNStart = frameN  # exact frame index
            poly1txtChoose_practice.tStart = t  # local t and not account for scr refresh
            poly1txtChoose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly1txtChoose_practice, 'tStartRefresh')  # time at next scr refresh
            poly1txtChoose_practice.setAutoDraw(True)
        if poly1txtChoose_practice.status == STARTED:  # only update if drawing
            poly1txtChoose_practice.setColor('black', colorSpace='rgb')
        
        # *polygon_2Choose_practice* updates
        if polygon_2Choose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2Choose_practice.frameNStart = frameN  # exact frame index
            polygon_2Choose_practice.tStart = t  # local t and not account for scr refresh
            polygon_2Choose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2Choose_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_2Choose_practice.setAutoDraw(True)
        if polygon_2Choose_practice.status == STARTED:  # only update if drawing
            polygon_2Choose_practice.setFillColor(c2)
            polygon_2Choose_practice.setLineColor([1,1,1])
        
        # *poly2txtChoose_practice* updates
        if poly2txtChoose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly2txtChoose_practice.frameNStart = frameN  # exact frame index
            poly2txtChoose_practice.tStart = t  # local t and not account for scr refresh
            poly2txtChoose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly2txtChoose_practice, 'tStartRefresh')  # time at next scr refresh
            poly2txtChoose_practice.setAutoDraw(True)
        if poly2txtChoose_practice.status == STARTED:  # only update if drawing
            poly2txtChoose_practice.setColor('black', colorSpace='rgb')
        
        # *polygon_3Choose_practice* updates
        if polygon_3Choose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3Choose_practice.frameNStart = frameN  # exact frame index
            polygon_3Choose_practice.tStart = t  # local t and not account for scr refresh
            polygon_3Choose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3Choose_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_3Choose_practice.setAutoDraw(True)
        if polygon_3Choose_practice.status == STARTED:  # only update if drawing
            polygon_3Choose_practice.setFillColor(c3)
            polygon_3Choose_practice.setLineColor([1,1,1])
        
        # *poly3txtChoose_practice* updates
        if poly3txtChoose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly3txtChoose_practice.frameNStart = frameN  # exact frame index
            poly3txtChoose_practice.tStart = t  # local t and not account for scr refresh
            poly3txtChoose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly3txtChoose_practice, 'tStartRefresh')  # time at next scr refresh
            poly3txtChoose_practice.setAutoDraw(True)
        if poly3txtChoose_practice.status == STARTED:  # only update if drawing
            poly3txtChoose_practice.setColor('black', colorSpace='rgb')
        
        # *polygon_4Choose_practice* updates
        if polygon_4Choose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4Choose_practice.frameNStart = frameN  # exact frame index
            polygon_4Choose_practice.tStart = t  # local t and not account for scr refresh
            polygon_4Choose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4Choose_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_4Choose_practice.setAutoDraw(True)
        if polygon_4Choose_practice.status == STARTED:  # only update if drawing
            polygon_4Choose_practice.setFillColor(c4)
            polygon_4Choose_practice.setLineColor([1,1,1])
        
        # *poly4txtChoose_practice* updates
        if poly4txtChoose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly4txtChoose_practice.frameNStart = frameN  # exact frame index
            poly4txtChoose_practice.tStart = t  # local t and not account for scr refresh
            poly4txtChoose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly4txtChoose_practice, 'tStartRefresh')  # time at next scr refresh
            poly4txtChoose_practice.setAutoDraw(True)
        if poly4txtChoose_practice.status == STARTED:  # only update if drawing
            poly4txtChoose_practice.setColor('black', colorSpace='rgb')
        
        # *polygon_ZChoose_practice* updates
        if polygon_ZChoose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_ZChoose_practice.frameNStart = frameN  # exact frame index
            polygon_ZChoose_practice.tStart = t  # local t and not account for scr refresh
            polygon_ZChoose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_ZChoose_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_ZChoose_practice.setAutoDraw(True)
        if polygon_ZChoose_practice.status == STARTED:  # only update if drawing
            polygon_ZChoose_practice.setFillColor([0,0,0])
        
        # *polyZtxtChoose_practice* updates
        if polyZtxtChoose_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polyZtxtChoose_practice.frameNStart = frameN  # exact frame index
            polyZtxtChoose_practice.tStart = t  # local t and not account for scr refresh
            polyZtxtChoose_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polyZtxtChoose_practice, 'tStartRefresh')  # time at next scr refresh
            polyZtxtChoose_practice.setAutoDraw(True)
        if polyZtxtChoose_practice.status == STARTED:  # only update if drawing
            polyZtxtChoose_practice.setColor('black', colorSpace='rgb')
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in which_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "which_practice"-------
    for thisComponent in which_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_which_practice.keys in ['', [], None]:  # No response was made
        key_resp_which_practice.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           key_resp_which_practice.corr = 1;  # correct non-response
        else:
           key_resp_which_practice.corr = 0;  # failed to respond (incorrectly)
    # store data for practiceTrials (TrialHandler)
    practiceTrials.addData('key_resp_which_practice.keys',key_resp_which_practice.keys)
    practiceTrials.addData('key_resp_which_practice.corr', key_resp_which_practice.corr)
    if key_resp_which_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_which_practice.rt', key_resp_which_practice.rt)
    practiceTrials.addData('key_resp_which_practice.started', key_resp_which_practice.tStartRefresh)
    practiceTrials.addData('key_resp_which_practice.stopped', key_resp_which_practice.tStopRefresh)
    # check responses
    if key_resp_whichEnd_practice.keys in ['', [], None]:  # No response was made
        key_resp_whichEnd_practice.keys = None
    practiceTrials.addData('key_resp_whichEnd_practice.keys',key_resp_whichEnd_practice.keys)
    if key_resp_whichEnd_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_whichEnd_practice.rt', key_resp_whichEnd_practice.rt)
    practiceTrials.addData('key_resp_whichEnd_practice.started', key_resp_whichEnd_practice.tStartRefresh)
    practiceTrials.addData('key_resp_whichEnd_practice.stopped', key_resp_whichEnd_practice.tStopRefresh)
    practiceTrials.addData('polygon_highlight_practice.started', polygon_highlight_practice.tStartRefresh)
    practiceTrials.addData('polygon_highlight_practice.stopped', polygon_highlight_practice.tStopRefresh)
    practiceTrials.addData('polygon_background.started', polygon_background.tStartRefresh)
    practiceTrials.addData('polygon_background.stopped', polygon_background.tStopRefresh)
    practiceTrials.addData('whichKey', whichKey);
    practiceTrials.addData('which_text_practice.started', which_text_practice.tStartRefresh)
    practiceTrials.addData('which_text_practice.stopped', which_text_practice.tStopRefresh)
    practiceTrials.addData('polygon_1Choose_practice.started', polygon_1Choose_practice.tStartRefresh)
    practiceTrials.addData('polygon_1Choose_practice.stopped', polygon_1Choose_practice.tStopRefresh)
    practiceTrials.addData('poly1txtChoose_practice.started', poly1txtChoose_practice.tStartRefresh)
    practiceTrials.addData('poly1txtChoose_practice.stopped', poly1txtChoose_practice.tStopRefresh)
    practiceTrials.addData('polygon_2Choose_practice.started', polygon_2Choose_practice.tStartRefresh)
    practiceTrials.addData('polygon_2Choose_practice.stopped', polygon_2Choose_practice.tStopRefresh)
    practiceTrials.addData('poly2txtChoose_practice.started', poly2txtChoose_practice.tStartRefresh)
    practiceTrials.addData('poly2txtChoose_practice.stopped', poly2txtChoose_practice.tStopRefresh)
    practiceTrials.addData('polygon_3Choose_practice.started', polygon_3Choose_practice.tStartRefresh)
    practiceTrials.addData('polygon_3Choose_practice.stopped', polygon_3Choose_practice.tStopRefresh)
    practiceTrials.addData('poly3txtChoose_practice.started', poly3txtChoose_practice.tStartRefresh)
    practiceTrials.addData('poly3txtChoose_practice.stopped', poly3txtChoose_practice.tStopRefresh)
    practiceTrials.addData('polygon_4Choose_practice.started', polygon_4Choose_practice.tStartRefresh)
    practiceTrials.addData('polygon_4Choose_practice.stopped', polygon_4Choose_practice.tStopRefresh)
    practiceTrials.addData('poly4txtChoose_practice.started', poly4txtChoose_practice.tStartRefresh)
    practiceTrials.addData('poly4txtChoose_practice.stopped', poly4txtChoose_practice.tStopRefresh)
    practiceTrials.addData('polygon_ZChoose_practice.started', polygon_ZChoose_practice.tStartRefresh)
    practiceTrials.addData('polygon_ZChoose_practice.stopped', polygon_ZChoose_practice.tStopRefresh)
    practiceTrials.addData('polyZtxtChoose_practice.started', polyZtxtChoose_practice.tStartRefresh)
    practiceTrials.addData('polyZtxtChoose_practice.stopped', polyZtxtChoose_practice.tStopRefresh)
    # the Routine "which_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "confidence_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_conf_practice.keys = []
    key_resp_conf_practice.rt = []
    _key_resp_conf_practice_allKeys = []
    key_resp_confEnd_practice.keys = []
    key_resp_confEnd_practice.rt = []
    _key_resp_confEnd_practice_allKeys = []
    key_resp_conf_practice.clearEvents()
    Conf = []
    conf_spacelen = 0
    slider_conf_practice.reset()
    # keep track of which components have finished
    confidence_practiceComponents = [key_resp_conf_practice, key_resp_confEnd_practice, conf_text_practice, slider_conf_practice]
    for thisComponent in confidence_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    confidence_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "confidence_practice"-------
    while continueRoutine:
        # get current time
        t = confidence_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=confidence_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_conf_practice* updates
        waitOnFlip = False
        if key_resp_conf_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_conf_practice.frameNStart = frameN  # exact frame index
            key_resp_conf_practice.tStart = t  # local t and not account for scr refresh
            key_resp_conf_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_conf_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_conf_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_conf_practice.clock.reset)  # t=0 on next screen flip
        if key_resp_conf_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_conf_practice.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _key_resp_conf_practice_allKeys.extend(theseKeys)
            if len(_key_resp_conf_practice_allKeys):
                key_resp_conf_practice.keys = _key_resp_conf_practice_allKeys[-1].name  # just the last key pressed
                key_resp_conf_practice.rt = _key_resp_conf_practice_allKeys[-1].rt
        
        # *key_resp_confEnd_practice* updates
        waitOnFlip = False
        if key_resp_confEnd_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_confEnd_practice.frameNStart = frameN  # exact frame index
            key_resp_confEnd_practice.tStart = t  # local t and not account for scr refresh
            key_resp_confEnd_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_confEnd_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_confEnd_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_confEnd_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_confEnd_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_confEnd_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_confEnd_practice.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_confEnd_practice_allKeys.extend(theseKeys)
            if len(_key_resp_confEnd_practice_allKeys):
                key_resp_confEnd_practice.keys = [key.name for key in _key_resp_confEnd_practice_allKeys]  # storing all keys
                key_resp_confEnd_practice.rt = [key.rt for key in _key_resp_confEnd_practice_allKeys]
        
        # *conf_text_practice* updates
        if conf_text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            conf_text_practice.frameNStart = frameN  # exact frame index
            conf_text_practice.tStart = t  # local t and not account for scr refresh
            conf_text_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(conf_text_practice, 'tStartRefresh')  # time at next scr refresh
            conf_text_practice.setAutoDraw(True)
        if qOn == 0:
            continueRoutine = False
        
        if qOn == 1:
            if len(practiceConf) > 0: #make sure it's not the previous response other no need to add it
                if key_resp_conf_practice.keys == "1" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("1")
                    slider_conf_practice.markerPos = 1
                if key_resp_conf_practice.keys == "2" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("2")
                    slider_conf_practice.markerPos = 2
                if key_resp_conf_practice.keys == "3" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("3")
                    slider_conf_practice.markerPos = 3
                if key_resp_conf_practice.keys == "4" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("4")
                    slider_conf_practice.markerPos = 4
                if key_resp_conf_practice.keys == "5" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("5")
                    slider_conf_practice.markerPos = 5
                if key_resp_conf_practice.keys == "6" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("6")
                    slider_conf_practice.markerPos = 6
                if key_resp_conf_practice.keys == "7" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("7")
                    slider_conf_practice.markerPos = 7
                if key_resp_conf_practice.keys == "8" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("8")
                    slider_conf_practice.markerPos = 8
                if key_resp_conf_practice.keys == "9" and key_resp_conf_practice.keys != Conf[-1]:
                    Conf.append("9")
                    slider_conf_practice.markerPos = 9
            else: #otherwise first time add
                if key_resp_conf_practice.keys == "1":
                    Conf.append("1")
                    slider_conf_practice.markerPos = 1
                if key_resp_conf_practice.keys == "2":
                    Conf.append("2")
                    slider_conf_practice.markerPos = 2
                if key_resp_conf_practice.keys == "3":
                    Conf.append("3")
                    slider_conf_practice.markerPos = 3
                if key_resp_conf_practice.keys == "4":
                    Conf.append("4")
                    slider_conf_practice.markerPos = 4
                if key_resp_conf_practice.keys == "5":
                    Conf.append("5")
                    slider_conf_practice.markerPos = 5
                if key_resp_conf_practice.keys == "6":
                    Conf.append("6")
                    slider_conf_practice.markerPos = 6
                if key_resp_conf_practice.keys == "7":
                    Conf.append("7")
                    slider_conf_practice.markerPos = 7
                if key_resp_conf_practice.keys == "8":
                    Conf.append("8")
                    slider_conf_practice.markerPos = 8
                if key_resp_conf_practice.keys == "9":
                    Conf.append("9")
                    slider_conf_practice.markerPos = 9
                  
            if key_resp_confEnd_practice.keys:
                if len(key_resp_confEnd_practice.keys) > 0 and not key_resp_conf_practice.keys: 
                    conf_spacelen = len(key_resp_confEnd_practice.keys) #where we don't have a key response we can to know the length of spaces list
                if len(key_resp_confEnd_practice.keys) > conf_spacelen:
                    Conf.append("space")
            
        #remove response if not complete
        if qOn == 1:
            if Conf:
                if Conf[-1] == "space" and len(Conf) > 1:
                    continueRoutine = False
        
        # *slider_conf_practice* updates
        if slider_conf_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_conf_practice.frameNStart = frameN  # exact frame index
            slider_conf_practice.tStart = t  # local t and not account for scr refresh
            slider_conf_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_conf_practice, 'tStartRefresh')  # time at next scr refresh
            slider_conf_practice.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in confidence_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "confidence_practice"-------
    for thisComponent in confidence_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_conf_practice.keys in ['', [], None]:  # No response was made
        key_resp_conf_practice.keys = None
    practiceTrials.addData('key_resp_conf_practice.keys',key_resp_conf_practice.keys)
    if key_resp_conf_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_conf_practice.rt', key_resp_conf_practice.rt)
    practiceTrials.addData('key_resp_conf_practice.started', key_resp_conf_practice.tStartRefresh)
    practiceTrials.addData('key_resp_conf_practice.stopped', key_resp_conf_practice.tStopRefresh)
    # check responses
    if key_resp_confEnd_practice.keys in ['', [], None]:  # No response was made
        key_resp_confEnd_practice.keys = None
    practiceTrials.addData('key_resp_confEnd_practice.keys',key_resp_confEnd_practice.keys)
    if key_resp_confEnd_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_confEnd_practice.rt', key_resp_confEnd_practice.rt)
    practiceTrials.addData('conf_text_practice.started', conf_text_practice.tStartRefresh)
    practiceTrials.addData('conf_text_practice.stopped', conf_text_practice.tStopRefresh)
    practiceTrials.addData('Conf', Conf);
    # the Routine "confidence_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "agent_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_agent_practice.keys = []
    key_resp_agent_practice.rt = []
    _key_resp_agent_practice_allKeys = []
    key_resp_agentEnd_practice.keys = []
    key_resp_agentEnd_practice.rt = []
    _key_resp_agentEnd_practice_allKeys = []
    key_resp_agent_practice.clearEvents()
    Agent = []
    agent_spacelen = 0
    slider_agent_practice.reset()
    # keep track of which components have finished
    agent_practiceComponents = [key_resp_agent_practice, key_resp_agentEnd_practice, agent_text_practice, slider_agent_practice]
    for thisComponent in agent_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    agent_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "agent_practice"-------
    while continueRoutine:
        # get current time
        t = agent_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=agent_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_agent_practice* updates
        waitOnFlip = False
        if key_resp_agent_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_agent_practice.frameNStart = frameN  # exact frame index
            key_resp_agent_practice.tStart = t  # local t and not account for scr refresh
            key_resp_agent_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_agent_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_agent_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_agent_practice.clock.reset)  # t=0 on next screen flip
        if key_resp_agent_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_agent_practice.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _key_resp_agent_practice_allKeys.extend(theseKeys)
            if len(_key_resp_agent_practice_allKeys):
                key_resp_agent_practice.keys = _key_resp_agent_practice_allKeys[-1].name  # just the last key pressed
                key_resp_agent_practice.rt = _key_resp_agent_practice_allKeys[-1].rt
        
        # *key_resp_agentEnd_practice* updates
        waitOnFlip = False
        if key_resp_agentEnd_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_agentEnd_practice.frameNStart = frameN  # exact frame index
            key_resp_agentEnd_practice.tStart = t  # local t and not account for scr refresh
            key_resp_agentEnd_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_agentEnd_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_agentEnd_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_agentEnd_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_agentEnd_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_agentEnd_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_agentEnd_practice.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_agentEnd_practice_allKeys.extend(theseKeys)
            if len(_key_resp_agentEnd_practice_allKeys):
                key_resp_agentEnd_practice.keys = [key.name for key in _key_resp_agentEnd_practice_allKeys]  # storing all keys
                key_resp_agentEnd_practice.rt = [key.rt for key in _key_resp_agentEnd_practice_allKeys]
        
        # *agent_text_practice* updates
        if agent_text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            agent_text_practice.frameNStart = frameN  # exact frame index
            agent_text_practice.tStart = t  # local t and not account for scr refresh
            agent_text_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(agent_text_practice, 'tStartRefresh')  # time at next scr refresh
            agent_text_practice.setAutoDraw(True)
        if qOn == 0:
            continueRoutine = False
        
        if qOn == 1:
            if len(Agent) > 0: #make sure it's not the previous response other no need to add it
                if key_resp_agent_practice.keys == "1" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("1")
                    slider_agent_practice.markerPos = 1
                if key_resp_agent_practice.keys == "2" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("2")
                    slider_agent_practice.markerPos = 2
                if key_resp_agent_practice.keys == "3" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("3")
                    slider_agent_practice.markerPos = 3
                if key_resp_agent_practice.keys == "4" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("4")
                    slider_agent_practice.markerPos = 4
                if key_resp_agent_practice.keys == "5" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("5")
                    slider_agent_practice.markerPos = 5
                if key_resp_agent_practice.keys == "6" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("6")
                    slider_agent_practice.markerPos = 6
                if key_resp_agent_practice.keys == "7" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("7")
                    slider_agent_practice.markerPos = 7
                if key_resp_agent_practice.keys == "8" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("8")
                    slider_agent_practice.markerPos = 8
                if key_resp_agent_practice.keys == "9" and key_resp_agent_practice.keys != Agent[-1]:
                    Agent.append("9")
                    slider_agent_practice.markerPos = 9
            else: #otherwise first time add
                if key_resp_agent_practice.keys == "1":
                    Agent.append("1")
                    slider_agent_practice.markerPos = 1
                if key_resp_agent_practice.keys == "2":
                    Agent.append("2")
                    slider_agent_practice.markerPos = 2
                if key_resp_agent_practice.keys == "3":
                    Agent.append("3")
                    slider_agent_practice.markerPos = 3
                if key_resp_agent_practice.keys == "4":
                    Agent.append("4")
                    slider_agent_practice.markerPos = 4
                if key_resp_agent_practice.keys == "5":
                    Agent.append("5")
                    slider_agent_practice.markerPos = 5
                if key_resp_agent_practice.keys == "6":
                    Agent.append("6")
                    slider_agent_practice.markerPos = 6
                if key_resp_agent_practice.keys == "7":
                    Agent.append("7")
                    slider_agent_practice.markerPos = 7
                if key_resp_agent_practice.keys == "8":
                    Agent.append("8")
                    slider_agent_practice.markerPos = 8
                if key_resp_agent_practice.keys == "9":
                    Agent.append("9")
                    slider_agent_practice.markerPos = 9
                  
            if key_resp_agentEnd_practice.keys:
                if len(key_resp_agentEnd_practice.keys) > 0 and not key_resp_agent_practice.keys: 
                    agent_spacelen = len(key_resp_agentEnd_practice.keys) #where we don't have a key response we can to know the length of spaces list
                if len(key_resp_agentEnd_practice.keys) > agent_spacelen:
                    Agent.append("space")
            
        #remove response if not complete
        if qOn == 1:
            if Agent:
                if Agent[-1] == "space" and len(Agent) > 1:
                    continueRoutine = False
            
        
        # *slider_agent_practice* updates
        if slider_agent_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_agent_practice.frameNStart = frameN  # exact frame index
            slider_agent_practice.tStart = t  # local t and not account for scr refresh
            slider_agent_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_agent_practice, 'tStartRefresh')  # time at next scr refresh
            slider_agent_practice.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in agent_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "agent_practice"-------
    for thisComponent in agent_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_agent_practice.keys in ['', [], None]:  # No response was made
        key_resp_agent_practice.keys = None
    practiceTrials.addData('key_resp_agent_practice.keys',key_resp_agent_practice.keys)
    if key_resp_agent_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_agent_practice.rt', key_resp_agent_practice.rt)
    practiceTrials.addData('key_resp_agent_practice.started', key_resp_agent_practice.tStartRefresh)
    practiceTrials.addData('key_resp_agent_practice.stopped', key_resp_agent_practice.tStopRefresh)
    # check responses
    if key_resp_agentEnd_practice.keys in ['', [], None]:  # No response was made
        key_resp_agentEnd_practice.keys = None
    practiceTrials.addData('key_resp_agentEnd_practice.keys',key_resp_agentEnd_practice.keys)
    if key_resp_agentEnd_practice.keys != None:  # we had a response
        practiceTrials.addData('key_resp_agentEnd_practice.rt', key_resp_agentEnd_practice.rt)
    practiceTrials.addData('Agent', Agent);
    # the Routine "agent_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feed_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_feedpractice.keys = []
    key_resp_feedpractice.rt = []
    _key_resp_feedpractice_allKeys = []
    zeroAns = ' '
    cpf1 = [0,0,0]
    p1f = [-1,-1,-1]
    if corrAns != 5:
        cpf1 = colour[order[(corrAns - 1)]]
    if corrAns == 0:
        cpf1 = [0,0,0]
        zeroAns = "This was a trial where you did not control any of the squares. \nLook out for these, and respond with a 0 to the first question."
    
    # keep track of which components have finished
    feed_practiceComponents = [feedpractice_text, key_resp_feedpractice, polygon_1Feedback_practice, poly1txtFeedback_practice, feedbackTxt_zer0]
    for thisComponent in feed_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feed_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feed_practice"-------
    while continueRoutine:
        # get current time
        t = feed_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feed_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedpractice_text* updates
        if feedpractice_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedpractice_text.frameNStart = frameN  # exact frame index
            feedpractice_text.tStart = t  # local t and not account for scr refresh
            feedpractice_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedpractice_text, 'tStartRefresh')  # time at next scr refresh
            feedpractice_text.setAutoDraw(True)
        if feedpractice_text.status == STARTED:  # only update if drawing
            feedpractice_text.setColor([1,1,1], colorSpace='rgb')
        
        # *key_resp_feedpractice* updates
        waitOnFlip = False
        if key_resp_feedpractice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_feedpractice.frameNStart = frameN  # exact frame index
            key_resp_feedpractice.tStart = t  # local t and not account for scr refresh
            key_resp_feedpractice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_feedpractice, 'tStartRefresh')  # time at next scr refresh
            key_resp_feedpractice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_feedpractice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_feedpractice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_feedpractice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_feedpractice.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_feedpractice_allKeys.extend(theseKeys)
            if len(_key_resp_feedpractice_allKeys):
                key_resp_feedpractice.keys = _key_resp_feedpractice_allKeys[-1].name  # just the last key pressed
                key_resp_feedpractice.rt = _key_resp_feedpractice_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *polygon_1Feedback_practice* updates
        if polygon_1Feedback_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1Feedback_practice.frameNStart = frameN  # exact frame index
            polygon_1Feedback_practice.tStart = t  # local t and not account for scr refresh
            polygon_1Feedback_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1Feedback_practice, 'tStartRefresh')  # time at next scr refresh
            polygon_1Feedback_practice.setAutoDraw(True)
        if polygon_1Feedback_practice.status == STARTED:  # only update if drawing
            polygon_1Feedback_practice.setFillColor(cpf1)
        
        # *poly1txtFeedback_practice* updates
        if poly1txtFeedback_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly1txtFeedback_practice.frameNStart = frameN  # exact frame index
            poly1txtFeedback_practice.tStart = t  # local t and not account for scr refresh
            poly1txtFeedback_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly1txtFeedback_practice, 'tStartRefresh')  # time at next scr refresh
            poly1txtFeedback_practice.setAutoDraw(True)
        if poly1txtFeedback_practice.status == STARTED:  # only update if drawing
            poly1txtFeedback_practice.setColor(p1f, colorSpace='rgb')
            poly1txtFeedback_practice.setText(corrAns)
        if corrAns == 5:
            continueRoutine = False
        
        # *feedbackTxt_zer0* updates
        if feedbackTxt_zer0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedbackTxt_zer0.frameNStart = frameN  # exact frame index
            feedbackTxt_zer0.tStart = t  # local t and not account for scr refresh
            feedbackTxt_zer0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedbackTxt_zer0, 'tStartRefresh')  # time at next scr refresh
            feedbackTxt_zer0.setAutoDraw(True)
        if feedbackTxt_zer0.status == STARTED:  # only update if drawing
            feedbackTxt_zer0.setColor('white', colorSpace='rgb')
            feedbackTxt_zer0.setText(zeroAns)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feed_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feed_practice"-------
    for thisComponent in feed_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "feed_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "warning_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    warn_resp_practice.keys = []
    warn_resp_practice.rt = []
    _warn_resp_practice_allKeys = []
    # keep track of which components have finished
    warning_practiceComponents = [warn_text_practice, warn_resp_practice]
    for thisComponent in warning_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    warning_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "warning_practice"-------
    while continueRoutine:
        # get current time
        t = warning_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=warning_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *warn_text_practice* updates
        if warn_text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_text_practice.frameNStart = frameN  # exact frame index
            warn_text_practice.tStart = t  # local t and not account for scr refresh
            warn_text_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_text_practice, 'tStartRefresh')  # time at next scr refresh
            warn_text_practice.setAutoDraw(True)
        
        # *warn_resp_practice* updates
        waitOnFlip = False
        if warn_resp_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_resp_practice.frameNStart = frameN  # exact frame index
            warn_resp_practice.tStart = t  # local t and not account for scr refresh
            warn_resp_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_resp_practice, 'tStartRefresh')  # time at next scr refresh
            warn_resp_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(warn_resp_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(warn_resp_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if warn_resp_practice.status == STARTED and not waitOnFlip:
            theseKeys = warn_resp_practice.getKeys(keyList=['space'], waitRelease=False)
            _warn_resp_practice_allKeys.extend(theseKeys)
            if len(_warn_resp_practice_allKeys):
                warn_resp_practice.keys = _warn_resp_practice_allKeys[-1].name  # just the last key pressed
                warn_resp_practice.rt = _warn_resp_practice_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if warn == 0 or qOn == 0:
            continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in warning_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "warning_practice"-------
    for thisComponent in warning_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practiceTrials.addData('warn_text_practice.started', warn_text_practice.tStartRefresh)
    practiceTrials.addData('warn_text_practice.stopped', warn_text_practice.tStopRefresh)
    # check responses
    if warn_resp_practice.keys in ['', [], None]:  # No response was made
        warn_resp_practice.keys = None
    practiceTrials.addData('warn_resp_practice.keys',warn_resp_practice.keys)
    if warn_resp_practice.keys != None:  # we had a response
        practiceTrials.addData('warn_resp_practice.rt', warn_resp_practice.rt)
    practiceTrials.addData('warn_resp_practice.started', warn_resp_practice.tStartRefresh)
    practiceTrials.addData('warn_resp_practice.stopped', warn_resp_practice.tStopRefresh)
    # the Routine "warning_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "warning_mouse_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    warnX  = 0
    warnY  = 0
    warn_mouse_practice_resp.keys = []
    warn_mouse_practice_resp.rt = []
    _warn_mouse_practice_resp_allKeys = []
    # keep track of which components have finished
    warning_mouse_practiceComponents = [warn_mouse_practice_resp, warn_mouse_practice_text]
    for thisComponent in warning_mouse_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    warning_mouse_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "warning_mouse_practice"-------
    while continueRoutine:
        # get current time
        t = warning_mouse_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=warning_mouse_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        def moveAlarm(vec, minPer):
            count = 0
            alarm = 0
            for ind in range(1,len(vec)):
                if abs(vec[ind]-(vec[ind-1])) == 0:
                    count += 1
            if (count/len(vec)) > minPer:
                alarm = 1
            return alarm
        warnX = moveAlarm(mouseX, 0.9);
        warnY = moveAlarm(mouseY, 0.9);
        # Don't show if something has moved in x or y, or you've been warned about something else.
        if warnX  == 0 or warnY == 0 or warn == 1:
            continueRoutine = False;
        
        # *warn_mouse_practice_resp* updates
        waitOnFlip = False
        if warn_mouse_practice_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_mouse_practice_resp.frameNStart = frameN  # exact frame index
            warn_mouse_practice_resp.tStart = t  # local t and not account for scr refresh
            warn_mouse_practice_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_mouse_practice_resp, 'tStartRefresh')  # time at next scr refresh
            warn_mouse_practice_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(warn_mouse_practice_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(warn_mouse_practice_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if warn_mouse_practice_resp.status == STARTED and not waitOnFlip:
            theseKeys = warn_mouse_practice_resp.getKeys(keyList=['space'], waitRelease=False)
            _warn_mouse_practice_resp_allKeys.extend(theseKeys)
            if len(_warn_mouse_practice_resp_allKeys):
                warn_mouse_practice_resp.keys = _warn_mouse_practice_resp_allKeys[-1].name  # just the last key pressed
                warn_mouse_practice_resp.rt = _warn_mouse_practice_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *warn_mouse_practice_text* updates
        if warn_mouse_practice_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_mouse_practice_text.frameNStart = frameN  # exact frame index
            warn_mouse_practice_text.tStart = t  # local t and not account for scr refresh
            warn_mouse_practice_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_mouse_practice_text, 'tStartRefresh')  # time at next scr refresh
            warn_mouse_practice_text.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in warning_mouse_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "warning_mouse_practice"-------
    for thisComponent in warning_mouse_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practiceTrials.addData('warnX',warnX)
    practiceTrials.addData('warnY',warnY)
    practiceTrials.addData('warn_mouse_practice_text.started', warn_mouse_practice_text.tStartRefresh)
    practiceTrials.addData('warn_mouse_practice_text.stopped', warn_mouse_practice_text.tStopRefresh)
    # the Routine "warning_mouse_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'practiceTrials'


# ------Prepare to start Routine "trial_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_trial_instruct.keys = []
key_resp_trial_instruct.rt = []
_key_resp_trial_instruct_allKeys = []
# keep track of which components have finished
trial_instructComponents = [instructTrial_text, key_resp_trial_instruct]
for thisComponent in trial_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
trial_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "trial_instruct"-------
while continueRoutine:
    # get current time
    t = trial_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=trial_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructTrial_text* updates
    if instructTrial_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructTrial_text.frameNStart = frameN  # exact frame index
        instructTrial_text.tStart = t  # local t and not account for scr refresh
        instructTrial_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructTrial_text, 'tStartRefresh')  # time at next scr refresh
        instructTrial_text.setAutoDraw(True)
    
    # *key_resp_trial_instruct* updates
    waitOnFlip = False
    if key_resp_trial_instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_trial_instruct.frameNStart = frameN  # exact frame index
        key_resp_trial_instruct.tStart = t  # local t and not account for scr refresh
        key_resp_trial_instruct.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_trial_instruct, 'tStartRefresh')  # time at next scr refresh
        key_resp_trial_instruct.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_trial_instruct.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_trial_instruct.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_trial_instruct.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_trial_instruct.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_trial_instruct_allKeys.extend(theseKeys)
        if len(_key_resp_trial_instruct_allKeys):
            key_resp_trial_instruct.keys = _key_resp_trial_instruct_allKeys[-1].name  # just the last key pressed
            key_resp_trial_instruct.rt = _key_resp_trial_instruct_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trial_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial_instruct"-------
for thisComponent in trial_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "trial_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
condition = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(condSelect),
    seed=None, name='condition')
thisExp.addLoop(condition)  # add the loop to the experiment
thisCondition = condition.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisCondition.rgb)
if thisCondition != None:
    for paramName in thisCondition:
        exec('{} = thisCondition[paramName]'.format(paramName))

for thisCondition in condition:
    currentLoop = condition
    # abbreviate parameter names if possible (e.g. rgb = thisCondition.rgb)
    if thisCondition != None:
        for paramName in thisCondition:
            exec('{} = thisCondition[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fix"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixComponents = [fixtext]
    for thisComponent in fixComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fix"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixtext* updates
        if fixtext.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixtext.frameNStart = frameN  # exact frame index
            fixtext.tStart = t  # local t and not account for scr refresh
            fixtext.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixtext, 'tStartRefresh')  # time at next scr refresh
            fixtext.setAutoDraw(True)
        if fixtext.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixtext.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixtext.tStop = t  # not accounting for scr refresh
                fixtext.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixtext, 'tStopRefresh')  # time at next scr refresh
                fixtext.setAutoDraw(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fix"-------
    for thisComponent in fixComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_trialEnd.keys = []
    key_resp_trialEnd.rt = []
    _key_resp_trialEnd_allKeys = []
    # Rezero assert tracking variables
    logRow = 0 #iterated through within trial
    colour =  [[-0.4196,0.6000,0.7804], [0.7255,0.4588,-0.8981], [1.000,0.2784,0.2784], [0.4588,0.4039,0.9843]]
    order = [0,1,2,3]
    c1 = colour[order[0]]
    c2 = colour[order[1]]
    c3 = colour[order[2]]
    c4 = colour[order[3]]
    sloth=[10000,10000,10000,10000]
    bgc = [0,0,0]
    warn = 1
    (mouseX,mouseY) = ([],[])
    track_deltaAngle = []
    track_deltaDist = []
    track_deltaX = []
    track_deltaY = []
    track_SpatOffX = []
    track_SpatOffY = []
    track_a = []
    track_sloth = []
    track_wrap = []
    # Rezero position tracking variables
    poly1x = []
    poly1y = []
    poly2x = []
    poly2y = []
    poly3x = []
    poly3y = []
    poly4x = []
    poly4y = []
    # Zero out object position variables
    spos1 = []
    spos2 = []
    spos3 = []
    spos4 = []
    # Track presses
    track_Env_key = []
    track_Env_T = []
    track_Model_key = []
    track_Model_T = []
    # Start mouse position
    fmouse = mouse.getPos()
    mouseX.append(fmouse[0])
    mouseY.append(fmouse[1])
    # Randomise start position
    sposListX = []
    sposListY = []
    polys = 4
    while 1:
        countX = 0
        countY = 0
        sposListX = normal(0,0.2,polys)
        sposListY = normal(0,0.2,polys)
        sqrsize = 0.35
        for itemX in sposListX:
            if itemX < (sqrsize) and itemX > -sqrsize:
            #if itemX < (winX) and itemX > 0:
                countX += 1
        for itemY in sposListY:
            if itemY < (sqrsize) and itemY > -sqrsize:
            #if itemY < (winY) and itemY > 0:
                countY += 1
        if countX == polys and countY == polys:
            break
    spos1 = (sposListX[0],sposListY[0])
    spos2 = (sposListX[1],sposListY[1])
    spos3 = (sposListX[2],sposListY[2])
    spos4 = (sposListX[3],sposListY[3])
    
    # Remove mouse from visibility
    win.mouseVisible = False
    # Decide side
    side = [1,2];
    key_resp_side.clearEvents()
    key_resp_model.clearEvents()
    TrialCount +=1
    # setup some python lists for storing info about the mouse
    gotValidClick = False  # until a click is received
    key_resp_side.keys = []
    key_resp_side.rt = []
    _key_resp_side_allKeys = []
    key_resp_model.keys = []
    key_resp_model.rt = []
    _key_resp_model_allKeys = []
    polygon_1.setFillColor(c1)
    polygon_2.setFillColor(c2)
    polygon_3.setFillColor(c3)
    polygon_4.setFillColor(c4)
    # keep track of which components have finished
    trialComponents = [key_resp_trialEnd, background, foreground, mouse, key_resp_side, key_resp_model, polygon_1, polygon_1txt, polygon_2, polygon_2txt, polygon_3, polygon_3txt, polygon_4, polygon_4txt]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_trialEnd* updates
        waitOnFlip = False
        if key_resp_trialEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_trialEnd.frameNStart = frameN  # exact frame index
            key_resp_trialEnd.tStart = t  # local t and not account for scr refresh
            key_resp_trialEnd.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_trialEnd, 'tStartRefresh')  # time at next scr refresh
            key_resp_trialEnd.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_trialEnd.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_trialEnd.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_trialEnd.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_trialEnd.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_trialEnd_allKeys.extend(theseKeys)
            if len(_key_resp_trialEnd_allKeys):
                key_resp_trialEnd.keys = _key_resp_trialEnd_allKeys[-1].name  # just the last key pressed
                key_resp_trialEnd.rt = _key_resp_trialEnd_allKeys[-1].rt
        
        # *background* updates
        if background.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            background.frameNStart = frameN  # exact frame index
            background.tStart = t  # local t and not account for scr refresh
            background.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(background, 'tStartRefresh')  # time at next scr refresh
            background.setAutoDraw(True)
        if background.status == STARTED:  # only update if drawing
            background.setFillColor(bgc)
        
        # *foreground* updates
        if foreground.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            foreground.frameNStart = frameN  # exact frame index
            foreground.tStart = t  # local t and not account for scr refresh
            foreground.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(foreground, 'tStartRefresh')  # time at next scr refresh
            foreground.setAutoDraw(True)
        if foreground.status == STARTED:  # only update if drawing
            foreground.setFillColor([0,0,0])
        def distAng(side,sloth,preMouse,objPrev, currVar, dirAngle, logRow):
            (prevX,prevY) = objPrev # obj xy or mouse xy?
            (currX,currY) = mouse.getPos()
            (prevMX,prevMY)=(preMouse[0],preMouse[1])
            (winX,winY) = (0.75,0.35)
            #set number of objects
            nsqr = 4 #place holder for number of AI squares 
            wrap = 0
            #%% Distance -
            deltaX = (currX-prevMX[logRow])
            deltaY = (currY-prevMY[logRow])
            #%calculate the angle of motion of the mouse
            if deltaX == prevMX[logRow] and deltaY == prevMY[logRow]:
                deltaAngle = NaN
            elif deltaX >= 0 and deltaY >= 0: #%In quadrant I
                deltaAngle = abs(math.degrees(math.atan(deltaY/deltaX)))
            elif deltaX <= 0 and deltaY >= 0: #%In quadrant II
                deltaAngle = 180 - abs(math.degrees(math.atan(deltaY/deltaX)))
            elif deltaX <= 0 and deltaY <= 0: #%In quadrant III
                deltaAngle = 180 + abs(math.degrees(math.atan(deltaY/deltaX)))
            elif deltaX >= 0 and deltaY <= 0: #%In quadrant IV
                deltaAngle = 360 - abs(math.degrees(math.atan(deltaY/deltaX))) 
            #%hypotenuse of movement (overall distance moved across XY)
            deltaDist = (math.sqrt((deltaX)**2+(deltaY)**2))
            #%% Generate Movement of the Distracter Squares %%
            #%preallocate offset variable
            a = np.empty(nsqr, 'float')
            a.fill(np.nan)
            #%movement
            NewX= np.zeros(nsqr)
            NewY= np.zeros(nsqr)
            if deltaX == 0 and deltaY == 0:
                NewX = prevX
                NewY = prevY
                SpatOffX = np.zeros(nsqr)
                SpatOffY = np.zeros(nsqr)
            #    %if there is no change in the mouse position, do nothing
            else: #%if the mouse has changed,
                SpatOffX = np.zeros(nsqr)
                SpatOffY = np.zeros(nsqr)
                for k in range(0,nsqr): # %place all distracter squares in new position
                    if side[0] == 1:
                         if prevX[k] > 0:
                                j = k+4 #use the second or first environment
                         else:
                                j   = k
                    elif side[0] == 2:
                        if prevX[k] < 0:
                                j = k+4 #use the second or first environment
                        else:
                                j   = k
                    a[k] = (deltaAngle - dirAngle[k][logRow]) + currVar[j][logRow]# %calculate the angle of movement of each square based on base angle, mouse movement angle and add variability based on distribution timeline
            #        %define angle calculations per quadrant
                    if ((90 >= a[k]) and (a[k] >= 0)) or ((-270 >= a[k]) and (a[k] >= -360)) or ((450 >= a[k]) and (a[k] >= 360)): #%in quadrant I
                            SpatOffX[k] = (deltaDist/sloth[k])*math.degrees(math.cos(math.radians(a[k])))
                            SpatOffY[k] = (deltaDist/sloth[k])*math.degrees(math.sin(math.radians(a[k])))
                    elif ((180 >= a[k]) and (a[k] >= 90)) or ((-180 >= a[k]) and (a[k] >= -270)) or ((540 >= a[k]) and (a[k] >= 450)): #%in quadrant II
                            SpatOffX[k] = -(deltaDist/sloth[k])*math.degrees(math.cos(math.radians(180-a[k])))
                            SpatOffY[k] = (deltaDist/sloth[k])*math.degrees(math.sin(math.radians(180-a[k])))
                    elif ((270 >= a[k]) and (a[k] >=180)) or ((-90 >= a[k]) and (a[k] >= -180)) or ((630 >= a[k]) and (a[k] >= 540)): #%in quadrant III
                            SpatOffX[k] = -(deltaDist/sloth[k])*math.degrees(math.cos(math.radians(180+a[k])))
                            SpatOffY[k] = -(deltaDist/sloth[k])*math.degrees(math.sin(math.radians(180+a[k])))
                    elif ((360 >= a[k]) and (a[k] >= 270)) or ((0 >= a[k]) and (a[k] >= -90)) or ((720 >= a[k]) and (a[k]>= 630)): #%in quadrant III
                            SpatOffX[k] = (deltaDist/sloth[k])*math.degrees(math.cos(math.radians(360-a[k])))
                            SpatOffY[k] = -(deltaDist/sloth[k])*math.degrees(math.sin(math.radians(360-a[k])))   
                    else:
                        print('ERROR - calculated angle outside specified quadrants')
            #        %% Define new locations
                    NewX[k] = prevX[k] + (SpatOffX[k]/sloth[k])
                    NewY[k] = prevY[k] + (SpatOffY[k]/sloth[k])
            #        %wrap if new locations are off the screen
                    wrap = 0
                    if NewX[k] >= winX:
                        NewX[k] = (NewX[k]-(winX*2))
                        wrap = 1
                    elif NewX[k] <= -winX:
                        NewX[k] = (NewX[k]+(winX*2))
                        wrap = 3
            #        %y
                    if NewY[k] >= winY:
                        NewY[k] = (NewY[k]-(winY*2))
                        wrap = 2
                    elif NewY[k] <= -winY:
                        NewY[k] = (NewY[k]+(winY*2))
                        wrap = 4
            logRow = logRow +1; #%add one to the number of rows in the data log
            #   %% Output values
            
            return(NewX, NewY, currX, currY, logRow, deltaAngle, deltaDist, deltaX, deltaY, SpatOffX, SpatOffY, a, sloth, wrap);
        
        #model choice
        if key_resp_model.keys:
            if key_resp_model.keys[-1] == '1': 
                bgc = [-0.4196,0.6000,0.7804]
                sloth =[5,2.5,2.5,2.5]
                if track_Model_key:
                    if track_Model_key[-1] != '1':
                        track_Model_key.append('1')
                        track_Model_T.append(t)
                else:
                    track_Model_key.append('1')
                    track_Model_T.append(t) 
            elif key_resp_model.keys[-1] == '2':
                bgc = [0.7255,0.4588,-0.8981]
                sloth =[2.5,5,2.5,2.5]
                if track_Model_key:
                    if track_Model_key[-1] != '2':
                        track_Model_key.append('2')
                        track_Model_T.append(t)
                else:
                    track_Model_key.append('2')
                    track_Model_T.append(t) 
            elif key_resp_model.keys[-1] == '3':
                bgc = [1.000,0.2784,0.2784]
                sloth =[2.5,2.5,5,2.5]
                if track_Model_key:
                    if track_Model_key[-1] != '3':
                        track_Model_key.append('3')
                        track_Model_T.append(t)
                else:
                    track_Model_key.append('3')
                    track_Model_T.append(t) 
            elif key_resp_model.keys[-1] == '4':
                bgc= [0.4588,0.4039,0.9843]
                sloth =[2.5,2.5,2.5,5]
                if track_Model_key:
                    if track_Model_key[-1] != '4':
                        track_Model_key.append('4')
                        track_Model_T.append(t)
                else:
                    track_Model_key.append('4')
                    track_Model_T.append(t) 
            else:
                bgc= [0,0,0]
                sloth =[2.5,2.5,2.5,2.5]
                if  track_Model_key:
                    if track_Model_key[-1] != 'None':
                        track_Model_key.append('None');
                else:
                    track_Model_key.append('None');
        #end trial on log row
        if logRow >= (450-1):
            continueRoutine = false
        # Calls
        preMouse = (mouseX, mouseY)
        (NewX, NewY, currX, currY,logRow, deltaAngle, deltaDist, deltaX, deltaY, SpatOffX, SpatOffY, a, sloth, wrap) = distAng(side,sloth,preMouse,[[spos1[0],spos2[0],spos3[0],spos4[0]],[spos1[1],spos2[1],spos3[1],spos4[1]]], [S1_E1_Var, S2_E1_Var, S3_E1_Var, S4_E1_Var,S1_E2_Var, S2_E2_Var, S3_E2_Var, S4_E2_Var],[S1_OffsetDir, S2_OffsetDir, S3_OffsetDir, S4_OffsetDir], logRow)
        # Put mouse variables in trialwise tracker
        mouseX.append(currX), 
        mouseY.append(currY)
        # Assignment
        spos1 = (NewX[0], NewY[0])
        spos2 = (NewX[1], NewY[1])
        spos3 = (NewX[2], NewY[2])
        spos4 = (NewX[3], NewY[3])
        
        # If position is reset by ends
        theseKeys2 = key_resp_side.getKeys(keyList=['q', 'r'], waitRelease=False)
        if len(theseKeys2) > 0:
            if theseKeys2[-1].name == "q":
                NewX = normal(-0.4, 0.1, polys)
                NewY = normal(0, 0.1, polys)
                spos1 = (NewX[0], NewY[0])
                spos2 = (NewX[1], NewY[1])
                spos3 = (NewX[2], NewY[2])
                spos4 = (NewX[3], NewY[3]) 
                track_Env_key.append('q');
                track_Env_T.append(t);
                
            if theseKeys2[-1].name == "r":
                NewX = normal(0.4, 0.1, polys)
                NewY = normal(0, 0.1, polys)
                spos1 = (NewX[0], NewY[0])
                spos2 = (NewX[1], NewY[1])
                spos3 = (NewX[2], NewY[2])
                spos4 = (NewX[3], NewY[3])
                track_Env_key.append('r');
                track_Env_T.append(t);
        
        #add polygons to data stream
        poly1x.append(NewX[0])
        poly1y.append(NewY[0])
        poly2x.append(NewX[1])
        poly2y.append(NewY[1])
        poly3x.append(NewX[2])
        poly3y.append(NewY[2])
        poly4x.append(NewX[3])
        poly4y.append(NewY[3])
        # additional tracking variables
        track_deltaAngle.append(deltaAngle)#maybe braket???
        track_deltaDist.append(deltaDist)
        track_deltaX.append(deltaX)
        track_deltaY.append(deltaY)
        track_SpatOffX.append(SpatOffX)
        track_SpatOffY.append(SpatOffY)
        track_a.append(a)
        track_sloth.append(sloth)
        track_wrap.append(wrap)
        # warning if not key press
        if not track_Model_key:
            warn = 1
        else:
            warn = 0
        
        # *key_resp_side* updates
        waitOnFlip = False
        if key_resp_side.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_side.frameNStart = frameN  # exact frame index
            key_resp_side.tStart = t  # local t and not account for scr refresh
            key_resp_side.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_side, 'tStartRefresh')  # time at next scr refresh
            key_resp_side.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_side.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_side.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_side.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_side.getKeys(keyList=['q', 'r'], waitRelease=False)
            _key_resp_side_allKeys.extend(theseKeys)
            if len(_key_resp_side_allKeys):
                key_resp_side.keys = [key.name for key in _key_resp_side_allKeys]  # storing all keys
                key_resp_side.rt = [key.rt for key in _key_resp_side_allKeys]
        
        # *key_resp_model* updates
        waitOnFlip = False
        if key_resp_model.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_model.frameNStart = frameN  # exact frame index
            key_resp_model.tStart = t  # local t and not account for scr refresh
            key_resp_model.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_model, 'tStartRefresh')  # time at next scr refresh
            key_resp_model.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_model.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_model.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_model.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_model.getKeys(keyList=['1', '2', '3', '4'], waitRelease=False)
            _key_resp_model_allKeys.extend(theseKeys)
            if len(_key_resp_model_allKeys):
                key_resp_model.keys = _key_resp_model_allKeys[-1].name  # just the last key pressed
                key_resp_model.rt = _key_resp_model_allKeys[-1].rt
        
        # *polygon_1* updates
        if polygon_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1.frameNStart = frameN  # exact frame index
            polygon_1.tStart = t  # local t and not account for scr refresh
            polygon_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1, 'tStartRefresh')  # time at next scr refresh
            polygon_1.setAutoDraw(True)
        if polygon_1.status == STARTED:  # only update if drawing
            polygon_1.setPos(spos1)
        
        # *polygon_1txt* updates
        if polygon_1txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1txt.frameNStart = frameN  # exact frame index
            polygon_1txt.tStart = t  # local t and not account for scr refresh
            polygon_1txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1txt, 'tStartRefresh')  # time at next scr refresh
            polygon_1txt.setAutoDraw(True)
        if polygon_1txt.status == STARTED:  # only update if drawing
            polygon_1txt.setPos(spos1)
        
        # *polygon_2* updates
        if polygon_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2.frameNStart = frameN  # exact frame index
            polygon_2.tStart = t  # local t and not account for scr refresh
            polygon_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2, 'tStartRefresh')  # time at next scr refresh
            polygon_2.setAutoDraw(True)
        if polygon_2.status == STARTED:  # only update if drawing
            polygon_2.setPos(spos2)
        
        # *polygon_2txt* updates
        if polygon_2txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2txt.frameNStart = frameN  # exact frame index
            polygon_2txt.tStart = t  # local t and not account for scr refresh
            polygon_2txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2txt, 'tStartRefresh')  # time at next scr refresh
            polygon_2txt.setAutoDraw(True)
        if polygon_2txt.status == STARTED:  # only update if drawing
            polygon_2txt.setPos(spos2)
        
        # *polygon_3* updates
        if polygon_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3.frameNStart = frameN  # exact frame index
            polygon_3.tStart = t  # local t and not account for scr refresh
            polygon_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3, 'tStartRefresh')  # time at next scr refresh
            polygon_3.setAutoDraw(True)
        if polygon_3.status == STARTED:  # only update if drawing
            polygon_3.setPos(spos3)
        
        # *polygon_3txt* updates
        if polygon_3txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3txt.frameNStart = frameN  # exact frame index
            polygon_3txt.tStart = t  # local t and not account for scr refresh
            polygon_3txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3txt, 'tStartRefresh')  # time at next scr refresh
            polygon_3txt.setAutoDraw(True)
        if polygon_3txt.status == STARTED:  # only update if drawing
            polygon_3txt.setPos(spos3)
        
        # *polygon_4* updates
        if polygon_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4.frameNStart = frameN  # exact frame index
            polygon_4.tStart = t  # local t and not account for scr refresh
            polygon_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4, 'tStartRefresh')  # time at next scr refresh
            polygon_4.setAutoDraw(True)
        if polygon_4.status == STARTED:  # only update if drawing
            polygon_4.setPos(spos4)
        
        # *polygon_4txt* updates
        if polygon_4txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4txt.frameNStart = frameN  # exact frame index
            polygon_4txt.tStart = t  # local t and not account for scr refresh
            polygon_4txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4txt, 'tStartRefresh')  # time at next scr refresh
            polygon_4txt.setAutoDraw(True)
        if polygon_4txt.status == STARTED:  # only update if drawing
            polygon_4txt.setPos(spos4)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    condition.addData('poly1x',poly1x)
    condition.addData('poly1y',poly1y)
    condition.addData('poly2x',poly2x)
    condition.addData('poly2y',poly2y)
    condition.addData('poly3x',poly3x)
    condition.addData('poly3y',poly3y)
    condition.addData('poly4x',poly4x)
    condition.addData('poly4y',poly4y)
    condition.addData('condSelect',condSelect)
    condition.addData('side',side[0])
    condition.addData('order',order)
    condition.addData('mouseX',mouseX)
    condition.addData('mouseY',mouseY)
    condition.addData('c1',c1)
    condition.addData('c2',c2)
    condition.addData('c3',c3)
    condition.addData('c4',c4)
    condition.addData('track_deltaAngle',track_deltaAngle)
    condition.addData('track_deltaDist',track_deltaDist)
    condition.addData('track_deltaX',track_deltaX)
    condition.addData('track_deltaY',track_deltaY)
    condition.addData('track_SpatOffX',track_SpatOffX)
    condition.addData('track_SpatOffY',track_SpatOffY)
    condition.addData('track_a',track_a)
    condition.addData('track_sloth',track_sloth)
    condition.addData('track_wrap',track_wrap)
    condition.addData('warn',warn);
    condition.addData('track_Env_key',track_Env_key)
    condition.addData('track_Env_T',track_Env_T)
    condition.addData('track_Model_key', track_Model_key)
    condition.addData(',track_Model_T', track_Model_T)
    # store data for condition (TrialHandler)
    condition.addData('mouse.started', mouse.tStartRefresh)
    condition.addData('mouse.stopped', mouse.tStopRefresh)
    # check responses
    if key_resp_side.keys in ['', [], None]:  # No response was made
        key_resp_side.keys = None
    condition.addData('key_resp_side.keys',key_resp_side.keys)
    if key_resp_side.keys != None:  # we had a response
        condition.addData('key_resp_side.rt', key_resp_side.rt)
    condition.addData('key_resp_side.started', key_resp_side.tStartRefresh)
    condition.addData('key_resp_side.stopped', key_resp_side.tStopRefresh)
    condition.addData('polygon_1.started', polygon_1.tStartRefresh)
    condition.addData('polygon_1.stopped', polygon_1.tStopRefresh)
    condition.addData('polygon_2.started', polygon_2.tStartRefresh)
    condition.addData('polygon_2.stopped', polygon_2.tStopRefresh)
    condition.addData('polygon_3.started', polygon_3.tStartRefresh)
    condition.addData('polygon_3.stopped', polygon_3.tStopRefresh)
    condition.addData('polygon_4.started', polygon_4.tStartRefresh)
    condition.addData('polygon_4.stopped', polygon_4.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "which_obj"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_which.keys = []
    key_resp_which.rt = []
    _key_resp_which_allKeys = []
    key_resp_whichEnd.keys = []
    key_resp_whichEnd.rt = []
    _key_resp_whichEnd_allKeys = []
    posSelect = (0, 0.1)
    opSelect  = 0
    key_resp_which.clearEvents()
    whichKey = []
    spacelen_which = 0
    # keep track of which components have finished
    which_objComponents = [key_resp_which, key_resp_whichEnd, polygon_highlight, polygon_background_which, which_text, polygon_1Choose, poly1txtChoose, polygon_2Choose, poly2txtChoose, polygon_3Choose, poly3txtChoose, polygon_4Choose, poly4txtChoose, polygon_ZChoose, polyZtxtChoose]
    for thisComponent in which_objComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    which_objClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "which_obj"-------
    while continueRoutine:
        # get current time
        t = which_objClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=which_objClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_which* updates
        waitOnFlip = False
        if key_resp_which.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_which.frameNStart = frameN  # exact frame index
            key_resp_which.tStart = t  # local t and not account for scr refresh
            key_resp_which.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_which, 'tStartRefresh')  # time at next scr refresh
            key_resp_which.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_which.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_which.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_which.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_which.getKeys(keyList=['0', '1', '2', '3', '4'], waitRelease=False)
            _key_resp_which_allKeys.extend(theseKeys)
            if len(_key_resp_which_allKeys):
                key_resp_which.keys = _key_resp_which_allKeys[-1].name  # just the last key pressed
                key_resp_which.rt = _key_resp_which_allKeys[-1].rt
                # was this correct?
                if (key_resp_which.keys == str(corrAns)) or (key_resp_which.keys == corrAns):
                    key_resp_which.corr = 1
                else:
                    key_resp_which.corr = 0
        
        # *key_resp_whichEnd* updates
        waitOnFlip = False
        if key_resp_whichEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_whichEnd.frameNStart = frameN  # exact frame index
            key_resp_whichEnd.tStart = t  # local t and not account for scr refresh
            key_resp_whichEnd.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_whichEnd, 'tStartRefresh')  # time at next scr refresh
            key_resp_whichEnd.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_whichEnd.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_whichEnd.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_whichEnd.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_whichEnd.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_whichEnd_allKeys.extend(theseKeys)
            if len(_key_resp_whichEnd_allKeys):
                key_resp_whichEnd.keys = [key.name for key in _key_resp_whichEnd_allKeys]  # storing all keys
                key_resp_whichEnd.rt = [key.rt for key in _key_resp_whichEnd_allKeys]
        
        # *polygon_highlight* updates
        if polygon_highlight.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_highlight.frameNStart = frameN  # exact frame index
            polygon_highlight.tStart = t  # local t and not account for scr refresh
            polygon_highlight.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_highlight, 'tStartRefresh')  # time at next scr refresh
            polygon_highlight.setAutoDraw(True)
        if polygon_highlight.status == STARTED:  # only update if drawing
            polygon_highlight.setOpacity(opSelect)
            polygon_highlight.setPos(posSelect)
        
        # *polygon_background_which* updates
        if polygon_background_which.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_background_which.frameNStart = frameN  # exact frame index
            polygon_background_which.tStart = t  # local t and not account for scr refresh
            polygon_background_which.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_background_which, 'tStartRefresh')  # time at next scr refresh
            polygon_background_which.setAutoDraw(True)
        if polygon_background_which.status == STARTED:  # only update if drawing
            polygon_background_which.setFillColor([0,0,0])
            polygon_background_which.setLineColor([0,0,0])
        if len(whichKey) > 0: #make sure it's not the previous response other no need to add it
            if key_resp_which.keys == "1" and key_resp_which.keys != whichKey[-1]:
                opSelect  = 1
                posSelect = (poly1txtChoose.pos)
                whichKey.append("1")
            if key_resp_which.keys == "2" and key_resp_which.keys != whichKey[-1]:
                opSelect  = 1
                posSelect = (poly2txtChoose.pos)
                whichKey.append("2")
            if key_resp_which.keys == "3" and key_resp_which.keys != whichKey[-1]:
                opSelect  = 1
                posSelect = (poly3txtChoose.pos)
                whichKey.append("3")
            if key_resp_which.keys == "4" and key_resp_which.keys != whichKey[-1]:
                opSelect  = 1
                posSelect = (poly4txtChoose.pos)
                whichKey.append("4")
            if key_resp_which.keys == "0" and key_resp_which.keys != whichKey[-1]:
                opSelect  = 1
                posSelect = (polyZtxtChoose.pos)
                whichKey.append("0")
        else: #otherwise first time add
            if key_resp_which.keys == "1":
                opSelect  = 1
                posSelect = (poly1txtChoose.pos)
                whichKey.append("1")
            if key_resp_which.keys == "2":
                opSelect  = 1
                posSelect = (poly2txtChoose.pos)
                whichKey.append("2")
            if key_resp_which.keys == "3":
                opSelect  = 1
                posSelect = (poly3txtChoose.pos)
                whichKey.append("3")
            if key_resp_which.keys == "4":
                opSelect  = 1
                posSelect = (poly4txtChoose.pos)
                whichKey.append("4")
            if key_resp_which.keys == "0":
                opSelect  = 1
                posSelect = (polyZtxtChoose.pos)
                whichKey.append("0")
        if key_resp_whichEnd.keys:
            if len(key_resp_whichEnd.keys) > 0 and not key_resp_which.keys: 
                spacelen_which  = len(key_resp_whichEnd.keys) #where we don't have a key response we can to know the length of spaces list
            if len(key_resp_whichEnd.keys) > spacelen_which:
                whichKey.append("space")
            
        
        #remove response if not complete
        if whichKey:
            if whichKey[-1] == "space" and len(whichKey) > 1:
                continueRoutine = False
        
        
        
        # *which_text* updates
        if which_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            which_text.frameNStart = frameN  # exact frame index
            which_text.tStart = t  # local t and not account for scr refresh
            which_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(which_text, 'tStartRefresh')  # time at next scr refresh
            which_text.setAutoDraw(True)
        if which_text.status == STARTED:  # only update if drawing
            which_text.setColor('white', colorSpace='rgb')
        
        # *polygon_1Choose* updates
        if polygon_1Choose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_1Choose.frameNStart = frameN  # exact frame index
            polygon_1Choose.tStart = t  # local t and not account for scr refresh
            polygon_1Choose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_1Choose, 'tStartRefresh')  # time at next scr refresh
            polygon_1Choose.setAutoDraw(True)
        if polygon_1Choose.status == STARTED:  # only update if drawing
            polygon_1Choose.setFillColor(c1)
            polygon_1Choose.setOpacity(1)
            polygon_1Choose.setPos((-0.12,-0.05))
        
        # *poly1txtChoose* updates
        if poly1txtChoose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly1txtChoose.frameNStart = frameN  # exact frame index
            poly1txtChoose.tStart = t  # local t and not account for scr refresh
            poly1txtChoose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly1txtChoose, 'tStartRefresh')  # time at next scr refresh
            poly1txtChoose.setAutoDraw(True)
        if poly1txtChoose.status == STARTED:  # only update if drawing
            poly1txtChoose.setColor('black', colorSpace='rgb')
        
        # *polygon_2Choose* updates
        if polygon_2Choose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2Choose.frameNStart = frameN  # exact frame index
            polygon_2Choose.tStart = t  # local t and not account for scr refresh
            polygon_2Choose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2Choose, 'tStartRefresh')  # time at next scr refresh
            polygon_2Choose.setAutoDraw(True)
        if polygon_2Choose.status == STARTED:  # only update if drawing
            polygon_2Choose.setFillColor(c2)
            polygon_2Choose.setOpacity(1)
            polygon_2Choose.setPos((0.12,-0.05))
        
        # *poly2txtChoose* updates
        if poly2txtChoose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly2txtChoose.frameNStart = frameN  # exact frame index
            poly2txtChoose.tStart = t  # local t and not account for scr refresh
            poly2txtChoose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly2txtChoose, 'tStartRefresh')  # time at next scr refresh
            poly2txtChoose.setAutoDraw(True)
        if poly2txtChoose.status == STARTED:  # only update if drawing
            poly2txtChoose.setColor('black', colorSpace='rgb')
        
        # *polygon_3Choose* updates
        if polygon_3Choose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3Choose.frameNStart = frameN  # exact frame index
            polygon_3Choose.tStart = t  # local t and not account for scr refresh
            polygon_3Choose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3Choose, 'tStartRefresh')  # time at next scr refresh
            polygon_3Choose.setAutoDraw(True)
        if polygon_3Choose.status == STARTED:  # only update if drawing
            polygon_3Choose.setFillColor(c3)
            polygon_3Choose.setOpacity(1)
            polygon_3Choose.setPos((-0.12, -0.29))
        
        # *poly3txtChoose* updates
        if poly3txtChoose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly3txtChoose.frameNStart = frameN  # exact frame index
            poly3txtChoose.tStart = t  # local t and not account for scr refresh
            poly3txtChoose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly3txtChoose, 'tStartRefresh')  # time at next scr refresh
            poly3txtChoose.setAutoDraw(True)
        if poly3txtChoose.status == STARTED:  # only update if drawing
            poly3txtChoose.setColor('black', colorSpace='rgb')
        
        # *polygon_4Choose* updates
        if polygon_4Choose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4Choose.frameNStart = frameN  # exact frame index
            polygon_4Choose.tStart = t  # local t and not account for scr refresh
            polygon_4Choose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4Choose, 'tStartRefresh')  # time at next scr refresh
            polygon_4Choose.setAutoDraw(True)
        if polygon_4Choose.status == STARTED:  # only update if drawing
            polygon_4Choose.setFillColor(c4)
            polygon_4Choose.setOpacity(1)
            polygon_4Choose.setPos((0.12, -0.29))
        
        # *poly4txtChoose* updates
        if poly4txtChoose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            poly4txtChoose.frameNStart = frameN  # exact frame index
            poly4txtChoose.tStart = t  # local t and not account for scr refresh
            poly4txtChoose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(poly4txtChoose, 'tStartRefresh')  # time at next scr refresh
            poly4txtChoose.setAutoDraw(True)
        if poly4txtChoose.status == STARTED:  # only update if drawing
            poly4txtChoose.setColor('black', colorSpace='rgb')
        
        # *polygon_ZChoose* updates
        if polygon_ZChoose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_ZChoose.frameNStart = frameN  # exact frame index
            polygon_ZChoose.tStart = t  # local t and not account for scr refresh
            polygon_ZChoose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_ZChoose, 'tStartRefresh')  # time at next scr refresh
            polygon_ZChoose.setAutoDraw(True)
        if polygon_ZChoose.status == STARTED:  # only update if drawing
            polygon_ZChoose.setFillColor([0,0,0])
            polygon_ZChoose.setOpacity(1)
            polygon_ZChoose.setPos((0, -0.17))
        
        # *polyZtxtChoose* updates
        if polyZtxtChoose.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polyZtxtChoose.frameNStart = frameN  # exact frame index
            polyZtxtChoose.tStart = t  # local t and not account for scr refresh
            polyZtxtChoose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polyZtxtChoose, 'tStartRefresh')  # time at next scr refresh
            polyZtxtChoose.setAutoDraw(True)
        if polyZtxtChoose.status == STARTED:  # only update if drawing
            polyZtxtChoose.setColor('black', colorSpace='rgb')
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in which_objComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "which_obj"-------
    for thisComponent in which_objComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_which.keys in ['', [], None]:  # No response was made
        key_resp_which.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           key_resp_which.corr = 1;  # correct non-response
        else:
           key_resp_which.corr = 0;  # failed to respond (incorrectly)
    # store data for condition (TrialHandler)
    condition.addData('key_resp_which.keys',key_resp_which.keys)
    condition.addData('key_resp_which.corr', key_resp_which.corr)
    if key_resp_which.keys != None:  # we had a response
        condition.addData('key_resp_which.rt', key_resp_which.rt)
    condition.addData('key_resp_which.started', key_resp_which.tStartRefresh)
    condition.addData('key_resp_which.stopped', key_resp_which.tStopRefresh)
    # check responses
    if key_resp_whichEnd.keys in ['', [], None]:  # No response was made
        key_resp_whichEnd.keys = None
    condition.addData('key_resp_whichEnd.keys',key_resp_whichEnd.keys)
    if key_resp_whichEnd.keys != None:  # we had a response
        condition.addData('key_resp_whichEnd.rt', key_resp_whichEnd.rt)
    condition.addData('key_resp_whichEnd.started', key_resp_whichEnd.tStartRefresh)
    condition.addData('key_resp_whichEnd.stopped', key_resp_whichEnd.tStopRefresh)
    condition.addData('polygon_highlight.started', polygon_highlight.tStartRefresh)
    condition.addData('polygon_highlight.stopped', polygon_highlight.tStopRefresh)
    condition.addData('polygon_background_which.started', polygon_background_which.tStartRefresh)
    condition.addData('polygon_background_which.stopped', polygon_background_which.tStopRefresh)
    condition.addData('whichKey', whichKey);
    condition.addData('which_text.started', which_text.tStartRefresh)
    condition.addData('which_text.stopped', which_text.tStopRefresh)
    condition.addData('polygon_1Choose.started', polygon_1Choose.tStartRefresh)
    condition.addData('polygon_1Choose.stopped', polygon_1Choose.tStopRefresh)
    condition.addData('poly1txtChoose.started', poly1txtChoose.tStartRefresh)
    condition.addData('poly1txtChoose.stopped', poly1txtChoose.tStopRefresh)
    condition.addData('polygon_2Choose.started', polygon_2Choose.tStartRefresh)
    condition.addData('polygon_2Choose.stopped', polygon_2Choose.tStopRefresh)
    condition.addData('poly2txtChoose.started', poly2txtChoose.tStartRefresh)
    condition.addData('poly2txtChoose.stopped', poly2txtChoose.tStopRefresh)
    condition.addData('polygon_3Choose.started', polygon_3Choose.tStartRefresh)
    condition.addData('polygon_3Choose.stopped', polygon_3Choose.tStopRefresh)
    condition.addData('poly3txtChoose.started', poly3txtChoose.tStartRefresh)
    condition.addData('poly3txtChoose.stopped', poly3txtChoose.tStopRefresh)
    condition.addData('polygon_4Choose.started', polygon_4Choose.tStartRefresh)
    condition.addData('polygon_4Choose.stopped', polygon_4Choose.tStopRefresh)
    condition.addData('poly4txtChoose.started', poly4txtChoose.tStartRefresh)
    condition.addData('poly4txtChoose.stopped', poly4txtChoose.tStopRefresh)
    condition.addData('polygon_ZChoose.started', polygon_ZChoose.tStartRefresh)
    condition.addData('polygon_ZChoose.stopped', polygon_ZChoose.tStopRefresh)
    condition.addData('polyZtxtChoose.started', polyZtxtChoose.tStartRefresh)
    condition.addData('polyZtxtChoose.stopped', polyZtxtChoose.tStopRefresh)
    # the Routine "which_obj" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "confidence"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_conf.keys = []
    key_resp_conf.rt = []
    _key_resp_conf_allKeys = []
    key_resp_confEnd.keys = []
    key_resp_confEnd.rt = []
    _key_resp_confEnd_allKeys = []
    key_resp_conf.clearEvents()
    Conf = []
    conf_spacelen = 0
    slider_conf.reset()
    # keep track of which components have finished
    confidenceComponents = [key_resp_conf, key_resp_confEnd, conf_text, slider_conf]
    for thisComponent in confidenceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    confidenceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "confidence"-------
    while continueRoutine:
        # get current time
        t = confidenceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=confidenceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_conf* updates
        waitOnFlip = False
        if key_resp_conf.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_conf.frameNStart = frameN  # exact frame index
            key_resp_conf.tStart = t  # local t and not account for scr refresh
            key_resp_conf.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_conf, 'tStartRefresh')  # time at next scr refresh
            key_resp_conf.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_conf.clock.reset)  # t=0 on next screen flip
        if key_resp_conf.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_conf.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _key_resp_conf_allKeys.extend(theseKeys)
            if len(_key_resp_conf_allKeys):
                key_resp_conf.keys = _key_resp_conf_allKeys[-1].name  # just the last key pressed
                key_resp_conf.rt = _key_resp_conf_allKeys[-1].rt
        
        # *key_resp_confEnd* updates
        waitOnFlip = False
        if key_resp_confEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_confEnd.frameNStart = frameN  # exact frame index
            key_resp_confEnd.tStart = t  # local t and not account for scr refresh
            key_resp_confEnd.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_confEnd, 'tStartRefresh')  # time at next scr refresh
            key_resp_confEnd.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_confEnd.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_confEnd.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_confEnd.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_confEnd.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_confEnd_allKeys.extend(theseKeys)
            if len(_key_resp_confEnd_allKeys):
                key_resp_confEnd.keys = [key.name for key in _key_resp_confEnd_allKeys]  # storing all keys
                key_resp_confEnd.rt = [key.rt for key in _key_resp_confEnd_allKeys]
        
        # *conf_text* updates
        if conf_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            conf_text.frameNStart = frameN  # exact frame index
            conf_text.tStart = t  # local t and not account for scr refresh
            conf_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(conf_text, 'tStartRefresh')  # time at next scr refresh
            conf_text.setAutoDraw(True)
        if len(Conf) > 0: #make sure it's not the previous response other no need to add it
            if key_resp_conf.keys == "1" and key_resp_conf.keys != Conf[-1]:
                Conf.append("1")
                slider_conf.markerPos = 1
            if key_resp_conf.keys == "2" and key_resp_conf.keys != Conf[-1]:
                Conf.append("2")
                slider_conf.markerPos = 2
            if key_resp_conf.keys == "3" and key_resp_conf.keys != Conf[-1]:
                Conf.append("3")
                slider_conf.markerPos = 3
            if key_resp_conf.keys == "4" and key_resp_conf.keys != Conf[-1]:
                Conf.append("4")
                slider_conf.markerPos = 4
            if key_resp_conf.keys == "5" and key_resp_conf.keys != Conf[-1]:
                Conf.append("5")
                slider_conf.markerPos = 5
            if key_resp_conf.keys == "6" and key_resp_conf.keys != Conf[-1]:
                Conf.append("6")
                slider_conf.markerPos = 6
            if key_resp_conf.keys == "7" and key_resp_conf.keys != Conf[-1]:
                Conf.append("7")
                slider_conf.markerPos = 7
            if key_resp_conf.keys == "8" and key_resp_conf.keys != Conf[-1]:
                Conf.append("8")
                slider_conf.markerPos = 8
            if key_resp_conf.keys == "9" and key_resp_conf.keys != Conf[-1]:
                Conf.append("9")
                slider_conf.markerPos = 9
        else: #otherwise first time add
            if key_resp_conf.keys == "1":
                Conf.append("1")
                slider_conf.markerPos = 1
            if key_resp_conf.keys == "2":
                Conf.append("2")
                slider_conf.markerPos = 2
            if key_resp_conf.keys == "3":
                Conf.append("3")
                slider_conf.markerPos = 3
            if key_resp_conf.keys == "4":
                Conf.append("4")
                slider_conf.markerPos = 4
            if key_resp_conf.keys == "5":
                Conf.append("5")
                slider_conf.markerPos = 5
            if key_resp_conf.keys == "6":
                Conf.append("6")
                slider_conf.markerPos = 6
            if key_resp_conf.keys == "7":
                Conf.append("7")
                slider_conf.markerPos = 7
            if key_resp_conf.keys == "8":
                Conf.append("8")
                slider_conf.markerPos = 8
            if key_resp_conf.keys == "9":
                Conf.append("9")
                slider_conf.markerPos = 9
        
        if key_resp_confEnd.keys:
            if len(key_resp_confEnd.keys) > 0 and not key_resp_conf.keys: 
                conf_spacelen = len(key_resp_confEnd.keys) #where we don't have a key response we can to know the length of spaces list
            if len(key_resp_confEnd.keys) > conf_spacelen:
                Conf.append("space")
            
        #remove response if not complete
        if Conf:
            if Conf[-1] == "space" and len(Conf) > 1:
                continueRoutine = False
        
        # *slider_conf* updates
        if slider_conf.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_conf.frameNStart = frameN  # exact frame index
            slider_conf.tStart = t  # local t and not account for scr refresh
            slider_conf.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_conf, 'tStartRefresh')  # time at next scr refresh
            slider_conf.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in confidenceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "confidence"-------
    for thisComponent in confidenceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_conf.keys in ['', [], None]:  # No response was made
        key_resp_conf.keys = None
    condition.addData('key_resp_conf.keys',key_resp_conf.keys)
    if key_resp_conf.keys != None:  # we had a response
        condition.addData('key_resp_conf.rt', key_resp_conf.rt)
    condition.addData('key_resp_conf.started', key_resp_conf.tStartRefresh)
    condition.addData('key_resp_conf.stopped', key_resp_conf.tStopRefresh)
    # check responses
    if key_resp_confEnd.keys in ['', [], None]:  # No response was made
        key_resp_confEnd.keys = None
    condition.addData('key_resp_confEnd.keys',key_resp_confEnd.keys)
    if key_resp_confEnd.keys != None:  # we had a response
        condition.addData('key_resp_confEnd.rt', key_resp_confEnd.rt)
    condition.addData('Conf', Conf);
    # the Routine "confidence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "agent"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_agent.keys = []
    key_resp_agent.rt = []
    _key_resp_agent_allKeys = []
    key_resp_agentEnd.keys = []
    key_resp_agentEnd.rt = []
    _key_resp_agentEnd_allKeys = []
    key_resp_agent.clearEvents()
    Agent = []
    agent_spacelen = 0
    slider_agent.reset()
    # keep track of which components have finished
    agentComponents = [key_resp_agent, key_resp_agentEnd, agent_text, slider_agent]
    for thisComponent in agentComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    agentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "agent"-------
    while continueRoutine:
        # get current time
        t = agentClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=agentClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_agent* updates
        waitOnFlip = False
        if key_resp_agent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_agent.frameNStart = frameN  # exact frame index
            key_resp_agent.tStart = t  # local t and not account for scr refresh
            key_resp_agent.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_agent, 'tStartRefresh')  # time at next scr refresh
            key_resp_agent.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_agent.clock.reset)  # t=0 on next screen flip
        if key_resp_agent.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_agent.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _key_resp_agent_allKeys.extend(theseKeys)
            if len(_key_resp_agent_allKeys):
                key_resp_agent.keys = _key_resp_agent_allKeys[-1].name  # just the last key pressed
                key_resp_agent.rt = _key_resp_agent_allKeys[-1].rt
        
        # *key_resp_agentEnd* updates
        waitOnFlip = False
        if key_resp_agentEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_agentEnd.frameNStart = frameN  # exact frame index
            key_resp_agentEnd.tStart = t  # local t and not account for scr refresh
            key_resp_agentEnd.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_agentEnd, 'tStartRefresh')  # time at next scr refresh
            key_resp_agentEnd.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_agentEnd.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_agentEnd.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_agentEnd.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_agentEnd.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_agentEnd_allKeys.extend(theseKeys)
            if len(_key_resp_agentEnd_allKeys):
                key_resp_agentEnd.keys = [key.name for key in _key_resp_agentEnd_allKeys]  # storing all keys
                key_resp_agentEnd.rt = [key.rt for key in _key_resp_agentEnd_allKeys]
        
        # *agent_text* updates
        if agent_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            agent_text.frameNStart = frameN  # exact frame index
            agent_text.tStart = t  # local t and not account for scr refresh
            agent_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(agent_text, 'tStartRefresh')  # time at next scr refresh
            agent_text.setAutoDraw(True)
        if len(Agent) > 0: #make sure it's not the previous response other no need to add it
            if key_resp_agent.keys == "1" and key_resp_agent.keys != Agent[-1]:
                Agent.append("1")
                slider_agent.markerPos = 1
            if key_resp_agent.keys == "2" and key_resp_agent.keys != Agent[-1]:
                Agent.append("2")
                slider_agent.markerPos = 2
            if key_resp_agent.keys == "3" and key_resp_agent.keys != Agent[-1]:
                Agent.append("3")
                slider_agent.markerPos = 3
            if key_resp_agent.keys == "4" and key_resp_agent.keys != Agent[-1]:
                Agent.append("4")
                slider_agent.markerPos = 4
            if key_resp_agent.keys == "5" and key_resp_agent.keys != Agent[-1]:
                Agent.append("5")
                slider_agent.markerPos = 5
            if key_resp_agent.keys == "6" and key_resp_agent.keys != Agent[-1]:
                Agent.append("6")
                slider_agent.markerPos = 6
            if key_resp_agent.keys == "7" and key_resp_agent.keys != Agent[-1]:
                Agent.append("7")
                slider_agent.markerPos = 7
            if key_resp_agent.keys == "8" and key_resp_agent.keys != Agent[-1]:
                Agent.append("8")
                slider_agent.markerPos = 8
            if key_resp_agent.keys == "9" and key_resp_agent.keys != Agent[-1]:
                Agent.append("9")
                slider_agent.markerPos = 9
        else: #otherwise first time add
            if key_resp_agent.keys == "1":
                Agent.append("1")
                slider_agent.markerPos = 1
            if key_resp_agent.keys == "2":
                Agent.append("2")
                slider_agent.markerPos = 2
            if key_resp_agent.keys == "3":
                Agent.append("3")
                slider_agent.markerPos = 3
            if key_resp_agent.keys == "4":
                Agent.append("4")
                slider_agent.markerPos = 4
            if key_resp_agent.keys == "5":
                Agent.append("5")
                slider_agent.markerPos = 5
            if key_resp_agent.keys == "6":
                Agent.append("6")
                slider_agent.markerPos = 6
            if key_resp_agent.keys == "7":
                Agent.append("7")
                slider_agent.markerPos = 7
            if key_resp_agent.keys == "8":
                Agent.append("8")
                slider_agent.markerPos = 8
            if key_resp_agent.keys == "9":
                Agent.append("9")
                slider_agent.markerPos = 9
              
        if key_resp_agentEnd.keys:
            if len(key_resp_agentEnd.keys) > 0 and not key_resp_agent.keys: 
                agent_spacelen = len(key_resp_agentEnd.keys) #where we don't have a key response we can to know the length of spaces list
            if len(key_resp_agentEnd.keys) > agent_spacelen:
                Agent.append("space")
            
        #remove response if not complete
        if Agent:
            if Agent[-1] == "space" and len(Agent) > 1:
                continueRoutine = False
        
        # *slider_agent* updates
        if slider_agent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_agent.frameNStart = frameN  # exact frame index
            slider_agent.tStart = t  # local t and not account for scr refresh
            slider_agent.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_agent, 'tStartRefresh')  # time at next scr refresh
            slider_agent.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in agentComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "agent"-------
    for thisComponent in agentComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_agent.keys in ['', [], None]:  # No response was made
        key_resp_agent.keys = None
    condition.addData('key_resp_agent.keys',key_resp_agent.keys)
    if key_resp_agent.keys != None:  # we had a response
        condition.addData('key_resp_agent.rt', key_resp_agent.rt)
    condition.addData('key_resp_agent.started', key_resp_agent.tStartRefresh)
    condition.addData('key_resp_agent.stopped', key_resp_agent.tStopRefresh)
    # check responses
    if key_resp_agentEnd.keys in ['', [], None]:  # No response was made
        key_resp_agentEnd.keys = None
    condition.addData('key_resp_agentEnd.keys',key_resp_agentEnd.keys)
    if key_resp_agentEnd.keys != None:  # we had a response
        condition.addData('key_resp_agentEnd.rt', key_resp_agentEnd.rt)
    condition.addData('Agent', Agent);
    # the Routine "agent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "warning"-------
    continueRoutine = True
    # update component parameters for each repeat
    warn_resp.keys = []
    warn_resp.rt = []
    _warn_resp_allKeys = []
    # keep track of which components have finished
    warningComponents = [warn_text, warn_resp]
    for thisComponent in warningComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    warningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "warning"-------
    while continueRoutine:
        # get current time
        t = warningClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=warningClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *warn_text* updates
        if warn_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_text.frameNStart = frameN  # exact frame index
            warn_text.tStart = t  # local t and not account for scr refresh
            warn_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_text, 'tStartRefresh')  # time at next scr refresh
            warn_text.setAutoDraw(True)
        
        # *warn_resp* updates
        waitOnFlip = False
        if warn_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_resp.frameNStart = frameN  # exact frame index
            warn_resp.tStart = t  # local t and not account for scr refresh
            warn_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_resp, 'tStartRefresh')  # time at next scr refresh
            warn_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(warn_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(warn_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if warn_resp.status == STARTED and not waitOnFlip:
            theseKeys = warn_resp.getKeys(keyList=['space'], waitRelease=False)
            _warn_resp_allKeys.extend(theseKeys)
            if len(_warn_resp_allKeys):
                warn_resp.keys = _warn_resp_allKeys[-1].name  # just the last key pressed
                warn_resp.rt = _warn_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if warn == 0:
            continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in warningComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "warning"-------
    for thisComponent in warningComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    condition.addData('warn_text.started', warn_text.tStartRefresh)
    condition.addData('warn_text.stopped', warn_text.tStopRefresh)
    # check responses
    if warn_resp.keys in ['', [], None]:  # No response was made
        warn_resp.keys = None
    condition.addData('warn_resp.keys',warn_resp.keys)
    if warn_resp.keys != None:  # we had a response
        condition.addData('warn_resp.rt', warn_resp.rt)
    condition.addData('warn_resp.started', warn_resp.tStartRefresh)
    condition.addData('warn_resp.stopped', warn_resp.tStopRefresh)
    # the Routine "warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "warning_mouse"-------
    continueRoutine = True
    # update component parameters for each repeat
    warnX = 0
    warnY = 0
    warn_mouse_resp.keys = []
    warn_mouse_resp.rt = []
    _warn_mouse_resp_allKeys = []
    # keep track of which components have finished
    warning_mouseComponents = [warn_mouse_resp, warn_mouse_text]
    for thisComponent in warning_mouseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    warning_mouseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "warning_mouse"-------
    while continueRoutine:
        # get current time
        t = warning_mouseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=warning_mouseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        def moveAlarm(vec, minPer):
            count = 0
            alarm = 0
            for ind in range(1,len(vec)):
                if abs(vec[ind]-(vec[ind-1])) == 0:
                    count += 1
            if (count/len(vec)) > minPer:
                alarm = 1
            
            return alarm
        # Don't show if something has moved in x or y, or you've been warned about something else.
        warnX = moveAlarm(mouseX, 0.9);
        warnY = moveAlarm(mouseY, 0.9);
        if warnX  == 0 or warnY == 0 or warn == 1:
            continueRoutine = False;
        
        # *warn_mouse_resp* updates
        waitOnFlip = False
        if warn_mouse_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_mouse_resp.frameNStart = frameN  # exact frame index
            warn_mouse_resp.tStart = t  # local t and not account for scr refresh
            warn_mouse_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_mouse_resp, 'tStartRefresh')  # time at next scr refresh
            warn_mouse_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(warn_mouse_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(warn_mouse_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if warn_mouse_resp.status == STARTED and not waitOnFlip:
            theseKeys = warn_mouse_resp.getKeys(keyList=['space'], waitRelease=False)
            _warn_mouse_resp_allKeys.extend(theseKeys)
            if len(_warn_mouse_resp_allKeys):
                warn_mouse_resp.keys = _warn_mouse_resp_allKeys[-1].name  # just the last key pressed
                warn_mouse_resp.rt = _warn_mouse_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *warn_mouse_text* updates
        if warn_mouse_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            warn_mouse_text.frameNStart = frameN  # exact frame index
            warn_mouse_text.tStart = t  # local t and not account for scr refresh
            warn_mouse_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(warn_mouse_text, 'tStartRefresh')  # time at next scr refresh
            warn_mouse_text.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in warning_mouseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "warning_mouse"-------
    for thisComponent in warning_mouseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    condition.addData('warnX',warnX)
    condition.addData('warnY',warnY)
    condition.addData('warn_mouse_text.started', warn_mouse_text.tStartRefresh)
    condition.addData('warn_mouse_text.stopped', warn_mouse_text.tStopRefresh)
    # the Routine "warning_mouse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "break_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_break.keys = []
    key_resp_break.rt = []
    _key_resp_break_allKeys = []
    if (TrialCount) % 16 == 0 and (TrialCount) != len(condition.trialList):
        f_blockCount += 1
        b_blockCount -= 1
        sub_text_break = ("This is the end of block @.\nPlease take a break if you need to, but do not exit full screen.\nThere are now $ blocks to go.\n\nWhen you would like to continue press the spacebar.")
        sub_text_break = sub_text_break.replace('@',f_blockCount).replace('$',b_blockCount )
        
    
    
    
    # keep track of which components have finished
    break_1Components = [text_break, key_resp_break]
    for thisComponent in break_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break_1"-------
    while continueRoutine:
        # get current time
        t = break_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_break* updates
        if text_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_break.frameNStart = frameN  # exact frame index
            text_break.tStart = t  # local t and not account for scr refresh
            text_break.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_break, 'tStartRefresh')  # time at next scr refresh
            text_break.setAutoDraw(True)
        if text_break.status == STARTED:  # only update if drawing
            text_break.setText(sub_text_break)
        
        # *key_resp_break* updates
        waitOnFlip = False
        if key_resp_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_break.frameNStart = frameN  # exact frame index
            key_resp_break.tStart = t  # local t and not account for scr refresh
            key_resp_break.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_break, 'tStartRefresh')  # time at next scr refresh
            key_resp_break.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_break.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_break.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_break.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_break.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_break_allKeys.extend(theseKeys)
            if len(_key_resp_break_allKeys):
                key_resp_break.keys = _key_resp_break_allKeys[-1].name  # just the last key pressed
                key_resp_break.rt = _key_resp_break_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if (TrialCount) % 16 != 0 or (TrialCount) == len(condition.trialList):
            continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break_1"-------
    for thisComponent in break_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "break_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'condition'


# ------Prepare to start Routine "endExp"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_expEnd.keys = []
key_resp_expEnd.rt = []
_key_resp_expEnd_allKeys = []
# keep track of which components have finished
endExpComponents = [text, key_resp_expEnd]
for thisComponent in endExpComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endExpClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "endExp"-------
while continueRoutine:
    # get current time
    t = endExpClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endExpClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp_expEnd* updates
    waitOnFlip = False
    if key_resp_expEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_expEnd.frameNStart = frameN  # exact frame index
        key_resp_expEnd.tStart = t  # local t and not account for scr refresh
        key_resp_expEnd.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_expEnd, 'tStartRefresh')  # time at next scr refresh
        key_resp_expEnd.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_expEnd.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_expEnd.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_expEnd.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_expEnd.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_expEnd_allKeys.extend(theseKeys)
        if len(_key_resp_expEnd_allKeys):
            key_resp_expEnd.keys = _key_resp_expEnd_allKeys[-1].name  # just the last key pressed
            key_resp_expEnd.rt = _key_resp_expEnd_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endExpComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "endExp"-------
for thisComponent in endExpComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "endExp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
