import React from "react";
import styles from './index.module.scss'

const HomeHeadMessage = () => {
  return (
    <div className={styles.headMessage}>
      <div className={styles.messageLeft}>
        <span>立即加入</span>
        <span>log</span>
        <span>log</span>
      </div>

      <div className={styles.messageRight}>
        <span>加入 / 登录 Nike 会员账户</span>
        <span>帮助</span>
        <span>log</span>
        <span>log</span>
        <span>中国大陆</span>
      </div>
    </div>
  )
}

export default HomeHeadMessage
