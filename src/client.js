import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "ywx3dlmi", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those questions during 'sanity init'
  useCdn: true,
});

export default sanityClient;
