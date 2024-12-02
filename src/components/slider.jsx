import React from "react"
import Dog from '../images/собака.jpg'
import Mouse from '../images/мышь.jpg'
import Gorilla from '../images/gorilla.webp'

function Slider() {
    return (  
        <main style={{paddingBottom: 0}}>
  <h2 className="text-center text-white bg-primary mb-0 p-2 rounded" style={{margin: 0}}>Найденные животные</h2>
  <div id="carouselExampleIndicators" className="carousel slide m-auto bg-light w-75 p-3 rounded shadow-lg" data-bs-ride="carousel" style={{minHeight: 400, marginBottom: 0}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Dog} className="d-block" alt="Собака" style={{width: '100%', maxHeight: 400, objectFit: 'cover'}} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="text-light">Найдена собака</h5>
          <p className="text-light">Собака рыжая, была утеряна в Красногвардейчком районе.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Mouse} className="d-block" alt="Мышь" style={{width: '100%', maxHeight: 400, objectFit: 'cover'}} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="text-light">Найдена мышь</h5>
          <p className="text-light">Мышь серая, была утеряна в Центральном районе.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Gorilla} className="d-block" alt="Горилла" style={{width: '100%', maxHeight: 400, objectFit: 'cover'}} />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="text-light">Найдена горилла</h5>
          <p className="text-light">Горилла, была утеряна в Красногвардейчком районе.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{marginBottom: 0}}>
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{marginBottom: 0}}>
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
  
</main>


    );
}



export default Slider;