
export type FormInput = {
  title: string;
  firstName: string;
  surname: string;
  organisation: string;
  position: string;
  postalAddress: string;
  city: string;
  telephone: string;
  fax: string;
  cell: string;
  email: string;

}

export const initialValues = {
  title: "",
  firstName: "",
  surname: "",
  organisation: "",
  position: "",
  postalAddress: "",
  city: "",
  telephone: "",
  fax: "",
  cell: "",
  email: "",
};


export const validateForm = (values: FormInput) => {
  const errors = {} as FormInput;
  if (!values.email && !values.cell && !values.fax && !values.telephone) {
    errors.cell = "** one of these is required";
  } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "* invalid email address";
  }
  if (!values.firstName || !values.surname) {
    errors.firstName = "* required";
  }
  return errors;
}