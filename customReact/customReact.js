const container = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    target: "_blank",
    href: "https://www.google.com/",
  },
  children: "click me to visit google page",
};
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute('href', reactElement.props.href)
  //   domElement.setAttribute('href' ,reactElement.props.target)
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
    container.appendChild(domElement);
  }
}

customRender(reactElement, container);
