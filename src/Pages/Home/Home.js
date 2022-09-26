import { Box } from 'components/Box';
import phonebookClick from '../phonebookClick.png';
import { Text, Title, TextAccent } from './Home-styled';
import { Link } from 'react-router-dom';
import authSelector from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  // const phoneBookimg = phonebook;
  const clickPng = phonebookClick;
  return (
    <div>
      <Box padding="80px 40px" as="section">
        <Title> Hello! </Title>
        <Text>
          In today's world, the phone has become such an indispensable accessory
          that it is almost impossible to imagine your life without it. If the
          telephone connection is paralyzed, it will immediately affect the life
          of a person or even an entire organization. Many users have problems
          managing countless contacts. We offer an effective way of saving data,
          using which you can forever forget about the problems associated with
          finding the right phone numbers.On our website, you can create your
          own personal phone directory, in which you can easily add, search,
          edit and delete contacts.{' '}
        </Text>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          gridGap="40px"
        >
          <TextAccent>Let's go to your phone book</TextAccent>
          {isLoggedIn ? (
            <Link to="/contacts" className="imgLink">
              <img src={clickPng} width="100px" alt=""></img>
            </Link>
          ) : (
            <Link to="/login">
              <img src={clickPng} width="100px" alt=""></img>
            </Link>
          )}
        </Box>
      </Box>
      {/* <Box
        as="section"
        display="block"
        width="100%"
        height="700px"
        overflow="hidden"
        padding="0px"
      >
        <img className="backgroundImg" src={phoneBookimg} alt=""></img>
      </Box> */}
    </div>
  );
};

export default Home;
