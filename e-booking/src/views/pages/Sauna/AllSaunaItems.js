import {
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import instance from 'src/API/AxiosInstance'
function AllBarItems() {
  const { register, watch, reset } = useForm()
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const res = await instance
        .get('/stock/item/all')
        .then((res) => {
          setItems(res.data.data)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getItems()
  }, [])

  return (
    <div>
      <CCardHeader>
        <h2>
          <strong> Stock items </strong>
        </h2>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {items && items.length !== 0
                ? items.map((item, i) => {
                    return (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                        <CTableDataCell>{`${item.name}`}</CTableDataCell>
                        <CTableDataCell>{`${item.name}`}</CTableDataCell>
                      </CTableRow>
                    )
                  })
                : null}
            </CTableBody>
          </CTable>
        </CRow>
      </CCardBody>
    </div>
  )
}

export default AllBarItems