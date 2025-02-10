import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { RunningManIcon } from '../../styles/components/customIcons';

export const TopBlockInAbout = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{
        base: '550px',
        sm: '630px',
        md: '780px',
        xl: '800px',
        '2xl': '820px',
      }}
      overflow="hidden"
    >
      <Image
        src="./images/women.jpg"
        alt="Background"
        objectFit="cover"
        width="100%"
        height="100%"
        filter="brightness(0.6)" // Затемнение изображения
      />

      {/* Текст и кнопка поверх изображения */}
      <Flex
        direction="column"
        justifyContent={{
          base: 'center',
          sm: 'space-evenly',
          md: 'space-evenly',
          lg: 'flex-end',
        }}
        gap={{
          base: 8,
          sm: 7,
          md: 0,
          lg: 12,
          xl: 16,
          '2xl': 14,
        }}
        align={{ base: 'center', md: 'flex-start' }}
        position="absolute"
        top={0}
        left={0}
        width={{ base: '100%', md: 'fit-content' }}
        height="100%"
        textAlign={{ base: 'center', sm: 'center', md: 'start' }}
        color="white"
        px={{
          base: '30px',
          sm: '60px',
          md: '100px',
          lg: '120px',
          xl: '180px',
          '2xl': '200px',
        }}
        py={{
          base: '15px',
          sm: '40px',
          md: '100px',
          lg: '110px',
          xl: '150px',
          '2xl': '140px',
        }}
      >
        <Text
          fontSize={{
            base: '25px',
            sm: '26px',
            md: '30px',
            lg: '31px',
            xl: '32px',
            '2xl': '32px',
          }}
          fontFamily="fantasy"
          fontStyle="normal"
          lineHeight="1.1"
          maxW="800px"
        >
          Modi vel dolor deserunt. Бегать гораздо веселее, когда
          Ты&nbsp;не&nbsp;один!
        </Text>
        <Text
          fontSize={{
            base: '32px',
            sm: '34px',
            md: '36px',
            lg: '38px',
            xl: '42px',
            '2xl': '44px',
          }}
          fontFamily="fantasy"
          maxW="800px"
        >
          Sequi ea odio, pariatur nobis ducimus quam eaque quis eveniet dolores
          impedit rerum? Клуб любителей бега "Легенда"
        </Text>
        <Button
          variant="outline"
          borderColor="teal.300"
          borderRadius="none"
          color="teal.300"
          borderWidth="2px"
          size={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }}
          transition="all 0.3s"
          _hover={{
            bg: 'teal.300',
            color: 'teal.900', // Цвет текста, совпадающий с фоном
            svg: {
              fill: 'teal.900',
            },
          }}
          leftIcon={<RunningManIcon fill="teal.300" transform="all 0.3s" />}
          marginLeft="20px"
        >
          ПРИСОЕДИНЯЙСЯ!
        </Button>
      </Flex>
    </Box>
  );
};
