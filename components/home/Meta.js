import Head from "next/head";
import { useRouter } from "next/router";
import { siteName } from "../../siteInfo";

const Meta = () => {
    const router = useRouter();
    const basePath = router.pathname.split("/")[1];
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{siteName}</title>
                ) : (
                    <title>{`${basePath.toUpperCase()} - ${siteName}`}</title>
                )}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/images/favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                {/* <meta
                    name="keywords"
                    content="literature, literary, stories, story, magazine, alternative, non-fiction, journal, charlottesville, virginia, humor, advice, opinions"
                />
                <meta
                    name="description"
                    content="Alternative Charlottesville"
                ></meta> */}
                <meta
                    data-n-head="ssr"
                    data-hid="description"
                    name="description"
                    content="Alternative Charlottesville"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:card"
                    content="Alternative Charlottesville"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:title"
                    content="Curbiture"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:description"
                    content="Alternative Charlottesville"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:creator"
                    content="David Sorensen"
                />

                <meta data-n-head="ssr" name="og:type" content="website" />
                <meta
                    data-n-head="ssr"
                    name="og:url"
                    content="https://curbiture.com"
                />

                <meta
                    data-n-head="ssr"
                    name="og:description"
                    content="Alternative Charlottesville"
                />
                <meta
                    data-n-head="ssr"
                    name="og:site_name"
                    content="Curbiture"
                />
                {/* <link
                    data-n-head="ssr"
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicons/apple-touch-icon.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicons/favicon-32x32.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicons/favicon-16x16.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/x-icon"
                    href="/images/favicons/favicon.ico"
                ></link> */}
            </Head>
        </div>
    );
};

export default Meta;
