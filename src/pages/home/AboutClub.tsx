import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export const AboutClub = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" height="630px">
      <Flex mt={7} display="flex" justifyContent="center" alignItems="center">
        <Heading height="110px" maxW="900px" fontSize="42px" textAlign="center">
          Отправляйтесь в путешествие, которое прославит ВАС
        </Heading>
      </Flex>
      <Flex width="100%" height="100%" justifyContent="center" gap="20px">
        <Flex width="350px" flexDirection="column">
          <Image
            height="250px"
            src="./images/women.jpg"
            objectFit="cover"
          ></Image>
          <Heading mt={3} color="#ff6421f8" fontSize="23px">
            Открытое сообщество
          </Heading>
          <Text mt={5} color="#383838" fontSize="17px">
            Присоединяйтесь к нашему клубу, где в первую очередь ценится ваша
            целеустремлённость, а не скорость. Мы рады каждому бегуну,
            независимо от его уровня подготовки и темпа. Вместе мы преодолеваем
            трудности, вдохновляем друг друга и разделяем радость движения.
          </Text>
        </Flex>
        <Flex width="350px" flexDirection="column">
          <Image
            height="250px"
            src="./images/crosss.jpg"
            objectFit="cover"
          ></Image>
          <Heading mt={3} color="#ff6421f8" fontSize="23px">
            Индивидуальный подход
          </Heading>
          <Text mt={5} color="#383838" fontSize="17px">
            Здесь вы найдёте всё необходимое для того, чтобы совершенствовать
            свои навыки и достигать новых высот без спешки, с учётом ваших
            личных целей и возможностей.
          </Text>
        </Flex>
        <Flex width="350px" flexDirection="column">
          <Image height="250px" src="./images/we.jpg" objectFit="cover"></Image>
          <Heading mt={3} color="#ff6421f8" fontSize="23px">
            Поддержка
          </Heading>
          <Text mt={5} color="#383838" fontSize="17px">
            Обретите поддержку, мотивацию и тёплую атмосферу среди
            единомышленников, которые разделяют ваш путь в беге. Ваши успехи и
            личные достижения — это то, что делает нас сильнее.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
