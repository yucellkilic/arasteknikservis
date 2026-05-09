import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { Layout } from "./components/Layout";

// Code Splitting: Lazy load all pages to minimize initial JS bundle
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas").then(m => ({ default: m.ServiceAreas })));
const Blog = lazy(() => import("./pages/Blog").then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./pages/BlogPost").then(m => ({ default: m.BlogPost })));
const FAQ = lazy(() => import("./pages/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

// Minimal loading fallback - no extra JS needed
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-[#0066FF]/20 border-t-[#0066FF] rounded-full animate-spin" />
    </div>
  );
}

// Wrap lazy components with Suspense
function withSuspense(Component: React.LazyExoticComponent<React.ComponentType>) {
  return function SuspenseWrapper() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    );
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: withSuspense(Home) },
      { path: "hakkimizda", Component: withSuspense(About) },
      { path: "hizmetler", Component: withSuspense(Services) },
      { path: "hizmet-bolgeleri", Component: withSuspense(ServiceAreas) },
      { path: "blog", Component: withSuspense(Blog) },
      { path: "blog/:slug", Component: withSuspense(BlogPost) },
      { path: "sss", Component: withSuspense(FAQ) },
      { path: "iletisim", Component: withSuspense(Contact) },
      { path: "*", Component: withSuspense(NotFound) },
    ],
  },
]);