import React from "react"
import Cat from '../images/кошка.jpg'
import Goat from '../images/коза.jpeg'
import Lion from '../images/animales-enojados-2.jpg'
import Crocodile from '../images/d0442a8a-18d5-5093-b9db-50acd5c212e7.jpg'
import Owl from '../images/i.webp'

function FoundAnimals() {
    return (  
        <div>
  <h2 className="text-center text-white bg-primary mt-2" style={{marginTop: 0}}>Карточки найденных животных</h2>
  <div className="d-flex flex-row flex-wrap justify-content-center">
    <div className="card m-3" style={{width: '18rem', borderRadius: 15, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <img src={Cat} className="card-img-top" alt="Рисунок кошки" style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, objectFit: 'cover', height: 200}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">Кошка</h5>
        <p className="card-text text-muted" style={{fontSize: '0.9rem'}}>Потерялась пушистая кошка. Очень ласковая, серая.</p>
        <ul className="list-unstyled flex-grow-1">
          <li><strong>id:</strong> 14</li>
          <li><strong>Номер чипа:</strong> ca-001-spb</li>
          <li><strong>Район:</strong> Василеостровский</li>
          <li><strong>Дата:</strong> 24-03-2020</li>
        </ul>
        <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Связаться</button>
      </div>
    </div>
    <div className="card m-3" style={{width: '18rem', borderRadius: 15, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <img src={Goat} className="card-img-top" alt="Рисунок козы" style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, objectFit: 'cover', height: 200}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">Коза</h5>
        <p className="card-text text-muted" style={{fontSize: '0.9rem'}}>Коза была утеряна рядом с Московским вокзалом. Белая, пуховая.</p>
        <ul className="list-unstyled flex-grow-1">
          <li><strong>id:</strong> 18</li>
          <li><strong>Номер чипа:</strong> go-011-spb</li>
          <li><strong>Район:</strong> Центральный</li>
          <li><strong>Дата:</strong> 14-03-2022</li>
        </ul>
        <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Связаться</button>
      </div>
    </div>
    <div className="card m-3" style={{width: '18rem', borderRadius: 15, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <img src={Lion} className="card-img-top" alt="Рисунок льва" style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, objectFit: 'cover', height: 200}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">Лев</h5>
        <p className="card-text text-muted" style={{fontSize: '0.9rem'}}>Львенок был найден под деревом, хозяин, отзовись.</p>
        <ul className="list-unstyled flex-grow-1">
          <li><strong>id:</strong> 17</li>
          <li><strong>Номер чипа:</strong> go-012-spb</li>
          <li><strong>Район:</strong> Приморский</li>
          <li><strong>Дата:</strong> 12-08-2022</li>
        </ul>
        <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Связаться</button>
      </div>
    </div>
    <div className="card m-3" style={{width: '18rem', borderRadius: 15, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <img src={Crocodile} className="card-img-top" alt="Рисунок крокодила" style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, objectFit: 'cover', height: 200}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">Крокодил</h5>
        <p className="card-text text-muted" style={{fontSize: '0.9rem'}}>Крокодил ищет хозяина, живет рядом с болотом.</p>
        <ul className="list-unstyled flex-grow-1">
          <li><strong>id:</strong> 15</li>
          <li><strong>Номер чипа:</strong> go-141-spb</li>
          <li><strong>Район:</strong> Приморский</li>
          <li><strong>Дата:</strong> 14-01-2023</li>
        </ul>
        <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Связаться</button>
      </div>
    </div>
    <div className="card m-3" style={{width: '18rem', borderRadius: 15, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <img src={Owl} className="card-img-top" alt="Рисунок совы" style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, objectFit: 'cover', height: 200}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">Сова</h5>
        <p className="card-text text-muted" style={{fontSize: '0.9rem'}}>Сова на дереве.</p>
        <ul className="list-unstyled flex-grow-1">
          <li><strong>id:</strong> 10</li>
          <li><strong>Номер чипа:</strong> go-211-spb</li>
          <li><strong>Район:</strong> Центральный</li>
          <li><strong>Дата:</strong> 11-12-2022</li>
        </ul>
        <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Связаться</button>
      </div>
    </div>
  </div>
  
</div>



    );
}



export default FoundAnimals;