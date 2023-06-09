import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBook,
  cilCart,
  cilHouse,
  cilPeople,
  cilSatelite,
  cilSave,
  cilSpeedometer,
  cilStorage,
  cilUser,
  cilFastfood,
  cilShareBoxed,
  cilBasket,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
import massageIcon from 'src/assets/icons/massage-icon.svg'
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
    component: CNavGroup,
    name: 'Room class',
    to: '/booking/rooms/class/',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Room Class ',
        to: '/booking/rooms/class/add',
      },
      {
        component: CNavItem,
        name: 'All Room Class ',
        to: '/booking/rooms/class/all',
      },
    ],
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
        name: 'All Rooms',
        to: '/booking/rooms/available',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Halls',
    to: '/halls',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Halls',
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
        name: 'Add Reservation',
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
    name: 'Bar',
    to: '/bar',
    icon: <CIcon icon={cilFastfood} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sell',
        to: '/booking/products/sell',
      },
      {
        component: CNavItem,
        name: 'Request item',
        to: '/booking/bar/request',
      },
      {
        component: CNavItem,
        name: 'Add item',
        to: '/booking/bar/add',
      },
      {
        component: CNavItem,
        name: 'All items',
        to: '/booking/bar/all',
      },
      {
        component: CNavItem,
        name: 'All requests',
        to: '/booking/bar/request/all',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Sauna',
    to: '/sauna',
    icon: <CIcon icon={massageIcon} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add item',
        to: '/booking/sauna/add',
      },
      {
        component: CNavItem,
        name: 'Request item',
        to: '/booking/sauna/request',
      },
      {
        component: CNavItem,
        name: 'All items',
        to: '/booking/sauna/all',
      },
      {
        component: CNavItem,
        name: 'All requests',
        to: '/booking/sauna/request/all',
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
        name: 'Add products',
        to: '/booking/products/add',
      },
      {
        component: CNavItem,
        name: 'All Products',
        to: '/booking/products/all',
      },
      {
        component: CNavItem,
        name: 'Product Sells',
        to: '/booking/products/sell/all',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Packages',
    to: '/booking/services',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add product category',
        to: '/booking/products/categories/add',
      },
      {
        component: CNavItem,
        name: 'All product categories',
        to: '/booking/products/categories/all',
      },
      {
        component: CNavItem,
        name: 'Add product package',
        to: '/booking/products/packages/add',
      },
      {
        component: CNavItem,
        name: 'All product packages',
        to: '/booking/products/packages/all',
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
        name: 'All Users',
        to: '/booking/users',
      },
      {
        component: CNavItem,
        name: 'Add user roles',
        to: '/booking/user/roles/add',
      },
      {
        component: CNavItem,
        name: 'User roles ',
        to: '/booking/user/roles',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Requests',
    to: '/booking/requests',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Stock request',
        to: '/booking/requests/stock',
      },
      {
        component: CNavItem,
        name: 'Cashier request',
        to: '/booking/requests/cashier',
      },
      {
        component: CNavItem,
        name: 'All Cashier request',
        to: '/booking/requests/cashier/all',
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
        name: 'All Stock Items',
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
        name: 'All Stock',
        to: '/booking/stock/available',
      },
      {
        component: CNavItem,
        name: 'All Receive Vouchers',
        to: '/booking/stock/received',
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

//  {
//         component: CNavItem,
//         name: 'Add reports',
//         to: '/reports/create',
//       },
