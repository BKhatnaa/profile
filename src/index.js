import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ************** nesting Elements *******************
// const element = React.createElement("ol", null, 
//     React.createElement("li", null, "Way2"),
//     React.createElement("li", null, "video injection"),
//     React.createElement("li", null, "profile website")
// )
// ReactDOM.render(element, document.getElementById("root"))

// ************** nesting Elements with array *******************
// const people = [
//     {name:"Way2"},
//     {name:"video injection"},
//     {name:"profile website"},
// ]
// const element = React.createElement("ol", null,
//     people.map((person) => (React.createElement("li", {key: person.name}, person.name)))
// )
// ReactDOM.render(element, document.getElementById("root"))

// ************** create element with JSX *******************
// const people = [
//         {name:"Way2"},
//         {name:"video injection"},
//         {name:"profile website"}]
// const element = <ol>
//     {people.map((person) => <li key={person.name}> {person.name} </li>)}
// </ol>
// ReactDOM.render(element, document.getElementById("root"))

// ************** const greeting contains html *******************
// const greeting = (<div className="greeting"> <h2>Hello world!</h2></div>)
// const element = React.createElement("div", {className:"greeting"}, React.createElement("h2", null, "Hello world!"))
// const element = greeting
// ReactDOM.render(element, document.getElementById("root"))

// ************** create a component *******************
// class ProjectList extends React.Component {
//     render(){
//         const projects = [
//                     {name:"Way2"},
//                     {name:"video injection"},
//                     {name:"profile website"}]
//         return <ol>
//             {projects.map((project) => <li key={project.name}> {project.name} </li>)}
//         </ol>
//     }
// }
// ReactDOM.render(<ProjectList />, document.getElementById("root"))

// ************** create a component *******************

// ****************************************************************
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
