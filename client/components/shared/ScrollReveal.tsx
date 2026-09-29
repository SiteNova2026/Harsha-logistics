"use client";

import { useEffect } from "react";

const revealSelector = ".reveal-on-scroll:not(.is-visible)";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("has-scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        element.classList.add("is-visible");
      });
      return () => root.classList.remove("has-scroll-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    const observeReveals = (parent: ParentNode) => {
      parent.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        observer.observe(element);
      });
    };

    observeReveals(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(revealSelector)) observer.observe(node);
          observeReveals(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.classList.remove("has-scroll-reveal");
    };
  }, []);

  return null;
}
