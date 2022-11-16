const sidebars = {
    armOpenApiSidebar: [
      {
        type: "category",
        label: "ARM API",
        link: {
          type: "generated-index",
          title: "ARM API",
          description:
            "These are the SCIM APIs for SailPoint's on-premise service, Access Management. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: "/api",
        },
        // @ts-ignore
        items: require("./api/sidebar.js"),
      },
    ],
  };
  
  module.exports = sidebars;
  