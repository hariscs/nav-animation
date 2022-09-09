import { useRef } from 'react';
import './App.css';

export default function App() {
  const markerRef = useRef();
  const indicator = (e) => {
    markerRef.current.style.left = e.target.offsetLeft + 'px';
    markerRef.current.style.width = e.target.offsetWidth + 'px';

    console.log(e.target.offsetLeft, e.target.offsetWidth);
  };

  const data = ['Home', 'About', 'Reviews', 'Contact'];

  return (
    <nav>
      <div ref={markerRef} id='marker' />
      {data.map((element) => (
        <a href='#' onClick={(e) => indicator(e)}>
          {element}
        </a>
      ))}
    </nav>
  );
}
