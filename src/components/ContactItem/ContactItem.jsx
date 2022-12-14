import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem({ onDelete, id, name, number }) {
  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
