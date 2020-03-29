import React from 'react';
import styles from './index.module.scss'
import HomeImg from '../../assets/images/img_1.jpg'
import ProductPanel from "../../components/product-panel";
import {RECOMMEND_DATA, POPULAR_DATA} from "./data";

const HomeContent = () => {
  return (
    <div className={styles.homeContent}>
      <img src={HomeImg} alt="" width="100%" height="100%"/>
      <p className={styles.spirit}>
        说到NIKE，就想到运动。但我们眼里，并不只有运动而已。
        <br/>
        身为运动员，我们始终跟随着世界的变化一起改变。
        <br/>
        此刻，我们希望尽一份力，来帮助你和你的亲友伙伴们保持身心强健。
        <br/>
        因为这一仗，全人类都是队友。
      </p>
      <div className={styles.energy}>
        <a href="https://www.nike.com/cn/you-cant-stop-us">即刻汲取能量</a>
      </div>

      <ProductPanel moduleType="popular" data={POPULAR_DATA} title="流行前沿"/>

      <ProductPanel moduleType="recommend" data={RECOMMEND_DATA} title="为你推荐"/>

    </div>
  )
}

export default HomeContent
