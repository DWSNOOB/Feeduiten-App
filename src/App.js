
import './App.css';
import React from 'react';

class App extends React.Component{
  // constructor(){
  //   super();
  // }
  render(){
    return (
      <>
        <div className='container'>
          <div className='row'>
              <div className='col-12'>
                 <h1>Feeduiten App</h1>
                 <hr></hr>
                 <h4>Rp.1.500.00,-</h4>
                 <span className='title'>Sisa uang yang tersisa 75%</span>
              </div>
          </div>
          <div className='row'>
              <div className='col-6'>
                 <div className='icon-wrapper'>
                   <i class="bi bi-wallet2"></i>
                 </div>
                 <span className='title'>Pemasukan</span>
                 <h3>Rp. 2.000.000,-</h3>
                 <span className='title text-ungu'>50</span><span className='title'>Transaksi</span>
              </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <h2>Ringkasan Transaksi</h2>
              <div className='wrapper-button d-flex'>
                <button>Pemasukan  <i class="bi bi-plus-square-fill"></i></button>
                <button>Pengeluaran <i class="bi bi-dash-circle-fill"></i></button>
              </div>
            </div>

          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <div className='icon-wrapper'>
                <i class="bi bi-wallet2"></i>
                </div>
                <div className='transaksi'>
                  <h6>Menerima Gaji</h6>
                  <span className='title'>1 Juli</span>
                </div>
              </div>
              <h5 className='money'>Rp1.000.000,-</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
