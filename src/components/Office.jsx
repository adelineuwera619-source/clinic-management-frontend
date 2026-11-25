import axios from 'axios'
import { useEffect, useState } from 'react'
import LibraryButton from './LibraryButton'

function Office() {
    const [officeName, setOfficeName] = useState("");
    const [officeNumber, setOfficeNumber] = useState("");

    async function getOffices() {
        try {
            const response = await axios.get('http://localhost:8082/api/offices/offices')
            setOffices(response.data)
        } catch (error) {
            alert("could not load offices")
        }
    }

    useEffect(() => {
        getOffices()
    }, [])

    async function saveOffice() {
        try {
            const response = await axios.post('http://localhost:8082/api/offices/save', {
                name: officeName,
                officeNumber: Number(officeNumber),
            })
            if (response.status == 200) {
                alert("The office is saved successfully")
                getOffices()
            } else {
                alert("office not saved")
            }
        } catch (error) {
            alert("office not saved: " + (error.response ? error.response.data : error.message))
        }
    }

    async function deleteOffice(offNumber) {
        try {
            const response = await axios.delete('http://localhost:8082/api/offices/deleteByNumber/' + offNumber)
            if (response.status == 200) {
                alert("The office is deleted successfully")
                getOffices()
            } else {
                alert("office not deleted")
            }
        } catch (error) {
            alert("office not deleted: " + (error.response ? error.response.data : error.message))
        }
    }

    return (
        <div>
            <h1>SAVE OFFICE</h1>
            <label>Office Name:</label>
            <input type="text" onChange={e => setOfficeName(e.target.value)} />
            <label>Office Number:</label>
            <input type="number" onChange={e => setOfficeNumber(e.target.value)} />
            <LibraryButton buttonLabel="SAVE" onClickButton={saveOffice} />

        </div>
    )
}

export default Office
