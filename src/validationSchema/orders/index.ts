import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  delivery_time: yup.date(),
  pickup_option: yup.boolean(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
