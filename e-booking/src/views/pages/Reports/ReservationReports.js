import React, { useState, useEffect, useRef } from 'react'
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
import { useForm } from 'react-hook-form'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import CalendarContainer from 'src/utils/CalendarContainer'
import {
  datesInRange,
  datesInRangeWithUnix,
  getUTCDateWithoutHours,
} from 'src/utils/functions'
import ReactToPrint from 'react-to-print'
import PrintTemplate1 from '../PrintTemplate1'
// import { useDispatch } from 'react-redux'
// import { selectItem } from 'src/redux/Select/selectionActions'

const ReservationsTable = (props, ref) => {
  const { reservations, filter_condition, filter_condition2, time, myDates } =
    props

  return (
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
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {reservations && reservations.length !== 0
            ? reservations.map((reserv, i) => {
                if (filter_condition === 'All' && filter_condition2 === 'All') {
                  if (time && time === 'all-time') {
                    return (
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
                      </CTableRow>
                    )
                  } else if (
                    myDates &&
                    myDates.length !== 0 &&
                    myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
                  ) {
                    return (
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
                      </CTableRow>
                    )
                  }
                } else if (
                  filter_condition2 === 'All' &&
                  filter_condition !== 'All'
                ) {
                  if (time && time === 'all-time') {
                    return reserv.status === filter_condition ? (
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
                      </CTableRow>
                    ) : null
                  } else if (
                    myDates &&
                    myDates.length !== 0 &&
                    myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
                  ) {
                    return reserv.status === filter_condition ? (
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
                      </CTableRow>
                    ) : null
                  }
                } else if (filter_condition2 === 'room') {
                  if (time && time === 'all-time') {
                    return (reserv.status === filter_condition ||
                      filter_condition === 'All') &&
                      reserv.roomId ? (
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
                      </CTableRow>
                    ) : null
                  } else if (
                    myDates &&
                    myDates.length !== 0 &&
                    myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
                  ) {
                    return (reserv.status === filter_condition ||
                      filter_condition === 'All') &&
                      reserv.roomId ? (
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
                      </CTableRow>
                    ) : null
                  }
                } else {
                  if (time && time === 'all-time') {
                    return (reserv.status === filter_condition ||
                      filter_condition === 'All') &&
                      reserv.hallId ? (
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
                      </CTableRow>
                    ) : null
                  } else if (
                    myDates &&
                    myDates.length !== 0 &&
                    myDates.includes(getUTCDateWithoutHours(reserv.createdAt))
                  ) {
                    return (reserv.status === filter_condition ||
                      filter_condition === 'All') &&
                      reserv.hallId ? (
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
                      </CTableRow>
                    ) : null
                  }
                }
              })
            : null}
        </CTableBody>
      </CTable>
    </CCardBody>
  )
}

const Reservation = React.forwardRef((props, ref) => {
  const componentRef = useRef()
  const { register, handleSubmit, watch, reset } = useForm()
  const filter_condition = watch('filter_condition') || 'All'
  const filter_condition2 = watch('filter_condition2') || 'All'
  const time = watch('time') || 'all-time'
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  let myDates = datesInRangeWithUnix(startDate, endDate)
  console.log(time)
  console.log(myDates)
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  const [reservations, setReservations] = useState([])
  useEffect(() => {
    const getReservations = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/reservation/all')
        .then((res) => {
          setReservations(res.data.data)
          console.log(new Date(res.data.data[0].checkIn).getUTCDate())
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
          <CCardHeader className="">
            <div className="d-flex justify-content-between">
              <div className="col text-center">
                <h4>
                  <strong>Reservations report </strong>
                </h4>
              </div>
              <div>
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn-ghost-primary">Print</button>
                  )}
                  content={() => ref || componentRef.current}
                />
              </div>
            </div>

            <div className="col row py-2 ">
              <div className="form-control d-flex flex-row py-2 my-2 align align-content-center">
                <label className="col-2 d-flex align-items-center ">
                  Filter by{' '}
                </label>
                <form className="col d-flex flex-wrap gap-2">
                  <div className="col-3">
                    <label className="text-center py-1">Status </label>
                    <select
                      className="form-select form-select-sm col"
                      aria-label="Default select example"
                      defaultValue={'All'}
                      {...register('filter_condition')}
                    >
                      <option value="All">All</option>
                      <option value="in progress">In progress</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="canceled">Canceled</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <label className="text-center py-1">Service </label>
                    <select
                      className="form-select form-select-sm col"
                      aria-label="Default select example"
                      defaultValue={'All'}
                      {...register('filter_condition2')}
                    >
                      <option value="All">All</option>
                      <option value="room">Room</option>
                      <option value="hall">Hall</option>
                    </select>
                  </div>
                  <div className="col d-flex gap-2 flex-wrap">
                    <div className="col">
                      <label className="text-center py-1">Time</label>
                      <select
                        className="form-select form-select-sm col"
                        aria-label="Default select example"
                        defaultValue={'all-time'}
                        {...register('time')}
                      >
                        <option value="all-time">All-time</option>
                        <option value="date">Date</option>
                      </select>
                    </div>
                    {time && time === 'date' ? (
                      <div className="col d-flex align-items-end ">
                        <DatePicker
                          className="form-control col px-2"
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="dd/MM/yy"
                          selectsRange
                          portalId="root-portal"
                          popperPlacement="bottom-end"
                          popperContainer={CalendarContainer}
                          placeholderText="Select date range"
                        />
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </CCardHeader>

          <div style={{ display: 'none' }}>
            <PrintTemplate1 ref={ref || componentRef}>
              <ReservationsTable
                reservations={reservations}
                filter_condition={filter_condition}
                filter_condition2={filter_condition2}
                time={time}
                myDates={myDates}
              />
            </PrintTemplate1>
          </div>
          <ReservationsTable
            reservations={reservations}
            filter_condition={filter_condition}
            filter_condition2={filter_condition2}
            time={time}
            myDates={myDates}
          />
        </CCard>
      </CCol>
    </CRow>
  )
})

export default Reservation
