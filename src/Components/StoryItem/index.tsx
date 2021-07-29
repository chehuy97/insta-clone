import { Story } from "../../Mocks/story";
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Container, ImageWrapper, Image, Name } from "./styles";

type storyProps = {
  data: Story;
  index: number
};

const StoryItem = ({ data, index }: storyProps) => {

  const history = useHistory()
  const match = useRouteMatch()

  return (
    <Container>
      <ImageWrapper>
        <Image 
          url={data.imagePage} 
          onClick={() => {
            history.push({
              pathname:match.path+'/stories',
              state: index
            })
          }}/>
      </ImageWrapper>
      <Name>{data.pageName}</Name>
    </Container>
  );
};

export default StoryItem;
