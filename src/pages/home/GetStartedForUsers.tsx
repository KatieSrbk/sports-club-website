import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { RunningManIcon } from '../../styles/components/customIcons';

export const GetStartedForUsers = () => {
  return (
    <Flex bg="#1b1c1e" color="white" flexDirection="column">
      <Flex flexDirection="column" justifyContent="center" margin="30px">
        <Flex justifyContent="center">
          <Heading>Присоединяйтесь и почувствуйте разницу</Heading>
        </Flex>
        <Flex
          mt={2}
          fontSize="23px"
          fontWeight="700"
          color="#b6b8b6ef"
          justifyContent="center"
        >
          <h4>Вот как начать:</h4>
        </Flex>
        <Flex flexDirection="row" justifyContent="space-around">
          <Flex alignItems="center" flexDirection="column" flexBasis="30%">
            <Flex
              position="relative"
              height="230px"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                color="#9c4b2f"
                fontSize="180px"
                fontFamily="fantasy"
                width="100%"
                justifyContent="center"
                position="absolute"
              >
                1
              </Flex>
              <Text
                zIndex={1}
                fontSize="40px"
                fontFamily="initial"
                fontWeight="700"
              >
                Регистрация
              </Text>
            </Flex>
            <Text fontSize="20px">
              Станьте членом клуба "Легенда" уже сегодня.
            </Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" flexBasis="30%">
            <Flex
              position="relative"
              height="230px"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                color="#9c4b2f"
                fontSize="180px"
                fontFamily="fantasy"
                width="100%"
                justifyContent="center"
                position="absolute"
              >
                2
              </Flex>
              <Text
                zIndex={1}
                fontSize="40px"
                fontFamily="initial"
                fontWeight="700"
              >
                Подбор тренировок
              </Text>
            </Flex>
            <Text fontSize="20px">
              При общении с тренером обговарием свои особенности.Выбираем
              программу
            </Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" flexBasis="30%">
            <Flex
              position="relative"
              height="230px"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                color="#9c4b2f"
                fontSize="180px"
                fontFamily="fantasy"
                width="100%"
                justifyContent="center"
                position="absolute"
              >
                3
              </Flex>
              <Text
                zIndex={1}
                fontSize="40px"
                fontFamily="initial"
                fontWeight="700"
              >
                Бегаем вместе
              </Text>
            </Flex>
            <Text fontSize="20px">
              Присоединяйтесь к нашему международному сообществу бегунов,
              которые ставят усилия выше скорости. Достигайте своих целей в беге
              в благоприятной среде.
            </Text>
          </Flex>
        </Flex>
        <Flex mt={12} mb={3} justifyContent="center">
          <Button
            bg="orange.600"
            width="250px"
            borderRadius="none"
            color="white"
            size="md"
            //   transition="all 0.3s"
            _hover={{
              bg: 'green',
              color: 'white', // Цвет текста, совпадающий с фоном
              svg: {
                fill: 'white',
              },
            }}
            leftIcon={
              <RunningManIcon fill="white" /*  transform="all 0.3s" */ />
            }
          >
            Присоединится сегодня
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
