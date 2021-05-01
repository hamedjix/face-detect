import './FaceDetection.scss';

import React from 'react';

const FaceDetection = ({ colors, imgUrl, coordinates }) => {
  return (
    imgUrl && (
      <div className='imgContainer'>
        <img src={imgUrl} alt='' />
      </div>
    )
  );
};

//Color Detection

/* <div className='imgContainer'>
  <img src={imgUrl} alt=':D' />
  <p>{colors}</p>
</div>; */

export default FaceDetection;
