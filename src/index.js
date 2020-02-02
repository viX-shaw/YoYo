import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Background from './chad-montano-MqT0asuoIcU-unsplash.jpg'

import ChatBot from 'react-simple-chatbot';

const steps = [
    {
        id: '1',
        message: 'Welcome to YoYo Pizza',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Can I help you with any of these',
        trigger: '3',
    },
    {
        id: '3',
        options: [
            { value: 1, label: 'Order Pizza', trigger: '4' },
            { value: 2, label: 'Check Order Status', trigger: '10' },
          ],    
    },
    {
        id: '4',
        message: 'What you want? We have...',
        trigger: '5',
    },
    {
        id: '5',
        options: [
            { value:1, label: 'Margherita', trigger: '6'},
            { value:2, label: 'Marinara', trigger: '6'},
        ],
    },
    {
        id: '6',
        message: 'Your Order wll be ready in 20 mins',
        trigger: '3'
    },
    {
        id: '10',
        message: 'Enter you Order ID',
        trigger: '11'
    },
    {
        id :'11',
        user: true,
        trigger: '12'
    },
    {
        id: '12',
        message: "You have been served, LMAO that's funny",
        trigger: '3'
    }
];

ReactDOM.render(
    <div>
        <img src={ Background } style = {{height: "100%", width: "100%"}}/>
        <ChatBot steps={steps}
            floating={true}
            floatingStyle={{
                left: 'calc(100% - 80px)',
                right: 'initial',
                transformOrigin: 'bottom center',
                borderRadius: 0,
            }}
            style={{
                left: 'calc(80% - 125px)',
            }} />
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
