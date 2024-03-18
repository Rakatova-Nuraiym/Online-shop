/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCTS {
  type GetProductResponse = {
    productName: string;
    quantity: string | null;
    price: string | null;
    photoUrl: string;
    _id: string;
    __v: number;
  }[];
  type GetProductRequest = void;

  type PostProductResponse = {
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
  };
  type PostProductRequest = {
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
    _id?: string;
    __v?: string;
  }[];
}
