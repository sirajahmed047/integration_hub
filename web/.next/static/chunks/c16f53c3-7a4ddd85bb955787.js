"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{2826:function(e,n,t){t.d(n,{YF:function(){return useFloating}});var r,u=t(2265),l=t(3136),o=t(8836);t(4887);let f={...r||(r=t.t(u,2))},s=f.useInsertionEffect,c=s||(e=>e());var a="undefined"!=typeof document?u.useLayoutEffect:u.useEffect;let i=!1,d=0,genId=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+d++,g=f.useId,m=g||function(){let[e,n]=u.useState(()=>i?genId():void 0);return a(()=>{null==e&&n(genId())},[]),u.useEffect(()=>{i=!0},[]),e},v=u.createContext(null),C=u.createContext(null),useFloatingParentNodeId=()=>{var e;return(null==(e=u.useContext(v))?void 0:e.id)||null},useFloatingTree=()=>u.useContext(C);function useFloating(e){void 0===e&&(e={});let{nodeId:n}=e,t=function(e){let{open:n=!1,onOpenChange:t,elements:r}=e,l=m(),o=u.useRef({}),[f]=u.useState(()=>(function(){let e=new Map;return{emit(n,t){var r;null==(r=e.get(n))||r.forEach(e=>e(t))},on(n,t){e.set(n,[...e.get(n)||[],t])},off(n,t){var r;e.set(n,(null==(r=e.get(n))?void 0:r.filter(e=>e!==t))||[])}}})()),s=null!=useFloatingParentNodeId(),[a,i]=u.useState(r.reference),d=function(e){let n=u.useRef(()=>{});return c(()=>{n.current=e}),u.useCallback(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)},[])}((e,n,r)=>{o.current.openEvent=e?n:void 0,f.emit("openchange",{open:e,event:n,reason:r,nested:s}),null==t||t(e,n,r)}),g=u.useMemo(()=>({setPositionReference:i}),[]),v=u.useMemo(()=>({reference:a||r.reference||null,floating:r.floating||null,domReference:r.reference}),[a,r.reference,r.floating]);return u.useMemo(()=>({dataRef:o,open:n,onOpenChange:d,elements:v,events:f,floatingId:l,refs:g}),[n,d,v,f,l,g])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||t,f=r.elements,[s,i]=u.useState(null),[d,g]=u.useState(null),v=null==f?void 0:f.reference,C=v||s,R=u.useRef(null),k=useFloatingTree();a(()=>{C&&(R.current=C)},[C]);let E=(0,l.YF)({...e,elements:{...f,...d&&{reference:d}}}),M=u.useCallback(e=>{let n=(0,o.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;g(n),E.refs.setReference(n)},[E.refs]),h=u.useCallback(e=>{((0,o.kK)(e)||null===e)&&(R.current=e,i(e)),((0,o.kK)(E.refs.reference.current)||null===E.refs.reference.current||null!==e&&!(0,o.kK)(e))&&E.refs.setReference(e)},[E.refs]),p=u.useMemo(()=>({...E.refs,setReference:h,setPositionReference:M,domReference:R}),[E.refs,h,M]),x=u.useMemo(()=>({...E.elements,domReference:C}),[E.elements,C]),F=u.useMemo(()=>({...E,...r,refs:p,elements:x,nodeId:n}),[E,p,x,n,r]);return a(()=>{r.dataRef.current.floatingContext=F;let e=null==k?void 0:k.nodesRef.current.find(e=>e.id===n);e&&(e.context=F)}),u.useMemo(()=>({...E,context:F,refs:p,elements:x}),[E,p,x,F])}}}]);