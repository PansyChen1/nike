import React from "react";
import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <ul>
            <li>电子礼品卡</li>
            <li>企业团购</li>
            <li>附近商店</li>
            <li>订阅电子邮件</li>
            <li>注册 NIKE 会员</li>
            <li>网站反馈</li>
          </ul>

          <ul>
            <li>获得帮助</li>
            <li className={styles.smallGray}>订单状态</li>
            <li className={styles.smallGray}>配送方式</li>
            <li className={styles.smallGray}>退换货</li>
            <li className={styles.smallGray}>付款选项</li>
            <li className={styles.smallGray}>联系我们</li>
          </ul>

          <ul>
            <li>关于 NIKE</li>
            <li className={styles.smallGray}>新闻</li>
            <li className={styles.smallGray}>投资者</li>
            <li className={styles.smallGray}>招贤纳士</li>
            <li className={styles.smallGray}>新品预览</li>
          </ul>
        </div>
        <div className={styles.footerTopRight}>
          <img src="/" alt=""/>
          <img src="/" alt=""/>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.footerBottom}>
        bottom
      </div>
    </footer>
  )
};

export default Footer
