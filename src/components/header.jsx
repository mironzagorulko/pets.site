import React from "react"
import logo from '../images/logo.jpg'
function Header() {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-">
  <div className="container-fluid">
    <a className="navbar-brand" href="site.html"><img src={logo} className="w-25 rounded-3" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="site.html">Главная</a>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
            Вход
          </button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="owner.html">Личный кабинет</a>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#registrationModal">
            Регистрация
          </button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="add_animal.html">Добавить объявление</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="search.html">Поиск по объявлениям</a>
        </li>
      </ul>
    </div>
    <form className="d-flex">
      <input className="form-control me-2" type="search" list="pets" placeholder="Поиск" aria-label="Search" />
      <button className="btn btn-primary" onclick>Поиск</button>
      <datalist id="pets">
        <option value="Кошка">
        </option><option value="Собака">
        </option><option value="Корова">
        </option><option value="Крокодил">
        </option><option value="Сова">
        </option></datalist>
    </form>
  </div>
</nav>

    );
}



export default Header;