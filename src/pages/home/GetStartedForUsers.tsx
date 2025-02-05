import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { RunningManIcon } from '../../styles/components/customIcons';

export const GetStartedForUsers = () => {
  return (
    <Flex bg="#1b1c1e" color="white" flexDirection="column">
      <Flex
        flexDirection="column"
        justifyContent="center"
        margin="30px"
        textAlign="center"
        pt={8}
      >
        <Flex justifyContent="center">
          <Heading
            fontSize={{
              base: '28px',
              sm: '30x',
              md: '34px',
              lg: '36px',
              xl: '40px',
              '2xl': '42px',
            }}
          >
            Присоединяйтесь и почувствуйте разницу
          </Heading>
        </Flex>
        <Text
          mt={2}
          fontSize={{
            base: '17px',
            sm: '19px',
            md: '20px',
            lg: '21px',
            xl: '22px',
            '2xl': '24px',
          }}
          fontWeight="700"
          color="#b6b8b6ef"
          justifyContent="center"
        >
          Вот как начать:
        </Text>

        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          justifyContent="space-around"
          px={{
            base: '20px',
            sm: '50px',
            md: '0',
            lg: '20px',
            xl: '50px',
            '2xl': '290px',
          }}
        >
          <Flex alignItems="center" flexDirection="column" flexBasis="30%">
            <Flex
              position="relative"
              height={{
                base: '170px',
                sm: '200px',
                md: '210px',
                lg: '220px',
                xl: '230px',
                '2xl': '260px'
              }}
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                color="#9c4b2f"
                fontSize={{
                  base: '150px',
                  sm: '170px',
                  md: '175px',
                  lg: '179px',
                  xl: '180px',
                  '2xl': '200px',
                }}
                fontFamily="fantasy"
                width="100%"
                justifyContent="center"
                position="absolute"
              >
                1
              </Flex>
              <Text
                zIndex={1}
                fontSize={{
                  base: '30px',
                  sm: '32px',
                  md: '34px',
                  lg: '36px',
                  xl: '38px',
                  '2xl': '40px',
                }}
                fontFamily="initial"
                fontWeight="700"
              >
                Регистрация
              </Text>
            </Flex>
            <Text
              fontSize={{
                base: '12px',
                sm: '15px',
                md: '15px',
                lg: '18px',
                xl: '19px',
                '2xl': '23px',
              }}
              maxW={500}
            >
              Станьте членом клуба "Легенда" уже сегодня.
            </Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" flexBasis="30%">
            <Flex
              position="relative"
              height={{
                base: '170px',
                sm: '200px',
                md: '210px',
                lg: '220px',
                xl: '230px',
                '2xl': '260px'
              }}
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                color="#9c4b2f"
                fontSize={{
                  base: '150px',
                  sm: '170px',
                  md: '175px',
                  lg: '179px',
                  xl: '180px',
                  '2xl': '200px',
                }}
                fontFamily="fantasy"
                width="100%"
                justifyContent="center"
                position="absolute"
              >
                2
              </Flex>
              <Text
                zIndex={1}
                fontSize={{
                  base: '30px',
                  sm: '35px',
                  md: '35px',
                  lg: '37px',
                  xl: '38px',
                  '2xl': '40px',
                }}
                fontFamily="initial"
                fontWeight="700"
              >
                Подбор тренировок
              </Text>
            </Flex>
            <Text
              fontSize={{
                base: '12px',
                sm: '15px',
                md: '15px',
                lg: '18px',
                xl: '19px',
                '2xl': '23px',
              }}
              maxW={500}
            >
              Выберем
              программу, которая подойдет именно вам.
            </Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" flexBasis="30%">
            <Flex
              position="relative"
              height={{
                base: '170px',
                sm: '200px',
                md: '210px',
                lg: '220px',
                xl: '230px',
                '2xl': '260px'
              }}
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                color="#9c4b2f"
                fontSize={{
                  base: '150px',
                  sm: '170px',
                  md: '175px',
                  lg: '179px',
                  xl: '180px',
                  '2xl': '200px',
                }}
                fontFamily="fantasy"
                width="100%"
                justifyContent="center"
                position="absolute"
              >
                3
              </Flex>
              <Text
                zIndex={1}
                fontSize={{
                  base: '30px',
                  sm: '35px',
                  md: '35px',
                  lg: '37px',
                  xl: '38px',
                  '2xl': '40px',
                }}
                fontFamily="initial"
                fontWeight="700"
              >
                Бегаем вместе
              </Text>
            </Flex>
            <Text
              fontSize={{
                base: '12px',
                sm: '15px',
                md: '15px',
                lg: '18px',
                xl: '19px',
                '2xl': '23px',
              }}
              maxW={500}
            >
              Достигайте своих целей
              в благоприятной среде.
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt={{ base: 6, sm: 8, md: 8, lg: 10, xl: 12 }}
          mb={3}
          justifyContent="center"
        >
          <Button
            bg="orange.600"
            borderRadius="none"
            color="white"
            size={{ base: 'sm', sm: 'md', md: 'md', lg: 'md', xl: 'lg' }}
            //   transition="all 0.3s"
            _hover={{
              bg: 'green',
              color: 'white',
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
