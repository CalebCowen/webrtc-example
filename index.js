const constraints = {
  video: { width: window.innerWidth, height: window.innerHeight }
}

const video = document.getElementById('video')

const startButton = document.getElementById('start-button')
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
  this.stream = stream
  startButton.onclick = startVideo
})
.catch((err) => {
  console.log(err);
})

const startVideo = () => {
  video.srcObject = this.stream
  video.play()
}
