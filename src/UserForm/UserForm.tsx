import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormInput, validateForm } from "./lib";
import styled from "styled-components";

const Input = styled(Field)`
  padding: 5px;
`;

export const Button = styled.button`
  padding: 5px 20px;
  background-color: #abebc6;
  border-color: #a9dfbf;
  border-width: 2px;
  border-radius: 10;
`;

interface FormProps {
  onSubmit: (details: FormInput) => void;
  restartProcess: () => void;
  details: FormInput;
}

export const UserForm = ({ onSubmit, restartProcess, details }: FormProps) => {
  return (
    <div>
      <p></p>
      <Formik
        initialValues={details}
        validate={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <table>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>
                    <Input type="text" name="title" />
                  </td>
                </tr>
                <tr>
                  <td>First Name*</td>
                  <td>
                    <Input type="text" name="firstName" />
                  </td>
                </tr>
                <tr>
                  <td>Surname*</td>
                  <td>
                    <Input type="text" name="surname" />
                  </td>
                </tr>
                <tr>
                  <td>Organisation</td>
                  <td>
                    <Input type="text" name="organisation" />
                  </td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td>
                    <Input type="text" name="position" />
                  </td>
                </tr>
                <tr>
                  <td>Postal Address</td>
                  <td>
                    <Input type="text" name="postalAddress" />
                  </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>
                    <Input type="text" name="city" />
                  </td>
                </tr>
                <tr>
                  <td>Telephone**</td>
                  <td>
                    <Input type="text" name="telephone" />
                  </td>
                </tr>
                <tr>
                  <td>Fax**</td>
                  <td>
                    <Input type="text" name="fax" />
                  </td>
                </tr>
                <tr>
                  <td>Cell**</td>
                  <td>
                    <Input type="text" name="cell" />
                  </td>
                </tr>
                <tr>
                  <td>Email**</td>
                  <td>
                    <Input type="text" name="email" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ErrorMessage name="title" component="div" />
                    <ErrorMessage name="firstName" component="div" />
                    <ErrorMessage name="surname" component="div" />
                    <ErrorMessage name="organisation" component="div" />
                    <ErrorMessage name="position" component="div" />
                    <ErrorMessage name="postalAddress" component="div" />
                    <ErrorMessage name="city" component="div" />
                    <ErrorMessage name="telephone" component="div" />
                    <ErrorMessage name="fax" component="div" />
                    <ErrorMessage name="cell" component="div" />
                    <ErrorMessage name="email" component="div" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button onClick={restartProcess}>{`<< Back`}</Button>
                  </td>
                  <td>
                    <Button type="submit" disabled={isSubmitting}>
                      {`Next >>`}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        )}
      </Formik>
    </div>
  );
};
