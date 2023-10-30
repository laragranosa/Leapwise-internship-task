import React, { useState, useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import { UploadContainer, ImageContainer } from "./styles";

const ProfileImage = ({ file, imageChange }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const handleUploadBoxClick = (e) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <UploadContainer>
        <label
          onClick={handleUploadBoxClick}
          style={{
            width: "100%",
            textColor: "$greyLight",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          ) : (
            <ImageContainer>
              <BiImageAdd size={48} />
              <span>+ Upload</span>
            </ImageContainer>
          )}
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </UploadContainer>
    </div>
  );
};
export default ProfileImage;
