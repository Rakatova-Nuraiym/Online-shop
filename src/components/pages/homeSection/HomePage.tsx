import Modal from "../modal/Modal";
import scss from "./homePage.module.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useEditProductsMutation,
  useGetProductsQuery,
  usePostProductsMutation,
} from "../../../redux/api/products";
import { usePostFavoriteProductsMutation } from "../../../redux/api/favorite";
import { usePostBacketProductsMutation } from "../../../redux/api/backet";

type itemType = {
  _id: string;
  productName: string;
  quantity: string;
  price: string;
  photoUrl: string;
};

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [edit, setEdit] = useState<string | null>(null);
  const [postProducts] = usePostProductsMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [postFavoriteProducts] = usePostFavoriteProductsMutation();
  const [postBacketProducts] = usePostBacketProductsMutation();
  const [editProducts] = useEditProductsMutation();
  const { data, isLoading } = useGetProductsQuery();

  console.log(modal);
  const formik = useFormik({
    initialValues: {
      productName: "",
      quantity: "",
      price: "",
      photoUrl: "",
    },
    onSubmit: async (values) => {
      const products = {
        productName: values.productName,
        quantity: values.quantity,
        price: values.price,
        photoUrl: values.photoUrl,
      };
      await postProducts(products);
    },
  });

  const DeleteFunc = async (id: string) => {
    await deleteProduct(id);
  };

  const postfavorite = async (id: string) => {
    await postFavoriteProducts(id);
  };

  const basket = async (id: string) => {
    await postBacketProducts(id);
  };

  console.log(edit);

  const EditFunc = async (_id: string) => {
    const newData = {
      productName,
      quantity,
      price,
      photoUrl,
    };
    editProducts({ _id, newData });
    setEdit(null);
  };

  const upData = (item: itemType) => {
    setEdit(item._id);
    setProductName(item.productName);
    setQuantity(item.quantity);
    setPrice(item.price);
    setPhotoUrl(item.photoUrl);
  };
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <button onClick={handleModal}>add product</button>

        <div className={scss.content}>
          <Modal isOpen={modal} OnClose={handleModal}>
            <TextField
              id="productName"
              label="product name"
              variant="outlined"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextField
              id="quantity"
              label=" quantity"
              variant="outlined"
              value={formik.values.quantity}
              onChange={formik.handleChange}
            />
            <TextField
              id="price"
              label="price"
              variant="outlined"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <TextField
              id="photoUrl"
              label="photoUrl"
              variant="outlined"
              value={formik.values.photoUrl}
              onChange={formik.handleChange}
            />
            <Button variant="text" onClick={() => formik.handleSubmit()}>
              aad product
            </Button>
          </Modal>

          {isLoading ? (
            <>
              <h3>...Loading</h3>
            </>
          ) : (
            <>
              {data?.map((item) => (
                <div className={scss.productCard} key={item._id}>
                  {edit === item._id ? (
                    <>
                      <TextField
                        id="productName"
                        label="product name"
                        variant="outlined"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        onBlur={formik.handleBlur}
                      />
                      <TextField
                        id="quantity"
                        label=" quantity"
                        variant="outlined"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <TextField
                        id="price"
                        label="price"
                        variant="outlined"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <TextField
                        id="photoUrl"
                        label="photoUrl"
                        variant="outlined"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                      />
                      <button onClick={() => EditFunc(item._id)}>save</button>
                    </>
                  ) : (
                    <div>
                      <Link to={`/products/${item._id}`}>
                        <img src={item.photoUrl} alt="" />
                      </Link>
                      <p>{item.productName}</p>

                      <p>price:{item.price}</p>
                      <p>quantity:{item.quantity}</p>
                      <div className={scss.buttons}>
                        <button onClick={() => DeleteFunc(item._id)}>
                          delete
                        </button>
                        <button onClick={() => basket(item._id)}>
                          add to Basket
                        </button>
                        <input
                          className={scss.favorite}
                          onClick={() => {
                            postfavorite(item._id);
                          }}
                          type="checkbox"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setEdit(item._id);
                          upData(item);
                        }}
                      >
                        edit
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
