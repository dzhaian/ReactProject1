import React from 'react';
import '../styles/Component8.css'
import img from '../img/email.png';
import img1 from '../img/car.png';
import SearchBar from "./SearchBar";
import RoundedButton from "./RoundedButton";

function Component8() {
    return (
      <div className="container">
          <div className="component--8">
              <div className="component-8">
                  <div className="component8">

                      <div className="comp8">
                          <p><strong>Получайте бонусы и подарки</strong></p>
                          <p>Каждый месяц разыгрываем
                              10 000 рублей для наших клиентов</p>
                          <SearchBar/>
                      </div>
                      <div className="compon8">
                          <img src={img} className="image1" />
                      </div>

                  </div>

                  <div className="component9">

                      <div className="comp9">
                          <p><strong>Заходите к нам</strong></p>
                          <p>Более 300 магазинов
                              по всей России</p>
                          <RoundedButton text="Карта магазинов" onClick={() => console.log('Кнопка нажата!')} />
                      </div>
                      <div className="compon9">
                          <img src={img1} className="image1" />
                      </div>

                  </div>
              </div>
          </div>
      </div>


    );
}

export default Component8;
