import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { RunningManIcon } from '../../styles/components/customIcons';

export const StartBlock = () => {
  return (
    <Box
      position="relative"
      width="100%" // Растянуть блок по ширине родителя
      height={{ base: '450px', sm: '600px', md: '700px' }}
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
          fontSize={{
            base: '40px',
            sm: '65px',
            md: '80px',
            lg: '90px',
            xl: '100px',
            '2xl': '120px',
          }}
          fontFamily="fantasy"
          fontStyle="normal"
          mt={16}
          lineHeight="1.1"
        >
          Бегать гораздо веселее, когда Ты&nbsp;не&nbsp;один!
        </Text>
        <Text
          fontSize={{
            base: 'sm',
            sm: 'md',
            md: 'xl',
            lg: 'xl',
            xl: '22px',
            '2xl': '28px',
          }}
          fontFamily="inherit"
          mt={2}
          px={{ base: 4, md: 8 }}
        >
          Клуб любителей бега "Легенда" - это сообщество любителей бега в любом
          месте. Мы поможем вам принять бег, а&nbsp;не&nbsp;бояться&nbsp;его.
        </Text>
        <Button
          variant="outline"
          borderColor="teal.300"
          borderRadius="none"
          color="teal.300"
          borderWidth="2px"
          size={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}
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
