const selectors = {
  widget: ".js-widget",
};

const classNames = {
  showResult: "show-result",
};

export const toggleResultPage = () => {
  const widgetEl = document.querySelector(selectors.widget);

  widgetEl.classList.toggle(classNames.showResult);
};
