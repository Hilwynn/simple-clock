(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(3),o=n(6),r=n(4),l=n(7),i=n(0),s=n.n(i),u=n(5),m=n.n(u),d=(n(14),function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={date:new Date},n.startClock=function(){n.timerID=setInterval(function(){return n.tick()},1e3)},n.tick=function(){n.setState({date:new Date})},n.setColorScheme=function(){var e=n.state.date.getHours();return e>6&&e<20?"#fff":"#000"},n.handleStopTimeClick=function(){clearInterval(n.timerID)},n.handleStartTimeClick=function(){n.startClock()},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.startClock()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e={backgroundColor:{backgroundColor:"".concat(this.setColorScheme())},color:{color:"".concat(this.setColorScheme())}};return s.a.createElement("div",null,s.a.createElement("div",{className:"wrapper",style:e.backgroundColor},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"clock-container"},s.a.createElement("p",{className:"clock-face"},this.state.date.toLocaleTimeString())),s.a.createElement("div",{className:"button-container"},s.a.createElement("button",{onClick:this.handleStopTimeClick,style:e.color},"Stop"),s.a.createElement("button",{onClick:this.handleStartTimeClick,style:e.color},"Start")))))}}]),t}(s.a.Component));m.a.render(s.a.createElement(d,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.662768e9.chunk.js.map