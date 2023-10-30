import Joi from "joi";

export const loginFormSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(1)
    .messages({
      "string.email": '"E-mail address format is incorrect"',
      "any.min": "'Can't be empty'",
    }),
  password: Joi.string()
    .min(8)
    .message("Password must have at least 8 characters"),
});
