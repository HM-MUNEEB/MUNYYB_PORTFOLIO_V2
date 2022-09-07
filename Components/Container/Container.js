import styles from "./Container.module.css";
import { useState, useEffect, useRef } from "react";
import { getCookies, setCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import InitialIntro from "../Initial-Intro/InitialIntro";
import Navigation from "../Navigation/Navigation";
import LogoContainer from "../Logo-Container/LogoContainer";
import Footer from "../footer/footer";
import BackgroundCanvas from "../Background/BackgroundCanvas";
import Pages from "../Pages-container/pages";

export default function Container({ children }) {
  const Router = useRouter();
  const [isInitialIntro, setIsInitialIntro] = useState("");
  const [isNavigation, setIsNavigation] = useState(false);
  const [check, setCheck] = useState(false);
  const [pageRoute, setPageRoute] = useState("");
  const LogoContainerRef = useRef();
  const NavigationRef = useRef();
  const FooterRef = useRef();
  useEffect(() => {
    if (hasCookie("MunyybInitialTouchDown")) {
      setIsInitialIntro(true);
    } else {
      setIsInitialIntro(false);
    }
  }, []);

  function afterAnim() {
    setIsNavigation(true);
  }
  if (isInitialIntro == false) {
    setInterval(() => {
      setIsInitialIntro(true);
      setCheck(true);
      setCookie("MunyybInitialTouchDown", "Done", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }, 22000);
  }

  useEffect(() => {
    var h = window.innerHeight / 2 + 40;
    var w = window.innerWidth / 2 - 75;

    //Timeline Setup
    var tl = gsap.timeline({ repeat: 0 });

    tl.eventCallback("onComplete", () => {
      setIsNavigation(true);
      console.log("COMPLETED!");
    });

    //Fading In transition
    tl.fromTo(
      LogoContainerRef.current,
      {
        opacity: 0,
        y: h - 100,
      },
      {
        opacity: 1,
        y: h - 75,
        autoAlpha: 1,

        duration: 0.5,
      }
    );
    //Placing logo to original position
    tl.fromTo(
      LogoContainerRef.current,
      {
        opacity: 1,
        x: w - w * (3 / 100),
        scale: 2,
      },
      {
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.5,
        ease: "back.easeOut",
      },
      2
    );
    //Navigation Status
    tl.fromTo(
      NavigationRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "back.easeOut",
      },
      ">1"
    );
    tl.fromTo(
      FooterRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "back.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    if (Router.asPath === "/") {
      setPageRoute(null);
    }
  }, [Router.asPath]);
  return (
    <>
      <div className={styles.Munyyb}>
        <div className={styles.MunyybContainer}>
          {isInitialIntro === false ? (
            <div className={styles.typicalTextAnimation}>
              <InitialIntro />
            </div>
          ) : (
            <>
              <div className={styles.Stack}>
                <div
                  className={styles.logoContainerStack}
                  ref={LogoContainerRef}
                >
                  <LogoContainer />
                </div>
                {isNavigation ? (
                  <div ref={FooterRef} className={styles.Footer}>
                    <Footer />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Pages pageRoute={pageRoute}>{children}</Pages>
              <div ref={NavigationRef} className={styles.NavigationContainer}>
                <Navigation setPageRoute={setPageRoute} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.MatrixRainFallBackground}>
        {isNavigation ? <BackgroundCanvas /> : ""}
      </div>
    </>
  );
}
