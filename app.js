console.log("Welcome to spotify");

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let audioElement = new Audio("songs/1.mp3");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let song = [
    {songName: "Warriyo-Mortals[NCS Release]" , songPath :'songs/1.mp3' , coverPath: "covers/1.jpg" },
    {songName: "Cielo Huma-Huma" , songPath :'songs/2.mp3' , coverPath: "covers/2.jpg" },
    {songName: "DEAF KEV - Invincible" , songPath :'songs/3.mp3' , coverPath: "covers/3.jpg" },
    {songName: "MY HEART" , songPath :'songs/4.mp3' , coverPath: "covers/4.jpg" },
    {songName: "Janji-Heroes Tonight-feat johnning" , songPath :'songs/5.mp3' , coverPath: "covers/5.jpg" },
    {songName: "Rabba Salam-E-Ishq" , songPath :'songs/6.mp3' , coverPath: "covers/6.jpg" },
    {songName: "Sakhiyaan" , songPath :'songs/7.mp3' , coverPath: "covers/7.jpg" },
    {songName: "Muskuraha-Mitraz" , songPath :'songs/8.mp3' , coverPath: "covers/8.jpg" },
    {songName: "Akhiyaan-Mitraz" , songPath :'songs/9.mp3' , coverPath: "covers/9.jpg" },
    {songName: "Tune Kaha - Prateek kuhad" , songPath :'songs/10.mp3' , coverPath: "covers/10.jpg" },
]
songItems.forEach((element , i) => {
    console.log(element , i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
});


masterPlay.addEventListener("click", (e) => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate", (e) => {
    console.log("timeupdate");

    progress = parseInt((audioElement.currentTime/audioElement.duration )*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change" , (e) => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.add("fa-play-circle");

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener("click", (e) =>{
        makeAllPlay();
        console.log(e.target);
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
});




