import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer(),
  feedback: yup.string(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
