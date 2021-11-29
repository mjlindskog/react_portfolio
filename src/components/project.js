import React from 'react';
import ADAH from '../img/ADAH.png';
import Scriber from '../img/Scriber.png';
import Book from '../img/book.png'
import Fitness from '../img/fitness.png'
import NodeSQLZ from '../img/node-sequelize.png';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import '../styles/project.css';

export default function Project() {
    return (
        <Container display="flex" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* project 1 */}
            <Card className="cards" sx={{ color: 'white', maxWidth: 345, m: 2, backgroundColor: 'transparent', boxShadow: '-8px 4px 8px black', '&:hover': {
                boxShadow: '-8px 4px 8px rgb(54, 109, 192)',
                opacity: [0.9, 0.8, 0.7],
            }, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Scriber}
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href="https://powerful-shore-38656.herokuapp.com/" underline="none" target="_blank" rel="noopener">Scriber</Link>
                    </Typography>
                    <Typography variant="body2">
                    Single page app using React, Node.js MongoDB, MUI, Redis, Express, Apollo GraphQL, and React Speech Kit
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" rel="noopener" href="https://github.com/mjlindskog/scriber">
                        Repository
                    </Button>
                </CardActions>
            </Card>
            {' '}
            {/* project 2 */}
            <Card className="card" sx={{ color: 'white', maxWidth: 345, m: 2, backgroundColor: 'transparent', boxShadow: '-8px 4px 8px black', '&:hover': {
                boxShadow: '-8px 4px 8px rgb(54, 109, 192)',
                opacity: [0.9, 0.8, 0.7],
            }, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ADAH}
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href="https://mjlindskog.github.io/ADAH_Brewery_Search/" underline="none" target="_blank" rel="noopener">A Drink Around Here</Link>
                    </Typography>
                    <Typography variant="body2">
                    Front end Javascript app using Foundation, Leaflet, jQuery. Utilizing three APIs - OpenBreweryDb, Ticketmaster, and OpenWeather.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" rel="noopener" href="https://github.com/mjlindskog/ADAH_Brewery_Search">
                    Repository
                    </Button>
                </CardActions>
            </Card>

            {/* project 3 */}
            <Card className="card" sx={{ color: 'white', maxWidth: 345, m: 2, backgroundColor: 'transparent', boxShadow: '-8px 4px 8px black', '&:hover': {
                boxShadow: '-8px 4px 8px rgb(54, 109, 192)',
                opacity: [0.9, 0.8, 0.7],
            }, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Book}
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href="https://quiet-wave-94756.herokuapp.com/" underline="none" target="_blank" rel="noopener">Book Search Engine</Link>
                    </Typography>
                    <Typography variant="body2">
                    Single page app using React, MongoDB, Node.js, Express, Apollo GraphQL, Bootstrap, Json web token and Google Books API.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" rel="noopener" href="https://github.com/mjlindskog/MERN.book_search_engine">
                    Repository
                    </Button>
                </CardActions>
            </Card>

            {/* project 4 */}
            {/* <Card className="card" sx={{ color: 'white', maxWidth: 345, m: 2, backgroundColor: 'transparent', boxShadow: '-8px 4px 8px black', '&:hover': {
                boxShadow: '-8px 4px 8px rgb(54, 109, 192)',
                opacity: [0.9, 0.8, 0.7],
            }, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href="https://powerful-shore-38656.herokuapp.com/" underline="none" target="_blank" rel="noopener">Redux Store</Link>
                    </Typography>
                    <Typography variant="body2">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" rel="noopener" href="https://github.com/mjlindskog/State-Redux_store">
                    Repository
                    </Button>
                </CardActions>
            </Card> */}

            {/* project 5 */}
            <Card className="card" sx={{ color: 'white', maxWidth: 345, m: 2, backgroundColor: 'transparent', boxShadow: '-8px 4px 8px black', '&:hover': {
                boxShadow: '-8px 4px 8px rgb(54, 109, 192)',
                opacity: [0.9, 0.8, 0.7],
            }, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Fitness}
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href="https://ancient-beyond-44323.herokuapp.com/" underline="none" target="_blank" rel="noopener">Fitness Tracker</Link>
                    </Typography>
                    <Typography variant="body2">
                    App utilizing Node.js, Express, MongoDB, Morgan, and Sematic UI.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" rel="noopener" href="https://github.com/mjlindskog/fitness_tracker">
                    Repository
                    </Button>
                </CardActions>
            </Card>

            {/* project 6 */}
            <Card className="card" sx={{ color: 'white', maxWidth: 345, m: 2, backgroundColor: 'transparent', boxShadow: '-8px 4px 8px black', '&:hover': {
                boxShadow: '-8px 4px 8px rgb(54, 109, 192)',
                opacity: [0.9, 0.8, 0.7],
            }, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={NodeSQLZ}
                        alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href="https://drive.google.com/file/d/1kaFApNCiDofmTd8P1qBojlPTC-LV5abE/view" underline="none" target="_blank" rel="noopener">ORM e-commerce back end</Link>
                    </Typography>
                    <Typography variant="body2">
                    Back end ORM app tested trhough Insomnia Core, Utilizing Node.js, Express and MySQL.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" href="https://github.com/mjlindskog/ORM-_e-commerce">
                    Repository
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};