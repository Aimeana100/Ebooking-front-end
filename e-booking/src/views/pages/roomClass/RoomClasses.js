import React, { useEffect, useState } from 'react'
import {
  CButton,
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
import { useDispatch } from 'react-redux'
import { selectRoom } from 'src/redux/Room/roomActions'
import instance from 'src/API/AxiosInstance'
import { toast } from 'react-hot-toast'
import { selectItem } from 'src/redux/Select/selectionActions'

const RoomClasses = (prop) => {
  const dispatch = useDispatch()
  const [roomClasses, setRoomClasses] = useState([])
  const deleteRoomClass = async (roomClassId) => {
    const res = await instance
      .delete(`/roomclass/delete/${roomClassId}`)
      .then(() => {
        toast.success('Room Class deleted')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  useEffect(() => {
    const getClasses = async () => {
      const res = await instance
        .get('/roomclass/all')
        .then((res) => {
          setRoomClasses(res.data.data)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getClasses()
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
                  <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Action </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {roomClasses && roomClasses.length !== 0
                  ? roomClasses.map((roomClass, i) => {
                      return (
                        <CTableRow key={roomClass.id}>
                          <CTableHeaderCell scope="row">
                            {i + 1}
                          </CTableHeaderCell>
                          <CTableDataCell> {roomClass.name} </CTableDataCell>
                          <CTableDataCell>{`${roomClass.price} USD`}</CTableDataCell>
                          <CTableDataCell>
                            {' '}
                            <Link
                              type="link"
                              to="/booking/rooms/class/edit"
                              className=" btn btn-warning text-text-decoration-none"
                              onClick={() => {
                                return dispatch(selectItem(roomClass))
                              }}
                            >
                              update
                            </Link>{' '}
                            <CButton
                              className="text-capitalize btn-danger"
                              to="/booking/reservations/add"
                              onClick={() => deleteRoomClass(roomClass.id)}
                            >
                              delete
                            </CButton>{' '}
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

export default RoomClasses
