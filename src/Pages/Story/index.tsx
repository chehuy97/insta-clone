import {
  Container,
  Logo,
  CloseButton,
  StoryContainer,
  MainStoryWrapper,
  Image,
  ProgressBar,
  ChangeStoryButton,
  ControlBar,
  Wrapper,
  PageImage,
  PageName,
  BarButton,
} from "./styles";
import { images } from "../../Utils/AppContant";
import cancelImg from "../../Assets/Images/icons/cancel.png";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { Story } from "../../Mocks/story";
import { useState, useEffect } from "react";
import previousBtn from "../../Assets/Images/icons/previous.png";
import nextBtn from "../../Assets/Images/icons/next.png";
import { dimen } from "../../Utils/AppContant";
import ReactPlayer from "react-player";
import imgSound from "../../Assets/Images/icons/sound.png";
import imgMuteSound from "../../Assets/Images/icons/mute-sound.png";
import imgPlay from "../../Assets/Images/icons/play-button.png";
import imgPause from "../../Assets/Images/icons/pause-button.png";
import imgMore from "../../Assets/Images/icons/more.png";
import { stories } from "../../Mocks/story";
import ExtraStory from "./ExtraStory";

const StoryPage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { state } = useLocation();
  const [pageIndex, setPageIndex] = useState(state as number);
  const [storyItem, setStoryItem] = useState(stories[pageIndex]);
  const [progress, setProgress] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(true);
  const contentLength = storyItem.content.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {       
          if (storyIndex < contentLength - 1) {
            setStoryIndex(storyIndex + 1);
          } else if ((pageIndex < stories.length - 1) ) {
            console.log('hehe');
            setStoryIndex(0)
            setStoryIndex(0)
            setPageIndex(pageIndex + 1);
            setStoryItem(stories[pageIndex + 1]);
          }
          return 0;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [storyItem, storyIndex, pageIndex]);

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
        10 * (index + 1) +
        ((dimen.mainStoryWidth - (contentLength + 1) * 10) / contentLength) *
          index
      }
      width={(dimen.mainStoryWidth - (contentLength + 1) * 10) / contentLength}
      variant="determinate"
      value={progressNumber(index)}
    />
  ));

  const previousStory = () => {
    if (storyIndex != 0) {
      setProgress(0);
      setStoryIndex(storyIndex - 1);
      // history.push(match.path+'/'+storyItem.pageName+'/'+storyItem.content[storyIndex].story_id)
    } else if (pageIndex != 0) {
      setProgress(0);
      setStoryIndex(0)
      setPageIndex(pageIndex - 1);
      setStoryItem(stories[pageIndex - 1]);
    }
  };

  const nextStory = () => {
    if (storyIndex < contentLength - 1) {
      setProgress(0);
      setStoryIndex(storyIndex + 1);
      // history.push(match.path+'/'+storyItem.pageName+'/'+storyItem.content[storyIndex].story_id)
    } else if (pageIndex < stories.length - 1) {
      setProgress(0);
      setStoryIndex(0)
      setPageIndex(pageIndex + 1);
      setStoryItem(stories[pageIndex+1]);
    }
  };

  return (
    <Container>
      <Logo src={images.logo_light} />
      <StoryContainer>
        <Wrapper>
          {!(pageIndex < 2) ? (
            <ExtraStory storyItem={stories[pageIndex - 2]} />
          ) : null}
          {!(pageIndex < 1) ? (
            <ExtraStory storyItem={stories[pageIndex - 1]} />
          ) : null}
        </Wrapper>
        <ChangeStoryButton url={previousBtn} onClick={() => previousStory()} />
        <MainStoryWrapper>
          {listProgresses}
          {storyItem.content[storyIndex].type == "image" ? (
            <Image src={storyItem.content[storyIndex].url} />
          ) : (
            <ReactPlayer
              width={dimen.mainStoryWidth + "px"}
              url={storyItem.content[storyIndex].url}
              playing={playing}
              muted={!sound}
              loop
            />
          )}
          <ControlBar>
            <Wrapper>
              <PageImage url={storyItem.imagePage} />
              <PageName>{storyItem.pageName}</PageName>
            </Wrapper>
            <Wrapper>
              <BarButton
                onClick={() => setPlaying(!playing)}
                url={!playing ? imgPlay : imgPause}
              />
              <BarButton
                onClick={() => setSound(!sound)}
                url={sound ? imgSound : imgMuteSound}
              />
              <BarButton url={imgMore} />
            </Wrapper>
          </ControlBar>
        </MainStoryWrapper>
        <ChangeStoryButton url={nextBtn} onClick={() => nextStory()} />
        <Wrapper>
          {!(pageIndex > stories.length - 2) ? (
            <ExtraStory storyItem={stories[pageIndex + 1]} />
          ) : null}
          {!(pageIndex > stories.length - 3) ? (
            <ExtraStory storyItem={stories[pageIndex + 2]} />
          ) : null}
        </Wrapper>
      </StoryContainer>
      <CloseButton src={cancelImg} onClick={() => history.goBack()} />
    </Container>
  );
};

export default StoryPage;
