// ==========================
// DOM ELEMENTS
// ==========================

const bgMusic = document.getElementById("bgMusic");

// ==========================
// LOADING SCREEN
// ==========================

const loadingScreen = document.getElementById("loadingScreen");
const progress = document.getElementById("progress");
const loadingText = document.getElementById("loadingText");

// ==========================
// WELCOME SCREEN
// ==========================

const welcomeScene = document.getElementById("welcomeScene");
const beginJourneyBtn = document.getElementById("beginJourneyBtn");


// ==========================
// BACKGROUND EFFECTS
// ==========================

const stars = document.getElementById("stars");


// ==========================
// CHAPTER ONE
// ==========================

const chapterOne = document.getElementById("chapterOne");
const chapterOneTitle = document.getElementById("chapterOneTitle");
const chapterOneText = document.getElementById("chapterOneText");
const continueBtn = document.getElementById("continueBtn");


// ==========================
// CHAPTER TWO
// ==========================

const chapterTwo = document.getElementById("chapterTwo");
const chapterTwoTitle = document.getElementById("chapterTwoTitle");
const chapterTwoText = document.getElementById("chapterTwoText");
const galleryBtn = document.getElementById("galleryBtn");


// ==========================
// CHAPTER THREE
// ==========================

const chapterThree = document.getElementById("chapterThree");

const memoryImage = document.getElementById("memoryImage");

const memoryTitle = document.getElementById("memoryTitle");

const memoryText = document.getElementById("memoryText");

const nextMemoryBtn = document.getElementById("nextMemoryBtn");

// ==========================
// CHAPTER FOUR
// ==========================

const chapterFour = document.getElementById("chapterFour");

const loveVideo = document.getElementById("loveVideo");

const letterBtn = document.getElementById("letterBtn");

// ==========================
// CHAPTER FIVE
// ==========================

const chapterFive = document.getElementById("chapterFive");

const letterTitle = document.getElementById("letterTitle");

const letterText = document.getElementById("letterText");

const finalBtn = document.getElementById("finalBtn");

// ==========================
// CHAPTER SIX
// ==========================

const chapterSix = document.getElementById("chapterSix");

// ==========================
// VARIABLES
// ==========================

let percentage = 0;

// ==========================
// MEMORIES
// ==========================

const memories = [

    {

        image: "images/you-and-me.jpeg",

        title: "❤️ Where It All Began",

        message:
        "From strangers to becoming my favourite person...\n\nThank you for walking into my life."

    },

    {

        image: "images/first-trip-matheran.jpeg",

        title: "🌄 Our First Trip Together",

        message:
        "Our first adventure together.\n\nEvery step felt special because you were beside me."

    },

    {

        image: "images/beautiful-matheran.jpeg",

        title: "🌸 Beautiful You",

        message:
        "The mountains were beautiful...\n\nBut they still couldn't compete with your smile."

    },

    {

        image: "images/first-diwali.jpeg",

        title: "🪔 Our First Diwali",

        message:
        "Lights, happiness and you...\n\nWhat more could I ever ask for?"

    },

    {

        image: "images/first-village.jpeg",

        title: "🏡 My Village, Our Memory",

        message:
        "Watching you enjoy my village made me happier than you can imagine."

    },

    {

        image: "images/flowers.jpeg",

        title: "🌺 Blooming Together",

        message:
        "Some flowers bloom for a season...\n\nBut my love for you only keeps growing."

    },

    {

        image: "images/hug.jpeg",

        title: "🤗 My Safe Place",

        message:
        "Some hugs last only a few seconds...\n\nYours stays with me forever."

    },

    {

        image: "images/ocean.jpeg",

        title: "🌊 Endless Like The Ocean",

        message:
        "Standing beside you while watching the sea...\n\nOne of my favourite moments."

    },

    {

        image: "images/snowworld.jpeg",

        title: "❄️ Snow Much Fun",

        message:
        "Cold weather...\n\nWarm hearts...\n\nPerfect memories."

    },

    {

        image: "images/we-in-snowworld.jpeg",

        title: "☃️ Together Everywhere",

        message:
        "Whether sunshine or snow...\n\nI only wish to be with you."

    },

    {

        image: "images/village-memory.jpeg",

        title: "🌿 Nature & You",

        message:
        "Every beautiful place becomes even more beautiful when you're there."

    },

    {

        image: "images/favorite-photo.jpeg",

        title: "❤️ My Favourite Picture",

        message:
        "If someone asked me to choose one photo to keep forever...\n\nIt would probably be this one."

    },

    {

        image: "images/best-click.jpeg",

        title: "📸 The Perfect Click",

        message:
        "A single picture...\n\nThousands of beautiful memories."

    },

    {

        image: "images/birthday-last-year.jpeg",

        title: "🎂 Last Birthday",

        message:
        "Last year was beautiful...\n\nBut this year, I wanted to give you something made with love."

    }

];

let currentMemory = 0;


// ==========================
// CHAPTER ONE CONTENT
// ==========================

const chapterOneTitleMessage = "Dear Saee ❤️";

const chapterOneMessage =
"There are billions of people in this world...\n\nYet somehow...\n\nLife chose you for me ❤️";


// ==========================
// CHAPTER TWO CONTENT
// ==========================

const chapterTwoTitleMessage = "The Day Our Story Began 🌸";

const chapterTwoMessage =
"I don't know if you remember that day exactly the way I do.\n\nBut from that moment, life slowly started becoming more beautiful.\n\nSome meetings are just meetings...\n\nOurs became my favorite story. ❤️";

// ==========================
// FINAL LETTER CONTENT
// ==========================

const finalLetterTitle = "One Last Thing... ❤️";

const finalLetterMessage =
"Dear Saee,\n\n" +

"I made this little website because I wanted to give you something that no shop could ever sell.\n\n" +

"Every line of code, every animation, every photo and every memory was chosen while thinking about you.\n\n" +

"You've brought happiness into my life in countless little ways, and I hope this small surprise makes you smile the way you make me smile.\n\n" +

"Thank you for being you.\n\n" +

"I can't wait to create thousands more memories together.\n\n" +

"Happy Birthday, my love. ❤️\n\n" +

"Forever Yours,\nAkshay";

// ==========================
// LOADING SCREEN
// ==========================

const loading = setInterval(function(){

    percentage++;

    progress.style.width = percentage + "%";

    loadingText.innerHTML = percentage + "%";

    if(percentage >= 100){

        clearInterval(loading);

        loadingScreen.style.opacity = "0";

        setTimeout(function(){

            loadingScreen.style.display = "none";

            welcomeScene.style.display = "flex";

            setTimeout(function(){

                welcomeScene.style.opacity = "1";

            },300);

        },1000);

    }

},30);

function createLoadingFlowers(){

    const container = document.getElementById("loadingFlowers");

    setInterval(function(){

        const flower = document.createElement("div");

        flower.className = "loadingFlower";

        flower.innerHTML = "🌸";

        flower.style.left = Math.random()*100 + "%";

        flower.style.animationDuration =
            (4 + Math.random()*4) + "s";

        flower.style.fontSize =
            (18 + Math.random()*18) + "px";

        container.appendChild(flower);

        setTimeout(function(){

            flower.remove();

        },8000);

    },350);

}

createLoadingFlowers();


// ==========================
// EVENT LISTENERS
// ==========================

beginJourneyBtn.addEventListener("click", function(){

    // Start background music
    bgMusic.volume = 0.25;

    bgMusic.play().catch(function(error){

        console.log("Music couldn't start:", error);

    });

    welcomeScene.style.opacity = "0";

    setTimeout(function(){

        welcomeScene.style.display = "none";

        chapterOne.style.display = "flex";

        setTimeout(function(){

            chapterOne.style.opacity = "1";

            // Start typing only after Chapter One appears
            startTyping(

            chapterOneTitle,

            chapterOneText,

            chapterOneTitleMessage,

            chapterOneMessage,

            continueBtn

        );

        },300);

    },1000);

});

// ==========================
// FALLING FLOWERS
// ==========================

const flowers = document.getElementById("flowers");

const petals = [

    "🌸",
    "🌸",
    "🌸",
    "🌸",
    "🌸"

];

for(let i = 0; i < 35; i++){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = petals[Math.floor(Math.random()*petals.length)];

    flower.style.left = Math.random()*100 + "%";

    flower.style.fontSize = (18 + Math.random()*20) + "px";

    flower.style.animationDuration =
    (8 + Math.random()*8) + "s";

    flower.style.animationDelay =
    Math.random()*10 + "s";

    flowers.appendChild(flower);

}


// ==========================
// START TYPING
// ==========================


function startTyping(titleElement, textElement, title, message, nextButton){

    console.log(titleElement);
    console.log(textElement);
    console.log(nextButton);

    let titleIndex = 0;
    let messageIndex = 0;

    titleElement.innerHTML = "";
    textElement.innerHTML = "";

    nextButton.style.display = "none";
    nextButton.style.opacity = "0";

    const typingAnimation = setInterval(typeTitle,120);

    function typeTitle(){

        if(titleIndex < title.length){

            titleElement.innerHTML += title[titleIndex];

            titleIndex++;

        }
        else{

            clearInterval(typingAnimation);

            setTimeout(function(){

                typeMessage();

            },100);

        }

    }

    function typeMessage(){

        const messageAnimation = setInterval(function(){

            if(messageIndex < message.length){

                if(message[messageIndex] == "\n"){

                    textElement.innerHTML += "<br>";

                }
                else{

                    textElement.innerHTML += message[messageIndex];

                }

                messageIndex++;

            }
            else{

                clearInterval(messageAnimation);

                nextButton.style.display = "inline-block";

                setTimeout(function(){

                    nextButton.style.opacity = "1";

                },100);

            }

        },20);

    }

}

// ==========================
// EVENT LISTENERS
// ==========================

continueBtn.addEventListener("click", function(){

    continueBtn.disabled = true;

    chapterOne.style.opacity = "0";

    setTimeout(function(){

        chapterOne.style.display = "none";

        chapterTwo.style.display = "flex";

        setTimeout(function(){

            chapterTwo.style.opacity = "1";

            console.log("chapterTwo =", chapterTwo);
            console.log("chapterTwoTitle =", chapterTwoTitle);
            console.log("chapterTwoText =", chapterTwoText);
            console.log("galleryBtn =", galleryBtn);

            startTyping(

            chapterTwoTitle,

            chapterTwoText,

            chapterTwoTitleMessage,

            chapterTwoMessage,

            galleryBtn

        );

        },100);

    },1000);

});

// ==========================
// GALLERY BUTTON
// ==========================

galleryBtn.addEventListener("click", function(){

    chapterTwo.style.opacity = "0";

    setTimeout(function(){

        chapterTwo.style.display = "none";

        chapterThree.style.display = "flex";

        setTimeout(function(){

            chapterThree.style.opacity = "1";

            showMemory(currentMemory);

        },300);

    },1000);

});

// ==========================
// LETTER BUTTON
// ==========================

letterBtn.addEventListener("click", function(){

    chapterFour.style.opacity = "0";

    setTimeout(function(){

        chapterFour.style.display = "none";

        chapterFive.style.display = "flex";

        setTimeout(function(){

            chapterFive.style.opacity = "1";

            startTyping(

                letterTitle,

                letterText,

                finalLetterTitle,

                finalLetterMessage,

                finalBtn

            );

        },300);

    },1000);

});

finalBtn.addEventListener("click",function(){

    chapterFive.style.opacity="0";

    setTimeout(function(){

        chapterFive.style.display="none";

        chapterSix.style.display="flex";

        setTimeout(function(){

            chapterSix.style.opacity="1";

            createHearts();

            createConfetti();

        },300);

    },1000);

});

// ==========================
// SHOW MEMORY
// ==========================

function showMemory(index){

    nextMemoryBtn.style.display = "none";
    nextMemoryBtn.style.opacity = "0";

    memoryImage.style.opacity = "0";

    memoryImage.onload = function(){

        memoryImage.style.opacity = "1";

    };

    memoryImage.src = memories[index].image;

    if(index === memories.length - 1){

        nextMemoryBtn.innerHTML = "❤️ Let's watch you smile ❤️";

    }else{

        nextMemoryBtn.innerHTML = "💗 Next Memory 💗";

    }

    startTyping(

        memoryTitle,
        memoryText,
        memories[index].title,
        memories[index].message,
        nextMemoryBtn

    );

}

// ==========================
// NEXT MEMORY
// ==========================

nextMemoryBtn.addEventListener("click", function(){

    if(currentMemory < memories.length - 1){

        currentMemory++;
        showMemory(currentMemory);

    }else{

        // Last photo reached
        // Chapter 4 (Video) will start here

        chapterThree.style.opacity = "0";

        setTimeout(function(){

            chapterThree.style.display = "none";

            chapterFour.style.display = "flex";

            setTimeout(function(){

                chapterFour.style.opacity = "1";

                loveVideo.play();

            },300);

        },1000);

    }

});

loveVideo.addEventListener("ended", function(){

    letterBtn.style.display = "inline-block";

    setTimeout(function(){

        letterBtn.style.opacity = "1";

    },100);

});

// ==========================
// VIDEO ENDED
// ==========================

loveVideo.addEventListener("ended", function(){

    letterBtn.style.display = "inline-block";

    setTimeout(function(){

        letterBtn.style.opacity = "1";

    },100);

});

// ==========================
// HEART ANIMATION
// ==========================

function createHearts(){

    setInterval(function(){

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize =
        Math.random()*25 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },6000);

    },250);

}

// ==========================
// CONFETTI
// ==========================

function createConfetti(){

    const colors = [

        "#ff4d6d",

        "#ffd60a",

        "#4cc9f0",

        "#80ed99",

        "#ffffff",

        "#ff99c8"

    ];

    for(let i=0;i<300;i++){

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random()*100 + "vw";

        piece.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDelay =
        Math.random()*2 + "s";

        document.body.appendChild(piece);

        setTimeout(function(){

            piece.remove();

        },7000);

    }

}
