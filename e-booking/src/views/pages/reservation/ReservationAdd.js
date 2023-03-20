import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CFormCheck,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-multi-date-picker'

import axios from 'axios'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'

const ReservationAdd = () => {
  const { register, handleSubmit, watch, reset } = useForm()
  const [roomClass, setroomClass] = useState([])
  const [customer, setCustomer] = useState([])
  const [service, setService] = useState([])
  const [rooms, setRooms] = useState([])
  const [halls, setHalls] = useState([])
  const [hallServices, setHallServices] = useState([])
  const [dateIn, setDateIn] = useState({})
  const [dateOut, setDateOut] = useState({})
  let [customers, setCustomers] = useState([])

  let loggedInUser = useSelector((state) => state.auth.user.Role.name)
  let user = useSelector((state) => state.auth.user)
  const inputState = { minLength: 2 }
  let priceHall = 0
  let priceRoom = 0
  const type = watch('booking_type') || '---'
  const additional = watch('additionalServices') || {}
  console.log('Additional ', additional)
  const additionalTotal =
    Object.keys(additional).length !== 0
      ? Object.keys(additional).map((e) =>
          additional[e] != false ? Number(additional[e]) : 0,
        )
      : [0]
  const additionalServicesTotal = additionalTotal.reduce((a, b) => a + b) || 0
  let all = []
  all = type && type === 'room' ? [...rooms] : [...halls]

  if (type === 'hall' && service.length !== 0) {
    console.log('service', service[0].price)
    priceHall = service[0].price
  } else if (type === 'room' && service.length !== 0) {
    priceRoom = service[0].RoomClass.price
  }
  const time =
    new Date(dateIn).getTime() !== 0 && new Date(dateOut).getTime() !== 0
      ? new Date(dateOut).getTime() - new Date(dateIn).getTime()
      : null
  const days = Math.ceil(time / (1000 * 3600 * 24))
  const currentDate = new Date()
  const format = 'DD/MM/YY/HH'
  const onSubmit = (data) => {
    console.log('this is dates', { dateIn, dateOut })
    if (type === 'room' && days) {
      data.roomId = service[0].id
      data.amount = service[0].RoomClass.price * days
    } else if (days) {
      data.hallId = service[0].id
      data.amount = priceHall * days + additionalServicesTotal
      delete data.children_number
      delete data.adults_number
    }
    data = {
      ...data,
      customerId: customer[0].id,
      userId: user.id,
      checkIn: new Date(dateIn.toDate().toString()).getTime(),
      checkOut: new Date(dateOut.toDate().toString()).getTime(),
    }
    console.log(data)
    const createReservation = async () => {
      console.log(data)
      const res = await axios
        .post('http://206.81.29.111:80/api/v1/reservation/add', data)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log('err creating reservation')
        })
    }

    createReservation()
    reset()
  }

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
    const getRooms = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/room/all')
        .then((res) => {
          console.log(res.data)
          setRooms(res.data.data)
        })
        .catch((err) => {
          console.log('err getting rooms')
        })
      const getHallServices = async () => {
        const res = await axios
          .get('http://206.81.29.111:80/api/v1/hall/services/all')
          .then((res) => {
            console.log(res.data)
            setHallServices(res.data.data)
          })
          .catch((err) => {
            console.log('err getting halls')
          })
        console.log('halls async to get halls')
      }
      getHallServices()
    }

    const getHalls = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/halls/all')
        .then((res) => {
          console.log(res.data)
          setHalls(res.data.data)
        })
        .catch((err) => {
          console.log('err getting halls')
        })
      console.log('halls async to get halls')
    }
    const getHallServices = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/hall/services/all')
        .then((res) => {
          console.log(res.data)
          //setHallServices()
        })
        .catch((err) => {
          console.log('error getting hall services', err.message)
        })
    }

    getHalls()
    getHallServices()
    getRooms()
    getCustomers()
  }, [roomClass])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h5>
                <strong> Create reservation </strong>
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
                      <div className=" col d-flex flex-row justify-content-between">
                        <CFormLabel htmlFor="customer" className="d-block">
                          {' '}
                          Customer{' '}
                        </CFormLabel>
                        {customer && customer.length === 0 ? (
                          <Link to="/customers/add" className="d-block">
                            Create customer
                          </Link>
                        ) : null}
                      </div>
                      <Typeahead
                        {...inputState}
                        id="basic-typeahead-single"
                        filterBy={['names']}
                        labelKey="names"
                        onChange={setCustomer}
                        options={customers}
                        placeholder="customer name ..."
                        selected={customer}
                      />
                    </CCol>

                    <CCol md={6}>
                      <CFormLabel htmlFor="type">Hall/Room</CFormLabel>
                      <CFormSelect
                        name="booking"
                        id="booking"
                        size="md"
                        className="mb-3"
                        {...register('booking_type')}
                      >
                        <option>---</option>
                        <option value="room">Room</option>
                        <option value="hall">Hall</option>
                      </CFormSelect>
                    </CCol>

                    <CCol md={6}>
                      <CFormLabel htmlFor="service"> Service </CFormLabel>

                      <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        filterBy={['name']}
                        onChange={setService}
                        options={all}
                        placeholder="service  ..."
                        selected={service}
                      />
                    </CCol>

                    <CCol md={6} className="d-flex flex-col ">
                      <div className="col-4 mx-2">
                        <CFormLabel htmlFor="checkIn" className="d-block">
                          Check-in
                        </CFormLabel>
                        <DatePicker
                          inputClass="form-control "
                          multiple={false}
                          sort
                          minDate={currentDate}
                          value={dateIn}
                          format={format}
                          onChange={setDateIn}
                          calendarPosition="bottom-center"
                          plugins={[<TimePicker />]}
                        />
                      </div>
                      <div className=" mx-2 col-4">
                        <CFormLabel htmlFor="checkIn" className="d-block">
                          Check-out
                        </CFormLabel>
                        <DatePicker
                          inputClass="form-control "
                          sort
                          minDate={currentDate}
                          multiple={false}
                          value={dateOut}
                          format={format}
                          onChange={setDateOut}
                          calendarPosition="bottom-center"
                          plugins={[<TimePicker />]}
                        />
                      </div>
                    </CCol>

                    {type && type === 'hall' ? (
                      <div className="row my-2 text-center">
                        <div>
                          <CFormLabel htmlFor="additionalServices">
                            Additional products and services
                          </CFormLabel>
                        </div>
                        <div>
                          <div className="d-flex flex-row justify-content-around my-2">
                            <div>
                              {hallServices && hallServices.length !== 0
                                ? hallServices.map((hallService, i) => (
                                    <div className="d-flex flex-row">
                                      <CFormCheck
                                        id="service 1"
                                        value={hallService.price}
                                        label={
                                          hallService.name +
                                          ' ' +
                                          hallService.price +
                                          ' $'
                                        }
                                        {...register(
                                          `additionalServices.${hallService.name}`,
                                        )}
                                      />
                                    </div>
                                  ))
                                : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {type && type === 'room' ? (
                      <div className="row my-2 text-center">
                        <div>
                          <CFormLabel htmlFor="additionalInfo">
                            Additional Info
                          </CFormLabel>
                        </div>
                        <div>
                          <div className="d-flex flex-row justify-content-around my-2">
                            <div>
                              <CFormInput
                                type="text"
                                id="adults_number"
                                label="Adults number"
                                {...register('adults_number')}
                              />
                            </div>
                            <div>
                              <CFormInput
                                type="text"
                                id="adults_number"
                                label="Children number"
                                {...register('children_number')}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="d-flex flex-row my-2 ">
                      <strong> Total </strong>
                      <p className="mx-2">
                        {type === 'room'
                          ? type === 'room' && service.length !== 0
                            ? Number(priceRoom) * days + additionalServicesTotal
                            : additionalServicesTotal
                          : ''}
                        {type === 'hall'
                          ? type === 'hall' && service.length !== 0
                            ? Number(priceHall) * days + additionalServicesTotal
                            : additionalServicesTotal
                          : ''}
                      </p>
                    </div>

                    <CCol md={6}>
                      <CFormLabel htmlFor="paymentMethod">Payment</CFormLabel>
                      <CFormInput
                        name="payment"
                        id="payment"
                        type="text"
                        size="md"
                        className="mb-3"
                        {...register('payment')}
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="paymentMethod">
                        Payment method
                      </CFormLabel>
                      <CFormSelect
                        name="paymentMethod"
                        id="paymentMethod"
                        size="md"
                        className="mb-3"
                        {...register('paymentMethod')}
                      >
                        <option value="Cash(Rwf)">Cash(Rwf)</option>
                        <option value="Cash(USD)">Cash(USD)</option>
                        <option value="Credit card(Rwf)">
                          Credit card(Rwf)
                        </option>
                        <option value="Credit card(USD)">
                          Credit card(USD)
                        </option>
                        <option value="Credit">Credit</option>
                        <option value="Cheque">Cheque</option>
                        <option value="other">Other</option>
                      </CFormSelect>
                    </CCol>
                  </CCardBody>
                </div>

                <CCol xs={12}>
                  <CButton
                    component="input"
                    type="submit"
                    className={`${
                      loggedInUser === 'controller' ||
                      customer.length === 0 ||
                      service === 0
                        ? 'disabled'
                        : ''
                    } `}
                    value="Book now"
                  />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ReservationAdd

// {
//   type === 'room' && service.length !== 0
//     ? Number(priceRoom) * days + additionalServicesTotal
//     : additionalServicesTotal
// }
// {
//   type === 'hall' && service.length !== 0
//     ? Number(priceHall) * days + additionalServicesTotal
//     : additionalServicesTotal
// }
