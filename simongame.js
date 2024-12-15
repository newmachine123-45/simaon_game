let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');


let btns = ['yellow', 'red', 'purple', 'green'];


document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('game started');
        started = true;

        levelup();
        highest(`${level}`);
    }

});

function gameflash(bt) {
    bt.classList.add("flash");
    setTimeout(function () {
        bt.classList.remove("flash");
    }, 250)
};

function levelup() {
    userseq = [];
    level++;

    h2.innerText = `level ${level}`;

    let ranidx = Math.floor(Math.random() * 3);
    let rancolor = btns[ranidx];
    let randbtn = document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    // console.log(ranidx);
    // console.log(rancolor);
    // console.log(randbtn);
    gameflash(randbtn);
}

function userflash(bt) {
    bt.classList.add("userflash");
    setTimeout(function () {
        bt.classList.remove("userflash");
    }, 250)
};


function checkAns(idx) {
    // console.log('current level:',level);

    if (userseq[idx] == gameseq[idx]) {
        // console.log("same value")
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
            //giving a time of 1s for calling the levelup() function
        }
    }
    else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b>
        <br>  Press any key to start.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";

        }, 150);

        reset();
    }
}

function btnpress() {
    let btn = this;
    console.log(this)
    userflash(btn);

    usercolor = btn.getAttribute('id');
    // console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener('click', btnpress);
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function highest() {
    let max = 0;
    if (level > max) {
        max = level;
        console.log(`highest score was ${max}`);
    }
}