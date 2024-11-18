import { Flex, Text } from '@chakra-ui/react';
import { Comment } from './components/Comment';

export const CommentsParticipants = () => {
  return (
    <Flex border="1px solid red">
      <Flex mb={20} flexDirection="column" width="100%">
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="space-evenly"
          width="100%"
          height="100px"
          mt={7}
        >
          <Text color="grey" fontSize="14px" fontWeight="300">
            ТРЕНЕРУЙТЕСЬ И ПОВЫШАЙТЕ СВОЮ ПРОИЗВОДИТЕЛЬНОСТЬ
          </Text>
          <Text fontSize="38px" fontWeight="bold" fontFamily="fantasy">
            ОТЗЫВЫ НАШИХ УЧАСТНИКОВ
          </Text>
        </Flex>
        <Flex flexDirection="column">
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
