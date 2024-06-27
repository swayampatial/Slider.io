import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlider = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlider = () => {
  setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };


  useEffect(() => {
    let sliderId =  setInterval(() => {
      nextSlider()
    }, 2000);
    return() =>{
      clearInterval(sliderId)
    }
  }, [currentPerson]);


  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { image, name, id, title, quote } = person;
        return (
          <article
            className="slide "
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlider}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlider}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
