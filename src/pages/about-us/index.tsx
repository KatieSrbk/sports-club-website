import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/Footer";
import { TopBlockInAbout } from "./TopBlockInAbout";

export const AboutUsPage = () => {
    return (
      <Flex flexDirection="column">
        <Header />
        <TopBlockInAbout/>
        <Footer />
      </Flex>
    );
  };