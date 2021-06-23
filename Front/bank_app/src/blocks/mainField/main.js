import React from 'react'
import {useHeader, useState} from "../header/header_provider";

function GetMain(){
    const menuOption = useHeader();

    return(menuOption.page)
}

export default GetMain