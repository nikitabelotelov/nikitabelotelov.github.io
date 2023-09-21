System.register("chunks:///_virtual/ConfigController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,i,o,e,r,s,h,u,l;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,h=t.EditBoxComponent,u=t.director,l=t.Component}],execute:function(){var p,c,a,I,g,d,f,C,E;r._RF.push({},"6fe47jmmqpHXYvFqlu8dJ+m","ConfigController",void 0);var D=s.ccclass,y=s.property;t("ConfigController",(p=D("ConfigController"),c=y(h),a=y(h),I=y(h),p((f=n((d=function(t){function n(){for(var n,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return n=t.call.apply(t,[this].concat(r))||this,o(n,"HeightInput",f,e(n)),o(n,"WidthInput",C,e(n)),o(n,"ColorsInput",E,e(n)),n.height=9,n.width=9,n.colors=5,n}i(n,t);var r=n.prototype;return r.start=function(){u.addPersistRootNode(this.node),this.HeightInput&&(this.HeightInput.string=this.height.toString(),this.HeightInput.node.on(h.EventType.EDITING_DID_ENDED,this.onHeightInputEnd,this)),this.WidthInput&&(this.WidthInput.string=this.width.toString(),this.WidthInput.node.on(h.EventType.EDITING_DID_ENDED,this.onWidthInputEnd,this)),this.ColorsInput&&(this.ColorsInput.string=this.colors.toString(),this.ColorsInput.node.on(h.EventType.EDITING_DID_ENDED,this.onColorsInputEnd,this))},r.onHeightInputEnd=function(){this.HeightInput&&(this.height=parseInt(this.HeightInput.string))},r.onWidthInputEnd=function(){this.WidthInput&&(this.width=parseInt(this.WidthInput.string))},r.onColorsInputEnd=function(){this.ColorsInput&&(this.colors=parseInt(this.ColorsInput.string))},r.startGame=function(){u.loadScene("GameScene")},r.getHeight=function(){return this.height},r.getWidth=function(){return this.width},r.getColorNumber=function(){return this.colors},n}(l)).prototype,"HeightInput",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(d.prototype,"WidthInput",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=n(d.prototype,"ColorsInput",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=d))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./JewelRenderController.ts","./ConfigController.ts","./JewelsMatrix.ts","./GameOverController.ts"],(function(e){var t,r,n,o,i,l,a,s,u,c,p,f,h,m,b,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.asyncToGenerator,l=e.regeneratorRuntime},function(e){a=e.cclegacy,s=e._decorator,u=e.Label,c=e.find,p=e.director,f=e.Component},function(e){h=e.JewelRenderController},function(e){m=e.ConfigController},function(e){b=e.JewelsMatrix},function(e){d=e.GameOverController}],execute:function(){var v,C,w,g,x,M,y,N,L,j,O,R,S,z,G,P,W,k,J;a._RF.push({},"424cdjJc9tKnIakdKuod5+K","GameController",void 0);var I=s.ccclass,T=s.property;e("GameController",(v=I("GameController"),C=T(h),w=T(d),g=T(u),x=T(u),M=T(Number),y=T(Number),N=T(Number),L=T(Number),v((R=t((O=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i))||this,n(t,"jewelRenderController",R,o(t)),n(t,"gameOverController",S,o(t)),n(t,"pointsLabel",z,o(t)),n(t,"movesLabel",G,o(t)),n(t,"maxMovesNumber",P,o(t)),n(t,"pointsToWin",W,o(t)),n(t,"colorNumber",k,o(t)),n(t,"shuffleCount",J,o(t)),t.jewelMatrix=null,t.moves=0,t.count=0,t}r(t,e);var a=t.prototype;return a.start=function(){var e=c("ConfigController").getComponent(m);p.removePersistRootNode(e.node),p.addPersistRootNode(this.gameOverController.node);var t=e.getHeight(),r=e.getWidth();this.colorNumber=e.getColorNumber(),this.updatePoints(),this.updateMoves(),this.jewelMatrix=new b(t,r,this.colorNumber,2),this.jewelRenderController.init(this,this.jewelMatrix.getMatrix(),t,r)},a.addPoints=function(e){var t=(1+e)*e/2;this.count+=t,this.updatePoints()},a.popJewel=function(){var e=i(l().mark((function e(t,r){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this.jewelMatrix.popJewel(t,r))){e.next=10;break}return this.moves+=1,this.updateMoves(),this.addPoints(n.poped.length),this.checkIfWinOrLose(),e.next=8,this.jewelRenderController.updateMatrix(n);case 8:return e.next=10,this.fixIfNotSolvable();case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),a.updatePoints=function(){this.pointsLabel.string=this.count+" / "+this.pointsToWin},a.updateMoves=function(){this.movesLabel.string=""+(this.maxMovesNumber-this.moves)},a.fixIfNotSolvable=function(){var e=i(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.shuffleCount)||this.jewelMatrix.isSolvable()){e.next=7;break}return e.next=4,this.jewelRenderController.updateMatrix(this.jewelMatrix.shuffle());case 4:t++,e.next=1;break;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),a.checkIfWinOrLose=function(){this.count>=this.pointsToWin?this.loadWonScreen():this.moves>=this.maxMovesNumber&&this.loadLoseScreen()},a.updateGameOverController=function(){this.gameOverController.setPoints(this.count),this.gameOverController.setMoves(this.moves)},a.loadWonScreen=function(){this.updateGameOverController(),p.loadScene("WinScene")},a.loadLoseScreen=function(){this.updateGameOverController(),p.loadScene("LoseScene")},t}(f)).prototype,"jewelRenderController",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(O.prototype,"gameOverController",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(O.prototype,"pointsLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(O.prototype,"movesLabel",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(O.prototype,"maxMovesNumber",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 15}}),W=t(O.prototype,"pointsToWin",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),k=t(O.prototype,"colorNumber",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),J=t(O.prototype,"shuffleCount",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),j=O))||j));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameOverController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,r=e.director,s=e.Component}],execute:function(){var c;n._RF.push({},"6a78cVCfAVJV7bsRSJuvJWD","GameOverController",void 0);var i=o.ccclass;o.property,e("GameOverController",i("GameOverController")(c=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).points=0,t.moves=0,t}t(n,e);var o=n.prototype;return o.setPoints=function(e){this.points=e},o.setMoves=function(e){this.moves=e},o.getPoints=function(){return this.points},o.getMoves=function(){return this.moves},o.restart=function(){r.loadScene("MenuScene")},n}(s))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/JewelRenderController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,r,i,l,s,a,c,d,h,u,p,w,f,v,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.asyncToGenerator,l=e.regeneratorRuntime},function(e){s=e.cclegacy,a=e._decorator,c=e.Prefab,d=e.UITransform,h=e.Size,u=e.instantiate,p=e.Animation,w=e.Node,f=e.Vec3,v=e.tween,g=e.Component}],execute:function(){var m,P,J,y,N,C,E;s._RF.push({},"099daREGWhNyInJVMBgTrtj","JewelRenderController",void 0);var j=a.ccclass,H=a.property,W=64;e("JewelRenderController",(m=j("JewelRenderController"),P=H(c),J=H(d),m((C=t((N=function(e){function t(){for(var t,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))||this).H=9,t.W=5,t.gameController=null,n(t,"jewels",C,r(t)),n(t,"field",E,r(t)),t.jewelNodes=[],t}o(t,e);var s=t.prototype;return s.init=function(e,t,o,n){this.H=o,this.W=n,this.initField(),this.gameController=e,this.createMatrix(t)},s.initField=function(){this.field.getComponent(d).setContentSize(new h(this.H*W+32,this.W*W+32))},s.getEmptyJewelNodes=function(){for(var e=[],t=0;t<this.H;t++)e[t]=[];return e},s.copyJewelNodes=function(){for(var e=this.getEmptyJewelNodes(),t=0;t<this.H;t++)for(var o=0;o<this.W;o++)e[t][o]=this.jewelNodes[t][o];return e},s.createMatrix=function(e){this.jewelNodes=this.getEmptyJewelNodes();for(var t=this.H-1;t>=0;t--)for(var o=0;o<this.W;o++){var n=u(this.jewels[e[t][o]]);n.addComponent(p),n.setPosition(this.getJewelPosition(t,o)),this.jewelNodes[t][o]={node:n,onPop:this.getJewelPopHandler(t,o)},n.on(w.EventType.MOUSE_DOWN,this.jewelNodes[t][o].onPop),this.node.addChild(n)}},s.updateMatrix=function(e){var t=this,o=[],n=this.jewelNodes,r=this.copyJewelNodes();return e.poped.forEach((function(e){var r=e[0],i=e[1];o.push(t.tweenJewelPop(n[r][i].node).then((function(){n[r][i].node.destroy()})))})),e.moved.forEach((function(e){var i=n[e.from[0]][e.from[1]].node;o.push(t.tweenJewel(i,e.to[0],e.to[1])),r[e.to[0]][e.to[1]]={node:i,onPop:t.getJewelPopHandler(e.to[0],e.to[1])},i.off(w.EventType.MOUSE_DOWN,n[e.from[0]][e.from[1]].onPop),i.on(w.EventType.MOUSE_DOWN,r[e.to[0]][e.to[1]].onPop)})),e.added.forEach((function(e){e.forEach((function(n,i){var l=u(t.jewels[n.color]);l.setPosition(t.getJewelPosition(-e.length+i,n.col)),o.push(t.tweenJewel(l,n.row,n.col)),r[n.row][n.col]={node:l,onPop:t.getJewelPopHandler(n.row,n.col)},l.on(w.EventType.MOUSE_DOWN,r[n.row][n.col].onPop),t.node.addChild(l)}))})),this.jewelNodes=r,this.reorderChildren(),Promise.all(o)},s.getJewelPosition=function(e,t){return new f(-this.W*W/2+W*t+32,this.H*W/2-W*e-32,0)},s.tweenJewel=function(e,t,o){var n=this;return new Promise((function(r){v(e).to(.5,{position:n.getJewelPosition(t,o)},{easing:"cubicIn"}).call(r).start()}))},s.tweenJewelPop=function(e){return new Promise((function(t){v(e).to(.3,{scale:new f(0,0,0)}).call(t).start()}))},s.getJewelPopHandler=function(e,t){var o=this;return i(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.gameController.popJewel(e,t);case 2:case"end":return n.stop()}}),n)})))},s.reorderChildren=function(){for(var e=this.H-1;e>=0;e--)for(var t=this.W-1;t>=0;t--)this.node.removeChild(this.jewelNodes[e][t].node),this.node.addChild(this.jewelNodes[e][t].node)},t}(g)).prototype,"jewels",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),E=t(N.prototype,"field",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=N))||y));s._RF.pop()}}}));

System.register("chunks:///_virtual/JewelsMatrix.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,r;return{setters:[function(t){i=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy}],execute:function(){r._RF.push({},"c85c8aoGHtKaJfATLFjg7sM","JewelsMatrix",void 0);t("JewelsMatrix",function(){function t(t,i,r,e){this.height=void 0,this.width=void 0,this.colors=void 0,this.minConnected=void 0,this.matrix=void 0,this.height=t,this.width=i,this.colors=r,this.minConnected=e,this.generateMatrix()}var r=t.prototype;return r.generateMatrix=function(){this.matrix=[];for(var t=0;t<this.height;t++){this.matrix[t]=[];for(var i=0;i<this.width;i++)this.matrix[t][i]=this.getRandomColor()}},r.needAddToQueue=function(t,i,r){return!(i<0||i>=this.height||r<0||r>=this.width)&&this.matrix[i][r]===t},r.getConnected=function(t,i){for(var r=[],e=this.matrix[t][i],h=[],o=0;o<this.height;o++){h[o]=[];for(var s=0;s<this.width;s++)h[o][s]=!1}var n=[];for(n.push([t,i]);n.length>0;){var a=n.shift(),u=a[0],d=a[1];u<0||u>=this.height||d<0||d>=this.width||(h[u][d]||this.matrix[u][d]!==e||(h[u][d]=!0,r.push([u,d]),this.needAddToQueue(e,u-1,d)&&n.push([u-1,d]),this.needAddToQueue(e,u+1,d)&&n.push([u+1,d]),this.needAddToQueue(e,u,d-1)&&n.push([u,d-1]),this.needAddToQueue(e,u,d+1)&&n.push([u,d+1])))}return r},r.canPop=function(t,i){return this.getConnected(t,i).length>=this.minConnected},r.popJewel=function(t,r){var e=this.getConnected(t,r);if(e.length<this.minConnected)return null;for(var h,o=i(e);!(h=o()).done;){var s=h.value,n=s[0],a=s[1];this.matrix[n][a]=-1}var u=this.moveJewelsDown();return{poped:e,added:this.fillGaps(),moved:u}},r.moveJewelsDown=function(){for(var t=[],i=0;i<this.width;i++)for(var r=this.height-1;r>0;r--)if(-1===this.matrix[r][i]){for(var e=null,h=r-1;!e&&h>=0;)-1!==this.matrix[h][i]&&(e=[h,i]),h--;e&&(this.matrix[r][i]=this.matrix[e[0]][e[1]],this.matrix[e[0]][e[1]]=-1,t.push({from:[e[0],e[1]],to:[r,i]}))}return t},r.fillGaps=function(){for(var t=[],i=0;i<this.width;i++)t[i]=[];for(var r=0;r<this.height;r++)for(var e=0;e<this.width;e++)-1===this.matrix[r][e]&&(this.matrix[r][e]=this.getRandomColor(),t[e].push({color:this.matrix[r][e],col:e,row:r}));return t},r.getRandomColor=function(){return Math.floor(Math.random()*this.colors)},r.getMatrix=function(){return this.matrix},r.isSolvable=function(){for(var t=0;t<this.height;t++)for(var i=0;i<this.width;i++)if(this.canPop(t,i))return!0;return!1},r.shuffle=function(){for(var t=[],i=0;i<this.height;i++)for(var r=0;r<this.width;r++)t.push({coords:[i,r],color:this.matrix[i][r]});t.sort((function(){return Math.random()-.5}));for(var e=[],h=0;h<t.length;h++){var o=t[h],s=Math.floor(h/this.width),n=h%this.width;this.matrix[s][n]=o.color,e.push({from:o.coords,to:[s,n]})}return{poped:[],added:[],moved:e}},t}());r._RF.pop()}}}));

System.register("chunks:///_virtual/LoseSceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameOverController.ts"],(function(e){var t,r,n,o,i,l,a,s,u,c,p,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,a=e.Label,s=e.Button,u=e.find,c=e.Node,p=e.Component},function(e){f=e.GameOverController}],execute:function(){var b,v,y,L,g,h,C;i._RF.push({},"37baeMDi3NNxJOurof/L5fA","LoseSceneController",void 0);var d=l.ccclass,m=l.property;e("LoseSceneController",(b=d("LoseSceneController"),v=m(a),y=m(s),b((h=t((g=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i))||this,n(t,"pointsLabel",h,o(t)),n(t,"restartButton",C,o(t)),t}return r(t,e),t.prototype.start=function(){var e=u("GameOverController").getComponent(f);this.pointsLabel.string=e.getPoints().toString(),this.restartButton.node.on(c.EventType.MOUSE_UP,(function(){return e.restart()}))},t}(p)).prototype,"pointsLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(g.prototype,"restartButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=g))||L));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./ConfigController.ts","./GameController.ts","./GameOverController.ts","./JewelRenderController.ts","./JewelsMatrix.ts","./LoseSceneController.ts","./WinSceneController.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/WinSceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameOverController.ts"],(function(e){var t,n,r,o,i,l,a,s,u,c,p,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,a=e.Label,s=e.Button,u=e.find,c=e.Node,p=e.Component},function(e){f=e.GameOverController}],execute:function(){var b,v,g,m,y,h,C,L,d;i._RF.push({},"91e33l+JxNE4J8e1/MJO+7m","WinSceneController",void 0);var S=l.ccclass,z=l.property;e("WinSceneController",(b=S("WinSceneController"),v=z(a),g=z(a),m=z(s),b((C=t((h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i))||this,r(t,"pointsLabel",C,o(t)),r(t,"movesLabel",L,o(t)),r(t,"restartButton",d,o(t)),t}return n(t,e),t.prototype.start=function(){var e=u("GameOverController").getComponent(f);this.pointsLabel.string=e.getPoints().toString(),this.movesLabel.string=e.getMoves().toString(),this.restartButton.node.on(c.EventType.MOUSE_UP,(function(){return e.restart()}))},t}(p)).prototype,"pointsLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(h.prototype,"movesLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=t(h.prototype,"restartButton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=h))||y));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});