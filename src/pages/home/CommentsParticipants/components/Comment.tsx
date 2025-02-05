import { Flex, Image, Text } from '@chakra-ui/react';

type Props = {
  isStartPosition: boolean;
  imagePath: string;
  participantName: string;
  participantText: string;
};

export const Comment: React.FC<Props> = ({
  isStartPosition,
  imagePath,
  participantName,
  participantText,
}) => {
  return (
    <Flex
      pt={10}
      pl={isStartPosition ? { base: 0, sm: 0, md: 0, lg: 10 } : 0}
      pr={isStartPosition ? 0 : { base: 0, sm: 0, md: 0, lg: 32 }}
      justifyContent={isStartPosition ? 'flex-start' : 'flex-end'}
      flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
      alignItems="center"
      width="100%"
    >
      <Image
        height={{
          base: '120px',
          sm: '120x',
          md: '150px',
          lg: '180px',
          xl: '220px',
          '2xl': '220px',
        }}
        objectFit="cover"
        borderRadius="50%"
        border="2px solid white"
        boxShadow=" 0 0 20px rgba(0, 0, 0, 0.5)"
        src={imagePath}
        display="flex"
      ></Image>
      <Flex
        ml={
          isStartPosition
            ? { base: 0, sm: 0, md: 16 }
            : { base: 0, sm: 0, md: 16 }
        }
        justifyContent="center"
        flexDirection="column"
        width="auto"
      >
        <Text
          py={2}
          fontSize={{
            base: '17px',
            sm: '17px',
            md: '17px',
            lg: '18px',
            xl: '20px',
            '2xl': '20px',
          }}
          fontWeight="500"
          textAlign={{ base: 'center', sm: 'center', md: 'start' }}
        >
          {participantName}
        </Text>
        <Flex
          as={Text}
          borderRadius={{ base: '20px 20px 20px 20px', md: '0 20px 20px 20px' }}
          border="#e3dacf 1px solid"
          maxW={{ base: '300px', sm: '500px', md: '650px' }}
          height="auto"
          bg="#fffbf6"
          justifyContent="flex-start"
          alignItems="center"
          px={5}
          py={3}
        >
          {participantText}
        </Flex>
      </Flex>
    </Flex>
  );
};
