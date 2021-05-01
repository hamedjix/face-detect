import './ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onSubmit, imgUrl }) => {
  return (
    <div className='ImageLinkForm'>
      <p>Paste Your Image URL, We Detect Face if There is One!</p>
      <div className='inputContainer'>
        <input type='text' onChange={onInputChange} />
        <button onClick={onSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
