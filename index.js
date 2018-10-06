const startButton = document.getElementById('start-button')
const cameraOne = document.getElementById('camera-one')
const cameraTwo = document.getElementById('camera-two')


const setVideoSrc = (stream) => {
  const video = document.getElementById('video')

  video.srcObject = stream
  video.play()
}

const playVideo = (deviceId) => {
  startButton.hidden = true
  cameraOne.hidden = false
  cameraTwo.hidden = false

  const constraints = {
    video: {
      width: window.innerWidth,
      height: window.innerHeight,
      deviceId
    }
  }

  navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    setVideoSrc(stream)
  })
  .catch((err) => {
    console.log(err);
  })
}

const setCamera = (e, videoIndex=0) => {
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    let videoInputs = devices.filter((device) => {
      return device.kind === 'videoinput'
    })

    let deviceId = videoInputs[videoIndex].deviceId

    playVideo(deviceId)
  })
}

const switchCamera = (e) => {
  cameraOne.disabled = !cameraOne.disabled
  cameraTwo.disabled = !cameraTwo.disabled
  setCamera(e, e.target.value - 1)
}

cameraOne.onclick = switchCamera
cameraTwo.onclick = switchCamera
startButton.onclick = setCamera
