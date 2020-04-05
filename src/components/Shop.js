import React from 'react';
import { Link } from "react-router-dom";
import { ListGroupItem, ListGroup } from 'react-bootstrap';

function Shop() {

    const books = ["The Lord of the Rings", "The Alchemist", "The Little Prince", "Harry Potter",
        "The master and Margarita", "Alice's Adventures in Wonderland", "The Hobbit", "And Then There Were None",
        "Dream of the Red Chamber", "The Lion, The Witch, and the Wardrobe", "She", "Pinocchio",
        "The Da Vinci Code", "The Catcher in the Rye", "One Hundred Years of Solitude"]


    return <div className="shopContent">
                <p>This page displays a list of the top selling books that you can purchase. This list has been mounted.<br /><br /><br /></p>
                    <ListGroup>
                        <ListGroupItem>{books[0]}</ListGroupItem>
                        <ListGroupItem>{books[1]}</ListGroupItem>
                        <ListGroupItem>{books[2]}</ListGroupItem>
                        <ListGroupItem>{books[3]}</ListGroupItem>
                        <ListGroupItem>{books[4]}</ListGroupItem>
                        <ListGroupItem>{books[5]}</ListGroupItem>
                        <ListGroupItem>{books[6]}</ListGroupItem>
                        <ListGroupItem>{books[7]}</ListGroupItem>
                        <ListGroupItem>{books[8]}</ListGroupItem>
                        <ListGroupItem>{books[9]}</ListGroupItem>
                        <ListGroupItem>{books[10]}</ListGroupItem>
                        <ListGroupItem>{books[11]}</ListGroupItem>
                        <ListGroupItem>{books[12]}</ListGroupItem>
                        <ListGroupItem>{books[13]}</ListGroupItem>
                        <ListGroupItem>{books[14]}</ListGroupItem>
                    </ListGroup>
            </div>
}

export default Shop;