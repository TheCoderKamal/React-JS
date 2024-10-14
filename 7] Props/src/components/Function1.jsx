import React, { useState } from 'react'
import Function2 from './Function2'

export default function Function1() {

    let data =
        [
            {
                "name": "Jeanette Carroll",
                "email": "fbeltran@example.net",
                "address": "Unit 1980 Box 6521\nDPO AP 95257",
                "phone_number": "398-494-3133",
                "job": "Geologist, wellsite"
            },
            {
                "name": "Philip Hernandez",
                "email": "crawfordkristen@example.net",
                "address": "2475 Charles Stream\nNorth Jeffrey, AS 36834",
                "phone_number": "+1-909-870-6638",
                "job": "Teaching laboratory technician"
            },
            {
                "name": "Jessica Garcia",
                "email": "denise72@example.com",
                "address": "USS Parker\nFPO AE 88716",
                "phone_number": "(210)744-9292x87042",
                "job": "Environmental consultant"
            },
            {
                "name": "Peggy Maldonado",
                "email": "brandimurphy@example.net",
                "address": "64181 Smith Forge Apt. 286\nSouth Victor, MI 49293",
                "phone_number": "001-496-684-6550x871",
                "job": "Technical brewer"
            },
            {
                "name": "Denise Dawson",
                "email": "jonathan52@example.org",
                "address": "547 Rhonda Corner Apt. 484\nUnderwoodstad, RI 84941",
                "phone_number": "001-474-504-3616x30051",
                "job": "Hospital doctor"
            },
            {
                "name": "Maria Knight",
                "email": "rodriguezrebecca@example.com",
                "address": "7025 Chang Shoal\nNorth James, WA 55629",
                "phone_number": "861-605-9817x4318",
                "job": "Scientist, clinical (histocompatibility and immunogenetics)"
            },
            {
                "name": "Sandra Fowler",
                "email": "nicholas82@example.net",
                "address": "USCGC Mcgee\nFPO AP 05359",
                "phone_number": "001-295-313-4745",
                "job": "Logistics and distribution manager"
            },
            {
                "name": "Tara Powers",
                "email": "rlin@example.com",
                "address": "844 Lopez Lake Apt. 001\nNoahside, WV 67220",
                "phone_number": "+1-207-247-6838x09800",
                "job": "Advertising account executive"
            },
            {
                "name": "Molly Davenport",
                "email": "cervantesjeffrey@example.org",
                "address": "511 Solis Plaza Apt. 827\nKellyhaven, VI 28272",
                "phone_number": "(351)558-4729x3027",
                "job": "Production designer, theatre/television/film"
            },
            {
                "name": "Nathan Fisher",
                "email": "andrew44@example.org",
                "address": "35450 Holly Harbors\nWest James, TN 27649",
                "phone_number": "001-259-208-7546x52831",
                "job": "Chemist, analytical"
            }
        ]
        
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Function 1 Part</h1>
            <Function2 data={data}/>
        </div>
    )
}
