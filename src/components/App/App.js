import './App.css';
import JsxExamples from '../components/jsx_proj/index';



function App() {
  return (React.createElement(
    'div', { className: 'father' }),
    React.createElement
    ('span', {}, 'First Child'),
    React.createElement
    ('span', {}, 'Second Child'),
    );
};

  
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
    

const element = <h1>Hello, World</h1>;
ReactDOM.render(element, document.getElementById('root2'));
    



  export default App;
  