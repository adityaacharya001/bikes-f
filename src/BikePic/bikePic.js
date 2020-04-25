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

const BikePic = ()=>{
    const {data}= useQuery(GET_ALL_PICS);

    if(data){
        var {bikePics: [{Picture: {url:url}}]} = data
        return(
            <div>
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
