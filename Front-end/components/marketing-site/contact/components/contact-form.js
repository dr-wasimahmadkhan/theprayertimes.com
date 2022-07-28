import React from 'react';
import {fieldValidateBool} from "@/utils/form";
import {Field} from "formik";

type Props = {
    values: any,
    errors: any,
    dirty: boolean,
    isSubmitting: boolean,
    handleChange: Function,
    handleBlur: Function,
    handleSubmit: Function,
    isLoadingSave: boolean,
    setFieldValue: any,
};
const ContactForm = (props: Props) => {
  const {
    values,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    isLoadingSave } = props;
  return (
    <form method="post" className="contact-validation-active" id="contact-form">
      <Field name="full_name">
        {({field, form}) => {
          return (
            <div>
              <input
                type="text"
                value={values.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                className="form-control error"
                name="full_name"
              />
              {fieldValidateBool(field, form) && (
                <label
                  id="name-error"
                  className="error"
                  htmlFor="full_name"
                >
                  {errors.full_name}
                </label>
              )}
            </div>
          );
        }}
      </Field>
      <Field name="email">
        {({field, form}) => {
          return (
            <div>
              <input
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="form-control error"
                name="email"
              />
              {fieldValidateBool(field, form) && (
                <label
                  id="name-error"
                  className="error"
                  htmlFor="email"
                >
                  {errors.email}
                </label>
              )}
            </div>
          );
        }}
      </Field>
      <Field name="subject">
        {({field, form}) => {
          return (
            <div>
              <input
                type="text"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your subject"
                className="form-control error"
                name="subject"
              />
              {fieldValidateBool(field, form) && (
                <label
                  id="name-error"
                  className="error"
                  htmlFor="subject"
                >
                  {errors.subject}
                </label>
              )}
            </div>
          );
        }}
      </Field>
      <Field name="message">
        {({field, form}) => {
          return (
            <div>
              <textarea
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your message"
                className="form-control error"
                name="message"
              />
              {fieldValidateBool(field, form) && (
                <label
                  id="name-error"
                  className="error"
                  htmlFor="message"
                >
                  {errors.message}
                </label>
              )}
            </div>
          );
        }}
      </Field>
      <div className="submit-area">
        <button type="button" onClick={handleSubmit} disabled={!dirty || isSubmitting || isLoadingSave} className="theme-btn submit-btn">Send Message</button>
      </div>
    </form>
  );
};
export { ContactForm };