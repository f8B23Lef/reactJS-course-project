/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import MultiselectDropdown from '../MultiselectDropdown/MultiselectDropdown';
import './MovieForm.scss';

export default function MovieForm(props) {
  const {
    title,
    onSubmit,
    onClose,
    movie,
  } = props;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      genres: movie.genres,
      runtime: movie.runtime || 0,
      overview: movie.overview,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Please enter title'),
      release_date: Yup.date()
        .required('Please enter release date'),
      poster_path: Yup.string()
        .url('Invalid URL')
        .required('Please enter poster url'),
      vote_average: Yup.number()
        .min(0, 'Minimum rating is 0')
        .max(10, 'Maximum rating is 10')
        .required('Please enter rating'),
      genres: Yup.array()
        .min(1, 'Select genre'),
      runtime: Yup.number()
        .min(0, 'Minimum runtime is 0')
        .integer('Runtime must be integer')
        .required('Please enter runtime'),
      overview: Yup.string()
        .required('Please enter overview'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
      dispatch(onSubmit({ id: movie.id, ...values }));
      onClose();
    },
  });

  return (
    <>
      <div className='modal-header'>
        <h3 className='modal-title'>{title}</h3>
        <FontAwesomeIcon
          icon={faTimes}
          className='close__icon'
          onClick={onClose}
        />
      </div>
      <div className='modal-body'>
        <div className='flex-row'>
          <div className='flex-item'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              placeholder='Title'
              id='title'
              {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title
              ? <div className='error__msg'>{formik.errors.title}</div>
              : null}
          </div>
          <div className='flex-item'>
            <label htmlFor='release_date'>Release Date</label>
            <input
              type='date'
              placeholder='Select Date'
              id='release_date'
              {...formik.getFieldProps('release_date')}
            />
            {formik.touched.release_date && formik.errors.release_date
              ? <div className='error__msg'>{formik.errors.release_date}</div>
              : null}
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-item'>
            <label htmlFor='poster_path'>Poster URL</label>
            <input
              type='poster_path'
              placeholder='https://'
              id='poster_path'
              {...formik.getFieldProps('poster_path')}
            />
            {formik.touched.poster_path && formik.errors.poster_path
              ? <div className='error__msg'>{formik.errors.poster_path}</div>
              : null}
          </div>
          <div className='flex-item'>
            <label htmlFor='vote_average'>Rating</label>
            <input
              type='number'
              step='0.1'
              min='0'
              max='10'
              id='vote_average'
              placeholder='7,8'
              {...formik.getFieldProps('vote_average')}
            />
            {formik.touched.vote_average && formik.errors.vote_average
              ? <div className='error__msg'>{formik.errors.vote_average}</div>
              : null}
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-item'>
            <label>Genre</label>
            {/* // TODO: avoid this hack with formik for custom ms dp */}
            <MultiselectDropdown formik={formik} />
            {formik.touched.genres && formik.errors.genres
              ? <div className='error__msg'>{formik.errors.genres}</div>
              : null}
          </div>
          <div className='flex-item'>
            <label htmlFor='runtime'>Runtime</label>
            <input
              type='number'
              min='0'
              id='runtime'
              placeholder='minutes'
              {...formik.getFieldProps('runtime')}
            />
            {formik.touched.runtime && formik.errors.runtime
              ? <div className='error__msg'>{formik.errors.runtime}</div>
              : null}
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-item flex-item-2'>
            <label htmlFor='overview'>Overview</label>
            <textarea
              rows='5'
              id='overview'
              placeholder='Movie Description'
              {...formik.getFieldProps('overview')}
            />
            {formik.touched.overview && formik.errors.overview
              ? <div className='error__msg'>{formik.errors.overview}</div>
              : null}
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <button type='button' className='reset__button' onClick={onClose}>
          Reset
        </button>
        <button
          type='button'
          className='submit__button'
          onClick={formik.handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

MovieForm.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: 0,
    genres: [],
    runtime: 0,
    overview: '',
  },
};
