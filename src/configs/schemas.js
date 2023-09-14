import * as Yup from 'yup';

export default function getFormikValidationSchema() {
  const validationSchema = Yup.object({
    title: Yup.string().required('Please enter title'),
    release_date: Yup.date().required('Please enter release date'),
    poster_path: Yup.string()
      .url('Invalid URL')
      .required('Please enter poster url'),
    vote_average: Yup.number()
      .min(0, 'Minimum rating is 0')
      .max(10, 'Maximum rating is 10')
      .required('Please enter rating'),
    genres: Yup.array().min(1, 'Select genre'),
    runtime: Yup.number()
      .min(0, 'Minimum runtime is 0')
      .integer('Runtime must be integer')
      .required('Please enter runtime'),
    overview: Yup.string().required('Please enter overview'),
  });

  return validationSchema;
}
