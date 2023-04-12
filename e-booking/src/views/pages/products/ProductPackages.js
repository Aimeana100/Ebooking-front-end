import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { useSelector } from 'react-redux'
import { instance, getTokenPromise } from 'src/API/AxiosInstance'
import { toast } from 'react-hot-toast'

const ProductPackages = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      await instance
        .get('/packages/all')
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data.data)
          }
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getAllProducts()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All Packages </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Name </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Category </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {' '}
                    Price per item{' '}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Price </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Description </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Option </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody></CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductPackages
