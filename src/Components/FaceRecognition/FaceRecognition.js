import React from 'react';
import './FaceRecognition.css'

// Component that will display the image on the screen and put a box around the face
const FaceRecognition = ({ imageUrl, box }) => {
    return (
       <div className='center ma'>
        <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
        <div className='bounding-box' style ={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
       </div>
    );
}

export default FaceRecognition