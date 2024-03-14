import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  decreaseQuantityProductOnCart,
  increaseQuantityProductOnCart,
} from "../../redux/pasteleriaSlice";

export const DrawerContent = () => {
  const products = useSelector((state: RootState) => state.pasteleria.products);
  const productsOnCart = products.filter((p) => p.addedToCart);
  const dispatch = useDispatch();
  return (
    <Box width={450} pt={2}>
      <Typography fontWeight={"bold"} align="center" variant="h6" pb={2}>
        CARRITO DE COMPRAS
      </Typography>
      <Divider />
      <List>
        {productsOnCart.map((p, i) => (
          <React.Fragment key={i}>
            <ListItem
              secondaryAction={
                <IconButton
                  title="Quitar producto"
                  color="error"
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <img src={p.image} width={100} style={{ borderRadius: 50 }} />
              </ListItemAvatar>
              <ListItemText
                primary={<span style={{ paddingLeft: 5 }}>{p.name}</span>}
              />
              <IconButton
                title="Disminuir cantidad"
                onClick={() => dispatch(decreaseQuantityProductOnCart(p.id))}
              >
                <RemoveIcon />
              </IconButton>

              {p.quantity}
              <IconButton
                title="Aumentar cantidad"
                onClick={() => dispatch(increaseQuantityProductOnCart(p.id))}
              >
                <AddIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
