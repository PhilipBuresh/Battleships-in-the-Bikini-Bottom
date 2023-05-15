const a01 = document.getElementById("a01");
const a02 = document.getElementById("a02");
const a03 = document.getElementById("a03");
const a04 = document.getElementById("a04");
const a05 = document.getElementById("a05");
const a06 = document.getElementById("a06");
const a07 = document.getElementById("a07");
const a08 = document.getElementById("a08");
const a09 = document.getElementById("a09");
const a10 = document.getElementById("a10");
const a11 = document.getElementById("a11");
const a12 = document.getElementById("a12");
const a13 = document.getElementById("a13");
const a14 = document.getElementById("a14");
const a15 = document.getElementById("a15");
const a16 = document.getElementById("a16");
const a17 = document.getElementById("a17");
const a18 = document.getElementById("a18");
const a19 = document.getElementById("a19");
const a20 = document.getElementById("a20");
const a21 = document.getElementById("a21");
const a22 = document.getElementById("a22");
const a23 = document.getElementById("a23");
const a24 = document.getElementById("a24");
const a25 = document.getElementById("a25");
const b01 = document.getElementById("b01");
const b02 = document.getElementById("b02");
const b03 = document.getElementById("b03");
const b04 = document.getElementById("b04");
const b05 = document.getElementById("b05");
const b06 = document.getElementById("b06");
const b07 = document.getElementById("b07");
const b08 = document.getElementById("b08");
const b09 = document.getElementById("b09");
const b10 = document.getElementById("b10");
const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const b13 = document.getElementById("b13");
const b14 = document.getElementById("b14");
const b15 = document.getElementById("b15");
const b16 = document.getElementById("b16");
const b17 = document.getElementById("b17");
const b18 = document.getElementById("b18");
const b19 = document.getElementById("b19");
const b20 = document.getElementById("b20");
const b21 = document.getElementById("b21");
const b22 = document.getElementById("b22");
const b23 = document.getElementById("b23");
const b24 = document.getElementById("b24");
const b25 = document.getElementById("b25");
const counter = document.getElementById("counter");
const myTable = document.getElementById("myTable");
const botTable = document.getElementById("botTable");
const game = document.getElementById("game");
const lobby = document.getElementById("lobby");
const screen = document.getElementById("screen");
const play = document.getElementById("play");
const patrick = document.getElementById("patrick");
const spongebob = document.getElementById("spongebob");
const myCounter = document.getElementById("myCounter");
const hisCounter = document.getElementById("hisCounter");
const setboats = document.getElementById("setboats");
const spongebobBoats = document.getElementById("spongebobBoats");
const patrickBoats = document.getElementById("patrickBoats");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const bubbles = document.getElementById("bubbles");
const play_again = document.getElementById("play_again")
const replay = document.getElementById("replay")
const who = document.getElementById("who");

let gameStart = () =>{
    let setBoat01, setBoat02, setBoat03, setBoat04, setBoat05, setBoat06, setBoat07, setBoat08, setBoat09, setBoat10, setBoat11, setBoat12, setBoat13, setBoat14, setBoat15,
    setBoat16, setBoat17, setBoat18, setBoat19, setBoat20, setBoat21, setBoat22, setBoat23, setBoat24, setBoat25;
    
    setBoat01 = setBoat02 = setBoat03 = setBoat04 = setBoat05 = setBoat06 = setBoat07 = setBoat08 = setBoat09 = setBoat10 = setBoat11 = setBoat12 = setBoat13 = setBoat14 = setBoat15 =
    setBoat16 = setBoat17 = setBoat18 = setBoat19 = setBoat20 = setBoat21 = setBoat22 = setBoat23 = setBoat24 = setBoat25 = false;
    
    let setBot01, setBot02, setBot03, setBot04, setBot05, setBot06, setBot07, setBot08, setBot09, setBot10, setBot11, setBot12, setBot13, setBot14, setBot15,
    setBot16, setBot17, setBot18, setBot19, setBot20, setBot21, setBot22, setBot23, setBot24, setBot25;
    
    setBot01 = setBot02 = setBot03 = setBot04 = setBot05 = setBot06 = setBot07 = setBot08 = setBot09 = setBot10 = setBot11 = setBot12 = setBot13 = setBot14 = setBot15 =
    setBot16 = setBot17 = setBot18 = setBot19 = setBot20 = setBot21 = setBot22 = setBot23 = setBot24 = setBot25 = false;
    
    let minusBoats = 5;
    let randomPick = 0;
    let repNum = 1;
    
    let numOfMyBoats = 0;
    let numOfHisBoats = 0;
    
    let music3Fun = () =>{
        music2.pause();
        music2.currentTime = 0;
        clearInterval(music2Int);
        music3.play();
        setInterval(() => {
            music3.play();
        }, 32000);
    }
    let music2Int;
    let music2Fun = () =>{
        music3.pause();
        music3.currentTime = 0;
        music2.play();
        music2Int = setInterval(() => {
            music2.play();
        }, 128000);
    }

    play.onclick = () =>{
        
        music1.pause();
        music2Fun();
        bubbles.play();
        bubble.style.display = "block";
        setTimeout(() => {
            bubble.style.display = "none";
            bubble.src = "none";
        }, 1000);
        setTimeout(() => {
            lobby.style.display = "none";
             game.style.display = "flex";
        }, 400);
    }
    
    let myNumber = 5;
    let hisNumber = 5;
    
    let minusMyBoats = () => {
        myNumber--;
        myCounter.innerHTML = myNumber;
        myCounter.style.animationName = "counter1";
        myCounter.style.animationPlayState = "running";
        setTimeout(() => {
            myCounter.style.animationName = "none";
        myCounter.style.animationPlayState = "stop";
        }, 2000);
    }
    let minusHisBoats = () => {
        hisNumber--;
        hisCounter.innerHTML = hisNumber;
        hisCounter.style.animationName = "counter2";
        hisCounter.style.animationPlayState = "running";
        setTimeout(() => {
            hisCounter.style.animationName = "none";
        hisCounter.style.animationPlayState = "stop";
        }, 2000);
    }
    
    let minusFun = () =>{
        minusBoats--;
        counter.innerHTML = "Boats: " + minusBoats;
        if(minusBoats == 0){
            bubble.style.display = "block";
            bubble.src = "./res/gif/bubble.gif";
            music2.pause();
            music3Fun();
            bubbles.play();
            setTimeout(() => {
                bubble.style.display = "none";
                bubble.src = "none";
            }, 1000);
            setTimeout(() => {
                arrow.style.display = "block";
            }, 250);
            setTimeout(() => {
            numOfMyBoats = 5;
            counter.style.display = "none";
            spongebob.style.display  ="block";
            setboats.style.display = "none";
            game.style.flexDirection = "row";
            spongebobBoats.style.display = "flex";
            patrickBoats.style.display = "flex";
            botTable.style.display = "block";
            botTable.style.marginLeft = "2em"
            myTable.style.marginRight = "2em"
            while(repNum <= 5){
                randomPick = Math.floor(Math.random() * 25 + 1);
                if(randomPick == 1){
                    bot_boat01.style.display = "block";
                    if(setBot01 == true){repNum--;numOfHisBoats--;}
                    setBot01 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 2){
                    bot_boat02.style.display = "block";
                    if(setBot02 == true){repNum--;numOfHisBoats--;}
                    setBot02 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 3){
                    bot_boat03.style.display = "block";
                    if(setBot03 == true){repNum--;numOfHisBoats--;}
                    setBot03 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 4){
                    bot_boat04.style.display = "block";
                    if(setBot04 == true){repNum--;numOfHisBoats--;}
                    setBot04 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 5){
                    bot_boat05.style.display = "block";
                    if(setBot05 == true){repNum--;numOfHisBoats--;}
                    setBot05 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 6){
                    bot_boat06.style.display = "block";
                    if(setBot06 == true){repNum--;numOfHisBoats--;}
                    setBot06 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 7){
                    bot_boat07.style.display = "block";
                    if(setBot07 == true){repNum--;numOfHisBoats--;}
                    setBot07 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 8){
                    bot_boat08.style.display = "block";
                    if(setBot08 == true){repNum--;numOfHisBoats--;}
                    setBot08 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 9){
                    bot_boat09.style.display = "block";
                    if(setBot09 == true){repNum--;numOfHisBoats--;}
                    setBot09 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 10){
                    bot_boat10.style.display = "block";
                    if(setBot10 == true){repNum--;numOfHisBoats--;}
                    setBot10 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 11){
                    bot_boat11.style.display = "block";
                    if(setBot11 == true){repNum--;numOfHisBoats--;}
                    setBot11 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 12){
                    bot_boat12.style.display = "block";
                    if(setBot12 == true){repNum--;numOfHisBoats--;}
                    setBot12 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 13){
                    bot_boat13.style.display = "block";
                    if(setBot13 == true){repNum--;numOfHisBoats--;}
                    setBot13 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 14){
                    bot_boat14.style.display = "block";
                    if(setBot14 == true){repNum--;numOfHisBoats--;}
                    setBot14 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 15){
                    bot_boat15.style.display = "block";
                    if(setBot15 == true){repNum--;numOfHisBoats--;}
                    setBot15 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 16){
                    bot_boat16.style.display = "block";
                    if(setBot16 == true){repNum--;numOfHisBoats--;}
                    setBot16 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 17){
                    bot_boat17.style.display = "block";
                    if(setBot17 == true){repNum--;numOfHisBoats--;}
                    setBot17 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 18){
                    bot_boat18.style.display = "block";
                    if(setBot18 == true){repNum--;numOfHisBoats--;}
                    setBot18 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 19){
                    bot_boat19.style.display = "block";
                    if(setBot19 == true){repNum--;numOfHisBoats--;}
                    setBot19 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 20){
                    bot_boat20.style.display = "block";
                    if(setBot20 == true){repNum--;numOfHisBoats--;}
                    setBot20 = true;
                    numOfHisBoats++; 
                }
                if(randomPick == 21){
                    bot_boat21.style.display = "block";
                    if(setBot21 == true){repNum--;numOfHisBoats--;}
                    setBot21 = true;
                    numOfHisBoats++; 
                }
                if(randomPick == 22){
                    bot_boat22.style.display = "block";
                    if(setBot22 == true){repNum--;numOfHisBoats--;}
                    setBot22 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 23){
                    bot_boat23.style.display = "block";
                    if(setBot23 == true){repNum--;numOfHisBoats--;}
                    setBot23 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 24){
                    bot_boat24.style.display = "block";
                    if(setBot24 == true){repNum--;numOfHisBoats--;}
                    setBot24 = true;
                    numOfHisBoats++;
                }
                if(randomPick == 25){
                    bot_boat25.style.display = "block";
                    if(setBot25 == true){repNum--;numOfHisBoats--;}
                    setBot25 = true;
                    numOfHisBoats++;  
                }
                repNum++;
                if(setBot01 & setBot02 & setBot03 & setBot04 & setBot05 & setBot06 & setBot07 & setBot08 & setBot09 & setBot10 & setBot11 & setBot12 & setBot13 & setBot14 & setBot15 & setBot16 & setBot17 & setBot18 & setBot19 & setBot20 & setBot21 & setBot22 & setBot23 & setBot24 & setBot25 == true){
                        repNum = 100;
                }
            }
    
            }, 400);
        }
    }
    let botPlay = false;
    let randomBoat = 0;
    let delay;
    
    endDamageFun = () =>{
        endDamage = setTimeout(() => {
            b01.style.animationPlayState = "paused"; 
            b01.style.animationName = "none";
            b02.style.animationPlayState = "paused";
            b02.style.animationName = "none";
            b03.style.animationPlayState = "paused";
            b03.style.animationName = "none";
            b04.style.animationPlayState = "paused";
            b04.style.animationName = "none";
            b05.style.animationPlayState = "paused";
            b05.style.animationName = "none";
            b06.style.animationPlayState = "paused";
            b06.style.animationName = "none";
            b07.style.animationPlayState = "paused";
            b07.style.animationName = "none";
            b08.style.animationPlayState = "paused";
            b08.style.animationName = "none";
            b09.style.animationPlayState = "paused";
            b09.style.animationName = "none";
            b10.style.animationPlayState = "paused";
            b10.style.animationName = "none";
            b11.style.animationPlayState = "paused";
            b11.style.animationName = "none";
            b12.style.animationPlayState = "paused";
            b12.style.animationName = "none";
            b13.style.animationPlayState = "paused";
            b13.style.animationName = "none";
            b14.style.animationPlayState = "paused";
            b14.style.animationName = "none";
            b15.style.animationPlayState = "paused";
            b15.style.animationName = "none";
            b16.style.animationPlayState = "paused";
            b16.style.animationName = "none";
            b17.style.animationPlayState = "paused";
            b17.style.animationName = "none";
            b18.style.animationPlayState = "paused";
            b18.style.animationName = "none";
            b19.style.animationPlayState = "paused";
            b19.style.animationName = "none";
            b20.style.animationPlayState = "paused";
            b20.style.animationName = "none";
            b21.style.animationPlayState = "paused";
            b21.style.animationName = "none";
            b22.style.animationPlayState = "paused";
            b22.style.animationName = "none";
            b23.style.animationPlayState = "paused";
            b23.style.animationName = "none";
            b24.style.animationPlayState = "paused";
            b24.style.animationName = "none";
            b25.style.animationPlayState = "paused";
            b25.style.animationName = "none";
    
            a01.style.animationPlayState = "paused"; 
            a01.style.animationName = "none";
            a02.style.animationPlayState = "paused";
            a02.style.animationName = "none";
            a03.style.animationPlayState = "paused";
            a03.style.animationName = "none";
            a04.style.animationPlayState = "paused";
            a04.style.animationName = "none";
            a05.style.animationPlayState = "paused";
            a05.style.animationName = "none";
            a06.style.animationPlayState = "paused";
            a06.style.animationName = "none";
            a07.style.animationPlayState = "paused";
            a07.style.animationName = "none";
            a08.style.animationPlayState = "paused";
            a08.style.animationName = "none";
            a09.style.animationPlayState = "paused";
            a09.style.animationName = "none";
            a10.style.animationPlayState = "paused";
            a10.style.animationName = "none";
            a11.style.animationPlayState = "paused";
            a11.style.animationName = "none";
            a12.style.animationPlayState = "paused";
            a12.style.animationName = "none";
            a13.style.animationPlayState = "paused";
            a13.style.animationName = "none";
            a14.style.animationPlayState = "paused";
            a14.style.animationName = "none";
            a15.style.animationPlayState = "paused";
            a15.style.animationName = "none";
            a16.style.animationPlayState = "paused";
            a16.style.animationName = "none";
            a17.style.animationPlayState = "paused";
            a17.style.animationName = "none";
            a18.style.animationPlayState = "paused";
            a18.style.animationName = "none";
            a19.style.animationPlayState = "paused";
            a19.style.animationName = "none";
            a20.style.animationPlayState = "paused";
            a20.style.animationName = "none";
            a21.style.animationPlayState = "paused";
            a21.style.animationName = "none";
            a22.style.animationPlayState = "paused";
            a22.style.animationName = "none";
            a23.style.animationPlayState = "paused";
            a23.style.animationName = "none";
            a24.style.animationPlayState = "paused";
            a24.style.animationName = "none";
            a25.style.animationPlayState = "paused";
            a25.style.animationName = "none";
        }, 1850);
    }
    

    let arrowRotate = () =>{
        arrow.style.transform = "rotate(180deg)"
    }

    let screenDisFun = () =>{
        screenDis = setTimeout(() => {
            screen.style.display = "none";
        }, 1910);
    }
    
    let lose = () =>{
        if(numOfMyBoats == 10){
            patrick_win.src = "./res/gif/win2.gif";
            who.innerHTML = "Spongebob"
            myTable.style.animationName = "disabled";
            myTable.style.animationPlayState = "running";
            patrickBoats.style.animationName = "disabled";
            patrickBoats.style.animationPlayState = "running";
            boom1.style.display = "block";
            setTimeout(() => {
                boom1.style.display = "none";
                myTable.style.visibility = "hidden";
                patrickBoats.style.visibility = "hidden";
                bubble.src = "./res/gif/bubble.gif";
                bubble.style.display = "block";
                bubbles.play();
                setTimeout(() => {
                    bubble.style.display = "none";
                    bubble.src = "none";
                }, 1000);
                setTimeout(() => {
                    myTable.style.visibility = "visible";
                    patrickBoats.style.visibility = "visible";
                    game.style.display = "none";
                    replay.style.display = "flex";
                    botTable.style.display = "none";
                    spongebob.style.animationPlayState = "paused";
                    spongebob.style.animationName = "none";
                    spongebob.style.display = "none";
                    patrick.src = "./res/img/patrick.png";
                    myTable.style.animationName = "none";
                    myTable.style.animationPlayState = "paused";
                    patrickBoats.style.animationPlayState = "paused";
                    patrickBoats.style.animationName = "none";
                    
        }, 400);
    }, 990);
        }
    }
    let endDance;
    let patrickDancing = false;
    let dancePatrick = () =>{
        if(patrickDancing == false){
            patrick.src = "./res/gif/patrick.gif"
            endDance = setTimeout(() => {
                patrick.src = "./res/img/patrick.png"
                patrickDancing = false;
            }, 7000);
        }
        patrickDancing = true;
    }
    
    let endDance2;
    let spongebobDancing = false;
    let danceSpongebob = () =>{
        if(spongebobDancing == false){
            spongebob.src = "./res/gif/spongebob.gif"
            endDance2 = setTimeout(() => {
                spongebob.src = "./res/img/spongebob.png"
                spongebobDancing = false;
            }, 5500);
        }
        spongebobDancing = true;
    }
    
    let botTurn = () =>{
        arrow.style.transform = "rotate(0deg)"
        if(numOfHisBoats == 10){
            patrick_win.src = "./res/gif/win1.gif";
            botTable.style.animationName = "disabled";
            botTable.style.animationPlayState = "running";
            spongebobBoats.style.animationName = "disabled";
            spongebobBoats.style.animationPlayState = "running";
            boom2.style.display = "block";
            setTimeout(() => {
                boom2.style.display = "none";
                botTable.style.visibility = "hidden";
                spongebobBoats.style.visibility = "hidden";
                bubble.src = "./res/gif/bubble.gif";
                bubble.style.display = "block";
                bubbles.play();
                setTimeout(() => {
                    bubble.style.display = "none";
                    bubble.src = "none";
                }, 1000);
                setTimeout(() => {
                    game.style.display = "none";
                    replay.style.display = "flex";
                    botTable.style.display = "none";
                    spongebob.style.display = "none";
                    patrick.style.animationPlayState = "paused";
                    patrick.style.animationName = "none";
                    patrick.src = "./res/img/patrick.png";
                    botTable.style.animationName = "none";
                    botTable.style.animationPlayState = "paused";
                    spongebobBoats.style.animationName = "none";
                    spongebobBoats.style.animationPlayState = "paused";
                }, 400);
            }, 990);
        }else{
            screen.style.display = "block";
            botPlay = true;
            randomBoat = Math.floor(Math.random() * 25 + 1); 
            if(botPlay == true){
                setTimeout(() => {
                    arrowRotate();
                }, 2700);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 1){
                    if(setBoat01 == true){
                        boat01.style.display = "none";
                        setBoat01 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a01.style.animationName = "damage";
                        a01.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 2){
                    if(setBoat02 == true){
                        boat02.style.display = "none";
                        setBoat02 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a02.style.animationName = "damage";
                        a02.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 3){
                    if(setBoat03 == true){
                        boat03.style.display = "none";
                        setBoat03 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a03.style.animationName = "damage";
                        a03.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 4){
                    if(setBoat04 == true){
                        boat04.style.display = "none";
                        setBoat04 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a04.style.animationName = "damage";
                        a04.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 5){
                    if(setBoat05 == true){
                        boat05.style.display = "none";
                        setBoat05 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a05.style.animationName = "damage";
                        a05.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 6){
                    if(setBoat06 == true){
                        boat06.style.display = "none";
                        setBoat06 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a06.style.animationName = "damage";
                        a06.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 7){
                    if(setBoat07 == true){
                        boat07.style.display = "none";
                        setBoat07 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a07.style.animationName = "damage";
                        a07.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 8){
                    if(setBoat08 == true){
                        boat08.style.display = "none";
                        setBoat08 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a08.style.animationName = "damage";
                        a08.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 9){
                    if(setBoat09 == true){
                        boat09.style.display = "none";
                        setBoat09 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a09.style.animationName = "damage";
                        a09.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 10){
                    if(setBoat10 == true){
                        boat10.style.display = "none";
                        setBoat10 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a10.style.animationName = "damage";
                        a10.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 11){
                    if(setBoat11 == true){
                        boat11.style.display = "none";
                        setBoat11 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a11.style.animationName = "damage";
                        a11.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 12){
                    if(setBoat12 == true){
                        boat12.style.display = "none";
                        setBoat12 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a12.style.animationName = "damage";
                        a12.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 13){
                    if(setBoat13 == true){
                        boat13.style.display = "none";
                        setBoat13 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a13.style.animationName = "damage";
                        a13.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 14){
                    if(setBoat14 == true){
                        boat14.style.display = "none";
                        setBoat14 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a14.style.animationName = "damage";
                        a14.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 15){
                    if(setBoat15 == true){
                        boat15.style.display = "none";
                        setBoat15 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a15.style.animationName = "damage";
                        a15.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 16){
                    if(setBoat16 == true){
                        boat16.style.display = "none";
                        setBoat16 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a16.style.animationName = "damage";
                        a16.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 17){
                    if(setBoat17 == true){
                        boat17.style.display = "none";
                        setBoat17 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a17.style.animationName = "damage";
                        a17.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 18){
                    if(setBoat18 == true){
                        boat18.style.display = "none";
                        setBoat18 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a18.style.animationName = "damage";
                        a18.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 19){
                    if(setBoat19 == true){
                        boat19.style.display = "none";
                        setBoat19 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a19.style.animationName = "damage";
                        a19.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 20){
                    if(setBoat20 == true){
                        boat20.style.display = "none";
                        setBoat20 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a20.style.animationName = "damage";
                        a20.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 21){
                    if(setBoat21 == true){
                        boat21.style.display = "none";
                        setBoat21 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a21.style.animationName = "damage";
                        a21.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 22){
                    if(setBoat22 == true){
                        boat22.style.display = "none";
                        setBoat22 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a22.style.animationName = "damage";
                        a22.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 23){
                    if(setBoat23 == true){
                        boat23.style.display = "none";
                        setBoat23 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a23.style.animationName = "damage";
                        a23.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 24){
                    if(setBoat24 == true){
                        boat24.style.display = "none";
                        setBoat24 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a24.style.animationName = "damage";
                        a24.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
            if(botPlay == true){
                delay = setTimeout(() => {
                if(randomBoat == 25){
                    if(setBoat25 == true){
                        boat25.style.display = "none";
                        setBoat25 = false;
                        numOfMyBoats++;
                        lose();
                        danceSpongebob();
                        minusMyBoats();
                    }else{
                        a25.style.animationName = "damage";
                        a25.style.animationPlayState = "running";
                        endDamageFun();
                    }
                }
                screenDisFun();
                }, 2000);
            }
        }
    }
    
    b01.onclick = () =>{
        if(setBot01 == true){
            bot_boat01.src = "./res/img/boat_cross.png"
            bot_boat01.style.opacity = "100%";
            b01.style.pointerEvents = "none";
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
            setBot01 = false;
        }else if(setBot01 == false){
            b01.style.animationName = "damage";
            b01.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b02.onclick = () =>{
        if(setBot02 == true){
            bot_boat02.src = "./res/img/boat_cross.png"
            bot_boat02.style.opacity = "100%";
            b02.style.pointerEvents = "none";
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
            setBot02 = false;
        }else if(setBot02 == false){
            b02.style.animationName = "damage";
            b02.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b03.onclick = () =>{
        if(setBot03 == true){
            bot_boat03.src = "./res/img/boat_cross.png"
            bot_boat03.style.opacity = "100%";
            b03.style.pointerEvents = "none";
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
            setBot03 = false;
        }else if(setBot03 == false){
            b03.style.animationName = "damage";
            b03.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b04.onclick = () =>{
        if(setBot04 == true){
            bot_boat04.src = "./res/img/boat_cross.png"
            bot_boat04.style.opacity = "100%";
            b04.style.pointerEvents = "none";
            setBot04 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot04 == false){
            b04.style.animationName = "damage";
            b04.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b05.onclick = () =>{
        if(setBot05 == true){
            bot_boat05.src = "./res/img/boat_cross.png"
            bot_boat05.style.opacity = "100%";
            b05.style.pointerEvents = "none";
            setBot05 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot05 == false){
            b05.style.animationName = "damage";
            b05.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b06.onclick = () =>{
        if(setBot06 == true){
            bot_boat06.src = "./res/img/boat_cross.png"
            bot_boat06.style.opacity = "100%";
            b06.style.pointerEvents = "none";
            setBot06 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot06 == false){
            b06.style.animationName = "damage";
            b06.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b07.onclick = () =>{
        if(setBot07 == true){
            bot_boat07.src = "./res/img/boat_cross.png"
            bot_boat07.style.opacity = "100%";
            b07.style.pointerEvents = "none";
            setBot07 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot07 == false){
            b07.style.animationName = "damage";
            b07.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b08.onclick = () =>{
        if(setBot08 == true){
            bot_boat08.src = "./res/img/boat_cross.png"
            bot_boat08.style.opacity = "100%";
            b08.style.pointerEvents = "none";
            setBot08 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot08 == false){
            b08.style.animationName = "damage";
            b08.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b09.onclick = () =>{
        if(setBot09 == true){
            bot_boat09.src = "./res/img/boat_cross.png"
            bot_boat09.style.opacity = "100%";
            b09.style.pointerEvents = "none";
            setBot09 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot09 == false){
            b09.style.animationName = "damage";
            b09.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b10.onclick = () =>{
        if(setBot10 == true){
            bot_boat10.src = "./res/img/boat_cross.png"
            bot_boat10.style.opacity = "100%";
            b10.style.pointerEvents = "none";
            setBot10 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot10 == false){
            b10.style.animationName = "damage";
            b10.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b11.onclick = () =>{
        if(setBot11 == true){
            bot_boat11.src = "./res/img/boat_cross.png"
            bot_boat11.style.opacity = "100%";
            b11.style.pointerEvents = "none";
            setBot11 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot11 == false){
            b11.style.animationName = "damage";
            b11.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b12.onclick = () =>{
        if(setBot12 == true){
            bot_boat12.src = "./res/img/boat_cross.png"
            bot_boat12.style.opacity = "100%";
            b12.style.pointerEvents = "none";
            setBot12 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot12 == false){
            b12.style.animationName = "damage";
            b12.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b13.onclick = () =>{
        if(setBot13 == true){
            bot_boat13.src = "./res/img/boat_cross.png"
            bot_boat13.style.opacity = "100%";
            b13.style.pointerEvents = "none";
            setBot13 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot13 == false){
            b13.style.animationName = "damage";
            b13.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b14.onclick = () =>{
        if(setBot14 == true){
            bot_boat14.src = "./res/img/boat_cross.png"
            bot_boat14.style.opacity = "100%";
            b14.style.pointerEvents = "none";
            setBot14 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot14 == false){
            b14.style.animationName = "damage";
            b14.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b15.onclick = () =>{
        if(setBot15 == true){
            bot_boat15.src = "./res/img/boat_cross.png"
            bot_boat15.style.opacity = "100%";
            b15.style.pointerEvents = "none";
            setBot15 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot15 == false){
            b15.style.animationName = "damage";
            b15.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b16.onclick = () =>{
        if(setBot16 == true){
            bot_boat16.src = "./res/img/boat_cross.png"
            bot_boat16.style.opacity = "100%";
            b16.style.pointerEvents = "none";
            setBot16 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot16 == false){
            b16.style.animationName = "damage";
            b16.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b17.onclick = () =>{
        if(setBot17 == true){
            bot_boat17.src = "./res/img/boat_cross.png"
            bot_boat17.style.opacity = "100%";
            b17.style.pointerEvents = "none";
            setBot17 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot17 == false){
            b17.style.animationName = "damage";
            b17.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b18.onclick = () =>{
        if(setBot18 == true){
            bot_boat18.src = "./res/img/boat_cross.png"
            bot_boat18.style.opacity = "100%";
            b18.style.pointerEvents = "none";
            setBot18 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot18 == false){
            b18.style.animationName = "damage";
            b18.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b19.onclick = () =>{
        if(setBot19 == true){
            bot_boat19.src = "./res/img/boat_cross.png"
            bot_boat19.style.opacity = "100%";
            b19.style.pointerEvents = "none";
            setBot19 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot19 == false){
            b19.style.animationName = "damage";
            b19.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b20.onclick = () =>{
        if(setBot20 == true){
            bot_boat20.src = "./res/img/boat_cross.png"
            bot_boat20.style.opacity = "100%";
            b20.style.pointerEvents = "none";
            setBot20 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot20 == false){
            b20.style.animationName = "damage";
            b20.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b21.onclick = () =>{
        if(setBot21 == true){
            bot_boat21.src = "./res/img/boat_cross.png"
            bot_boat21.style.opacity = "100%";
            b21.style.pointerEvents = "none";
            setBot21 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot21 == false){
            b21.style.animationName = "damage";
            b21.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b22.onclick = () =>{
        if(setBot22 == true){
            bot_boat22.src = "./res/img/boat_cross.png"
            bot_boat22.style.opacity = "100%";
            b22.style.pointerEvents = "none";
            setBot22 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot22 == false){
            b22.style.animationName = "damage";
            b22.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b23.onclick = () =>{
        if(setBot23 == true){
            bot_boat23.src = "./res/img/boat_cross.png"
            bot_boat23.style.opacity = "100%";
            b23.style.pointerEvents = "none";
            setBot23 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot23 == false){
            b23.style.animationName = "damage";
            b23.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b24.onclick = () =>{
        if(setBot24 == true){
            bot_boat24.src = "./res/img/boat_cross.png"
            bot_boat24.style.opacity = "100%";
            b24.style.pointerEvents = "none";
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot24 == false){
            b24.style.animationName = "damage";
            b24.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
    }
    b25.onclick = () =>{
        if(setBot25 == true){
            bot_boat25.src = "./res/img/boat_cross.png"
            bot_boat25.style.opacity = "100%";
            b25.style.pointerEvents = "none";
            setBot25 = false;
            numOfHisBoats++;
            dancePatrick();
            minusHisBoats();
        }else if(setBot25 == false){
            b25.style.animationName = "damage";
            b25.style.animationPlayState = "running";
            endDamageFun();
        }
        botTurn();
        console.log(numOfHisBoats)
    }
    
    a01.onclick = () =>{
        if(minusBoats != 0){
            boat01.style.display = "block";
            if(setBoat01 == true){}else{minusFun();}
            setBoat01 = true; 
        }
    }
    a02.onclick = () =>{
        if(minusBoats != 0){
            boat02.style.display = "block";
            if(setBoat02 == true){}else{minusFun();}
            setBoat02 = true;
        }
    }
    a03.onclick = () =>{
        if(minusBoats != 0){
            boat03.style.display = "block";
            if(setBoat03 == true){}else{minusFun();}
            setBoat03 = true;
        }
    }
    a04.onclick = () =>{
        if(minusBoats != 0){
            boat04.style.display = "block";
            if(setBoat04 == true){}else{minusFun();}
            setBoat04 = true;
        }
    }
    a05.onclick = () =>{
        if(minusBoats != 0){
            boat05.style.display = "block";
            if(setBoat05 == true){}else{minusFun();}
            setBoat05 = true;
        }
    }
    a06.onclick = () =>{
        if(minusBoats != 0){
            boat06.style.display = "block";
            if(setBoat06 == true){}else{minusFun();}
            setBoat06 = true;
        }
    }
    a07.onclick = () =>{
        if(minusBoats != 0){
            boat07.style.display = "block";
            if(setBoat07 == true){}else{minusFun();}
            setBoat07 = true;
        }
    }
    a08.onclick = () =>{
        if(minusBoats != 0){
            boat08.style.display = "block";
            if(setBoat08 == true){}else{minusFun();}
            setBoat08 = true;
        }
    }
    a09.onclick = () =>{
        if(minusBoats != 0){
            boat09.style.display = "block";
            if(setBoat09 == true){}else{minusFun();}
            setBoat09 = true;
        }
    }
    a10.onclick = () =>{
        if(minusBoats != 0){
            boat10.style.display = "block";
            if(setBoat10 == true){}else{minusFun();}
            setBoat10 = true;
        }
    }
    a11.onclick = () =>{
        if(minusBoats != 0){
            boat11.style.display = "block";
            if(setBoat11 == true){}else{minusFun();}
            setBoat11 = true;
        }
    }
    a12.onclick = () =>{
        if(minusBoats != 0){
            boat12.style.display = "block";
            if(setBoat12 == true){}else{minusFun();}
            setBoat12 = true;
        }
    }
    a13.onclick = () =>{
        if(minusBoats != 0){
            boat13.style.display = "block";
            if(setBoat13 == true){}else{minusFun();}
            setBoat13 = true;
        }
    }
    a14.onclick = () =>{
        if(minusBoats != 0){
            boat14.style.display = "block";
            if(setBoat14 == true){}else{minusFun();}
            setBoat14 = true;
        }
    }
    a15.onclick = () =>{
        if(minusBoats != 0){
            boat15.style.display = "block";
            if(setBoat15 == true){}else{minusFun();}
            setBoat15 = true;
        }
    }
    a16.onclick = () =>{
        if(minusBoats != 0){
            boat16.style.display = "block";
            if(setBoat16 == true){}else{minusFun();}
            setBoat16 = true;
        }
    }
    a17.onclick = () =>{
        if(minusBoats != 0){
            boat17.style.display = "block";
            if(setBoat17 == true){}else{minusFun();}
            setBoat17 = true;
        }
    }
    a18.onclick = () =>{
        if(minusBoats != 0){
            boat18.style.display = "block";
            if(setBoat18 == true){}else{minusFun();}
            setBoat18 = true;
        }
    }
    a19.onclick = () =>{
        if(minusBoats != 0){
            boat19.style.display = "block";
            if(setBoat19 == true){}else{minusFun();}
            setBoat19 = true;
        }
    }
    a20.onclick = () =>{
        if(minusBoats != 0){
            boat20.style.display = "block";
            if(setBoat20 == true){}else{minusFun();}
            setBoat20 = true;
        }
    }
    a21.onclick = () =>{
        if(minusBoats != 0){
            boat21.style.display = "block";
            if(setBoat21 == true){}else{minusFun();}
            setBoat21 = true;
        }
    }
    a22.onclick = () =>{
        if(minusBoats != 0){
            boat22.style.display = "block";
            if(setBoat22 == true){}else{minusFun();}
            setBoat22 = true;
        }
    }
    a23.onclick = () =>{
        if(minusBoats != 0){
            boat23.style.display = "block";
            if(setBoat23 == true){}else{minusFun();}
            setBoat23 = true;
        }
    }
    a24.onclick = () =>{
        if(minusBoats != 0){
            boat24.style.display = "block";
            if(setBoat24 == true){}else{minusFun();}
            setBoat24 = true;
        }
    }
    a25.onclick = () =>{
        if(minusBoats != 0){
            boat25.style.display = "block";
            if(setBoat25 == true){}else{minusFun();}
            setBoat25 = true;
        }
    }
}

window.onload = () =>{
    gameStart();
}

play_again.onclick = () =>{
    bubble.src = "./res/gif/bubble.gif";
    bubbles.play();
        bubble.style.display = "block";
        setTimeout(() => {
            bubble.style.display = "none";
            bubble.src = "none";
        }, 1000);
        setTimeout(() => {
            arrow.style.display = "none";
        }, 250);
        setTimeout(() => {
            gameStart();
            replay.style.display = "none";
            game.style.display = "flex";
            boat01.style.display = "none";
            boat02.style.display = "none";
            boat03.style.display = "none";
            boat04.style.display = "none";
            boat05.style.display = "none";
            boat06.style.display = "none";
            boat07.style.display = "none";
            boat08.style.display = "none";
            boat09.style.display = "none";
            boat10.style.display = "none";
            boat11.style.display = "none";
            boat12.style.display = "none";
            boat13.style.display = "none";
            boat14.style.display = "none";
            boat15.style.display = "none";
            boat16.style.display = "none";
            boat17.style.display = "none";
            boat18.style.display = "none";
            boat19.style.display = "none";
            boat20.style.display = "none";
            boat21.style.display = "none";
            boat22.style.display = "none";
            boat23.style.display = "none";
            boat24.style.display = "none";
            boat25.style.display = "none";
            botTable.style.visibility = "visible";
            spongebobBoats.style.visibility = "visible";
            spongebobBoats.style.display = "none";
            patrickBoats.style.display = "none";
            myNumber = 5;
            hisNumber = 5;
            myCounter.innerHTML = myNumber;
            hisCounter.innerHTML = hisNumber;
            setboats.style.display = "block";
            counter.style.display = "block";
            game.style.flexDirection = "column";
            bot_boat01.style.opacity = "0%";
            bot_boat02.style.opacity = "0%";
            bot_boat03.style.opacity = "0%";
            bot_boat04.style.opacity = "0%";
            bot_boat05.style.opacity = "0%";
            bot_boat06.style.opacity = "0%";
            bot_boat07.style.opacity = "0%";
            bot_boat08.style.opacity = "0%";
            bot_boat09.style.opacity = "0%";
            bot_boat10.style.opacity = "0%";
            bot_boat11.style.opacity = "0%";
            bot_boat12.style.opacity = "0%";
            bot_boat13.style.opacity = "0%";
            bot_boat14.style.opacity = "0%";
            bot_boat15.style.opacity = "0%";
            bot_boat16.style.opacity = "0%";
            bot_boat17.style.opacity = "0%";
            bot_boat18.style.opacity = "0%";
            bot_boat19.style.opacity = "0%";
            bot_boat20.style.opacity = "0%";
            bot_boat21.style.opacity = "0%";
            bot_boat22.style.opacity = "0%";
            bot_boat23.style.opacity = "0%";
            bot_boat24.style.opacity = "0%";
            bot_boat25.style.opacity = "0%";
            b01.style.pointerEvents = "auto";
            b02.style.pointerEvents = "auto";
            b03.style.pointerEvents = "auto";
            b04.style.pointerEvents = "auto";
            b05.style.pointerEvents = "auto";
            b06.style.pointerEvents = "auto";
            b07.style.pointerEvents = "auto";
            b08.style.pointerEvents = "auto";
            b09.style.pointerEvents = "auto";
            b10.style.pointerEvents = "auto";
            b11.style.pointerEvents = "auto";
            b12.style.pointerEvents = "auto";
            b13.style.pointerEvents = "auto";
            b14.style.pointerEvents = "auto";
            b15.style.pointerEvents = "auto";
            b16.style.pointerEvents = "auto";
            b17.style.pointerEvents = "auto";
            b18.style.pointerEvents = "auto";
            b19.style.pointerEvents = "auto";
            b20.style.pointerEvents = "auto";
            b21.style.pointerEvents = "auto";
            b22.style.pointerEvents = "auto";
            b23.style.pointerEvents = "auto";
            b24.style.pointerEvents = "auto";
            b25.style.pointerEvents = "auto";
        }, 400);
   
}

