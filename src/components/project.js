import React from 'react';
import '../styles/project.css';
import ADAH from '../img/ADAH.png';
import Weather from '../img/Weather-app.png';
import NodeSQLZ from '../img/node-sequelize.png';

export default function Project() {
    return (
        <section className="container project">
            <h2 className="mx-auto project-header">Projects</h2>
            <div className="project-box">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://mjlindskog.github.io/ADAH_Brewery_Search/" target="_blank" rel="noreferrer"><img src={ ADAH } className="d-block w-100" alt="A Drink Around Here seach page"></img></a>
                            <div className="carousel-caption d-block">
                                <h5 className="carouselp py-1 d-none d-md-block project-description text-decoration-none">A Drink Around Here - search for breweries by city, keyword or name</h5>
                                <span className="carousela"><a className="repo-link py-5 px-3 text-decoration-none" href="https://github.com/mjlindskog/ADAH_Brewery_Search" target="_blank" rel="noreferrer">Repository</a></span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://mjlindskog.github.io/weather_forecaster/" target="_blank" rel="noreferrer"><img src={ Weather } className="d-block w-100" alt="weather app search"></img></a>
                            <div className="carousel-caption d-block">
                                <h5 className="carouselp py-1 d-none d-md-block project-description text-decoration-none">Weather Dashboard - serach by city to get current and future weather</h5>
                                <span className="carousela"><a className="repo-link py-5 px-3 text-decoration-none" href="https://github.com/mjlindskog/weather_forecaster" target="_blank" rel="noreferrer">Repository</a></span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://drive.google.com/file/d/1kaFApNCiDofmTd8P1qBojlPTC-LV5abE/view?usp=sharing" target="_blank" rel="noreferrer"><img src={ NodeSQLZ } className="d-block w-100" alt="E-commerce back end"></img></a>
                            <div className="carousel-caption d-block">
                                <h5 className="carouselp py-1 d-none d-md-block project-description text-decoration-none">E-commerce back end that demonstrates CRUD operations for products, tags, and catagories</h5>
                                <span className="carousela"><a className="repo-link py-5 px-3 text-decoration-none" href="https://github.com/mjlindskog/ORM-_e-commerce" target="_blank" rel="noreferrer">Repository</a></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </section>
    );
};