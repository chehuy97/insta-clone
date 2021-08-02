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
  const [duration, setDuration] = useState(8);
  const contentLength = storyItem.content.length;
  var timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setTimer();
    return () => {
      clearInterval(timer);
    };
  }, [storyItem, storyIndex, pageIndex, duration]);

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
      index={index}
      variant="determinate"
      value={progressNumber(index)}
    />
  ));

  const setTimer = (): NodeJS.Timeout => {
    return setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          if (storyIndex < contentLength - 1) {
            setStoryIndex(storyIndex + 1);
          } else if (pageIndex < stories.length - 1) {
            setStoryIndex(0);
            setPageIndex(pageIndex + 1);
            setStoryItem(stories[pageIndex + 1]);
          }
          return 0;
        }

        return Math.min(oldProgress + 100 / (duration / 0.21), 100);
      });
    }, 200);
  };

  const previousStory = () => {
    if (storyIndex != 0) {
      setProgress(0);
      setStoryIndex(storyIndex - 1);
      // history.push(match.path+'/'+storyItem.pageName+'/'+storyItem.content[storyIndex].story_id)
    } else if (pageIndex != 0) {
      setProgress(0);
      setStoryIndex(0);
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
      setStoryIndex(0);
      setPageIndex(pageIndex + 1);
      setStoryItem(stories[pageIndex + 1]);
    }
  };

  const handle_playing = () => {
    if (playing) {
      console.log("Pause");    
      clearInterval(timer);
    } else {
      console.log("Play");
      timer = setTimer();
    }
    setPlaying(!playing);
  };

  return (
    <Container>
      <Logo src={images.logo_light} />
      <StoryContainer>
        <Wrapper>
          {!(pageIndex < 2) ? (
            <ExtraStory storyItem={stories[pageIndex - 2]} index={2} />
          ) : null}
          {!(pageIndex < 1) ? (
            <ExtraStory storyItem={stories[pageIndex - 1]} index={1} />
          ) : null}
        </Wrapper>
        <ChangeStoryButton url={previousBtn} onClick={() => previousStory()} />
        <MainStoryWrapper>
          {listProgresses}
          {storyItem.content[storyIndex].type == "image" ? (
            <Image
              src={storyItem.content[storyIndex].url}
              onLoad={() => setDuration(8)}
            />
          ) : (
            <ReactPlayer
              width={dimen.mainStoryWidth + "px"}
              url={storyItem.content[storyIndex].url}
              playing={playing}
              muted={!sound}
              loop
              onDuration={setDuration}
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
            <ExtraStory storyItem={stories[pageIndex + 1]} index={1} />
          ) : null}
          {!(pageIndex > stories.length - 3) ? (
            <ExtraStory storyItem={stories[pageIndex + 2]} index={2} />
          ) : null}
        </Wrapper>
      </StoryContainer>
      <CloseButton src={cancelImg} onClick={() => history.goBack()} />
    </Container>
  );
};

export default StoryPage;
