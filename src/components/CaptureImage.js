import React from "react";

export default class CaptureImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constraints: { audio: false, video: { width: 400, height: 300 } }
    };
    this.startWebcam = this.startWebcam.bind(this);
    this.takePicture = this.takePicture.bind(this);
    this.clearPhoto = this.clearPhoto.bind(this);
  }

  startWebcam() {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        // constraints
        this.state.constraints,

        // successCallback
        function(localMediaStream) {
          let video = document.querySelector("video");
          video.src = window.URL.createObjectURL(localMediaStream);
          let webcamStream = localMediaStream;
        },

        // errorCallback
        function(err) {
          console.log("The following error occured: " + err);
        }
      );
    } else {
      console.log("getUserMedia not supported");
    }
  }

  clearPhoto() {
    const canvas = document.querySelector("canvas");
    const photo = document.getElementById("photo");
    const context = canvas.getContext("2d");
    const { width, height } = this.state.constraints.video;
    context.fillStyle = "#FFF";
    context.fillRect(0, 0, width, height);
    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  handleStartClick(event) {
    event.preventDefault();
    this.takePicture();
  }

  takePicture() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const video = document.querySelector("video");
    const photo = document.getElementById("photo");
    const { width, height } = this.state.constraints.video;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.startWebcam}>Start WebCam</button>
          <button onClick={this.takePicture}>Take Snapshot</button>
        </p>
        <video
          onClick={this.takePicture}
          width="300"
          height="400"
          id="video"
          controls
          autoPlay
        />
        <p>Screenshots :</p>
        <canvas id="canvas" width="400" height="400" />
      </div>
    );
  }
}
