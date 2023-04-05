import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CRow,
  CCollapse,
} from '@coreui/react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import ReactToPrint from 'react-to-print'
import PrintTemplate1 from '../Printing/PrintTemplate1'
import PurchaseOrder from '../stock/PurchaseOrder'
import instance from 'src/API/AxiosInstance'
import StockOrder from './StockOrder'

const RequestBarItem = React.forwardRef((props, ref) => {
  const componentRef = useRef()
  const { register, handleSubmit, getValues, reset } = useForm()
  let [stockItems, setStockItems] = useState([])
  const [visible, setVisible] = useState(false)
  let [items, setItems] = useState(stockItems)
  const [item, setItem] = useState(null)
  const [requestItems, setRequestItems] = useState([])
  const clearPurchaseOrder = () => {
    setRequestItems([])
  }

  const createPurchaseOrder = async (data) => {
    const res = await instance
      .post('/purchase/order/add', data)
      .then((res) => {
        toast.success('purchase order created')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  console.log(item)
  const onAdd = (data) => {
    data = {
      ...data,
      name: item[0].name,
      id: item[0].id,
      price: item[0].price,
      itemValueId: item[0].itemValueId,
    }
    setRequestItems([...requestItems, data])
    reset()
  }
  const submitRequest = () => {
    const data = { data: requestItems }
    console.log(data)
    createPurchaseOrder(data)
  }
  useEffect(() => {
    const getStockItems = async () => {
      const res = await instance
        .get('/stock/item/balance')
        .then((res) => {
          console.log(res)
          const items = res.data.data.map((item) => ({
            name: item.StockItem.name,
            quantity: item.quantity,
            price: item.price,
            itemValueId: item.id,
          }))
          setStockItems(items)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }

    getStockItems()
  }, [])
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <div className="d-flex justify-content-between">
                <h3>
                  <strong>Request to stock </strong>
                </h3>
                <CButton
                  component="input"
                  value="Add items to list "
                  onClick={() => {
                    return setVisible(!visible)
                  }}
                />

                {requestItems && requestItems.length !== 0 ? (
                  <CButton
                    className="btn-danger"
                    component="input"
                    value="Clear table"
                    onClick={() => {
                      return clearPurchaseOrder()
                    }}
                  />
                ) : null}
                {requestItems && requestItems.length !== 0 ? (
                  <ReactToPrint
                    trigger={() => (
                      <button className="btn btn-ghost-primary">Print</button>
                    )}
                    content={() => ref || componentRef.current}
                  />
                ) : null}
              </div>
            </CCardHeader>
            <CCollapse visible={visible}>
              <CCardBody>
                <CForm name="roomClassAddFrm" encType="multipart/form">
                  <CRow>
                    <CCol md={6}>
                      <CFormLabel htmlFor="unit"> Bar </CFormLabel>
                      <CFormSelect
                        name="unit"
                        id="unit"
                        size="md"
                        className="mb-3"
                        aria-label="item quantity unit"
                        {...register('petitStock', { required: true })}
                      >
                        <option value="main-bar"> Main Bar</option>
                        <option value="swimming-pool-bar">
                          {' '}
                          Swimming Pool Bar{' '}
                        </option>
                      </CFormSelect>
                    </CCol>

                    <CCol md={6}>
                      <div className="d-flex justify-content-between">
                        <CFormLabel htmlFor="name"> Item name </CFormLabel>
                      </div>
                      <Typeahead
                        id="basic-typeahead-single"
                        filterBy={['name']}
                        labelKey="name"
                        onChange={setItem}
                        options={stockItems}
                        placeholder="item name ..."
                        selected={item}
                      />
                    </CCol>

                    <CCol md={6}>
                      <div className="d-flex justify-content-between">
                        <CFormLabel htmlFor="quantity"> Quantity </CFormLabel>
                        {item && item.length !== 0 ? (
                          <p>Available quantity : {item[0].quantity}</p>
                        ) : null}
                      </div>
                      <CFormInput
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="50  "
                        size="md"
                        required
                        {...register('quantity')}
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="unit"> Unit </CFormLabel>
                      <CFormSelect
                        name="unit"
                        id="unit"
                        size="md"
                        className="mb-3"
                        aria-label="item quantity unit"
                        {...register('unit', { required: true })}
                      >
                        <option value="Kg"> Kg </option>
                        <option value="l"> ltr </option>
                        <option value="piece"> piece </option>
                      </CFormSelect>
                    </CCol>
                  </CRow>
                  <CCol xs={12}>
                    <CButton
                      component="input"
                      value="Add item"
                      onClick={() => {
                        const data = getValues()
                        return onAdd(data)
                      }}
                    />
                  </CCol>
                </CForm>
              </CCardBody>
            </CCollapse>
            <div style={{ display: 'none' }}>
              <PrintTemplate1 ref={ref || componentRef}>
                <StockOrder requestItems={requestItems} />
              </PrintTemplate1>
            </div>
            <StockOrder requestItems={requestItems} />
            {requestItems && requestItems.length !== 0 ? (
              <CCol xs={12}>
                <CButton
                  component="input"
                  value="Submit request"
                  onClick={() => {
                    submitRequest()
                    setVisible(false)
                  }}
                />
              </CCol>
            ) : null}
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
})

export default RequestBarItem
