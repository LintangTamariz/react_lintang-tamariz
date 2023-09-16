import React, {useState} from 'react'

const Jumbotron = () => {
    const [language, setLanguage] = useState('en');

    const toogleLanguage = () => {
    
        if (language === 'en') {
            setLanguage('id')
        } else {
            setLanguage('en');
        }
    }





  return (
    <div className='container text-center mt-5 pt-5'>
        <h1>Create Product</h1>
        <p className="mx-auto text-center col-sm-6 col-6">
            {language === 'en'
            ? 'Below is an example form built entirely with Bootstraps form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'
            : 'Di bawah ini adalah contoh formulir yang dibangun sepenuhnya dengan kontrol formulir Bootstrap. Setiap kelompok formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.'
            }
            </p>
        <button className='btn btn-dark' onClick={toogleLanguage}>
            {language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
        </button>
    </div>
  )
}

export default Jumbotron
