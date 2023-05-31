import { BsSearch } from 'react-icons/bs';
import { Form, Input } from './SearchForm.styled';
import PropTypes from 'prop-types';
import { Btn } from '../Button/Button';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    onSubmit(query.value);
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          <Input type="text" name="query" />
        </label>
        <Btn type="submit" icon={BsSearch} text="Search" status="search" />
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
