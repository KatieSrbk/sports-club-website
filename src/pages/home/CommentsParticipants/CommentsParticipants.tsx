import { Flex, Text } from '@chakra-ui/react';
import { Comment } from './components/Comment';

export const CommentsParticipants = () => {
  return (
    <Flex>
      <Flex mb={20} flexDirection="column" width="100%" alignItems="center">
        <Flex
          alignItems="center"
          flexDirection="column"
          width="100%"
          pt={7}
          px={8}
          textAlign="center"
        >
          <Text
            color="grey"
            fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '18px' }}
            fontWeight="300"
          >
            ТРЕНЕРУЙТЕСЬ И ПОВЫШАЙТЕ СВОЮ ПРОИЗВОДИТЕЛЬНОСТЬ
          </Text>
          <Text
            fontSize={{ base: '24px', sm: '28px', md: '34px', lg: '40px' }}
            fontWeight="bold"
            fontFamily="fantasy"
          >
            ОТЗЫВЫ НАШИХ УЧАСТНИКОВ
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          width="100%"
          alignItems="center"
          px={{ base: '15px', sm: '30px', md: '50px', lg: '80px' }}
        >
          <Comment
            isStartPosition={true}
            imagePath="./images/tr2.jpg"
            participantName="Виктор"
            participantText=" До прихода в RunUp я был просто регулярно занимающимся бегом любителем. Когда меня пригласили первый раз, я немного засомневался - групповая работа вместо индивидуальной, наверное это хуже? Как же я ошибался..."
          />
          <Comment
            isStartPosition={false}
            imagePath="./images/ruslan.jpg"
            participantName="Руслан"
            participantText=" До прихода в RunUp я был просто регулярно занимающимся бегом любителем. Когда меня пригласили первый раз, я немного засомневался - групповая работа вместо индивидуальной, наверное это хуже? Как же я ошибался..."
          />
          <Comment
            isStartPosition={true}
            imagePath="./images/kateFara.jpg"
            participantName="Екатерина"
            participantText=" До прихода в RunUp я был просто регулярно занимающимся бегом любителем. Когда меня пригласили первый раз, я немного засомневался - групповая работа вместо индивидуальной, наверное это хуже? Как же я ошибался..."
          />
          <Comment
            isStartPosition={false}
            imagePath="./images/vyacheslav.jpg"
            participantName="Вячеслав"
            participantText=" До прихода в RunUp я был просто регулярно занимающимся бегом любителем. Когда меня пригласили первый раз, я немного засомневался - групповая работа вместо индивидуальной, наверное это хуже? Как же я ошибался..."
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
