(this.webpackJsonpyoyopizza=this.webpackJsonpyoyopizza||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o);n(34),n(17),n(35);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(18),s=n.n(l),c=n(12),u=n(1),p=n(2),d=n(4),m=n(3),g=n(5),h=n(19),v=n(8);n(36);function f(){var e=Object(h.a)(["\nbackground: ",";\ncolor: ",";\nfont-size: 1em;\nmargin: 0.2em;\npadding: 0.25em 1em;\nborder: 2px solid blue;\nborder-radius: 10px;\n"]);return f=function(){return e},e}var y=v.default.button(f(),(function(e){return e.primary?"blue":e.secondary?"blueviolet":"white"}),(function(e){return e.primary?"white":e.secondary?"white":"blueviolet"})),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).onClickButton=function(e){n.setState({chosen:[].concat(Object(c.a)(n.state.chosen),[e])}),n.setState({options:n.state.options.filter((function(t){return t!==e}))})},n.removeChosenOptions=function(e){n.setState({options:[].concat(Object(c.a)(n.state.options),[e])}),n.setState({chosen:n.state.chosen.filter((function(t){return t!==e}))})},n.state={options:[],chosen:[],showChosenItems:!1},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.options;this.setState({options:e})}},{key:"render",value:function(){var e=this,t=this.state.options;return this.state.showChosenItems?r.a.createElement("div",null,r.a.createElement("h3",null,"Selected Toppings"),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:180}},this.state.chosen.map((function(e,t){return r.a.createElement(y,{primary:!0},e)})))):r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h3",null,"Select Toppings"),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:180}},t.map((function(t,n){return r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return e.onClickButton(t)}},t))}))),r.a.createElement("br",null),r.a.createElement(y,{primary:!0,onClick:function(){e.props.triggerNextStep({trigger:"6",value:e.state.chosen}),e.setState({showChosenItems:!0})}},"Done"),this.state.chosen.length>0&&r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:180}},this.state.chosen.map((function(t,n){return r.a.createElement(y,{secondary:!0,onClick:function(){e.removeChosenOptions(t)}},t)}))))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={name:"",pno:"",pizza:"",toppings:""},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.steps,n=t.name,a=t.pno,r=t.pizza,o=t.toppings;this.setState({name:n,pno:a,pizza:r,toppings:o},(function(){fetch("https://yoyopizza.herokuapp.com/addOrder/",{method:"post",body:JSON.stringify({name:e.state.name.value,pno:e.state.pno.value,pizza:e.state.pizza.value,toppings:e.state.toppings.value})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.props.triggerNextStep({trigger:"gen_id",value:t.orderID})}))}))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.pno,a=e.pizza,o=e.toppings;return r.a.createElement("div",null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("table",{style:{width:"180",display:"flex",flexWrap:"wrap",textAlign:"left",borderSpacing:5,padding:5}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Pizza"),r.a.createElement("td",null,a.value)),r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:o.value.length},"Toppings"),o.value.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e))}))),r.a.createElement("hr",null),r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("td",null,t.value)),r.a.createElement("tr",null,r.a.createElement("th",null,"Phone No."),r.a.createElement("td",null,n.value)))))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={name:"",validname:null},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.steps.name;this.setState({name:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.name.value.toLowerCase().split(" ")[0];fetch("https://api.genderize.io/?name=".concat(t)).then((function(e){return e.json()})).then((function(t){console.log(t),null!==t.gender&&t.probability>=.8?e.setState({validname:!0},(function(){e.props.triggerNextStep({trigger:"8",value:e.state.name})})):e.setState({validname:!1},(function(){e.props.triggerNextStep({trigger:"name",value:""})}))}))}},{key:"render",value:function(){return null===this.state.validname?r.a.createElement("div",null,"Checking..."):!1===this.state.validname?r.a.createElement("div",null,"Not a Valid Name"):r.a.createElement("div",null,"Great!")}}]),t}(a.Component),w=(n(38),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={name:null,order:null,status:null},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.steps.orderID;fetch("https://yoyopizza.herokuapp.com/checkOrderStatus/",{method:"post",body:JSON.stringify({orderID:t.value})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.orderStatus?e.setState({name:t.orderStatus[0],order:t.orderStatus[1],status:t.orderStatus[2]}):e.setState({name:!1}),e.props.triggerNextStep({trigger:"3",value:""})}))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.order,a=e.status;return t?r.a.createElement("div",{style:{display:"flex",width:180,flexWrap:"wrap"}},r.a.createElement("div",{style:{paddingBottom:10,fontWeight:"bold"}},t),r.a.createElement("div",{style:{paddingBottom:10}},n),r.a.createElement("div",null,a)):!1===t?r.a.createElement("div",null,"Order Not Found"):r.a.createElement("div",null,"...")}}]),t}(a.Component)),z=n(27),S=n.n(z),j=[{id:"1",message:"Welcome to YoYo Pizza",trigger:"2"},{id:"2",message:"Can I help you with any of these",trigger:"3"},{id:"3",options:[{value:1,label:"Order Pizza",trigger:"4"},{value:2,label:"Check Order Status",trigger:"10"}]},{id:"4",message:"What you want? We have...",trigger:"pizza"},{id:"pizza",options:[{value:"Margherita",label:"Margherita",trigger:"toppings"},{value:"Marinara",label:"Marinara",trigger:"toppings"}]},{id:"toppings",component:r.a.createElement(b,{options:["Onions","Cheese","Peppers","Olives","Pineapple","Chicken","Tofu"]}),waitAction:!0,asMessage:!0,trigger:"6"},{id:"6",message:"Your Order will be ready in 20 mins",trigger:"7"},{id:"7",message:"May I get your Name?",trigger:"name"},{id:"name",user:!0,trigger:"validatename"},{id:"validatename",component:r.a.createElement(O,null),waitAction:!0,asMessage:!0,trigger:"8"},{id:"8",message:"And your Phone No.",trigger:"pno"},{id:"pno",user:!0,validator:function(e){return!!e.match(/^\d{10}$/)||"Please provide a valid Phone No."},trigger:"review"},{id:"review",component:r.a.createElement(E,null),asMessage:!0,waitAction:!0,trigger:"gen_id"},{id:"gen_id",message:"Your Order ID is {previousValue}",trigger:"3"},{id:"10",message:"Enter you Order ID",trigger:"orderID"},{id:"orderID",user:!0,trigger:"12"},{id:"12",component:r.a.createElement(w,null),asMessage:!0,waitAction:!0,trigger:"3"}];i.a.render(r.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundImage:"url(".concat(s.a,")")}},r.a.createElement("h1",{style:{color:"white",paddingLeft:20,paddingTop:20,fontSize:60}},"yoYO Pizza"),r.a.createElement("h3",{style:{color:"white",paddingLeft:20}},"Pizza that tastes as good as it looks."),r.a.createElement(S.a,{steps:j,floating:!0,floatingStyle:{left:"calc(100% - 80px)",right:"initial",transformOrigin:"bottom right",borderRadius:0},userDelay:1e3,style:{left:"calc(80% - 125px)"}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){e.exports=n.p+"static/media/chad-montano-MqT0asuoIcU-unsplash.cc7a458d.jpg"},29:function(e,t,n){e.exports=n(167)},34:function(e,t,n){},35:function(e,t,n){}},[[29,1,2]]]);
//# sourceMappingURL=main.8ce72523.chunk.js.map