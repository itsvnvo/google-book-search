import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Form from "../../components/Form";
import Listitems from "../../components/ListItems";
import List from "../../components/List";
import API from "../../utils/API";



class SearchBooks extends Component {

    state = {
        search: "",
        books: [],
    };

    handleInputChange = event => {

        const value = event.target.value;

        this.setState({
            search: value,
            message: ""
        });
    };

    loadBooks = event => {
        event.preventDefault();
        if (this.state.search === "") {
            this.setState({ message: "Please fill out the field" })
        } else {
            API.search(this.state.search)
                .then(res => {
                    this.setState({
                        books: res.data.items,
                        search: "",
                    })
                })
                .then(res => {
                    API.getBooks()
                        .then(res => {
                            res.data.forEach(item => {
                                for (let j = 0; j < this.state.books.length; j++) {
                                    if (item.title === this.state.books[j].volumeInfo.title) {
                                        let newBookArray = [...this.state.books]
                                        newBookArray.splice([j], 1)
                                        this.setState({ books: newBookArray })
                                    }
                                }
                            })
                        })
                })
                .catch(err => console.log(err));
        }
    }

    render() {

        return (
            <div>
                <Jumbotron>
                    {"Google Books Search"}
                </Jumbotron>
                <Form
                    query={this.state.search}
                    handleInputChange={this.handleInputChange}
                    loadBooks={this.loadBooks}
                    message={this.state.message}
                >
                </Form>
                <List>
                    {this.state.books.map((book, i) => {
                        return (
                            <Listitems
                                key={i}
                                bookId={i}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks === undefined ? this.state.imageLink : book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.previewLink}
                            />
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default SearchBooks;