import Table from 'react-bootstrap/Table';
import Loader from "./Loading";

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};


function TableComponent({ data }) {
    if (data.length === 0) {
        return <div><Loader /></div>
    };

    const getDate = (date) => {
        const dateTime = new Date(date);
        return dateTime.toLocaleDateString('en-US', options)
    }

    const getStatus = (status)=>{
        return status === 'PS'? 'Phising' : 'Benign'
    };
return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>URL</th>
                    <th>STATUS</th>
                    <th>TIME</th>
                </tr>
            </thead>
            <tbody>
                {data.length && data.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.url}</td>
                        <td>{getStatus(item.status)}</td>
                        <td>{getDate(item.created_at)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    </div>
);
}

export default TableComponent;