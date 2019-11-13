const axios = require("axios");

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  const createMagnoliaNode = data => {
    createNode({
      pageContent: data,
      id: "magnolia",
      internal: {
        type: "MagnoliaContent",
        contentDigest: createContentDigest(data)
      }
    });
  };
  try {
    const { data } = await axios.get(
      "http://localhost:8080/magnoliaAuthor/.rest/website",
      {
        transformResponse: [v => v]
      }
    );
    createMagnoliaNode(data);
  } catch (error) {
    console.error(error.message);
  }
};
