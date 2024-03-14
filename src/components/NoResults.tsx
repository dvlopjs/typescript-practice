import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Typography } from "@mui/material";
export default function NoResults() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      paddingTop={5}
    >
      <Typography variant="h5">
        There's no results for your research.
      </Typography>
      <SentimentVeryDissatisfiedIcon fontSize="large" />
    </Box>
  );
}
