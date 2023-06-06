import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navigation-bar.module.css';

export default function NavigationBar() {
  const pages = [
    {
      title: 'Sorting Algorithm',
      link: '/sorting',
    },
    {
      title: 'Path Finding Algorithm',
      link: '/pathfinding',
    },
  ];
  
  return (
    <div>
      <div className='flex justify-between items-center p-8 bg-black text-white text-base'>
        <Link
          to="/"
          className='text-xl'
        >
          Harvin | Algorithm Visualizer
        </Link>
        <div className='flex items-center gap-12'>
          {pages.map((page, index) => {
            return <Link to={page.link} key={index}>{ page.title }</Link>
          })}
          <img
            src="assets/icon-filter.svg"
            alt="Filter button"
            width={32} 
          />
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  )
}
