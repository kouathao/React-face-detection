import React, { Component } from "react";
// Import Clarifai into our App
import Clarifai from "clarifai";
import ImageSearchForm from "./Components/ImageSearchForm/ImageSearchForm";
// Uncomment FaceDetect Component
import FaceDetect from "./Components/FaceDetect/FaceDetect";
import "./App.css";

// You need to add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API,
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      // # a new object state that hold the bounding_box value
    };
  }

  // this function calculate the facedetect location in the image
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  /* this function display the face-detect box base on the state values */
  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        // # calculateFaceLocation function pass to displaybox as is parameter
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      // if error exist console.log error
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <ImageSearchForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {/* // box state pass to facedetect component */}
        <FaceDetect box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
export default App;
