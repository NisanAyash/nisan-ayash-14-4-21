(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,u=n(1),s=n.n(u),l=n(12),d=n.n(l),f=(n(104),n(55)),j=n(24),h=n(41),p=n(14),b=n(16),m={body:"#fff",fontColor:"#000"},g={body:"#080808",fontColor:"#fff",inputColor:"#ccc"},x=Object(b.b)(r||(r=Object(j.a)(["\n\tbody {\n\t\tbackground-color: ",";\n\t}\n"])),(function(e){return e.theme.body})),O=n(56),v=n.n(O),w=n(3),y=function(){return Object(w.jsxs)("ul",{className:v.a.ul,children:[Object(w.jsx)("li",{children:Object(w.jsx)(h.b,{className:v.a.link,to:"/",children:"Home"})}),Object(w.jsx)("li",{children:Object(w.jsx)(h.b,{className:v.a.link,to:"/favorite",children:"Favorites"})})]})},I=n(21),k=b.c.div(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: ",";\n  max-width: ",";\n  justify-content: ",";\n  align-items: ",";\n  padding: ",";\n  margin: ",";\n  height: ",";\n  border: ",";\n  border-bottom: ",";\n  border-radius: ",";\n  flex-wrap: ",";\n  overflow: ",";\n"])),(function(e){return e.dir}),(function(e){return e.maxWidth}),(function(e){return e.justify}),(function(e){return e.alignItems}),(function(e){return e.padding}),(function(e){return e.margin}),(function(e){return e.height}),(function(e){return e.border}),(function(e){return e.borderBottom}),(function(e){return e.radius}),(function(e){return e.wrap}),(function(e){return e.overflow})),T=function(e){return Object(w.jsx)(k,Object(I.a)({},e))},z=b.c.p(c||(c=Object(j.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n  margin: ",";\n"])),(function(e){return e.size}),(function(e){return e.color}),(function(e){return e.weight}),(function(e){return e.margin?e.margin:"0"})),C=function(e){var t=e.children,n=e.size,r=e.color,a=e.weight,c=e.margin;return Object(w.jsx)(z,{size:n,color:r,weight:a,margin:c,children:t})},W=n(197),D=function(e){var t=e.setTheme;return Object(w.jsxs)(T,{justify:"space-between",alignItems:"center",padding:"0 25px",borderBottom:"1px solid #9a58b2",margin:"0 0 30px 0px",children:[Object(w.jsx)(C,{color:"#9a58b2",size:"1.5em",weight:"500",children:"Weather App"}),Object(w.jsx)(y,{}),Object(w.jsx)(W.a,{onChange:function(){return t((function(e){return!e}))},name:"checkedA",style:{color:"#9a58b2"}})]})},M=b.c.div(i||(i=Object(j.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  padding: ",";\n  margin: ",";\n  height: ",";\n  width: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(e){return e.flex}),(function(e){return e.dir}),(function(e){return e.justify}),(function(e){return e.alignItems}),(function(e){return e.padding}),(function(e){return e.margin}),(function(e){return e.height}),(function(e){return e.width}),(function(e){return e}),(function(e){return e.radius})),V=function(e){return Object(w.jsx)(M,Object(I.a)({},e))},N=b.c.div(o||(o=Object(j.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n  padding: ",";\n  margin: ",";\n  height: ",";\n  overflow: ",";\n"])),(function(e){return e.dir}),(function(e){return e.justify}),(function(e){return e.alignItems}),(function(e){return e.wrap}),(function(e){return e.padding}),(function(e){return e.margin}),(function(e){return e.height}),(function(e){return e.overflow})),L=function(e){return Object(w.jsx)(N,Object(I.a)({},e))},F=n(62),A=n.n(F),B={isFulldate:function(e){return A()(e).format("LLL")},isDay:function(e){return A()(e).format("dddd")}},K=n(195);function S(e){var t=e.current;return Object(w.jsx)(L,{alignItems:"center",justify:"space-around",height:"70%",wrap:"wrap",overflow:"auto",margin:"25px 0",children:t.forecast.length>0&&t.forecast.map((function(e){return Object(w.jsxs)(V,{dir:"column",justify:"center",alignItems:"center",width:"250px",radius:"8px",margin:"10px",border:"1px solid #ccc",padding:"25px",children:[Object(w.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e.Day.Icon<9?"0".concat(e.Day.Icon):e.Day.Icon,"-s.png"),alt:e.Day.IconPhrase}),Object(w.jsx)(C,{size:"2em",margin:"15px 0",children:B.isDay(e.Date)}),Object(w.jsx)(C,{weight:"500",size:"1.2em",children:e.Day.IconPhrase}),Object(w.jsxs)(C,{weight:"500",children:["Min: ",e.Temperature.Minimum.Value,e.Temperature.Minimum.Unit," Max: ",e.Temperature.Maximum.Value,e.Temperature.Maximum.Unit]})]},Object(K.a)())}))})}var P,_,E=s.a.memo(S),U=n(57),X=n(185),q=n(19),G=n(33),J=n(18),R=n.n(J),Y=n(35),Z=n(86),H=n.n(Z),$=function(){var e=Object(Y.a)(R.a.mark((function e(t,n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H()({method:"GET",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q="DvbfNw0h6dTVXujnbVXj4MZr6Eu8stph",ee=Object(G.b)("weather/getPlaces",function(){var e=Object(Y.a)(R.a.mark((function e(t,n){var r,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,$("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(Q,"&q=").concat(t));case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),te=Object(G.b)("weather/getWeather",function(){var e=Object(Y.a)(R.a.mark((function e(t,n){var r,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,$("http://dataservice.accuweather.com/currentconditions/v1/".concat(t.Key,"?apikey=").concat(Q));case 4:return a=e.sent,c=a.data,e.abrupt("return",{weather:c[0],location:t});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),ne=Object(G.b)("weather/getForecast",function(){var e=Object(Y.a)(R.a.mark((function e(t,n){var r,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,$("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t.Key,"?apikey=").concat(Q));case 4:return a=e.sent,c=a.data,e.abrupt("return",c.DailyForecasts);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),re=Object(G.b)("weather/getByGeo",function(){var e=Object(Y.a)(R.a.mark((function e(t,n){var r,a,c,i,o,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.lat,a=t.lng,c=n.rejectWithValue,i=n.dispatch,e.prev=2,e.next=5,$("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(Q,"&q=").concat(r,"%2C%20").concat(a));case 5:return o=e.sent,u=o.data,i(te(u)),i(ne(u)),e.abrupt("return",u);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",c(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}()),ae=Object(G.c)({name:"weather",initialState:{places:[],current:{location:{},weather:{},forecast:[]},favorites:[],loading:!1,error:""},reducers:{handleFavorite:function(e,t){var n=t.payload;e.favorites.some((function(e){return e.location.Key===n.location.Key}))?e.favorites=e.favorites.filter((function(e){return e.location.Key!==n.location.Key})):e.favorites.push(Object(I.a)({id:Object(K.a)(),locationName:n.location.LocalizedName},n))},changeCurrent:function(e,t){var n=t.payload;e.current=n}},extraReducers:(P={},Object(q.a)(P,ee.pending,(function(e){e.error="",e.loading=!0})),Object(q.a)(P,ee.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.places=n})),Object(q.a)(P,ee.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.message})),Object(q.a)(P,te.pending,(function(e){e.error="",e.loading=!0})),Object(q.a)(P,te.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.current.location=n.location,e.current.weather=n.weather})),Object(q.a)(P,te.rejected,(function(e,t){var n=t.payload;e.loading=!1,e.error=n})),Object(q.a)(P,ne.pending,(function(e){e.error="",e.loading=!0})),Object(q.a)(P,ne.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.current.forecast=n})),Object(q.a)(P,ne.rejected,(function(e,t){var n=t.payload;e.loading=!1,e.error=n})),Object(q.a)(P,re.pending,(function(e){e.error="",e.loading=!0})),Object(q.a)(P,re.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.current.location=n})),Object(q.a)(P,re.rejected,(function(e,t){var n=t.payload;e.loading=!1,e.error=n})),P)}),ce=ae.actions,ie=ce.handleFavorite,oe=ce.changeCurrent,ue=ae.reducer,se=n(17),le=function(e){var t,n,r,a,c=e.current,i=e.favorites,o=Object(se.b)(),u=i.some((function(e){return e.location.Key===c.location.Key}));return Object(w.jsxs)(L,{alignItems:"center",height:"30%",style:{borderBottom:"1px solid #ccc"},children:[Object(w.jsx)(V,{flex:"5%",margin:"0 15px",children:c.weather.IsDayTime?Object(w.jsx)(U.c,{size:"4em",color:"orange"}):Object(w.jsx)(U.b,{size:"4em",color:"#91A3B0"})}),Object(w.jsxs)(V,{flex:"70%",dir:"column",children:[Object(w.jsx)(C,{size:".8em",margin:"10px 0",children:B.isFulldate(c.weather.LocalObservationDateTime)}),Object(w.jsx)(C,{size:"2em",color:"#9a58b2",weight:"700",children:c.location.LocalizedName}),Object(w.jsx)(C,{children:c.weather.WeatherText}),Object(w.jsxs)(C,{children:[null===(t=c.weather.Temperature)||void 0===t?void 0:t.Metric.Value,null===(n=c.weather.Temperature)||void 0===n?void 0:n.Metric.Unit," ",null===(r=c.weather.Temperature)||void 0===r?void 0:r.Imperial.Value,null===(a=c.weather.Temperature)||void 0===a?void 0:a.Imperial.Unit]})]}),Object(w.jsx)(V,{flex:"10%",justify:"flex-end",children:Object(w.jsx)(X.a,{onClick:function(){o(ie(c))},children:Object(w.jsx)(U.a,{color:u?"#ff0005":"#ccc",style:{cursor:"pointer"}})})})]})},de=n(193),fe=n(194),je=n(191),he=function(){var e=Object(se.c)((function(e){return e.weather})),t=e.places,n=e.loading,r=Object(se.b)();return{places:t,loading:n,handleChange:function(){var e=Object(Y.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(ee(t.target.value));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSelected:function(e){r(te(e)),r(ne(e))}}},pe=Object(b.d)((function(e){var t=e.theme,n=he(),r=n.places,a=n.loading,c=n.handleChange,i=n.handleSelected;return Object(w.jsx)(fe.a,{id:"combo-box-demo",options:r||[],getOptionLabel:function(e){return e.LocalizedName},getOptionSelected:function(e,t){return e.Version===t.Version},onChange:function(e,t){return i(t)},style:{maxWidth:500,margin:"10px auto",padding:"25px "},renderInput:function(e){return Object(w.jsx)(de.a,Object(I.a)(Object(I.a)({},e),{},{label:"search",variant:"outlined",onChange:c,style:{background:t.inputColor},InputProps:Object(I.a)(Object(I.a)({},e.InputProps),{},{endAdornment:Object(w.jsxs)(s.a.Fragment,{children:[a?Object(w.jsx)(je.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})})),be=n(90),me=n(89),ge=n.n(me),xe=function(){return Object(w.jsx)(ge.a,{type:"BallTriangle",color:"#9a58b2",height:100,width:100})},Oe=function(){var e=Object(se.c)((function(e){return e.weather})),t=e.current,n=e.loading,r=e.error,a=e.favorites;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(pe,{}),Object(w.jsx)(T,{dir:"column",padding:"25px",margin:"0 auto",height:"60vh",maxWidth:"80%",border:"1px solid #9a58b2",radius:"8px",justify:"space-around",alignItems:"space-around",children:n?Object(w.jsx)("span",{style:{alignSelf:"center"},children:Object(w.jsx)(xe,{})}):Object.keys(t.location).length>0&&Object.keys(t.weather).length>0&&t.forecast.length>0?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(le,{current:t,favorites:a}),Object(w.jsx)(E,{current:t})]}):r&&Object(w.jsx)(be.a,{size:"4em",color:"#9a58b2",style:{alignSelf:"center"}})})]})},ve=function(){var e=Object(se.c)((function(e){return e.weather})).favorites,t=Object(se.b)(),n=Object(p.f)();return e.length>0&&Object(w.jsx)(T,{dir:"flex",padding:"25px",margin:"auto",height:"80vh",maxWidth:"80%",border:"1px solid #9a58b2",radius:"8px",wrap:"wrap",justify:"center",alignItems:"center",overflow:"auto",children:e.map((function(e){var r,a;return Object(w.jsxs)(V,{dir:"column",justify:"space-evenly",alignItems:"center",width:"250px",height:"300px",radius:"8px",margin:"10px",border:"1px solid #ccc",padding:"25px",onClick:function(){return function(e){var r=e.location,a=e.weather,c=e.forecast;t(oe({location:r,weather:a,forecast:c})),n.push("/")}(e)},style:{cursor:"pointer"},children:[Object(w.jsx)(C,{size:"2em",margin:"15px 0",children:e.locationName}),Object(w.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e.weather.WeatherIcon<9?"0".concat(e.weather.WeatherIcon):e.weather.WeatherIcon,"-s.png"),alt:e.weather.WeatherIcon}),Object(w.jsx)(C,{weight:"500",size:"1.2em",children:e.weather.WeatherText}),Object(w.jsxs)(C,{weight:"500",children:[null===(r=e.weather.Temperature)||void 0===r?void 0:r.Metric.Value,null===(a=e.weather.Temperature)||void 0===a?void 0:a.Metric.Unit]})]},e.id)}))})},we=n(192),ye=n(196),Ie=Object(we.a)((function(){return{root:{width:"30%",margin:"0 auto",position:"absolute",bottom:"50px",left:"50%",transform:"translateX(-50%)"}}}));function ke(e){var t=e.error,n=Ie(),r=Object(u.useState)(!1),a=Object(f.a)(r,2),c=a[0],i=a[1];return Object(u.useEffect)((function(){var e=function(e){return setTimeout((function(){e()}),2500)};return t?(i(!0),e((function(){i(!1)})),clearTimeout(e)):i(!1)}),[t]),Object(w.jsx)("div",{className:n.root,style:{opacity:c?"1":"0",transition:"0.3s ease",transform:c?"translateY(0)":"translateY(100px)"},children:Object(w.jsx)(ye.a,{severity:"error",children:t})})}var Te=b.c.div(_||(_=Object(j.a)(["\n  color: ",";\n"])),(function(e){return e.theme.fontColor}));var ze=function(){var e=Object(u.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(se.c)((function(e){return e.weather})).error,c=Object(se.b)();return Object(u.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;c(re({lat:t,lng:n}))}),(function(e){var t={AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"},Country:{ID:"IL",LocalizedName:"Israel"},Key:"215854",LocalizedName:"Tel Aviv",Rank:31,Type:"City",Version:1};c(te(t)),c(ne(t))}))}),[]),Object(w.jsxs)(b.a,{theme:n?g:m,children:[Object(w.jsx)(x,{}),Object(w.jsx)(Te,{children:Object(w.jsxs)(h.a,{children:[Object(w.jsx)(D,{setTheme:r}),Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{exact:!0,path:"/",component:Oe}),Object(w.jsx)(p.a,{exact:!0,path:"/favorite",component:ve})]}),Object(w.jsx)(ke,{error:a})]})})]})},Ce=n(91),We=Object(Ce.a)(Object(G.d)()),De=Object(G.a)({reducer:{weather:ue,middleware:We}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(se.a,{store:De,children:Object(w.jsx)(ze,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,n){e.exports={ul:"header_ul__BMjF3",link:"header_link__1ZMti"}}},[[148,1,2]]]);
//# sourceMappingURL=main.b5f4866f.chunk.js.map