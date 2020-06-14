import React from "react";
import "./ImageSearchForm.css";
// update the component with their parameter
const ImageSearchForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="ma5 mto">
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange} // add an onChange to monitor input state
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-blue"
            onClick={onSubmit} // add onClick function to perform task
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageSearchForm;
