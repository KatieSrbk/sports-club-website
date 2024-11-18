import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { RunningManIcon } from '../../styles/components/customIcons';

export const StartBlock = () => {
  return (
    <Box
      position="relative"
      width="100%" // Растянуть блок по ширине родителя
      maxWidth="1270px"
      height="700px"
      overflow="hidden"
    >
      <Image
        src="./images/general_photo.jpg"
        alt="Background"
        objectFit="cover"
        width="100%" // Растянуть по ширине блока
        height="100%" // Растянуть по высоте блока
        filter="brightness(0.4)" // Затемнение изображения
      />

      {/* Текст и кнопка поверх изображения */}
      <Flex
        direction="column"
        justifyContent="space-evenly"
        align="center"
        justify="center"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        textAlign="center"
        color="white"
        px={4}
      >
        <Text
          fontSize="110px"
          fontFamily="fantasy"
          fontStyle="normal"
          mt={10}
          lineHeight="1.1"
        >
          Бегать гораздо веселее, когда Ты не один!
        </Text>
        <Text fontSize="xl" fontFamily="inherit" mt={9}>
          Клуб любителей бега "Легенда" - это сообщество любителей бега в любом
          месте. Мы поможем вам принять бег, а не бояться его.
        </Text>
        <Button
          variant="outline"
          borderColor="teal.300"
          borderRadius="none"
          color="teal.300"
          borderWidth="2px"
          size="lg"
          transition="all 0.3s"
          _hover={{
            bg: 'teal.300',
            color: 'teal.900', // Цвет текста, совпадающий с фоном
            svg: {
              fill: 'teal.900',
            },
          }}
          leftIcon={<RunningManIcon fill="teal.300" transform="all 0.3s" />}
        >
          ПРИСОЕДИНЯЙСЯ!
        </Button>
      </Flex>
    </Box>
  );
};
