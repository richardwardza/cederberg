import React from "react";
import { FormInput } from "../UserForm/lib";
import { Paragraph } from "../Step2/Step2";
import { Comments } from "./lib";
import { CommentSection } from "./CommentSection";

interface CreateProps {
  restartProcess: () => void;
  details: FormInput | undefined;
  saveComments: (comments: Comments) => void;
}

export const Step3 = ({ details, restartProcess, saveComments }: CreateProps) => {
  return (
    <div>
      <Paragraph>Here we populate the comments section from a set of predefined comments.</Paragraph>
      <Paragraph>
        Feel free to re-generate or modify the various sections and once you are happy, click "Next" (at the bottom) to get to the next step.
      </Paragraph>

      <div>
        <CommentSection onSubmit={saveComments} restartProcess={restartProcess} />
      </div>
    </div>
  );
};
