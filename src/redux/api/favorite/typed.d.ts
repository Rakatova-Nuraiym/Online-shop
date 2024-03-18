/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Favorite {
  type GetProductResponse = {
    productName: string;
    quantity: number | null;
    price: number | null;
    photoUrl: string;
    _id: string;
    __v: number;
  }[];
  type GetProductRequest = void;

  type PostProductResponse = {
    productName: string;
    quantity: number | null;
    price: number | null;
    photoUrl: string;
    _id: string;
  }[];
  type PostProductRequest = string;
}
