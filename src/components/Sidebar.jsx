import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Sidebar.css'
import closeBtn from '../imgs/close.png'

const Sidebar = () => {
    useEffect(() => {
        const closeBtn = document.getElementById('close-btn')
        closeBtn.addEventListener('click' , () => {
        const sidebar = document.getElementById('sidebar-menu')
        sidebar.classList.remove('sidebar-container-active')
      })
      } , [])
  return (
    <div id='sidebar-menu' className='sidebar-container'>
        <div className="parts-container">
            <div className="middle-part">
                <p className='menu-head'>Каталог</p>
                <ul>
                    <li><Link>Диваны</Link></li>
                    <li><Link>Кресла</Link></li>
                    <li><Link>Стулья</Link></li>
                    <li><Link>Кровати</Link></li>
                    <li><Link>Матрацы</Link></li>
                    <li><Link>Пуфы</Link></li>
                    <li><Link>Эксклюзивная мебель</Link></li>
                    <li><Link>2D-3D модели</Link></li>
                    <li><Link>Индивидуальная мебель</Link></li>
                    <li><Link>2D-3D модели</Link></li>
                    <li><Link>Шоу-рум</Link></li>
                    <li><Link>СТРАНИЦА ПАРТНЕРОВ ДИЗАЙНЕРОВ</Link></li>
                    <li><Link>Дилерам</Link></li>
                    <li><Link>Контакты</Link></li>
                    <li><Link>Каталог</Link></li>
                </ul>
            </div>
            <div className="middle-ground">
                <svg id='close-btn' viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 16M17 1L1 16" stroke="#343434"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Sidebar



 
 
 
 
 
 

