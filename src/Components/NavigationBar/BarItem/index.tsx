import { ItemView, Icon } from "./styles";
import homeImage from "../../../Assets/Images/icons/home.png";
import homeSelectedImage from "../../../Assets/Images/icons/home-selected.png";
import chatImage from "../../../Assets/Images/icons/chat.png";
import chatSelectedImage from "../../../Assets/Images/icons/chat-selected.png";
import compassImage from "../../../Assets/Images/icons/compass.png";
import compassSelectedImage from "../../../Assets/Images/icons/compass-selected.png";
import heartImage from "../../../Assets/Images/icons/heart.png";
import heartSelectedImage from "../../../Assets/Images/icons/heart-selected.png";
import { useRouteMatch, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

type barItemProp = {
  title: string;
  handleEvent: () => void;
};

export const itemBarName = {
  HOME: "home",
  CHAT: "chat",
  EXPLORE: "explore",
  NOTICE: "notice",
};

const BarItem = ({ title, handleEvent }: barItemProp) => {
  const match = useRouteMatch();
  const path = match.path+'/' + title;
  
  const [isActive, setIsActive] = useState(false);

  const imageUrl = () => {
    if (isActive) {
      switch (title) {
        case itemBarName.HOME:
          return homeSelectedImage;
        case itemBarName.CHAT:
          return chatSelectedImage;
        case itemBarName.EXPLORE:
          return compassSelectedImage;
        case itemBarName.NOTICE:
          return heartSelectedImage;
        default:
          return homeSelectedImage;
      }
    } else {
      switch (title) {
        case itemBarName.HOME:
          return homeImage;
        case itemBarName.CHAT:
          return chatImage;
        case itemBarName.EXPLORE:
          return compassImage;
        case itemBarName.NOTICE:
          return heartImage;
        default:
          return homeImage;
      }
    }
  };

  return (
    <ItemView>
      <NavLink
        to={path}
        exact
        isActive={(match, location) => {
          if (!match) {
            setIsActive(false);
            return false;
          }
          setIsActive(true);
          return true;
        }}
      >
        <Icon src={imageUrl()} />
      </NavLink>
    </ItemView>
  );
};

BarItem.defaultProps = {
  title: "",
  handleEvent: () => {},
};

export default BarItem;
