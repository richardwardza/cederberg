import React, { useState } from "react";

import "./App.css";
import { Comments, randomiseComments } from "./Step3/lib";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { Step1 } from "./Step1/Step1";
import { Step2 } from "./Step2/Step2";
import { FormInput, initialValues } from "./UserForm/lib";
import { Step3 } from "./Step3/Step3";
import { Step4 } from "./Step4/Step4";

type PInfo = {
  [k: string]: { color: string; title: string };
};

const progressInfo: PInfo = {
  "25": { color: "#F4D03F", title: "Introduction" },
  "50": { color: "#5DADE2", title: "Your Details" },
  "75": { color: "#58D68D", title: "PDF Comment section" },
  "100": { color: "#C39BD3", title: "Create PDF - finished" },
};

function App() {
  const [progress, setProgress] = useState<number>(25);
  const [formDetails, setFormDetails] = useState<FormInput>(initialValues);
  const [userComments, setComments] = useState<Comments>(randomiseComments());

  const gotoStep1 = () => {
    setProgress(25);
  };

  const gotoStep2 = () => {
    setProgress(50);
  };
  
  const gotoStep3 = () => {
    setProgress(75);
  };

  const updateFormDetails = (details: FormInput) => {
    setProgress(75);
    setFormDetails(details);
  };

  const updateComments = (comments: Comments) => {
    setProgress(100);
    setComments(comments);
  };

  return (
    <div className="App">
      <ProgressBar
        bgColor={progressInfo[`${progress}`].color}
        progress={progress}
        height="20px"
        label={progressInfo[`${progress}`].title}
      />
      <header className="App-header">
        <div className="App-content">
          {progress === 25 && <Step1 next={gotoStep2} />}
          {progress === 50 && <Step2 onSubmit={updateFormDetails} details={formDetails} restartProcess={gotoStep1} />}
          {progress === 75 && (
            <Step3
              details={formDetails}
              restartProcess={gotoStep1}
              saveComments={updateComments}
            />
          )}
          {progress === 100 && (
            <Step4
              details={formDetails}
              comments={userComments}
              goBack={gotoStep3}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
