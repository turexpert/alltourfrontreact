export interface IOffer {
  id: number;
  name: string;
  img: string;
  bus: {
    byn: number;
    usd: number;
  };
  plane: {
    byn: number;
    usd: number;
  };
}
