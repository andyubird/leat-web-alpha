import { Typography, Box, Container } from "@material-ui/core";

export default function Home() {
  return (
    <Container>
      {/* <img src="./ADEN.png" alt="ADEN"></img> */}
      <Box mt={3}>
        <Typography variant="h5">地方電力分析工具 網頁版 Alpha 0.1</Typography>
      </Box>
    </Container>
  );
}
