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
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const ProductAdd = () => {
  const { register, handleSubmit, watch, reset } = useForm();

  const [categories, setCategories] = useState([
    { name: 'food', id: 5001209 },
    { name: 'drinks', id: 69560 },
  ]);
  const [drinkPackages, setDrinkPackages] = useState({
    id: '69560',
    packs: [
      { name: 'bottle', id: 500129 },
      { name: 'shot', id: 6560 },
      { name: 'glass', id: 6950 },
    ],
  });
  const [foodPackages, setFoodPackages] = useState({
    id: '5001209',
    packs: [
      { name: 'plate', id: 50129 },
      { name: 'large-plate', id: 660 },
      { name: 'piece', id: 650 },
    ],
  });
  const role = useSelector((state) => state.auth.user.role);
  const packages = [drinkPackages, foodPackages];
  const category = watch('category', '---');
  const packs = watch('packs', '---');
  const getAllPacks = [];
  // const handleChange = (e) => {
  //   setformData({ ...formData, [e.target.name]: e.target.value });
  //   console.log(formData);
  // };
  // const handleFileChange = (e) => {
  //   setformData({ ...formData, [e.target.name]: e.target.files[0] });
  //   console.log(formData);
  // };

  const onSubmit = (data) => {
    console.log(data);
    //roomClass.push(formData);
  };
  const onManagerSubmit = (data) => {
    console.log(data, { role });
  };
  // let m =
  //   category !== '---' && category !== '-- Select -- '
  //     ? packages.map((packageSet) =>
  //         packageSet.id === category && packs && packs !== '---'
  //           ? packageSet.packs.map((pack) =>
  //               packs.map((item) => {
  //                 if (pack.id == item) {
  //                   console.log('now now ' + pack.name);
  //                 }
  //                 return pack.id == item ? item : null;
  //               })
  //             )
  //           : null
  //       )
  //     : null;
  console.log(category);
  console.log(packs);
  // console.log('this is ', m);
  // useEffect(() => {
  //   console.log(roomClass);
  // }, [roomClass]);

  if (role === 'admin') {
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
                  encType="multipart/form"
                  onSubmit={handleSubmit(onSubmit)}
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
                      {...register('name')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="category">
                      {' '}
                      Product category{' '}
                    </CFormLabel>
                    <CFormSelect
                      name="category"
                      id="category"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      {...register('category', { required: true })}
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

                  <CCol>
                    {category && category !== '-- Select -- '
                      ? packages.map((packageSet) =>
                          packageSet.id === category ? (
                            <CCol md={6}>
                              <CFormLabel htmlFor="package">
                                Product packages{' '}
                              </CFormLabel>
                              {packageSet.packs.map((item) => (
                                <CFormCheck
                                  name={item.name}
                                  id="check"
                                  size="md"
                                  label={item.name}
                                  value={item.id}
                                  className="mb-3"
                                  aria-label={item.name}
                                  {...register('packs', { required: true })}
                                />
                              ))}
                            </CCol>
                          ) : null
                        )
                      : null}

                    {category && category !== '---'
                      ? packages.map((packageSet) =>
                          packageSet.id === category && packs && packs !== '---'
                            ? packageSet.packs.map((pack) =>
                                packs.map((item) =>
                                  pack.id == item ? (
                                    <div>
                                      <CCol md={6}>
                                        <CFormLabel
                                          htmlFor="price1"
                                          className="col-form-label"
                                        >
                                          Set price for
                                          <span className="strong">
                                            {' '}
                                            {pack.name}
                                          </span>{' '}
                                          package
                                        </CFormLabel>
                                      </CCol>
                                      <CCol md="6">
                                        <CFormInput
                                          type="Number"
                                          min="1"
                                          id="price1"
                                          aria-describedby={pack.name}
                                          {...register(`package_${pack.id}`, {
                                            required: true,
                                          })}
                                        />
                                      </CCol>
                                    </div>
                                  ) : null
                                )
                              )
                            : null
                        )
                      : null}
                    {packs && packs !== '---' ? (
                      <CCol xs={12} className="text-center my-3">
                        <CButton
                          component="input"
                          type="submit"
                          value=" Save product"
                        />
                      </CCol>
                    ) : null}
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  } else {
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
                  encType="multipart/form"
                  onSubmit={handleSubmit(onManagerSubmit)}
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
                      {...register('name')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="category">
                      {' '}
                      Product category{' '}
                    </CFormLabel>
                    <CFormSelect
                      name="category"
                      id="category"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      {...register('category', { required: true })}
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
  }
};

export default ProductAdd;

//product description keep for later

//  <div className="mb-3">
//                   <CFormLabel htmlFor="description"> Description </CFormLabel>
//                   <CFormTextarea
//                     name="description"
//                     id="description"
//                     rows="3"
//
//                   ></CFormTextarea>
//                 </div>

//  {formData && formData.category
//     ? formData.category === 'food'
//       ? foodPackages.map((itemPackage) => (

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
//
//             />
//           </CCol>
//         ))
//     : null}
//   <CCol md={6}>
//     <CFormLabel htmlFor="package"> Prices </CFormLabel>

//</CCol>
//   <CCol xs={12} className="text-center my-3">
//     <CButton
//       component="input"
//       type="submit"
//       className="btn-danger"
//       value=" Save product "
//     />
//   </CCol>

// {packs && packs.length !== 0
//                   ? packs.filter((pack) =>

//                   )
//                   : null}
