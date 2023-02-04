import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../scss/main.scss';
import Tool from './Tool';
const root = document.getElementById('root');

fetch('https://api.quotable.io/quotes?limit=4')
    .then((response) => response.json())
    .then(({results}) => {
      results.forEach((data, index)=>{
        let props = {text: data.content};
        if (index % 2) {
          props = {...props, dataCopy: data.author};
        }

        new Tool(props, root);
      });
    });


