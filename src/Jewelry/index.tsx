import { JewelryProps } from "../types";
import Bij from "./Bij";
import Fetr from "./Fetr";
import "./jewelry.css";
const Jewelry: React.FC<JewelryProps> = ({ data }) => {
  return (
    <div className="jewelry">
      <Bij name="neck" checked={!!data?.neck} bij={data?.neck} />
      <Bij name="earrings1" checked bij={data?.earrings1} />
      <Bij name="earrings2" checked bij={data?.earrings2} />
      <Bij name="ring1" checked bij={data?.ring1} />
      <Bij name="ring2" checked bij={data?.ring2} />
      <Fetr name="fetr" checked bij={data?.fetr} />
    </div>
  );
};
export default Jewelry;
