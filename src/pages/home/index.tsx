import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/header/Header';
import { Trainer } from './Trainer';
import { AboutClub } from './AboutClub/AboutClub';
import { StartBlock } from './StartBlock';
import { RunExperience } from './RunExperience';
import { GetStartedForUsers } from './GetStartedForUsers';
import { CommentsParticipants } from './CommentsParticipants/CommentsParticipants';
import { Footer } from '../../components/Footer';
import { SliderPhoto } from './SliderPhoto';

export const HomePage = () => {
  return (
    <Flex flexDirection="column">
      <Header />
      <StartBlock />
      <SliderPhoto />
      <Trainer />
      <AboutClub />
      <RunExperience />
      <GetStartedForUsers />
      <CommentsParticipants />
      <Footer />
    </Flex>
  );
};
