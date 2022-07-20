#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Sep  1 13:30:46 2020

@author: Jonathan E Robinson
"""
import pandas as pd
from collections import OrderedDict 
import os

###############################################################################
# Function concatentates columns of a CSV file into a single CSV cell ready for use in psychopy
###INPUTS###
# f = filename.
# starStopList = a start and stop point for the column concatentation.
# nameList = a list of column names to put concate vec into.
###OUPTUTS###
# newRead = a pandas dataFrame containing either loaded or empty columns.
# frep_merge.csv = a csv file containing the concat version of the CSV 
###############################################################################
def csvMerge(f,starStopList,nameList):
    dfRead = pd.DataFrame()
    dfRead = pd.read_csv(f,header=None) #read a csv file
    frep = f.replace('.csv','') #remove .csv for python save
    #make the correctly size dataFrame
    newDf = pd.DataFrame() #empty frame to fill
    colDict = OrderedDict() # starting dictionary object
    #loop round the column names to create keys containing empty lists
    for k in range(0,len(nameList)):#name in nameList:
        colDict[nameList[k]] = [] #for each name make an empty file
    newDf = pd.DataFrame(colDict) #create empty dataFrame with two columns
    #parse objects       
    for i in range(0,len(dfRead)):
        cellList = [] #empty list for cells to be concatenated into
        for j in range(0,len(starStopList)): #move through the end and start point of each column
            if len(starStopList[j]) == 1: #if the item is only one point long do a singular action.
                tmp = dfRead.iloc[i,starStopList[j][0]] #just put single cell in column
            else:
                tmp = list(dfRead.iloc[i,starStopList[j][0]:starStopList[j][1]+1].array)
                #otherwise put the items from start to stop in a list.
            cellList.append(tmp)
            # put in list of cells
        newDf.loc[i]=cellList 
        #add to the given row.
    
    #save out new dataFrame
    savedf(newDf,frep)
    
    return(newDf)    
    
    
###############################################################################
# Function saves csv.
###INPUTS###
# df = a pandas dataFrame containing columns filled by the program
# name = filename
###OUPTUTS###
# saved csv file
###############################################################################
def savedf(df,name):
    df.to_csv(name +'_merged.csv',index=False) #save this to a csv file


###############################################################################    
# Function calls CSVs in folder.
###INPUTS###
#folder = directory to be read
###OUPTUTS###
#saved csv files in script location
###############################################################################
def folderRead(folder,frameL):
    colnames = ['corrAns','S1_E1_Var','S2_E1_Var','S3_E1_Var','S4_E1_Var','S1_E2_Var','S2_E2_Var','S3_E2_Var','S4_E2_Var','S1_OffsetDir','S2_OffsetDir','S3_OffsetDir','S4_OffsetDir']
    for ind, file in enumerate(os.listdir(folder)): #iterate through files in folder
        if file.endswith(".csv"): #if they are csvs
            print(file)
            expLen = list(range(0,(frameL*len(colnames)),frameL))
            parseList = []
            for ind,item in enumerate(expLen):
                if ind == 0:
                    parseList.append([item])
                else:
                    parseList.append([expLen[ind-1]+1,item])
#            x = csvMerge(folder+file,\
#             [[0],[1,900],[901,1800],[1801,2700],[2701,3600],[3601,4500],[4501,5400],[5401,6300],[6301,7200],[7201,8100],[8101,9000],[9001,9900],[9901,10800]],\
#             ['corrAns','S1_E1_Var','S2_E1_Var','S3_E1_Var','S4_E1_Var','S1_E2_Var','S2_E2_Var','S3_E2_Var','S4_E2_Var','S1_OffsetDir','S2_OffsetDir','S3_OffsetDir','S4_OffsetDir'])
            x = csvMerge(folder+file,\
             parseList,\
             colnames)

    return x
#function call
x = folderRead('/home/jrobinson/Desktop/newCSV/', 450)
#folderRead('<UserDirectory>/<TrialcsvDirectory>/')
