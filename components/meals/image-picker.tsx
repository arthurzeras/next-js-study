"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./image-picker.module.css";

interface Props {
  name: string;
  label: string;
}

export default function ImagePicker({ label, name }: Props) {
  const [previewFile, setPreviewFile] = useState("");
  const inputFile = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    inputFile.current?.click();
  }

  function handleImageChange() {
    const file = inputFile.current?.files?.[0];

    if (!file) {
      setPreviewFile("");
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPreviewFile(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!previewFile && <p>No image selected</p>}
          {previewFile && (
            <Image src={previewFile} alt="Image selected by user" fill />
          )}
        </div>
        <input
          required
          id={name}
          type="file"
          name={name}
          ref={inputFile}
          className={styles.input}
          onChange={handleImageChange}
          accept="image/png, image/jpeg"
        />

        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
