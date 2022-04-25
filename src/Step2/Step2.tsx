import React, { useEffect } from "react";
import { FormInput } from "../UserForm/lib";
import { UserForm } from "../UserForm/UserForm";
import styled from "styled-components";

interface Step1Props {
  onSubmit: (details: FormInput) => void;
  restartProcess: () => void;
  details: FormInput;
}

export const Paragraph = styled.p`
  max-width: 600px;
`;

export const Step2 = ({ onSubmit, details, restartProcess }: Step1Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Paragraph>Fill it out form below.</Paragraph>
      <Paragraph>
        There is a section in the document that asks for your contact details. Only include as much information as you
        are comfortable sharing. If you share your email, you will receive project updates (in theory).
      </Paragraph>
      <Paragraph>
        * required
        <br />
        ** one of these are required
      </Paragraph>
      <UserForm onSubmit={onSubmit} details={details} restartProcess={restartProcess} />
    </div>
  );
};
