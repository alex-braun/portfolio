import "@testing-library/jest-dom/vitest";

if (!("IntersectionObserver" in window)) {
  class IntersectionObserverStub implements IntersectionObserver {
    readonly root = null;
    readonly rootMargin = "";
    readonly thresholds: number[] = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  // @ts-expect-error - jsdom has no IntersectionObserver; framer-motion's
  // scroll-triggered animations (Resume timeline, Home) need one to exist.
  window.IntersectionObserver = IntersectionObserverStub;
}

if (!window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
