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
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

function ReservationView() {
  const { register, handleSubmit, watch, reset } = useForm()
  const reservation = useSelector((state) => state.selection.selected)
  const onSubmit = (data) => {
    console.log(data)

    reset()
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
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
          </CCardHeader>
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
                    <CFormLabel className="fw-bolder">
                      {' '}
                      Customer details
                    </CFormLabel>
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
                        Check in :{' '}
                        {new Date(reservation.checkIn).toLocaleString()}
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
                        {Number(reservation.amount) -
                          Number(reservation.payment)}
                      </p>
                    </div>
                  </CCol>
                </CCardBody>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ReservationView
