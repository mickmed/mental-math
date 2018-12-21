let play = () => {
    //make random numbers
    let randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let firstStoredNumber = randomNum(1, 100);
    let secondStoredNumber = randomNum(1, 100);
    let answerStored = parseInt(firstStoredNumber) + parseInt(secondStoredNumber);

    //create wrapper div
    let eqWrapper = document.querySelector('.eq-wrapper');
    let eqWrapperLength = eqWrapper.children.length;

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

    let eqDivArray = [];
    eqDivArray.push(divObj.firstDivNumber, divObj.secondDivNumber, divObj.answer);

    let replaceWithInputBox = (randomIndex, array) => {
        array[randomIndex].innerText = "";
        array[randomIndex].innerHTML = "<input type='text' class='user-input'>";
        return array;
    }

    let removeIndexFromDivArray = (randomIndex, array) => {
        let removedValue = array[randomIndex].innerText;
        replaceWithInputBox(randomIndex, array);
        return removedValue;
    }
    let randomIndex = Math.floor(Math.random() * eqDivArray.length)
    let removedValue = removeIndexFromDivArray(randomIndex, eqDivArray);



    //get number sizes, if biggest number is 1 digit user gets 10, 20 for 2, 30 for 3;
    let checkForNumberSizes = (eqDivArray) => {
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
    

//////CHECK FOR WIN FUNCTION
    let checkWin = (removedValue, eqWrapperLength) => {
        //add event listener to check button
        document.querySelectorAll(".check-btn")[eqWrapperLength].addEventListener("click", function() {
            //get user input 
            let userInput = document.querySelectorAll(".user-input")[eqWrapperLength].value;
            let check = document.createElement('div');
            check.classList.add('check');
            //compare user input to removed value
            if (parseInt(userInput) === parseInt(removedValue)) {
                document.querySelectorAll(".equation")[eqWrapperLength].appendChild(check).innerHTML = '<i class="far fa-check-square"></i>';
                //update score
                let score = parseInt(checkForNumberSizes(eqDivArray)*10);
                document.querySelectorAll(".check-btn")[eqWrapperLength].innerText = parseInt(score);
                let accScore = document.querySelector('.score-board').innerText;
                accScore = parseInt(accScore) + parseInt(score);
                document.querySelector('.score-board').innerText = accScore;
            } else {
                document.querySelectorAll(".equation")[eqWrapperLength].appendChild(check).innerHTML = '<i class="fas fa-skull-crossbones"></i>';

                document.querySelectorAll(".check-btn")[eqWrapperLength].innerText = '0';

            }
            //turn off buttons after each checked click
            document.querySelectorAll(".check-btn")[eqWrapperLength].style.pointerEvents = "none";
            document.querySelectorAll(".equation")[eqWrapperLength].style.backgroundColor = "lightblue";
            document.querySelectorAll(".equation")[eqWrapperLength].style.borderRadius = "10px";
            document.querySelectorAll(".answer")[eqWrapperLength].style.color = "blue";


        ////POST EQUATION BONUS ACTIVITY
           //after last equation is complete
            if (eqWrapperLength === 4) {
                //add dividing line and bonus message
                let line = document.createElement('div');
                line.classList.add('line');
                document.querySelectorAll(".equation")[eqWrapperLength].parentNode.appendChild(line).innerHTML = '<hr>';

                let bonusMsg = document.createElement('div');
                bonusMsg.classList.add('bonus-msg');
                document.querySelectorAll(".equation")[eqWrapperLength].parentNode.appendChild(bonusMsg).innerHTML = 'Add Totals for Bonus';

                 //make totals after five equations
                let totalsDiv = buildEquationDivs(eqWrapper, eqWrapperLength + 1);
                let totalsDivArray = [totalsDiv.firstDivNumber, totalsDiv.secondDivNumber, totalsDiv.answer];
                for (i = 0; i < totalsDivArray.length; i++) {
                    replaceWithInputBox(i, totalsDivArray);
                }

                //hide first two totals - use for advance level
                let totChildren = eqWrapper.lastChild.children;
                for (i = 0; i < totChildren.length - 2; i++) {
                    totChildren[i].style.visibility = "hidden";
                }

               
                //add total scores
                let totalScores = document.querySelectorAll(".answer");
                let total = 0;
                for (i = 0; i < totalScores.length-1; i++) {
                    console.log(totalScores[i].children.length);
                    if (totalScores[i].children.length > 0) {
                        console.log(totalScores[i].children[0].value);
                        total += parseInt(totalScores[i].children[0].value);
                    }else{
                        total += parseInt(totalScores[i].innerText);
                        console.log(parseInt(totalScores[i].innerText))
                    }
                }
               
                //add event listener for bonus points
                console.log(eqWrapper.lastChild.lastChild.previousSibling);
                eqWrapper.lastChild.lastChild.addEventListener("click", () => {
                    let userInputArray = document.querySelectorAll('input');
                    //check if all five equations are correct
                    let missingInput = () => {
                        for(i=0;i<userInputArray.length-3;i++){
                            if(userInputArray[i].value === ''){
                                return false;
                            }else{
                                return true;
                            }
                        }
                    }
                   
                    console.log(missingInput());
                    if(missingInput() === true){
                        eqWrapper.lastChild.lastChild.innerText = '200';
                        console.log(total);
                        console.log(eqWrapper.lastChild.lastChild.previousSibling.value);
                        if(total === eqWrapper.lastChild.lastChild.previousSibling.firstChild.value){console.log('wow');
                        }
                    }else{
                        eqWrapper.lastChild.lastChild.innerText = '0';
                        document.querySelector('.bonus-msg').innerText = "Sorry - you must get 5 correct answers to play bonus";
                        // console.log(eqWrapper.lastChild.lastChild.previousSibling.firstChild.value);


                    }
                });
                //end play
                return false;
            }

            play();
        });
    }
    checkWin(removedValue, eqWrapperLength);

   
    


}

play();
 let timedOut = () => {
        
        document.querySelector('.eq-wrapper').lastChild.lastChild.style.pointerEvents = "none";
        let eqDivs = document.querySelectorAll(".equation");
        for(i=0;i<eqDivs.length;i++){
            eqDivs[i].style.pointerEvents = "none";
        }
    }




let timer = () => {
        let fish = document.querySelector('.fish');
        let timerText = document.querySelector('.timer');
        // fish.style.right = "50px";
        console.log(fish);
        let fishpic = 10;

        let fishInt = () => {
            console.log(timer);
            let movefish = () => {
                if (fishpic == 600) {
                    clearInterval(int);
                    // btmLeftFish();
                    timerText.innerText = "sorry, you're out of time";
                    timedOut();
                } else {
                    fishpic++;
                    
                    fish.style.left = fishpic + 'px';
                    timerText.innerText = fishpic/10;
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

//test




















































// let createDuck = () => {
//         //add duck class
//         let body = document.body;
//         let duckDiv = document.createElement('div');
//         duckDiv.classList.add('duck');


//         //set initial duck position and append deck to body
//         duckDiv.style.left = Math.random() * window.innerWidth + 'px';
//         duckDiv.style.top = Math.random() * window.innerHeight + 'px';
        
//         body.appendChild(duckDiv);


//         let moveDuck = () => {
//             let moveLeft = Math.random() * window.innerWidth;
//             let moveTop = Math.random() * window.innerHeight;
//             //make duck fly left or right
//             if (parseInt(duckDiv.style.left) < moveLeft) {

//                 duckDiv.classList.add('right');
//             } else {
//                 duckDiv.classList.remove('right');
//             }
        

//             //set transition speed in CSS according to distance travelled
//             let leftDist = Math.abs(moveLeft - parseInt(duckDiv.style.left));
//             let topDist = Math.abs(moveTop - parseInt(duckDiv.style.top));
//             let speed = ((leftDist + topDist) / 2);
//             if (speed > 1000) {
//                 speed = 1000;
//             }
//             console.log(speed);
//             //move duck by setting new position
//             duckDiv.style.left = moveLeft + 'px';
//             duckDiv.style.top = moveTop + 'px';
//             duckDiv.style.transition = `top ${speed*10}ms, left ${speed*10}ms`;
            
//             //return average distance as speed for interval (half of transition speed);
//             return speed*5;

//           }

//         setInterval(function() {
//             moveDuck();
//         }, moveDuck());

//         return duckDiv;
//     }

//     //make ducks and make them clickable
//     for (i = 0; i < 5; i++) {
//         console.log("hi");
//         createDuck().addEventListener('click', function(e) {
//             e.target.classList.add('shot');
//             //delay removal of duck explosion
//             setTimeout(function() {
//                 e.target.remove();
//                 checkForWinner();
//             }, 1000)
//         });

//         let checkForWinner = () => {
//             console.log(document.querySelectorAll('body .duck').length);
//             if (document.querySelectorAll('body .duck').length === 0) {
//                 alert('YOU KINDA WIN.... BUT YOU ARE KILLING DUCKS SO....')
//             }
//         }
//     }
  




// // play();