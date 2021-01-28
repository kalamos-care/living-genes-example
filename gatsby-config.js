
require("dotenv").config({ path: `.env` })
const flattenMenu = require("@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu")

module.exports = {
  siteMetadata: {
    title: `Living Genes`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@bbthorson`,
    gatsbyStorefrontConfig: {
      storeName: 'Living Genes',
      storeDescription: 'Demo store description',
      email: 'hello@moleculartestinglabs.com',
      company: 'Molecular Testing Labs',
      location: 'Vancouver, WA',
      address: '1 Centre St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
      ],
      // googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Infectious Disease',
              type: 'collection',
              handle: 'infectious-disease-dried-blood',
              textColor: 'black',
              textBgColor: 'white',
            },
          ],
        },
        {
          name: 'Apparel',
          type: 'collection',
          handle: 'apparel',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Garden',
          type: 'collection',
          handle: 'garden',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Test',
          type: 'collection',
          handle: 'test-collection',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'One product',
          type: 'product',
          handle: 'red-sports-tee',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Anchor Bracelet Mens',
          type: 'product',
          handle: 'leather-anchor',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Yellow Sofa',
          type: 'product',
          handle: 'yellow-sofa',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: '7 Shakra Bracelet',
          type: 'product',
          handle: 'chain-bracelet',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'White Cotton Shirt',
          type: 'product',
          handle: 'white-cotton-shirt',
          textColor: 'white',
          textBgColor: 'primary',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Infectious Disease",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Dried Blood',
                type: 'collection',
                handle: 'infectious-disease-dried-blood',
              },
              {
                name: 'Jewelery',
                type: 'collection',
                handle: 'jewelery',
              },
              {
                name: 'One product',
                type: 'product',
                handle: 'red-sports-tee',
              },
            ],
          },
          {
            name: "Men's",
            type: 'header',
            children: [
              {
                name: 'Test',
                type: 'collection',
                handle: 'test-collection',
              },
              {
                name: 'Garden',
                type: 'collection',
                handle: 'garden',
              },
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'External links',
                type: 'header',
                children: [
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                ],
              },
            ],
          },
          { name: 'Blog', type: 'blog', handle: 'news' },
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'Molecular Testing Labs',
          link: 'https://moleculartestinglabs.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
  pathPrefix: "/living-genes-example",
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopify: {
          shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
          accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        },
        gatsbyStorefrontApi: {
          apiUrl: process.env.GATSBYSTOREFRONT_API_URL,
          accessToken: process.env.GATSBYSTOREFRONT_ACCESS_TOKEN,
        },
        useGatsbyStorefrontApi: false, // Set to 'true' in case you are using Gatsby Storefront API to enable connections with external data sources
        basePath: '/',
        productImagesCarouselProps: {
          // See: https://github.com/express-labs/pure-react-carousel#carouselprovider-
          naturalSlideWidth: 500,
          naturalSlideHeight: 500,
        },
        product: {
          maxDescriptionSectionsNumber: 10,
        },
        manifest: { // web app manifest options to be passed to 'gatsby-plugin-manifest' installed inside theme
          name: 'Living Genes',
          short_name: 'Living Genes',
          start_url: '/',
          background_color: '#004643',
          theme_color: '#f9bc60',
          display: 'standalone',
          icon: 'src/images/gatsby-icon.png',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
}
