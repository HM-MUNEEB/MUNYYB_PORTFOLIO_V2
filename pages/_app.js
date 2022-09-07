import "../styles/globals.css";
import Container from "../Components/Container/Container";
import chalk from "chalk";

function MyApp({ Component, pageProps }) {
  console.log(
    `%c ${chalk.hex("#00E220").bold("Made with ❤️ by Munyyb Ur Ryhman!")}`,
    "font-size: 1rem"
  );
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
