const constraints = {
  video: { width: window.innerWidth, height: window.innerHeight }
}

navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
  const video = document.getElementById('video')
  video.srcObject = stream
  video.play()
})
.catch((err) => {
  console.log(err);
})
