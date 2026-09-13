import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export const ensureMotionPlugins = () => {
  if (typeof window === "undefined" || pluginsRegistered) return;

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const createMotionContext = (
  scope: Element | string,
  setup: () => void,
) => {
  ensureMotionPlugins();

  if (typeof window === "undefined") {
    return () => {};
  }

  const context = gsap.context(setup, scope);

  return () => {
    context.revert();
  };
};

export { gsap, ScrollTrigger };
