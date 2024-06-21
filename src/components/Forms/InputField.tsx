import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const InputField = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input {...props} />
    </Fieldset>
  );
};

export default InputField;

const Fieldset = styled.fieldset`
  border: none;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding-left: 0.5rem;
  font-size: 1.4rem;
`;

const Input = styled.input`
  min-height: 3rem;
  border-radius: 0.8rem;
  border: 1px solid #aeb0b3;
`;
