import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBook,
  cilHouse,
  cilPeople,
  cilSatelite,
  cilSave,
  cilSpeedometer,
  cilStorage,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Room class',
    to: '/booking/rooms/class/add',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Room',
    to: '/rooms',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Room ',
        to: '/booking/rooms/add',
      },
      {
        component: CNavItem,
        name: 'Available',
        to: '/booking/rooms/available',
      },
      {
        component: CNavItem,
        name: 'Occupied',
        to: '/booking/rooms/occupied',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Hall',
    to: '/halls',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Halls',
        to: '/booking/halls',
      },
      {
        component: CNavItem,
        name: 'Add Hall',
        to: '/booking/halls/add',
      },
      {
        component: CNavItem,
        name: 'Hall services',
        to: '/booking/halls/services',
      },
      {
        component: CNavItem,
        name: 'Add Hall services',
        to: '/booking/halls/services/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reservations',
    to: '/Reservations',
    icon: <CIcon icon={cilSave} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create a Reservation',
        to: '/booking/reservations/add',
      },
      {
        component: CNavItem,
        name: 'All Reservations',
        to: '/booking/reservations/all',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'User',
    to: '/users',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add User ',
        to: '/booking/user/add',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/booking/users',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/Products',
    icon: <CIcon icon={cilSave} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sell product',
        to: '/booking/products/sell',
      },
      {
        component: CNavItem,
        name: 'Add products',
        to: '/booking/products/add',
      },
      {
        component: CNavItem,
        name: 'All Products',
        to: '/booking/products/all',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Services',
    to: '/booking/services',
    icon: <CIcon icon={cilSatelite} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sell service',
        to: '/booking/services/sell',
      },
      {
        component: CNavItem,
        name: 'Add service',
        to: '/booking/services/add',
      },
      {
        component: CNavItem,
        name: 'All services',
        to: '/booking/services/all',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Stock Items',
    to: '/stock/items',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Stock Items',
        to: '/booking/stock/item/add',
      },
      {
        component: CNavItem,
        name: 'All Items',
        to: '/booking/stock/items',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Stock',
    to: '/stock',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Stock',
        to: '/booking/stock/add',
      },
      {
        component: CNavItem,
        name: 'Available Stock',
        to: '/booking/stock/available',
      },
      {
        component: CNavItem,
        name: 'Incoming Request',
        to: '/booking/stock/request/in',
      },
      {
        component: CNavItem,
        name: 'Outgoing Request',
        to: '/booking/stock/request/out',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customers',
    to: '/customers',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Customers',
        to: '/customers',
      },
      {
        component: CNavItem,
        name: 'Add Customer',
        to: '/customers/add',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: ' ',
  //   to: ' ',
  //   icon: ' ',
  // },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/booking/reports/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Reservation reports',
        to: '/reports/reservations',
      },
      {
        component: CNavItem,
        name: 'Cashier reports',
        to: '/reports/cashier',
      },
      {
        component: CNavItem,
        name: 'Petit stock reports',
        to: '/reports/petit-stock',
      },
      {
        component: CNavItem,
        name: 'Stock reports',
        to: '/reports/stock',
      },
    ],
  },
]
export default _nav
