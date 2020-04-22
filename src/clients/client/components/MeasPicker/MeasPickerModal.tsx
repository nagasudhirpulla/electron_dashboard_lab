import React, { useState } from "react";
import { MeasPickerProps, MeasPicker } from "./MeasPicker";
import Modal from 'react-bootstrap/Modal'

export interface MeasPickerModalProps {
    data: string[][]
    onMeasSelected: (v: { id: string, name: string }) => void
    show: boolean
    setShow: (v: boolean) => void
}

export const MeasPickerModal: React.FC<MeasPickerModalProps> = ({ data, show, setShow, onMeasSelected }: MeasPickerModalProps) => {
    const [selectedMeas, setSelectedMeas] = useState({ id: 'null', name: 'null' })

    const handleClose = () => setShow(false)

    const handleSaveChanges = () => {
        onMeasSelected(selectedMeas)
        setShow(false)
    }

    const onSelMeasChange: MeasPickerProps["onSelMeasChange"] = (v) => {
        setSelectedMeas(v)
    }

    return <Modal show={show} onHide={handleClose} size={'xl'}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Widget Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MeasPicker data={data} onSelMeasChange={onSelMeasChange}/>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
            <button className="btn btn-success" onClick={handleSaveChanges}>Select Measurement</button>
        </Modal.Footer>
    </Modal>;
}