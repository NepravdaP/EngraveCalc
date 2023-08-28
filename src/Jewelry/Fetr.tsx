import "./jewelry.css";
import { BijProps } from "./types";
const Fetr: React.FC<BijProps> = ({ name, checked }) => {
  return <div className={`${name}  ${checked ? "checked" : ""}`}></div>;
};
export default Fetr;
