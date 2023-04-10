
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();

    this.state ={
      sisaUang : 0,
      persenUang : 0,
      uangMasuk : 0,
      uangKeluar : 0,
      transaksiIn : 0,
      transaksiOut :0,
      summary : [
        {
          deskripsi : 'Menerima Gaji',
          tanggal : '1 April 2023',
          nominal : 1000000,
          category : 'IN'
        },
        {
          deskripsi : 'Beli Rokok',
          tanggal : '3 April 2023',
          nominal : 30000,
          category : 'OUT'
        },
      ]
    }
  }
  render(){
    return (
      <>
        <div className='container py-5'>
          <div className='row'>
              <div className='col-12 text-center'>
                 <h1>Feeduiten App</h1>
                 <hr className='w-75 mx-auto'></hr>
                 <h2>Rp. {this.state.sisaUang},- </h2>
                 <span className='title-md'>Sisa uang yang tersisa 75%</span>
              </div>
          </div>
          <div className='row mt-3'>           
            <div className='col-6'>
              <div className='card-wraper p-4'>
                  <div className='icon-wraper mb-1'>
                    <i class="bi bi-wallet2"></i>
                  </div>
                  <span className='title-sm '>Pemasukan</span>
                  <h3>Rp. {this.state.uangMasuk},-</h3>
                  <span className='title-sm text-ungu'>50 </span><span className='title-sm'>Transaksi</span>
              </div>
            </div>  
            <div className='col-6'>
              <div className='card-wraper p-4'>
                  <div className='icon-wraper mb-1'>
                    <i class="bi bi-cash"></i>
                  </div>
                  <span className='title-sm '>Pengeluaran</span>
                  <h3>Rp.{this.state.uangKeluar},-</h3>
                  <span className='title-sm text-ungu'>50 </span><span className='title-sm'>Transaksi</span>
              </div>
              
            </div>  
            
          </div>
          
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <h4>Ringkasan Transaksi</h4>
              <div className='wrapper-button d-flex'>
                <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan  <i class="bi bi-plus-square-fill"></i></button>
                <button className='button btn-pink px-3 py-2'>Pengeluaran <i class="bi bi-dash-circle-fill"></i></button>
              </div>
            </div>

          </div>
          <div className='row mt-4'>
            {this.state.summary.map((sum) => {
              return(
                <div className='mb-3 col-12 d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className={sum.category === 'IN' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
                    <i class={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi-bag-dash'}></i>
                    </div>
                    <div className='transaksi ms-3 d-flex flex-column'>
                      <h6>{sum.deskripsi}</h6>
                      <span className='title-sm'>{sum.tanggal}</span>
                    </div>
                  </div>
                  <h5 className={sum.category === 'IN' ? 'money-in' : 'money-out'}>Rp.{sum.nominal},-</h5>
                </div>
              )
            })}
            
          </div>
        </div>
      </>
    );
  }
}

export default App;
