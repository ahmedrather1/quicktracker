import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, deleteBook } from "../redux/BooksListSlice";

import Api from "../api/Api";

const initialFormState = {};

const formValidation = Yup.object().shape({});

function MediaForm() {
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="center">
      <Formik
        initialValues={{
          title: "",
          type: "movie",
          rating: "3",
          summary: "",
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Title is required"),
        })}
        onSubmit={(fields) => {
          console.log("SUCCESS!! :-)\n\n" + fields.title);
          let path = process.env.REACT_APP_API_PATH + "mediaitems/add";
          let body = {
            email: loginState.login.email,
            title: fields.title,
            type: fields.type,
            summary: fields.summary,
            rating: fields.rating,
            date: new Date().toUTCString(),
          };

          let api = new Api();
          api.post(path, body).then(() => {
            dispatch(getAllBooks({ email: loginState.login.email }));
          });
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                type="text"
                className={
                  "form-control" +
                  (errors.title && touched.title ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="title"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Media Type</label>
              <Field name="type" as="select" className={"form-control"}>
                <option value="book">Book</option>
                <option value="movie">Movie</option>
                <option value="show">Show</option>
                <option value="song">Song</option>
              </Field>
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <Field name="rating" as="select" className={"form-control"}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </div>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <Field name="summary" as="textarea" className={"form-control"} />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}

export default MediaForm;
