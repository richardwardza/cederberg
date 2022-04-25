import React, { useEffect } from "react";
import styled from "styled-components";
import { Paragraph } from "../Step2/Step2";
import { Button } from "../UserForm/UserForm";
import { Intro } from "./Intro";

const About = styled.div`
  padding: 50px 0;
  color: white;
  text-align: left;
`;

const Link = styled.a`
  color: #ffffff;
`;

interface Step1Props {
  next: () => void;
}

export const Step1 = ({ next }: Step1Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Intro />
      <Button onClick={next}>{`Next >>`} </Button>
      <About>
        <h3>About</h3>
        <Paragraph>None of the information used is stored or shared in any way.</Paragraph>
        <Paragraph>
          <Link href="https://github.com/richardwardza/cederberg" target="_blank" rel="noreferrer">
            Source code available on github
          </Link>
        </Paragraph>
      </About>
    </div>
  );
};
