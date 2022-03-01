import './App.css';
import img1 from './images/chair.jpg'
import img2 from './images/chair2.jpg'
import img3 from './images/chair3.jpg'
import img4 from './images/chair4.jpg'
import Subscribe from './components/Subscribe';
import ColorGenerator from './components/ColorGenerator';
import Population from './components/Population';
import React from 'react';

const imgs = [
  {id: 1, src: img1},
  {id: 2, src: img2},
  {id: 3, src: img3},
  {id: 4, src: img4}
];
const n = 5;

const populationData = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 }
]

class Images extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return this.props.images.map(img => 
      <img key={img.id} src={img.src} style={{width: '25%'}} alt="" />)
    }
}

function App() {
  
  return (
    <div className="App">
      <Images images = {imgs} />
      <Subscribe title='Subscribe' />
      <ColorGenerator n='30' />
      <Population countries={populationData} />
    </div>
  );
}

export default App;
