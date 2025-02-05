import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubscribe = (event: any) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для валидации email

    if (emailRegex.test(email)) {
      toast({
        title: 'Успешно',
        description: 'Вы подписались на рассылку!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setEmail(''); // Очищаем поле после успешной подписки
    } else {
      toast({
        title: 'Ошибка',
        description: 'Введите корректный email',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="footer" bg="gray.900" color="white" py={8}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={5}
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        align="start"
      >
        <Flex justifyContent="center" alignItems="center">
          <Image src="icons/logo.svg" width="200px" height="200px" />
        </Flex>

        {/* Форма подписки */}
        <Box textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Подпишитесь на новости
          </Text>
          <Flex
            as="form"
            onSubmit={handleSubscribe}
            direction={{ base: 'column', md: 'row' }}
            gap={2}
          >
            <Input
              placeholder="Введите ваш email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              bg="gray.800"
              color="white"
              _placeholder={{ color: 'gray.400' }}
            />
            <Button type="submit" colorScheme="blue" px={6}>
              Подписаться
            </Button>
          </Flex>
        </Box>

        {/* Ссылки на страницы */}
        <Box mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Навигация
          </Text>
          <Stack spacing={2}>
            <Link href="/home">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/contact">Контакты</Link>
          </Stack>
        </Box>

        {/* Ссылки на соцсети */}
        <Box>
          {/* Контактная информация */}
          <Box mb={{ base: 8, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Контакты
            </Text>
            <Text>Телефон: +123 456 7890</Text>
            <Text>Адрес: ул. Примерная, 123, Город</Text>
          </Box>
          <Flex mt={3}>
            <Link href="https://facebook.com" isExternal mr={4}>
              <Image src="/icons/telegram.svg" alt="" />
            </Link>
            <Link href="https://twitter.com" isExternal mr={4}>
              <Image src="/icons/vk.svg" alt="" />
            </Link>
            <Link href="https://instagram.com" isExternal mr={4}>
              <Image src="/icons/instagram.svg" alt="" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Image src="/icons/gmail.svg" alt="" />
            </Link>
          </Flex>
        </Box>
      </Flex>

      {/* Нижняя часть футера */}
      <Box
        textAlign="center"
        mt={10}
        borderTop="1px solid"
        borderColor="gray.700"
        pt={4}
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Ваша компания. Все права защищены.
        </Text>
      </Box>
    </Box>
  );
};
