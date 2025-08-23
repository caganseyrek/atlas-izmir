import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "",
    name: "",
    short_name: "",
    description: "",
    scope: "",
    start_url: "/",
    display: "standalone",
    background_color: "",
    theme_color: "",
    icons: [],
  };
}
