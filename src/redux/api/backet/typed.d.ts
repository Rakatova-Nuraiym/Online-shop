/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Backet {
  type GetProductRequest = void;
  type GetProductResponse = {
    productName: string;
    quantity: number | null;
    price: number | null;
    photoUrl: string;
    _id: string;
    __v: number;
    product: {
      productName: string;
      quantity: number | null;
      price: number | null;
      photoUrl: string;
      _id: string;
    };
  }[];
  type PostProductResponse = string;
  type PostProductRequest = {
    productName: string;
    quantity: number | null;
    price: number | null;
    photoUrl: string;
    _id?: string;
    __v?: number;
  }[];
}
