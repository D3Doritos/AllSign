import React, {Component} from 'react'
import axios from 'axios'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
 
const Interactive = () => {
  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const res = await axios.post('https://allsignpython.herokuapp.com/result', imageSrc)
      console.log(res)
    },
    [webcamRef]
  );
 
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};
export default Interactive
