import { useState } from 'react';
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
const App = () => {
  //States
  const [imgUrl, setImgUrl] = useState('');
  const [coordinates, setCoordinates] = useState({});

  //Input Change Handler
  const onInputChange = (e) => {
    setImgUrl(`${e.target.value}`);
  };
  //On Submit Handler - Face Detection
  const onSubmit = () => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, imgUrl).then(
      (response) => {
        const coordinates =
          response.outputs[0].data.regions[0].region_info.bounding_box;
        setCoordinates(coordinates);
      },
      (err) => console.log(err)
    );
  };

  //Rendering

  return (
    <div className='App'>
      <Particles className='particles' params={particlesConfig} />
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceDetection coordinates={coordinates} imgUrl={imgUrl} />
    </div>
  );
};

export default App;
