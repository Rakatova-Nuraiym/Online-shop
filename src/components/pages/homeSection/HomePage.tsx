import Modal from "../modal/Modal";
import scss from "./homePage.module.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";

import { Link } from "react-router-dom";

import {
  useDeleteProductMutation,
  useGetProductsQuery,
  usePostProductsMutation,
} from "../../../redux/api/products";
import { usePostFavoriteProductsMutation } from "../../../redux/api/favorite";
import { usePostBacketProductsMutation } from "../../../redux/api/backet";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const [postProducts] = usePostProductsMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [postFavoriteProducts] = usePostFavoriteProductsMutation();
  const [postBacketProducts] = usePostBacketProductsMutation();
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
              {data?.map((item, index) => (
                <div className={scss.productCard} key={index}>
                  <Link to={`/products/${item._id}`}>
                    <img src={item.photoUrl} alt="" />
                  </Link>
                  <p>{item.productName}</p>

                  <p>price:{item.price}</p>
                  <p>quantity:{item.quantity}</p>
                  <div className={scss.buttons}>
                    <button onClick={() => DeleteFunc(item._id)}>delete</button>
                    <button onClick={() => basket(item._id)}>
                      {" "}
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