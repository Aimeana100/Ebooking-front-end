import React, { useState, useEffect } from 'react'
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
  CFormCheck,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const Reservation = (prop) => {
  const [reservations, setReservations] = useState([])
  useEffect(() => {
    const getReservations = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/reservation/all')
        .then((res) => {
          setReservations(res.data.data)
          console.log('All reservation', res.data.data)
        })
        .catch((err) => {
          console.log('error getting reservations', err.message)
        })
    }
    getReservations()
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All Reservations </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Names </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Phone </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Room/Hall </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Done By </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Check in </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Days rem. </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Options </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {reservations && reservations.length !== 0
                  ? reservations.map((reserv, i) => (
                      <CTableRow key={reserv.id}>
                        <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.Customer.names}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.Customer.phone}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.Room
                            ? reserv.Room.names
                            : reserv.Hall.names}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.User.firstName + ' ' + reserv.User.lastName}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {new Date(reserv.checkIn).toLocaleString()}
                        </CTableDataCell>
                        <CTableDataCell> 20 days </CTableDataCell>
                        <CTableDataCell>
                          <span className="badge badge-primary  text-secondary">
                            Print
                          </span>
                          <Link
                            to="booking/reservations/info"
                            className="badge badge-primary text-primary"
                          >
                            {' '}
                            View{' '}
                          </Link>
                        </CTableDataCell>
                      </CTableRow>
                    ))
                  : null}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Reservation
