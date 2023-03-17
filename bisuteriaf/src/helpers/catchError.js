
const catchError = (error) => {

    if(error.graphQLErrors[0] && error.graphQLErrors[0]?.extensions?.myCustomExtensions){
        
        const codigoError = error.graphQLErrors[0].extensions?.myCustomExtensions;

        console.log("codigoError codigoError", codigoError);

        if(codigoError.status === 412 ||codigoError.status === 401){

            const message = codigoError.message;

            return message;
        }

        if(codigoError.status === 400){

            const message = "I try again, an unexpected error occurred.";

            return message;
        }
        
    } 

    return "I try again, an unexpected error occurred.***";
};

export default catchError;
