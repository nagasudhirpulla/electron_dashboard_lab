import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { IWidgetEditorModalProps } from "./type_defs/IWidgetEditorModalProps";
import { WidgetEditor } from "./WidgetEditor";
import { IWidgetConfig } from "../../type_defs/dashboard/IWidgetConfig";
import { IWidgetConfigEditorProps } from "./type_defs/IWidgetConfigEditorProps";

export const WidgetEditorModal: React.FC<IWidgetEditorModalProps> = ({ value, onSubmit, show, setShow }: IWidgetEditorModalProps) => {
    const [widgetConfig, setWidgetConfig] = useState({ ...value })

    const handleClose = () => setShow(false)

    const handleSaveChanges = () => {
        onSubmit(widgetConfig)
        setShow(false)
    }

    const onChange: IWidgetConfigEditorProps["onChange"] = (v: IWidgetConfig) => {
        setWidgetConfig(v)
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Widget Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <WidgetEditor value={widgetConfig} onChange={onChange} />
        </Modal.Body>
        <Modal.Footer>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleSaveChanges}>Save Changes</button>
        </Modal.Footer>
    </Modal>;
}