import React from "react";
import styles from './index.module.scss'

const HomeHeadNav = () => {
  return (
    <div className={styles.headNav}>
      <div className={styles.logo}>
        log
      </div>

      <div className={styles.nav}>
        <button>低至五折</button>
        <button>男子</button>
        <button>女子</button>
        <button>儿童</button>
        <button>专属定制</button>
        <button>流行潮品</button>
      </div>

      <div className={styles.search}>

      </div>
    </div>
  )
}

export default HomeHeadNav
