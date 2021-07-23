import { Story } from "../../Mocks/story";
import { Container, ImageWrapper, Image, Name } from "./styles";

type storyProps = {
  data: Story;
};

const StoryItem = ({ data }: storyProps) => {
  return (
    <Container>
      <ImageWrapper>
        <Image url={data.imagePage} />
      </ImageWrapper>
      <Name>{data.pageName}</Name>
    </Container>
  );
};

export default StoryItem;
