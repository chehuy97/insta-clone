import { NavView, Logo, ButtonView } from "./styles";
import { images } from "../../Config/AppContant";
import SearchBar from "./SearchBar";
import BarItem, { itemBarName } from "./BarItem";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from 'react'

const NavigationBar = () => {

  return (
    <NavView>
      <Logo src={images.logo} />
      <SearchBar />
      <ButtonView>
        <BarItem title={itemBarName.HOME}/>
        <BarItem title={itemBarName.CHAT}/>
        <BarItem title={itemBarName.EXPLORE}/>
        <BarItem title={itemBarName.NOTICE}/>
      </ButtonView>
    </NavView>
  ); 
};

export default NavigationBar;
