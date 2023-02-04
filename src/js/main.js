import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import Tool from './Tool';
const root = document.getElementById('root');

fetch('https://api.quotable.io/quotes?limit=3')
    .then((response) => response.json())
    .then(({results}) => {
      results.forEach((data)=>{
        // eslint-disable-next-line no-unused-vars
        const tool = new Tool({text: data.content}, root);
      });
    });


