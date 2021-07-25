import {
  Container,
  Logo,
  CloseButton,
  StoryContainer,
  MainStoryWrapper,
  Image,
  ProgressBar,
  ChangeStoryButton,
} from "./styles";
import { images } from "../../Utils/AppContant";
import cancelImg from "../../Assets/Images/icons/cancel.png";
import { useHistory, useLocation } from "react-router-dom";
import { Story } from "../../Mocks/story";
import { useState, useEffect } from "react";
import previousBtn from "../../Assets/Images/icons/previous.png";
import nextBtn from "../../Assets/Images/icons/next.png";
import { dimen } from "../../Utils/AppContant";

const StoryPage = () => {
  const history = useHistory();
  const { state } = useLocation();
  const storyItem = state as Story;
  const [progress, setProgress] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const contentLength = storyItem.content.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          if(storyIndex < contentLength-1) {
            setStoryIndex(storyIndex+1)
          } 
          return 0;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [storyIndex]);

  const progressNumber = (index: number): number => {
    if (index < storyIndex) {
      return 100;
    } else if (index > storyIndex) {
      return 0;
    } else {
      return progress;
    }
  };

  const listProgresses = storyItem.content.map((item, index) => (
    <ProgressBar
      marginLeft={
        7 * (index + 1) +
        ((dimen.mainStoryWidth - (contentLength + 1) * 7) / contentLength) *
          index
      }
      width={(dimen.mainStoryWidth - (contentLength + 1) * 7) / contentLength}
      variant="determinate"
      value={progressNumber(index)}
    />
  ));

  const previousStory = () => {
    if (storyIndex > 0) {
      setProgress(0)
      setStoryIndex(storyIndex - 1);
    }
  };

  const nextStory = () => {
    if (storyIndex < contentLength-1) {
      setProgress(0)
      setStoryIndex(storyIndex + 1);
    }
  };

  return (
    <Container>
      <Logo src={images.logo_light} />
      <StoryContainer>
        <ChangeStoryButton url={previousBtn} onClick={() => previousStory()} />
        <MainStoryWrapper>
          {listProgresses}
          <Image src={storyItem.content[storyIndex].url} />
        </MainStoryWrapper>
        <ChangeStoryButton url={nextBtn} onClick={() => nextStory()} />
      </StoryContainer>
      <CloseButton src={cancelImg} onClick={() => history.goBack()} />
    </Container>
  );
};

export default StoryPage;
