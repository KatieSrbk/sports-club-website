import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export const RunExperience = () => {
  return (
    <>
      <Flex mb={'-1px'}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,100 1440,50 1440,200 0,200" fill="#def2dd" />
          <polygon points="0,100 1440,100 1440,200 0,200" fill="#bce4ba" />
          <polygon points="0,100 1440,150 1440,200 0,200" fill="#a7dba4" />
        </svg>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{
          base: 'column',
          sm: 'row',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
        background="#a7dba4"
        height="100%"
        gap={{
          base: '20px',
          sm: '10px',
          md: '16px',
          xl: '30px',
          '2xl': '50px',
        }}
        pb={{ base: 10, sm: 10, md: 12, lg: 14, xl: 16, '2xl': 20 }}
        pt={{ base: 5, sm: 5, '2xl': 0 }}
        pl={{ sm: 12, md: 12, lg: 20, xl: 20, '2xl': 28 }}
        pr={{ sm: 8, md: 10, lg: 12, xl: 20, '2xl': 28 }}
      >
        <Image
          height={{
            base: '330px',
            sm: '340px',
            md: '330px',
            lg: '400px',
            xl: '400px',
            '2xl': '410px',
          }}
          width={{
            base: '470px',
            sm: '250px',
            md: '355px',
            lg: '465px',
            xl: '400px',
            '2xl': '500px',
          }}
          objectFit="cover"
          src="./images/trainer.jpg"
        />
        <Flex
          mx={{ base: 9, sm: 2 }}
          textAlign={{
            base: 'center',
            sm: 'left',
            md: 'left',
            lg: 'left',
            xl: 'left',
          }}
          flexDirection="column"
        >
          <Heading
            mb={5}
            color="#0f0f0ff6"
            fontSize={{
              base: '19px',
              sm: '22px',
              md: '30px',
              lg: '34px',
              xl: '38px',
              '2xl': '39px',
            }}
          >
            Шаг за шагом меняйте свой опыт бега
          </Heading>
          <Text
            mt={{ sm: 1, xl: 5 }}
            color="#383838"
            fontSize={{
              base: '11px',
              sm: '13px',
              md: '17px',
              lg: '18px',
              xl: '20px',
              '2xl': '24px',
            }}
          >
            Мы понимаем. Погружение в мир бега может пугать. Страх оказаться
            «недостаточно быстрым» или столкнуться с осуждением может сдерживать
            вас. Клуб создан для того, чтобы разрушить эти барьеры. Мы создаём
            гостеприимное пространство, где каждый шаг — это победа. Наша миссия
            — сделать ваш бег приятным, полезным и полностью свободным от
            стресса.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
