import { Component } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './data/particlesConfig.js';
import Clarifai from 'clarifai';
//Import Needed Components
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceDetection from './components/FaceDetection/FaceDetection.jsx';
//Clarifai
const app = new Clarifai.App({
  apiKey: '0732bbbb126f4b339baa83a24f2e9347',
});
//Main Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      colors: [],
      coordinates: {},
    };
  }

  //Input Change Handler
  onInputChange = (event) => {
    this.setState({ imgUrl: `${event.target.value}` });
  };
  //On Submit Handler - Face Detection
  onSubmit = () => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgUrl).then(
      (response) => {
        const coordinates =
          response.outputs[0].data.regions[0].region_info.bounding_box;
        this.setState({ coordinates: coordinates });
        console.log(coordinates);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  //Color Detect
  // onSubmit = () => {
  //   app.models.predict(Clarifai.COLOR_MODEL, this.state.imgUrl).then(
  //     (response) => {
  //       const colorCode = response.outputs[0].data.colors.map(
  //         (color) => color.raw_hex
  //       );
  //       this.setState({ colors: colorCode });
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // };

  //Rendering
  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesConfig} />
        <Navigation />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceDetection
          coordinates={this.state.coordinates}
          colors={this.state.colors}
          imgUrl={this.state.imgUrl}
        />
      </div>
    );
  }
}

export default App;
