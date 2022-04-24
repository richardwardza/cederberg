import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { Button } from "../UserForm/UserForm";
import { randomiseComments, Comments } from "./lib";
import { Paragraph } from "../Step2/Step2";

export const CommentInput = styled.input`
  background-color: #f7f9f9;
  margin-bottom: 10px;
  padding: 10px;
`;

interface CommentProps {
  onSubmit: (details: Comments) => void;
  restartProcess: () => void;
}

const Input = styled(Field)`
  padding: 5px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CommentSection = ({ onSubmit, restartProcess }: CommentProps) => {
  const [comments, setComments] = useState<Comments>();

  useEffect(() => {
    const res = randomiseComments();
    setComments(res);
  }, []);

  return (
    <div>
      {comments && (
        <div>
          <Formik
            initialValues={comments}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, setFieldValue }) => {
              const reRandom = () => {
                const res = randomiseComments();
                setComments(res);
                setFieldValue("comment1", res.comment1);
                setFieldValue("comment2", res.comment2);
                setFieldValue("comment3", res.comment3);
                setFieldValue("comment4", res.comment4);
                setFieldValue("comment5", res.comment5);
                setFieldValue("comment6", res.comment6);
                setFieldValue("comment7", res.comment7);
              };

              return (
                <Form>
                  <Button onClick={reRandom} style={{ marginBottom: "10px" }}>{`randomise`}</Button>
                  <Paragraph style={{maxWidth: "100%"}}>
                    The 7th section has space for you: Use this space to detail how you use the Cederberg - hiking,
                    swimming, fishing, camping, climbing, biking, etc. Mention how your use of the Cederberg would
                    change if it were to be impacted by mining activities to drive home the potential economic impacts.
                  </Paragraph>
                  <Input rows={7} component="textarea" name="comment1" />
                  <Input rows={7} component="textarea" name="comment2" />
                  <Input rows={7} component="textarea" name="comment3" />
                  <Input rows={7} component="textarea" name="comment4" />
                  <Input rows={7} component="textarea" name="comment5" />
                  <Input rows={7} component="textarea" name="comment6" />
                  <Input
                    rows={7}
                    component="textarea"
                    name="userComment"
                    placeholder="Use this space to detail how you use the Cederberg - hiking, swimming, fishing, camping, climbing, biking, etc. Mention how your use of the Cederberg would change if it were to be impacted by mining activities to drive home the potential economic impacts. An example is: 
 
                    As both an outdoor enthusiast and aquatic scientist, I make frequent trips (> 15 trips / year) to the Cederberg for the purposes of hiking, climbing, camping, swimming, and research. I visit the Cederberg for its natural beauty and pristine wilderness areas. I would avoid visiting the area were it to be degraded by mining activities. The economic implications of such decisions by other visitors to the Cederberg are significant, especially by the avid fly-fishing community.
                    "
                  />
                  <Input rows={7} component="textarea" name="comment7" />
                  <Button onClick={restartProcess}>{`<< Back`}</Button>

                  <Button type="submit" disabled={isSubmitting}>
                    {`Next >>`}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </div>
  );
};
