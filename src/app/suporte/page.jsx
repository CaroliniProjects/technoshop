import React from 'react'
import './index.scss'
import { Search, HourglassBottom } from '@mui/icons-material'
import ButtonStyle from '@/components/Atom/Button'

function suporte() {
    return (
        <>
            <div className='suporte'>
                Página de Suporte
                <p className='suporte__teste'>Teste</p>
            </div>
            <ButtonStyle />
            <input type='text' />
            <Search />
            <HourglassBottom />
        </>
    )
}

export default suporte