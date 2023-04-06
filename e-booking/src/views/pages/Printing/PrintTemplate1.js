import { CCard, CCardBody, CImage, CRow } from '@coreui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../../assets/images/olympic_hotel_logo.png'
const PrintTemplate1 = React.forwardRef((props, ref) => {
  const { title } = props
  const { firstName, lastName } = useSelector((state) => state.auth.user)
  const role = useSelector((state) => state.auth.role)
  return (
    <CCard ref={ref}>
      <div className="m-3 p-3">
        <div className="d-flex flex-col my-3">
          <p className="col">
            Done on{' '}
            {new Date().toLocaleDateString() +
              ' at  ' +
              new Date().toLocaleTimeString()}
          </p>
          <p className="col">eBooking</p>
        </div>

        <CRow className="col d-flex flex-row">
          <div className="col-4">
            <CImage src={logo} fluid alt="olympic hotel logo" />
          </div>
          <div className="col">
            <h3 className="fw-bolder text-capitalize">OLYMPIC HOTEL</h3>
            <p>TEL: +250 789 677 479/ +250 783 103 500</p>
            <p>E-mail:info@olympichotel.rw</p>
            <p>Website: www.olympichotel.rw</p>
            <p>TIN/VAT: 102556009</p>
          </div>
        </CRow>

        {title ? <h2 className="text-center my-3">{title}</h2> : null}

        <CCardBody>{props.children}</CCardBody>
        <div className="mt-2">
          <p>
            Printed by <span className="fw-bold text-capitalize"> {role}</span>:{' '}
            {firstName} {lastName}
          </p>
        </div>
      </div>
    </CCard>
  )
})

export default PrintTemplate1
