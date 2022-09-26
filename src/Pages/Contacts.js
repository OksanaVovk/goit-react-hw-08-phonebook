import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions';
import { useFetchContactsQuery } from 'redux/reducer';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';

export const Contacts = () => {
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
    <Box as="main" padding="40px">
      <ContactForm />
      <Filter id={filtId} value={valueFilter} onChange={handleFilterChange} />
      {data && (
        <ContactList contactArray={valueFilter ? visiableContacts : data} />
      )}
    </Box>
  );
};

export default Contacts;
