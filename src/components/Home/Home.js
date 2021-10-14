import React from 'react';

import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import TabItem from '../TabItem/TabItem';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TabItem></TabItem>
            <Choose></Choose>
            <Footer></Footer>



        </div>
    );
};

export default Home;