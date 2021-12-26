import React from "react";

export default class Product extends React.Component {
    constructor (obj) {
        super();
        this.id = obj.id;
        this.name = obj.name;
        this.price = obj.price;
        this.color = obj.color;
        this.img = obj.img;
    }
}