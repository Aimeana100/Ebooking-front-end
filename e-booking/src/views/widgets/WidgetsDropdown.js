import React, { useEffect, useState } from 'react'
import { CRow, CCol, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilHome, cilHouse } from '@coreui/icons'
import axios from 'axios'

const WidgetsDropdown = () => {
  const [rooms, setRooms] = useState([])
  const [halls, setHalls] = useState([])
  const [users, setUsers] = useState([])
  const [reservations, setReservations] = useState([])
  let [customers, setCustomers] = useState([])
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

    const getUsers = async () => {
      const res = await axios
        .get(`http://206.81.29.111:80/api/v1/users/all`)
        .then((res) => {
          setUsers(res.data.users)
        })
        .catch((err) => {
          console.log('error getting users', { errMessage: err.message })
        })
    }

    getUsers()

    getReservations()

    getHalls()
    getRooms()
    getCustomers()
  }, [])

  return (
    <CRow>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilHouse} size="xl" />}
          title="Rooms"
          value={rooms.length}
          color="primary"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilHome} size="xl" />}
          title="Halls"
          value={halls.length}
          color="warning"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilUser} size="xl" />}
          title="Customers"
          value={customers.length}
          color="info"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilUser} size="xl" />}
          title="System User"
          value={users.length}
          color="danger"
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
