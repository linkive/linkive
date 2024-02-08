import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type StatePrice = {
  min: number;
  max: number;
  curMin: number;
  curMax: number;
};

type ActionPrice = {
  setCurMin: (price: number) => void;
  setCurMax: (price: number) => void;
};

const initialStatePrice: StatePrice = {
  min: 0,
  max: 200000,
  curMin: 0,
  curMax: 200000,
};

export const usePriceStore = create<StatePrice & ActionPrice>()(
  devtools((set, get) => ({
    ...initialStatePrice,
    setCurMin: (price: number) => {
      const { curMin } = get();
      if (curMin !== price) {
        set({ curMin: price });
      }
    },

    setCurMax: (price: number) => {
      const { curMax } = get();
      if (curMax !== price) {
        set({ curMax: price });
      }
    },
  }))
);

export type OrderType =
  | "최신순"
  | "좋아요 많은 순"
  | "낮은 가격순"
  | "높은 가격순"
  | "정확도순";

interface OrderProps {
  order: OrderType;
  setOrder: (order: OrderType) => void;
}

export const useOrderStore = create<OrderProps>()(
  devtools((set) => ({
    order: "최신순",
    setOrder: (order: OrderType) => {
      set({ order });
    },
  }))
);
