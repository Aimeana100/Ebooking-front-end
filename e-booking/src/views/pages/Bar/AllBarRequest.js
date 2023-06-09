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
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { instance, getTokenPromise } from 'src/API/AxiosInstance'
import { selectItem } from 'src/redux/Select/selectionActions'

function AllBarRequest() {
  const [items, setItems] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const getPetitStockOrders = async () => {
      await instance
        .get('/petit/order/all')
        .then((res) => {
          console.log(res.data)
          setItems(res.data.data)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getPetitStockOrders()
  }, [])

  return (
    <div>
      <CCardHeader>
        <h2>
          <strong> All Petit-stock requests </strong>
        </h2>
      </CCardHeader>
      <CCardBody>
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {items && items.length !== 0
              ? items.map((item, i) => {
                  return (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                      <CTableDataCell>
                        {new Date(item.date).toLocaleDateString()}
                      </CTableDataCell>
                      <CTableDataCell>
                        <Link
                          className="btn btn-warning"
                          to="/booking/requests/cashier/view"
                          onClick={() => {
                            dispatch(selectItem(item))
                          }}
                        >
                          View
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                  )
                })
              : null}
          </CTableBody>
        </CTable>
      </CCardBody>
    </div>
  )
}

export default AllBarRequest
