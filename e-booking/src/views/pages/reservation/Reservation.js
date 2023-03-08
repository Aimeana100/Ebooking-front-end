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
import CIcon from '@coreui/icons-react'

const Room = (prop) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All Reservation </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Names </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Phone </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Room </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Done By </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Check in </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Days rem. </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Options </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell> Anathole </CTableDataCell>
                  <CTableDataCell> 0783544533 </CTableDataCell>
                  <CTableDataCell> #ROOM 10 </CTableDataCell>
                  <CTableDataCell> Anathole</CTableDataCell>
                  <CTableDataCell> 2023-03-20 </CTableDataCell>
                  <CTableDataCell> 20 days </CTableDataCell>
                  <CTableDataCell>
                    <span className="badge badge-primary  text-secondary">Print</span>
                    <Link
                      to="booking/reservations/add"
                      className="badge badge-primary text-primary"
                    >
                      {' '}
                      View{' '}
                    </Link>
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
