const playList = [
    {      
      title: 'Aqua Caelestis',
      src: '../assets/sounds/Aqua Caelestis.mp3',
      duration: '00:39'
    },  
    {      
      title: 'Ennio Morricone',
      src: '../assets/sounds/Ennio Morricone.mp3',
      duration: '01:37'
    },  
    {      
      title: 'River Flows In You',
      src: '../assets/sounds/River Flows In You.mp3',
      duration: '01:37'
    },  
    {      
      title: 'Summer Wind',
      src: '../assets/sounds/Summer Wind.mp3',
      duration: '01:50'
    },  
   
  ]

  const playListContainer = document.querySelector('.play-list')
  playList.forEach(el => {
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.textContent = el.title
    playListContainer.append(li)
})

const playBtn = document.querySelector('.play')
const playNextBtn = document.querySelector('.play-next')
const playPrevBtn = document.querySelector('.play-prev')
const audio = new Audio()

const playListItems = document.querySelectorAll('.play-item')
console.log(playListItems);
let isPlay = false
let playNum = 0

let toggleActiveClass = () => {
  playListItems.forEach(item => item.classList.remove('item-active'))
  playListItems[playNum].classList.add('item-active')
}


 let playAudio = () => {
    if (!isPlay) {
        audio.src = playList[playNum].src
        audio.currentTime = 0
        audio.play()
        toggleActiveClass()
        isPlay = true
        playBtn.classList.add('pause')
    } else {
        audio.pause()
        isPlay = false
        playBtn.classList.remove('pause')
    }
 }

 let prevNextBtnClick = () => {
  audio.src = playList[playNum].src
  audio.currentTime = 0
  audio.play()
  isPlay = true
  playBtn.classList.add('pause')
}




let playNext = () => {
  playNum++ 
  if (playNum >3) {
    playNum = 0
  }
  toggleActiveClass()
   prevNextBtnClick()
   
}

let playPrev = () => {
  playNum--
  if (playNum < 0) {
    playNum = playList.length -1
  }
  toggleActiveClass()
  prevNextBtnClick()

}

let autoSwitchTrack = () => {
  playNum++ 
  if (playNum > 3) {
    playNum = 0
  }
  audio.src = playList[playNum].src
  audio.currentTime = 0
  audio.play()
  toggleActiveClass()

}
audio.addEventListener('ended', autoSwitchTrack )
playPrevBtn.addEventListener('click', playPrev)
playNextBtn.addEventListener('click', playNext)
playBtn.addEventListener('click', playAudio)

