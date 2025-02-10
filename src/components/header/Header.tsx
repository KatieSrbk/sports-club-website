import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { WINDOW_SIZE } from '../../utils/constants';
import { BurgerMenu } from './BurgerMenu';

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
  const [isTablet] = useMediaQuery(WINDOW_SIZE.TABLET);

  return (
    <Flex
      zIndex={1}
      flexDirection="column"
      mb={{ base: 0, sm: 0, md: '-60px' }}
    >
      <Flex
        bg="teal.300"
        height={['45px', '55px', '56px', '57px', '58px', '58px']}
        width="100%"
        alignItems="center"
        textAlign="center"
      >
        {!isTablet && <BurgerMenu navBtns={navBtns} />}
        <Flex flexGrow={1} justifyContent="center" width="100px">
          <Text
            color="white"
            fontWeight="500"
            fontSize={['7px', '10px', '11px', '12px', '15px', '15px']}
          >
            ОФИЦИАЛЬНЫЙ САЙТ СПОРТИВНОГО КЛУБА "ЛЕГЕНДА" ГОРОДА&nbsp;ТАГАНРОГА
          </Text>
        </Flex>
        <Flex
          mx={3}
          gap="11px"
          width={['90px', '100px', '110px', '120px', '140px', '140px']}
        >
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
      {isTablet && (
        <Flex justifyContent="center">
          {navBtns.map((item, index) => (
            <Button key={index + item.text} variant="headerNav">
              {item.text}
            </Button>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
