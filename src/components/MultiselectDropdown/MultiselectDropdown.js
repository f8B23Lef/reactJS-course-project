import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useOutsideClick } from '../../hooks/index';
import { GENRES } from '../../utils/constants';
import './MultiselectDropdown.scss';

export default function MultiselectDropdown(props) {
  const {
    placeholder,
    options,
    formik,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState(formik.values.genres);

  const handleCheck = (event) => {
    const updatedList = [...checkedOptions];

    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      updatedList.splice(checkedOptions.indexOf(event.target.value), 1);
    }

    setCheckedOptions(updatedList);

    formik.setTouched({ ...formik.touched, genres: true });
    formik.setFieldValue('genres', updatedList);
  };

  const getCheckedValues = () => checkedOptions.join(', ');

  const ref = useRef();
  useOutsideClick(ref, () => setShowDropdown(false));

  return (
    <div className='multiselect-dropdown' ref={ref}>
      <div
        className='multiselect-dropdown__input-wrapper'
        role="button"
        tabIndex={0}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <input
          className='multiselect-dropdown__input'
          type="text"
          readOnly="readonly"
          placeholder={placeholder}
          id="genres"
          value={getCheckedValues()}
        />
        <span className='multiselect-dropdown__icon'>
          <FontAwesomeIcon
            icon={faSortDown}
          />
        </span>
      </div>
      <div className={`multiselect-dropdown__body-wrapper
        ${showDropdown ? '' : 'hidden'}`}
      >
        <ul className='multiselect-dropdown__list'>
          {options.map((option) => (
            <li className="multiselect-dropdown__option" key={option}>
              <label htmlFor={option} className="multiselect-dropdown__label">
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  className="multiselect-dropdown__checkbox"
                  onChange={handleCheck}
                  defaultChecked={
                    checkedOptions.includes(option) ? 'checked' : ''
                  }
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MultiselectDropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  formik: PropTypes.shape(),
};

MultiselectDropdown.defaultProps = {
  placeholder: 'Select Genre',
  options: [...GENRES],
  formik: {},
};
