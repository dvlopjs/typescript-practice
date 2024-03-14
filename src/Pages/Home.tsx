import { Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import ProductModel from "../models/ProductModel";
import { RootState } from "../redux/store";

export default function Home() {
  const products = useSelector((state: RootState) => state.pasteleria.products);
  return (
    <div style={{ paddingTop: 100 }}>
      <Grid
        spacing={2}
        container
        style={{
          paddingLeft: "2em",
          paddingRight: "2em",
        }}
      >
        {products.length
          ? products.map((p: ProductModel) => (
              <Grid key={p.id} item xs={12} sm={3} md={3}>
                <Product
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  quantity={p.quantity}
                  addedToCart={p.addedToCart}
                  image={p.image}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}
