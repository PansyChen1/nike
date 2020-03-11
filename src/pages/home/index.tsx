import React from "react";
import styles from './index.module.scss';
import HomeHeadMessage from '../../modules/home-head-message/index'
import HomeHeadNav from "../../modules/home-head-nav/index";
import HomeSlider from "../../modules/home-slider/index";
import HomeContent from "../../modules/home-content/index";
import Footer from "../../modules/footer/index";

const Home = () => {

  return (
    <div className={styles.home}>
      <div className={styles.head}>
        <HomeHeadMessage />
        <HomeHeadNav />
        <HomeSlider />
        <HomeContent />

        <Footer/>
      </div>

    </div>
  )
}

export default Home
