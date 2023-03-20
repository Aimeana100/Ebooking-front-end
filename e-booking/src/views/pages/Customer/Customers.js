import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { selectItem } from 'src/redux/Select/selectionActions'
import { useDispatch } from 'react-redux'

function Customers() {
  const dispatch = useDispatch()
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    const getCustomers = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/customers/all')
        .then((res) => {
          console.log(res.data)
          setCustomers(res.data.data)
        })
        .catch((err) => {
          console.log('err getting halls')
        })
      console.log('customers async to get halls')
    }
    getCustomers()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Registered customers </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {customers && customers.length !== 0
                  ? customers.map((customer, i) => {
                      return (
                        <CTableRow key={customer.id}>
                          <CTableHeaderCell scope="row">
                            {i + 1}
                          </CTableHeaderCell>
                          <CTableDataCell>{`${customer.names}`}</CTableDataCell>
                          <CTableDataCell>{`${customer.identification}`}</CTableDataCell>
                          <CTableDataCell>
                            {' '}
                            <Link
                              to="/customers/info"
                              onClick={() => {
                                return dispatch(selectItem(customer))
                              }}
                            >
                              view
                            </Link>{' '}
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })
                  : null}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Customers
