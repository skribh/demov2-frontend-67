import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToHashElement = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    const contactSection = document.querySelector("#contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isInView = entries[0].isIntersecting;
        if (!isInView && hash === "#contact") {
          navigate("", { replace: true }); // Remove hash from URL
        }
      },
      { threshold: 0.5 } // Trigger when at least 10% of the section is visible
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, [hash, navigate]);

  return null;
};

export default ScrollToHashElement;

