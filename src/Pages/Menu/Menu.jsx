import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Menu.scss"
export const Menu = () => {
  const location=useLocation()
  const linkActiveClassName = (navLink) => {
    const currentParentPath = location.pathname.split('/')[2]
    const isParentLinkActive = currentParentPath === navLink

    if (isParentLinkActive) return `active_menu__link`
    return "menu_link"
  }

  return (
    <div className='menu_wrapper'>
        <div className='menu_flex'>
        <p className='logo'>SunMade</p>
            <NavLink to="/HomePage/OrdersRoute/NewOrders" className={linkActiveClassName('OrdersRoute')}><p>Заказы</p></NavLink>
            <NavLink to="/HomePage/GoodsRoute/GoodsAll" className={linkActiveClassName('GoodsRoute')}><p>Товары</p></NavLink>
            <NavLink to="/HomePage/StatisticsRoute" className={linkActiveClassName('StatisticsRoute')}><p>Статистика</p></NavLink>
            <NavLink to="/HomePage/StaffRoute/StaffCourier" className={linkActiveClassName('StaffRoute')}><p>Сотрудники</p></NavLink>
            <NavLink to="/HomePage/AboutUsRoute/AboutUsContact" className={linkActiveClassName('AboutUsRoute')}><p>О нас</p></NavLink>
        </div>
    </div>
  )
}
