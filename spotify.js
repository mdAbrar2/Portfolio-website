console.log("am spotifies java scrpt\n");
let songindex=0;
let backwardicon = document.getElementById('backwardicon');
let forwardicon = document.getElementById('forwardicon');
let playicon = document.getElementById('playicon');
let audio = document.getElementById('song1');
let myloader = document.getElementById('myloader');
let mygif = document.getElementById('mygif');
let songbanner = Array.from(document.getElementsByClassName('songbanner'));
let mybox = [{ songname: "cheques", songpath: 'song0.mp3', songcover: "song1.jpg" },
{ songname: "no love", songpath: 'song1.mp3', songcover: "song2.jpg" },
{ songname: "excuses", songpath: 'song2.mp3', songcover: "song3.jpg" },
{ songname: "bewafa", songpath: 'song3.mp3', songcover: "bewafa cover.jpg" },
{ songname: "labon ko", songpath: 'song4.mp3', songcover: "labon ko cover.jpg" }];
// to print all image wrapper 
songbanner.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = mybox[i].songcover;
    element.getElementsByClassName('songname')[0].innerText =mybox[i].songname;
    
});

var song = new Audio('song0.mp3');
Array.from(document.getElementsByClassName('songname')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songindex = parseInt(e.target.id);
        song.src =`song${songindex}.mp3`;//backticks are used for ${}-literals
        song.currentTime = 0;
        song.play();
        mygif.style.opacity = 1;
        playicon.classList.remove('fa-circle-play');
        playicon.classList.add('fa-circle-pause');   
        document.getElementById('songlabel').innerText= mybox[songindex].songname
})


})

playicon.addEventListener('click', () => {
    if (song.paused || song.currentTime <= 0) {
        song.play();
        playicon.classList.remove('fa-circle-play');//dont live space between classname words it can throw an error
        playicon.classList.add('fa-circle-pause');
        mygif.style.opacity = 1;
        
    }
    else {
        song.pause();
        playicon.classList.remove('fa-circle-pause');//dont live space between classname words it can throw an error
        playicon.classList.add('fa-circle-play');
        mygif.style.opacity = 0;
        
    }
});


song.addEventListener("timeupdate", () => {
    progress = parseInt((song.currentTime / song.duration) * 100);
    myloader.value = progress;
    
});

// event listener for change in myloader
myloader.addEventListener('change', () => {
    song.currentTime = myloader.value * song.duration / 100;
    
    
    
})

document.getElementById("forwardicon").addEventListener('click',()=>{
    if(songindex>=(length.songlists)-1)
    {
        songindex=0;
    }
    else{
        
        songindex += 1;
    }
    
    song.src =`song${songindex}.mp3`;//backticks are used for ${}-literals
    song.currentTime = 0;
    song.play();
    mygif.style.opacity = 1;
    playicon.classList.remove('fa-circle-play');
    playicon.classList.add('fa-circle-pause');   
    document.getElementById('songlabel').innerText= mybox[songindex].songname
})
document.getElementById("backwardicon").addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
        
        songindex -= 1;
    }
    
    song.src =`song${songindex}.mp3`;//backticks are used for ${}-literals
    song.currentTime = 0;
    song.play();
    mygif.style.opacity = 1;
    playicon.classList.remove('fa-circle-play');
    playicon.classList.add('fa-circle-pause');   
    document.getElementById('songlabel').innerText= mybox[songindex].songname
})

