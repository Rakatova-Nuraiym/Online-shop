import {
  useBuyProductMutation,
  useGetBacketQuery,
} from "../../../redux/api/backet";
import scss from "./basket.module.scss";

const Backet = () => {
  const { data, isLoading, isError } = useGetBacketQuery();
  const [buyProduct] = useBuyProductMutation();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (isError) {
    return <div> Error </div>;
  }

  const BuyProfucts = async (id: string) => {
    const buyProducts = {
      quantityToDecrease: 5,
    };

    await buyProduct({ buyProducts, id });
  };

  return (
    <div className="container">
      <div className={scss.card}>
        {data?.map((item) => (
          <div className={scss.productCard} key={item.product._id}>
            <img src={item.product.photoUrl} alt="" />

            <button onClick={() => BuyProfucts(item.product._id)}>
              купить
            </button>

            <p>{item.product.productName}</p>
            <p>price:{item.product.price}</p>
            <p>quantity:{item.product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backet;
