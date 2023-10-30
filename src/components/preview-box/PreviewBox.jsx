import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsFacebook, BsYoutube } from "react-icons/bs";
import { BoxContainer } from "./styles";

const style = { color: "white", fontSize: "30", padding: "8px" };
const icons = {
  YouTube: <BsYoutube style={style} />,
  GitHub: <BsGithub style={style} />,
  LinkedIn: <BsLinkedin style={style} />,
  Facebook: <BsFacebook style={style} />,
};

const PreviewBox = ({ variant }) => {
  return (
    <BoxContainer variant={variant}>
      {icons[variant]}
      <label style={style}>{variant}</label>
      <AiOutlineArrowRight style={style} />
    </BoxContainer>
  );
};

export default PreviewBox;
