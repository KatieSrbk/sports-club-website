import { Flex, Heading, Image, Text } from '@chakra-ui/react';

type CardProps = {
  imgPath: string;
  title: string;
  text: string;
  isReverse?: boolean;
};

export const Card = ({ imgPath, title, text, isReverse }: CardProps) => {
  return (
    <Flex
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: isReverse ? 'row-reverse' : 'row',
        lg: isReverse ? 'row-reverse' : 'row',
        xl: 'column',
      }}
      flexBasis="30%"
      alignItems="center"
    >
      <Image height="250px" maxW='350px' src={imgPath} objectFit="cover" />
      <Flex
        flexDirection="column"
        textAlign={{
          base: 'center',
          sm: 'center',
          md: 'start',
          lg: 'start',
          xl: 'start',
          '2xl': 'center',
        }}
        mx={{ base: 2, sm: 5, md: 6, lg: 7, xl: 2, '2xl': 6 }}
        mb={4}
      >
        <Heading
          mt={3}
          color="#ff6421f8"
          fontSize={{
            base: '19px',
            sm: '21px',
            md: '22px',
            lg: '23px',
            xl: '23px',
            '2xl': '25px'
          }}
        >
          {title}
        </Heading>
        <Text
          mt={{ base: 2, sm: 3, md: 5, lg: 5, xl: 5, '2xl': 6 }}
          color="#383838"
          fontSize={{
            base: '12px',
            sm: '14px',
            md: '15px',
            lg: '17px',
            xl: '17px',
            '2xl': '19px'
          }}
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};
