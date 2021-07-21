import { NavView, Logo, ButtonView } from "./styles";
import { images } from "../../Utils/AppContant";
import SearchBar from "./SearchBar";
import BarItem, { itemBarName } from "./BarItem";
import BarAvatar from "./BarAvatar";

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
        <BarAvatar/>
      </ButtonView>
    </NavView>
  ); 
};

export default NavigationBar;
