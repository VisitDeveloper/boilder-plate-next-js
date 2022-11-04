import Link from "next/link";
import { useRouter } from "next/router";

function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  console.log(activeLocale, otherLocales, locales);

  return (
    <span>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a>
                {locale === "en"
                  ? "English"
                  : locale === "fa"
                  ? "فارسی"
                  : undefined}
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
export default LocaleSwitcher;
