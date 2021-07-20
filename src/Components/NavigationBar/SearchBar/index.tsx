import { Input, InputView } from "./styles";

interface searchBarProps {
  searchValue: string;
}

const SearchBar = ({ searchValue }: searchBarProps) => {
  return (
    <InputView>
      <Input />
    </InputView>
  );
};

SearchBar.defaultProps = {
  searchValue: "",
};

export default SearchBar;
