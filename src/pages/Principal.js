import React from 'react'
import Header from '../components/Header';
import GamePromo from '../components/GamePromo';
import Destacados from '../components/Descatados';
import Footer from '../components/Footer';
import OfertaDelDia from '../components/OfertaDelDia';
import OfertaDia from '../components/OfertaSemanales';
import Beneficios from '../components/Beneficios';
import NexusPlus from '../components/NexusPlus';
import BannerPromocional from '../components/BannerPromocional';
import Caracteristicas from '../components/Caracteristicas';
const Principal = () => {
return (
    <div>
        <Header/>
        <GamePromo/>
        <Destacados/>
        <OfertaDelDia/>
        <OfertaDia/>
        <Beneficios/>
        <NexusPlus/>
        <BannerPromocional/>
        <Caracteristicas/>
        <Footer/>
    </div>
)
}

export default Principal
