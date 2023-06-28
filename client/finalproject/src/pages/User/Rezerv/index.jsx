import React from 'react'
import "./rezervation.scss"
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
function Rezerv() {
  return (
    <>
      <div className='title-reserv'>
        <div ><div className='line'></div></div>
        <p>Aşağıdakı formadan istifadə edərək otaqlarımızı onlayn və zəmanətli sifariş edə bilərsiniz.</p>
      </div>

      <div className='main-reserv'>
        <div className='second-reserv-div'>
          <p>Yerləşmə, tərketmə tarixlərini və qonaq sayını seçin</p>
        </div>

        <div>
          <Space direction="vertical" size={12}>
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker picker="year" />
          </Space>
        </div>
      </div>
    </>
  )
}

export default Rezerv