import React from 'react'
import { StyleHeader } from './style'
import Container from './Container'
import { dataNavbar } from 'modules/data-fake'

const Header = () => {
  const renderNavbar = (dataNavbar: any) => {
    return dataNavbar?.map((item: any, index: number) => {
      return (
        <li key={index} className={`nav__item ${item?.subMenu !== null && 'menu__line'}`}>
          <a href={item?.path} className='transition'>
            {item.title}
          </a>
          <div className='sub'>
            <div className='sub__ctt'>
              {item?.subMenu?.map((subMenuParent: any, indexSub: number) => {
                return (
                  <div className='sub__item' key={indexSub}>
                    <ul className='sub__item-list'>
                      <li>
                        <a href={item?.path + subMenuParent?.path}>{subMenuParent?.title}</a>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </li>
      )
    })
  }
  return (
    <StyleHeader>
      <Container>
        <div className='navbar'>
          <div className='navbar__logo'>
            <a href='#'>
              <h1>Electrician</h1>
            </a>
          </div>
          <div className='navbar__menu'>
            <ul className='nav'>{renderNavbar(dataNavbar)}</ul>
            <div className='cart'>
              <i className='fa-solid fa-cart-shopping'></i>
              <span>0</span>
            </div>
          </div>
        </div>
      </Container>
    </StyleHeader>
  )
}

export default Header
