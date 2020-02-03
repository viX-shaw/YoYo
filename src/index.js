import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Background from './chad-montano-MqT0asuoIcU-unsplash.jpg'
import MultiselectOptions from './Components/MultiselectOptions'
import Review from './Components/Review'
import ValidateName from './Components/ValidateName'
import OrderStatus from './Components/OrderStatus'

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
        trigger: 'pizza',
    },
    {
        id: 'pizza',
        options: [
            { value:'Margherita', label: 'Margherita', trigger: 'toppings'},
            { value:'Marinara', label: 'Marinara', trigger: 'toppings'},
        ],
    },
    {
        id: 'toppings',
        component: <MultiselectOptions options ={['Onions', 'Cheese', 'Peppers', 'Olives', 'Pineapple', 'Chicken', 'Tofu']}/>,
        waitAction: true,
        asMessage: true,
        trigger:'6'
    },
    {
        id: '6',
        message: `Your Order will be ready in 20 mins`,
        trigger: '7'
    },
    {
        id: '7',
        message:'May I get your Name?',
        trigger: 'name'
    },
    {
        id: 'name',
        user: true,
        trigger: 'validatename'
    },
    {
        id: "validatename",
        component: <ValidateName />,
        waitAction: true,
        asMessage: true,
        trigger: '8'
    },
    {
        id: '8',
        message: "And your Phone No.",
        trigger: "pno"
    },
    {
        id:"pno",
        user:true,
        validator: (value) => {
            let pno = /^\d{10}$/;
            if(value.match(pno)) {
                return true
            }
            return "Please provide a valid Phone No."
        },
        trigger: 'review'
    },
    {
        id:"review",
        component: <Review />,
        asMessage: true,
        waitAction: true,
        trigger: 'gen_id'
    },
    {
        id:"gen_id",
        message: "Your Order ID is {previousValue}",
        trigger:'3'
    },
    {
        id: '10',
        message: 'Enter you Order ID',
        trigger: 'orderID'
    },
    {
        id :'orderID',
        user: true,
        trigger: '12'
    },
    {
        id: '12',
        component: <OrderStatus />,
        asMessage: true,
        waitAction: true,
        trigger: '3'
    }
];

ReactDOM.render(
    <div style = {{ position:"absolute",top:0,bottom:0, left:0,right:0, backgroundImage: `url(${Background})`}}>
        <h1 style={{color: "white", paddingLeft: 20, paddingTop:20, fontSize: 60}}>yoYO Pizza</h1>
        <h3 style={{color: "white", paddingLeft: 20}}>Pizza that tastes as good as it looks.</h3>
        <ChatBot steps={steps}
            floating={true}
            floatingStyle={{
                left: 'calc(100% - 80px)',
                right: 'initial',
                transformOrigin: 'bottom right',
                borderRadius: 0,
            }}
            userDelay={1000}
            style={{
                left: 'calc(80% - 125px)',
            }}
             />
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
