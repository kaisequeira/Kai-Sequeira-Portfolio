import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from '../_Global/Label'
import React from 'react'
import { faLocationDot, faSchool } from '@fortawesome/free-solid-svg-icons'

export default function Title() {
    return (
        <div className="flex flex-col md:gap-8 gap-6">
            <h1 className="md:text-center text-left text-wrap">
                Nice to meet you, I&apos;m Kai
            </h1>
            <h4 className="md:text-center text-left text-wrap p-0">
                Full stack software engineering student @ Redback Racing
            </h4>
            <div className="flex flex-row md:justify-center justify-start gap-4 flex-wrap">
                <Label title="Institution" note="UNSW" unresponsive>
                    <FontAwesomeIcon
                        className="text-content font-semibold"
                        icon={faSchool}
                    />
                </Label>
                <Label title="Location" note="Sydney" unresponsive>
                    <FontAwesomeIcon
                        className="text-content font-semibold"
                        icon={faLocationDot}
                    />
                </Label>
            </div>
        </div>
    )
}
