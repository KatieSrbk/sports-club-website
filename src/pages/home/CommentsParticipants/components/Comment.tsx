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
      mt={10}
      ml={isStartPosition ? 24 : 0}
      mr={isStartPosition ? 0 : 16}
      justifyContent={isStartPosition ? 'flex-start' : 'flex-end'}
    >
      <Image
        height="220px"
        objectFit="cover"
        borderRadius="50%"
        border="2px solid white"
        boxShadow=" 0 0 20px rgba(0, 0, 0, 0.5)"
        src={imagePath}
      ></Image>
      <Flex ml={10} justifyContent="center" flexDirection="column">
        <Text mb={1} fontSize="20px" fontWeight="500" fontFamily="inherit">
          {participantName}
        </Text>
        <Flex
          borderRadius="0 20px 20px 20px"
          border="#e3dacf 1px solid"
          width="650px"
          height="100px"
          bg="#fffbf6"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Text ml={5} fontFamily="inherit">
            {participantText}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
