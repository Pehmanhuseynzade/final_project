// import React from 'react'
// import { useState } from 'react';
// import "./rezervation.scss"
// // import { DatePicker } from 'antd';
// // import { PlusOutlined } from '@ant-design/icons';
// // import { Button, Divider, Input, Select, Space } from 'antd';
// // import { useRef, useState } from 'react';
// import {Link} from "react-router-dom"
// // const { RangePicker } = DatePicker;
// // let index = 0;

// function Rezerv() {
//   const [checkIn, setcheckIn] = useState('');
//   // const [items, setItems] = useState(['1 Nəfər', '2 Nəfər']);
//   // const [name, setName] = useState('');
//   // const inputRef = useRef(null);
//   // const onNameChange = (event) => {
//   //   setName(event.target.value);
//   // };
//   // const addItem = (e) => {
//   //   e.preventDefault();
//   //   setItems([...items, name || `${index++}`]);
//   //   setName('');
//   //   setTimeout(() => {
//   //     inputRef.current?.focus();
//   //   }, 0);
//   // };
//   return (
//     <>
//       <div className='title-reserv'>
//         <div ><div className='line'></div></div>
//         <p>Aşağıdakı formadan istifadə edərək otaqlarımızı onlayn və zəmanətli sifariş edə bilərsiniz.</p>
//       </div>

//       <div className='main-reserv'>
//         <div className='second-reserv-div'>
//           <p className='title-sent'>Yerləşmə, tərketmə tarixlərini və qonaq sayını seçin</p>
//           <div className='in-out'>
//             <p className='checkin'>Yerləşmə tarixi</p>
//             <p className='checkout'>Çıxış tarixi</p>
//           </div>
//          <form >
//          <div className='date'>
//           <label htmlFor="checkin">Yerləşmə tarixi</label>
//           <input type="date" name="checkin"  />
//           <label htmlFor="checkout">Çıxış tarixi</label>
//           <input type="date" name="checkout" />
//             {/* <Space direction="vertical" size={12}>
//               <RangePicker className='space'  />
//             </Space> */}
//           </div>

//           <div className='select-option'>
//             {/* <Select
//               className='space-select'
//               style={{
//                 width: 500,

//               }}
//               placeholder="Qonaq sayı əlavə etmək"
//               dropdownRender={(menu) => (
//                 <>
//                   {menu}
//                   <Divider
//                     style={{
//                       margin: '8px 0',
//                     }}
//                   />
//                   <Space
//                   // style={{
//                   //   padding: '0 8px 4px',
//                   // }}
//                   >
//                     <Input
//                       placeholder="Əlavə edin"
//                       ref={inputRef}
//                       value={name}
//                       onChange={onNameChange}
//                     />
//                     <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
//                       Əlavə edin
//                     </Button>
//                   </Space>
//                 </>
//               )}
//               options={items.map((item) => ({
//                 label: item,
//                 value: item,
//               }))}
//             /> */}

//             <input type="text" />
//           </div>
//          </form>
//           <div className='find-btn'><Link to='/reserveroom'><button>Tapmaq</button></Link></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Rezerv