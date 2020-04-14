import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { IWidgetAddModalProps } from "./type_defs/IWidgetAddModalProps";

export const WidgetAddModal: React.FC<IWidgetAddModalProps> = ({ value, onSubmit, show, setShow }: IWidgetAddModalProps) => {
    let propVal = [...value]
    if (value.length == 0) {
        propVal = ['None']
    }

    const [selType, setSelType] = useState(propVal[0])

    const handleClose = () => setShow(false)

    const handleSaveChanges = () => {
        onSubmit(selType)
        setShow(false)
    }

    return <Modal show={show} onHide={handleClose} size={'sm'}>
        <Modal.Header closeButton>
            <Modal.Title>Select new widget type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <>
                <select value={selType} onChange={(ev) => { setSelType(ev.target.value) }}>
                    {propVal.map(v =>
                        <option value={v}>{v}</option>
                    )}
                </select>
            </>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
            <button className="btn btn-success" onClick={handleSaveChanges}>Add Widget</button>
        </Modal.Footer>
    </Modal>;
}