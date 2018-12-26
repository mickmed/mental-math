//set array to collect correct answers
let allCorrectArray = [];
let eqWrapper = document.querySelector('.eq-wrapper');

let randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


let appendEqDiv = () => {
    let eqDiv = document.createElement('div');
    eqDiv.classList.add('equation');
    document.querySelector('.eq-wrapper').appendChild(eqDiv);
    return eqDiv;
}

let eqVals = () => {
    let firstNum = randomNum(1, 100);
    let secondNum = randomNum(1, 100);
    let answer = firstNum + secondNum;
    return [firstNum, secondNum, answer];
}

let buildEqDiv = (eqDiv, eqVals) => {
    let divObj = {};
    let divClass = ["firstNumber", "operand", "secondNumber", "equalsSign", "answer"];
    let divText = [eqVals[0], "+", eqVals[1], "=", eqVals[2]];

    for (i = 0; i < divClass.length; i++) {
        divObj[divClass[i]] = document.createElement("div");
        divObj[divClass[i]].classList.add(divClass[i]);

        for (j = 0; j < divText.length; j++) {
            if (i === j) {

                eqDiv.appendChild(divObj[divClass[i]]).innerText = divText[j];
            }
        }
    }
    return divObj;
}

let appendBtnToEqDiv = (eqDiv) => {
    let checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    eqDiv.appendChild(checkBtn).innerText = "check";
    return checkBtn;
}

let appendChkIcon = () => {
    let chkIcon = document.createElement('div');
    chkIcon.classList.add('check');
    return chkIcon;
}

//https:stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
let strHasNum = (divObj) => {
    let eqDivArr = [];
    for (let val in divObj) {
        if (parseInt(divObj[val].innerText)) {
            eqDivArr.push(divObj[val]);
        }
    }
    return eqDivArr;
}

let getNumsClass = (arr) => {
    classNames = [];
    arr.forEach((e) => {
        classNames.push(e.className);
    })
    return classNames;
}

let removeIndexFromDivArray = (randomIndex, array) => {
    let removedValue = array[randomIndex].innerText;

    return removedValue;
}

let replaceWithInputBox = (randomIndex, array) => {
    array[randomIndex].innerText = "";
    array[randomIndex].innerHTML = "<input type='text' class='user-input'>";
    array[randomIndex].firstChild.focus();
    return array;
}

let getAnswer = () => {

}
//get number sizes, if biggest number is 1 digit user gets 10, 20 for 2, 30 for 3;
let chkNumLength = (eqDivArray) => {
    let nums = [];
    eqDivArray.forEach((el) => {
        if (el.children.length > 0) {
            nums.push(el.children[0].value.length)
        } else {
            nums.push(el.innerText.length);
        }
    })
    //https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
    let longest = nums.reduce(function(a, b) { return a.length > b.length ? a : b; });
    return longest;
}

let updateScrBrd = (score) => {
    let accScore = eq.scoreBoard.innerText;
    eq.scoreBoard.innerText = parseInt(accScore) + parseInt(score);

}

let chkCorrect = (value1, value2) => {
    return parseInt(value1) === parseInt(value2) ? true : false;
}

let styleAnswer = (chkCorrect, checkIcon, eqDiv, checkBtn, eqDivArray, bonus) => {
    if (chkCorrect === true) {
        eqDiv.appendChild(checkIcon).innerHTML = '<i class="far fa-check-square"></i>';
        let score = parseInt(chkNumLength(eqDivArray) * 10);
        updateScrBrd(score);
        checkBtn.innerText = parseInt(score);
        if(bonus !== 'bonus'){
            allCorrectArray.push('correct');
        }
    } else {
        eqDiv.appendChild(checkIcon).innerHTML = '<i class="fas fa-skull-crossbones"></i>';
        checkBtn.innerText = '0';
    }
}

let styleChkdEq = (checkBtn, eqDiv, answer) => {
    console.log('here');
    checkBtn.style.pointerEvents = "none";
    eqDiv.style.backgroundColor = "lightblue";
    eqDiv.style.borderRadius = "10px";
    answer.style.color = "blue";
    if (answer.children.length > 0) {
        answer.children[0].style.color = "blue";
    }
}

let addDivLine = () => {
    let line = document.createElement('div');
    line.classList.add('line');
    eqWrapper.appendChild(line).innerHTML = '<hr>';

}

let addBonusMsg = (bnsMsg) => {
    let bonusMsg = document.createElement('div');
    bonusMsg.classList.add('bonus-msg');
    eqWrapper.appendChild(bonusMsg).innerHTML = bnsMsg;
}

//sum total scores by className
let sumTotals = (divClass) => {
    let totalScores = document.querySelectorAll(divClass);
    let total = 0;
    for (i = 0; i < totalScores.length; i++) {
        if (totalScores[i].children.length > 0) {
            if (isNaN(parseInt(totalScores[i].children[0].value))) {
                totalScores[i].children[0].value = 0;
            }
            total += parseInt(totalScores[i].children[0].value);
        } else {
            total += parseInt(totalScores[i].innerText);
        }
    }
    return total;
}

//make array of classes to be summed
let numsTotalsArr = (arr) => {
    let numsTotals = [];
    arr.forEach((e) => {
        numsTotals.push(sumTotals('.' + e));
    })
    return numsTotals;
}

let appendBonusEq = (bonusEqDiv) => {
    eq.bonusDivVals = numsTotalsArr(eq.eqDivNumsClass);
    eq.bonusDivObj = buildEqDiv(eq.bonusEqDiv, eq.bonusDivVals);
    eq.bonusCheckBtn = appendBtnToEqDiv(eq.bonusEqDiv);
    eq.bonusDivNums = strHasNum(eq.bonusDivObj);
    for (i = 0; i < eq.bonusDivNums.length; i++) {
        replaceWithInputBox(i, eq.bonusDivNums);
    }
    // //hide first two totals - use them later for advance level
    eq.bonusEq = eq.bonusEqDiv.children;
    for (i = 0; i < eq.bonusEq.length - 2; i++) {
        eq.bonusEq[i].style.visibility = "hidden";
    }
}

let bonusEq = () => {
    console.log(eq.eqWrapperLength);
 if (eq.eqWrapperLength === 5) {
    
        addDivLine();
        addBonusMsg('Add missing totals');
        
        if (allCorrectArray = 5) {
            // eq.bonusEqDiv = appendEqDiv();
            // appendBonusEq(eq.bonusEqDiv);
            // console.log(eq.bonusDivNums);
            // eq.bonusCheckBtn.addEventListener('click', () => {
            //     eq.userInput = document.querySelectorAll('.user-input');
            //     eq.userInput = eq.userInput[eq.userInput.length - 1];

            //     let chkBonusEqAns = chkCorrect(eq.userInput.value, eq.bonusDivVals[2]);
                
            //     styleAnswer(chkBonusEqAns, eq.checkIcon, eq.bonusEqDiv, eq.checkBtn, eq.bonusDivNums);
            //     console.log(eq.eqDivNums);
            //     addBonusMsg('You got 200 in bonus');
            //     let bonusScore = 200;
            //     //change button message to bonus score amount
            //     eq.BonusCheckBtn.innerText = bonusScore;
            //     //add bonus points to scoreboard
            //     updateScrBrd(bonusScore);

            // });
            play('bonus');
        }
        console.log('here');
        return false;
    }
}

let chkAnswer = (eq, bonus) => {
    let chkEqAns = chkCorrect(eq.userInput.value, eq.removedValue);
    styleAnswer(chkEqAns, eq.checkIcon, eq.eqDiv, eq.checkBtn, eq.eqDivNums,bonus);
    styleChkdEq(eq.checkBtn, eq.eqDiv, eq.answer);
    if (eq.eqWrapperLength < 5) {
     
        play();
    }
    else{
        bonusEq();
    }
}

let eq = {}

//MAIN PLAY FUNCTIONS
let play = (bonus) => {
    
    if(bonus !== 'bonus'){
        eq.eqDivVals = eqVals();
    }else{
        eq.eqDivVals = numsTotalsArr(eq.eqDivNumsClass);
    }
    eq.eqDiv = appendEqDiv();
    eq.divObj = buildEqDiv(eq.eqDiv, eq.eqDivVals);
    eq.checkBtn = appendBtnToEqDiv(eq.eqDiv);
    eq.checkIcon = appendChkIcon();
    eq.eqDivNums = strHasNum(eq.divObj);
    eq.eqDivNumsClass = getNumsClass(eq.eqDivNums);
    eq.randomIndex = Math.floor(Math.random() * eq.eqDivNums.length)
    eq.removedValue = removeIndexFromDivArray(eq.randomIndex, eq.eqDivNums);
    replaceWithInputBox(eq.randomIndex, eq.eqDivNums);
    eq.answer = document.querySelectorAll('.answer');
    eq.answer = eq.answer[eq.answer.length - 1];
    eq.userInput = document.querySelectorAll('.user-input');
    eq.userInput = eq.userInput[eq.userInput.length - 1];

    eq.scoreBoard = document.querySelector('.score-board');
    eq.eqWrapperLength = eqWrapper.children.length;

    eq.checkBtn.addEventListener("click", () => {
        chkAnswer(eq,bonus);
    });
    eq.userInput.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            chkAnswer(eq,bonus);
        }
    });
}

play();


////TIME OUT FUNCTIONS
let timedOut = () => {
    //stop clickable buttons after
    document.querySelector('.eq-wrapper').lastChild.lastChild.style.pointerEvents = "none";
    let eqDivs = document.querySelectorAll(".equation");
    for (i = 0; i < eqDivs.length; i++) {
        eqDivs[i].style.pointerEvents = "none";
    }
}

let timer = () => {
    let fish = document.querySelector('.fish');
    let timerText = document.querySelector('.timer');
    let fishpic = 10;
    let fishInt = () => {
        let movefish = () => {
            if (fishpic == 600) {
                clearInterval(int);
                // btmLeftFish();
                timerText.innerText = "sorry, you're out of time";
                timedOut();
            } else {
                fishpic++;

                fish.style.left = (fishpic/6) -7 + '%';
                timerText.innerText = 60 - (fishpic / 10).toFixed(0);
            }
        }
        let int = setInterval(movefish, 100);
    }
    fishInt();
}
timer();

let reset = () => {
    document.querySelector('.reset-btn').addEventListener('click', () => {
        location.reload();
    })
}
reset();





// let eqWrapperLength = eqWrapper.children.length;
// let eqDiv = appendEqDiv();
// let eqDivVals = eqVals();
// let divObj = buildEqDiv(eqDiv, eqDivVals);
// let checkBtn = appendBtnToEqDiv(eqDiv);
// let checkIcon = appendChkIcon();
// let eqDivNums = strHasNum(divObj);
// let eqDivNumsClass = getNumsClass(eqDivNums);

// let randomIndex = Math.floor(Math.random() * eqDivNums.length)
// let removedValue = removeIndexFromDivArray(randomIndex, eqDivNums);
// let userInput = document.querySelectorAll('.user-input');
// userInput = (userInput[userInput.length - 1]);
// let answer = document.querySelector('.answer');