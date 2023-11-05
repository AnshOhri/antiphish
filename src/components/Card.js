import Card from 'react-bootstrap/Card';

function CardComponent({ title, data, variant }) {
    return (
        <>
            <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {data}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardComponent;