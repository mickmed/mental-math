# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 2| Wireframes / Priority Matrix / Functional Components | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / JS MVP | Incomplete
|Day 5| Full Working JS  | Incomplete
|Day 6| Present | Incomplete


## Project Description

This game is Tic Tac Toe.  The game layout is a grid of 9 squares divided equally into 3 rows/columns.  Users will be assigned either an X or 0. The first move will always be assinged  to X.  The user clicks the cell and that cell will display either an X.  The next user will then click on a cell and that will display an O.  Once a user clicks on a cell it is no longer clickable. If a user get's 3 of a kind in a row, column of diagonal then they win.  If all squares are taken without 3 of a kind then no one wins. 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [TTT-Wireframe1-Board-Layout](https://res.cloudinary.com/jkeohan/image/upload/v1537874529/ttt-wireframe1.png)
- [TTT-Wireframe2-Supporting-Logic](https://res.cloudinary.com/jkeohan/image/upload/v1537874520/ttt-wireframe2.png)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

- [TTT-Priority-Matrix](https://res.cloudinary.com/jkeohan/image/upload/v1537891391/ttt-priority-matrix.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Game init
- Selecting box
- Switching Users
- Winning logic for one row only

#### PostMVP 
- Landing Page
- Game reset
- Winning logic for all combo's

## Functional Components

Based on the initial logic defined in the previous  phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

### Landing Page

### Game Initialization

### Playing The Game 

### Winning The Game

### Resetting The Game

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframes | H | 3hrs| 2hrs | 2.5hrs |
| Project Worksheet | M | 1hrs| 0hrs | 0hrs |
| Game Init | H | 3hrs| 0hrs | 0hrs |
| Selecting Box | H | 3hrs|  0hrs  |  0hrs  |
| Switching Players | H | 3hrs|  0hrs  |  0hrs  |
| Winning Logic - One Row Only | H | 4hrs|  0hrs |  0hrs |
| Landing Page | L | 3hrs|  0hrs  | 0hrs  |
| Game Reset| L | 3hrs|  0hrs  |  0hrs  |
| Total | H | 23hrs| 0hrs | 0hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

The code snippet below is used to check for a winner and is called after every move.   It loops over an array of arrays that contain positions assigned to corresponding cells as id's. Such as row 1 is: [[1.1, 1.2, 1.3]].  The cells have been assigned that cooresponding number 

```
function checkWin() {
  let winner = false
  for (let i = 0; i < endgames.length; i++) {
    let n = '';
    for (let e = 0; e < 3; e++) {
      n += document.getElementById(endgames[i][e]).innerText;
    };
    if (n.length === 3) {
      if (n[0] === n[1] && n[0] === n[2]) {
        winner = true;
        setTimeout(function() {
          reset(n[0] + ' wins!');
        }, 10);
      };
    };
  };
  if (moveCount === 9 && !winner) {
    setTimeout(function() {
      reset('It\'s a tie!');
    }, 20);
  };
};
```

**Note**: In [HTML5 ID's can be numbers](https://benfrain.com/when-and-where-you-can-use-numbers-in-id-and-class-names/)

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
