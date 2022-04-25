import { useEffect } from "react";
import styled from "styled-components";
import { Paragraph } from "../Step2/Step2";
import { Comments, modifyPdf } from "../Step3/lib";
import { FormInput } from "../UserForm/lib";
import { Button } from "../UserForm/UserForm";

const EmailLink = styled.a`
  display: block;
  width: 90px;
  padding: 5px 20px;
  background-color: #abebc6;
  border-color: #a9dfbf;
  border-width: 2px;
  border-radius: 10;
  text-decoration: none;
  margin-top: 20px;
  color: #000000;
  font-size: 14px;
`;

const Divider = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 600px;
  padding: 5px;
`;

const Textarea = styled.textarea`
  width: 600px;
  padding: 5px;
`;

interface Step4Props {
  details: FormInput;
  comments: Comments;
  goBack: () => void;
}

export const Step4 = ({ details, comments, goBack }: Step4Props) => {
  const createPDF = () => {
    modifyPdf(details, comments);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const emailLink = `mailto:info@tprmining-resources.co.za,pheladi@tprmining-resources.co.za?subject=Request%20to%20register%20as%20an%20Interested%20and%20Affected%20Party%20%26%20BAR%20comment%20submission%20(Prospecting%20application%20WC%2030%2F5%2F1%2F1%2F3%2F2%2F103%20PR)&body=Dear%20Mr.%20Thato%20Ramoraswi%2C%0D%0A%0D%0AI%20would%20like%20to%20register%20as%20an%20Interested%20and%20Affected%20Party%20with%20regards%20to%20the%20application%20to%20prospect%20for%20iron%20and%20manganese%20on%20Farm%20Pompies%20Hoek%2063%20in%20the%20Witzenberg%20Local%20Municipality%20(prospecting%20right%20application%20WC%2030%2F5%2F1%2F1%2F2%2F10376%20PR).%0D%0A%0D%0AI%20would%20also%20like%20to%20submit%20comments%20regarding%20the%20BAR.%20My%20contact%20details%20and%20comments%20are%20in%20the%20attached%20document.%0D%0A%0D%0APlease%20can%20you%20acknowledge%20receipt%20of%20this%20email%2C%20confirm%20my%20registration%20as%20an%20IAP%20and%20confirm%20that%20my%20comments%20will%20be%20recorded%20in%20the%20Issues%20and%20Response%20report%3F%20%0D%0A%0D%0AThank%20you.%0D%0A%0D%0A${details.firstName} ${details.surname}`;

  return (
    <div>
      <Paragraph>
        We now use the 2 sets of information to create the PDF you need to register as an Interested and Affected
        Parties.
      </Paragraph>
      <Paragraph>Click the "Create PDF" button below and save the PDF to your device.</Paragraph>

      <Button onClick={createPDF}>Create PDF</Button>
      <Divider>Next Step:</Divider>
      <Paragraph>
        You can try using the "Create Email" button which should generate your email - DON'T FORGET TO ATTACH THE PDF
        before you send it.
      </Paragraph>
      <EmailLink href={emailLink} target="_blank">
        Create Email
      </EmailLink>
      <Paragraph>
        If the "Create Email" button does not work then copy the information below into an email and DON'T FORGET TO
        ATTACH THE PDF.
      </Paragraph>
      <Paragraph>
        To: <Input name="to" value="info@tprmining-resources.co.za, pheladi@tprmining-resources.co.za" />
      </Paragraph>
      <Paragraph>
        subject:
        <Input
          name="subject"
          value="Request to register as an Interested and Affected Party & BAR comment submission (Prospecting application WC 30/5/1/1/3/2/103 PR)"
        />
      </Paragraph>
      <Paragraph>
        body:
        <Textarea name="body" rows={15}>
          Dear Mr. Thato Ramoraswi, I would like to register as an Interested and Affected Party with regards to the
          application to prospect for iron and manganese on Farm Pompies Hoek 63 in the Witzenberg Local Municipality
          (prospecting right application WC 30/5/1/1/2/10376 PR). I would also like to submit comments regarding the
          BAR. My contact details and comments are in the attached document. Please can you acknowledge receipt of this
          email, confirm my registration as an IAP and confirm that my comments will be recorded in the Issues and
          Response report? Thank you.
        </Textarea>
      </Paragraph>
      <Button onClick={goBack}>{`<< Back`}</Button>
    </div>
  );
};
