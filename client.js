console.log('Here are all the available people:', people);

$(document).ready(function() {
    console.log('The game is');
    loadImages();
    resetGame();
    $('main img').on('click', checkAnswer);
});

let person;

function loadImages(){
    for (let user of people) {
    $('#pictures').append(`<span><img data-name="${user.name}" src="https://github.com/${user.githubUsername}.png?size=250" alt="Profile image of ${user.name}"></span>
    `)
    }    
}

function randomUser(){
    index = randomNumber(0, people.length-1);
    person = people[index].name;
    return person;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function checkAnswer() {
    if ($(this).data('name') === person) {
        alert('That\'s correct!! Great Job!!');
        resetGame();
    }
    else {
        alert('That is incorrect... try again!!');
    }
}

function resetGame(){
    $('header').empty();
    $('header').append(`<p>click on the picture of ${randomUser()}.</p>`);
}