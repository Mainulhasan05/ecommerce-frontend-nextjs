import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
              <Head>
          <meta charSet="UTF-8" />
          
          
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet" />

          <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" type="text/css" />
          <link rel="stylesheet" href="/css/elegant-icons.css" type="text/css" />
          <link rel="stylesheet" href="/css/nice-select.css" type="text/css" />
          <link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" type="text/css" />
          <link rel="stylesheet" href="/css/slicknav.min.css" type="text/css" />
          <link rel="stylesheet" href="/css/style.css" type="text/css" />
        </Head>
    {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="/js/jquery-3.3.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="/js/main.js"></script>
      <script src="/js/mixitup.min.js"></script>
      <script src="/js/jquery.nice-select.min.js"></script>
      <script src="/js/jquery-ui.min.js"></script>
      {/* <script src="/js/jquery.slicknav.js"></script> */}
      <script src="/js/owl.carousel.min.js"></script>
      
    </Html>
  );
}
