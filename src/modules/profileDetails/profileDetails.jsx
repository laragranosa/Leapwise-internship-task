import { React, useEffect, useState } from "react";
import { Button } from "../../components/button/Button";
import InputField from "../../components/input/Input";
import ProfileImage from "../../components/profile-image/ProfileImage";
import { profileFormSchema } from "../../types/profile.types";

import {
  ProfileDetailsContainer,
  ComponentHeader,
  HeaderTitle,
  HeaderDescription,
  RowComponent,
  ProfileDataFormContainer,
  ProfilePictureContainer,
  ProfileFieldName,
  ProfileDataFieldsContainer,
  StyledLabel,
  SaveButtonContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const LOCAL_STORAGE_KEY = "profileData";

const ProfileDetails = ({ updateData }) => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const imageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(profileFormSchema),
  });

  const onSubmit = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    const profileData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profileData));
    updateData(profileData);
  };

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFirstName(parsedData.firstName);
      setLastName(parsedData.lastName);
      setEmail(parsedData.email);
      setValue("firstName", parsedData.firstName);
      setValue("lastName", parsedData.lastName);
      setValue("email", parsedData.email);
    }
  }, [setValue]);

  return (
    <ProfileDetailsContainer>
      <ComponentHeader>
        <HeaderTitle>Profile details</HeaderTitle>
        <HeaderDescription>
          Add your details to create a personal touch to your profile.
        </HeaderDescription>
      </ComponentHeader>
      <ProfileDataFormContainer onSubmit={handleSubmit(onSubmit)}>
        <ProfilePictureContainer>
          <StyledLabel>Profile picture</StyledLabel>
          <ProfileImage
            onChange={imageUpload}
            file={image}
            style={{ width: "40%" }}
          />
          <StyledLabel>Image must be below 1024x1024px.</StyledLabel>
        </ProfilePictureContainer>
        <ProfileDataFieldsContainer>
          <RowComponent>
            <ProfileFieldName>First Name:</ProfileFieldName>
            <InputField
              type="text"
              name="firstName"
              placeholder="e.g. John"
              variant={errors.firstName ? "error" : "default"}
              register={register}
              errors={errors.firstName}
              defaultValue={firstName}
            />
          </RowComponent>
          <RowComponent>
            <ProfileFieldName>Last Name:</ProfileFieldName>
            <InputField
              type="text"
              name="lastName"
              placeholder="e.g. Doe"
              variant={errors.lastName ? "error" : "default"}
              register={register}
              errors={errors.lastName}
              defaultValue={lastName}
            />
          </RowComponent>
          <RowComponent>
            <ProfileFieldName>Email:</ProfileFieldName>
            <InputField
              type="text"
              name="email"
              placeholder="e.g. alex@email.com"
              variant={errors.email ? "error" : "default"}
              register={register}
              errors={errors.email}
              defaultValue={email}
            />
          </RowComponent>
          <SaveButtonContainer>
            <Button
              variant={"login"}
              style={{ margin: "40px 20px 10px", width: "100px" }}
            >
              Save
            </Button>
          </SaveButtonContainer>
        </ProfileDataFieldsContainer>
      </ProfileDataFormContainer>
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
