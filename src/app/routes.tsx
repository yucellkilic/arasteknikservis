import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceAreas } from "./pages/ServiceAreas";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "hakkimizda", Component: About },
      { path: "hizmetler", Component: Services },
      { path: "hizmet-bolgeleri", Component: ServiceAreas },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "sss", Component: FAQ },
      { path: "iletisim", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);