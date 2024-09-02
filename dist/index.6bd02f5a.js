const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello from Banaglore"),
        React.createElement("h1", {}, "Hello from India")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Hello from Bhubaneswar"),
        React.createElement("h1", {}, "Hello from Odisha")
    ])
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello From React"
// );
console.log(parent); //return an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //render method is converting the above object to h1 tag and putting it over heading

//# sourceMappingURL=index.6bd02f5a.js.map