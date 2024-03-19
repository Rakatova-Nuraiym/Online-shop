/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable */
//@ts-nocheck
import { useParams } from "react-router-dom";
import scss from "./products.module.scss";
import { useGetOneProductQuery } from "../../../redux/api/products";

const ProductPage = () => {
  const { productId }: any = useParams();
  const { data }: PRODUCTS.data= useGetOneProductQuery(productId!);
  

  return (    
    <div className={scss.ProductPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>{data?.productName}</h1>
          <img src={data?.photoUrl} alt="logo" />
          <h3> price:{data?.price}</h3>
          <h3>quantity:{data?.quantity}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
