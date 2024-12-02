import Video from '../video/WIN_20241127_18_06_37_Pro.mp4';
import Owl from '../images/i.webp'
import Cat from '../images/кошка.jpg'
function Personalinformation() {

    return ( 
      <div>
  <div className="container">
    {/* Заголовок личного кабинета */}
    <h1>Добро пожаловать в Личный кабинет!</h1>
    {/* Карточка с данными пользователя */}
    <div className="card">
      {/* Видео вместо фото */}
      <div className="user-photo">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <h3>Информация о пользователе</h3>
      <p><strong>Имя:</strong> Мирон Загорулько</p>
      <p><strong>Email:</strong> mironzagorulko9@gmail.com</p>
      <p><strong>Дата регистрации:</strong> 2023-10-15</p>
      <p><strong>Количество дней с регистрации:</strong> 45</p>
      <button className="logout-btn" onclick="logout()">Выйти</button>
    </div>
    <h1>Найденные животные</h1>
    <div className="d-flex flex-row flex-wrap justify-content-center">
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
          <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Редактировать</button>
          <br />
          <button className="btn btn-primary w-100 mt-auto" style={{backgroundColor: 'red', borderRadius: 10, borderColor: 'red'}}>Удалить</button>
        </div>
      </div>
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
          <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Редактировать</button>
          <br />
          <button className="btn btn-primary w-100 mt-auto" style={{backgroundColor: 'red', borderRadius: 10, borderColor: 'red'}}>Удалить</button>
        </div>
      </div>
    </div>
  </div>
  {/* Ошибка авторизации - скрыта по умолчанию */}
  <div className="error-message" id="error-message">
    Ошибка: доступ запрещен. Пожалуйста, войдите в свой аккаунт.
  </div>
</div>


     );
}

export default Personalinformation;