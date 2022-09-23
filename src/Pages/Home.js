import { Box } from 'components/Box';
// import phonebook from './phone-book-hi.png';
import phonebook from './golden_pages.jpg';
import { Text, Title } from './Home-styled';

const Home = () => {
  const phoneBookimg = phonebook;
  return (
    <div>
      <Box padding="100px 40px">
        <Title> Hello </Title>
        <Text>
          In today's world, the phone has become such an indispensable accessory
          that it is almost impossible to imagine your life without it. If the
          telephone connection is paralyzed, it will immediately affect the life
          of a person or even an entire organization. Many users have problems
          managing countless contacts. We offer an effective way of saving data,
          using which you can forever forget about the problems associated with
          finding the right phone numbers.On our website, you can create your
          own personal phone directory, in which you can easily add, search and
          delete contacts.{' '}
        </Text>
      </Box>
      <Box
        as="section"
        display="block"
        width="100%"
        height="700px"
        overflow="hidden"
      >
        <img class="backgroundImg" src={phoneBookimg} alt=""></img>
      </Box>
    </div>
  );
};

export default Home;
