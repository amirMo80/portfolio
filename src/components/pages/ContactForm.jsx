import {
  CardContent,
  CardActions,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

import { useFormik } from "formik";
import { contactValidationSchema } from "../../validation/contactValidation";

import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";

const ContactForm = () => {
  const theme = useTheme();

  const initialContactValues = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: initialContactValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      console.log("Contact Values : " + values);
    },
  });
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container spacing={2} sx={{ direction: "ltr" }}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              name="fullname"
              label="نام و نام خانوادگی"
              color="primary"
              size="small"
              variant="outlined"
              helperText={
                formik.touched.fullname ? formik.errors.fullname : null
              }
              error={Boolean(formik.touched.fullname && formik.errors.fullname)}
              value={formik.values?.fullname}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Face6Rounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              name="email"
              label="ایمیل"
              color="primary"
              size="small"
              variant="outlined"
              helperText={formik.touched.email ? formik.errors.email : null}
              error={Boolean(formik.touched.email && formik.errors.email)}
              value={formik.values?.email}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              name="subject"
              label="عنوان"
              color="primary"
              size="small"
              variant="outlined"
              helperText={formik.touched.subject ? formik.errors.subject : null}
              error={Boolean(formik.touched.subject && formik.errors.subject)}
              value={formik.values?.subject}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SubjectRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              multiline
              name="message"
              label="متن پیام"
              color="primary"
              size="small"
              variant="outlined"
              rows={6}
              helperText={formik.touched.message ? formik.errors.message : null}
              error={Boolean(formik.touched.message && formik.errors.message)}
              value={formik.values?.message}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          size="medium"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          ارسال پیام
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
