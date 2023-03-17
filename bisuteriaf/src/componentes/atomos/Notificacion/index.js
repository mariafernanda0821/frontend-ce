import Swal from 'sweetalert2';



const availableTypes = {
    warning: 'warning',
    success: 'success',
    error: 'error',
    info: 'info',
};



const Notification = async (information) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:  2000,
        timerProgressBar: true,
        
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    })

    await Toast.fire({
        icon: availableTypes[information?.type] || '',
        title: information?.message || '',
       // message: information?.message || ''
    });


    return;

}

export default Notification;



// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-right',
//     iconColor: 'white',
//     customClass: {
//         popup: 'colored-toast'
//     },
//     showConfirmButton: false,
//     timer: 15000,
//     timerProgressBar: true
// })