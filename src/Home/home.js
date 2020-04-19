import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import './style.css';

const GET_ALL_DATA= gql`
{
    productFaces{
        id
        title
        slug
    }
}
`
;

const Home = () =>{
    const {data} = useQuery(GET_ALL_DATA);
    if(data){
        const {productFaces}= data;
        var HomeMarkup =productFaces.map(({id, title, slug})=>{
            return (
                <li key={id}>
                <h3>{title}</h3>{slug}
                </li>
            )
        })
    }

    return(
        <div>
            <h1>Home</h1>
            <div>
                <ul>
                    {HomeMarkup}
                </ul>
            </div>
        </div>
    )
}

export default Home;