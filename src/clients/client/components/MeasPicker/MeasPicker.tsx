import React, { useEffect } from 'react'
import $ from 'jquery'
// make dataTable access jquery
$.DataTable = require('datatables.net')
/** 
 * data to be in the below format
[
["id", "name", "other stuff"],
[75, "hgfhgasd", "asdasd"],
...
]
 * This will be used to render a measurement picker with header as first row.
 * The header should mandatorily contain a label named "id", which will be used for the measurement id.
 * If header has a label "name", then it will be used as measurement name.
*/
export interface MeasPickerProps {
    data: string[][]
    onSelMeasChange: (v: { id: string, name: string }) => void
}

export const MeasPicker: React.FC<MeasPickerProps> = ({ data, onSelMeasChange: onSelectedMeasChange }) => {
    if (data == null || data.length < 2 || !data[0].includes('id')) {
        return <></>
    }
    let tablEl: any;
    useEffect(() => {
        const idIndex = data[0].indexOf('id')
        let nameIndex = data[0].indexOf('name')
        if (nameIndex == -1) {
            nameIndex = idIndex
        }

        tablEl.DataTable(
            {
                data: data.slice(1),
                columns: data[0].map(d => { return { title: d } })
            }
        )
        tablEl.children('tbody').on('click', 'tr', function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            else {
                tablEl.find('tr.selected').removeClass('selected');
                $(this).addClass('selected');
                const rowEls = $(this).children('td')
                const id = rowEls[idIndex].innerText
                const name = rowEls[nameIndex].innerText
                onSelectedMeasChange({ id, name })
            }
        });
        // returned function will be called on component unmount 
        return () => {
            tablEl.DataTable().destroy(true)
        }
    }, [data])
    return <>
        <table ref={el => tablEl = $(el)}></table>
    </>
}