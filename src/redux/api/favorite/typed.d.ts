/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Favorite {
  type GetProductResponse = {
    productName: string;
    quantity: number;
    price: number | null;
    photoUrl: string;
    _id: string;
    __v: number;
    product: {
      productName: string;
      quantity: number;
      price: number | null;
      photoUrl: string;
      _id: string;
    };
  }[];
  type GetProductRequest = void;

  type PostProductResponse = {
    productName: string;
    quantity: number;
    price: number | null;
    photoUrl: string;
    _id: string;
  }[];
  type PostProductRequest = string;
}
