import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Trainer = () => {
  return (
    <Box
      position="relative"
      width="100%" // Растянуть блок по ширине родителя
      maxWidth="1270px"
      height="400px"
      overflow="hidden"
    >
      <Image
        src="./images/track.webp"
        alt="Background"
        objectFit="cover"
        width="100%" // Растянуть по ширине блока
        height="100%" // Растянуть по высоте блока
        filter="brightness(0.4)" // Затемнение изображения
      />
      <Flex
        justifyContent="space-around"
        position="absolute"
        top="0"
        left="0"
        width="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          // alignItems="center"
          // textAlign="center"
          color="white"
          px={4}
          flexBasis="60%"
          ml={10}
          mr={10}
          pl={10}
        >
          <Heading fontSize="50px">
            Какая самая сложная часть любой тренировки?{' '}
          </Heading>
          <Text mt={3} fontSize="20px" fontWeight="500">
            Нет, не интенсивная работа на пределе возможностей и не упорная
            борьба с усталостью и болью. Самая сложная часть любой тренировки,
            будь то пробежка или силовая, — это путь от своего привычного места
            к месту начала физической активности. Самое сложное в тренировках —
            это начать и не бросать их.
          </Text>
        </Flex>

        <Flex mt={5} flexBasis="40%">
          <Image height="360px" src="./images/tr3.jpg"></Image>
        </Flex>
      </Flex>
    </Box>
  );
};
