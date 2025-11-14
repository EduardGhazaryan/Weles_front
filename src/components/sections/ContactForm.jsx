"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendFormDataThunk } from "@/features/global/globalApi";

export default function ContactForm() {
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const initial = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  };
  const schema = Yup.object({
    name: Yup.string().required(t("form.errors.required")),
    surname: Yup.string().required(t("form.errors.required")),
    email: Yup.string()
      .email(t("form.errors.email"))
      .required(t("form.errors.required")),
    phone: Yup.string().required(t("form.errors.required")),
    message: Yup.string().required(t("form.errors.required")),
  });

  const handleFormSubmit = async (values) => {
    try {
      const response =  await dispatch(sendFormDataThunk({ data: values })).unwrap()
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <div
      id="contacts"
      className="container mx-auto text-center px-[150px] flex flex-col gap-[30px]"
    >
      <h3 className="text-[50px] font-bold mb-6">{t("getInTouch")}</h3>
      <Formik
        initialValues={initial}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2 items-start md:col-span-1 col-span-2">
              <Field
                name="name"
                placeholder={t("form.firstName")}
                className={`w-full rounded-4xl border px-[20px] py-[13px] focus:outline-none focus:border-[var(--mainGreen)] ${
                  errors.name && touched.name ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="name"
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
                    name="surname"
                    placeholder={t("form.lastName")}
                    className={`w-full rounded-4xl border px-[20px] py-[13px] focus:outline-none focus:border-[var(--mainGreen)] ${
                      errors.surname && touched.surname
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="surname"
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
                className={`w-full h-[130px] rounded-4xl border px-[20px] py-[13px] resize-none focus:outline-none focus:border-[var(--mainGreen)] ${
                  errors.message && touched.message ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm pl-[20px]"
              />
            </div>

            {Object.keys(errors).length > 0 && (
              <p className="col-span-2 text-red-500 text-center">
                {t("form.fillAllFields")}
              </p>
            )}

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

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[350px] text-center shadow-xl">
            <img src="/icons/success.svg" alt=""  style={{ filter: "var(--iconGreen)" }} className="w-25 h-25 mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
