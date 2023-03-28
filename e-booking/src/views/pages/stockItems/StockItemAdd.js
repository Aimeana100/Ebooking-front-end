import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addStockItem,
  getStockItems,
} from '../../../redux/StockItem/StockItemActions'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const StockItemAdd = () => {
  const [formData, setformData] = useState({})

  const dispatch = useDispatch()
  const stockItems = useSelector((state) => state.stockItems.stockItems)

  const handleChange = (e) => {
    const handleChange = (e) => {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const hundleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    // const addItem = async () => {
    dispatch(addStockItem(formData))
    // }
    // addItem()
  }

  useEffect(() => {
    dispatch(getStockItems())
  })

  return <div>Stock Item</div>
}

export default StockItemAdd

// <CRow>
// <CCol xs={12}>
//   <CCard className="mb-4">
//     <CCardHeader>
//       <h2>
//         <strong> Stock Items </strong>
//       </h2>
//     </CCardHeader>
//     <CCardBody>
//       <CForm
//         name="roomClassAddFrm"
//         onSubmit={hundleSubmit}
//         encType="multipart/form"
//       >
//         <div className="mb-3">
//           <CFormLabel htmlFor="name"> Item name </CFormLabel>
//           <CFormInput
//             type="text"
//             name="name"
//             id="name"
//             placeholder="meet "
//             size="md"
//             required
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <CFormLabel htmlFor="description">
//             {' '}
//             Description <span className="text-primary">
//               {' '}
//               Optional{' '}
//             </span>{' '}
//           </CFormLabel>
//           <CFormTextarea
//             name="description"
//             id="description"
//             rows="2"
//             onChange={handleChange}
//           ></CFormTextarea>
//         </div>
//         <CCol xs={12}>
//           <CButton component="input" type="submit" value="Add Item" />
//         </CCol>
//       </CForm>
//     </CCardBody>
//   </CCard>
// </CCol>
// </CRow>
// <CRow>
//         <CCol xs={12}>
//           <CCard className="mb-4">
//             <CCardHeader>
//               <h2>
//                 <strong> All Stock Item </strong>
//               </h2>
//             </CCardHeader>
//             <CCardBody>
//               <CTable bordered>
//                 <CTableHead>
//                   <CTableRow>
//                     <CTableHeaderCell scope="col">#</CTableHeaderCell>
//                     <CTableHeaderCell scope="col"> Item name </CTableHeaderCell>
//                     <CTableHeaderCell scope="col">
//                       {' '}
//                       Description{' '}
//                     </CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {stockItems.map((item, index) => {
//                     return (
//                       <CTableRow key={index}>
//                         <CTableHeaderCell scope="row">
//                           {' '}
//                           {index}{' '}
//                         </CTableHeaderCell>
//                         <CTableDataCell> {item.name} </CTableDataCell>
//                         <CTableDataCell> {item.descripttion} </CTableDataCell>
//                       </CTableRow>
//                     )
//                   })}
//                 </CTableBody>
//               </CTable>
//             </CCardBody>
//           </CCard>
//         </CCol>
// </CRow>
