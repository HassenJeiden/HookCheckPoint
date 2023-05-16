import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import {useState} from 'react';


function App() {
  const [showComponent, setShowComponent] = useState({text:'New Movie',sho:false});
  const toggleComponent = () => {
  setShowComponent(prevObject => ({
    ...prevObject,
    sho:!showComponent.sho
  }));}
  const [mvp,setMvp]=useState([
    {title:'Iron Man 3',description:'action',posterURL:'http://4.bp.blogspot.com/-VKaiMbdZQng/UXuUwvENXCI/AAAAAAAART8/eBzh9vk5v-0/s400/Iron-Man-3-IMAX-poster1.jpeg', rating:9},
    {title:'BATTLESHIP',description:'drama',posterURL:'http://graphicdesignjunction.com/wp-content/uploads/2012/05/large/movie-poster-20.jpg', rating:7},
    {title:'Hotel TransyLvaniA',description:'histrie',posterURL:'/movie-poster-9.webp', rating:8},
    {title:'MADEA S',description:'comidie',posterURL:'movie-poster-29.webp', rating:8},
  ])
    const updateNewMovie = (e) => {
      e.preventDefault(); 
      const title = e.target.elements.titl.value;
      const ratin = e.target.elements.rate1.value;
      const posterURL = e.target.elements.posterUR.value;
      const description = e.target.elements.descriptio.value;
      setMvp(nm=>[...nm,{
        title: title,
        rating: ratin,
        posterURL: posterURL,
        description:description
      }]
      );
      e.target.reset();
    };
    const[titleF,setTitleF]=useState('')
    const ttfiltre = (event) => {
      setTitleF (event.target.value.toLowerCase());}
      const[starF,setStarF]=useState(1)
      const stfiltre = (rate) => {
        setStarF (rate);}
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <div>
        <button onClick={toggleComponent} name='hideButton'>{showComponent.sho  ? 'Hide' : 'New Movie'}</button>
        {showComponent.sho && <AddMovie listM={updateNewMovie}/>}
        </div>
        <Filter tf={ttfiltre} sf={stfiltre} starF={starF}></Filter>
        <MovieList mv={mvp.filter(el=> el.rating >=starF && el.title.toLowerCase().includes(titleF))}></MovieList>
        </div>
      </header>
    </div>
  );
}

export default App;
