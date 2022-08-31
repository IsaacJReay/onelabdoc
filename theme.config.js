import { useRouter } from "next/router";

const Logo = ({ height }) => {
  return (
    <img
      src="/images/koompi-white.svg"
      alt=""
      style={{ height: "40px !important" }}
    />
  );
};


const TITLE_WITH_TRANSLATIONS = {
  "en-US": "KOOMPI Onelab",
  "km-KH": "KOOMPI Onelab",
  // "zh-CN": "多链互操作 nPoS 网络",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "km-KH": "សំណួរ? ផ្តល់ឱ្យយើងនូវមតិកែលម្អ →",
  // "zh-CN": "有疑问？给我们反馈 →"
};

export default {
  projectLink: "https://github.com/IsaacJReay/onelabdoc",
  docsRepositoryBase: "https://github.com/IsaacJReay/onelabdoc/blob/master/pages",
  titleSuffix: " – KOOMPI Onelab",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo />
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image ||
      `https://onelabdocs.vercel.app${/\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Selendra is a multichain interoperatable nPoS for running Blockchain Applications."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Selendra is a multichain interoperatable nPoS for running Blockchain Applications."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – Selendra" : "Selendra: Multichain Interoperable nPoS Network"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "km-KH":
        return "កែសម្រួលទំព័រនេះនៅលើ GitHub →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "km-KH":
        return (
          <center>
            <a
              href="https://www.koompi.com/"
              target="_blank"
              rel="noopener"
              className="no-underline text-current"
            >
              <span className="mr-1">ផលិតដោយ &#x2764; <a href="https://www.koompi.com">@គម្ពីរ</a></span>
            </a>
          </center>
        );
      default:
        return (
          <center>
            <a
              href="https://www.koompi.com/"
              target="_blank"
              rel="noopener"
              className="no-underline text-current"
            >
              <span className="mr-1">Made with &#x2764; <a href="https://www.koompi.com">@KOOMPI</a></span>
            </a>
          </center>
        );
    }
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "km-KH", text: "ភាសាខ្មែរ" },
    // { locale: "zh-CN", text: "简体中文" }
  ],
};
