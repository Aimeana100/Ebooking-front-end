import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// custom pages
const addRoom = React.lazy(() => import('./views/pages/rooms/roomAdd'))
const roomsAvailable = React.lazy(() => import('./views/pages/rooms/Room'))
const occupiedRooms = React.lazy(() => import('./views/pages/rooms/Occupied'))
const addRoomClass = React.lazy(() => import('./views/pages/roomClass/RoomClassAdd'))
const ReservationAdd = React.lazy(() => import('./views/pages/reservation/ReservationAdd'))
const Reservation = React.lazy(() => import('./views/pages/reservation/Reservation'))
const Users = React.lazy(() => import('./views/pages/users/Users'))
const UserAdd = React.lazy(() => import('./views/pages/users/UserAdd'))
const UserEdit = React.lazy(() => import('./views/pages/users/UserEdit'))

// products

const ProductsAdd = React.lazy(() => import('./views/pages/products/ProductsAdd'))
const Products = React.lazy(() => import('./views/pages/products/Products'))

// services

const ServicesAdd = React.lazy(() => import('./views/pages/services/ServicesAdd'))
const Services = React.lazy(() => import('./views/pages/services/Services'))

// stock

const StockItemAdd = React.lazy(() => import('./views/pages/stockItems/StockItemAdd'))

// const StockAdd = React.lazy(() => import('./views/pages/services/ServicesAdd'))
// const AvailableStock = React.lazy(() => import('./views/pages/services/Services'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  {
    path: 'booking/rooms/class/add',
    exact: true,
    name: 'Add room',
    element: addRoomClass,
  },
  {
    path: '/booking/rooms/add',
    exact: true,
    name: 'Add room',
    element: addRoom,
  },
  {
    path: '/booking/reservations/add',
    exact: true,
    name: 'Book new room',
    element: ReservationAdd,
  },
  {
    path: '/booking/reservations/all',
    exact: true,
    name: 'All Reservation',
    element: Reservation,
  },
  {
    path: '/booking/rooms/available',
    exact: true,
    name: 'Free rooms',
    keyword: 'available',
    element: roomsAvailable,
  },
  {
    path: '/booking/rooms/occupied',
    exact: true,
    name: 'Occupaied rooms',
    keyword: 'occupied',
    element: occupiedRooms,
  },
  {
    path: '/booking/user/add',
    exact: true,
    name: 'Add user',
    element: UserAdd,
  },
  {
    path: '/booking/user/edit',
    exact: true,
    name: 'Edit user',
    element: UserEdit,
  },
  { path: '/booking/users', exact: true, name: 'User', element: Users },
  {
    path: '/booking/products/add',
    exact: true,
    name: 'Product',
    element: ProductsAdd,
  },
  {
    path: '/booking/products/all',
    exact: true,
    name: 'Product',
    element: Products,
  },
  {
    path: '/booking/services/add',
    exact: true,
    name: 'Service',
    element: ServicesAdd,
  },
  {
    path: '/booking/services/all',
    exact: true,
    name: 'Service',
    element: Services,
  },
  {
    path: '/booking/stock/item/add',
    exact: true,
    name: 'Stock Items',
    element: StockItemAdd,
  },
]

export default routes
