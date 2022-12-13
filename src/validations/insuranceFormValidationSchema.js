import * as yup from "yup";
import { phoneRegExp } from "./regex";

export const deductAmountFormSchema = yup.object().shape({
  deductibleAmount: yup.number().positive().required(),
  deductAmountCheckbox: yup.boolean().oneOf([true], "Must tick the check box"),
});

export const declarationFormSchema = yup.object().shape({
  decCheckBox1: yup.boolean().oneOf([true], "Must tick the check box 1"),
  decCheckBox2: yup.boolean().oneOf([true], "Must tick the check box 2"),
  decCheckBox3: yup.boolean().oneOf([true], "Must tick the check box 3"),
  decCheckBox4: yup.boolean().oneOf([true], "Must tick the check box 4"),
});

export const planFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  number: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
  address1: yup.string().required(),
  address2: yup.string().required(),
  pincode: yup.string().required(),
  state: yup.string().required(),
  plan: yup.string().required(),
});
