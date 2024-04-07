import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}
    >
      <Box sx={{textAlign: "center"}}>
        <Typography variant="h3" sx={{my:3}}>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{mb:2}}>
          The page you are looking for does not exist.
        </Typography>
        <Link href="/">
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
