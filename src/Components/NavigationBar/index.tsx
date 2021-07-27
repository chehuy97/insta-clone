import { NavView, Logo, ButtonView, Avatar } from "./styles";
import { images } from "../../Utils/AppContant";
import SearchBar from "./SearchBar";
import BarItem, { itemBarName } from "./BarItem";
import { useState } from 'react'
import avatar from '../../Assets/Images/avatar/avatar-40.png'
import AccountModal from "../AccountModal";

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <NavView>
      <Logo src={images.logo} />
      <SearchBar />
      <ButtonView>
        <BarItem title={itemBarName.HOME}/>
        <BarItem title={itemBarName.CHAT}/>
        <BarItem title={itemBarName.EXPLORE}/>
        <BarItem title={itemBarName.NOTICE}/>
        <Avatar url={avatar} onClick={() => setShowModal(!showModal)}/>
        {showModal ? <AccountModal/> : null}
      </ButtonView>
    </NavView>
  ); 
};

export default NavigationBar;
