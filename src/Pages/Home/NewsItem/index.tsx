import { News } from "../../../Mocks/newsfeed";
import {
  NewsContainer,
  RowContainer,
  Header,
  Image,
  HeaderImage,
  HeaderText,
  ReactContainer,
  ReactIcon,
  LikeText,
  Title,
} from "./styles";
import { useState, useRef } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import redHeart from "../../../Assets/Images/icons/red-heart.png";
import heart from "../../../Assets/Images/icons/heart.png";
import comment from "../../../Assets/Images/icons/comment.png";
import share from "../../../Assets/Images/icons/share.png";
import bookmark from "../../../Assets/Images/icons/bookmark.png";
import bookmarkSelected from "../../../Assets/Images/icons/bookmark-selected.png";
import ReactPlayer from 'react-player'

type newsItemProps = {
  data: News;
};

const NewsItem = ({ data }: newsItemProps) => {
  const [like, setLike] = useState(false);
  const [mark, setMark] = useState(false);
  const videoRef = useRef();

  return (
    <NewsContainer>
      <Header>
        <RowContainer>
          <HeaderImage url={data.imagePage} />
          <HeaderText>{data.namePage}</HeaderText>
        </RowContainer>
        <MoreHorizIcon />
      </Header>
      {data.type == "image" ? (
        <Image imageURL={data.url} />
      ) : (
        // <Video controls loop>
        //   <source src={data.url} type="video/mp4" />
        // </Video>
        <ReactPlayer 
          height='650'
          url={data.url}
          controls
          loop/>
      )}
      <ReactContainer>
        <RowContainer>
          <ReactIcon
            src={like ? redHeart : heart}
            onClick={() => setLike(!like)}
          />
          <ReactIcon src={comment} />
          <ReactIcon src={share} />
        </RowContainer>
        <ReactIcon
          src={mark ? bookmarkSelected : bookmark}
          onClick={() => setMark(!mark)}
        />
      </ReactContainer>
      <LikeText>{data.likes + " likes"}</LikeText>
      <Title>
        <b>{data.namePage + " "}</b>
        {data.content}
      </Title>
    </NewsContainer>
  );
};

export default NewsItem;
