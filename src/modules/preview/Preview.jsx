import {
  PreviewHeader,
  DeviceContainer,
  PreviewBoxContainer,
  ProfilePreview,
  PreviewBody,
  Containter,
} from "./styles";
import { Link } from "react-router-dom";
import React, { Button } from "../../components/button/Button";
import { CgProfile } from "react-icons/cg";
import PreviewBox from "../../components/preview-box/PreviewBox";
import { useState, useEffect } from "react";

const Preview = () => {
  const [currentList, setCurrentList] = useState([]);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("linkListData");
    if (JSON.parse(storedData)) {
      const list = JSON.parse(storedData).map((item, index) => ({
        id: index.toString(),
        platform: item.platform,
        link: item.link,
      }));
      setCurrentList(list);
    }

    const storedProfileData = localStorage.getItem("profileData");
    if (JSON.parse(storedProfileData)) {
      const parsedData = JSON.parse(storedProfileData);
      setProfileData(parsedData);
    }
  }, []);

  return (
    <Containter>
      <PreviewHeader>
        <Link to="/homePage">
          <Button variant={"preview"} style={{ padding: "5px" }}>
            Back to editor
          </Button>
        </Link>
        <Button variant={"share"}>Share link</Button>
      </PreviewHeader>
      <PreviewBody>
        <DeviceContainer>
          <ProfilePreview>
            <CgProfile size={80} color={"#C6D752"} />
            <span style={{ fontSize: "20px" }}>
              {`${profileData.firstName} ${profileData.lastName}`}
            </span>
            <span style={{ fontSize: "16px", color: "#737373" }}>
              {profileData.email}
            </span>
          </ProfilePreview>
          <PreviewBoxContainer>
            {currentList.map((item, index) => (
              <PreviewBox variant={item.platform} key={index} />
            ))}
          </PreviewBoxContainer>
        </DeviceContainer>
      </PreviewBody>
    </Containter>
  );
};

export default Preview;
