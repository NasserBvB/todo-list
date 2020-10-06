import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'


export default ({ children }) => (
    <div className="flex justify-center bg-gray-200">
        {children}
    </div>
)
