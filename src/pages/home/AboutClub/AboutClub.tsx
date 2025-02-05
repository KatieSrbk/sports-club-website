import { Flex, Heading } from '@chakra-ui/react';
import { Card } from './components/Card';
import { ABOUT_CLUB } from '../../../consts/content';

export const AboutClub = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      px={{ base: '20px', md: '50px' }}
    >
      <Flex my={10} justifyContent="center">
        <Heading
          maxW="900px"
          fontSize={{ base: '20px', sm: '24px', md: '30px' }}
          textAlign="center"
        >
          Преимущество нашего клуба
        </Heading>
      </Flex>
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        gap={{ md: '10px', xl: '20px', '2xl': '2px' }}
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'column',
          xl: 'row',
          '2xl': 'row',
        }}
      >
        <Card
          imgPath={'./images/women.jpg'}
          title={'Открытое сообщество'}
          text={ABOUT_CLUB.CARD_ONE.TEXT}
        />
        <Card
          imgPath={'./images/crosss.jpg'}
          title={'Индивидуальный подход'}
          text={ABOUT_CLUB.CARD_TWO.TEXT}
          isReverse={true}
        />
        <Card
          imgPath={'./images/we.jpg'}
          title={'Поддержка'}
          text={ABOUT_CLUB.CARD_THREE.TEXT}
        />
      </Flex>
    </Flex>
  );
};
