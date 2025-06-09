import styles from "./BookForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button.jsx";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => setFieldValue(field.name, val)}
      dateFormat="MMMM d, yyyy"
      className={styles.field} // Стилізуєш як інші поля
    />
  );
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Wrong email format! Example: unknown@gmail.com")
    .required("Required"),
  bookingDate: Yup.date().required("Required"),
  comment: Yup.string().max(500, "Too long!"),
});

const BookForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    // Тут можеш відправляти дані на сервер
    resetForm(); // Очищення форми
  };
  return (
    <div className={styles.bookFormWrapper}>
      <div className={styles.bookFormTitles}>
        <h3 className={styles.bookFormTitle}>Book your campervan now</h3>
        <span className={styles.bookFormSubtitle}>
          Stay connected! We are always ready to help you.
        </span>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: null,
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <div className={styles.container}>
          <Form className={styles.form}>
            <label className={styles.label} htmlFor="name"></label>
            <Field
              className={styles.field}
              id="id_name"
              type="text"
              name="name"
              placeholder="Name*"
            ></Field>
            <ErrorMessage
              component="span"
              className={styles.error}
              name="name"
            />
            <label className={styles.label} htmlFor="email"></label>
            <Field
              className={styles.field}
              id="id_email"
              type="text"
              name="email"
              placeholder="Email*"
            ></Field>
            <ErrorMessage
              component="span"
              className={styles.error}
              name="email"
            />
            <label className={styles.label} htmlFor="bookingDate"></label>
            <DatePickerField
              className={styles.datePickerField}
              name="bookingDate"
              placeholderText="Booking date*"
            />
            <ErrorMessage
              component="span"
              className={styles.error}
              name="bookingDate"
            />
            <label className={styles.label} htmlFor="textarea"></label>
            <Field
              as="textarea"
              className={`${styles.field} ${styles.textarea}`}
              id="id_textarea"
              type="textarea"
              name="comment"
              placeholder="Comment"
            ></Field>
            <ErrorMessage
              component="span"
              className={styles.error}
              name="comment"
            />
            <div className={styles.buttonWrapper}>
              <Button type="submit" className={styles.formBtn}>
                Send
              </Button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
export default BookForm;
