import React from "react";
import styles from './index.module.scss'

export interface ProductPanelApi {
  /* 每个模块的标题 */
  title?: string,
  /* 模块类型 */
  moduleType?: string,
  /* 需要渲染的数据 */
  data: any
}

const ProductPanel = (props: ProductPanelApi) => {
  const {title, moduleType, data} = props;
  const panelTpl = <div className={styles.panel}>
    {data.map((item, index) => {
      return (
        <div className={styles.panelItem} key={index}>
          <img src={item.img} alt="" className={styles.img}/>
          <div className={styles.infoContent}>
            {moduleType === 'recommend' ?
              <a href="/" className={styles.aBgColor}>{item.shoeType}</a>
              :
              (<div>
                <p>{item.info}</p>
                <a href="/">{item.shoeType}</a>
              </div>)
            }
          </div>
        </div>
      )
    })}
  </div>;

  return (
    <div className={styles.productPanel}>
      <h2 className={styles.title}>{title}</h2>
      {panelTpl}
    </div>
  )
};

export default ProductPanel
