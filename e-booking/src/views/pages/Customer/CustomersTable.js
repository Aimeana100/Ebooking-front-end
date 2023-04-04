import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectItem } from 'src/redux/Select/selectionActions'

function CustomersTable(props) {
  const { customers } = props

  const dispatch = useDispatch()
  return customers && customers.length !== 0 ? (
    customers.map((customer, i) => (
      <CTableRow key={customer.id}>
        <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
        <CTableDataCell>{`${customer.names}`}</CTableDataCell>
        <CTableDataCell>{`${customer.identification}`}</CTableDataCell>
        <CTableDataCell>
          {' '}
          <Link
            to="/customers/info"
            onClick={() => {
              return dispatch(selectItem(customer))
            }}
          >
            view
          </Link>{' '}
        </CTableDataCell>
      </CTableRow>
    ))
  ) : (
    <CTableRow>
      <CTableDataCell colSpan={4}>No registered customer</CTableDataCell>
    </CTableRow>
  )
}

export default CustomersTable
