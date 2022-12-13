import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="search..."
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
