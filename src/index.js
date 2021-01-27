function addIcon(square) {
    let element = document.getElementById(square);
    let turn = document.getElementById("show");

    let win = document.getElementById("win");
    let em1 = document.getElementById("1");
    let em2 = document.getElementById("2");
    let em3 = document.getElementById("3");
    let em4 = document.getElementById("4");
    let em5 = document.getElementById("5");
    let em6 = document.getElementById("6");
    let em7 = document.getElementById("7");
    let em8 = document.getElementById("8");
    let em9 = document.getElementById("9");

    if(turn.innerHTML === 'o') {
        element.innerHTML = `<b>O</b>`
        turn.innerHTML = 'x'
    } else {
        element.innerHTML = `<b>X</b>`
        turn.innerHTML = 'o'
    }

    if (em1.innerHTML === `<b>O</b>`) {
        if (em2.innerHTML === `<b>O</b>`) {
            if (em3.innerHTML === `<b>O</b>`) {
        

                em1.innerHTML = "<div style='background-color: #ff5252'></div>";
                em2.innerHTML = "<div style='background-color: #ff5252'></div>";
                em3.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }
    
    if (em4.innerHTML === `<b>O</b>`) {
        if (em5.innerHTML === `<b>O</b>`) {
            if (em6.innerHTML === `<b>O</b>`) {
        

                em4.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em6.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }


    if (em7.innerHTML === `<b>O</b>`) {
        if (em8.innerHTML === `<b>O</b>`) {
            if (em9.innerHTML === `<b>O</b>`) {
        

                em7.innerHTML = "<div style='background-color: #ff5252'></div>";
                em8.innerHTML = "<div style='background-color: #ff5252'></div>";
                em9.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }


    if (em1.innerHTML === `<b>O</b>`) {
        if (em4.innerHTML === `<b>O</b>`) {
            if (em7.innerHTML === `<b>O</b>`) {
        

                em1.innerHTML = "<div style='background-color: #ff5252'></div>";
                em4.innerHTML = "<div style='background-color: #ff5252'></div>";
                em7.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }

    if (em2.innerHTML === `<b>O</b>`) {
        if (em5.innerHTML === `<b>O</b>`) {
            if (em8.innerHTML === `<b>O</b>`) {
        

                em2.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em8.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }

    if (em3.innerHTML === `<b>O</b>`) {
        if (em6.innerHTML === `<b>O</b>`) {
            if (em9.innerHTML === `<b>O</b>`) {
        

                em3.innerHTML = "<div style='background-color: #ff5252'></div>";
                em6.innerHTML = "<div style='background-color: #ff5252'></div>";
                em9.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }


    if (em1.innerHTML === `<b>O</b>`) {
        if (em5.innerHTML === `<b>O</b>`) {
            if (em9.innerHTML === `<b>O</b>`) {
        

                em1.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em9.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }

    if (em3.innerHTML === `<b>O</b>`) {
        if (em5.innerHTML === `<b>O</b>`) {
            if (em7.innerHTML === `<b>O</b>`) {
        

                em3.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em7.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "O's take the win!";
            }
    }
    }













    if (em1.innerHTML === `<b>X</b>`) {
        if (em2.innerHTML === `<b>X</b>`) {
            if (em3.innerHTML === `<b>X</b>`) {
        

                em1.innerHTML = "<div style='background-color: #ff5252'></div>";
                em2.innerHTML = "<div style='background-color: #ff5252'></div>";
                em3.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }
    
    if (em4.innerHTML === `<b>X</b>`) {
        if (em5.innerHTML === `<b>X</b>`) {
            if (em6.innerHTML === `<b>X</b>`) {
        

                em4.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em6.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }


    if (em7.innerHTML === `<b>X</b>`) {
        if (em8.innerHTML === `<b>X</b>`) {
            if (em9.innerHTML === `<b>X</b>`) {
        

                em7.innerHTML = "<div style='background-color: #ff5252'></div>";
                em8.innerHTML = "<div style='background-color: #ff5252'></div>";
                em9.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }


    if (em1.innerHTML === `<b>X</b>`) {
        if (em4.innerHTML === `<b>X</b>`) {
            if (em7.innerHTML === `<b>X</b>`) {
        

                em1.innerHTML = "<div style='background-color: #ff5252'></div>";
                em4.innerHTML = "<div style='background-color: #ff5252'></div>";
                em7.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }

    if (em2.innerHTML === `<b>X</b>`) {
        if (em5.innerHTML === `<b>X</b>`) {
            if (em8.innerHTML === `<b>X</b>`) {
        

                em2.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em8.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }

    if (em3.innerHTML === `<b>X</b>`) {
        if (em6.innerHTML === `<b>X</b>`) {
            if (em9.innerHTML === `<b>X</b>`) {
        

                em3.innerHTML = "<div style='background-color: #ff5252'></div>";
                em6.innerHTML = "<div style='background-color: #ff5252'></div>";
                em9.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }


    if (em1.innerHTML === `<b>X</b>`) {
        if (em5.innerHTML === `<b>X</b>`) {
            if (em9.innerHTML === `<b>X</b>`) {
        

                em1.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em9.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }

    if (em3.innerHTML === `<b>X</b>`) {
        if (em5.innerHTML === `<b>X</b>`) {
            if (em7.innerHTML === `<b>X</b>`) {
        

                em3.innerHTML = "<div style='background-color: #ff5252'></div>";
                em5.innerHTML = "<div style='background-color: #ff5252'></div>";
                em7.innerHTML = "<div style='background-color: #ff5252'></div>";

                win.innerHTML = "X's take the win!";
            }
    }
    }



}