import { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: '0732bbbb126f4b339baa83a24f2e9347',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };
  onSubmit = () => {
    console.log('hi');
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
  };
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
