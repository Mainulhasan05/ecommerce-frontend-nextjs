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
     
    </Html>
  );
}
