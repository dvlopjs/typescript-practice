import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { truncateTitle } from "../utils/truncateTitle";

type ProductProps = {
  title: string;
  image: string;
  price: number;
};

export default function Product({ title, image, price }: ProductProps) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140, maxHeight: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {truncateTitle(title, 20)}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ${price.toLocaleString("en-US")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
