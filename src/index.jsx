import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Book from './components/Book';
import Shelf from './components/Shelf';
import NotFound from './components/NotFound';

import books from './data/books';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />
            <Route path="about" component={ About } />
            <Route path="books" component={ Books }>
                <IndexRedirect to="/books/javascript" />
                <Route path=":topic">
                    <IndexRoute component={ Shelf } books={ books } />
                    <Route path=":slug" component={ Book } books={ books } />
                </Route>
            </Route>
            <Route path="*" component={ NotFound } />
        </Route>
    </Router>,
    document.getElementById('root'));