console.log('app.js LOADED');
//GLOBAL VARIABLES
var i;
let tasks = document.getElementsByTagName('LI');
let myDoingTasks = document.getElementById('doingList').getElementsByTagName('LI');
let myFinishedTasks = document.getElementById('finishedList').getElementsByTagName('LI');
let deleteButton = document.getElementsByClassName('deleteButton');
let mButtonDoing = document.getElementsByClassName('moveButtonDoing');
let mButtonFinished = document.getElementsByClassName('moveButtonFinished');

//CREATE A 'DELETE BUTTON' FOR EXISITING ELEMENTS
for (i = 0; i < tasks.length; i++) {
    let delButton = document.createElement('button');
    let buttonText = document.createTextNode('X');
    delButton.className = 'deleteButton';
    delButton.appendChild(buttonText);
    tasks[i].appendChild(delButton);
}
//CREATE A 'MOVE BUTTON' FOR EXISITING ELEMENTS IN DOING LIST
for (i = 0; i < myDoingTasks.length; i++) {
    let moveButton = document.createElement('button');
    let buttonText = document.createTextNode('>');
    moveButton.className = 'moveButtonDoing';
    moveButton.appendChild(buttonText);
    myDoingTasks[i].appendChild(moveButton);
}
//CREATE A 'MOVE BUTTON' FOR EXISITING ELEMENTS IN FINISHED LIST
for (i = 0; i < myFinishedTasks.length; i++) {
    let moveButton = document.createElement('button');
    let buttonText = document.createTextNode('<');
    moveButton.className = 'moveButtonFinished';
    moveButton.appendChild(buttonText);
    myFinishedTasks[i].appendChild(moveButton);
}
//CREATES BUTTONS WHEN FUNCTIONS ARE CALLED
const createFinishedButton = () => {
    let moveButton = document.createElement('button');
    let buttonText = document.createTextNode('<');
    moveButton.className = 'moveButtonFinished';
    moveButton.appendChild(buttonText);
    return moveButton;
}
const createDoingButton = () => {
    let moveButton = document.createElement('button');
    let buttonText = document.createTextNode('>');
    moveButton.className = 'moveButtonDoing';
    moveButton.appendChild(buttonText);
    return moveButton;
}

//CREATE A NEW ELEMENT EVERYTIME ADD IS CLICKED
const newTask = () => {
    console.log('Clicked on Add button');
    let li = document.createElement("li");
    let value = document.getElementById("userInput").value;
    let valueNode = document.createTextNode(value);
    let p = document.createElement('p');
    p.appendChild(valueNode);
    li.appendChild(p);

    if (value === '') {
        alert("You must write something!");
    } else {
        document.getElementById('doingList').appendChild(li);
    }
    document.getElementById('userInput').value = '';

    let delButton = document.createElement('button');
    let delButtonText = document.createTextNode('X');
    delButton.className = 'deleteButton';
    delButton.appendChild(delButtonText);
    li.appendChild(delButton);

    let moveButtonDoing = document.createElement('button');
    let moveButtonDoingText = document.createTextNode('>');
    moveButtonDoing.className = 'moveButtonDoing';
    moveButtonDoing.appendChild(moveButtonDoingText);
    li.appendChild(moveButtonDoing);

    //DELETE BUTTON
    for (i = 0; i < deleteButton.length; i++) {
        deleteButton[i].onclick = function () {
            let parent = this.parentElement;
            parent.remove();
        }
    }

    //DOING LIST MOVE BUTTON
    function doingMoveBtn() {
        for (i = 0; i < mButtonDoing.length; i++) {
            mButtonDoing[i].onclick = function () {
                let parent = this.parentElement;
                let newButton = createFinishedButton();
                this.replaceWith(newButton);
                document.getElementById('finishedList').appendChild(parent);
                console.log('Clicked Doing Button');
                finishedMoveBtn();
            }
        }
    }
    doingMoveBtn();
    //FINISHED LIST MOVE BUTTON
    function finishedMoveBtn() {
        for (i = 0; i < mButtonFinished.length; i++) {
            mButtonFinished[i].onclick = function () {
                let parent = this.parentElement;
                let newButton = createDoingButton();
                this.replaceWith(newButton);
                document.getElementById('doingList').appendChild(parent);
                console.log('Clicked Finished Button');
                doingMoveBtn();
            }
        }
    }
    finishedMoveBtn();
};

//PRESS ENTER ACTIVATERS 'Add ToDo' BUTTON
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        newTask();
    }
});