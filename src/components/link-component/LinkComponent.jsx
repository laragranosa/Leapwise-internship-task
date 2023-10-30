import { React, useState } from "react";
import { Button } from "../button/Button";
import InputField from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import {
  LinkComponentContainer,
  RemoveButtonContainer,
  StyledDragger,
} from "./style";
import { FaGripLines } from "react-icons/fa";
import { LinksForm } from "../../modules/LinksList/styles";

const LinkComponent = ({
  index,
  item,
  removeAction,
  register,
  error,
  updateAction,
  ...dragHandle
}) => {
  const options = [
    {
      value: "GitHub",
      label: "GitHub",
    },
    { value: "YouTube", label: "YouTube" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Facebook", label: "Facebook" },
  ];

  const { onChange } = register(`links.${index}.platform`);

  const defaultPlatform = item.platform ? item.platform : options[0].value;
  const [selectedOption, setSelectedOption] = useState(defaultPlatform);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e);
    updateAction();
  };

  return (
    <LinkComponentContainer>
      <RemoveButtonContainer>
        <StyledDragger {...dragHandle}>
          <FaGripLines />
        </StyledDragger>
        <Button
          variant={"remove"}
          onClick={() => {
            removeAction(item.id);
          }}
          type="button"
        >
          Remove
        </Button>
      </RemoveButtonContainer>
      <Dropdown
        options={options}
        defaultValue={selectedOption}
        onOptionChange={handleOptionChange}
        register={register}
        name={`links.${index}.platform`}
      />
      <InputField
        label={"Link"}
        placeholder={"e.g. https://www.github.com"}
        register={register}
        name={`links.${index}.link`}
        errors={error && error.link}
        defaultValue={item.link ? item.link : ""}
      />
    </LinkComponentContainer>
  );
};

export default LinkComponent;
