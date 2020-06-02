import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>West Midlands Network CMS Documentation</title>
        <meta name="msapplication-config" content="https://cdnpremium.blob.core.windows.net/cdn/staging/wmnassets/config/browserconfig.xml" />
        <link rel="shortcut icon" href="https://cdnpremium.blob.core.windows.net/cdn/staging/wmnassets/config/favicons/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="https://cdnpremium.blob.core.windows.net/cdn/staging/wmnassets/config/site.webmanifest" />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper