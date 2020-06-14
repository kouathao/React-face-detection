import React from "react";
// add css to style the facebox
import "./FaceDetect.css";
// pass the box state to the component

const FaceDetect = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {/* insert an id to be able to manipulate the image in the DOM  */}
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {/* //this is the div displaying the faceDetect box base on the bounding box
        value */}
        <div
          className="bounding-box"
          // styling that makes the box visible base on the return value
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceDetect;
