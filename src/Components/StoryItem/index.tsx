import { Story } from "../../Mocks/story";
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Container, ImageWrapper, Image, Name } from "./styles";

type storyProps = {
  data: Story;
};

const StoryItem = ({ data }: storyProps) => {

  const history = useHistory()
  const match = useRouteMatch()

  return (
    <Container>
      <ImageWrapper>
        <Image 
          url={data.imagePage} 
          onClick={() => {
            history.push({
              pathname:match.path+'stories/'+data.id,
              state: data
            })
          }}/>
      </ImageWrapper>
      <Name>{data.pageName}</Name>
    </Container>
  );
};

export default StoryItem;
