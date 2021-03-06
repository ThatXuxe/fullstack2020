import patientData from "../data/patients"
import {PublicPatient, Patient, NewPatient, PatientSansSSN, Entry} from "../types";
import {v1 as uuid} from "uuid"

const getPatientsWithoutSSN = (): PublicPatient[] => {
    return patientData.map(({id, name, gender, occupation, dateOfBirth}) => ({
        id, name, gender, occupation, dateOfBirth
    }))
}

const addPatient = (patient: NewPatient): Patient => {
    let newPatient = {
        id: uuid(),
        entries: [],
        ...patient
    }
    patientData.push(newPatient)
    return newPatient
}
const getPatientById = (id: any): PatientSansSSN | undefined => {
    if (typeof id === 'string' || id instanceof String)
        return patientData.find(patient => patient.id === id);
    throw Error('id is incorrct')
}
const addEntry = (id: string, entry: Entry): Entry => {
    let patient = patientData.find(p => p.id === id);
    if (!patient) throw Error('Patient doesnt exist');
    patient.entries.push(entry);
    patientData.forEach(p => p.id === id ? patient : p);
    return entry;
}

export default {
    getPatientsWithoutSSN, addPatient, getPatientById,
    addEntry
}
