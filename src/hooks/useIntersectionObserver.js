import { useEffect } from "react";

const useIntersectionObserver = (views = []) => {
  useEffect(() => {
    if (views.some((_) => !_)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = document.querySelector(`#nav-${entry.target.id}`);
          if (entry.isIntersecting) {
            if (!element.classList.contains("selected")) {
              element.classList.add("selected");
            }
          } else if (element.classList.contains("selected")) {
            element.classList.remove("selected");
          }
        });
      },
      { threshold: 0.5 }
    );
    views.forEach((view) => observer.observe(view));
  }, [views]);
};

export default useIntersectionObserver;
