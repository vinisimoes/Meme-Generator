(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/Trollface.be324d5b.png"},,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(2),r=a.n(m),o=(a(14),a(15),a(16),a(3)),c=a.n(o);var s=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:c.a,alt:"Problem???"}),l.a.createElement("p",null,"Meme Generator!"))},i=a(4),u=a(5),h=a(6),p=a(8),d=a(7),g=(a(17),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.allMemes[Math.floor(Math.random()*n.state.allMemes.length)].url;n.setState({randomImage:t,topText:"",bottomText:""})},n.handleTextChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(i.a)({},a,l))},n.state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemes:[],textSize:40},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemes:a})}))}},{key:"render",value:function(){var e={fontSize:this.state.textSize+"px"};return console.log(e),l.a.createElement("div",{className:"meme-generator"},l.a.createElement("form",{className:"meme-form"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",name:"topText",value:this.state.topText,onChange:this.handleTextChange}),l.a.createElement("p",null,"Top Text")),l.a.createElement("label",null,l.a.createElement("input",{type:"text",name:"bottomText",value:this.state.bottomText,onChange:this.handleTextChange}),l.a.createElement("p",null,"Bottom Text")),l.a.createElement("label",null,l.a.createElement("input",{type:"range",min:"20",max:"100",className:"slider",name:"textSize",value:this.state.textSize,onChange:this.handleTextChange}),l.a.createElement("div",{className:"range-labels"},l.a.createElement("p",{className:"min"},"20"),l.a.createElement("p",{className:"max"},"100")))),l.a.createElement("div",{className:"meme"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{src:this.state.randomImage,alt:""}),l.a.createElement("h2",{className:"top",style:e},this.state.topText),l.a.createElement("h2",{className:"bottom",style:e},this.state.bottomText)),l.a.createElement("div",{className:"button",onClick:this.handleSubmit},"Random")))}}]),a}(l.a.Component));var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(g,null))};r.a.render(l.a.createElement(x,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b0ad749e.chunk.js.map