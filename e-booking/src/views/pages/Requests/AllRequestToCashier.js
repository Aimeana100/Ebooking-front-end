import {
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import instance from 'src/API/AxiosInstance'

function AllRequestToCashier() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getPurchaseOrders = async () => {
      const res = await instance
        .get('/purchase/order/all')
        .then((res) => {
          console.log(res.data)
          setItems(res.data.data)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getPurchaseOrders()
  }, [])

  return (
    <div>
      <CCardHeader>
        <h2>
          <strong> All Purchase orders </strong>
        </h2>
      </CCardHeader>
      <CCardBody>
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody></CTableBody>
        </CTable>
      </CCardBody>
    </div>
  )
}

export default AllRequestToCashier

///

// {
//   items && items.length !== 0
//     ? items.map((item, i) => {
//         return (
//           <CTableRow key={item.id}>
//             <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
//             <CTableDataCell>{`${item.name}`}</CTableDataCell>
//           </CTableRow>
//         )
//       })
//     : null
// }
