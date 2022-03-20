import NormalizerStyled from "../styles/normalize";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NormalizerStyled />
    </>
  );
}

export default MyApp;
