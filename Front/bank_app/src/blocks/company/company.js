import React from 'react'
import { useHeader, useState } from "../header/header_provider";
import style from "./company.module.css"

function Company(props) {
    const menuOption = useHeader();

    return (
        <div className={style.wrapper}>
             <h1>Анализ финансового состояния предприятия</h1>
        </div>
    )
}

export default Company