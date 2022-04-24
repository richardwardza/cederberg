import React from "react";
import { Button } from "../UserForm/UserForm";
import { Intro } from "./Intro";

interface Step1Props {
  next: () => void;
}

export const Step1 = ({ next }: Step1Props) => {
  return (
    <div>
      <Intro />
      <Button onClick={next}>{`Next >>`} </Button>
    </div>
  );
};
