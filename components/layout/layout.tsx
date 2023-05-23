import Footer from "./footer";
import { LazyMotion, m, AnimatePresence, domAnimation } from "framer-motion";
import { useRouter } from "next/router";
import NewNav from "./newNavbar";
export default function Layout({ children, fontCn }) {
  const router = useRouter();
  return (
    <>
      <LazyMotion features={domAnimation}>
        <div
          className={"w-full h-full min-h-screen overflow-x-hidden " + fontCn}
        >
          {/* <Navbar /> */}
          <NewNav/>

          <AnimatePresence>
          <div className="fixed top-0 left-0 w-screen h-screen bg-fixed bg-center bg-cover -z-50" style={{backgroundImage: "url(/assets/bg.png)"}}>
      {/* Your content goes here */}
    </div>
            <m.main
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full fade-effect-quick"
            >
              {children}
            </m.main>
          </AnimatePresence>
        </div>
        <Footer />
      </LazyMotion>
    </>
  );
}
