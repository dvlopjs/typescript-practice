import ErrorIcon from "@mui/icons-material/Error";
export default function NotFound() {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        minHeight: "100vh", // Asegura que el contenedor ocupe al menos toda la altura de la ventana
      }}
    >
      ERROR 404, page not found.
      <ErrorIcon fontSize="large" />
    </h3>
  );
}
