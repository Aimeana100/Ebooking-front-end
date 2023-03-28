import React, { useEffect, useState } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { selectRoom } from 'src/redux/Room/roomActions'

const Room = (prop) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState([])
  useEffect(() => {
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
    }
    getRooms()
  }, [])

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
                {rooms && rooms.length !== 0
                  ? rooms.map((room, i) => {
                      return (
                        <CTableRow key={room.id}>
                          <CTableHeaderCell scope="row">
                            {i + 1}
                          </CTableHeaderCell>
                          <CTableDataCell>
                            {' '}
                            {room.RoomClass.name}{' '}
                          </CTableDataCell>
                          <CTableDataCell>{`#${room.name}`}</CTableDataCell>
                          <CTableDataCell>
                            {' '}
                            <Link
                              to="/booking/reservations/add"
                              onClick={() => {
                                return dispatch(selectRoom(room))
                              }}
                            >
                              Book now
                            </Link>{' '}
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })
                  : null}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Room
