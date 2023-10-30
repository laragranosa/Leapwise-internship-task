import React, { useState } from "react";
import InputField from "../../components/input/Input";
import { FormContainer, StyledForm, NeedAnAccount } from "./styles";
import FormHeader from "../../components/form-header/FormHeader";
import { ReactComponent as Logo } from "../../assets/leapwise-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginFormSchema } from "../../types/login.types";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginFormSchema),
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
            title={"Login"}
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
          <Button variant={"login"}>Login</Button>
        </StyledForm>

        <NeedAnAccount>
          <p>Don't have an account?</p>
          <Link to={"/register"}>Create account</Link>
        </NeedAnAccount>
      </FormContainer>
    </div>
  );
};

export default LoginForm;
