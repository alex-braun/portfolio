/**
 * Installs a `window.matchMedia` stub whose `matches` result for a given
 * query is controlled by the caller - used to simulate narrow vs. wide
 * viewports for components built on `useMediaQuery`.
 */
export function mockMatchMedia(matchingQueries: string[]) {
  window.matchMedia = (query: string): MediaQueryList => ({
    matches: matchingQueries.includes(query),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
