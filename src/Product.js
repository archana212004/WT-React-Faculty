import { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

export default function Product() {
  const initialProducts = [
    {
      id: 1,
      name: "Camera",
      Price: 25000,
      imgUrl:
        "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
      Des: "Camera stock photos, pictures and royalty-free images from iStock.",
    },
    {
      id: 2,
      name: "Mobile",
      Price: 29000,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s",
      Des: "Our easy-to-search collection includes stock imagery of phone cases",
    },
    {
      id: 3,
      name: "Laptop",
      Price: 25000,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGbK124YYWfS6_Rdjicw9MBJmWveXQCrK6A&s",
      Des: "Find over 100+ of the best free laptop computer images.",
    },
    {
      id: 4,
      name: "Tablet",
      Price: 25000,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9chia0CaaHStGWJxp3CbdfqJOiCO99IOFaA&s",
      Des: "Find over 100+ of the best free tablet images.",
    },
    {
      id: 5,
      name: "Ear buds",
      Price: 2000,
      imgUrl:
        "https://www.boat-lifestyle.com/cdn/shop/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
      Des: "Search from thousands of royalty-free Ear Bud stock images and video for your next project",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [newPro, setNewPro] = useState({
    id: "",
    name: "",
    Price: "",
    imgUrl: "",
    Des: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setNewPro({
      ...newPro,
      [name]: value,
    });
  };

  const addProduct = () => {
    if (!newPro.name || !newPro.Price || !newPro.imgUrl || !newPro.Des) {
      alert("Please fill in all fields.");
      return;
    }

    const newProduct = {
      ...newPro,
      id: products.length ? products[products.length - 1].id + 1 : 1,
    };

    setProducts([...products, newProduct]);

    // Reset the form
    setNewPro({ id: "", name: "", Price: "", imgUrl: "", Des: "" });
  };

  return (
    <Container className="py-5">
      {/* Add Product Form */}
      <div
        className="bg-white p-4 rounded mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-4">Add Product</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newPro.name}
              onChange={inputChange}
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="text"
              name="Price"
              value={newPro.Price}
              onChange={inputChange}
              placeholder="Enter Price"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL:</Form.Label>
            <Form.Control
              type="text"
              name="imgUrl"
              value={newPro.imgUrl}
              onChange={inputChange}
              placeholder="Enter Image URL"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="Des"
              value={newPro.Des}
              onChange={inputChange}
              placeholder="Enter Description"
            />
          </Form.Group>

          <Button variant="primary" className="w-100" onClick={addProduct}>
            Add Product
          </Button>
        </Form>
      </div>

      {/* Product List */}
      <h2 className="text-center my-5">Product List</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={product.imgUrl}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-danger fw-bold">
                  Price: ₹{product.Price}
                </Card.Text>
                <Card.Text>
                  <strong>Description:</strong> {product.Des}
                </Card.Text>
                <Button variant="outline-primary">View Product</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
