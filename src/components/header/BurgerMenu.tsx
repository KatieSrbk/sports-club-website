import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { BurgerIcon } from '../../styles/components/customIcons';

type Props = { navBtns: { text: string }[] };

export const BurgerMenu = ({ navBtns }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="start">
        <DrawerOverlay />
        <DrawerContent maxW="70%">
          <DrawerCloseButton />
          <DrawerBody>
            <Stack spacing={4} mt={14} fontSize="23px">
              {navBtns.map((item, index) => (
                <Link key={index + item.text}>
                  {item.text}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Кнопка для открытия Drawer */}
      <Button
        size="sm"
        variant="solid" // Используем "solid" вместо "outline", чтобы кнопка имела цвет фона
        onClick={onOpen}
        transform="all 0.3s"
        leftIcon={<BurgerIcon boxSize={5} fill="white" transform="all 0.3s" />}
        bg="transparent"
        border="none"
      ></Button>
    </>
  );
};
