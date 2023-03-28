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
import { toast } from 'react-hot-toast'

const Reservation = () => {
  const dispatch = useDispatch()
  const [reservations, setReservations] = useState([])
  const confirmReservation = async (data) => {
    const res = await axios
      .put('http://206.81.29.111:80/api/v1/reservation/update', data)
      .then((res) => {
        console.log(res.data)
        toast.success('Reservation updated')
      })
      .catch((err) => {
        //console.log('err updating reservation', err.message)
        toast.error('Reservation update failed')
      })
  }
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
                  <CTableHeaderCell scope="col"> User </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Check in </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Check out </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Status </CTableHeaderCell>
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
                          {Number(reserv.amount) > Number(reserv.payment) ? (
                            <CBadge color="danger"> Debt</CBadge>
                          ) : null}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.Customer.phone}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.Room
                            ? reserv.Room.name
                            : reserv.Hall.name}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {reserv.User.firstName + ' ' + reserv.User.lastName}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {new Date(reserv.checkIn).toLocaleString()}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {new Date(reserv.checkOut).toLocaleString()}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {reserv.status ? reserv.status : 'in progress'}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          <Link
                            to="/booking/reservations/info"
                            className="badge badge-primary text-primary text-decoration-none"
                            onClick={() => dispatch(selectItem(reserv))}
                          >
                            {' '}
                            View{' '}
                          </Link>
                          <Link
                            className="badge badge-warning text-primary text-decoration-none"
                            onClick={() =>
                              confirmReservation({
                                id: reserv.id,
                                status: 'confirmed',
                              })
                            }
                          >
                            {' '}
                            Confirm{' '}
                          </Link>
                          <Link
                            className="badge badge-danger text-primary text-decoration-none"
                            onClick={() =>
                              confirmReservation({
                                id: reserv.id,
                                status: 'canceled',
                              })
                            }
                          >
                            {' '}
                            Cancel{' '}
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
