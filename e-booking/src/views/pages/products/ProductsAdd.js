import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CRow,
  CFormCheck,
} from '@coreui/react';

const UserAdd = () => {
  const [formData, setformData] = useState({});
  const [roomClass, setroomClass] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'food', id: 5001209 },
    { name: 'drinks', id: 69560 },
  ]);
  const [drinkPackages, setDrinkPackages] = useState([
    { name: 'bottle', id: 500129 },
    { name: 'shot', id: 6560 },
    { name: 'glass', id: 6950 },
  ]);
  const [foodPackages, setFoodPackages] = useState([
    { name: 'plate', id: 50129 },
    { name: 'large-plate', id: 660 },
    { name: 'piece', id: 650 },
  ]);
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleFileChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.files[0] });
    console.log(formData);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    roomClass.push(formData);
  };

  useEffect(() => {
    console.log(roomClass);
  }, [roomClass]);

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2 className="text-center">
                <strong> Add Product </strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row"
                name="roomClassAddFrm"
                onSubmit={hundleSubmit}
                encType="multipart/form"
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="title"> Product title </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="category"> Product category </CFormLabel>
                  <CFormSelect
                    name="category"
                    id="category"
                    size="md"
                    className="mb-3"
                    aria-label="Room class"
                    onChange={handleChange}
                  >
                    <option>-- Select -- </option>
                    {categories && categories.length !== 0
                      ? categories.map((category) => (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        ))
                      : null}
                  </CFormSelect>
                </CCol>
                <CCol xs={12} className="text-center my-3">
                  <CButton
                    component="input"
                    type="submit"
                    value=" Save product details"
                  />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UserAdd;

//product description keep for later

//  <div className="mb-3">
//                   <CFormLabel htmlFor="description"> Description </CFormLabel>
//                   <CFormTextarea
//                     name="description"
//                     id="description"
//                     rows="3"
//                     onChange={handleChange}
//                   ></CFormTextarea>
//                 </div>

//  {formData && formData.category
//     ? formData.category === 'food'
//       ? foodPackages.map((itemPackage) => (
//           <CCol md={6} key={itemPackage.id}>
//             <CFormLabel htmlFor="package">
//               Product packages{' '}
//             </CFormLabel>

//             <CFormCheck
//               name={itemPackage.name}
//               id="check"
//               size="md"
//               label={itemPackage.name}
//               value={itemPackage.name}
//               className="mb-3"
//               aria-label={itemPackage.name}
//               onChange={handleChange}
//             />
//           </CCol>
//         ))
//       : drinkPackages.map((itemPackage) => (
//           <CCol md={6} key={itemPackage.id}>
//             <CFormLabel htmlFor="package">
//               Product packages{' '}
//             </CFormLabel>

//             <CFormCheck
//               name={itemPackage.name}
//               id="check"
//               size="md"
//               label={itemPackage.name}
//               value={itemPackage.name}
//               className="mb-3"
//               aria-label={itemPackage.name}
//               onChange={handleChange}
//             />
//           </CCol>
//         ))
//     : null}
//   <CCol md={6}>
//     <CFormLabel htmlFor="package"> Prices </CFormLabel>
//     <CCol xs="auto">
//       <CFormLabel htmlFor="price1" className="col-form-label">
//         price 1
//       </CFormLabel>
//     </CCol>
//     <CCol xs="auto">
//       <CFormInput
//         type="Number"
//         id="price1"
//         aria-describedby="passwordHelpInline"
//       />
//     </CCol>
//   </CCol>
//   <CCol xs={12} className="text-center my-3">
//     <CButton
//       component="input"
//       type="submit"
//       className="btn-danger"
//       value=" Save product "
//     />
//   </CCol>
