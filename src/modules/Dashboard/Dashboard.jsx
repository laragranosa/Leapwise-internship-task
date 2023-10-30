import DashboardHeader from "../../components/dashboard-header/DashboardHeader";
import LinksList from "../LinksList/LinksList";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import {
  DashboardBody,
  DeviceContainer,
  ProfilePreview,
  PreviewBoxContainer,
} from "./styles";
import ProfileDetails from "../profileDetails/profileDetails";
import { useState } from "react";
import PreviewBox from "../../components/preview-box/PreviewBox";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [currentList, setCurrentList] = useState([]);
  const [profileData, setProfileData] = useState("");

  const handleSwitchButtonClick = (component) => {
    setActiveComponent(component);
  };

  const updateLinks = (list) => {
    const newListPreview = [];
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i]) {
          newListPreview.push(list[i]);
        }
      }
      setCurrentList(newListPreview);
    }
  };

  const updateProfileData = (data) => {
    setProfileData(data);
  };

  return (
    <>
      <DashboardHeader
        active={activeComponent}
        onSwitchButtonClick={handleSwitchButtonClick}
      />
      <DashboardBody>
        <DeviceFrameset device="iPhone X" color="white" zoom="1">
          <DeviceContainer>
            <ProfilePreview>
              <CgProfile size={80} color={"#C6D752"} />
              <span style={{ fontSize: "20px" }}>
                {profileData
                  ? `${profileData.firstName} ${profileData.lastName}`
                  : "Ime i prezime"}
              </span>
              <span style={{ fontSize: "16px", color: "#737373" }}>
                {profileData ? profileData.email : ""}
              </span>
            </ProfilePreview>
            <PreviewBoxContainer>
              {currentList.map((item, index) => (
                <PreviewBox
                  variant={item.platform ? item.platform : "GitHub"}
                  key={index}
                />
              ))}
            </PreviewBoxContainer>
          </DeviceContainer>
        </DeviceFrameset>
        {activeComponent === "links" ? (
          <LinksList updateData={updateLinks} />
        ) : (
          <ProfileDetails updateData={updateProfileData} />
        )}
      </DashboardBody>
    </>
  );
};

export default Dashboard;
