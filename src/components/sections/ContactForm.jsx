"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const schema = Yup.object({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div id="contacts" className="container mx-auto text-center px-[150px] flex flex-col gap-[30px]">
      <h3 className="text-[50px] font-bold mb-6">Get in Touch</h3>
      <Formik
        initialValues={initial}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post("/api/contact", values);
            alert("Sent");
            resetForm();
          } catch (e) {
            alert("Error");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2 items-start md:col-span-1 col-span-2">
              <Field
                name="firstName"
                placeholder={t("form.firstName")}
                className={`w-full rounded-4xl border px-[20px] py-[13px] focus:outline-none focus:border-[var(--mainGreen)] ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm pl-[20px]"
              />
            </div>

            <div className="flex flex-col gap-2 items-start md:col-span-1 col-span-2">
              <Field
                name="phone"
                placeholder={t("form.phone")}
                className={`w-full rounded-4xl border px-[20px] py-[13px] focus:outline-none focus:border-[var(--mainGreen)] ${
                  errors.phone && touched.phone ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm pl-[20px]"
              />
            </div>

            <div className="flex flex-col justify-between h-full gap-6 md:row-span-2 md:col-span-1 col-span-2">
              <div className="flex flex-col gap-6 h-full justify-between ">
                <div className="flex flex-col gap-2 items-start">
                  <Field
                    name="lastName"
                    placeholder={t("form.lastName")}
                    className={`w-full rounded-4xl border px-[20px] py-[13px] focus:outline-none focus:border-[var(--mainGreen)] ${
                      errors.lastName && touched.lastName
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm pl-[20px]"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <Field
                    name="email"
                    placeholder={t("form.email")}
                    className={`w-full rounded-4xl border px-[20px] py-[13px] focus:outline-none focus:border-[var(--mainGreen)] ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm pl-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="md:row-span-2 flex flex-col justify-between items-start md:col-span-1 col-span-2">
              <Field
                as="textarea"
                name="message"
                rows={8}
                placeholder={t("form.message")}
                className="w-full h-[130px] rounded-4xl border px-[20px] py-[13px] resize-none focus:outline-none focus:border-[var(--mainGreen)]"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm pl-[20px]"
              />
            </div>

            <div className="col-span-2 text-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--mainGreen)] text-white px-8 py-3 rounded-3xl hover:bg-green-700 transition-all"
              >
                {t("form.submit")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
