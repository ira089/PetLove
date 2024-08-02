import React from 'react';
import { format, parseISO } from 'date-fns';
import styles from './newsItem.module.css';
// import { Link} from 'react-router-dom';

const NewsItem = ({ item }) => {
  // console.log(item)
  const { title, imgUrl, _id, text, date, url } = item;
  const parsedDate = parseISO(date);
const formattedDate = format(parsedDate, 'dd/MM/yyyy');
  return (
    <li className={styles.itemWrap} key={_id}>
      <img className={styles.image} src={imgUrl} alt="news" />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <div className={styles.wrapDateLink}>
        <p className={styles.date}>{formattedDate}</p>
        <a className={styles.link} href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
