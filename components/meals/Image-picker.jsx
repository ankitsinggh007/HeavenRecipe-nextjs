"use client";
import React, { useRef, useState } from "react";
import classes from "./imagepicker.module.css";
import Image from "next/image";
function ImagePicker({ label, name }) {
  const inputFile = useRef();
  const handleClick = () => {
    inputFile.current.click();
  };
  const [imagePicked, setImagepicked] = useState();

  const handlePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagepicked(reader.result);
    };
    if (!file) {
      setImagepicked(null);
    } else {
      reader.readAsDataURL(file);
    }
  };

 

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePicked && <p>no image picked yet </p>}
          {imagePicked && (
            <Image src={imagePicked} fill alt="image selected by user" />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          accept=".jpg,.png"
          id={name}
          ref={inputFile}
          onChange={handlePreview}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
