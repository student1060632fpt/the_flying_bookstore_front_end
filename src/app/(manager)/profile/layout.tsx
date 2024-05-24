import MenuProfile from "@/components/order/MenuProfile"
import { Box, Container, Grid } from "@mui/material"

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container gap={2}>
          <Grid item xs={3}>
            <MenuProfile />
          </Grid>
          <Grid item xs={8}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default layout