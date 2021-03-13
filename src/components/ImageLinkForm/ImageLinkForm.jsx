import React from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className='ImageLinkForm'>
      <p>We Can Detect Faces! Try It!</p>
      <input type='text' onChange={onInputChange} />
      <button onClick={onSubmit}>Detect</button>
    </div>
  );
};

export default ImageLinkForm;
