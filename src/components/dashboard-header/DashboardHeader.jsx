import React from "react";
import { HeaderContainer, SwitchButtonsContainer } from "./styles";
import { Button } from "../button/Button";
import { ReactComponent as Logo } from "../../assets/leapwise-logo.svg";
import { Link } from "react-router-dom";

const DashboardHeader = ({ active, onSwitchButtonClick }) => {
  return (
    <>
      <HeaderContainer>
        <Logo style={{ margin: "16px" }} />
        <SwitchButtonsContainer>
          <Button
            variant={active === "links" ? "selected" : "switch"}
            onClick={() => onSwitchButtonClick("links")}
          >
            Links
          </Button>
          <Button
            variant={active === "profile" ? "selected" : "switch"}
            onClick={() => onSwitchButtonClick("profile")}
          >
            Profile details
          </Button>
        </SwitchButtonsContainer>
        <Link to="/preview">
          <Button variant={"preview"}>Preview</Button>
        </Link>
      </HeaderContainer>
    </>
  );
};

export default DashboardHeader;
