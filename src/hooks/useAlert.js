import React, { useState } from 'react'

const useAlert = () => {

    const [alert, setAlert] = useState({show: false, text: '', type:'danger'})

    const showAlert = (show, type='danger') => setAlert({
        show: true,
        text,
        type
    })
    const hideAlert = (show, type='danger') => setAlert({
        show: false,
        text: '',
        type: 'danger'
    })

    // Note that hooks do not return JSX, they only return an array or object
  return {alert, showAlert, hideAlert}
}

export default useAlert
