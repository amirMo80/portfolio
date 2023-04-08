import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی میباشد"),
    email: Yup.string().email("ایمیل مورد نظر معتبر نمیباشد").required("ایمیل الزامی میباشد"),
    subject: Yup.string().required("عنوان پیام الزامی میباشد"),
    message: Yup.string().required("متن پیام الزامی میباشد"),
    recaptcha: Yup.string().required("کپتچا الزامی میباشد"),
})