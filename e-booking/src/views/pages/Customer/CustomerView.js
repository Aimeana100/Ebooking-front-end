import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { useSelector } from 'react-redux'

function CustomerView() {
  const selectedCustomer =
    useSelector((state) => state.selection.selected) || {}
  const onSubmit = (data) => {
    console.log(data)

    //roomClass.push(formData);
  }

  useEffect(() => {}, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2 className="text-center">
              <strong> {selectedCustomer.name} Customer info </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CCol md={6}>
              <div className="my-3">
                <p className="fw-bolder"> Customer details </p>
              </div>
              <p className="fw-bold"> Name </p>
              <p className="mb-1"> {selectedCustomer.names}</p>

              <p className="fw-bold"> ID/Passport </p>
              <p className="mb-1"> {selectedCustomer.identification}</p>
              <p className="fw-bold"> Tel </p>
              <p className="mb-1"> {selectedCustomer.phone}</p>
            </CCol>
            <CRow>
              <h2 className="text-center">
                <strong> {selectedCustomer.name} Reservations</strong>
              </h2>
              <div>
                <CTable bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> Dates </CTableHeaderCell>
                      <CTableHeaderCell scope="col"> Status </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedCustomer.Reservations &&
                    selectedCustomer.Reservations.length !== 0
                      ? selectedCustomer.Reservations.map((reservation, i) => {
                          return (
                            <CTableRow key={reservation.id}>
                              <CTableHeaderCell scope="row">
                                {i + 1}
                              </CTableHeaderCell>
                              <CTableDataCell>{`${
                                reservation.Hall
                                  ? reservation.Hall.name
                                  : reservation.Room.name
                              }`}</CTableDataCell>
                              <CTableDataCell>
                                {`${
                                  reservation
                                    ? new Date(
                                        reservation.checkIn,
                                      ).toLocaleDateString() +
                                      ' to ' +
                                      new Date(
                                        reservation.checkOut,
                                      ).toLocaleDateString()
                                    : 'not set'
                                }`}
                              </CTableDataCell>
                              <CTableDataCell>
                                {Number(reservation.payment) &&
                                Number(reservation.amount)
                                  ? Number(reservation.payment) <
                                    Number(reservation.amount)
                                    ? `Debt of ${
                                        Number(reservation.amount) -
                                        Number(reservation.payment)
                                      } USD`
                                    : 'Completed'
                                  : ''}
                              </CTableDataCell>
                            </CTableRow>
                          )
                        })
                      : null}
                  </CTableBody>
                </CTable>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CustomerView
