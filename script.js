/* =====================================
   BECKENHAM TENNIS CLUB
   TENNIS BALL ANIMATION
===================================== */


const field =
    document.querySelector("#ball-field");



/* =====================================
   CREATE ONE TENNIS BALL
===================================== */

function makeBall(index) {


    const ball =
        document.createElement("div");


    ball.className = "ball";


    /*
        Random horizontal starting position
    */

    const startX =
        8 + Math.random() * 84;


    /*
        Random vertical position
    */

    const landingY =
        58 + Math.random() * 28;


    ball.style.left =
        `${startX}%`;


    ball.style.top =
        `${landingY}%`;



    /* =================================
       RANDOM SIDEWAYS MOVEMENT
    ================================= */

    function randomSidewaysMovement() {

        const movement =
            Math.random() * 180 - 90;

        return `${movement.toFixed(0)}px`;

    }



    /*
        Starting horizontal position
    */

    ball.style.setProperty(

        "--x0",

        `${(
            Math.random() * 20 - 10
        ).toFixed(0)}px`

    );



    /*
        Give every bounce a different
        sideways position.
    */

    for (
        let bounce = 1;
        bounce <= 6;
        bounce++
    ) {

        ball.style.setProperty(

            `--dx${bounce}`,

            randomSidewaysMovement()

        );

    }



    /* =================================
       RANDOM ANIMATION SPEED
    ================================= */

    const duration =
        3.7 + Math.random() * 1.7;


    ball.style.setProperty(

        "--dur",

        `${duration}s`

    );



    /* =================================
       ADD BALL TO WEBSITE
    ================================= */

    field.appendChild(ball);



    /* =================================
       START ANIMATION
    ================================= */

    setTimeout(() => {


        ball.classList.add("bounce");



        /*
            After the bouncing has finished,
            make the ball settle and fade.
        */

        setTimeout(() => {


            ball.style.transition =
                "opacity 1.5s ease, transform 1.5s ease";


            ball.style.opacity =
                "0";


            ball.style.transform =
                "translateY(20px) scale(.7)";


        }, duration * 1000);


    }, index * 230);



    /* =================================
       DELETE OLD BALL
    ================================= */

    setTimeout(() => {

        ball.remove();

    }, 7000 + index * 230);

}



/* =====================================
   CREATE GROUP OF BALLS
===================================== */

function launchBalls() {


    /*
        Don't animate if the visitor
        has reduced motion enabled.
    */

    if (

        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

    ) {

        return;

    }



    /*
        Create 9 balls
    */

    for (
        let i = 0;
        i < 9;
        i++
    ) {

        makeBall(i);

    }

}



/* =====================================
   START WHEN WEBSITE LOADS
===================================== */

window.addEventListener(

    "load",

    () => {

        setTimeout(

            launchBalls,

            650

        );

    }

);



/* =====================================
   REPEAT EVERY 10.5 SECONDS
===================================== */

setInterval(

    launchBalls,

    10500

);
