import { Dispatch, SetStateAction } from "react";

export type StatType = {
  [key: string]: number;
};
export type BijType = {
  plus1: StatType;
  plus2: StatType;
  minus: StatType;
};

export type TotalStatsType = {
  neck: BijType | null;
  earrings1: BijType | null;
  earrings2: BijType | null;
  ring1: BijType | null;
  ring2: BijType | null;
  fetr: BijType | null;
  book1: StatType | null;
  book2: StatType | null;
};

export type JewelryProps = {
  data: TotalStatsType;
};

export type ModalProps = {
  data: TotalStatsType;
  setData: Dispatch<SetStateAction<TotalStatsType>>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
};
