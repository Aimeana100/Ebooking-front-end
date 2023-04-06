import {
  CCard,
  CCardBody,
  CImage,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const ReceiveVaucherView = (props, ref) => {
  const { title } = props
  let { receivedItems, purchaseOrderItems } = props
  const vaucher = useSelector((state) => state.selection.selected)
  const role = useSelector((state) => state.auth.role)
  console.log('vaucher view', vaucher)
  // console.log('received Items', receivedItems)
  // console.log('purchase order Items', purchaseOrderItems)

  const receiveTotal =
    vaucher && vaucher.StockReceiveVoucherDetails !== 0
      ? vaucher.StockReceiveVoucherDetails.reduce(
          (acc, b) => acc + Number(b.receivedQuantity) * Number(b.unitPrice),
          0,
        ).toLocaleString()
      : 0

  const purchaseTotal =
    vaucher &&
    vaucher.StockPurchaseOrder &&
    vaucher.StockPurchaseOrder.StockPurchaseOrderDetails !== 0
      ? vaucher.StockPurchaseOrder['StockPurchaseOrderDetails']
          .reduce(
            (acc, b) => acc + Number(b.requestQuantity) * Number(b.unitPrice),
            0,
          )
          .toLocaleString()
      : 0
  return (
    <CCard>
      <div className="m-3 p-3">
        <h2 className="text-center my-3">
          Receive stock vaucher of{' '}
          {vaucher && vaucher.date
            ? new Date(vaucher.date).toLocaleDateString()
            : null}
        </h2>

        <CCardBody className="d-flex justify-content-around">
          <div className="col">
            <div className="d-flex">
              <p className="fw-bolder">Purchase order</p>
            </div>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Qty</CTableHeaderCell>
                  <CTableHeaderCell scope="col">P.U</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T.P</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {vaucher.StockPurchaseOrder.StockPurchaseOrderDetails !== 0
                  ? vaucher.StockPurchaseOrder['StockPurchaseOrderDetails'].map(
                      (order, i) => (
                        <CTableRow key={i}>
                          <CTableDataCell>
                            {order.StockItem.name}
                          </CTableDataCell>
                          <CTableDataCell></CTableDataCell>
                          <CTableDataCell>
                            {order.requestQuantity}
                          </CTableDataCell>
                          <CTableDataCell>{order.unitPrice}</CTableDataCell>
                          <CTableDataCell>
                            {Number(order.requestQuantity) *
                              Number(order.unitPrice)}
                          </CTableDataCell>
                        </CTableRow>
                      ),
                    )
                  : null}

                <CTableRow>
                  <CTableHeaderCell colSpan={4}>Total</CTableHeaderCell>
                  <CTableDataCell>{purchaseTotal}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>
          <div className="col">
            <div className="d-flex">
              <p className="fw-bolder">Received </p>
            </div>

            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Qty</CTableHeaderCell>
                  <CTableHeaderCell scope="col">P.U</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T.P</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {vaucher && vaucher.StockReceiveVoucherDetails.length !== 0
                  ? vaucher.StockReceiveVoucherDetails.map((received, i) => (
                      <CTableRow key={i}>
                        <CTableDataCell>
                          {received.StockItem.name}
                        </CTableDataCell>
                        <CTableDataCell></CTableDataCell>
                        <CTableDataCell>
                          {received.receivedQuantity}
                        </CTableDataCell>
                        <CTableDataCell>{received.unitPrice}</CTableDataCell>
                        <CTableDataCell>
                          {Number(received.receivedQuantity) *
                            Number(received.unitPrice)}
                        </CTableDataCell>
                      </CTableRow>
                    ))
                  : null}
                <CTableRow>
                  <CTableHeaderCell colSpan={4}>Total</CTableHeaderCell>
                  <CTableHeaderCell>{receiveTotal}</CTableHeaderCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>
        </CCardBody>
      </div>
    </CCard>
  )
}

export default ReceiveVaucherView
