
import './App.css';
import React from 'react';

class App extends React.Component{
  // constructor(){
  //   super();
  // }
  render(){
    return (
      <>
        <div className='container py-5'>
          <div className='row'>
              <div className='col-12 text-center'>
                 <h1>Feeduiten App</h1>
                 <hr className='w-75 mx-auto'></hr>
                 <h2>Rp.1.500.00,-</h2>
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
                  <h3>Rp. 2.000.000,-</h3>
                  <span className='title-sm text-ungu'>50 </span><span className='title-sm'>Transaksi</span>
              </div>
            </div>  
            <div className='col-6'>
              <div className='card-wraper p-4'>
                  <div className='icon-wraper mb-1'>
                    <i class="bi bi-cash"></i>
                  </div>
                  <span className='title-sm '>Pengeluaran</span>
                  <h3>Rp. 2.000.000,-</h3>
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
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <div className='icon-wraper'>
                <i class="bi bi-wallet2"></i>
                </div>
                <div className='transaksi ms-3 d-flex flex-column'>
                  <h6>Menerima Gaji</h6>
                  <span className='title-sm'>1 Juli</span>
                </div>
              </div>
              <h5 className='money-in'>Rp1.000.000,-</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
