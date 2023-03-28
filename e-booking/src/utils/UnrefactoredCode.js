// import React from 'react'

// function UnrefactoredCode() {
//   return (
//     <div>
//       {reservations && reservations.length !== 0
//         ? reservations.map((reserv, i) => {
//             if (filter_condition === 'All' && filter_condition2 === 'All') {
//               if (time && time === 'all-time') {
//                 return (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 )
//               } else if (
//                 myDates &&
//                 myDates.length !== 0 &&
//                 myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
//               ) {
//                 return (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 )
//               }
//             } else if (
//               filter_condition2 === 'All' &&
//               filter_condition !== 'All'
//             ) {
//               if (time && time === 'all-time') {
//                 return reserv.status === filter_condition ? (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 ) : null
//               } else if (
//                 myDates &&
//                 myDates.length !== 0 &&
//                 myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
//               ) {
//                 return reserv.status === filter_condition ? (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 ) : null
//               }
//             } else if (filter_condition2 === 'room') {
//               if (time && time === 'all-time') {
//                 return (reserv.status === filter_condition ||
//                   filter_condition === 'All') &&
//                   reserv.roomId ? (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 ) : null
//               } else if (
//                 myDates &&
//                 myDates.length !== 0 &&
//                 myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
//               ) {
//                 return (reserv.status === filter_condition ||
//                   filter_condition === 'All') &&
//                   reserv.roomId ? (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 ) : null
//               }
//             } else {
//               if (time && time === 'all-time') {
//                 return (reserv.status === filter_condition ||
//                   filter_condition === 'All') &&
//                   reserv.hallId ? (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 ) : null
//               } else if (
//                 myDates &&
//                 myDates.length !== 0 &&
//                 myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
//               ) {
//                 return (reserv.status === filter_condition ||
//                   filter_condition === 'All') &&
//                   reserv.hallId ? (
//                   <CTableRow key={reserv.id}>
//                     <CTableHeaderCell scope="row">
//                       {reserv.Customer.names}
//                     </CTableHeaderCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkIn).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.checkOut).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {reserv.Room ? reserv.Room.name : reserv.Hall.name}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {new Date(reserv.createdAt).toLocaleDateString()}
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       {' '}
//                       {reserv.status !== null ? reserv.status : 'active'}
//                     </CTableDataCell>
//                     <CTableDataCell>{reserv.amount}</CTableDataCell>

//                     <CTableDataCell>{reserv.id}</CTableDataCell>
//                   </CTableRow>
//                 ) : null
//               }
//             }
//           })
//         : null}
//     </div>
//   )
// }

// export default UnrefactoredCode
