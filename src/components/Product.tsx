import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { truncateTitle } from "../utils/truncateTitle";
import ProductModel from "../models/ProductModel";
import { addProductToCart } from "../redux/pasteleriaSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DrawerCart from "./DrawerCart";

export default function Product({
  id,
  name,
  price,
  quantity,
  addedToCart,
  image,
}: ProductModel) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <Card elevation={0}>
        <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {truncateTitle(name, 20)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="text"
            fullWidth
            onClick={() => {
              dispatch(addProductToCart(id));
              setOpenDrawer(true);
            }}
            style={{
              backgroundColor: "#d8ac84",
              color: "white",
            }}
          >
            AGREGAR AL CARRITO
          </Button>
        </CardActions>
      </Card>
      <DrawerCart open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}
