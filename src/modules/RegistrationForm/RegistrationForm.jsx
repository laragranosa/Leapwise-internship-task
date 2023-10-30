import React from "react";
import InputField from "../../components/input/Input";
import { FormContainer } from "../LoginForm/styles";
import FormHeader from "../../components/form-header/FormHeader";
import { ReactComponent as Logo } from "../../assets/leapwise-logo.svg"; // Replace with the actual path
import { StyledForm, NeedAnAccount } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { registrationFormSchema } from "../../types/registration.types";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registrationFormSchema),
  });

  const onSubmit = (data) => {
    navigate("/homePage");
  };

  return (
    <div>
      <FormContainer>
        <Logo style={{ alignSelf: "center", width: "100%" }} />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormHeader
            title={"Registration"}
            description={"Add your details below to get back into the app"}
          />
          <InputField
            type="text"
            label="E-mail"
            name="email"
            placeholder="e.g. alex@email.com"
            variant={errors.email ? "error" : "default"}
            register={register}
            errors={errors.email}
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            variant={errors.password ? "error" : "default"}
            register={register}
            errors={errors.password}
          />
          <InputField
            type="password"
            label="Confirm password"
            name="confirmPassword"
            placeholder="Enter your password"
            variant={errors.confirmPassword ? "error" : "default"}
            register={register}
            errors={errors.confirmPassword}
          />
          <Button variant={"login"}>Registration</Button>
        </StyledForm>

        <NeedAnAccount>
          <p>Already have an account?</p>
          <Link to={"/login"}>Login</Link>
        </NeedAnAccount>
      </FormContainer>
    </div>
  );
};

export default RegistrationForm;
