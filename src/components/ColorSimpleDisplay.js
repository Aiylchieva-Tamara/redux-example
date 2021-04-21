import { useSelector } from "react-redux";

const ColorSimpleDisplay = () => {
  const color = useSelector(state => state.color);
  const style = {
    border: `10px solid ${color}`,
  };
  return (
    <div style={style}>{color}</div>
  );
}
export default ColorSimpleDisplay;
