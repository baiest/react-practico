import React, {useState, useEffect} from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const initialState = useInitialState(API);
    return (
    <div className='App'>
        <Header />
        <Search />
        {
            initialState.mylist?.length > 0 &&  
            <Categories title="My List">
                <Carousel>
                {   initialState.mylist?
                    initialState.mylist.map(item => (
                    <CarouselItem key={item.id} {...item}/>
                ))
                :
                <h4>Loading...</h4>
            }
                </Carousel>
            </Categories>
        }
        <Categories title="Tendencias">
            <Carousel>
            {   initialState.trends?
                initialState.trends.map(item => (
                    <CarouselItem key={item.id} {...item}/>
                ))
                :
                <h4>Loading...</h4>
            }
            </Carousel>
        </Categories>
        {
            initialState.originals?.length > 0 &&  
            <Categories title="Originales de platzi">
                <Carousel>
                {   initialState.originals?
                    initialState.originals.map(item => (
                    <CarouselItem key={item.id} {...item}/>
                ))
                :
                <h4>Loading...</h4>
            }
                </Carousel>
            </Categories>
        }
        <Footer/>
    </div>
    );
}

export default App;