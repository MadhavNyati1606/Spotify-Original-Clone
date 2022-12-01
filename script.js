console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: 'Let me Love You', filepath: 'songs/1.mp3' , coverpath:'covers/1.jpg'},
    {songName: 'Marjawaan', filepath: 'songs/2.mp3' , coverpath:'covers/2.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/3.mp3' , coverpath:'covers/3.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/4.mp3' , coverpath:'covers/4.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/5.mp3' , coverpath:'covers/5.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/6.mp3' , coverpath:'covers/6.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/7.mp3' , coverpath:'covers/7.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/8.mp3' , coverpath:'covers/8.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/9.mp3' , coverpath:'covers/9.jpg'},
    {songName: 'Let me Love You', filepath: 'songs/10.mp3' , coverpath:'covers/10.jpg'},
]

songItems.forEach((element,i)=>{
    console.log(element , i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})
// audioElement.play();
masterPlay.addEventListener("click" , () => {
    if(audioElement.paused || audioElement.currentTime<=0){
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

audioElement.addEventListener("timeupdate", () => {
    console.log("time update");

    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change" , () => {
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
})

