import React from 'react'
import ContactBox from './ContactBox'

export default function ContactItems() {
    return (
        <div className="md:flex grid grid-cols-6 relative md:gap-6 gap-4">
            <div className="md:transform -rotate-6 translate-y-4 transform-none col-span-2">
                <ContactBox type="Github" />
            </div>
            <div className="md:transform -rotate-3 translate-y-1 transform-none col-span-2">
                <ContactBox type="LinkedIn" />
            </div>
            <div className="transform col-span-2">
                <ContactBox type="About" />
            </div>
            <div className="col-span-1 md:hidden visible" />
            <div className="md:transform rotate-3 md:translate-y-1 transform-none col-span-2">
                <ContactBox type="Resume" />
            </div>
            <div className="md:transform rotate-6 md:translate-y-4 transform-none col-span-2">
                <ContactBox type="Email" />
            </div>
            <div className="col-span-1 md:hidden visible" />
        </div>
    )
}
