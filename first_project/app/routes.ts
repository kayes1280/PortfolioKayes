import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("workprofile", "routes/workprofile.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
