import React from 'react';
import '../styles/Component4.css';
import '../components/Card'
import img3 from "../img/img3.png";
import Card from "./Card";

const App = () => {
    return (
       <div className="container">
           <div className="component4">
               {/*<p>Специальные предложения</p>*/}
               <Card
                   image="img3"
                   description="Парикмахерское кресло Норм гидравлическое"
                   title="9 900 Р"
                   buttonText="Купить"
               />
               <Card
                   image="img3"
                   description="Парикмахерское кресло Норм гидравлическое"
                   title="9 900 Р"
                   buttonText="Купить"
               />
               <Card
                   image="img3"
                   description="Парикмахерское кресло Норм гидравлическое"
                   title="9 900 Р"
                   buttonText="Купить"
               />
               <Card
                   image="img3"
                   description="Парикмахерское кресло Норм гидравлическое"
                   title="9 900 Р"
                   buttonText="Купить"
               />
           </div>
       </div>
    );
};

export default App;
