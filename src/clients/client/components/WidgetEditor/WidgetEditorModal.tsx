import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { IWidgetEditorModalProps } from "./type_defs/IWidgetEditorModalProps";
import { WidgetEditor } from "./WidgetEditor";
import { IWidgetConfig } from "../../type_defs/dashboard/IWidgetConfig";
import { IWidgetConfigEditorProps } from "./type_defs/IWidgetConfigEditorProps";

export const WidgetEditorModal: React.FC<IWidgetEditorModalProps> = ({ value, onSubmit, measTypes, show, setShow }: IWidgetEditorModalProps) => {
    const [widgetConfig, setWidgetConfig] = useState(JSON.parse(JSON.stringify(value)) as IWidgetConfig)

    const handleClose = () => setShow(false)

    const handleSaveChanges = () => {
        onSubmit(widgetConfig)
        setShow(false)
    }

    const onChange: IWidgetConfigEditorProps["onChange"] = (v: IWidgetConfig) => {
        setWidgetConfig(v)
    }

    return <Modal show={show} onHide={handleClose} size={'xl'}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Widget Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <WidgetEditor value={widgetConfig} onChange={onChange} measTypes={measTypes} />
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
            <button className="btn btn-success" onClick={handleSaveChanges}>Save Changes</button>
        </Modal.Footer>
    </Modal>;
}