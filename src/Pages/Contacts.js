import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions';
import { useFetchContactsQuery } from 'redux/reducer';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

export const Contacts = ({ onBtnEditC }) => {
  const { data } = useFetchContactsQuery();
  const valueFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  let filtId = nanoid();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  const getVisiableContacts = () => {
    if (data) {
      const normalizedFilter = valueFilter.toLowerCase();
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visiableContacts = getVisiableContacts();

  return (
    <div>
      <ContactForm />
      <Filter id={filtId} value={valueFilter} onChange={handleFilterChange} />
      {data && (
        <ContactList
          contactArray={valueFilter ? visiableContacts : data}
          onBtnEditCl={onBtnEditC}
        />
      )}
    </div>
  );
};

export default Contacts;
