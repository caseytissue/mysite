!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}({13:function(e,t){class n extends React.Component{render(){const e="nav_link "+(this.props.selected?"selected":""),t="nav_link_icon fas "+this.props.icon;return React.createElement("a",{className:e,onClick:()=>{this.props.onSelect(this.props.label)},href:this.props.link},React.createElement("i",{className:t}),React.createElement("p",{className:"nav_link_label"},this.props.label))}}class r extends React.Component{constructor(e){super(e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"state",{selected:localStorage.getItem("selectedNavLink")?localStorage.getItem("selectedNavLink"):window.location.href.split("/")[window.location.href.split("/").length-1].split(".")[0].charAt(0).toUpperCase()+window.location.href.split("/")[window.location.href.split("/").length-1].split(".")[0].slice(1)})}render(){const e=e=>{this.setState({selected:e}),localStorage.setItem("selectedNavLink",e)};return React.createElement("div",{className:"nav_bar"},React.createElement(n,{icon:"fa-graduation-cap",link:"./resume.html",label:"Resume",selected:"Resume"===this.state.selected,onSelect:e}),React.createElement(n,{icon:"fa-briefcase",link:"./portfolio.html",label:"Portfolio",selected:"Portfolio"===this.state.selected,onSelect:e}))}}document.querySelectorAll("#navBar").forEach(e=>{ReactDOM.render(React.createElement(r,null),e)})}});