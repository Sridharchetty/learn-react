const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("p", {}, "I'm a P tag"),
  ]),
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("p", {}, "I'm a P tag"),
  ]),
]);
console.log(parent);
root.render(parent);
