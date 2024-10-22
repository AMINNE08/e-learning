import  { useState } from 'react';
import '../Style/Navbar.css'; 

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navigation">
      <ul>
        {['Home', 'Courses', 'Pages','Blog','Contact'].map((item, index) => (
          <li 
            key={index} 
            className={`list ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <a href="#">
              <span className="icon">
                <ion-icon name={`${item.toLowerCase()}-outline`}></ion-icon>
              </span>
              <span className="text">{item}</span>
              <span className="circle"></span>
            </a>
          </li>
        ))}
        <div className="indicator" style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}></div>
      </ul>
    </div>
  );
};

export default Navbar;
