import {
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

const OrdersTable = (props) => {
  const { orderItems } = props
  return (
    <div>
      <CCardBody>
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col"> Item </CTableHeaderCell>
              <CTableHeaderCell scope="col"> Qty </CTableHeaderCell>
              <CTableHeaderCell scope="col"> Price/unit </CTableHeaderCell>
              <CTableHeaderCell scope="col"> Total </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {orderItems && orderItems.length !== 0 ? (
              <React.Fragment>
                {orderItems.map((item, index) => {
                  return (
                    <CTableRow key={index + 1}>
                      <CTableHeaderCell scope="row">
                        {' '}
                        {index + 1}{' '}
                      </CTableHeaderCell>
                      <CTableDataCell> {item.productName} </CTableDataCell>
                      <CTableDataCell>
                        {' '}
                        {item.quantity} {item.packName}
                        {item.quantity > 1 ? 's' : null}
                      </CTableDataCell>
                      <CTableDataCell> {item.unitPrice} </CTableDataCell>
                      <CTableDataCell>
                        {item.total.toLocaleString()}
                      </CTableDataCell>
                    </CTableRow>
                  )
                })}
                <CTableRow key={orderItems.length}>
                  <CTableHeaderCell scope="row"></CTableHeaderCell>
                  <CTableHeaderCell> Total </CTableHeaderCell>
                  <CTableDataCell />
                  <CTableDataCell />
                  <CTableDataCell>
                    {orderItems
                      .reduce(
                        (acc, b) =>
                          acc + Number(b.unitPrice) * Number(b.quantity),
                        0,
                      )
                      .toLocaleString()}
                  </CTableDataCell>
                </CTableRow>
              </React.Fragment>
            ) : (
              <div className="text-center"> No items added</div>
            )}
          </CTableBody>
        </CTable>
      </CCardBody>
    </div>
  )
}

export default OrdersTable
