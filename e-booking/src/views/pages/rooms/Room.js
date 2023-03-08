import React from 'react'
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

const Room = (prop) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Available rooms </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {' '}
                    Name | N <sup>o</sup>{' '}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Release ON </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell> VIP </CTableDataCell>
                  <CTableDataCell>#OH46</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    <Link to={`book/rooom/${1}`}> Book now </Link>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell> VIP </CTableDataCell>
                  <CTableDataCell> #OH18 </CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    <Link to={`book/rooom/${1}`}> Book now </Link>{' '}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Room
