import { Box, TextField } from "@mui/material";

type SearchInputProps = {
  inputValue: string;
  setInputValue: Function;
};

export default function SearchInput({
  inputValue,
  setInputValue,
}: SearchInputProps) {
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <Box pb={5} display={"flex"} justifyContent={"center"}>
      <TextField
        variant="outlined"
        value={inputValue}
        onChange={handleChangeInputValue}
        label={"Search Product"}
        style={{ width: "50%" }}
      />
    </Box>
  );
}
