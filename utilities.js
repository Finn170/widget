const selectors = {
  widget: ".js-widget",
};

const classNames = {
  showResult: "show-result",
};

/**
 * Show or hide the result page
 */
export const toggleResultPage = () => {
  const widgetEl = document.querySelector(selectors.widget);

  widgetEl.classList.toggle(classNames.showResult);
};
