import Joi from "joi";

export const profileFormSchema = Joi.object({
  firstName: Joi.string().min(1).message("Can't be empty"),
  lastName: Joi.string().min(1).message("Can't be empty"),
  email: Joi.string()
    .optional()
    .allow("")
    .email({ tlds: { allow: false } }),
});
