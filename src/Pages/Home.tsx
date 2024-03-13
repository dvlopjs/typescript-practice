import { Box, CircularProgress, Grid, LinearProgress } from "@mui/material";
import Product from "../components/Product";
type HomeProps = {
  products: {
    title: string;
    description: string;
    thumbnail: string;
    price: number;
  }[];
  isLoading: boolean;
};

export default function Home({ products, isLoading }: HomeProps) {
  console.log({ isLoading });
  return (
    <>
      <Grid
        spacing={2}
        container
        style={{
          paddingLeft: "2em",
          paddingRight: "2em",
        }}
      >
        {products.length
          ? products.map((p) => (
              <Grid key={p.thumbnail} item xs={12} sm={6} md={3}>
                <Product title={p.title} image={p.thumbnail} price={p.price} />
              </Grid>
            ))
          : null}
      </Grid>
      {isLoading ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      ) : null}
    </>
  );
}
