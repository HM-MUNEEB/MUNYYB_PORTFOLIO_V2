import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./pages.module.css";
import { useRouter } from "next/router";
export default function Pages({ children }, props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const PagesRef = useRef();
  const landingTransition = () => {
    //mount
    var tl = gsap.timeline({ repeat: 0 });
    console.log("LANDING ANIMATION STARTED");
    tl.eventCallback("onComplete", () => {
      console.log("LANDING ANIMATION COMPLTED");
    });
    //Fading In transition
    tl.fromTo(
      PagesRef.current,
      {
        xPercent: 100,
      },
      {
        opacity: 1,
        xPercent: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  };
  const ExitTransition = () => {
    //mount
    var tl = gsap.timeline({ repeat: 0 });
    console.log("EXIT ANIMATION STARTED");
    tl.eventCallback("onComplete", () => {
      console.log("EXIT ANIMATION COMPLETED");
    });

    //Fading In transition
    tl.fromTo(
      PagesRef.current,
      {
        xPercent: 0,
      },
      {
        opacity: 1,
        xPercent: 100,
        autoAlpha: 1,
        duration: 5,
        ease: "back.easeOut",
      }
    );
  };
  useEffect(() => {
    router.events.on("routeChangeStart", landingTransition);
    // router.events.on("routeChangeComplete", aniEnd);
    // router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", ExitTransition);
      router.events.off("routeChangeComplete", ExitTransition);
      //   router.events.off("routeChangeError", ExitTransition);
    };
  }, [router]);
  return (
    <div className={styles.PagesContainer} ref={PagesRef}>
      {children}
    </div>
  );
}
