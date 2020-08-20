import React from 'react';
 
const Error = ({statusCode, message}) => {
    return (
       <div>
          <p>Error {statusCode}: Something has gone wrong! :(</p>
          <p>{message}</p>
       </div>
    );
}
 
export default Error;