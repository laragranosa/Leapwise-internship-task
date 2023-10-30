import Joi from "joi";

export const link = Joi.object({
  id: Joi.string().optional(),
  platform: Joi.string()
    .valid("GitHub", "YouTube", "LinkedIn", "Facebook")
    .required(),
  link: Joi.string().when("platform", {
    is: Joi.string().valid("GitHub"),
    then: Joi.string()
      .min(1)
      .message("Can't be empty")
      .uri({
        scheme: "https",
      })
      .regex(
        /^(https?:\/\/)?(www.)?github.com\/[A-Za-z0-9-]+(?:\/[A-Za-z0-9-]+)?$/
      ),
    otherwise: Joi.string().when("platform", {
      is: Joi.string().valid("YouTube"),
      then: Joi.string()
        .min(1)
        .message("Can't be empty")
        .uri({
          scheme: ["https"],
        })
        .regex(/^(https?:\/\/)?(www.)?youtube.com\/[A-Za-z0-9_?-]+/),
      otherwise: Joi.string().when("platform", {
        is: Joi.string().valid("LinkedIn"),
        then: Joi.string()
          .min(1)
          .message("Can't be empty")
          .uri({
            scheme: ["https"],
          })
          .regex(/^(https?:\/\/)?(www.)?linkedin.com\/in\/[A-Za-z0-9_-]+/),
        otherwise: Joi.string().when("platform", {
          is: Joi.string().valid("Facebook"),
          then: Joi.string()
            .min(1)
            .message("Can't be empty")
            .uri({
              scheme: ["https"],
            })
            .regex(/^(https?:\/\/)?(www.)?facebook.com\/[A-Za-z0-9.]+/),
          otherwise: Joi.string().valid(null),
        }),
      }),
    }),
  }),
});

export const linkListSchema = Joi.object({
  links: Joi.array().items(link),
});
