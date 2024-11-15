import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Lazy Loading/Home"));
const About = lazy(() => import("./Lazy Loading/About"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Home is Loading Please Wait......</div>}>
        <Home />
      </Suspense>
      <Suspense fallback={<div> About Page is Loading......</div>}>
        <About />
      </Suspense>
    </>
  );
}

export default App;
