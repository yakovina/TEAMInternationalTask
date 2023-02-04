import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../scss/main.scss';
import CopyTextTool from './CopyTextTool';
import {cleanContainer, createError, createLoader} from './utils';
const root = document.getElementById('root');

createLoader(root);
fetch('https://api.quotable.io/quotes?limit=4')
    .then((response) => response.json())
    .then(({results}) => {
      cleanContainer(root);
      results.forEach(({content, author}, index)=>{
        let props = {text: content};
        if (index % 2) {
          props = {...props, dataCopy: author};
        }

        new CopyTextTool(props, root);
      });
    }).catch((err)=>{
      createError(root, err);
    });


