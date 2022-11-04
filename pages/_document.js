import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en-US" };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === "fa" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `if (!document.cookie || document.cookie.indexOf('auth') === -1) { if (location.pathname !== '/login') location.replace('/login'); }`,
          }}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
