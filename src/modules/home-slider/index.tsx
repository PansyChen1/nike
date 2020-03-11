import React from "react";
import styles from './index.module.scss'

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
      <ul className={styles.slide}>
        <li>即日至3月15日，折扣产品低至5折，其中指定商品，NIKE会员可享折上满减100元。<a href="/">前往选购</a></li>
        <li>即日起至3月22日，凡购买指定女子运动内衣1件，即赠“NIKE运动内衣洗衣袋”1个，先到先得。<a href="/">立即购买</a> <a href="/">活动规则</a></li>
      </ul>
    </div>
  )
}

export default HomeSlider
