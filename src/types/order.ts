export type Order = {
  id: number;
  type: string;
  amount: string;
  price: string;
  createdAt: Date;
  stockId: number;
};

export interface OrderHistory extends Order {
  archivedAt: Date;
}
