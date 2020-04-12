import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { IDashboardSettingsEditorModalProps } from "./type_defs/IDashboardSettingsEditorModalProps";
import { IDashboardSettingsEditorProps } from "./type_defs/IDashboardSettingsEditorProps";
import { DashboardSettingsEditor } from "./DashboardSettingsEditor";

export const DashboardSettingsEditorModal: React.FC<IDashboardSettingsEditorModalProps> = ({ value, onSubmit, show, setShow }) => {
    const [dashSettings, setDashSettings] = useState(JSON.parse(JSON.stringify(value)) as IDashboardSettingsEditorProps['value'])

    const handleClose = () => setShow(false)

    const handleSaveChanges = () => {
        onSubmit(dashSettings)
        setShow(false)
    }

    const onChange: IDashboardSettingsEditorProps["onChange"] = (v: IDashboardSettingsEditorProps['value']) => {
        setDashSettings(v)
    }

    return <Modal show={show} onHide={handleClose} size={'lg'}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Dashboard Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <DashboardSettingsEditor value={dashSettings} onChange={onChange} />
        </Modal.Body>
        <Modal.Footer>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleSaveChanges}>Save Changes</button>
        </Modal.Footer>
    </Modal>;
}