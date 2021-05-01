import './FaceDetection.scss';

const FaceDetection = ({ colors, imgUrl, coordinates }) => {
  const top = coordinates.top_row * 100;
  const right = coordinates.right_col * 100;
  const left = coordinates.left_col * 100;
  const bottom = coordinates.bottom_row * 100;
  const width = right - left;
  const height = bottom - top;

  return (
    imgUrl && (
      <div className='imgContainer'>
        <img src={imgUrl} alt='' />
        <div
          style={{
            background: 'rgba(0 , 0 , 0 , 0.2)',
            border: '2px solid black',
            position: 'absolute',
            width: `${width}%`,
            height: `${height}%`,
            top: `${top}%`,
            left: `${left}%`,
            bottom: `${bottom}%`,
            right: `${right}%`,
            zIndex: 2,
          }}
        ></div>
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
