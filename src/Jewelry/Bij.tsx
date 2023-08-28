import { BijProps } from "./types";
import "./jewelry.css";

const Bij: React.FC<BijProps> = ({ name, checked }) => {
  return <div className={`bij ${name} ${checked ? "checked" : ""}`}></div>;
};
export default Bij;
