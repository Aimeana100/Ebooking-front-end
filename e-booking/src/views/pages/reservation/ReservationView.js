import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import ReactToPrint from 'react-to-print'
import PrintTemplate1 from '../PrintTemplate1'

const ReservationReceipt = (props) => {
  const { register, handleSubmit, watch, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  const reservation = props.reservation
  return (
    <CCard>
      <CCardBody>
        <CForm
          className="row"
          name="roomClassAddFrm"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form"
        >
          <div className="mb-4">
            <CCardBody className="row">
              <CCol md={6}>
                <CFormLabel className="fw-bolder"> Customer details</CFormLabel>
                <div>
                  <CFormLabel> Names</CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    value={reservation.Customer.names}
                  />
                  <CFormLabel>Phone</CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    value={reservation.Customer.phone}
                  />
                  <CFormLabel>ID/Passport</CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    value={reservation.Customer.identification}
                  />
                </div>
              </CCol>
              <CCol md={6}>
                <CFormLabel className="fw-bolder">
                  Reservation details
                </CFormLabel>
                <div>
                  <p className="font-weight-bold">
                    {reservation.Room
                      ? 'Room : ' + reservation.Room.name
                      : 'Hall : ' + reservation.Hall.name}
                  </p>

                  <p className="font-weight-bold">
                    Check in : {new Date(reservation.checkIn).toLocaleString()}
                  </p>
                  <p className="font-weight-bold">
                    Check out :{' '}
                    {new Date(reservation.checkOut).toLocaleString()}
                  </p>
                  <p className="font-weight-bold">
                    Total : {Number(reservation.amount)}
                  </p>
                  <p className="font-weight-bold">
                    Paid : {Number(reservation.payment)}
                  </p>
                  <p className="font-weight-bold">
                    Debt :{' '}
                    {Number(reservation.amount) - Number(reservation.payment)}
                  </p>
                </div>
              </CCol>
            </CCardBody>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

const ReservationView = React.forwardRef((props, ref) => {
  const componentRef = useRef()
  const reservation = useSelector((state) => state.selection.selected)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className="d-flex justify-content-between">
              <h5>
                <strong>
                  {' '}
                  Reservation by {' ' + reservation.Customer.names + ' '}
                  for{' '}
                  {reservation.Room
                    ? reservation.Room.name
                    : reservation.Hall.name}
                </strong>
              </h5>
              <div>
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn-ghost-primary">Print</button>
                  )}
                  content={() => ref || componentRef.current}
                />
              </div>
            </div>
          </CCardHeader>
        </CCard>
        <div style={{ display: 'none' }}>
          <PrintTemplate1 ref={ref || componentRef}>
            <ReservationReceipt reservation={reservation} />
          </PrintTemplate1>
        </div>
        <ReservationReceipt reservation={reservation} />
      </CCol>
    </CRow>
  )
})

export default ReservationView
