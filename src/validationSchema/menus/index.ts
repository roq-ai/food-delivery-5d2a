import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  description: yup.string(),
  price: yup.number().integer(),
  restaurant_id: yup.string().nullable(),
});
