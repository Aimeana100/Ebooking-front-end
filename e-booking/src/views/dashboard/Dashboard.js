import React, { useEffect } from 'react'

import { CCard, CCardBody } from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from 'src/redux/Product/productActions'
import {
  getProductCategories,
  getServiceCategories,
} from 'src/redux/Categories/categoriesActions'
import ProductSell from '../pages/products/ProductSell'

const Dashboard = () => {
  const dispatch = useDispatch()
  const userRole = useSelector((state) => state.auth.role)

  const getInitialData = () => {
    dispatch(getProductCategories())
    dispatch(getServiceCategories())
    dispatch(getProducts())
  }
  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <>
      {userRole && userRole !== 'Waiter' ? <WidgetsDropdown /> : null}
      <CCard className="mb-4">
        <CCardBody>
          {userRole && userRole === 'Waiter' ? <ProductSell /> : null}
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard

//  {
//    /* <CRow>
//             <CCol sm={5}>
//               <h4 id="traffic" className="card-title mb-0">
//                 Traffic
//               </h4>
//               <div className="small text-medium-emphasis">January - July 2021</div>
//             </CCol>
//             <CCol sm={7} className="d-none d-md-block">
//               <CButton color="primary" className="float-end">
//                 <CIcon icon={cilCloudDownload} />
//               </CButton>
//               <CButtonGroup className="float-end me-3">
//                 {['Day', 'Month', 'Year'].map((value) => (
//                   <CButton
//                     color="outline-secondary"
//                     key={value}
//                     className="mx-0"
//                     active={value === 'Month'}
//                   >
//                     {value}
//                   </CButton>
//                 ))}
//               </CButtonGroup>
//             </CCol>
//           </CRow> */
//  }
//  {
//    /* <CChartLine
//             style={{ height: '300px', marginTop: '40px' }}
//             data={{
//               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//               datasets: [
//                 {
//                   label: 'My First dataset',
//                   backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
//                   borderColor: getStyle('--cui-info'),
//                   pointHoverBackgroundColor: getStyle('--cui-info'),
//                   borderWidth: 2,
//                   data: [
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                   ],
//                   fill: true,
//                 },
//                 {
//                   label: 'My Second dataset',
//                   backgroundColor: 'transparent',
//                   borderColor: getStyle('--cui-success'),
//                   pointHoverBackgroundColor: getStyle('--cui-success'),
//                   borderWidth: 2,
//                   data: [
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                     random(50, 200),
//                   ],
//                 },
//                 {
//                   label: 'My Third dataset',
//                   backgroundColor: 'transparent',
//                   borderColor: getStyle('--cui-danger'),
//                   pointHoverBackgroundColor: getStyle('--cui-danger'),
//                   borderWidth: 1,
//                   borderDash: [8, 5],
//                   data: [65, 65, 65, 65, 65, 65, 65],
//                 },
//               ],
//             }}
//             options={{
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: false,
//                 },
//               },
//               scales: {
//                 x: {
//                   grid: {
//                     drawOnChartArea: false,
//                   },
//                 },
//                 y: {
//                   ticks: {
//                     beginAtZero: true,
//                     maxTicksLimit: 5,
//                     stepSize: Math.ceil(250 / 5),
//                     max: 250,
//                   },
//                 },
//               },
//               elements: {
//                 line: {
//                   tension: 0.4,
//                 },
//                 point: {
//                   radius: 0,
//                   hitRadius: 10,
//                   hoverRadius: 4,
//                   hoverBorderWidth: 3,
//                 },
//               },
//             }}
//           /> */
//  }

//  {
//    /* <CCardFooter>
//           <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
//             {progressExample.map((item, index) => (
//               <CCol className="mb-sm-2 mb-0" key={index}>
//                 <div className="text-medium-emphasis">{item.title}</div>
//                 <strong>
//                   {item.value} ({item.percent}%)
//                 </strong>
//                 <CProgress thin className="mt-2" color={item.color} value={item.percent} />
//               </CCol>
//             ))}
//           </CRow>
//         </CCardFooter> */
//  }

//       {
//         /* <CRow>
//         <CCol xs>
//           <CCard className="mb-4">
//             <CCardBody>
//               <CTable align="middle" className="mb-0 border" hover responsive>
//                 <CTableHead color="light">
//                   <CTableRow>
//                     <CTableHeaderCell className="text-center">
//                       <CIcon icon={cilPeople} />
//                     </CTableHeaderCell>
//                     <CTableHeaderCell>User</CTableHeaderCell>
//                     <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
//                     <CTableHeaderCell>Usage</CTableHeaderCell>
//                     <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
//                     <CTableHeaderCell>Activity</CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {tableExample.map((item, index) => (
//                     <CTableRow v-for="item in tableItems" key={index}>
//                       <CTableDataCell className="text-center">
//                         <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div>{item.user.name}</div>
//                         <div className="small text-medium-emphasis">
//                           <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
//                           {item.user.registered}
//                         </div>
//                       </CTableDataCell>
//                       <CTableDataCell className="text-center">
//                         <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div className="clearfix">
//                           <div className="float-start">
//                             <strong>{item.usage.value}%</strong>
//                           </div>
//                           <div className="float-end">
//                             <small className="text-medium-emphasis">{item.usage.period}</small>
//                           </div>
//                         </div>
//                         <CProgress thin color={item.usage.color} value={item.usage.value} />
//                       </CTableDataCell>
//                       <CTableDataCell className="text-center">
//                         <CIcon size="xl" icon={item.payment.icon} />
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div className="small text-medium-emphasis">Last login</div>
//                         <strong>{item.activity}</strong>
//                       </CTableDataCell>
//                     </CTableRow>
//                   ))}
//                 </CTableBody>
//               </CTable>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow> */
//       }
