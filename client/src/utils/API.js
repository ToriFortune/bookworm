import openSocket from 'socket.io-client';
const socket = openSocket('https://toribookworm.herokuapp.com/');
const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

export default {
    searchbyKeywords: function(keywords) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}&key=${process.env.REACT_APP_BOOKS_KEY}`);
    },
    searchbyKeywordsAndAuthor: function(keywords, author) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}+inauthor:${author}&key=${process.env.REACT_APP_BOOKS_KEY}`);
    },
    getBooks: function() {
        return axios.get("/api/books");
    },
    addBook: function(data) {
        return axios.post("/api/books", data);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    notifyUser: function(cb) {
        socket.on('timer', timestamp => cb(null, timestamp));
        socket.emit('notifyUser', 100);
    }
}