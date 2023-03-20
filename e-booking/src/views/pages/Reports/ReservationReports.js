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
  CBadge,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { selectItem } from 'src/redux/Select/selectionActions'

const Reservation = (prop) => {
  const dispatch = useDispatch()
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
                  <CTableHeaderCell scope="col">Names</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Check In </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Check Out</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Room/Hall </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Booked On </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Status </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Price </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Commission </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {' '}
                    Booking number{' '}
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {reservations && reservations.length !== 0
                  ? reservations.map((reserv, i) => (
                      <CTableRow key={reserv.id}>
                        <CTableHeaderCell scope="row">
                          {reserv.Customer.names}
                        </CTableHeaderCell>
                        <CTableDataCell>
                          {new Date(reserv.checkIn).toLocaleDateString()}
                        </CTableDataCell>
                        <CTableDataCell>
                          {new Date(reserv.checkOut).toLocaleDateString()}
                        </CTableDataCell>
                        <CTableDataCell>
                          {reserv.Room ? reserv.Room.name : reserv.Hall.name}
                        </CTableDataCell>
                        <CTableDataCell>
                          {new Date(reserv.createdAt).toLocaleDateString()}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.status !== null ? reserv.status : 'active'}
                        </CTableDataCell>
                        <CTableDataCell>{reserv.amount}</CTableDataCell>
                        <CTableDataCell>
                          {reserv.commission ? reserv.commisssion : '0'}
                        </CTableDataCell>
                        <CTableDataCell>{reserv.id}</CTableDataCell>
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
