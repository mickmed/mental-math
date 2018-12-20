# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|| Project Description | Complete
|Dec 17th| Wireframes / Priority Matrix / Functional Components | Complete
|Dec 18th| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 18th| Pseudocode / actual code | Complete (MVP)
|Dec 19th| Initial Clickable Model  | Complete (MVP)
|Dec 20th| MVP | Complete
|Dec 20th| Quicktime Video
|Dec 21st| Present | Incomplete


## Project Description

Mick's Math Master. 
MVP)
This will be a math learning tool or challenge for elemetary school students. If it goes past MVP there will be advanced levels for adults. The user is presented with a math problem, something simple to start like 3 x 7 = 21. One of the numbers will be randomly generated as blank. The user has to fill in the blank. If they are correct they will score points. If not they will lose points. The user will have a time limit.

POST MVP)
A splash screen will enable users to start at a chosen level, i.e., easy, intermediate, difficult, and choose differnet operaters, i.e., addition, subtraction, etc, and maybe eventually chose combinations. The idea is for each screen to get more and more difficult. A user can buy a hint and lose points and/or time.

## Wireframes

https://drive.google.com/drive/u/1/folders/1BMhmPEywxUAq4Zj3P8MI04r0ZFIFX4Pv

## Priority Matrix

https://drive.google.com/drive/u/1/folders/1hAJNLpwYaLbaU-FitZIxN9SetLw0nPWZ  
1)make basic equation
2)make basic equation with random blank input
3)check answer
4)styling, make game user friendly
4)build points system
5)build timer
6)go to next level

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

MVP)
1)make basic equation
2)make basic equation with random blank input
3)check answer
4)complete styling
4)build points system
5)build timer
6)go to next level



#### PostMVP 

POST MVP)
1)splash screen to choose different levels and different operands
2)advance to more difficult problem
3)implement different operands
4)user can buy a hint and loose points

## Functional Components
input boxes, buttons to choose levels, event listeners, timer, scoreboard.


### Landing Page
Landing page will be post MVP.
1) array of options to choose levels
2) array of options to choose operands
3) links to functions that choose options
3) event listener to move to selected items


### Game Initialization

### Playing The Game 
1) Build an array of numbers between one and 12. Array will generate each number before and after the operand. 
2) Display the equation on screen with .append and use Math.random() to choose one number to be removed.
3) Use .append to replace the removed number with an input box.
4) Create answer of equation and match against user answer. Build function that checks equation answer against user input.
5) Function to inform user of success or failure.
6) Function to increase score.
7) Goto next level.

### Winning The Game
Ideally, a player never wins but just advances to higher levels.

### Resetting The Game
Event listener click for location reload().

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Making Equation with random input boxes | 1 | 4| 5 | 5 |
| Checking for users input | 2 | 3| 4| 4 |
| Styling | 3 | 3|  5|  |
| Points System | 3 | 5|  5|  |
| Adding Second Level with more equations | 4 | 3Hrs | 
| Adding Splash Screen | 5 | 2hrs |
| Total | H | 15hrs|  |  |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Random Generator | This will generate random numbers and random deletions| 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
let buildEquationDivs = (eqWrapper, eqWrapperLength) => {
        let equation = document.createElement('div');
        equation.classList.add('equation');
        document.querySelector('.eq-wrapper').appendChild(equation);

        //build equation divs
        let divObj = {};
        let divClass = [
            "firstDivNumber",
            "operand",
            "secondDivNumber",
            "equalsSign",
            "answer"
        ];
        let divText = [firstStoredNumber, "+", secondStoredNumber, "=", answerStored];

        for (i = 0; i < divClass.length; i++) {
            divObj[divClass[i]] = document.createElement("div");
            divObj[divClass[i]].classList.add(divClass[i]);

            for (j = 0; j < divText.length; j++) {
                if (i === j) {
                    document
                        .querySelectorAll(".equation")[eqWrapperLength]
                        .appendChild(divObj[divClass[i]]).innerText = divText[j];
                }
            }
        }
        let checkBtn = document.createElement("button");
        checkBtn.classList.add("check-btn");
        document.querySelectorAll(".equation")[eqWrapperLength].appendChild(checkBtn).innerText = "check";
        return divObj;
    }
    let divObj = buildEquationDivs(eqWrapper, eqWrapperLength);
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object