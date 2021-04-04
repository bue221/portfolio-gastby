import React from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

import { withStyles } from '@material-ui/styles';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import style from './style';

const contactForm = ({ classes }) => {
  const service_id = 'default_service';
  const template_id = 'template_299HwnVb';
  const user_id = 'user_7WGsNgHCIsOUAgfXmbLIU';
  return (
    <>
      <Formik
        initialValues={{ email: '', number: '', name: '' }}
        validate={values => {
          const errors = {};
          if (!values.number) {
            errors.number = 'Required';
          }
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          emailjs.send(service_id, template_id, values, user_id).then(
            function(response) {
              console.log(response);
              toast.dark('Your message is send');
            },
            function(error) {
              toast.error(error);
            }
          );
          resetForm({});
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h3' gutterBottom>
              Contact me
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Field
                type='text'
                name='name'
                as={TextField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                helperText={errors.name && touched.name && errors.name}
                error={errors.name && touched.name}
                fullWidth
                label='Your name'
                variant='filled'
              />
              <Field
                type='email'
                name='email'
                as={TextField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email && errors.email}
                error={errors.email && touched.email}
                fullWidth
                label='Your email'
                variant='filled'
              />
              <Field
                type='tel'
                name='number'
                as={TextField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                helperText={errors.number && touched.number && errors.number}
                error={errors.number && touched.number}
                fullWidth
                label='Your phone'
                variant='filled'
              />
              <Button type='submit' variant='contained' color='secondary'>
                Send
              </Button>
            </form>
          </Paper>
        )}
      </Formik>
    </>
  );
};

export default withStyles(style)(contactForm);
