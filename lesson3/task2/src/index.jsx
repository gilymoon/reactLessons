import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import Search from './Search.jsx'

const rootElement = document.querySelector('#root');

// const SearchFiled = (props) => {
//   const element = (
//     <div className="search">
//       <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
//       <div className="search__field">
//         <input type="text" className="search__input"/>
//         <button className="search__button">Search</button>
//       </div>
//     </div>
//   )
//     return element;
// }

// class SearchField extends Component{
//   render() {
    
//       return (
//             <div className="search">
//               <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
//               <div className="search__field">
//                 <input type="text" className="search__input"/>
//                 <button className="search__button">Search</button>
//               </div>
//             </div>
//           )
            
       
      
//       }
// }

ReactDOM.render(<Search name="Bob"/>, rootElement);