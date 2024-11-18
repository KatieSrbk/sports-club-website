import { Box, Flex, Icon, Image, Link, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
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
