import React from 'react'
import ContactBox from './ContactBox'

export default function ContactItems() {
    return (
        <div className="md:flex grid grid-cols-3 relative md:gap-8 gap-4">
            <div className="md:transform -rotate-6 translate-y-4 transform-none">
                <ContactBox type="Github" />
            </div>
            <div className="md:transform -rotate-3 translate-y-1 transform-none">
                <ContactBox type="LinkedIn" />
            </div>
            <div className="transform">
                <ContactBox type="Play" />
            </div>
            <div className="md:transform rotate-3 md:translate-y-1 transform-none">
                <ContactBox type="Resume" />
            </div>
            <div className="md:transform rotate-6 md:translate-y-4 transform-none">
                <ContactBox type="Email" />
            </div>
        </div>
    )
}
