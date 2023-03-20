import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// custom pages

//roomClass
const addRoomClass = React.lazy(() =>
  import('./views/pages/roomClass/RoomClassAdd'),
)

//roomms
const addRoom = React.lazy(() => import('./views/pages/rooms/roomAdd'))
const roomsAvailable = React.lazy(() => import('./views/pages/rooms/Room'))
const occupiedRooms = React.lazy(() => import('./views/pages/rooms/Occupied'))
//const RoomSell = React.lazy(() => import('./views/pages/rooms/RoomSell'))
//Halls

const Hall = React.lazy(() => import('./views/pages/Hall/Hall'))
const HallAdd = React.lazy(() => import('./views/pages/Hall/HallAdd'))
const HallEdit = React.lazy(() => import('./views/pages/Hall/HallEdit'))
const HallInfo = React.lazy(() => import('./views/pages/Hall/HallInfo.js'))
const HallServicesAdd = React.lazy(() =>
  import('./views/pages/Hall/HallServicesAdd.js'),
)
const HallServicesEdit = React.lazy(() =>
  import('./views/pages/Hall/HallServicesEdit.js'),
)
const HallServices = React.lazy(() =>
  import('./views/pages/Hall/HallServices.js'),
)

const ReservationAdd = React.lazy(() =>
  import('./views/pages/reservation/ReservationAdd'),
)
const Reservation = React.lazy(() =>
  import('./views/pages/reservation/Reservation'),
)

const ReservationView = React.lazy(() =>
  import('./views/pages/reservation/ReservationView'),
)
const Users = React.lazy(() => import('./views/pages/users/Users'))
const UserAdd = React.lazy(() => import('./views/pages/users/UserAdd'))
const UserEdit = React.lazy(() => import('./views/pages/users/UserEdit'))

// products
const ProductEdit = React.lazy(() =>
  import('./views/pages/products/ProductEdit'),
)
const ProductSell = React.lazy(() =>
  import('./views/pages/products/ProductSell'),
)

const ProductsAdd = React.lazy(() =>
  import('./views/pages/products/ProductsAdd'),
)
const Products = React.lazy(() => import('./views/pages/products/Products'))

// services

const ServicesAdd = React.lazy(() =>
  import('./views/pages/services/ServicesAdd'),
)
const Services = React.lazy(() => import('./views/pages/services/Services'))
const ServiceSell = React.lazy(() =>
  import('./views/pages/services/ServiceSell'),
)
const ServiceEdit = React.lazy(() =>
  import('./views/pages/services/ServiceEdit.js'),
)

// stock
const StockItemAdd = React.lazy(() =>
  import('./views/pages/stockItems/StockItemAdd'),
)
// customers

const Customers = React.lazy(() => import('./views/pages/Customer/Customers'))
const CustomerAdd = React.lazy(() =>
  import('./views/pages/Customer/CustomerAdd'),
)
const CustomerView = React.lazy(() =>
  import('./views/pages/Customer/CustomerView'),
)

const PetitStockReports = React.lazy(() =>
  import('./views/pages/Reports/PetitStockReports.js'),
)
const CashierReports = React.lazy(() =>
  import('./views/pages/Reports/CashierReports.js'),
)
const ReservationReports = React.lazy(() =>
  import('./views/pages/Reports/ReservationReports.js'),
)
const StockReports = React.lazy(() =>
  import('./views/pages/Reports/StockReports.js'),
)
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
    path: 'booking/halls/',
    exact: true,
    name: 'Hall',
    element: Hall,
  },
  {
    path: 'booking/halls/add',
    exact: true,
    name: 'Add Hall',
    element: HallAdd,
  },
  {
    path: 'booking/halls/edit',
    exact: true,
    name: 'Edit Hall',
    element: HallEdit,
  },
  {
    path: 'booking/halls/info',
    exact: true,
    name: 'View Hall',
    element: HallInfo,
  },
  {
    path: 'booking/halls/services/add',
    exact: true,
    name: 'Add Hall products',
    element: HallServicesAdd,
  },
  {
    path: 'booking/halls/services/edit',
    exact: true,
    name: 'Add Hall products',
    element: HallServicesEdit,
  },
  {
    path: 'booking/halls/services',
    exact: true,
    name: 'Hall services',
    element: HallServices,
  },

  {
    path: '/booking/rooms/add',
    exact: true,
    name: 'Add room',
    element: addRoom,
  },

  {
    path: '/booking/rooms/update',
    exact: true,
    name: 'Sell room',
    element: addRoom,
  },
  {
    path: '/booking/reservations/add',
    exact: true,
    name: 'Book new room',
    element: ReservationAdd,
  },
  {
    path: '/booking/reservations/info',
    exact: true,
    name: 'Book new room',
    element: ReservationView,
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
    path: '/booking/rooms/available/book',
    exact: true,
    name: 'Free rooms',
    keyword: 'available',
    element: Reservation,
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
    path: '/booking/products/sell',
    exact: true,
    name: 'Product',
    element: ProductSell,
  },
  {
    path: '/booking/products/add',
    exact: true,
    name: ' Add Product',
    element: ProductsAdd,
  },
  {
    path: '/booking/products/edit',
    exact: true,
    name: 'Product',
    element: ProductEdit,
  },

  {
    path: '/booking/products/all',
    exact: true,
    name: 'Product',
    element: Products,
  },
  {
    path: '/booking/services/sell',
    exact: true,
    name: 'Service',
    element: ServiceSell,
  },
  {
    path: '/booking/services/add',
    exact: true,
    name: 'Service',
    element: ServicesAdd,
  },
  {
    path: '/booking/services/edit',
    exact: true,
    name: 'Service',
    element: ServiceEdit,
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
  {
    path: '/customers',
    exact: true,
    name: 'All customers',
    element: Customers,
  },
  {
    path: '/customers/add',
    exact: true,
    name: 'Add customer',
    element: CustomerAdd,
  },
  {
    path: '/customers/info',
    exact: true,
    name: 'View customer',
    element: CustomerView,
  },
  {
    path: '/reports/cashier',
    exact: true,
    name: 'Cashier reports',
    element: CashierReports,
  },
  {
    path: '/reports/reservations',
    exact: true,
    name: 'Cashier reports',
    element: ReservationReports,
  },
  {
    path: '/reports/petit-stock',
    exact: true,
    name: 'Petit stock reports',
    element: PetitStockReports,
  },
  {
    path: '/reports/stock',
    exact: true,
    name: 'Stock reports',
    element: StockReports,
  },
]

export default routes
