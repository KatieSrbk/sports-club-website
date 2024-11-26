import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';

const navBtns = [
  { text: 'Картинка клуба' },
  { text: 'Home' },
  { text: 'About Us' },
  { text: 'Тренировочный план' },
  { text: 'Соревнования' },
  { text: 'Мерч' },
  { text: 'Логин' },
  { text: 'Зарегестрироватся' },
];

export const Header = () => {
  return (
    <Flex zIndex={1} flexDirection="column" mb="-60px">
      <Flex bg="teal.300" height="58px" width="100%" alignItems="center">
        <Flex flexGrow={1} justifyContent="center">
          <Text color="white" fontWeight="500" fontSize="15px">
            ОФИЦИАЛЬНЫЙ САЙТ СПОРТИВНОГО КЛУБА "ЛЕГЕНДА" ГОРОДА ТАГАНРОГА
          </Text>
        </Flex>
        <Flex gap="11px" width="140px" flexBasis="17%">
          <Link>
            <Image src="/icons/telegram.svg" alt="" />
          </Link>
          <Link>
            <Image src="/icons/vk.svg" alt="" />
          </Link>
          <Link>
            <Image src="/icons/instagram.svg" alt="" />
          </Link>
          <Link>
            <Image src="/icons/gmail.svg" alt="" />
          </Link>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        {navBtns.map((item, index) => (
          <Button key={index + item.text} variant="headerNav">
            {item.text}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
