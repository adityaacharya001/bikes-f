import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import config from '../config';

import './style.css';

const GET_ALL_PICS = gql`
{
  bikePics{
    Picture{
      url
    }
  }
}
`
;

const {serviceHost} = config;
console.log("ran");

const BikePic = ()=>{
    const {data}= useQuery(GET_ALL_PICS);
    console.log("data", data);
    if(data){
        var {bikePics: [{Picture: {url:url}}]} = data;
      console.log("bikes", `${serviceHost}${url}` );
        return(
          <div className="bikePicBody" >
                <img src={`${serviceHost}${url}`}></img>
            </div>
        )
    }

    return (
      <div>
            Picture
        </div>
    )
}

export default BikePic;
