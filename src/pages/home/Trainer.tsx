import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Trainer = () => {
  return (
    <Box
      position="relative"
      width="100%" // Растянуть блок по ширине родителя
      overflow="hidden"
    >
      <Image
        position="absolute"
        zIndex="-1"
        src="./images/track.webp"
        alt="Background"
        objectFit="cover"
        width="100%" // Растянуть по ширине блока
        height="100%" // Растянуть по высоте блока
        filter={{
          base: 'brightness(0.3)',
          sm: 'brightness(0.4)',
          md: 'brightness(0.4)',
        }} // Затемнение изображения
      />
      <Flex
        justifyContent="space-around"
        top="0"
        left="0"
        width="100%"
        flexDirection={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }} // Переключение направления в зависимости от экрана
        alignItems="center"
        px={{ base: 5, sm: 8, md: 10 }} // Отступы для разных экранов
        py={5}
      >
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          flexBasis={{ base: '100%', sm: '60%', md: '60%', '2xl': '70%' }} // Блок с текстом на мобильных — 100%, на большом экране — 60%
          textAlign={{ base: 'center', sm: 'left', md: 'left' }} // Текст по центру на мобильных
          mx={{ base: 5, md: 12, '2xl': 20 }} // Отступы для мобильных
          color="white"
        >
          <Heading
            fontSize={{
              base: '19px',
              sm: '22px',
              md: '30px',
              lg: '33px',
              xl: '36px',
              '2xl': '41px',
            }}
          >
            Какая самая сложная часть любой тренировки?
          </Heading>
          <Text
            mt={3}
            fontSize={{
              base: '11px',
              sm: '13px',
              md: '17px',
              lg: '20px',
              xl: '21px',
              '2xl': '25px',
            }}
            fontWeight="500"
          >
            Нет, не интенсивная работа на пределе возможностей и не упорная
            борьба с усталостью и болью. Самая сложная часть любой тренировки,
            будь то пробежка или силовая, — это путь от своего привычного места
            к месту начала физической активности. Самое сложное в тренировках —
            это начать и не бросать их.
          </Text>
        </Flex>

        <Flex
          justifyContent="center"
          pr={{ lg: 14, xl: 20, '2xl': 28 }}
          mt={{ base: 4, sm: 1 }}
          flexBasis={{ base: '100%', sm: '40%', md: '40%', '2xl': '30%' }}
        >
          <Image
            height={{
              base: '200px',
              sm: '250px',
              md: '320px',
              lg: '340px',
              xl: '360px',
              '2xl': '370px',
            }}
            objectFit="cover"
            src="./images/tr3.jpg"
          ></Image>
        </Flex>
      </Flex>
    </Box>
  );
};
