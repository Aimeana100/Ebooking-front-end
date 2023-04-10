// import {
//   CButton,
//   CCardBody,
//   CCol,
//   CForm,
//   CFormInput,
//   CFormLabel,
//   CCard,
//   CRow,
//   CCardHeader,
//   CFormSelect,
// } from '@coreui/react'
import React, { useEffect, useState } from 'react'
// import { Typeahead } from 'react-bootstrap-typeahead'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-hot-toast'
// import { Link } from 'react-router-dom'
// import instance from 'src/API/AxiosInstance'
// import PurchaseOrder from '../stock/PurchaseOrder'

// function ProductPackageAdd() {
//   const { register, getValues, reset, handleSubmit } = useForm()
//   const [category, setCategory] = useState([])
//   const [categories, setCategories] = useState([])
//   const [packageItems, setPackageItems] = useState([])
//   const [stockItems, setStockItems] = useState([])
//   const [item, setItem] = useState([])
//   const onAdd = (data) => {
//     data = { ...data, category: category.id, item: item[0].id }
//     setPackageItems([...packageItems, data])
//   }
//   const onSubmit = async (data) => {
//     await instance
//       .post('/packages/add', data)
//       .then((res) => {
//         toast.success('package created')
//       })
//       .catch((err) => {
//         toast.error(err.message)
//       })
//   }
//   useEffect(() => {
//     const getCategories = async () => {
//       await instance
//         .get('/products/category/all')
//         .then((res) => {
//           if (res.status === 200) {
//             setCategories(res.data.data)
//           }
//         })
//         .catch((err) => {
//           toast.error(err.message)
//         })
//     }
//     const getStockItems = async () => {
//       await instance
//         .get('/stock/item/all')
//         .then((res) => {
//           setStockItems(res.data.data)
//         })
//         .catch((err) => {
//           toast.error(err.message)
//         })
//     }
//     getCategories()
//     getStockItems()
//   }, [])
//   return (
//     <CCard>
//       <CCardHeader className="text-center lead fw-bold">
//         Create product package
//       </CCardHeader>
//       <CCardBody>
//         <CForm
//           name="roomClassAddFrm"
//           encType="multipart/form"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <CRow>
//             <CCol md={6}>
//               <CFormLabel htmlFor="price">Package name</CFormLabel>
//               <CFormInput
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="...package name"
//                 size="md"
//                 required
//                 {...register('name')}
//               />
//             </CCol>
//             <CCol md={6}>
//               <CFormLabel htmlFor="category">Package category</CFormLabel>
//               <Typeahead
//                 id="basic-typeahead-single"
//                 filterBy={['name']}
//                 labelKey="name"
//                 onChange={setCategory}
//                 options={categories}
//                 placeholder="category name..."
//                 selected={category}
//               />
//             </CCol>
//             <CCol md={6}>
//               <CFormLabel htmlFor="price"> Price / unit </CFormLabel>
//               <CFormInput
//                 type="number"
//                 name="price"
//                 id="price"
//                 placeholder="item price in RWF"
//                 size="md"
//                 required
//                 {...register('price')}
//               />
//             </CCol>
//             <CRow>
//               <p className="lead text-center my-2"> Package contents</p>
//               <CCol md={6}>
//                 <div className="d-flex justify-content-between">
//                   <CFormLabel htmlFor="name"> Item name </CFormLabel>
//                   {stockItems && stockItems.length === 0 ? (
//                     <Link to="/stock/item/add" className="d-block">
//                       Add item to list
//                     </Link>
//                   ) : null}
//                 </div>
//                 <Typeahead
//                   id="basic-typeahead-single"
//                   filterBy={['name']}
//                   labelKey="name"
//                   onChange={setItem}
//                   options={stockItems}
//                   placeholder="item name ..."
//                   selected={item}
//                 />
//               </CCol>

//               <CCol md={6}>
//                 <CFormLabel htmlFor="quantity"> Quantity </CFormLabel>
//                 <CFormInput
//                   type="number"
//                   name="quantity"
//                   id="quantity"
//                   placeholder="50  "
//                   size="md"
//                   required
//                   {...register('quantity')}
//                 />
//               </CCol>
//               <CCol md={6}>
//                 <CFormLabel htmlFor="unit"> Unit </CFormLabel>
//                 <CFormSelect
//                   name="unit"
//                   id="unit"
//                   size="md"
//                   className="mb-3"
//                   aria-label="item quantity unit"
//                   {...register('unit', { required: true })}
//                 >
//                   <option value="Kg"> Kg </option>
//                   <option value="l"> ltr </option>
//                   <option value="piece"> piece </option>
//                 </CFormSelect>
//               </CCol>
//             </CRow>
//           </CRow>
//           <CCol xs={12} className="d-flex justify-content-end">
//             <CButton
//               component="input"
//               value="Add item"
//               className="my-2"
//               onClick={() => {
//                 const data = getValues()
//                 return onAdd(data)
//               }}
//             />
//           </CCol>
//         </CForm>

//         <div>
//           <PurchaseOrder
//             requestItems={packageItems}
//             setRequestItems={setPackageItems}
//           />
//         </div>
//       </CCardBody>
//     </CCard>
//   )
// }

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormTextarea,
  CFormInput,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs,
  CTextarea,
  CFormLabel,
} from '@coreui/react'

const ProductPackageAdd = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Submit form data here
  }

  return (
    <CCard>
      <CCardHeader>
        <CNav variant="tabs" activeTab={activeTab}>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink
                onClick={() => setActiveTab(1)}
                disabled={activeTab !== 1}
              >
                Step 1
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                onClick={() => setActiveTab(2)}
                disabled={activeTab !== 2}
              >
                Step 2
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                onClick={() => setActiveTab(3)}
                disabled={activeTab !== 3}
              >
                Step 3
              </CNavLink>
            </CNavItem>
          </CNav>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CTabContent>
            <CTabPane show={activeTab === 1}>
              <CRow>
                <CCol md="3">
                  <CFormLabel htmlFor="name-input">Name</CFormLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CFormInput
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </CCol>
              </CRow>
            </CTabPane>
            <CTabPane show={activeTab === 2}>
              <CForm row>
                <CCol md="3">
                  <CFormLabel htmlFor="email-input">Email</CFormLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CFormInput
                    id="email-input"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </CCol>
              </CForm>
            </CTabPane>
            <CTabPane show={activeTab === 3}>
              <CForm row>
                <CCol md="3">
                  <CFormLabel htmlFor="message-input">Message</CFormLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CFormTextarea></CFormTextarea>
                </CCol>
              </CForm>
            </CTabPane>
          </CTabContent>
          <div className="mt-4">
            {activeTab !== 1 && (
              <CButton
                type="button"
                color="secondary"
                className="mr-3"
                onClick={() => setActiveTab(activeTab - 1)}
              >
                Previous
              </CButton>
            )}
            {activeTab !== 3 ? (
              <CButton type="submit" color="primary">
                Next
              </CButton>
            ) : (
              <CButton type="submit" color="success">
                Finish
              </CButton>
            )}
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default ProductPackageAdd
