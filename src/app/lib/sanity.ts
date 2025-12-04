import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2025-12-04",
  dataset: "production",
  projectId: "hq1c48py",
  useCdn: false,
});
