import React from 'react';
import styles from './index.module.scss'
import HomeImg from '../../assets/images/img_1.jpg'
import ProductPanel from "../../components/product-panel/index";
import img2 from '../../assets/images/img_2.jpg'

const HomeContent = () => {
  return (
    <div className={styles.homeContent}>
      <img src={HomeImg} alt="" width="100%" height="100%"/>

      <ProductPanel title="为她精选" image={img2} info="AIR MAX VERNA" />
    </div>
  )
}

export default HomeContent
