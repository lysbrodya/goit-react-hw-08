import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onChangeValue = (e) => dispatch(changeFilter(e.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
        className={css.searchBox}
      />
    </>
  );
}
