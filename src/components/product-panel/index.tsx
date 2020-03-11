import React from "react";
import styles from './index.module.scss'
import data from "./panel-data";
import img from '../../assets/images/img_1.jpg'

export interface ProductPanelApi {
  title? : string,
  image: any,
  info: React.ReactNode,
  shoeType?: string
}
const ProductPanel = (props: ProductPanelApi) => {
  return (
    <div className={styles.productPanel}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.panel}>
        <div className={styles.panelItem}>
          <img src={props.image} alt="" className={styles.img}/>
          <div className={styles.infoContent}>
            <p>{props.info}</p>
            <a href="/">立即选购</a>
          </div>
        </div>

        <div className={styles.panelItem}>
          <img src={props.image} alt="" className={styles.img}/>
          <div className={styles.infoContent}>
            <p>{props.info}</p>
            <a href="/">立即选购</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPanel
