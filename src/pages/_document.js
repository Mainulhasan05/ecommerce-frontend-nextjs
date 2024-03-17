import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
              <Head>
          <meta charSet="UTF-8" />
          
          
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      {/* 'js/jquery-3.3.1.min.js',
        'js/bootstrap.min.js',
        'js/jquery.nice-select.min.js',
        'js/jquery-ui.min.js',
        'js/jquery.slicknav.js',
        'js/mixitup.min.js',
        'js/owl.carousel.min.js',
        'js/main.js' */}
      <script src="/js/jquery-3.3.1.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/jquery.nice-select.min.js"></script>
      <script src="/js/jquery-ui.min.js"></script>
      <script src="/js/jquery.slicknav.js"></script>
      <script src="/js/mixitup.min.js"></script>
      <script src="/js/owl.carousel.min.js"></script>
      <script src="/js/main.js"></script>
      
    </Html>
  );
}
