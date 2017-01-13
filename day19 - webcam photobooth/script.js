const video = document.getElementById('video');
const audio = document.getElementById('audio');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function Cam () {

}

Cam.prototype.getLiveStream = function () {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })
    .then(localMediaStream => {
        //console.log(localMediaStream);
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
    })
    .catch(err => {
        console.log('error', err);
    });
};

Cam.prototype.snapIt = function () {
    const data = canvas.toDataURL('image/jpeg');

    let anchor = document.createElement('a');
    anchor.href = data;
    anchor.setAttribute('download', 'snapItPic');

    anchor.innerHTML = `<img src="${data}" alt="Snap it picture" />`;
    document.getElementsByClassName('no-media')[0].appendChild(anchor);
};

Cam.prototype.putToCanvas = function() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        let pixels = ctx.getImageData(0, 0, width, height);
        //console.log(pixels);
    }, 16);
};

var cam = new Cam();
cam.getLiveStream();

video.addEventListener('canplay', cam.putToCanvas);

document.getElementById('snap').addEventListener('click', cam.snapIt);