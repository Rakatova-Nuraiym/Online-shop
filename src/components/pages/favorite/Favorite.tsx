import { useGetfavoriteQuery } from "../../../redux/api/favorite";
import scss from "./favorite.module.scss";

const Favorite = () => {
  const { data, isLoading, isError } = useGetfavoriteQuery();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (isError) {
    return <div> Error </div>;
  }

  return (
    <div className="container">
      <div className={scss.card}>
        {data?.map((item) => (
          <div className={scss.productCard} key={item.product._id}>
            <img src={item.product.photoUrl} alt="" />

            <p>{item.product.productName}</p>
            <p>price:{item.product.price}</p>
            <p>quantity:{item.product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
