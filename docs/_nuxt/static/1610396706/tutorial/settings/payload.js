__NUXT_JSONP__("/tutorial/settings", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{document:{slug:"settings",title:"Configuring DeckGL\u002FMapbox settings",description:"How to configure DeckGL and Mapbox settings",position:7,category:"Tutorial",version:1.4,fullscreen:false,menuTitle:"Configuring Settings",toc:[{id:x,depth:n,text:z},{id:A,depth:p,text:q},{id:r,depth:p,text:s},{id:t,depth:n,text:u},{id:v,depth:n,text:w}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"If you spent any amount of time looking at DeckGL or Mapbox documentation, you will have seen plenty of configuration properties that can be controlled for both libraries. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can change those properties on the Components through the Vue prop syntax."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u003Ctemplate\u003E\n    ...\n        \u003CDeckGl \n            ref=\"deck\"\n            :class=\"['fill-wrapper']\"\n            :controlMap=\"true\"\n            :layers=\"layers\"\n            :width=\"'100%'\"\n            :height=\"'100%'\"\n            :controller=\"true\"\n            :useDevicePixels=\"false\"\n            :viewState=\"deckglSettings.viewState\"\n            @initialRender=\"()=\u003E{hasDeckLoaded = true}\"\n            \u003E\n                \u003CMapbox :accessToken=\"KEY_GOES_HERE\"\u003E\n            \u003C\u002FDeckGL\u003E\n    ...\n\u003C\u002Ftemplate\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some of these props are more important than others. Some will have minor explanations as they are crucial to just getting started with DeckGL, some you may need to go check existing documentation to understand what they do. "}]},{type:a,value:c},{type:b,tag:m,props:{id:x},children:[{type:b,tag:g,props:{href:"#important-props",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:y,props:{id:A},children:[{type:b,tag:g,props:{href:"#deckgl",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:":class=\"\""}]},{type:a,value:" - Need some CSS to visualize your component."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:":controlMap=\"true\u002Ffalse\""}]},{type:a,value:" - tells the Vue_DeckGL Component it needs to manually interact with the slotted Mapbox component (not a native DeckGL Prop)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:":controller=\"true\u002Ffalse\""}]},{type:a,value:" - Allows for DeckGL manual interactivity. Minor explanation later. "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:":viewState=\"{viewState}\""}]},{type:a,value:" - Initial viewState object. Minor explanation later. "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:r},children:[{type:b,tag:g,props:{href:"#mapbox",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:":accessToken=\"KEY_GOES_HERE\""}]},{type:a,value:" - Need token to utilize Mapbox"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:t},children:[{type:b,tag:g,props:{href:"#why-didnt-i-have-to-provide-any-settings-initially-besides-classmapbox-token",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The components ship out of the box with default settings! "}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To view those settings, "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Floftylabs\u002Fvue_deckgl\u002Fblob\u002Fdevelopment\u002Fsrc\u002Fcomponents\u002Futils\u002FdefaultSettings.js",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"please see here"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We plan on exposing these settings to be accessed in your project as well. "}]},{type:a,value:c},{type:b,tag:m,props:{id:v},children:[{type:b,tag:g,props:{href:"#passing-configuration-note",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To avoid specifying props for each object or having a large \"options\" object, we have opted to just this.$attrs to grab properties that are passed which we don't have Vue props set up for. At this time, the only issue we see with this is HTML name collisions (e.g., style). In this case, we will have slightly different names for those properities (e.g., style-\u003E mapStyle). If we need to change from this.$attrs to this.$props for validation reasons, the Vue API is similar for you, the end user. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Open for discussion on other issues that could arise from this."}]}]},dir:"\u002Fen\u002Ftutorial",path:"\u002Fen\u002Ftutorial\u002Fsettings",extension:".md",createdAt:B,updatedAt:B,to:"\u002Ftutorial\u002Fsettings"},prev:{slug:"deck_and_maps",title:"Vue_DeckGL and Maps",to:"\u002Ftutorial\u002Fdeck_and_maps"},next:{slug:"layers",title:"Adding Data with Layers",to:"\u002Ftutorial\u002Flayers"}}],fetch:[],mutations:[]}}("text","element","\n","p","li","code","a","true",-1,"span","icon","icon-link","h2",2,"ul",3,"DeckGL","mapbox","Mapbox","why-didnt-i-have-to-provide-any-settings-initially-besides-classmapbox-token","Why didn't I have to provide any settings initially besides class\u002Fmapbox token?","passing-configuration-note","Passing Configuration Note","important-props","h3","Important Props","deckgl","2021-01-11T20:24:18.390Z")));