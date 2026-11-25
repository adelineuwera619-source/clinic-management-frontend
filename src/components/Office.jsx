
import axios from 'axios'
import { useEffect, useState } from 'react'

function Office() {
    const [roomNumber, setRoomNumber] = useState('')
    const [offices, setOffices] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const API_URL = 'http://localhost:8082/api/offices'
    const filteredOffices = offices.filter(office =>
    office.roomNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
)

    async function getOffices() {
        try {
            const response = await axios.get(API_URL)
            setOffices(response.data)
        } catch (error) {
            console.error('Error loading offices:', error)
            alert('Could not load offices')
        }
    }

    useEffect(() => {
        getOffices()
    }, [])

    async function saveOffice() {
        if (!roomNumber.trim()) {
            alert('Please enter a room number')
            return
        }

        try {
            await axios.post(API_URL, {
                roomNumber: roomNumber.trim()
            })

            alert('Office saved successfully!')
            setRoomNumber('')
            getOffices()
        } catch (error) {
            console.error('Error saving office:', error)
            alert(
                'Office not saved: ' +
                (error.response?.data?.message || error.message)
            )
        }
    }

    async function deleteOffice(id) {
        try {
            await axios.delete(`${API_URL}/${id}`)
            alert('Office deleted successfully!')
            getOffices()
        } catch (error) {
            console.error('Error deleting office:', error)
            alert('Office not deleted: ' + error.message)
        }
    }

    return (
        <div>
            <h1>OFFICE MANAGEMENT</h1>

            <label>Room Number:</label>
            <input
                type="text"
                value={roomNumber}
                onChange={e => setRoomNumber(e.target.value)}
                placeholder="Enter room number"
            />

            <button onClick={saveOffice}>SAVE OFFICE</button>

            <h2>Saved Offices</h2>

<input
    type="text"
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    placeholder="Search by room number..."
/>

            {filteredOffices.length === 0 ? (
                <p>No matching offices found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Room Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredOffices.map(office => (
                            <tr key={office.id}>
                                <td>{office.id}</td>
                                <td>{office.roomNumber}</td>
                                <td>
                                    <button
                                        onClick={() => deleteOffice(office.id)}
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Office
