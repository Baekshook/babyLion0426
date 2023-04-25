import { Global } from "@emotion/react";

const Fonts = () => (
  <>
    <Global
      styles={`@font-face {
    font-family: 'LOTTERIADDAG';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIADDAG.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}');

`}
    />
    <Global
      styles={`@font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
`}
    />
  </>
);

export default Fonts;
