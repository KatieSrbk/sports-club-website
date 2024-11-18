import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export const RunExperience = () => {
  const test = 'dd';
  return (
    <>
      <Flex>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Треугольники с разной прозрачностью, начинающиеся с середины */}
          <polygon points="0,100 1440,50 1440,200 0,200" fill="#def2dd" />
          <polygon points="0,100 1440,100 1440,200 0,200" fill="#bce4ba" />
          <polygon points="0,100 1440,150 1440,200 0,200" fill="#a7dba4" />
        </svg>
      </Flex>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        background="#a7dba4"
        height="600px"
        gap="30px"
      >
        <Flex width="400px">
          <Image
            mb={20}
            height="520px"
            objectFit="cover"
            src="./images/sportmen.jpg"
          ></Image>
        </Flex>
        <Flex maxW="650px" textAlign="left" flexDirection="column">
          <Heading mb={5} color="#0f0f0ff6" fontSize="43px">
            Шаг за шагом меняйте свой опыт бега
          </Heading>
          <Text mt={5} color="#383838" fontSize="19px">
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
