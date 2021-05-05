// Packages
import { Helmet } from "react-helmet"

// Data
import SiteData from "./SiteData"

function HelmetMeta(props) {
    return (
        <Helmet>
            <title>
                {props.title} | {SiteData.siteName}
            </title>
            <link rel="icon" href="/favicon.ico" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={props.description} />
            <meta
                name="keywords"
                content={`${props.keywords}, ${SiteData.siteKeywords}`}
            />
            <meta name="author" content={SiteData.siteAuthor} />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content={SiteData.siteType} />
            <meta property="og:image" content={SiteData.siteCover} />
            <meta property="og:site_name" content={SiteData.siteTitle} />
            <meta property="og:locale" content={SiteData.siteLanguage} />
        </Helmet>
    );
}

export default HelmetMeta;