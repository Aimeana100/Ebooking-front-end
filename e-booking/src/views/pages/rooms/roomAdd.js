import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
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
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { addRoom } from 'src/redux/Room/roomActions'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
const FormControl = () => {
  let loggedInUser = useSelector((state) => state.auth.user.Role.name)
  const { register, handleSubmit, watch, reset } = useForm()
  const [roomClasses, setRoomClasses] = useState([])
  const [formState, setFormState] = useState({})
  const [rooms, setRooms] = useState([])
  const dispatch = useDispatch()
  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const onSubmit = async (data) => {
    const res = await axios
      .post('http://206.81.29.111:80/api/v1/room/add', data)
      .then((res) => {
        console.log(res.data)
        toast.success('Room created')
      })
      .catch((err) => {
        console.log('err creating room room', err.message)
        toast.error('Room  create failed')
      })
    reset()
  }
  useEffect(() => {
    const getRoomClasses = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/roomclass/all')
        .then((res) => {
          console.log(res.data)
          setRoomClasses(res.data.data)
        })
        .catch((err) => {
          console.log('err getting room classes')
        })
    }
    getRoomClasses()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Add new room </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CForm name="roomAddFrm" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <CFormLabel htmlFor="roomNumber"> Room number </CFormLabel>
                <CFormInput
                  type="text"
                  name="roomNumber"
                  id="roomNumber"
                  placeholder="V10MT"
                  size="md"
                  {...register('name')}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="roomClassId"> Room Class </CFormLabel>
                <CFormSelect
                  name="roomClassId"
                  id="roomClassId"
                  size="md"
                  className="mb-3"
                  aria-label="Room class"
                  {...register('roomClassId', { required: true })}
                >
                  <option>-- Select -- </option>
                  {roomClasses && roomClasses.length !== 0
                    ? roomClasses.map((e) => {
                        return (
                          <option value={e.id} key={e.id}>
                            {' '}
                            {e.name}{' '}
                          </option>
                        )
                      })
                    : null}
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="description"> Description </CFormLabel>
                <CFormTextarea
                  name="description"
                  id="description"
                  rows="3"
                  {...register('description')}
                ></CFormTextarea>
              </div>
              <CCol xs={12}>
                <CButton
                  component="input"
                  className={`${
                    loggedInUser === 'controller' ? 'disabled' : ''
                  }`}
                  type="submit"
                  value="Add room"
                />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
