function Tr(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const dt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ps = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], zt = () => {
}, ph = () => !1, Xg = /^on[^a-z]/, $s = (e) => Xg.test(e), Wa = (e) => e.startsWith("onUpdate:"), ft = Object.assign, Yu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jg = Object.prototype.hasOwnProperty, Qe = (e, t) => Jg.call(e, t), ve = Array.isArray, No = (e) => ks(e) === "[object Map]", zo = (e) => ks(e) === "[object Set]", uf = (e) => ks(e) === "[object Date]", Qg = (e) => ks(e) === "[object RegExp]", Ae = (e) => typeof e == "function", vt = (e) => typeof e == "string", ws = (e) => typeof e == "symbol", nt = (e) => e !== null && typeof e == "object", _l = (e) => (nt(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), hh = Object.prototype.toString, ks = (e) => hh.call(e), Xu = (e) => ks(e).slice(8, -1), mh = (e) => ks(e) === "[object Object]", Ju = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, li = /* @__PURE__ */ Tr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qg = /* @__PURE__ */ Tr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Al = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, e1 = /-(\w)/g, hn = Al((e) => e.replace(e1, (t, n) => n ? n.toUpperCase() : "")), t1 = /\B([A-Z])/g, fn = Al(
  (e) => e.replace(t1, "-$1").toLowerCase()
), qr = Al((e) => e.charAt(0).toUpperCase() + e.slice(1)), pr = Al((e) => e ? `on${qr(e)}` : ""), eo = (e, t) => !Object.is(e, t), Fr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ya = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Xa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ja = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let df;
const Qa = () => df || (df = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), n1 = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console", r1 = /* @__PURE__ */ Tr(n1);
function Ms(e) {
  if (ve(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = vt(r) ? a1(r) : Ms(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (vt(e) || nt(e))
    return e;
}
const o1 = /;(?![^(]*\))/g, s1 = /:([^]+)/, i1 = /\/\*[^]*?\*\//g;
function a1(e) {
  const t = {};
  return e.replace(i1, "").split(o1).forEach((n) => {
    if (n) {
      const r = n.split(s1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (vt(e))
    t = e;
  else if (ve(e))
    for (let n = 0; n < e.length; n++) {
      const r = be(e[n]);
      r && (t += r + " ");
    }
  else if (nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Qu(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !vt(t) && (e.class = be(t)), n && (e.style = Ms(n)), e;
}
const l1 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", c1 = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", u1 = /* @__PURE__ */ Tr(l1), d1 = /* @__PURE__ */ Tr(c1), f1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", p1 = /* @__PURE__ */ Tr(f1);
function vh(e) {
  return !!e || e === "";
}
function h1(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = to(e[r], t[r]);
  return n;
}
function to(e, t) {
  if (e === t)
    return !0;
  let n = uf(e), r = uf(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ws(e), r = ws(t), n || r)
    return e === t;
  if (n = ve(e), r = ve(t), n || r)
    return n && r ? h1(e, t) : !1;
  if (n = nt(e), r = nt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !to(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Dl(e, t) {
  return e.findIndex((n) => to(n, t));
}
const at = (e) => vt(e) ? e : e == null ? "" : ve(e) || nt(e) && (e.toString === hh || !Ae(e.toString)) ? JSON.stringify(e, gh, 2) : String(e), gh = (e, t) => t && t.__v_isRef ? gh(e, t.value) : No(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : zo(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : nt(t) && !ve(t) && !mh(t) ? String(t) : t;
function qa(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let gn;
class qu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = gn, !t && gn && (this.index = (gn.scopes || (gn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = gn;
      try {
        return gn = this, t();
      } finally {
        gn = n;
      }
    } else
      process.env.NODE_ENV !== "production" && qa("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    gn = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    gn = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ed(e) {
  return new qu(e);
}
function yh(e, t = gn) {
  t && t.active && t.effects.push(e);
}
function Pl() {
  return gn;
}
function td(e) {
  gn ? gn.cleanups.push(e) : process.env.NODE_ENV !== "production" && qa(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
const Ti = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, bh = (e) => (e.w & no) > 0, xh = (e) => (e.n & no) > 0, m1 = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= no;
}, v1 = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      bh(o) && !xh(o) ? o.delete(e) : t[n++] = o, o.w &= ~no, o.n &= ~no;
    }
    t.length = n;
  }
}, el = /* @__PURE__ */ new WeakMap();
let Qs = 0, no = 1;
const Yc = 30;
let rn;
const _o = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Xc = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ss {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, yh(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = rn, n = Yr;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = rn, rn = this, Yr = !0, no = 1 << ++Qs, Qs <= Yc ? m1(this) : ff(this), this.fn();
    } finally {
      Qs <= Yc && v1(this), no = 1 << --Qs, rn = this.parent, Yr = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    rn === this ? this.deferStop = !0 : this.active && (ff(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ff(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
function g1(e, t) {
  e.effect instanceof Ss && (e = e.effect.fn);
  const n = new Ss(e);
  t && (ft(n, t), t.scope && yh(n, t.scope)), (!t || !t.lazy) && n.run();
  const r = n.run.bind(n);
  return r.effect = n, r;
}
function y1(e) {
  e.effect.stop();
}
let Yr = !0;
const Eh = [];
function Ko() {
  Eh.push(Yr), Yr = !1;
}
function Go() {
  const e = Eh.pop();
  Yr = e === void 0 ? !0 : e;
}
function Kt(e, t, n) {
  if (Yr && rn) {
    let r = el.get(e);
    r || el.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Ti());
    const s = process.env.NODE_ENV !== "production" ? { effect: rn, target: e, type: t, key: n } : void 0;
    Jc(o, s);
  }
}
function Jc(e, t) {
  let n = !1;
  Qs <= Yc ? xh(e) || (e.n |= no, n = !bh(e)) : n = !e.has(rn), n && (e.add(rn), rn.deps.push(e), process.env.NODE_ENV !== "production" && rn.onTrack && rn.onTrack(
    ft(
      {
        effect: rn
      },
      t
    )
  ));
}
function qn(e, t, n, r, o, s) {
  const i = el.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && ve(e)) {
    const c = Number(r);
    i.forEach((u, d) => {
      (d === "length" || !ws(d) && d >= c) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        ve(e) ? Ju(n) && a.push(i.get("length")) : (a.push(i.get(_o)), No(e) && a.push(i.get(Xc)));
        break;
      case "delete":
        ve(e) || (a.push(i.get(_o)), No(e) && a.push(i.get(Xc)));
        break;
      case "set":
        No(e) && a.push(i.get(_o));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: s } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? ls(a[0], l) : ls(a[0]));
  else {
    const c = [];
    for (const u of a)
      u && c.push(...u);
    process.env.NODE_ENV !== "production" ? ls(Ti(c), l) : ls(Ti(c));
  }
}
function ls(e, t) {
  const n = ve(e) ? e : [...e];
  for (const r of n)
    r.computed && pf(r, t);
  for (const r of n)
    r.computed || pf(r, t);
}
function pf(e, t) {
  (e !== rn || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ft({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function b1(e, t) {
  var n;
  return (n = el.get(e)) == null ? void 0 : n.get(t);
}
const x1 = /* @__PURE__ */ Tr("__proto__,__v_isRef,__isVue"), wh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ws)
), hf = /* @__PURE__ */ E1();
function E1() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Le(this);
      for (let s = 0, i = this.length; s < i; s++)
        Kt(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(Le)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ko();
      const r = Le(this)[t].apply(this, n);
      return Go(), r;
    };
  }), e;
}
function w1(e) {
  const t = Le(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class Sh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw" && r === (o ? s ? Dh : Ah : s ? _h : Nh).get(t))
      return t;
    const i = ve(t);
    if (!o) {
      if (i && Qe(hf, n))
        return Reflect.get(hf, n, r);
      if (n === "hasOwnProperty")
        return w1;
    }
    const a = Reflect.get(t, n, r);
    return (ws(n) ? wh.has(n) : x1(n)) || (o || Kt(t, "get", n), s) ? a : rt(a) ? i && Ju(n) ? a : a.value : nt(a) ? o ? js(a) : Ln(a) : a;
  }
}
class Ch extends Sh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (Er(s) && rt(s) && !rt(r))
      return !1;
    if (!this._shallow && (!Ni(r) && !Er(r) && (s = Le(s), r = Le(r)), !ve(t) && rt(s) && !rt(r)))
      return s.value = r, !0;
    const i = ve(t) && Ju(n) ? Number(n) < t.length : Qe(t, n), a = Reflect.set(t, n, r, o);
    return t === Le(o) && (i ? eo(r, s) && qn(t, "set", n, r, s) : qn(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Qe(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && qn(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ws(n) || !wh.has(n)) && Kt(t, "has", n), r;
  }
  ownKeys(t) {
    return Kt(
      t,
      "iterate",
      ve(t) ? "length" : _o
    ), Reflect.ownKeys(t);
  }
}
class Oh extends Sh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && qa(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && qa(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const S1 = /* @__PURE__ */ new Ch(), C1 = /* @__PURE__ */ new Oh(), O1 = /* @__PURE__ */ new Ch(
  !0
), T1 = /* @__PURE__ */ new Oh(!0), nd = (e) => e, Rl = (e) => Reflect.getPrototypeOf(e);
function ma(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = Le(e), s = Le(t);
  n || (eo(t, s) && Kt(o, "get", t), Kt(o, "get", s));
  const { has: i } = Rl(o), a = r ? nd : n ? od : Ai;
  if (i.call(o, t))
    return a(e.get(t));
  if (i.call(o, s))
    return a(e.get(s));
  e !== o && e.get(t);
}
function va(e, t = !1) {
  const n = this.__v_raw, r = Le(n), o = Le(e);
  return t || (eo(e, o) && Kt(r, "has", e), Kt(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function ga(e, t = !1) {
  return e = e.__v_raw, !t && Kt(Le(e), "iterate", _o), Reflect.get(e, "size", e);
}
function mf(e) {
  e = Le(e);
  const t = Le(this);
  return Rl(t).has.call(t, e) || (t.add(e), qn(t, "add", e, e)), this;
}
function vf(e, t) {
  t = Le(t);
  const n = Le(this), { has: r, get: o } = Rl(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Th(n, r, e) : (e = Le(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? eo(t, i) && qn(n, "set", e, t, i) : qn(n, "add", e, t), this;
}
function gf(e) {
  const t = Le(this), { has: n, get: r } = Rl(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && Th(t, n, e) : (e = Le(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && qn(t, "delete", e, void 0, s), i;
}
function yf() {
  const e = Le(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? No(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && qn(e, "clear", void 0, void 0, n), r;
}
function ya(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, a = Le(i), l = t ? nd : e ? od : Ai;
    return !e && Kt(a, "iterate", _o), i.forEach((c, u) => r.call(o, l(c), l(u), s));
  };
}
function ba(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Le(o), i = No(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, c = o[e](...r), u = n ? nd : t ? od : Ai;
    return !t && Kt(
      s,
      "iterate",
      l ? Xc : _o
    ), {
      // iterator protocol
      next() {
        const { value: d, done: f } = c.next();
        return f ? { value: d, done: f } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ar(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${qr(e)} operation ${n}failed: target is readonly.`,
        Le(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function N1() {
  const e = {
    get(s) {
      return ma(this, s);
    },
    get size() {
      return ga(this);
    },
    has: va,
    add: mf,
    set: vf,
    delete: gf,
    clear: yf,
    forEach: ya(!1, !1)
  }, t = {
    get(s) {
      return ma(this, s, !1, !0);
    },
    get size() {
      return ga(this);
    },
    has: va,
    add: mf,
    set: vf,
    delete: gf,
    clear: yf,
    forEach: ya(!1, !0)
  }, n = {
    get(s) {
      return ma(this, s, !0);
    },
    get size() {
      return ga(this, !0);
    },
    has(s) {
      return va.call(this, s, !0);
    },
    add: Ar("add"),
    set: Ar("set"),
    delete: Ar("delete"),
    clear: Ar("clear"),
    forEach: ya(!0, !1)
  }, r = {
    get(s) {
      return ma(this, s, !0, !0);
    },
    get size() {
      return ga(this, !0);
    },
    has(s) {
      return va.call(this, s, !0);
    },
    add: Ar("add"),
    set: Ar("set"),
    delete: Ar("delete"),
    clear: Ar("clear"),
    forEach: ya(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = ba(
      s,
      !1,
      !1
    ), n[s] = ba(
      s,
      !0,
      !1
    ), t[s] = ba(
      s,
      !1,
      !0
    ), r[s] = ba(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  _1,
  A1,
  D1,
  P1
] = /* @__PURE__ */ N1();
function Il(e, t) {
  const n = t ? e ? P1 : D1 : e ? A1 : _1;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    Qe(n, o) && o in r ? n : r,
    o,
    s
  );
}
const R1 = {
  get: /* @__PURE__ */ Il(!1, !1)
}, I1 = {
  get: /* @__PURE__ */ Il(!1, !0)
}, L1 = {
  get: /* @__PURE__ */ Il(!0, !1)
}, $1 = {
  get: /* @__PURE__ */ Il(!0, !0)
};
function Th(e, t, n) {
  const r = Le(n);
  if (r !== n && t.call(e, r)) {
    const o = Xu(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Nh = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ new WeakMap(), Ah = /* @__PURE__ */ new WeakMap(), Dh = /* @__PURE__ */ new WeakMap();
function k1(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function M1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : k1(Xu(e));
}
function Ln(e) {
  return Er(e) ? e : Ll(
    e,
    !1,
    S1,
    R1,
    Nh
  );
}
function rd(e) {
  return Ll(
    e,
    !1,
    O1,
    I1,
    _h
  );
}
function js(e) {
  return Ll(
    e,
    !0,
    C1,
    L1,
    Ah
  );
}
function cs(e) {
  return Ll(
    e,
    !0,
    T1,
    $1,
    Dh
  );
}
function Ll(e, t, n, r, o) {
  if (!nt(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = M1(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Dn(e) {
  return Er(e) ? Dn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Er(e) {
  return !!(e && e.__v_isReadonly);
}
function Ni(e) {
  return !!(e && e.__v_isShallow);
}
function _i(e) {
  return Dn(e) || Er(e);
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function Qn(e) {
  return Ya(e, "__v_skip", !0), e;
}
const Ai = (e) => nt(e) ? Ln(e) : e, od = (e) => nt(e) ? js(e) : e;
function sd(e) {
  Yr && rn && (e = Le(e), process.env.NODE_ENV !== "production" ? Jc(e.dep || (e.dep = Ti()), {
    target: e,
    type: "get",
    key: "value"
  }) : Jc(e.dep || (e.dep = Ti())));
}
function $l(e, t) {
  e = Le(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? ls(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ls(n));
}
function rt(e) {
  return !!(e && e.__v_isRef === !0);
}
function W(e) {
  return Ph(e, !1);
}
function hs(e) {
  return Ph(e, !0);
}
function Ph(e, t) {
  return rt(e) ? e : new j1(e, t);
}
class j1 {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Le(t), this._value = n ? t : Ai(t);
  }
  get value() {
    return sd(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ni(t) || Er(t);
    t = n ? t : Le(t), eo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ai(t), $l(this, t));
  }
}
function V1(e) {
  $l(e, process.env.NODE_ENV !== "production" ? e.value : void 0);
}
function A(e) {
  return rt(e) ? e.value : e;
}
function F1(e) {
  return Ae(e) ? e() : A(e);
}
const B1 = {
  get: (e, t, n) => A(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return rt(o) && !rt(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function id(e) {
  return Dn(e) ? e : new Proxy(e, B1);
}
class U1 {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => sd(this),
      () => $l(this)
    );
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Rh(e) {
  return new U1(e);
}
function ro(e) {
  process.env.NODE_ENV !== "production" && !_i(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = ve(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ih(e, n);
  return t;
}
class H1 {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return b1(Le(this._object), this._key);
  }
}
class z1 {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function ms(e, t, n) {
  return rt(e) ? e : Ae(e) ? new z1(e) : nt(e) && arguments.length > 1 ? Ih(e, t, n) : W(e);
}
function Ih(e, t, n) {
  const r = e[t];
  return rt(r) ? r : new H1(e, t, n);
}
class K1 {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ss(t, () => {
      this._dirty || (this._dirty = !0, $l(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Le(this);
    return sd(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function G1(e, t, n = !1) {
  let r, o;
  const s = Ae(e);
  s ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : zt) : (r = e.get, o = e.set);
  const i = new K1(r, o, s || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Ao = [];
function ci(e) {
  Ao.push(e);
}
function ui() {
  Ao.pop();
}
function K(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Ko();
  const n = Ao.length ? Ao[Ao.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Z1();
  if (r)
    er(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${Hl(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...W1(o)), console.warn(...s);
  }
  Go();
}
function Z1() {
  let e = Ao[Ao.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function W1(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Y1(n));
  }), t;
}
function Y1({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Hl(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...X1(e.props), s] : [o + s];
}
function X1(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Lh(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Lh(e, t, n) {
  return vt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : rt(t) ? (t = Lh(e, Le(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Ae(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Le(t), n ? t : [`${e}=`, t]);
}
function ad(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? K(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && K(`${t} is NaN - the duration expression might be incorrect.`));
}
const ld = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function er(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Zo(s, t, n);
  }
  return o;
}
function bn(e, t, n, r) {
  if (Ae(e)) {
    const s = er(e, t, n, r);
    return s && _l(s) && s.catch((i) => {
      Zo(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(bn(e[s], t, n, r));
  return o;
}
function Zo(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? ld[n] : n;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, i, a) === !1)
            return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      er(
        l,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  J1(e, n, o, r);
}
function J1(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = ld[t];
    if (n && ci(n), K(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && ui(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Di = !1, Qc = !1;
const Xt = [];
let Jn = 0;
const vs = [];
let Yn = null, Lr = 0;
const $h = /* @__PURE__ */ Promise.resolve();
let cd = null;
const Q1 = 100;
function Pn(e) {
  const t = cd || $h;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function q1(e) {
  let t = Jn + 1, n = Xt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Xt[r], s = Ri(o);
    s < e || s === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function qi(e) {
  (!Xt.length || !Xt.includes(
    e,
    Di && e.allowRecurse ? Jn + 1 : Jn
  )) && (e.id == null ? Xt.push(e) : Xt.splice(q1(e.id), 0, e), kh());
}
function kh() {
  !Di && !Qc && (Qc = !0, cd = $h.then(Mh));
}
function e0(e) {
  const t = Xt.indexOf(e);
  t > Jn && Xt.splice(t, 1);
}
function Pi(e) {
  ve(e) ? vs.push(...e) : (!Yn || !Yn.includes(
    e,
    e.allowRecurse ? Lr + 1 : Lr
  )) && vs.push(e), kh();
}
function bf(e, t = Di ? Jn + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Xt.length; t++) {
    const n = Xt[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && ud(e, n))
        continue;
      Xt.splice(t, 1), t--, n();
    }
  }
}
function tl(e) {
  if (vs.length) {
    const t = [...new Set(vs)];
    if (vs.length = 0, Yn) {
      Yn.push(...t);
      return;
    }
    for (Yn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Yn.sort((n, r) => Ri(n) - Ri(r)), Lr = 0; Lr < Yn.length; Lr++)
      process.env.NODE_ENV !== "production" && ud(e, Yn[Lr]) || Yn[Lr]();
    Yn = null, Lr = 0;
  }
}
const Ri = (e) => e.id == null ? 1 / 0 : e.id, t0 = (e, t) => {
  const n = Ri(e) - Ri(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Mh(e) {
  Qc = !1, Di = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Xt.sort(t0);
  const t = process.env.NODE_ENV !== "production" ? (n) => ud(e, n) : zt;
  try {
    for (Jn = 0; Jn < Xt.length; Jn++) {
      const n = Xt[Jn];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        er(n, null, 14);
      }
    }
  } finally {
    Jn = 0, Xt.length = 0, tl(e), Di = !1, cd = null, (Xt.length || vs.length) && Mh(e);
  }
}
function ud(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Q1) {
      const r = t.ownerInstance, o = r && Mi(r.type);
      return K(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Xr = !1;
const rs = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Qa().__VUE_HMR_RUNTIME__ = {
  createRecord: lc(jh),
  rerender: lc(o0),
  reload: lc(s0)
});
const Lo = /* @__PURE__ */ new Map();
function n0(e) {
  const t = e.type.__hmrId;
  let n = Lo.get(t);
  n || (jh(t, e.type), n = Lo.get(t)), n.instances.add(e);
}
function r0(e) {
  Lo.get(e.type.__hmrId).instances.delete(e);
}
function jh(e, t) {
  return Lo.has(e) ? !1 : (Lo.set(e, {
    initialDef: di(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function di(e) {
  return Rm(e) ? e.__vccOpts : e;
}
function o0(e, t) {
  const n = Lo.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, di(r.type).render = t), r.renderCache = [], Xr = !0, r.update(), Xr = !1;
  }));
}
function s0(e, t) {
  const n = Lo.get(e);
  if (!n)
    return;
  t = di(t), xf(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = di(o.type);
    rs.has(s) || (s !== n.initialDef && xf(s, t), rs.add(s)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (rs.add(s), o.ceReload(t.styles), rs.delete(s)) : o.parent ? qi(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Pi(() => {
    for (const o of r)
      rs.delete(
        di(o.type)
      );
  });
}
function xf(e, t) {
  ft(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function lc(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Fn, qs = [], qc = !1;
function ea(e, ...t) {
  Fn ? Fn.emit(e, ...t) : qc || qs.push({ event: e, args: t });
}
function dd(e, t) {
  var n, r;
  Fn = e, Fn ? (Fn.enabled = !0, qs.forEach(({ event: o, args: s }) => Fn.emit(o, ...s)), qs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    dd(s, t);
  }), setTimeout(() => {
    Fn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, qc = !0, qs = []);
  }, 3e3)) : (qc = !0, qs = []);
}
function i0(e, t) {
  ea("app:init", e, t, {
    Fragment: Ye,
    Text: oo,
    Comment: Rt,
    Static: Jr
  });
}
function a0(e) {
  ea("app:unmount", e);
}
const eu = /* @__PURE__ */ fd(
  "component:added"
  /* COMPONENT_ADDED */
), Vh = /* @__PURE__ */ fd(
  "component:updated"
  /* COMPONENT_UPDATED */
), l0 = /* @__PURE__ */ fd(
  "component:removed"
  /* COMPONENT_REMOVED */
), c0 = (e) => {
  Fn && typeof Fn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Fn.cleanupBuffer(e) && l0(e);
};
function fd(e) {
  return (t) => {
    ea(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const u0 = /* @__PURE__ */ Fh(
  "perf:start"
  /* PERFORMANCE_START */
), d0 = /* @__PURE__ */ Fh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Fh(e) {
  return (t, n, r) => {
    ea(e, t.appContext.app, t.uid, t, n, r);
  };
}
function f0(e, t, n) {
  ea(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function p0(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || dt;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(pr(t) in d)) && K(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${pr(t)}" prop.`
        );
      else {
        const f = u[t];
        Ae(f) && (f(...n) || K(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in r) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: f } = r[u] || dt;
    f && (o = n.map((p) => vt(p) ? p.trim() : p)), d && (o = n.map(Xa));
  }
  if (process.env.NODE_ENV !== "production" && f0(e, t, o), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && r[pr(u)] && K(
      `Event "${u}" is emitted in component ${Hl(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${fn(t)}" instead of "${t}".`
    );
  }
  let a, l = r[a = pr(t)] || // also try camelCase event handler (#2249)
  r[a = pr(hn(t))];
  !l && s && (l = r[a = pr(fn(t))]), l && bn(
    l,
    e,
    6,
    o
  );
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, bn(
      c,
      e,
      6,
      o
    );
  }
}
function Bh(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, a = !1;
  if (!Ae(e)) {
    const l = (c) => {
      const u = Bh(c, t, !0);
      u && (a = !0, ft(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (nt(e) && r.set(e, null), null) : (ve(s) ? s.forEach((l) => i[l] = null) : ft(i, s), nt(e) && r.set(e, i), i);
}
function kl(e, t) {
  return !e || !$s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, fn(t)) || Qe(e, t));
}
let Pt = null, Ml = null;
function Ii(e) {
  const t = Pt;
  return Pt = e, Ml = e && e.type.__scopeId || null, t;
}
function Uh(e) {
  Ml = e;
}
function Hh() {
  Ml = null;
}
const h0 = (e) => me;
function me(e, t = Pt, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && lu(-1);
    const s = Ii(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ii(s), r._d && lu(1);
    }
    return process.env.NODE_ENV !== "production" && Vh(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let tu = !1;
function nl() {
  tu = !0;
}
function ka(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: d,
    data: f,
    setupState: p,
    ctx: h,
    inheritAttrs: v
  } = e;
  let m, b;
  const x = Ii(e);
  process.env.NODE_ENV !== "production" && (tu = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || r, S = process.env.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(E, {
        get(T, D, _) {
          return K(
            `Property '${String(
              D
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(T, D, _);
        }
      }) : E;
      m = dn(
        u.call(
          S,
          E,
          d,
          s,
          p,
          f,
          h
        )
      ), b = l;
    } else {
      const E = t;
      process.env.NODE_ENV !== "production" && l === s && nl(), m = dn(
        E.length > 1 ? E(
          s,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return nl(), l;
            },
            slots: a,
            emit: c
          } : { attrs: l, slots: a, emit: c }
        ) : E(
          s,
          null
          /* we know it doesn't need it */
        )
      ), b = t.props ? l : v0(l);
    }
  } catch (E) {
    hi.length = 0, Zo(E, e, 1), m = U(Rt);
  }
  let g = m, y;
  if (process.env.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && ([g, y] = m0(m)), b && v !== !1) {
    const E = Object.keys(b), { shapeFlag: S } = g;
    if (E.length) {
      if (S & 7)
        i && E.some(Wa) && (b = g0(
          b,
          i
        )), g = En(g, b);
      else if (process.env.NODE_ENV !== "production" && !tu && g.type !== Rt) {
        const T = Object.keys(l), D = [], _ = [];
        for (let N = 0, R = T.length; N < R; N++) {
          const M = T[N];
          $s(M) ? Wa(M) || D.push(M[2].toLowerCase() + M.slice(3)) : _.push(M);
        }
        _.length && K(
          `Extraneous non-props attributes (${_.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), D.length && K(
          `Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ef(g) && K(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = En(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ef(g) && K(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), g.transition = n.transition), process.env.NODE_ENV !== "production" && y ? y(g) : m = g, Ii(x), m;
}
const m0 = (e) => {
  const t = e.children, n = e.dynamicChildren, r = pd(t);
  if (!r)
    return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (a) => {
    t[o] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [dn(r), i];
};
function pd(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (wr(r)) {
      if (r.type !== Rt || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
const v0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $s(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, g0 = (e, t) => {
  const n = {};
  for (const r in e)
    (!Wa(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Ef = (e) => e.shapeFlag & 7 || e.type === Rt;
function y0(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, c = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || a) && Xr || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? wf(r, i, c) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (i[f] !== r[f] && !kl(c, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? wf(r, i, c) : !0 : !!i;
  return !1;
}
function wf(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !kl(n, s))
      return !0;
  }
  return !1;
}
function hd({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const rl = "components", b0 = "directives";
function Wn(e, t) {
  return gd(rl, e, !0, t) || e;
}
const md = Symbol.for("v-ndc");
function vd(e) {
  return vt(e) ? gd(rl, e, !1) || e : e || md;
}
function x0(e) {
  return gd(b0, e);
}
function gd(e, t, n = !0, r = !1) {
  const o = Pt || Dt;
  if (o) {
    const s = o.type;
    if (e === rl) {
      const a = Mi(
        s,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (a && (a === t || a === hn(t) || a === qr(hn(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Sf(o[e] || s[e], t) || // global registration
      Sf(o.appContext[e], t)
    );
    if (!i && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const a = e === rl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      K(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && K(
      `resolve${qr(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Sf(e, t) {
  return e && (e[t] || e[hn(t)] || e[qr(hn(t))]);
}
const zh = (e) => e.__isSuspense, E0 = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, o, s, i, a, l, c) {
    e == null ? S0(
      t,
      n,
      r,
      o,
      s,
      i,
      a,
      l,
      c
    ) : C0(
      e,
      t,
      n,
      r,
      o,
      i,
      a,
      l,
      c
    );
  },
  hydrate: O0,
  create: yd,
  normalize: T0
}, w0 = E0;
function Li(e, t) {
  const n = e.props && e.props[t];
  Ae(n) && n();
}
function S0(e, t, n, r, o, s, i, a, l) {
  const {
    p: c,
    o: { createElement: u }
  } = l, d = u("div"), f = e.suspense = yd(
    e,
    o,
    r,
    t,
    d,
    n,
    s,
    i,
    a,
    l
  );
  c(
    null,
    f.pendingBranch = e.ssContent,
    d,
    null,
    r,
    f,
    s,
    i
  ), f.deps > 0 ? (Li(e, "onPending"), Li(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    s,
    i
  ), gs(f, e.ssFallback)) : f.resolve(!1, !0);
}
function C0(e, t, n, r, o, s, i, a, { p: l, um: c, o: { createElement: u } }) {
  const d = t.suspense = e.suspense;
  d.vnode = t, t.el = e.el;
  const f = t.ssContent, p = t.ssFallback, { activeBranch: h, pendingBranch: v, isInFallback: m, isHydrating: b } = d;
  if (v)
    d.pendingBranch = f, Bn(f, v) ? (l(
      v,
      f,
      d.hiddenContainer,
      null,
      o,
      d,
      s,
      i,
      a
    ), d.deps <= 0 ? d.resolve() : m && (l(
      h,
      p,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      a
    ), gs(d, p))) : (d.pendingId++, b ? (d.isHydrating = !1, d.activeBranch = v) : c(v, o, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), m ? (l(
      null,
      f,
      d.hiddenContainer,
      null,
      o,
      d,
      s,
      i,
      a
    ), d.deps <= 0 ? d.resolve() : (l(
      h,
      p,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      a
    ), gs(d, p))) : h && Bn(f, h) ? (l(
      h,
      f,
      n,
      r,
      o,
      d,
      s,
      i,
      a
    ), d.resolve(!0)) : (l(
      null,
      f,
      d.hiddenContainer,
      null,
      o,
      d,
      s,
      i,
      a
    ), d.deps <= 0 && d.resolve()));
  else if (h && Bn(f, h))
    l(
      h,
      f,
      n,
      r,
      o,
      d,
      s,
      i,
      a
    ), gs(d, f);
  else if (Li(t, "onPending"), d.pendingBranch = f, d.pendingId++, l(
    null,
    f,
    d.hiddenContainer,
    null,
    o,
    d,
    s,
    i,
    a
  ), d.deps <= 0)
    d.resolve();
  else {
    const { timeout: x, pendingId: g } = d;
    x > 0 ? setTimeout(() => {
      d.pendingId === g && d.fallback(p);
    }, x) : x === 0 && d.fallback(p);
  }
}
let Cf = !1;
function yd(e, t, n, r, o, s, i, a, l, c, u = !1) {
  process.env.NODE_ENV !== "production" && !Cf && (Cf = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: d,
    m: f,
    um: p,
    n: h,
    o: { parentNode: v, remove: m }
  } = c;
  let b;
  const x = N0(e);
  x && t != null && t.pendingBranch && (b = t.pendingId, t.deps++);
  const g = e.props ? Ja(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && ad(g, "Suspense timeout");
  const y = {
    vnode: e,
    parent: t,
    parentComponent: n,
    isSVG: i,
    container: r,
    hiddenContainer: o,
    anchor: s,
    deps: 0,
    pendingId: 0,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(E = !1, S = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!E && !y.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (y.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: T,
        activeBranch: D,
        pendingBranch: _,
        pendingId: N,
        effects: R,
        parentComponent: M,
        container: $
      } = y;
      let H = !1;
      if (y.isHydrating)
        y.isHydrating = !1;
      else if (!E) {
        H = D && _.transition && _.transition.mode === "out-in", H && (D.transition.afterLeave = () => {
          N === y.pendingId && (f(_, $, V, 0), Pi(R));
        });
        let { anchor: V } = y;
        D && (V = h(D), p(D, M, y, !0)), H || f(_, $, V, 0);
      }
      gs(y, _), y.pendingBranch = null, y.isInFallback = !1;
      let G = y.parent, P = !1;
      for (; G; ) {
        if (G.pendingBranch) {
          G.effects.push(...R), P = !0;
          break;
        }
        G = G.parent;
      }
      !P && !H && Pi(R), y.effects = [], x && t && t.pendingBranch && b === t.pendingId && (t.deps--, t.deps === 0 && !S && t.resolve()), Li(T, "onResolve");
    },
    fallback(E) {
      if (!y.pendingBranch)
        return;
      const { vnode: S, activeBranch: T, parentComponent: D, container: _, isSVG: N } = y;
      Li(S, "onFallback");
      const R = h(T), M = () => {
        y.isInFallback && (d(
          null,
          E,
          _,
          R,
          D,
          null,
          // fallback tree will not have suspense context
          N,
          a,
          l
        ), gs(y, E));
      }, $ = E.transition && E.transition.mode === "out-in";
      $ && (T.transition.afterLeave = M), y.isInFallback = !0, p(
        T,
        D,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), $ || M();
    },
    move(E, S, T) {
      y.activeBranch && f(y.activeBranch, E, S, T), y.container = E;
    },
    next() {
      return y.activeBranch && h(y.activeBranch);
    },
    registerDep(E, S) {
      const T = !!y.pendingBranch;
      T && y.deps++;
      const D = E.vnode.el;
      E.asyncDep.catch((_) => {
        Zo(_, E, 0);
      }).then((_) => {
        if (E.isUnmounted || y.isUnmounted || y.pendingId !== E.suspenseId)
          return;
        E.asyncResolved = !0;
        const { vnode: N } = E;
        process.env.NODE_ENV !== "production" && ci(N), du(E, _, !1), D && (N.el = D);
        const R = !D && E.subTree.el;
        S(
          E,
          N,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          v(D || E.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          D ? null : h(E.subTree),
          y,
          i,
          l
        ), R && m(R), hd(E, N.el), process.env.NODE_ENV !== "production" && ui(), T && --y.deps === 0 && y.resolve();
      });
    },
    unmount(E, S) {
      y.isUnmounted = !0, y.activeBranch && p(
        y.activeBranch,
        n,
        E,
        S
      ), y.pendingBranch && p(
        y.pendingBranch,
        n,
        E,
        S
      );
    }
  };
  return y;
}
function O0(e, t, n, r, o, s, i, a, l) {
  const c = t.suspense = yd(
    t,
    r,
    n,
    e.parentNode,
    document.createElement("div"),
    null,
    o,
    s,
    i,
    a,
    !0
    /* hydrating */
  ), u = l(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    s,
    i
  );
  return c.deps === 0 && c.resolve(!1, !0), u;
}
function T0(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = Of(
    r ? n.default : n
  ), e.ssFallback = r ? Of(n.fallback) : U(Rt);
}
function Of(e) {
  let t;
  if (Ae(e)) {
    const n = ko && e._c;
    n && (e._d = !1, Q()), e = e(), n && (e._d = !0, t = pn, wm());
  }
  if (ve(e)) {
    const n = pd(e);
    process.env.NODE_ENV !== "production" && !n && e.filter((r) => r !== md).length > 0 && K("<Suspense> slots expect a single root node."), e = n;
  }
  return e = dn(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Kh(e, t) {
  t && t.pendingBranch ? ve(e) ? t.effects.push(...e) : t.effects.push(e) : Pi(e);
}
function gs(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e, o = n.el = t.el;
  r && r.subTree === n && (r.vnode.el = o, hd(r, o));
}
function N0(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
function Qt(e, t) {
  return ta(e, null, t);
}
function Gh(e, t) {
  return ta(
    e,
    null,
    process.env.NODE_ENV !== "production" ? ft({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function _0(e, t) {
  return ta(
    e,
    null,
    process.env.NODE_ENV !== "production" ? ft({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const xa = {};
function Lt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Ae(t) && K(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ta(e, t, n);
}
function ta(e, t, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = dt) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && K(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && K(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (E) => {
    K(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = Pl() === ((a = Dt) == null ? void 0 : a.scope) ? Dt : null;
  let u, d = !1, f = !1;
  if (rt(e) ? (u = () => e.value, d = Ni(e)) : Dn(e) ? (u = () => e, r = !0) : ve(e) ? (f = !0, d = e.some((E) => Dn(E) || Ni(E)), u = () => e.map((E) => {
    if (rt(E))
      return E.value;
    if (Dn(E))
      return To(E);
    if (Ae(E))
      return er(E, c, 2);
    process.env.NODE_ENV !== "production" && l(E);
  })) : Ae(e) ? t ? u = () => er(e, c, 2) : u = () => {
    if (!(c && c.isUnmounted))
      return p && p(), bn(
        e,
        c,
        3,
        [h]
      );
  } : (u = zt, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const E = u;
    u = () => To(E());
  }
  let p, h = (E) => {
    p = g.onStop = () => {
      er(E, c, 4), p = g.onStop = void 0;
    };
  }, v;
  if (Ts)
    if (h = zt, t ? n && bn(t, c, 3, [
      u(),
      f ? [] : void 0,
      h
    ]) : u(), o === "sync") {
      const E = Lm();
      v = E.__watcherHandles || (E.__watcherHandles = []);
    } else
      return zt;
  let m = f ? new Array(e.length).fill(xa) : xa;
  const b = () => {
    if (g.active)
      if (t) {
        const E = g.run();
        (r || d || (f ? E.some((S, T) => eo(S, m[T])) : eo(E, m))) && (p && p(), bn(t, c, 3, [
          E,
          // pass undefined as the old value when it's changed for the first time
          m === xa ? void 0 : f && m[0] === xa ? [] : m,
          h
        ]), m = E);
      } else
        g.run();
  };
  b.allowRecurse = !!t;
  let x;
  o === "sync" ? x = b : o === "post" ? x = () => Bt(b, c && c.suspense) : (b.pre = !0, c && (b.id = c.uid), x = () => qi(b));
  const g = new Ss(u, x);
  process.env.NODE_ENV !== "production" && (g.onTrack = s, g.onTrigger = i), t ? n ? b() : m = g.run() : o === "post" ? Bt(
    g.run.bind(g),
    c && c.suspense
  ) : g.run();
  const y = () => {
    g.stop(), c && c.scope && Yu(c.scope.effects, g);
  };
  return v && v.push(y), y;
}
function A0(e, t, n) {
  const r = this.proxy, o = vt(e) ? e.includes(".") ? Zh(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Ae(t) ? s = t : (s = t.handler, n = t);
  const i = Dt;
  so(this);
  const a = ta(o, s.bind(r), n);
  return i ? so(i) : Qr(), a;
}
function Zh(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function To(e, t) {
  if (!nt(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), rt(e))
    To(e.value, t);
  else if (ve(e))
    for (let n = 0; n < e.length; n++)
      To(e[n], t);
  else if (zo(e) || No(e))
    e.forEach((n) => {
      To(n, t);
    });
  else if (mh(e))
    for (const n in e)
      To(e[n], t);
  return e;
}
function Wh(e) {
  qg(e) && K("Do not use built-in directive ids as custom directive id: " + e);
}
function Hn(e, t) {
  const n = Pt;
  if (n === null)
    return process.env.NODE_ENV !== "production" && K("withDirectives can only be used inside render functions."), e;
  const r = Ul(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, a, l, c = dt] = t[s];
    i && (Ae(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && To(a), o.push({
      dir: i,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Xn(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (Ko(), bn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Go());
  }
}
const $r = Symbol("_leaveCb"), Ea = Symbol("_enterCb");
function bd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ht(() => {
    e.isMounted = !0;
  }), na(() => {
    e.isUnmounting = !0;
  }), e;
}
const On = [Function, Array], xd = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: On,
  onEnter: On,
  onAfterEnter: On,
  onEnterCancelled: On,
  // leave
  onBeforeLeave: On,
  onLeave: On,
  onAfterLeave: On,
  onLeaveCancelled: On,
  // appear
  onBeforeAppear: On,
  onAppear: On,
  onAfterAppear: On,
  onAppearCancelled: On
}, D0 = {
  name: "BaseTransition",
  props: xd,
  setup(e, { slots: t }) {
    const n = Cn(), r = bd();
    let o;
    return () => {
      const s = t.default && jl(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let v = !1;
        for (const m of s)
          if (m.type !== Rt) {
            if (process.env.NODE_ENV !== "production" && v) {
              K(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (i = m, v = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const a = Le(e), { mode: l } = a;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && K(`invalid <transition> mode: ${l}`), r.isLeaving)
        return cc(i);
      const c = Tf(i);
      if (!c)
        return cc(i);
      const u = Cs(
        c,
        a,
        r,
        n
      );
      $o(c, u);
      const d = n.subTree, f = d && Tf(d);
      let p = !1;
      const { getTransitionKey: h } = c.type;
      if (h) {
        const v = h();
        o === void 0 ? o = v : v !== o && (o = v, p = !0);
      }
      if (f && f.type !== Rt && (!Bn(c, f) || p)) {
        const v = Cs(
          f,
          a,
          r,
          n
        );
        if ($o(f, v), l === "out-in")
          return r.isLeaving = !0, v.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, cc(i);
        l === "in-out" && c.type !== Rt && (v.delayLeave = (m, b, x) => {
          const g = Xh(
            r,
            f
          );
          g[String(f.key)] = f, m[$r] = () => {
            b(), m[$r] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = x;
        });
      }
      return i;
    };
  }
}, Yh = D0;
function Xh(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Cs(e, t, n, r) {
  const {
    appear: o,
    mode: s,
    persisted: i = !1,
    onBeforeEnter: a,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: f,
    onAfterLeave: p,
    onLeaveCancelled: h,
    onBeforeAppear: v,
    onAppear: m,
    onAfterAppear: b,
    onAppearCancelled: x
  } = t, g = String(e.key), y = Xh(n, e), E = (D, _) => {
    D && bn(
      D,
      r,
      9,
      _
    );
  }, S = (D, _) => {
    const N = _[1];
    E(D, _), ve(D) ? D.every((R) => R.length <= 1) && N() : D.length <= 1 && N();
  }, T = {
    mode: s,
    persisted: i,
    beforeEnter(D) {
      let _ = a;
      if (!n.isMounted)
        if (o)
          _ = v || a;
        else
          return;
      D[$r] && D[$r](
        !0
        /* cancelled */
      );
      const N = y[g];
      N && Bn(e, N) && N.el[$r] && N.el[$r](), E(_, [D]);
    },
    enter(D) {
      let _ = l, N = c, R = u;
      if (!n.isMounted)
        if (o)
          _ = m || l, N = b || c, R = x || u;
        else
          return;
      let M = !1;
      const $ = D[Ea] = (H) => {
        M || (M = !0, H ? E(R, [D]) : E(N, [D]), T.delayedLeave && T.delayedLeave(), D[Ea] = void 0);
      };
      _ ? S(_, [D, $]) : $();
    },
    leave(D, _) {
      const N = String(e.key);
      if (D[Ea] && D[Ea](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return _();
      E(d, [D]);
      let R = !1;
      const M = D[$r] = ($) => {
        R || (R = !0, _(), $ ? E(h, [D]) : E(p, [D]), D[$r] = void 0, y[N] === e && delete y[N]);
      };
      y[N] = e, f ? S(f, [D, M]) : M();
    },
    clone(D) {
      return Cs(D, t, n, r);
    }
  };
  return T;
}
function cc(e) {
  if (Vs(e))
    return e = En(e), e.children = null, e;
}
function Tf(e) {
  return Vs(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function $o(e, t) {
  e.shapeFlag & 6 && e.component ? $o(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jl(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ye ? (i.patchFlag & 128 && o++, r = r.concat(
      jl(i.children, t, a)
    )) : (t || i.type !== Rt) && r.push(a != null ? En(i, { key: a }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  return Ae(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ft({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Do = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function P0(e) {
  Ae(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    timeout: s,
    // undefined = never times out
    suspensible: i = !0,
    onError: a
  } = e;
  let l = null, c, u = 0;
  const d = () => (u++, l = null, f()), f = () => {
    let p;
    return l || (p = l = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), a)
        return new Promise((v, m) => {
          a(h, () => v(d()), () => m(h), u + 1);
        });
      throw h;
    }).then((h) => {
      if (p !== l && l)
        return l;
      if (process.env.NODE_ENV !== "production" && !h && K(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), process.env.NODE_ENV !== "production" && h && !nt(h) && !Ae(h))
        throw new Error(`Invalid async component load result: ${h}`);
      return c = h, h;
    }));
  };
  return /* @__PURE__ */ De({
    name: "AsyncComponentWrapper",
    __asyncLoader: f,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = Dt;
      if (c)
        return () => uc(c, p);
      const h = (x) => {
        l = null, Zo(
          x,
          p,
          13,
          !r
          /* do not throw in dev if user provided error component */
        );
      };
      if (i && p.suspense || Ts)
        return f().then((x) => () => uc(x, p)).catch((x) => (h(x), () => r ? U(r, {
          error: x
        }) : null));
      const v = W(!1), m = W(), b = W(!!o);
      return o && setTimeout(() => {
        b.value = !1;
      }, o), s != null && setTimeout(() => {
        if (!v.value && !m.value) {
          const x = new Error(
            `Async component timed out after ${s}ms.`
          );
          h(x), m.value = x;
        }
      }, s), f().then(() => {
        v.value = !0, p.parent && Vs(p.parent.vnode) && qi(p.parent.update);
      }).catch((x) => {
        h(x), m.value = x;
      }), () => {
        if (v.value && c)
          return uc(c, p);
        if (m.value && r)
          return U(r, {
            error: m.value
          });
        if (n && !b.value)
          return U(n);
      };
    }
  });
}
function uc(e, t) {
  const { ref: n, props: r, children: o, ce: s } = t.vnode, i = U(e, r, o);
  return i.ref = n, i.ce = s, delete t.vnode.ce, i;
}
const Vs = (e) => e.type.__isKeepAlive, R0 = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = Cn(), r = n.ctx;
    if (!r.renderer)
      return () => {
        const x = t.default && t.default();
        return x && x.length === 1 ? x[0] : x;
      };
    const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
    let i = null;
    process.env.NODE_ENV !== "production" && (n.__v_cache = o);
    const a = n.suspense, {
      renderer: {
        p: l,
        m: c,
        um: u,
        o: { createElement: d }
      }
    } = r, f = d("div");
    r.activate = (x, g, y, E, S) => {
      const T = x.component;
      c(x, g, y, 0, a), l(
        T.vnode,
        x,
        g,
        y,
        T,
        a,
        E,
        x.slotScopeIds,
        S
      ), Bt(() => {
        T.isDeactivated = !1, T.a && Fr(T.a);
        const D = x.props && x.props.onVnodeMounted;
        D && cn(D, T.parent, x);
      }, a), process.env.NODE_ENV !== "production" && eu(T);
    }, r.deactivate = (x) => {
      const g = x.component;
      c(x, f, null, 1, a), Bt(() => {
        g.da && Fr(g.da);
        const y = x.props && x.props.onVnodeUnmounted;
        y && cn(y, g.parent, x), g.isDeactivated = !0;
      }, a), process.env.NODE_ENV !== "production" && eu(g);
    };
    function p(x) {
      dc(x), u(x, n, a, !0);
    }
    function h(x) {
      o.forEach((g, y) => {
        const E = Mi(g.type);
        E && (!x || !x(E)) && v(y);
      });
    }
    function v(x) {
      const g = o.get(x);
      !i || !Bn(g, i) ? p(g) : i && dc(i), o.delete(x), s.delete(x);
    }
    Lt(
      () => [e.include, e.exclude],
      ([x, g]) => {
        x && h((y) => ei(x, y)), g && h((y) => !ei(g, y));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let m = null;
    const b = () => {
      m != null && o.set(m, fc(n.subTree));
    };
    return ht(b), Fs(b), na(() => {
      o.forEach((x) => {
        const { subTree: g, suspense: y } = n, E = fc(g);
        if (x.type === E.type && x.key === E.key) {
          dc(E);
          const S = E.component.da;
          S && Bt(S, y);
          return;
        }
        p(x);
      });
    }), () => {
      if (m = null, !t.default)
        return null;
      const x = t.default(), g = x[0];
      if (x.length > 1)
        return process.env.NODE_ENV !== "production" && K("KeepAlive should contain exactly one component child."), i = null, x;
      if (!wr(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return i = null, g;
      let y = fc(g);
      const E = y.type, S = Mi(
        Do(y) ? y.type.__asyncResolved || {} : E
      ), { include: T, exclude: D, max: _ } = e;
      if (T && (!S || !ei(T, S)) || D && S && ei(D, S))
        return i = y, g;
      const N = y.key == null ? E : y.key, R = o.get(N);
      return y.el && (y = En(y), g.shapeFlag & 128 && (g.ssContent = y)), m = N, R ? (y.el = R.el, y.component = R.component, y.transition && $o(y, y.transition), y.shapeFlag |= 512, s.delete(N), s.add(N)) : (s.add(N), _ && s.size > parseInt(_, 10) && v(s.values().next().value)), y.shapeFlag |= 256, i = y, zh(g.type) ? g : y;
    };
  }
}, I0 = R0;
function ei(e, t) {
  return ve(e) ? e.some((n) => ei(n, t)) : vt(e) ? e.split(",").includes(t) : Qg(e) ? e.test(t) : !1;
}
function Jh(e, t) {
  qh(e, "a", t);
}
function Qh(e, t) {
  qh(e, "da", t);
}
function qh(e, t, n = Dt) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Vl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Vs(o.parent.vnode) && L0(r, t, n, o), o = o.parent;
  }
}
function L0(e, t, n, r) {
  const o = Vl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Sn(() => {
    Yu(r[t], o);
  }, n);
}
function dc(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function fc(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Vl(e, t, n = Dt, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ko(), so(n);
      const a = bn(t, n, e, i);
      return Qr(), Go(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = pr(ld[e].replace(/ hook$/, ""));
    K(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Nr = (e) => (t, n = Dt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ts || e === "sp") && Vl(e, (...r) => t(...r), n)
), em = Nr("bm"), ht = Nr("m"), tm = Nr("bu"), Fs = Nr("u"), na = Nr("bum"), Sn = Nr("um"), nm = Nr("sp"), rm = Nr(
  "rtg"
), om = Nr(
  "rtc"
);
function sm(e, t = Dt) {
  Vl("ec", e, t);
}
function tr(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (ve(e) || vt(e)) {
    o = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && K(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (nt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (i, a) => t(i, a, void 0, s && s[a])
      );
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const c = i[a];
        o[a] = t(e[c], c, a, s && s[a]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function $0(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ve(r))
      for (let o = 0; o < r.length; o++)
        e[r[o].name] = r[o].fn;
    else
      r && (e[r.name] = r.key ? (...o) => {
        const s = r.fn(...o);
        return s && (s.key = r.key), s;
      } : r.fn);
  }
  return e;
}
function Os(e, t, n = {}, r, o) {
  if (Pt.isCE || Pt.parent && Do(Pt.parent) && Pt.parent.isCE)
    return t !== "default" && (n.name = t), U("slot", n, r && r());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (K(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), Q();
  const i = s && im(s(n)), a = xn(
    Ye,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
}
function im(e) {
  return e.some((t) => wr(t) ? !(t.type === Rt || t.type === Ye && !im(t.children)) : !0) ? e : null;
}
function k0(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !nt(e))
    return K("v-on with no argument expects an object value."), n;
  for (const r in e)
    n[t && /[A-Z]/.test(r) ? `on:${r}` : pr(r)] = e[r];
  return n;
}
const nu = (e) => e ? _m(e) ? Ul(e) || e.proxy : nu(e.parent) : null, Po = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ft(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? cs(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? cs(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? cs(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? cs(e.refs) : e.refs,
    $parent: (e) => nu(e.parent),
    $root: (e) => nu(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Sd(e),
    $forceUpdate: (e) => e.f || (e.f = () => qi(e.update)),
    $nextTick: (e) => e.n || (e.n = Pn.bind(e.proxy)),
    $watch: (e) => A0.bind(e)
  })
), Ed = (e) => e === "_" || e === "$", pc = (e, t) => e !== dt && !e.__isScriptSetup && Qe(e, t), fi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const p = i[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (pc(r, t))
          return i[t] = 1, r[t];
        if (o !== dt && Qe(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && Qe(c, t)
        )
          return i[t] = 3, s[t];
        if (n !== dt && Qe(n, t))
          return i[t] = 4, n[t];
        ru && (i[t] = 0);
      }
    }
    const u = Po[t];
    let d, f;
    if (u)
      return t === "$attrs" ? (Kt(e, "get", t), process.env.NODE_ENV !== "production" && nl()) : process.env.NODE_ENV !== "production" && t === "$slots" && Kt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== dt && Qe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Qe(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && Pt && (!vt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== dt && Ed(t[0]) && Qe(o, t) ? K(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Pt && K(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return pc(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && Qe(o, t) ? (K(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== dt && Qe(r, t) ? (r[t] = n, !0) : Qe(e.props, t) ? (process.env.NODE_ENV !== "production" && K(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && K(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let a;
    return !!n[i] || e !== dt && Qe(e, i) || pc(t, i) || (a = s[0]) && Qe(a, i) || Qe(r, i) || Qe(Po, i) || Qe(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (fi.ownKeys = (e) => (K(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const M0 = /* @__PURE__ */ ft(
  {},
  fi,
  {
    get(e, t) {
      if (t !== Symbol.unscopables)
        return fi.get(e, t, e);
    },
    has(e, t) {
      const n = t[0] !== "_" && !r1(t);
      return process.env.NODE_ENV !== "production" && !n && fi.has(e, t) && K(
        `Property ${JSON.stringify(
          t
        )} should not start with _ which is a reserved prefix for Vue internals.`
      ), n;
    }
  }
);
function j0(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Po).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Po[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: zt
    });
  }), t;
}
function V0(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: zt
    });
  });
}
function F0(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Le(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Ed(r[0])) {
        K(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: zt
      });
    }
  });
}
const Wo = (e) => K(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function B0() {
  return process.env.NODE_ENV !== "production" && Wo("defineProps"), null;
}
function U0() {
  return process.env.NODE_ENV !== "production" && Wo("defineEmits"), null;
}
function H0(e) {
  process.env.NODE_ENV !== "production" && Wo("defineExpose");
}
function z0(e) {
  process.env.NODE_ENV !== "production" && Wo("defineOptions");
}
function K0() {
  return process.env.NODE_ENV !== "production" && Wo("defineSlots"), null;
}
function G0() {
  process.env.NODE_ENV !== "production" && Wo("defineModel");
}
function Z0(e, t) {
  return process.env.NODE_ENV !== "production" && Wo("withDefaults"), null;
}
function W0() {
  return am().slots;
}
function Y0() {
  return am().attrs;
}
function wd(e, t, n) {
  const r = Cn();
  if (process.env.NODE_ENV !== "production" && !r)
    return K("useModel() called without active instance."), W();
  if (process.env.NODE_ENV !== "production" && !r.propsOptions[0][t])
    return K(`useModel() called with prop "${t}" which is not declared.`), W();
  if (n && n.local) {
    const o = W(e[t]);
    return Lt(
      () => e[t],
      (s) => o.value = s
    ), Lt(o, (s) => {
      s !== e[t] && r.emit(`update:${t}`, s);
    }), o;
  } else
    return {
      __v_isRef: !0,
      get value() {
        return e[t];
      },
      set value(o) {
        r.emit(`update:${t}`, o);
      }
    };
}
function am() {
  const e = Cn();
  return process.env.NODE_ENV !== "production" && !e && K("useContext() called without active instance."), e.setupContext || (e.setupContext = Pm(e));
}
function $i(e) {
  return ve(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function X0(e, t) {
  const n = $i(e);
  for (const r in t) {
    if (r.startsWith("__skip"))
      continue;
    let o = n[r];
    o ? ve(o) || Ae(o) ? o = n[r] = { type: o, default: t[r] } : o.default = t[r] : o === null ? o = n[r] = { default: t[r] } : process.env.NODE_ENV !== "production" && K(`props default key "${r}" has no corresponding declaration.`), o && t[`__skip_${r}`] && (o.skipFactory = !0);
  }
  return n;
}
function J0(e, t) {
  return !e || !t ? e || t : ve(e) && ve(t) ? e.concat(t) : ft({}, $i(e), $i(t));
}
function Q0(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => e[r]
    });
  return n;
}
function q0(e) {
  const t = Cn();
  process.env.NODE_ENV !== "production" && !t && K(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Qr(), _l(n) && (n = n.catch((r) => {
    throw so(t), r;
  })), [n, () => so(t)];
}
function ey() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? K(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ru = !0;
function ty(e) {
  const t = Sd(e), n = e.proxy, r = e.ctx;
  ru = !1, t.beforeCreate && Nf(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: h,
    activated: v,
    deactivated: m,
    beforeDestroy: b,
    beforeUnmount: x,
    destroyed: g,
    unmounted: y,
    render: E,
    renderTracked: S,
    renderTriggered: T,
    errorCaptured: D,
    serverPrefetch: _,
    // public API
    expose: N,
    inheritAttrs: R,
    // assets
    components: M,
    directives: $,
    filters: H
  } = t, G = process.env.NODE_ENV !== "production" ? ey() : null;
  if (process.env.NODE_ENV !== "production") {
    const [V] = e.propsOptions;
    if (V)
      for (const B in V)
        G("Props", B);
  }
  if (c && ny(c, r, G), i)
    for (const V in i) {
      const B = i[V];
      Ae(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, V, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[V] = B.bind(n), process.env.NODE_ENV !== "production" && G("Methods", V)) : process.env.NODE_ENV !== "production" && K(
        `Method "${V}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !Ae(o) && K(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const V = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && _l(V) && K(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !nt(V))
      process.env.NODE_ENV !== "production" && K("data() should return an object.");
    else if (e.data = Ln(V), process.env.NODE_ENV !== "production")
      for (const B in V)
        G("Data", B), Ed(B[0]) || Object.defineProperty(r, B, {
          configurable: !0,
          enumerable: !0,
          get: () => V[B],
          set: zt
        });
  }
  if (ru = !0, s)
    for (const V in s) {
      const B = s[V], Ce = Ae(B) ? B.bind(n, n) : Ae(B.get) ? B.get.bind(n, n) : zt;
      process.env.NODE_ENV !== "production" && Ce === zt && K(`Computed property "${V}" has no getter.`);
      const We = !Ae(B) && Ae(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        K(
          `Write operation failed: computed property "${V}" is readonly.`
        );
      } : zt, Ve = fe({
        get: Ce,
        set: We
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (ee) => Ve.value = ee
      }), process.env.NODE_ENV !== "production" && G("Computed", V);
    }
  if (a)
    for (const V in a)
      lm(a[V], r, n, V);
  if (l) {
    const V = Ae(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((B) => {
      Mt(B, V[B]);
    });
  }
  u && Nf(u, e, "c");
  function P(V, B) {
    ve(B) ? B.forEach((Ce) => V(Ce.bind(n))) : B && V(B.bind(n));
  }
  if (P(em, d), P(ht, f), P(tm, p), P(Fs, h), P(Jh, v), P(Qh, m), P(sm, D), P(om, S), P(rm, T), P(na, x), P(Sn, y), P(nm, _), ve(N))
    if (N.length) {
      const V = e.exposed || (e.exposed = {});
      N.forEach((B) => {
        Object.defineProperty(V, B, {
          get: () => n[B],
          set: (Ce) => n[B] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  E && e.render === zt && (e.render = E), R != null && (e.inheritAttrs = R), M && (e.components = M), $ && (e.directives = $);
}
function ny(e, t, n = zt) {
  ve(e) && (e = ou(e));
  for (const r in e) {
    const o = e[r];
    let s;
    nt(o) ? "default" in o ? s = mt(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : s = mt(o.from || r) : s = mt(o), rt(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Nf(e, t, n) {
  bn(
    ve(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function lm(e, t, n, r) {
  const o = r.includes(".") ? Zh(n, r) : () => n[r];
  if (vt(e)) {
    const s = t[e];
    Ae(s) ? Lt(o, s) : process.env.NODE_ENV !== "production" && K(`Invalid watch handler specified by key "${e}"`, s);
  } else if (Ae(e))
    Lt(o, e.bind(n));
  else if (nt(e))
    if (ve(e))
      e.forEach((s) => lm(s, t, n, r));
    else {
      const s = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(s) ? Lt(o, s, e) : process.env.NODE_ENV !== "production" && K(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && K(`Invalid watch option: "${r}"`, e);
}
function Sd(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (c) => ol(l, c, i, !0)
  ), ol(l, t, i)), nt(t) && s.set(t, l), l;
}
function ol(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && ol(e, s, n, !0), o && o.forEach(
    (i) => ol(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && K(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ry[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ry = {
  data: _f,
  props: Af,
  emits: Af,
  // objects
  methods: ti,
  computed: ti,
  // lifecycle
  beforeCreate: en,
  created: en,
  beforeMount: en,
  mounted: en,
  beforeUpdate: en,
  updated: en,
  beforeDestroy: en,
  beforeUnmount: en,
  destroyed: en,
  unmounted: en,
  activated: en,
  deactivated: en,
  errorCaptured: en,
  serverPrefetch: en,
  // assets
  components: ti,
  directives: ti,
  // watch
  watch: sy,
  // provide / inject
  provide: _f,
  inject: oy
};
function _f(e, t) {
  return t ? e ? function() {
    return ft(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function oy(e, t) {
  return ti(ou(e), ou(t));
}
function ou(e) {
  if (ve(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function en(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ti(e, t) {
  return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Af(e, t) {
  return e ? ve(e) && ve(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ft(
    /* @__PURE__ */ Object.create(null),
    $i(e),
    $i(t ?? {})
  ) : t;
}
function sy(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ft(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = en(e[r], t[r]);
  return n;
}
function cm() {
  return {
    app: null,
    config: {
      isNativeTag: ph,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let iy = 0;
function ay(e, t) {
  return function(r, o = null) {
    Ae(r) || (r = ft({}, r)), o != null && !nt(o) && (process.env.NODE_ENV !== "production" && K("root props passed to app.mount() must be an object."), o = null);
    const s = cm();
    process.env.NODE_ENV !== "production" && Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        K(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API."
        );
      }
    });
    const i = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const l = s.app = {
      _uid: iy++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: pu,
      get config() {
        return s.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && K(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...u) {
        return i.has(c) ? process.env.NODE_ENV !== "production" && K("Plugin has already been applied to target app.") : c && Ae(c.install) ? (i.add(c), c.install(l, ...u)) : Ae(c) ? (i.add(c), c(l, ...u)) : process.env.NODE_ENV !== "production" && K(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(c) {
        return s.mixins.includes(c) ? process.env.NODE_ENV !== "production" && K(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : s.mixins.push(c), l;
      },
      component(c, u) {
        return process.env.NODE_ENV !== "production" && uu(c, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[c] && K(`Component "${c}" has already been registered in target app.`), s.components[c] = u, l) : s.components[c];
      },
      directive(c, u) {
        return process.env.NODE_ENV !== "production" && Wh(c), u ? (process.env.NODE_ENV !== "production" && s.directives[c] && K(`Directive "${c}" has already been registered in target app.`), s.directives[c] = u, l) : s.directives[c];
      },
      mount(c, u, d) {
        if (a)
          process.env.NODE_ENV !== "production" && K(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && K(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const f = U(r, o);
          return f.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(En(f), c, d);
          }), u && t ? t(f, c) : e(f, c, d), a = !0, l._container = c, c.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = f.component, i0(l, pu)), Ul(f.component) || f.component.proxy;
        }
      },
      unmount() {
        a ? (e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, a0(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && K("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return process.env.NODE_ENV !== "production" && c in s.provides && K(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), s.provides[c] = u, l;
      },
      runWithContext(c) {
        ki = l;
        try {
          return c();
        } finally {
          ki = null;
        }
      }
    };
    return l;
  };
}
let ki = null;
function Mt(e, t) {
  if (!Dt)
    process.env.NODE_ENV !== "production" && K("provide() can only be used inside setup().");
  else {
    let n = Dt.provides;
    const r = Dt.parent && Dt.parent.provides;
    r === n && (n = Dt.provides = Object.create(r)), n[e] = t;
  }
}
function mt(e, t, n = !1) {
  const r = Dt || Pt;
  if (r || ki) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ki._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Ae(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && K(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && K("inject() can only be used inside setup() or functional components.");
}
function um() {
  return !!(Dt || Pt || ki);
}
function ly(e, t, n, r = !1) {
  const o = {}, s = {};
  Ya(s, Fl, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), dm(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && pm(t || {}, o, e), n ? e.props = r ? o : rd(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function cy(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function uy(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = Le(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && cy(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (kl(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (Qe(s, f))
            p !== s[f] && (s[f] = p, c = !0);
          else {
            const h = hn(f);
            o[h] = su(
              l,
              a,
              h,
              p,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          p !== s[f] && (s[f] = p, c = !0);
      }
    }
  } else {
    dm(e, t, o, s) && (c = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Qe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = fn(d)) === d || !Qe(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = su(
        l,
        a,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[d]);
    if (s !== a)
      for (const d in s)
        (!t || !Qe(t, d)) && (delete s[d], c = !0);
  }
  c && qn(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && pm(t || {}, o, e);
}
function dm(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (li(l))
        continue;
      const c = t[l];
      let u;
      o && Qe(o, u = hn(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : kl(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, i = !0);
    }
  if (s) {
    const l = Le(n), c = a || dt;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = su(
        o,
        l,
        d,
        c[d],
        e,
        !Qe(c, d)
      );
    }
  }
  return i;
}
function su(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = Qe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && Ae(l)) {
        const { propsDefaults: c } = o;
        n in c ? r = c[n] : (so(o), r = c[n] = l.call(
          null,
          t
        ), Qr());
      } else
        r = l;
    }
    i[
      0
      /* shouldCast */
    ] && (s && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === fn(n)) && (r = !0));
  }
  return r;
}
function fm(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!Ae(e)) {
    const u = (d) => {
      l = !0;
      const [f, p] = fm(d, t, !0);
      ft(i, f), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return nt(e) && r.set(e, ps), ps;
  if (ve(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !vt(s[u]) && K("props must be strings when using array syntax.", s[u]);
      const d = hn(s[u]);
      Df(d) && (i[d] = dt);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !nt(s) && K("invalid props options", s);
    for (const u in s) {
      const d = hn(u);
      if (Df(d)) {
        const f = s[u], p = i[d] = ve(f) || Ae(f) ? { type: f } : ft({}, f);
        if (p) {
          const h = Rf(Boolean, p.type), v = Rf(String, p.type);
          p[
            0
            /* shouldCast */
          ] = h > -1, p[
            1
            /* shouldCastTrue */
          ] = v < 0 || h < v, (h > -1 || Qe(p, "default")) && a.push(d);
        }
      }
    }
  }
  const c = [i, a];
  return nt(e) && r.set(e, c), c;
}
function Df(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && K(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function iu(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Pf(e, t) {
  return iu(e) === iu(t);
}
function Rf(e, t) {
  return ve(t) ? t.findIndex((n) => Pf(n, e)) : Ae(t) && Pf(t, e) ? 0 : -1;
}
function pm(e, t, n) {
  const r = Le(t), o = n.propsOptions[0];
  for (const s in o) {
    let i = o[s];
    i != null && dy(
      s,
      r[s],
      i,
      !Qe(e, s) && !Qe(e, fn(s))
    );
  }
}
function dy(e, t, n, r) {
  const { type: o, required: s, validator: i, skipCheck: a } = n;
  if (s && r) {
    K('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (o != null && o !== !0 && !a) {
      let l = !1;
      const c = ve(o) ? o : [o], u = [];
      for (let d = 0; d < c.length && !l; d++) {
        const { valid: f, expectedType: p } = py(t, c[d]);
        u.push(p || ""), l = f;
      }
      if (!l) {
        K(hy(e, t, u));
        return;
      }
    }
    i && !i(t) && K('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const fy = /* @__PURE__ */ Tr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function py(e, t) {
  let n;
  const r = iu(t);
  if (fy(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = nt(e) : r === "Array" ? n = ve(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function hy(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(qr).join(" | ")}`;
  const o = n[0], s = Xu(t), i = If(t, o), a = If(t, s);
  return n.length === 1 && Lf(o) && !my(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Lf(s) && (r += `with value ${a}.`), r;
}
function If(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Lf(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function my(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const hm = (e) => e[0] === "_" || e === "$stable", Cd = (e) => ve(e) ? e.map(dn) : [dn(e)], vy = (e, t, n) => {
  if (t._n)
    return t;
  const r = me((...o) => (process.env.NODE_ENV !== "production" && Dt && K(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Cd(t(...o))), n);
  return r._c = !1, r;
}, mm = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (hm(o))
      continue;
    const s = e[o];
    if (Ae(s))
      t[o] = vy(o, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && K(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Cd(s);
      t[o] = () => i;
    }
  }
}, vm = (e, t) => {
  process.env.NODE_ENV !== "production" && !Vs(e.vnode) && K(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Cd(t);
  e.slots.default = () => n;
}, gy = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Le(t), Ya(t, "_", n)) : mm(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && vm(e, t);
  Ya(e.slots, Fl, 1);
}, yy = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = dt;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? process.env.NODE_ENV !== "production" && Xr ? (ft(o, t), qn(e, "set", "$slots")) : n && a === 1 ? s = !1 : (ft(o, t), !n && a === 1 && delete o._) : (s = !t.$stable, mm(t, o)), i = t;
  } else
    t && (vm(e, t), i = { default: 1 });
  if (s)
    for (const a in o)
      !hm(a) && i[a] == null && delete o[a];
};
function sl(e, t, n, r, o = !1) {
  if (ve(e)) {
    e.forEach(
      (f, p) => sl(
        f,
        t && (ve(t) ? t[p] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Do(r) && !o)
    return;
  const s = r.shapeFlag & 4 ? Ul(r.component) || r.component.proxy : r.el, i = o ? null : s, { i: a, r: l } = e;
  if (process.env.NODE_ENV !== "production" && !a) {
    K(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, u = a.refs === dt ? a.refs = {} : a.refs, d = a.setupState;
  if (c != null && c !== l && (vt(c) ? (u[c] = null, Qe(d, c) && (d[c] = null)) : rt(c) && (c.value = null)), Ae(l))
    er(l, a, 12, [i, u]);
  else {
    const f = vt(l), p = rt(l);
    if (f || p) {
      const h = () => {
        if (e.f) {
          const v = f ? Qe(d, l) ? d[l] : u[l] : l.value;
          o ? ve(v) && Yu(v, s) : ve(v) ? v.includes(s) || v.push(s) : f ? (u[l] = [s], Qe(d, l) && (d[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else
          f ? (u[l] = i, Qe(d, l) && (d[l] = i)) : p ? (l.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && K("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (h.id = -1, Bt(h, n)) : h();
    } else
      process.env.NODE_ENV !== "production" && K("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let Dr = !1;
const wa = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject", Us = (e) => e.nodeType === 8;
function by(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: r,
      createText: o,
      nextSibling: s,
      parentNode: i,
      remove: a,
      insert: l,
      createComment: c
    }
  } = e, u = (g, y) => {
    if (!y.hasChildNodes()) {
      process.env.NODE_ENV !== "production" && K(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, y), tl(), y._vnode = g;
      return;
    }
    Dr = !1, d(y.firstChild, g, null, null, null), tl(), y._vnode = g, Dr && console.error("Hydration completed but contains mismatches.");
  }, d = (g, y, E, S, T, D = !1) => {
    const _ = Us(g) && g.data === "[", N = () => v(
      g,
      y,
      E,
      S,
      T,
      _
    ), { type: R, ref: M, shapeFlag: $, patchFlag: H } = y;
    let G = g.nodeType;
    y.el = g, process.env.NODE_ENV !== "production" && ("__vnode" in g || Object.defineProperty(g, "__vnode", {
      value: y,
      enumerable: !1
    }), "__vueParentComponent" in g || Object.defineProperty(g, "__vueParentComponent", {
      value: E,
      enumerable: !1
    })), H === -2 && (D = !1, y.dynamicChildren = null);
    let P = null;
    switch (R) {
      case oo:
        G !== 3 ? y.children === "" ? (l(y.el = o(""), i(g), g), P = g) : P = N() : (g.data !== y.children && (Dr = !0, process.env.NODE_ENV !== "production" && K(
          `Hydration text mismatch:
- Server rendered: ${JSON.stringify(
            g.data
          )}
- Client rendered: ${JSON.stringify(y.children)}`
        ), g.data = y.children), P = s(g));
        break;
      case Rt:
        x(g) ? (P = s(g), b(
          y.el = g.content.firstChild,
          g,
          E
        )) : G !== 8 || _ ? P = N() : P = s(g);
        break;
      case Jr:
        if (_ && (g = s(g), G = g.nodeType), G === 1 || G === 3) {
          P = g;
          const V = !y.children.length;
          for (let B = 0; B < y.staticCount; B++)
            V && (y.children += P.nodeType === 1 ? P.outerHTML : P.data), B === y.staticCount - 1 && (y.anchor = P), P = s(P);
          return _ ? s(P) : P;
        } else
          N();
        break;
      case Ye:
        _ ? P = h(
          g,
          y,
          E,
          S,
          T,
          D
        ) : P = N();
        break;
      default:
        if ($ & 1)
          (G !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()) && !x(g) ? P = N() : P = f(
            g,
            y,
            E,
            S,
            T,
            D
          );
        else if ($ & 6) {
          y.slotScopeIds = T;
          const V = i(g);
          if (_ ? P = m(g) : Us(g) && g.data === "teleport start" ? P = m(g, g.data, "teleport end") : P = s(g), t(
            y,
            V,
            null,
            E,
            S,
            wa(V),
            D
          ), Do(y)) {
            let B;
            _ ? (B = U(Ye), B.anchor = P ? P.previousSibling : V.lastChild) : B = g.nodeType === 3 ? ae("") : U("div"), B.el = g, y.component.subTree = B;
          }
        } else
          $ & 64 ? G !== 8 ? P = N() : P = y.type.hydrate(
            g,
            y,
            E,
            S,
            T,
            D,
            e,
            p
          ) : $ & 128 ? P = y.type.hydrate(
            g,
            y,
            E,
            S,
            wa(i(g)),
            T,
            D,
            e,
            d
          ) : process.env.NODE_ENV !== "production" && K("Invalid HostVNode type:", R, `(${typeof R})`);
    }
    return M != null && sl(M, null, S, y), P;
  }, f = (g, y, E, S, T, D) => {
    D = D || !!y.dynamicChildren;
    const { type: _, props: N, patchFlag: R, shapeFlag: M, dirs: $, transition: H } = y, G = _ === "input" || _ === "option";
    if (process.env.NODE_ENV !== "production" || G || R !== -1) {
      if ($ && Xn(y, null, E, "created"), N)
        if (G || !D || R & 48)
          for (const B in N)
            (G && (B.endsWith("value") || B === "indeterminate") || $s(B) && !li(B) || // force hydrate v-bind with .prop modifiers
            B[0] === ".") && r(
              g,
              B,
              null,
              N[B],
              !1,
              void 0,
              E
            );
        else
          N.onClick && r(
            g,
            "onClick",
            null,
            N.onClick,
            !1,
            void 0,
            E
          );
      let P;
      (P = N && N.onVnodeBeforeMount) && cn(P, E, y);
      let V = !1;
      if (x(g)) {
        V = xm(S, H) && E && E.vnode.props && E.vnode.props.appear;
        const B = g.content.firstChild;
        V && H.beforeEnter(B), b(B, g, E), y.el = g = B;
      }
      if ($ && Xn(y, null, E, "beforeMount"), ((P = N && N.onVnodeMounted) || $ || V) && Kh(() => {
        P && cn(P, E, y), V && H.enter(g), $ && Xn(y, null, E, "mounted");
      }, S), M & 16 && // skip if element has innerHTML / textContent
      !(N && (N.innerHTML || N.textContent))) {
        let B = p(
          g.firstChild,
          y,
          g,
          E,
          S,
          T,
          D
        ), Ce = !1;
        for (; B; ) {
          Dr = !0, process.env.NODE_ENV !== "production" && !Ce && (K(
            `Hydration children mismatch in <${y.type}>: server rendered element contains more child nodes than client vdom.`
          ), Ce = !0);
          const We = B;
          B = B.nextSibling, a(We);
        }
      } else
        M & 8 && g.textContent !== y.children && (Dr = !0, process.env.NODE_ENV !== "production" && K(
          `Hydration text content mismatch in <${y.type}>:
- Server rendered: ${g.textContent}
- Client rendered: ${y.children}`
        ), g.textContent = y.children);
    }
    return g.nextSibling;
  }, p = (g, y, E, S, T, D, _) => {
    _ = _ || !!y.dynamicChildren;
    const N = y.children, R = N.length;
    let M = !1;
    for (let $ = 0; $ < R; $++) {
      const H = _ ? N[$] : N[$] = dn(N[$]);
      if (g)
        g = d(
          g,
          H,
          S,
          T,
          D,
          _
        );
      else {
        if (H.type === oo && !H.children)
          continue;
        Dr = !0, process.env.NODE_ENV !== "production" && !M && (K(
          `Hydration children mismatch in <${E.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`
        ), M = !0), n(
          null,
          H,
          E,
          null,
          S,
          T,
          wa(E),
          D
        );
      }
    }
    return g;
  }, h = (g, y, E, S, T, D) => {
    const { slotScopeIds: _ } = y;
    _ && (T = T ? T.concat(_) : _);
    const N = i(g), R = p(
      s(g),
      y,
      N,
      E,
      S,
      T,
      D
    );
    return R && Us(R) && R.data === "]" ? s(y.anchor = R) : (Dr = !0, l(y.anchor = c("]"), N, R), R);
  }, v = (g, y, E, S, T, D) => {
    if (Dr = !0, process.env.NODE_ENV !== "production" && K(
      `Hydration node mismatch:
- Client vnode:`,
      y.type,
      `
- Server rendered DOM:`,
      g,
      g.nodeType === 3 ? "(text)" : Us(g) && g.data === "[" ? "(start of fragment)" : ""
    ), y.el = null, D) {
      const R = m(g);
      for (; ; ) {
        const M = s(g);
        if (M && M !== R)
          a(M);
        else
          break;
      }
    }
    const _ = s(g), N = i(g);
    return a(g), n(
      null,
      y,
      N,
      _,
      E,
      S,
      wa(N),
      T
    ), _;
  }, m = (g, y = "[", E = "]") => {
    let S = 0;
    for (; g; )
      if (g = s(g), g && Us(g) && (g.data === y && S++, g.data === E)) {
        if (S === 0)
          return s(g);
        S--;
      }
    return g;
  }, b = (g, y, E) => {
    const S = y.parentNode;
    S && S.replaceChild(g, y);
    let T = E;
    for (; T; )
      T.vnode.el === y && (T.vnode.el = T.subTree.el = g), T = T.parent;
  }, x = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
  return [u, d];
}
let Hs, Br;
function ur(e, t) {
  e.appContext.config.performance && il() && Br.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && u0(e, t, il() ? Br.now() : Date.now());
}
function dr(e, t) {
  if (e.appContext.config.performance && il()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Br.mark(r), Br.measure(
      `<${Hl(e, e.type)}> ${t}`,
      n,
      r
    ), Br.clearMarks(n), Br.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && d0(e, t, il() ? Br.now() : Date.now());
}
function il() {
  return Hs !== void 0 || (typeof window < "u" && window.performance ? (Hs = !0, Br = window.performance) : Hs = !1), Hs;
}
function xy() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Bt = Kh;
function gm(e) {
  return bm(e);
}
function ym(e) {
  return bm(e, by);
}
function bm(e, t) {
  xy();
  const n = Qa();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && dd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: p = zt,
    insertStaticContent: h
  } = e, v = (w, O, j, Z = null, z = null, se = null, de = !1, X = null, ie = process.env.NODE_ENV !== "production" && Xr ? !1 : !!O.dynamicChildren) => {
    if (w === O)
      return;
    w && !Bn(w, O) && (Z = q(w), te(w, z, se, !0), w = null), O.patchFlag === -2 && (ie = !1, O.dynamicChildren = null);
    const { type: Y, ref: Se, shapeFlag: xe } = O;
    switch (Y) {
      case oo:
        m(w, O, j, Z);
        break;
      case Rt:
        b(w, O, j, Z);
        break;
      case Jr:
        w == null ? x(O, j, Z, de) : process.env.NODE_ENV !== "production" && g(w, O, j, de);
        break;
      case Ye:
        $(
          w,
          O,
          j,
          Z,
          z,
          se,
          de,
          X,
          ie
        );
        break;
      default:
        xe & 1 ? S(
          w,
          O,
          j,
          Z,
          z,
          se,
          de,
          X,
          ie
        ) : xe & 6 ? H(
          w,
          O,
          j,
          Z,
          z,
          se,
          de,
          X,
          ie
        ) : xe & 64 || xe & 128 ? Y.process(
          w,
          O,
          j,
          Z,
          z,
          se,
          de,
          X,
          ie,
          pe
        ) : process.env.NODE_ENV !== "production" && K("Invalid VNode type:", Y, `(${typeof Y})`);
    }
    Se != null && z && sl(Se, w && w.ref, se, O || w, !O);
  }, m = (w, O, j, Z) => {
    if (w == null)
      r(
        O.el = a(O.children),
        j,
        Z
      );
    else {
      const z = O.el = w.el;
      O.children !== w.children && c(z, O.children);
    }
  }, b = (w, O, j, Z) => {
    w == null ? r(
      O.el = l(O.children || ""),
      j,
      Z
    ) : O.el = w.el;
  }, x = (w, O, j, Z) => {
    [w.el, w.anchor] = h(
      w.children,
      O,
      j,
      Z,
      w.el,
      w.anchor
    );
  }, g = (w, O, j, Z) => {
    if (O.children !== w.children) {
      const z = f(w.anchor);
      E(w), [O.el, O.anchor] = h(
        O.children,
        j,
        z,
        Z
      );
    } else
      O.el = w.el, O.anchor = w.anchor;
  }, y = ({ el: w, anchor: O }, j, Z) => {
    let z;
    for (; w && w !== O; )
      z = f(w), r(w, j, Z), w = z;
    r(O, j, Z);
  }, E = ({ el: w, anchor: O }) => {
    let j;
    for (; w && w !== O; )
      j = f(w), o(w), w = j;
    o(O);
  }, S = (w, O, j, Z, z, se, de, X, ie) => {
    de = de || O.type === "svg", w == null ? T(
      O,
      j,
      Z,
      z,
      se,
      de,
      X,
      ie
    ) : N(
      w,
      O,
      z,
      se,
      de,
      X,
      ie
    );
  }, T = (w, O, j, Z, z, se, de, X) => {
    let ie, Y;
    const { type: Se, props: xe, shapeFlag: Te, transition: $e, dirs: Ke } = w;
    if (ie = w.el = i(
      w.type,
      se,
      xe && xe.is,
      xe
    ), Te & 8 ? u(ie, w.children) : Te & 16 && _(
      w.children,
      ie,
      null,
      Z,
      z,
      se && Se !== "foreignObject",
      de,
      X
    ), Ke && Xn(w, null, Z, "created"), D(ie, w, w.scopeId, de, Z), xe) {
      for (const L in xe)
        L !== "value" && !li(L) && s(
          ie,
          L,
          null,
          xe[L],
          se,
          w.children,
          Z,
          z,
          I
        );
      "value" in xe && s(ie, "value", null, xe.value), (Y = xe.onVnodeBeforeMount) && cn(Y, Z, w);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(ie, "__vnode", {
      value: w,
      enumerable: !1
    }), Object.defineProperty(ie, "__vueParentComponent", {
      value: Z,
      enumerable: !1
    })), Ke && Xn(w, null, Z, "beforeMount");
    const st = xm(z, $e);
    st && $e.beforeEnter(ie), r(ie, O, j), ((Y = xe && xe.onVnodeMounted) || st || Ke) && Bt(() => {
      Y && cn(Y, Z, w), st && $e.enter(ie), Ke && Xn(w, null, Z, "mounted");
    }, z);
  }, D = (w, O, j, Z, z) => {
    if (j && p(w, j), Z)
      for (let se = 0; se < Z.length; se++)
        p(w, Z[se]);
    if (z) {
      let se = z.subTree;
      if (process.env.NODE_ENV !== "production" && se.patchFlag > 0 && se.patchFlag & 2048 && (se = pd(se.children) || se), O === se) {
        const de = z.vnode;
        D(
          w,
          de,
          de.scopeId,
          de.slotScopeIds,
          z.parent
        );
      }
    }
  }, _ = (w, O, j, Z, z, se, de, X, ie = 0) => {
    for (let Y = ie; Y < w.length; Y++) {
      const Se = w[Y] = X ? kr(w[Y]) : dn(w[Y]);
      v(
        null,
        Se,
        O,
        j,
        Z,
        z,
        se,
        de,
        X
      );
    }
  }, N = (w, O, j, Z, z, se, de) => {
    const X = O.el = w.el;
    let { patchFlag: ie, dynamicChildren: Y, dirs: Se } = O;
    ie |= w.patchFlag & 16;
    const xe = w.props || dt, Te = O.props || dt;
    let $e;
    j && ho(j, !1), ($e = Te.onVnodeBeforeUpdate) && cn($e, j, O, w), Se && Xn(O, w, j, "beforeUpdate"), j && ho(j, !0), process.env.NODE_ENV !== "production" && Xr && (ie = 0, de = !1, Y = null);
    const Ke = z && O.type !== "foreignObject";
    if (Y ? (R(
      w.dynamicChildren,
      Y,
      X,
      j,
      Z,
      Ke,
      se
    ), process.env.NODE_ENV !== "production" && pi(w, O)) : de || Ce(
      w,
      O,
      X,
      null,
      j,
      Z,
      Ke,
      se,
      !1
    ), ie > 0) {
      if (ie & 16)
        M(
          X,
          O,
          xe,
          Te,
          j,
          Z,
          z
        );
      else if (ie & 2 && xe.class !== Te.class && s(X, "class", null, Te.class, z), ie & 4 && s(X, "style", xe.style, Te.style, z), ie & 8) {
        const st = O.dynamicProps;
        for (let L = 0; L < st.length; L++) {
          const k = st[L], F = xe[k], J = Te[k];
          (J !== F || k === "value") && s(
            X,
            k,
            F,
            J,
            z,
            w.children,
            j,
            Z,
            I
          );
        }
      }
      ie & 1 && w.children !== O.children && u(X, O.children);
    } else
      !de && Y == null && M(
        X,
        O,
        xe,
        Te,
        j,
        Z,
        z
      );
    (($e = Te.onVnodeUpdated) || Se) && Bt(() => {
      $e && cn($e, j, O, w), Se && Xn(O, w, j, "updated");
    }, Z);
  }, R = (w, O, j, Z, z, se, de) => {
    for (let X = 0; X < O.length; X++) {
      const ie = w[X], Y = O[X], Se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ie.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ie.type === Ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bn(ie, Y) || // - In the case of a component, it could contain anything.
        ie.shapeFlag & 70) ? d(ie.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      v(
        ie,
        Y,
        Se,
        null,
        Z,
        z,
        se,
        de,
        !0
      );
    }
  }, M = (w, O, j, Z, z, se, de) => {
    if (j !== Z) {
      if (j !== dt)
        for (const X in j)
          !li(X) && !(X in Z) && s(
            w,
            X,
            j[X],
            null,
            de,
            O.children,
            z,
            se,
            I
          );
      for (const X in Z) {
        if (li(X))
          continue;
        const ie = Z[X], Y = j[X];
        ie !== Y && X !== "value" && s(
          w,
          X,
          Y,
          ie,
          de,
          O.children,
          z,
          se,
          I
        );
      }
      "value" in Z && s(w, "value", j.value, Z.value);
    }
  }, $ = (w, O, j, Z, z, se, de, X, ie) => {
    const Y = O.el = w ? w.el : a(""), Se = O.anchor = w ? w.anchor : a("");
    let { patchFlag: xe, dynamicChildren: Te, slotScopeIds: $e } = O;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Xr || xe & 2048) && (xe = 0, ie = !1, Te = null), $e && (X = X ? X.concat($e) : $e), w == null ? (r(Y, j, Z), r(Se, j, Z), _(
      O.children,
      j,
      Se,
      z,
      se,
      de,
      X,
      ie
    )) : xe > 0 && xe & 64 && Te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (R(
      w.dynamicChildren,
      Te,
      j,
      z,
      se,
      de,
      X
    ), process.env.NODE_ENV !== "production" ? pi(w, O) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (O.key != null || z && O === z.subTree) && pi(
        w,
        O,
        !0
        /* shallow */
      )
    )) : Ce(
      w,
      O,
      j,
      Se,
      z,
      se,
      de,
      X,
      ie
    );
  }, H = (w, O, j, Z, z, se, de, X, ie) => {
    O.slotScopeIds = X, w == null ? O.shapeFlag & 512 ? z.ctx.activate(
      O,
      j,
      Z,
      de,
      ie
    ) : G(
      O,
      j,
      Z,
      z,
      se,
      de,
      ie
    ) : P(w, O, ie);
  }, G = (w, O, j, Z, z, se, de) => {
    const X = w.component = Nm(
      w,
      Z,
      z
    );
    if (process.env.NODE_ENV !== "production" && X.type.__hmrId && n0(X), process.env.NODE_ENV !== "production" && (ci(w), ur(X, "mount")), Vs(w) && (X.ctx.renderer = pe), process.env.NODE_ENV !== "production" && ur(X, "init"), Am(X), process.env.NODE_ENV !== "production" && dr(X, "init"), X.asyncDep) {
      if (z && z.registerDep(X, V), !w.el) {
        const ie = X.subTree = U(Rt);
        b(null, ie, O, j);
      }
      return;
    }
    V(
      X,
      w,
      O,
      j,
      z,
      se,
      de
    ), process.env.NODE_ENV !== "production" && (ui(), dr(X, "mount"));
  }, P = (w, O, j) => {
    const Z = O.component = w.component;
    if (y0(w, O, j))
      if (Z.asyncDep && !Z.asyncResolved) {
        process.env.NODE_ENV !== "production" && ci(O), B(Z, O, j), process.env.NODE_ENV !== "production" && ui();
        return;
      } else
        Z.next = O, e0(Z.update), Z.update();
    else
      O.el = w.el, Z.vnode = O;
  }, V = (w, O, j, Z, z, se, de) => {
    const X = () => {
      if (w.isMounted) {
        let { next: Se, bu: xe, u: Te, parent: $e, vnode: Ke } = w, st = Se, L;
        process.env.NODE_ENV !== "production" && ci(Se || w.vnode), ho(w, !1), Se ? (Se.el = Ke.el, B(w, Se, de)) : Se = Ke, xe && Fr(xe), (L = Se.props && Se.props.onVnodeBeforeUpdate) && cn(L, $e, Se, Ke), ho(w, !0), process.env.NODE_ENV !== "production" && ur(w, "render");
        const k = ka(w);
        process.env.NODE_ENV !== "production" && dr(w, "render");
        const F = w.subTree;
        w.subTree = k, process.env.NODE_ENV !== "production" && ur(w, "patch"), v(
          F,
          k,
          // parent may have changed if it's in a teleport
          d(F.el),
          // anchor may have changed if it's in a fragment
          q(F),
          w,
          z,
          se
        ), process.env.NODE_ENV !== "production" && dr(w, "patch"), Se.el = k.el, st === null && hd(w, k.el), Te && Bt(Te, z), (L = Se.props && Se.props.onVnodeUpdated) && Bt(
          () => cn(L, $e, Se, Ke),
          z
        ), process.env.NODE_ENV !== "production" && Vh(w), process.env.NODE_ENV !== "production" && ui();
      } else {
        let Se;
        const { el: xe, props: Te } = O, { bm: $e, m: Ke, parent: st } = w, L = Do(O);
        if (ho(w, !1), $e && Fr($e), !L && (Se = Te && Te.onVnodeBeforeMount) && cn(Se, st, O), ho(w, !0), xe && ot) {
          const k = () => {
            process.env.NODE_ENV !== "production" && ur(w, "render"), w.subTree = ka(w), process.env.NODE_ENV !== "production" && dr(w, "render"), process.env.NODE_ENV !== "production" && ur(w, "hydrate"), ot(
              xe,
              w.subTree,
              w,
              z,
              null
            ), process.env.NODE_ENV !== "production" && dr(w, "hydrate");
          };
          L ? O.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !w.isUnmounted && k()
          ) : k();
        } else {
          process.env.NODE_ENV !== "production" && ur(w, "render");
          const k = w.subTree = ka(w);
          process.env.NODE_ENV !== "production" && dr(w, "render"), process.env.NODE_ENV !== "production" && ur(w, "patch"), v(
            null,
            k,
            j,
            Z,
            w,
            z,
            se
          ), process.env.NODE_ENV !== "production" && dr(w, "patch"), O.el = k.el;
        }
        if (Ke && Bt(Ke, z), !L && (Se = Te && Te.onVnodeMounted)) {
          const k = O;
          Bt(
            () => cn(Se, st, k),
            z
          );
        }
        (O.shapeFlag & 256 || st && Do(st.vnode) && st.vnode.shapeFlag & 256) && w.a && Bt(w.a, z), w.isMounted = !0, process.env.NODE_ENV !== "production" && eu(w), O = j = Z = null;
      }
    }, ie = w.effect = new Ss(
      X,
      () => qi(Y),
      w.scope
      // track it in component's effect scope
    ), Y = w.update = () => ie.run();
    Y.id = w.uid, ho(w, !0), process.env.NODE_ENV !== "production" && (ie.onTrack = w.rtc ? (Se) => Fr(w.rtc, Se) : void 0, ie.onTrigger = w.rtg ? (Se) => Fr(w.rtg, Se) : void 0, Y.ownerInstance = w), Y();
  }, B = (w, O, j) => {
    O.component = w;
    const Z = w.vnode.props;
    w.vnode = O, w.next = null, uy(w, O.props, Z, j), yy(w, O.children, j), Ko(), bf(), Go();
  }, Ce = (w, O, j, Z, z, se, de, X, ie = !1) => {
    const Y = w && w.children, Se = w ? w.shapeFlag : 0, xe = O.children, { patchFlag: Te, shapeFlag: $e } = O;
    if (Te > 0) {
      if (Te & 128) {
        Ve(
          Y,
          xe,
          j,
          Z,
          z,
          se,
          de,
          X,
          ie
        );
        return;
      } else if (Te & 256) {
        We(
          Y,
          xe,
          j,
          Z,
          z,
          se,
          de,
          X,
          ie
        );
        return;
      }
    }
    $e & 8 ? (Se & 16 && I(Y, z, se), xe !== Y && u(j, xe)) : Se & 16 ? $e & 16 ? Ve(
      Y,
      xe,
      j,
      Z,
      z,
      se,
      de,
      X,
      ie
    ) : I(Y, z, se, !0) : (Se & 8 && u(j, ""), $e & 16 && _(
      xe,
      j,
      Z,
      z,
      se,
      de,
      X,
      ie
    ));
  }, We = (w, O, j, Z, z, se, de, X, ie) => {
    w = w || ps, O = O || ps;
    const Y = w.length, Se = O.length, xe = Math.min(Y, Se);
    let Te;
    for (Te = 0; Te < xe; Te++) {
      const $e = O[Te] = ie ? kr(O[Te]) : dn(O[Te]);
      v(
        w[Te],
        $e,
        j,
        null,
        z,
        se,
        de,
        X,
        ie
      );
    }
    Y > Se ? I(
      w,
      z,
      se,
      !0,
      !1,
      xe
    ) : _(
      O,
      j,
      Z,
      z,
      se,
      de,
      X,
      ie,
      xe
    );
  }, Ve = (w, O, j, Z, z, se, de, X, ie) => {
    let Y = 0;
    const Se = O.length;
    let xe = w.length - 1, Te = Se - 1;
    for (; Y <= xe && Y <= Te; ) {
      const $e = w[Y], Ke = O[Y] = ie ? kr(O[Y]) : dn(O[Y]);
      if (Bn($e, Ke))
        v(
          $e,
          Ke,
          j,
          null,
          z,
          se,
          de,
          X,
          ie
        );
      else
        break;
      Y++;
    }
    for (; Y <= xe && Y <= Te; ) {
      const $e = w[xe], Ke = O[Te] = ie ? kr(O[Te]) : dn(O[Te]);
      if (Bn($e, Ke))
        v(
          $e,
          Ke,
          j,
          null,
          z,
          se,
          de,
          X,
          ie
        );
      else
        break;
      xe--, Te--;
    }
    if (Y > xe) {
      if (Y <= Te) {
        const $e = Te + 1, Ke = $e < Se ? O[$e].el : Z;
        for (; Y <= Te; )
          v(
            null,
            O[Y] = ie ? kr(O[Y]) : dn(O[Y]),
            j,
            Ke,
            z,
            se,
            de,
            X,
            ie
          ), Y++;
      }
    } else if (Y > Te)
      for (; Y <= xe; )
        te(w[Y], z, se, !0), Y++;
    else {
      const $e = Y, Ke = Y, st = /* @__PURE__ */ new Map();
      for (Y = Ke; Y <= Te; Y++) {
        const Fe = O[Y] = ie ? kr(O[Y]) : dn(O[Y]);
        Fe.key != null && (process.env.NODE_ENV !== "production" && st.has(Fe.key) && K(
          "Duplicate keys found during update:",
          JSON.stringify(Fe.key),
          "Make sure keys are unique."
        ), st.set(Fe.key, Y));
      }
      let L, k = 0;
      const F = Te - Ke + 1;
      let J = !1, we = 0;
      const Pe = new Array(F);
      for (Y = 0; Y < F; Y++)
        Pe[Y] = 0;
      for (Y = $e; Y <= xe; Y++) {
        const Fe = w[Y];
        if (k >= F) {
          te(Fe, z, se, !0);
          continue;
        }
        let lt;
        if (Fe.key != null)
          lt = st.get(Fe.key);
        else
          for (L = Ke; L <= Te; L++)
            if (Pe[L - Ke] === 0 && Bn(Fe, O[L])) {
              lt = L;
              break;
            }
        lt === void 0 ? te(Fe, z, se, !0) : (Pe[lt - Ke] = Y + 1, lt >= we ? we = lt : J = !0, v(
          Fe,
          O[lt],
          j,
          null,
          z,
          se,
          de,
          X,
          ie
        ), k++);
      }
      const Be = J ? Ey(Pe) : ps;
      for (L = Be.length - 1, Y = F - 1; Y >= 0; Y--) {
        const Fe = Ke + Y, lt = O[Fe], ke = Fe + 1 < Se ? O[Fe + 1].el : Z;
        Pe[Y] === 0 ? v(
          null,
          lt,
          j,
          ke,
          z,
          se,
          de,
          X,
          ie
        ) : J && (L < 0 || Y !== Be[L] ? ee(lt, j, ke, 2) : L--);
      }
    }
  }, ee = (w, O, j, Z, z = null) => {
    const { el: se, type: de, transition: X, children: ie, shapeFlag: Y } = w;
    if (Y & 6) {
      ee(w.component.subTree, O, j, Z);
      return;
    }
    if (Y & 128) {
      w.suspense.move(O, j, Z);
      return;
    }
    if (Y & 64) {
      de.move(w, O, j, pe);
      return;
    }
    if (de === Ye) {
      r(se, O, j);
      for (let xe = 0; xe < ie.length; xe++)
        ee(ie[xe], O, j, Z);
      r(w.anchor, O, j);
      return;
    }
    if (de === Jr) {
      y(w, O, j);
      return;
    }
    if (Z !== 2 && Y & 1 && X)
      if (Z === 0)
        X.beforeEnter(se), r(se, O, j), Bt(() => X.enter(se), z);
      else {
        const { leave: xe, delayLeave: Te, afterLeave: $e } = X, Ke = () => r(se, O, j), st = () => {
          xe(se, () => {
            Ke(), $e && $e();
          });
        };
        Te ? Te(se, Ke, st) : st();
      }
    else
      r(se, O, j);
  }, te = (w, O, j, Z = !1, z = !1) => {
    const {
      type: se,
      props: de,
      ref: X,
      children: ie,
      dynamicChildren: Y,
      shapeFlag: Se,
      patchFlag: xe,
      dirs: Te
    } = w;
    if (X != null && sl(X, null, j, w, !0), Se & 256) {
      O.ctx.deactivate(w);
      return;
    }
    const $e = Se & 1 && Te, Ke = !Do(w);
    let st;
    if (Ke && (st = de && de.onVnodeBeforeUnmount) && cn(st, O, w), Se & 6)
      oe(w.component, j, Z);
    else {
      if (Se & 128) {
        w.suspense.unmount(j, Z);
        return;
      }
      $e && Xn(w, null, O, "beforeUnmount"), Se & 64 ? w.type.remove(
        w,
        O,
        j,
        z,
        pe,
        Z
      ) : Y && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (se !== Ye || xe > 0 && xe & 64) ? I(
        Y,
        O,
        j,
        !1,
        !0
      ) : (se === Ye && xe & 384 || !z && Se & 16) && I(ie, O, j), Z && ne(w);
    }
    (Ke && (st = de && de.onVnodeUnmounted) || $e) && Bt(() => {
      st && cn(st, O, w), $e && Xn(w, null, O, "unmounted");
    }, j);
  }, ne = (w) => {
    const { type: O, el: j, anchor: Z, transition: z } = w;
    if (O === Ye) {
      process.env.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && z && !z.persisted ? w.children.forEach((de) => {
        de.type === Rt ? o(de.el) : ne(de);
      }) : he(j, Z);
      return;
    }
    if (O === Jr) {
      E(w);
      return;
    }
    const se = () => {
      o(j), z && !z.persisted && z.afterLeave && z.afterLeave();
    };
    if (w.shapeFlag & 1 && z && !z.persisted) {
      const { leave: de, delayLeave: X } = z, ie = () => de(j, se);
      X ? X(w.el, se, ie) : ie();
    } else
      se();
  }, he = (w, O) => {
    let j;
    for (; w !== O; )
      j = f(w), o(w), w = j;
    o(O);
  }, oe = (w, O, j) => {
    process.env.NODE_ENV !== "production" && w.type.__hmrId && r0(w);
    const { bum: Z, scope: z, update: se, subTree: de, um: X } = w;
    Z && Fr(Z), z.stop(), se && (se.active = !1, te(de, w, O, j)), X && Bt(X, O), Bt(() => {
      w.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve()), process.env.NODE_ENV !== "production" && c0(w);
  }, I = (w, O, j, Z = !1, z = !1, se = 0) => {
    for (let de = se; de < w.length; de++)
      te(w[de], O, j, Z, z);
  }, q = (w) => w.shapeFlag & 6 ? q(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : f(w.anchor || w.el), re = (w, O, j) => {
    w == null ? O._vnode && te(O._vnode, null, null, !0) : v(O._vnode || null, w, O, null, null, null, j), bf(), tl(), O._vnode = w;
  }, pe = {
    p: v,
    um: te,
    m: ee,
    r: ne,
    mt: G,
    mc: _,
    pc: Ce,
    pbc: R,
    n: q,
    o: e
  };
  let ze, ot;
  return t && ([ze, ot] = t(
    pe
  )), {
    render: re,
    hydrate: ze,
    createApp: ay(re, ze)
  };
}
function ho({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function xm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pi(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (ve(r) && ve(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = kr(o[s]), a.el = i.el), n || pi(i, a)), a.type === oo && (a.el = i.el), process.env.NODE_ENV !== "production" && a.type === Rt && !a.el && (a.el = i.el);
    }
}
function Ey(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        a = s + i >> 1, e[n[a]] < c ? s = a + 1 : i = a;
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const wy = (e) => e.__isTeleport, ys = (e) => e && (e.disabled || e.disabled === ""), $f = (e) => typeof SVGElement < "u" && e instanceof SVGElement, au = (e, t) => {
  const n = e && e.to;
  if (vt(n))
    if (t) {
      const r = t(n);
      return r || process.env.NODE_ENV !== "production" && K(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return process.env.NODE_ENV !== "production" && K(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !ys(e) && K(`Invalid Teleport target: ${n}`), n;
}, Sy = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, i, a, l, c) {
    const {
      mc: u,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: h, createText: v, createComment: m }
    } = c, b = ys(t.props);
    let { shapeFlag: x, children: g, dynamicChildren: y } = t;
    if (process.env.NODE_ENV !== "production" && Xr && (l = !1, y = null), e == null) {
      const E = t.el = process.env.NODE_ENV !== "production" ? m("teleport start") : v(""), S = t.anchor = process.env.NODE_ENV !== "production" ? m("teleport end") : v("");
      p(E, n, r), p(S, n, r);
      const T = t.target = au(t.props, h), D = t.targetAnchor = v("");
      T ? (p(D, T), i = i || $f(T)) : process.env.NODE_ENV !== "production" && !b && K("Invalid Teleport target on mount:", T, `(${typeof T})`);
      const _ = (N, R) => {
        x & 16 && u(
          g,
          N,
          R,
          o,
          s,
          i,
          a,
          l
        );
      };
      b ? _(n, S) : T && _(T, D);
    } else {
      t.el = e.el;
      const E = t.anchor = e.anchor, S = t.target = e.target, T = t.targetAnchor = e.targetAnchor, D = ys(e.props), _ = D ? n : S, N = D ? E : T;
      if (i = i || $f(S), y ? (f(
        e.dynamicChildren,
        y,
        _,
        o,
        s,
        i,
        a
      ), pi(e, t, !0)) : l || d(
        e,
        t,
        _,
        N,
        o,
        s,
        i,
        a,
        !1
      ), b)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Sa(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = au(
          t.props,
          h
        );
        R ? Sa(
          t,
          R,
          null,
          c,
          0
        ) : process.env.NODE_ENV !== "production" && K(
          "Invalid Teleport target on update:",
          S,
          `(${typeof S})`
        );
      } else
        D && Sa(
          t,
          S,
          T,
          c,
          1
        );
    }
    Em(t);
  },
  remove(e, t, n, r, { um: o, o: { remove: s } }, i) {
    const { shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: d, props: f } = e;
    if (d && s(u), i && s(c), a & 16) {
      const p = i || !ys(f);
      for (let h = 0; h < l.length; h++) {
        const v = l[h];
        o(
          v,
          t,
          n,
          p,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: Sa,
  hydrate: Cy
};
function Sa(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: c, props: u } = e, d = s === 2;
  if (d && r(i, t, n), (!d || ys(u)) && l & 16)
    for (let f = 0; f < c.length; f++)
      o(
        c[f],
        t,
        n,
        2
      );
  d && r(a, t, n);
}
function Cy(e, t, n, r, o, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l }
}, c) {
  const u = t.target = au(
    t.props,
    l
  );
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (ys(t.props))
        t.anchor = c(
          i(e),
          t,
          a(e),
          n,
          r,
          o,
          s
        ), t.targetAnchor = d;
      else {
        t.anchor = i(e);
        let f = d;
        for (; f; )
          if (f = i(f), f && f.nodeType === 8 && f.data === "teleport anchor") {
            t.targetAnchor = f, u._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        c(
          d,
          t,
          u,
          n,
          r,
          o,
          s
        );
      }
    Em(t);
  }
  return t.anchor && i(t.anchor);
}
const Oy = Sy;
function Em(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Ye = Symbol.for("v-fgt"), oo = Symbol.for("v-txt"), Rt = Symbol.for("v-cmt"), Jr = Symbol.for("v-stc"), hi = [];
let pn = null;
function Q(e = !1) {
  hi.push(pn = e ? null : []);
}
function wm() {
  hi.pop(), pn = hi[hi.length - 1] || null;
}
let ko = 1;
function lu(e) {
  ko += e;
}
function Sm(e) {
  return e.dynamicChildren = ko > 0 ? pn || ps : null, wm(), ko > 0 && pn && pn.push(e), e;
}
function le(e, t, n, r, o, s) {
  return Sm(
    C(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
      /* isBlock */
    )
  );
}
function xn(e, t, n, r, o) {
  return Sm(
    U(
      e,
      t,
      n,
      r,
      o,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bn(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && rs.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
let cu;
function Ty(e) {
  cu = e;
}
const Ny = (...e) => Om(
  ...cu ? cu(e, Pt) : e
), Fl = "__vInternal", Cm = ({ key: e }) => e ?? null, Ma = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || rt(e) || Ae(e) ? { i: Pt, r: e, k: t, f: !!n } : e : null);
function C(e, t = null, n = null, r = 0, o = null, s = e === Ye ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cm(t),
    ref: t && Ma(t),
    scopeId: Ml,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pt
  };
  return a ? (Td(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= vt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && K("VNode created with invalid key (NaN). VNode type:", l.type), ko > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && pn.push(l), l;
}
const U = process.env.NODE_ENV !== "production" ? Ny : Om;
function Om(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === md) && (process.env.NODE_ENV !== "production" && !e && K(`Invalid vnode type when creating vnode: ${e}.`), e = Rt), wr(e)) {
    const a = En(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Td(a, n), ko > 0 && !s && pn && (a.shapeFlag & 6 ? pn[pn.indexOf(e)] = a : pn.push(a)), a.patchFlag |= -2, a;
  }
  if (Rm(e) && (e = e.__vccOpts), t) {
    t = Bl(t);
    let { class: a, style: l } = t;
    a && !vt(a) && (t.class = be(a)), nt(l) && (_i(l) && !ve(l) && (l = ft({}, l)), t.style = Ms(l));
  }
  const i = vt(e) ? 1 : zh(e) ? 128 : wy(e) ? 64 : nt(e) ? 4 : Ae(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && _i(e) && (e = Le(e), K(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), C(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function Bl(e) {
  return e ? _i(e) || Fl in e ? ft({}, e) : e : null;
}
function En(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, a = t ? mi(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Cm(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? ve(o) ? o.concat(Ma(t)) : [o, Ma(t)] : Ma(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && ve(i) ? i.map(Tm) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ye ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && En(e.ssContent),
    ssFallback: e.ssFallback && En(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Tm(e) {
  const t = En(e);
  return ve(e.children) && (t.children = e.children.map(Tm)), t;
}
function ae(e = " ", t = 0) {
  return U(oo, null, e, t);
}
function Od(e, t) {
  const n = U(Jr, null, e);
  return n.staticCount = t, n;
}
function Sr(e = "", t = !1) {
  return t ? (Q(), xn(Rt, null, e)) : U(Rt, null, e);
}
function dn(e) {
  return e == null || typeof e == "boolean" ? U(Rt) : ve(e) ? U(
    Ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? kr(e) : U(oo, null, String(e));
}
function kr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : En(e);
}
function Td(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ve(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Td(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Fl in t) ? t._ctx = Pt : o === 3 && Pt && (Pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    Ae(t) ? (t = { default: t, _ctx: Pt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ae(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = be([t.class, r.class]));
      else if (o === "style")
        t.style = Ms([t.style, r.style]);
      else if ($s(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(ve(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
function cn(e, t, n, r = null) {
  bn(e, t, 7, [
    n,
    r
  ]);
}
const _y = cm();
let Ay = 0;
function Nm(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || _y, s = {
    uid: Ay++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new qu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: fm(r, o),
    emitsOptions: Bh(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: dt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: dt,
    data: dt,
    props: dt,
    attrs: dt,
    slots: dt,
    refs: dt,
    setupState: dt,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = j0(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = p0.bind(null, s), e.ce && e.ce(s), s;
}
let Dt = null;
const Cn = () => Dt || Pt;
let Nd, Yo, kf = "__VUE_INSTANCE_SETTERS__";
(Yo = Qa()[kf]) || (Yo = Qa()[kf] = []), Yo.push((e) => Dt = e), Nd = (e) => {
  Yo.length > 1 ? Yo.forEach((t) => t(e)) : Yo[0](e);
};
const so = (e) => {
  Nd(e), e.scope.on();
}, Qr = () => {
  Dt && Dt.scope.off(), Nd(null);
}, Dy = /* @__PURE__ */ Tr("slot,component");
function uu(e, t) {
  const n = t.isNativeTag || ph;
  (Dy(e) || n(e)) && K(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function _m(e) {
  return e.vnode.shapeFlag & 4;
}
let Ts = !1;
function Am(e, t = !1) {
  Ts = t;
  const { props: n, children: r } = e.vnode, o = _m(e);
  ly(e, n, o, t), gy(e, r);
  const s = o ? Py(e, t) : void 0;
  return Ts = !1, s;
}
function Py(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && uu(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        uu(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        Wh(s[i]);
    }
    r.compilerOptions && _d() && K(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Qn(new Proxy(e.ctx, fi)), process.env.NODE_ENV !== "production" && V0(e);
  const { setup: o } = r;
  if (o) {
    const s = e.setupContext = o.length > 1 ? Pm(e) : null;
    so(e), Ko();
    const i = er(
      o,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? cs(e.props) : e.props, s]
    );
    if (Go(), Qr(), _l(i)) {
      if (i.then(Qr, Qr), t)
        return i.then((a) => {
          du(e, a, t);
        }).catch((a) => {
          Zo(a, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = (n = r.name) != null ? n : "Anonymous";
        K(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      du(e, i, t);
  } else
    Dm(e, t);
}
function du(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) ? (process.env.NODE_ENV !== "production" && wr(t) && K(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = id(t), process.env.NODE_ENV !== "production" && F0(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && K(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Dm(e, n);
}
let vi, fu;
function Ry(e) {
  vi = e, fu = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, M0));
  };
}
const _d = () => !vi;
function Dm(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && vi && !r.render) {
      const o = r.template || Sd(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && ur(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: l } = r, c = ft(
          ft(
            {
              isCustomElement: s,
              delimiters: a
            },
            i
          ),
          l
        );
        r.render = vi(o, c), process.env.NODE_ENV !== "production" && dr(e, "compile");
      }
    }
    e.render = r.render || zt, fu && fu(e);
  }
  {
    so(e), Ko();
    try {
      ty(e);
    } finally {
      Go(), Qr();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === zt && !t && (!vi && r.template ? K(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : K("Component is missing template or render function."));
}
function Mf(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return nl(), Kt(e, "get", "$attrs"), t[n];
      },
      set() {
        return K("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return K("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return Kt(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Iy(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Kt(e, "get", "$slots"), t[n];
    }
  }));
}
function Pm(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && K("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (ve(n) ? r = "array" : rt(n) && (r = "ref")), r !== "object" && K(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Mf(e);
    },
    get slots() {
      return Iy(e);
    },
    get emit() {
      return (n, ...r) => e.emit(n, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return Mf(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ul(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(id(Qn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Po)
          return Po[n](e);
      },
      has(t, n) {
        return n in t || n in Po;
      }
    }));
}
const Ly = /(?:^|[-_])(\w)/g, $y = (e) => e.replace(Ly, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Mi(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hl(e, t, n = !1) {
  let r = Mi(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? $y(r) : n ? "App" : "Anonymous";
}
function Rm(e) {
  return Ae(e) && "__vccOpts" in e;
}
const fe = (e, t) => G1(e, t, Ts);
function bt(e, t, n) {
  const r = arguments.length;
  return r === 2 ? nt(t) && !ve(t) ? wr(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && wr(n) && (n = [n]), U(e, t, n));
}
const Im = Symbol.for("v-scx"), Lm = () => {
  {
    const e = mt(Im);
    return e || process.env.NODE_ENV !== "production" && K(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function hc(e) {
  return !!(e && e.__v_isShallow);
}
function $m() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(d) {
      return nt(d) ? d.__isVue ? ["div", e, "VueInstance"] : rt(d) ? [
        "div",
        {},
        ["span", e, u(d)],
        "<",
        a(d.value),
        ">"
      ] : Dn(d) ? [
        "div",
        {},
        ["span", e, hc(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${Er(d) ? " (readonly)" : ""}`
      ] : Er(d) ? [
        "div",
        {},
        ["span", e, hc(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const f = [];
    d.type.props && d.props && f.push(i("props", Le(d.props))), d.setupState !== dt && f.push(i("setup", d.setupState)), d.data !== dt && f.push(i("data", Le(d.data)));
    const p = l(d, "computed");
    p && f.push(i("computed", p));
    const h = l(d, "inject");
    return h && f.push(i("injected", h)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), f;
  }
  function i(d, f) {
    return f = ft({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((p) => [
          "div",
          {},
          ["span", r, p + ": "],
          a(f[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, f = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : nt(d) ? ["object", { object: f ? Le(d) : d }] : ["span", n, String(d)];
  }
  function l(d, f) {
    const p = d.type;
    if (Ae(p))
      return;
    const h = {};
    for (const v in d.ctx)
      c(p, v, f) && (h[v] = d.ctx[v]);
    return h;
  }
  function c(d, f, p) {
    const h = d[p];
    if (ve(h) && h.includes(f) || nt(h) && f in h || d.extends && c(d.extends, f, p) || d.mixins && d.mixins.some((v) => c(v, f, p)))
      return !0;
  }
  function u(d) {
    return hc(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function ky(e, t, n, r) {
  const o = n[r];
  if (o && km(o, e))
    return o;
  const s = t();
  return s.memo = e.slice(), n[r] = s;
}
function km(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if (eo(n[r], t[r]))
      return !1;
  return ko > 0 && pn && pn.push(e), !0;
}
const pu = "3.3.9", My = {
  createComponentInstance: Nm,
  setupComponent: Am,
  renderComponentRoot: ka,
  setCurrentRenderingInstance: Ii,
  isVNode: wr,
  normalizeVNode: dn
}, jy = My, Vy = null, Fy = null, By = "http://www.w3.org/2000/svg", Co = typeof document < "u" ? document : null, jf = Co && /* @__PURE__ */ Co.createElement("template"), Uy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t ? Co.createElementNS(By, e) : Co.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Co.createTextNode(e),
  createComment: (e) => Co.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Co.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      jf.innerHTML = r ? `<svg>${e}</svg>` : e;
      const a = jf.content;
      if (r) {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Pr = "transition", zs = "animation", Ns = Symbol("_vtc"), zl = (e, { slots: t }) => bt(Yh, jm(e), t);
zl.displayName = "Transition";
const Mm = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Hy = zl.props = /* @__PURE__ */ ft(
  {},
  xd,
  Mm
), mo = (e, t = []) => {
  ve(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Vf = (e) => e ? ve(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function jm(e) {
  const t = {};
  for (const M in e)
    M in Mm || (t[M] = e[M]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: c = i,
    appearToClass: u = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = zy(o), v = h && h[0], m = h && h[1], {
    onBeforeEnter: b,
    onEnter: x,
    onEnterCancelled: g,
    onLeave: y,
    onLeaveCancelled: E,
    onBeforeAppear: S = b,
    onAppear: T = x,
    onAppearCancelled: D = g
  } = t, _ = (M, $, H) => {
    Ir(M, $ ? u : a), Ir(M, $ ? c : i), H && H();
  }, N = (M, $) => {
    M._isLeaving = !1, Ir(M, d), Ir(M, p), Ir(M, f), $ && $();
  }, R = (M) => ($, H) => {
    const G = M ? T : x, P = () => _($, M, H);
    mo(G, [$, P]), Ff(() => {
      Ir($, M ? l : s), fr($, M ? u : a), Vf(G) || Bf($, r, v, P);
    });
  };
  return ft(t, {
    onBeforeEnter(M) {
      mo(b, [M]), fr(M, s), fr(M, i);
    },
    onBeforeAppear(M) {
      mo(S, [M]), fr(M, l), fr(M, c);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(M, $) {
      M._isLeaving = !0;
      const H = () => N(M, $);
      fr(M, d), Fm(), fr(M, f), Ff(() => {
        M._isLeaving && (Ir(M, d), fr(M, p), Vf(y) || Bf(M, r, m, H));
      }), mo(y, [M, H]);
    },
    onEnterCancelled(M) {
      _(M, !1), mo(g, [M]);
    },
    onAppearCancelled(M) {
      _(M, !0), mo(D, [M]);
    },
    onLeaveCancelled(M) {
      N(M), mo(E, [M]);
    }
  });
}
function zy(e) {
  if (e == null)
    return null;
  if (nt(e))
    return [mc(e.enter), mc(e.leave)];
  {
    const t = mc(e);
    return [t, t];
  }
}
function mc(e) {
  const t = Ja(e);
  return process.env.NODE_ENV !== "production" && ad(t, "<transition> explicit duration"), t;
}
function fr(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ns] || (e[Ns] = /* @__PURE__ */ new Set())).add(t);
}
function Ir(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Ns];
  n && (n.delete(t), n.size || (e[Ns] = void 0));
}
function Ff(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ky = 0;
function Bf(e, t, n, r) {
  const o = e._endId = ++Ky, s = () => {
    o === e._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = Vm(e, t);
  if (!i)
    return r();
  const c = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, f), s();
  }, f = (p) => {
    p.target === e && ++u >= l && d();
  };
  setTimeout(() => {
    u < l && d();
  }, a + 1), e.addEventListener(c, f);
}
function Vm(e, t) {
  const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), o = r(`${Pr}Delay`), s = r(`${Pr}Duration`), i = Uf(o, s), a = r(`${zs}Delay`), l = r(`${zs}Duration`), c = Uf(a, l);
  let u = null, d = 0, f = 0;
  t === Pr ? i > 0 && (u = Pr, d = i, f = s.length) : t === zs ? c > 0 && (u = zs, d = c, f = l.length) : (d = Math.max(i, c), u = d > 0 ? i > c ? Pr : zs : null, f = u ? u === Pr ? s.length : l.length : 0);
  const p = u === Pr && /\b(transform|all)(,|$)/.test(
    r(`${Pr}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function Uf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Hf(n) + Hf(e[r])));
}
function Hf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fm() {
  return document.body.offsetHeight;
}
function Gy(e, t, n) {
  const r = e[Ns];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ad = Symbol("_vod"), Cr = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ad] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ks(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ks(e, !0), r.enter(e)) : r.leave(e, () => {
      Ks(e, !1);
    }) : Ks(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ks(e, t);
  }
};
function Ks(e, t) {
  e.style.display = t ? e[Ad] : "none";
}
function Zy() {
  Cr.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
function Wy(e, t, n) {
  const r = e.style, o = vt(n);
  if (n && !o) {
    if (t && !vt(t))
      for (const s in t)
        n[s] == null && hu(r, s, "");
    for (const s in n)
      hu(r, s, n[s]);
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), Ad in e && (r.display = s);
  }
}
const Yy = /[^\\];\s*$/, zf = /\s*!important$/;
function hu(e, t, n) {
  if (ve(n))
    n.forEach((r) => hu(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Yy.test(n) && K(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Xy(e, t);
    zf.test(n) ? e.setProperty(
      fn(r),
      n.replace(zf, ""),
      "important"
    ) : e[r] = n;
  }
}
const Kf = ["Webkit", "Moz", "ms"], vc = {};
function Xy(e, t) {
  const n = vc[t];
  if (n)
    return n;
  let r = hn(t);
  if (r !== "filter" && r in e)
    return vc[t] = r;
  r = qr(r);
  for (let o = 0; o < Kf.length; o++) {
    const s = Kf[o] + r;
    if (s in e)
      return vc[t] = s;
  }
  return t;
}
const Gf = "http://www.w3.org/1999/xlink";
function Jy(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Gf, t.slice(6, t.length)) : e.setAttributeNS(Gf, t, n);
  else {
    const s = p1(t);
    n == null || s && !vh(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Qy(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), e[t] = n ?? "";
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    e._value = n;
    const c = a === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    c !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = vh(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !l && K(
      `Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  l && e.removeAttribute(t);
}
function mr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function qy(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Zf = Symbol("_vei");
function e2(e, t, n, r, o = null) {
  const s = e[Zf] || (e[Zf] = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = t2(t);
    if (r) {
      const c = s[t] = o2(r, o);
      mr(e, a, c, l);
    } else
      i && (qy(e, a, i, l), s[t] = void 0);
  }
}
const Wf = /(?:Once|Passive|Capture)$/;
function t2(e) {
  let t;
  if (Wf.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Wf); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : fn(e.slice(2)), t];
}
let gc = 0;
const n2 = /* @__PURE__ */ Promise.resolve(), r2 = () => gc || (n2.then(() => gc = 0), gc = Date.now());
function o2(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    bn(
      s2(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = r2(), n;
}
function s2(e, t) {
  if (ve(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const Yf = /^on[a-z]/, i2 = (e, t, n, r, o = !1, s, i, a, l) => {
  t === "class" ? Gy(e, r, o) : t === "style" ? Wy(e, n, r) : $s(t) ? Wa(t) || e2(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : a2(e, t, r, o)) ? Qy(
    e,
    t,
    r,
    s,
    i,
    a,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Jy(e, t, r, o));
};
function a2(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Yf.test(t) && Ae(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Yf.test(t) && vt(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bm(e, t) {
  const n = /* @__PURE__ */ De(e);
  class r extends Kl {
    constructor(s) {
      super(n, s, t);
    }
  }
  return r.def = n, r;
}
/*! #__NO_SIDE_EFFECTS__ */
const l2 = /* @__NO_SIDE_EFFECTS__ */ (e) => /* @__PURE__ */ Bm(e, Qm), c2 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Kl extends c2 {
  constructor(t, n = {}, r) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && K(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Pn(() => {
      this._connected || (gu(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const o of r)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, o = !1) => {
      const { props: s, styles: i } = r;
      let a;
      if (s && !ve(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Ja(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[hn(l)] = !0);
        }
      this._numberProps = a, o && this._resolveProps(r), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, r = ve(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of r.map(hn))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(s) {
          this._setProp(o, s);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const r = hn(t);
    this._numberProps && this._numberProps[r] && (n = Ja(n)), this._setProp(r, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, r = !0, o = !0) {
    n !== this._props[t] && (this._props[t] = n, o && this._instance && this._update(), r && (n === !0 ? this.setAttribute(fn(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(fn(t), n + "") : n || this.removeAttribute(fn(t))));
  }
  _update() {
    gu(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = U(this._def, ft({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this.shadowRoot.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const r = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(s, {
            detail: i
          })
        );
      };
      n.emit = (s, ...i) => {
        r(s, i), fn(s) !== s && r(fn(s), i);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Kl) {
          n.parent = o._instance, n.provides = o._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n, this.shadowRoot.appendChild(r), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(r);
    });
  }
}
function u2(e = "$style") {
  {
    const t = Cn();
    if (!t)
      return process.env.NODE_ENV !== "production" && K("useCssModule must be called inside setup()"), dt;
    const n = t.type.__cssModules;
    if (!n)
      return process.env.NODE_ENV !== "production" && K("Current instance does not have CSS modules injected."), dt;
    const r = n[e];
    return r || (process.env.NODE_ENV !== "production" && K(`Current instance does not have CSS module named "${e}".`), dt);
  }
}
function d2(e) {
  const t = Cn();
  if (!t) {
    process.env.NODE_ENV !== "production" && K("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((s) => vu(s, o));
  }, r = () => {
    const o = e(t.proxy);
    mu(t.subTree, o), n(o);
  };
  Gh(r), ht(() => {
    const o = new MutationObserver(r);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Sn(() => o.disconnect());
  });
}
function mu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      mu(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    vu(e.el, t);
  else if (e.type === Ye)
    e.children.forEach((n) => mu(n, t));
  else if (e.type === Jr) {
    let { el: n, anchor: r } = e;
    for (; n && (vu(n, t), n !== r); )
      n = n.nextSibling;
  }
}
function vu(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const r in t)
      n.setProperty(`--${r}`, t[r]);
  }
}
const Um = /* @__PURE__ */ new WeakMap(), Hm = /* @__PURE__ */ new WeakMap(), al = Symbol("_moveCb"), Xf = Symbol("_enterCb"), zm = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ft({}, Hy, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Cn(), r = bd();
    let o, s;
    return Fs(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!g2(
        o[0].el,
        n.vnode.el,
        i
      ))
        return;
      o.forEach(h2), o.forEach(m2);
      const a = o.filter(v2);
      Fm(), a.forEach((l) => {
        const c = l.el, u = c.style;
        fr(c, i), u.transform = u.webkitTransform = u.transitionDuration = "";
        const d = c[al] = (f) => {
          f && f.target !== c || (!f || /transform$/.test(f.propertyName)) && (c.removeEventListener("transitionend", d), c[al] = null, Ir(c, i));
        };
        c.addEventListener("transitionend", d);
      });
    }), () => {
      const i = Le(e), a = jm(i);
      let l = i.tag || Ye;
      o = s, s = t.default ? jl(t.default()) : [];
      for (let c = 0; c < s.length; c++) {
        const u = s[c];
        u.key != null ? $o(
          u,
          Cs(u, a, r, n)
        ) : process.env.NODE_ENV !== "production" && K("<TransitionGroup> children must be keyed.");
      }
      if (o)
        for (let c = 0; c < o.length; c++) {
          const u = o[c];
          $o(
            u,
            Cs(u, a, r, n)
          ), Um.set(u, u.el.getBoundingClientRect());
        }
      return U(l, null, s);
    };
  }
}, f2 = (e) => delete e.mode;
zm.props;
const p2 = zm;
function h2(e) {
  const t = e.el;
  t[al] && t[al](), t[Xf] && t[Xf]();
}
function m2(e) {
  Hm.set(e, e.el.getBoundingClientRect());
}
function v2(e) {
  const t = Um.get(e), n = Hm.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function g2(e, t, n) {
  const r = e.cloneNode(), o = e[Ns];
  o && o.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = Vm(r);
  return s.removeChild(r), i;
}
const io = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ve(t) ? (n) => Fr(t, n) : t;
};
function y2(e) {
  e.target.composing = !0;
}
function Jf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Rn = Symbol("_assign"), Mo = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Rn] = io(o);
    const s = r || o.props && o.props.type === "number";
    mr(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Xa(a)), e[Rn](a);
    }), n && mr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (mr(e, "compositionstart", y2), mr(e, "compositionend", Jf), mr(e, "change", Jf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: o } }, s) {
    if (e[Rn] = io(s), e.composing)
      return;
    const i = o || e.type === "number" ? Xa(e.value) : e.value, a = t ?? "";
    i !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a));
  }
}, Dd = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Rn] = io(n), mr(e, "change", () => {
      const r = e._modelValue, o = _s(e), s = e.checked, i = e[Rn];
      if (ve(r)) {
        const a = Dl(r, o), l = a !== -1;
        if (s && !l)
          i(r.concat(o));
        else if (!s && l) {
          const c = [...r];
          c.splice(a, 1), i(c);
        }
      } else if (zo(r)) {
        const a = new Set(r);
        s ? a.add(o) : a.delete(o), i(a);
      } else
        i(Gm(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Qf,
  beforeUpdate(e, t, n) {
    e[Rn] = io(n), Qf(e, t, n);
  }
};
function Qf(e, { value: t, oldValue: n }, r) {
  e._modelValue = t, ve(t) ? e.checked = Dl(t, r.props.value) > -1 : zo(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = to(t, Gm(e, !0)));
}
const Pd = {
  created(e, { value: t }, n) {
    e.checked = to(t, n.props.value), e[Rn] = io(n), mr(e, "change", () => {
      e[Rn](_s(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[Rn] = io(r), t !== n && (e.checked = to(t, r.props.value));
  }
}, Km = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = zo(t);
    mr(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Xa(_s(i)) : _s(i)
      );
      e[Rn](
        e.multiple ? o ? new Set(s) : s : s[0]
      );
    }), e[Rn] = io(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qf(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Rn] = io(n);
  },
  updated(e, { value: t }) {
    qf(e, t);
  }
};
function qf(e, t) {
  const n = e.multiple;
  if (n && !ve(t) && !zo(t)) {
    process.env.NODE_ENV !== "production" && K(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, o = e.options.length; r < o; r++) {
    const s = e.options[r], i = _s(s);
    if (n)
      ve(t) ? s.selected = Dl(t, i) > -1 : s.selected = t.has(i);
    else if (to(_s(s), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function _s(e) {
  return "_value" in e ? e._value : e.value;
}
function Gm(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Zm = {
  created(e, t, n) {
    Ca(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Ca(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    Ca(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    Ca(e, t, n, r, "updated");
  }
};
function Wm(e, t) {
  switch (e) {
    case "SELECT":
      return Km;
    case "TEXTAREA":
      return Mo;
    default:
      switch (t) {
        case "checkbox":
          return Dd;
        case "radio":
          return Pd;
        default:
          return Mo;
      }
  }
}
function Ca(e, t, n, r, o) {
  const i = Wm(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, r);
}
function b2() {
  Mo.getSSRProps = ({ value: e }) => ({ value: e }), Pd.getSSRProps = ({ value: e }, t) => {
    if (t.props && to(t.props.value, e))
      return { checked: !0 };
  }, Dd.getSSRProps = ({ value: e }, t) => {
    if (ve(e)) {
      if (t.props && Dl(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (zo(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Zm.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Wm(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const x2 = ["ctrl", "shift", "alt", "meta"], E2 = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => x2.some((n) => e[`${n}Key`] && !t.includes(n))
}, _t = (e, t) => (n, ...r) => {
  for (let o = 0; o < t.length; o++) {
    const s = E2[t[o]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...r);
}, w2 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Rd = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const r = fn(n.key);
  if (t.some((o) => o === r || w2[o] === r))
    return e(n);
}, Ym = /* @__PURE__ */ ft({ patchProp: i2 }, Uy);
let gi, ep = !1;
function Xm() {
  return gi || (gi = gm(Ym));
}
function Jm() {
  return gi = ep ? gi : ym(Ym), ep = !0, gi;
}
const gu = (...e) => {
  Xm().render(...e);
}, Qm = (...e) => {
  Jm().hydrate(...e);
}, qm = (...e) => {
  const t = Xm().createApp(...e);
  process.env.NODE_ENV !== "production" && (ev(t), tv(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = nv(r);
    if (!o)
      return;
    const s = t._component;
    !Ae(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
    const i = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
}, S2 = (...e) => {
  const t = Jm().createApp(...e);
  process.env.NODE_ENV !== "production" && (ev(t), tv(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = nv(r);
    if (o)
      return n(o, !0, o instanceof SVGElement);
  }, t;
};
function ev(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => u1(t) || d1(t),
    writable: !1
  });
}
function tv(e) {
  if (_d()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        K(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return K(r), n;
      },
      set() {
        K(r);
      }
    });
  }
}
function nv(e) {
  if (vt(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && K(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && K(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let tp = !1;
const C2 = () => {
  tp || (tp = !0, b2(), Zy());
};
function O2() {
  $m();
}
process.env.NODE_ENV !== "production" && O2();
const T2 = () => {
  process.env.NODE_ENV !== "production" && K(
    'Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  );
}, N2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Yh,
  BaseTransitionPropsValidators: xd,
  Comment: Rt,
  EffectScope: qu,
  Fragment: Ye,
  KeepAlive: I0,
  ReactiveEffect: Ss,
  Static: Jr,
  Suspense: w0,
  Teleport: Oy,
  Text: oo,
  Transition: zl,
  TransitionGroup: p2,
  VueElement: Kl,
  assertNumber: ad,
  callWithAsyncErrorHandling: bn,
  callWithErrorHandling: er,
  camelize: hn,
  capitalize: qr,
  cloneVNode: En,
  compatUtils: Fy,
  compile: T2,
  computed: fe,
  createApp: qm,
  createBlock: xn,
  createCommentVNode: Sr,
  createElementBlock: le,
  createElementVNode: C,
  createHydrationRenderer: ym,
  createPropsRestProxy: Q0,
  createRenderer: gm,
  createSSRApp: S2,
  createSlots: $0,
  createStaticVNode: Od,
  createTextVNode: ae,
  createVNode: U,
  customRef: Rh,
  defineAsyncComponent: P0,
  defineComponent: De,
  defineCustomElement: Bm,
  defineEmits: U0,
  defineExpose: H0,
  defineModel: G0,
  defineOptions: z0,
  defineProps: B0,
  defineSSRCustomElement: l2,
  defineSlots: K0,
  get devtools() {
    return Fn;
  },
  effect: g1,
  effectScope: ed,
  getCurrentInstance: Cn,
  getCurrentScope: Pl,
  getTransitionRawChildren: jl,
  guardReactiveProps: Bl,
  h: bt,
  handleError: Zo,
  hasInjectionContext: um,
  hydrate: Qm,
  initCustomFormatter: $m,
  initDirectivesForSSR: C2,
  inject: mt,
  isMemoSame: km,
  isProxy: _i,
  isReactive: Dn,
  isReadonly: Er,
  isRef: rt,
  isRuntimeOnly: _d,
  isShallow: Ni,
  isVNode: wr,
  markRaw: Qn,
  mergeDefaults: X0,
  mergeModels: J0,
  mergeProps: mi,
  nextTick: Pn,
  normalizeClass: be,
  normalizeProps: Qu,
  normalizeStyle: Ms,
  onActivated: Jh,
  onBeforeMount: em,
  onBeforeUnmount: na,
  onBeforeUpdate: tm,
  onDeactivated: Qh,
  onErrorCaptured: sm,
  onMounted: ht,
  onRenderTracked: om,
  onRenderTriggered: rm,
  onScopeDispose: td,
  onServerPrefetch: nm,
  onUnmounted: Sn,
  onUpdated: Fs,
  openBlock: Q,
  popScopeId: Hh,
  provide: Mt,
  proxyRefs: id,
  pushScopeId: Uh,
  queuePostFlushCb: Pi,
  reactive: Ln,
  readonly: js,
  ref: W,
  registerRuntimeCompiler: Ry,
  render: gu,
  renderList: tr,
  renderSlot: Os,
  resolveComponent: Wn,
  resolveDirective: x0,
  resolveDynamicComponent: vd,
  resolveFilter: Vy,
  resolveTransitionHooks: Cs,
  setBlockTracking: lu,
  setDevtoolsHook: dd,
  setTransitionHooks: $o,
  shallowReactive: rd,
  shallowReadonly: cs,
  shallowRef: hs,
  ssrContextKey: Im,
  ssrUtils: jy,
  stop: y1,
  toDisplayString: at,
  toHandlerKey: pr,
  toHandlers: k0,
  toRaw: Le,
  toRef: ms,
  toRefs: ro,
  toValue: F1,
  transformVNodeArgs: Ty,
  triggerRef: V1,
  unref: A,
  useAttrs: Y0,
  useCssModule: u2,
  useCssVars: d2,
  useModel: wd,
  useSSRContext: Lm,
  useSlots: W0,
  useTransitionState: bd,
  vModelCheckbox: Dd,
  vModelDynamic: Zm,
  vModelRadio: Pd,
  vModelSelect: Km,
  vModelText: Mo,
  vShow: Cr,
  version: pu,
  warn: K,
  watch: Lt,
  watchEffect: Qt,
  watchPostEffect: Gh,
  watchSyncEffect: _0,
  withAsyncContext: q0,
  withCtx: me,
  withDefaults: Z0,
  withDirectives: Hn,
  withKeys: Rd,
  withMemo: ky,
  withModifiers: _t,
  withScopeId: h0
}, Symbol.toStringTag, { value: "Module" })), _2 = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;", "&": "&amp;" };
let A2 = 0;
var D2 = (e) => e.replace(/[<>"&]/g, (t) => _2[t] || t), P2 = (e) => e + A2++;
const Oo = {}, R2 = (e) => {
  const { name: t, paths: n = [], d: r, polygons: o = [], points: s } = e;
  r && n.push({ d: r }), s && o.push({ points: s }), Oo[t] = Object.assign({}, e, { paths: n, polygons: o }), Oo[t].minX || (Oo[t].minX = 0), Oo[t].minY || (Oo[t].minY = 0);
}, I2 = (...e) => {
  for (const t of e)
    R2(t);
}, L2 = /* @__PURE__ */ De({ name: "OhVueIcon", props: { name: { type: String, validator: (e) => !e || e in Oo || (console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`), !1) }, title: String, fill: String, scale: { type: [Number, String], default: 1 }, animation: { validator: (e) => ["spin", "spin-pulse", "wrench", "ring", "pulse", "flash", "float"].includes(e) }, hover: Boolean, flip: { validator: (e) => ["horizontal", "vertical", "both"].includes(e) }, speed: { validator: (e) => e === "fast" || e === "slow" }, label: String, inverse: Boolean }, setup(e) {
  const t = W([]), n = Ln({ outerScale: 1.2, x: null, y: null }), r = Ln({ width: 0, height: 0 }), o = fe(() => {
    const v = Number(e.scale);
    return isNaN(v) || v <= 0 ? (console.warn('Invalid prop: prop "scale" should be a number over 0.'), n.outerScale) : v * n.outerScale;
  }), s = fe(() => ({ "ov-icon": !0, "ov-inverse": e.inverse, "ov-flip-horizontal": e.flip === "horizontal", "ov-flip-vertical": e.flip === "vertical", "ov-flip-both": e.flip === "both", "ov-spin": e.animation === "spin", "ov-spin-pulse": e.animation === "spin-pulse", "ov-wrench": e.animation === "wrench", "ov-ring": e.animation === "ring", "ov-pulse": e.animation === "pulse", "ov-flash": e.animation === "flash", "ov-float": e.animation === "float", "ov-hover": e.hover, "ov-fast": e.speed === "fast", "ov-slow": e.speed === "slow" })), i = fe(() => e.name ? Oo[e.name] : null), a = fe(() => i.value ? `${i.value.minX} ${i.value.minY} ${i.value.width} ${i.value.height}` : `0 0 ${c.value} ${u.value}`), l = fe(() => {
    if (!i.value)
      return 1;
    const { width: v, height: m } = i.value;
    return Math.max(v, m) / 16;
  }), c = fe(() => r.width || i.value && i.value.width / l.value * o.value || 0), u = fe(() => r.height || i.value && i.value.height / l.value * o.value || 0), d = fe(() => o.value !== 1 && { fontSize: o.value + "em" }), f = fe(() => {
    if (!i.value || !i.value.raw)
      return null;
    const v = {};
    let m = i.value.raw;
    return m = m.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g, (b, x, g) => {
      const y = P2("vat-");
      return v[g] = y, ` id="${y}"`;
    }), m = m.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (b, x, g, y) => {
      const E = x || y;
      return E && v[E] ? `#${v[E]}` : b;
    }), m;
  }), p = fe(() => i.value && i.value.attr ? i.value.attr : {}), h = () => {
    if (!e.name && e.name !== null && t.value.length === 0)
      return void console.warn('Invalid prop: prop "name" is required.');
    if (i.value)
      return;
    let v = 0, m = 0;
    t.value.forEach((b) => {
      b.outerScale = o.value, v = Math.max(v, b.width), m = Math.max(m, b.height);
    }), r.width = v, r.height = m, t.value.forEach((b) => {
      b.x = (v - b.width) / 2, b.y = (m - b.height) / 2;
    });
  };
  return ht(() => {
    h();
  }), Fs(() => {
    h();
  }), { ...ro(n), children: t, icon: i, klass: s, style: d, width: c, height: u, box: a, attribs: p, raw: f };
}, created() {
  const e = this.$parent;
  e && e.children && e.children.push(this);
}, render() {
  const e = Object.assign({ role: this.$attrs.role || (this.label || this.title ? "img" : null), "aria-label": this.label || null, "aria-hidden": !(this.label || this.title), width: this.width, height: this.height, viewBox: this.box }, this.attribs);
  this.attribs.stroke ? e.stroke = this.fill ? this.fill : "currentColor" : e.fill = this.fill ? this.fill : "currentColor", this.x && (e.x = this.x.toString()), this.y && (e.y = this.y.toString());
  let t = { class: this.klass, style: this.style };
  if (t = Object.assign(t, e), this.raw) {
    const o = this.title ? `<title>${D2(this.title)}</title>${this.raw}` : this.raw;
    t.innerHTML = o;
  }
  const n = this.title ? [bt("title", this.title)] : [], r = (o, s, i) => bt(o, { ...s, key: `${o}-${i}` });
  return bt("svg", t, this.raw ? void 0 : n.concat([this.$slots.default ? this.$slots.default() : this.icon ? [...this.icon.paths.map((o, s) => r("path", o, s)), ...this.icon.polygons.map((o, s) => r("polygon", o, s))] : []]));
} });
function Id(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (e && typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
Id(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);
Id(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);
Id(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);
var rv = !1;
function Oa(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function yc(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function $2() {
  return ov().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ov() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const k2 = typeof Proxy == "function", M2 = "devtools-plugin:setup", j2 = "plugin:settings:set";
let Xo, yu;
function V2() {
  var e;
  return Xo !== void 0 || (typeof window < "u" && window.performance ? (Xo = !0, yu = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Xo = !0, yu = global.perf_hooks.performance) : Xo = !1), Xo;
}
function F2() {
  return V2() ? yu.now() : Date.now();
}
class B2 {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const a = t.settings[i];
        r[i] = a.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o), a = JSON.parse(i);
      Object.assign(s, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return F2();
      }
    }, n && n.on(j2, (i, a) => {
      i === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ld(e, t) {
  const n = e, r = ov(), o = $2(), s = k2 && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(M2, e, t);
  else {
    const i = s ? new B2(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let ni;
const ji = (e) => ni = e, sv = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function jo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var nr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(nr || (nr = {}));
const Gl = typeof window < "u", yi = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Gl, np = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function U2(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function $d(e, t, n) {
  const r = new XMLHttpRequest();
  r.open("GET", e), r.responseType = "blob", r.onload = function() {
    lv(r.response, t, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function iv(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function ja(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Va = typeof navigator == "object" ? navigator : { userAgent: "" }, av = /* @__PURE__ */ (() => /Macintosh/.test(Va.userAgent) && /AppleWebKit/.test(Va.userAgent) && !/Safari/.test(Va.userAgent))(), lv = Gl ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !av ? H2 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Va ? z2 : (
      // Fallback to using FileReader and a popup
      K2
    )
  )
) : () => {
};
function H2(e, t = "download", n) {
  const r = document.createElement("a");
  r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? iv(r.href) ? $d(e, t, n) : (r.target = "_blank", ja(r)) : ja(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    ja(r);
  }, 0));
}
function z2(e, t = "download", n) {
  if (typeof e == "string")
    if (iv(e))
      $d(e, t, n);
    else {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", setTimeout(function() {
        ja(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(U2(e, n), t);
}
function K2(e, t, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
    return $d(e, t, n);
  const o = e.type === "application/octet-stream", s = /constructor/i.test(String(np.HTMLElement)) || "safari" in np, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && s || av) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let l = a.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = i ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    r ? r.location.assign(a) : location.href = a, r = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function jt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function kd(e) {
  return "_a" in e && "install" in e;
}
function cv() {
  if (!("clipboard" in navigator))
    return jt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function uv(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (jt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function G2(e) {
  if (!cv())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), jt("Global state copied to clipboard.");
    } catch (t) {
      if (uv(t))
        return;
      jt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Z2(e) {
  if (!cv())
    try {
      dv(e, JSON.parse(await navigator.clipboard.readText())), jt("Global state pasted from clipboard.");
    } catch (t) {
      if (uv(t))
        return;
      jt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function W2(e) {
  try {
    lv(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    jt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let lr;
function Y2() {
  lr || (lr = document.createElement("input"), lr.type = "file", lr.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      lr.onchange = async () => {
        const r = lr.files;
        if (!r)
          return t(null);
        const o = r.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, lr.oncancel = () => t(null), lr.onerror = n, lr.click();
    });
  }
  return e;
}
async function X2(e) {
  try {
    const n = await Y2()();
    if (!n)
      return;
    const { text: r, file: o } = n;
    dv(e, JSON.parse(r)), jt(`Global state imported from "${o.name}".`);
  } catch (t) {
    jt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function dv(e, t) {
  for (const n in t) {
    const r = e.state.value[n];
    r ? Object.assign(r, t[n]) : e.state.value[n] = t[n];
  }
}
function jn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const fv = "🍍 Pinia (root)", bu = "_root";
function J2(e) {
  return kd(e) ? {
    id: bu,
    label: fv
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Q2(e) {
  if (kd(e)) {
    const n = Array.from(e._s.keys()), r = e._s;
    return {
      state: n.map((s) => ({
        editable: !0,
        key: s,
        value: e.state.value[s]
      })),
      getters: n.filter((s) => r.get(s)._getters).map((s) => {
        const i = r.get(s);
        return {
          editable: !1,
          key: s,
          value: i._getters.reduce((a, l) => (a[l] = i[l], a), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function q2(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: jn(e.type),
    key: jn(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function eb(e) {
  switch (e) {
    case nr.direct:
      return "mutation";
    case nr.patchFunction:
      return "$patch";
    case nr.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let us = !0;
const Fa = [], Eo = "pinia:mutations", Wt = "pinia", { assign: tb } = Object, ll = (e) => "🍍 " + e;
function nb(e, t) {
  Ld({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Fa,
    app: e
  }, (n) => {
    typeof n.now != "function" && jt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Eo,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Wt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            G2(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Z2(t), n.sendInspectorTree(Wt), n.sendInspectorState(Wt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            W2(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await X2(t), n.sendInspectorTree(Wt), n.sendInspectorState(Wt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const o = t._s.get(r);
            o ? typeof o.$reset != "function" ? jt(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), jt(`Store "${r}" reset.`)) : jt(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, o) => {
      const s = r.componentInstance && r.componentInstance.proxy;
      if (s && s._pStores) {
        const i = r.componentInstance.proxy._pStores;
        Object.values(i).forEach((a) => {
          r.instanceData.state.push({
            type: ll(a.$id),
            key: "state",
            editable: !0,
            value: a._isOptionsAPI ? {
              _custom: {
                value: Le(a.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => a.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(a.$state).reduce((l, c) => (l[c] = a.$state[c], l), {})
            )
          }), a._getters && a._getters.length && r.instanceData.state.push({
            type: ll(a.$id),
            key: "getters",
            editable: !1,
            value: a._getters.reduce((l, c) => {
              try {
                l[c] = a[c];
              } catch (u) {
                l[c] = u;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === e && r.inspectorId === Wt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? o.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(r.filter.toLowerCase()) : fv.toLowerCase().includes(r.filter.toLowerCase())) : o).map(J2);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === Wt) {
        const o = r.nodeId === bu ? t : t._s.get(r.nodeId);
        if (!o)
          return;
        o && (r.state = Q2(o));
      }
    }), n.on.editInspectorState((r, o) => {
      if (r.app === e && r.inspectorId === Wt) {
        const s = r.nodeId === bu ? t : t._s.get(r.nodeId);
        if (!s)
          return jt(`store "${r.nodeId}" not found`, "error");
        const { path: i } = r;
        kd(s) ? i.unshift("state") : (i.length !== 1 || !s._customProperties.has(i[0]) || i[0] in s.$state) && i.unshift("$state"), us = !1, r.set(s, i, r.state.value), us = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("🍍")) {
        const o = r.type.replace(/^🍍\s*/, ""), s = t._s.get(o);
        if (!s)
          return jt(`store "${o}" not found`, "error");
        const { path: i } = r;
        if (i[0] !== "state")
          return jt(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
        i[0] = "$state", us = !1, r.set(s, i, r.state.value), us = !0;
      }
    });
  });
}
function rb(e, t) {
  Fa.includes(ll(t.$id)) || Fa.push(ll(t.$id)), Ld({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Fa,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: i, onError: a, name: l, args: c }) => {
      const u = pv++;
      n.addTimelineEvent({
        layerId: Eo,
        event: {
          time: r(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: jn(t.$id),
            action: jn(l),
            args: c
          },
          groupId: u
        }
      }), i((d) => {
        Kr = void 0, n.addTimelineEvent({
          layerId: Eo,
          event: {
            time: r(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: jn(t.$id),
              action: jn(l),
              args: c,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        Kr = void 0, n.addTimelineEvent({
          layerId: Eo,
          event: {
            time: r(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: jn(t.$id),
              action: jn(l),
              args: c,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Lt(() => A(t[i]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Wt), us && n.addTimelineEvent({
          layerId: Eo,
          event: {
            time: r(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: Kr
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Wt), !us)
        return;
      const c = {
        time: r(),
        title: eb(a),
        data: tb({ store: jn(t.$id) }, q2(i)),
        groupId: Kr
      };
      a === nr.patchFunction ? c.subtitle = "⤵️" : a === nr.patchObject ? c.subtitle = "🧩" : i && !Array.isArray(i) && (c.subtitle = i.type), i && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: Eo,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = Qn((i) => {
      o(i), n.addTimelineEvent({
        layerId: Eo,
        event: {
          time: r(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: jn(t.$id),
            info: jn("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Wt), n.sendInspectorState(Wt);
    });
    const { $dispose: s } = t;
    t.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(Wt), n.sendInspectorState(Wt), n.getSettings().logStoreChanges && jt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Wt), n.sendInspectorState(Wt), n.getSettings().logStoreChanges && jt(`"${t.$id}" store installed 🆕`);
  });
}
let pv = 0, Kr;
function rp(e, t, n) {
  const r = t.reduce((o, s) => (o[s] = Le(e)[s], o), {});
  for (const o in r)
    e[o] = function() {
      const s = pv, i = n ? new Proxy(e, {
        get(...l) {
          return Kr = s, Reflect.get(...l);
        },
        set(...l) {
          return Kr = s, Reflect.set(...l);
        }
      }) : e;
      Kr = s;
      const a = r[o].apply(i, arguments);
      return Kr = void 0, a;
    };
}
function ob({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, rp(t, Object.keys(n.actions), t._isOptionsAPI);
  const r = t._hotUpdate;
  Le(t)._hotUpdate = function(o) {
    r.apply(this, arguments), rp(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
  }, rb(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function sb() {
  const e = ed(!0), t = e.run(() => W({}));
  let n = [], r = [];
  const o = Qn({
    install(s) {
      ji(o), o._a = s, s.provide(sv, o), s.config.globalProperties.$pinia = o, yi && nb(s, o), r.forEach((i) => n.push(i)), r = [];
    },
    use(s) {
      return !this._a && !rv ? r.push(s) : n.push(s), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return yi && typeof Proxy < "u" && o.use(ob), o;
}
function hv(e, t) {
  for (const n in t) {
    const r = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    jo(o) && jo(r) && !rt(r) && !Dn(r) ? e[n] = hv(o, r) : e[n] = r;
  }
  return e;
}
const mv = () => {
};
function op(e, t, n, r = mv) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && Pl() && td(o), o;
}
function Jo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ib = (e) => e();
function xu(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    jo(o) && jo(r) && e.hasOwnProperty(n) && !rt(r) && !Dn(r) ? e[n] = xu(o, r) : e[n] = r;
  }
  return e;
}
const ab = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function lb(e) {
  return !jo(e) || !e.hasOwnProperty(ab);
}
const { assign: An } = Object;
function sp(e) {
  return !!(rt(e) && e.effect);
}
function ip(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
  let l;
  function c() {
    !a && (process.env.NODE_ENV === "production" || !r) && (n.state.value[e] = o ? o() : {});
    const u = process.env.NODE_ENV !== "production" && r ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      ro(W(o ? o() : {}).value)
    ) : ro(n.state.value[e]);
    return An(u, s, Object.keys(i || {}).reduce((d, f) => (process.env.NODE_ENV !== "production" && f in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), d[f] = Qn(fe(() => {
      ji(n);
      const p = n._s.get(e);
      return i[f].call(p, p);
    })), d), {}));
  }
  return l = Eu(e, c, t, n, r, !0), l;
}
function Eu(e, t, n = {}, r, o, s) {
  let i;
  const a = An({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !rv && (l.onTrigger = (N) => {
    c ? p = N : c == !1 && !T._hotUpdating && (Array.isArray(p) ? p.push(N) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, u, d = [], f = [], p;
  const h = r.state.value[e];
  !s && !h && (process.env.NODE_ENV === "production" || !o) && (r.state.value[e] = {});
  const v = W({});
  let m;
  function b(N) {
    let R;
    c = u = !1, process.env.NODE_ENV !== "production" && (p = []), typeof N == "function" ? (N(r.state.value[e]), R = {
      type: nr.patchFunction,
      storeId: e,
      events: p
    }) : (xu(r.state.value[e], N), R = {
      type: nr.patchObject,
      payload: N,
      storeId: e,
      events: p
    });
    const M = m = Symbol();
    Pn().then(() => {
      m === M && (c = !0);
    }), u = !0, Jo(d, R, r.state.value[e]);
  }
  const x = s ? function() {
    const { state: R } = n, M = R ? R() : {};
    this.$patch(($) => {
      An($, M);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : mv
  );
  function g() {
    i.stop(), d = [], f = [], r._s.delete(e);
  }
  function y(N, R) {
    return function() {
      ji(r);
      const M = Array.from(arguments), $ = [], H = [];
      function G(B) {
        $.push(B);
      }
      function P(B) {
        H.push(B);
      }
      Jo(f, {
        args: M,
        name: N,
        store: T,
        after: G,
        onError: P
      });
      let V;
      try {
        V = R.apply(this && this.$id === e ? this : T, M);
      } catch (B) {
        throw Jo(H, B), B;
      }
      return V instanceof Promise ? V.then((B) => (Jo($, B), B)).catch((B) => (Jo(H, B), Promise.reject(B))) : (Jo($, V), V);
    };
  }
  const E = /* @__PURE__ */ Qn({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), S = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: op.bind(null, f),
    $patch: b,
    $reset: x,
    $subscribe(N, R = {}) {
      const M = op(d, N, R.detached, () => $()), $ = i.run(() => Lt(() => r.state.value[e], (H) => {
        (R.flush === "sync" ? u : c) && N({
          storeId: e,
          type: nr.direct,
          events: p
        }, H);
      }, An({}, l, R)));
      return M;
    },
    $dispose: g
  }, T = Ln(process.env.NODE_ENV !== "production" || yi ? An(
    {
      _hmrPayload: E,
      _customProperties: Qn(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    S
    // must be added later
    // setupStore
  ) : S);
  r._s.set(e, T);
  const _ = (r._a && r._a.runWithContext || ib)(() => r._e.run(() => (i = ed()).run(t)));
  for (const N in _) {
    const R = _[N];
    if (rt(R) && !sp(R) || Dn(R))
      process.env.NODE_ENV !== "production" && o ? Oa(v.value, N, ms(_, N)) : s || (h && lb(R) && (rt(R) ? R.value = h[N] : xu(R, h[N])), r.state.value[e][N] = R), process.env.NODE_ENV !== "production" && E.state.push(N);
    else if (typeof R == "function") {
      const M = process.env.NODE_ENV !== "production" && o ? R : y(N, R);
      _[N] = M, process.env.NODE_ENV !== "production" && (E.actions[N] = R), a.actions[N] = R;
    } else
      process.env.NODE_ENV !== "production" && sp(R) && (E.getters[N] = s ? (
        // @ts-expect-error
        n.getters[N]
      ) : R, Gl && (_._getters || // @ts-expect-error: same
      (_._getters = Qn([]))).push(N));
  }
  if (An(T, _), An(Le(T), _), Object.defineProperty(T, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? v.value : r.state.value[e],
    set: (N) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      b((R) => {
        An(R, N);
      });
    }
  }), process.env.NODE_ENV !== "production" && (T._hotUpdate = Qn((N) => {
    T._hotUpdating = !0, N._hmrPayload.state.forEach((R) => {
      if (R in T.$state) {
        const M = N.$state[R], $ = T.$state[R];
        typeof M == "object" && jo(M) && jo($) ? hv(M, $) : N.$state[R] = $;
      }
      Oa(T, R, ms(N.$state, R));
    }), Object.keys(T.$state).forEach((R) => {
      R in N.$state || yc(T, R);
    }), c = !1, u = !1, r.state.value[e] = ms(N._hmrPayload, "hotState"), u = !0, Pn().then(() => {
      c = !0;
    });
    for (const R in N._hmrPayload.actions) {
      const M = N[R];
      Oa(T, R, y(R, M));
    }
    for (const R in N._hmrPayload.getters) {
      const M = N._hmrPayload.getters[R], $ = s ? (
        // special handling of options api
        fe(() => (ji(r), M.call(T, T)))
      ) : M;
      Oa(T, R, $);
    }
    Object.keys(T._hmrPayload.getters).forEach((R) => {
      R in N._hmrPayload.getters || yc(T, R);
    }), Object.keys(T._hmrPayload.actions).forEach((R) => {
      R in N._hmrPayload.actions || yc(T, R);
    }), T._hmrPayload = N._hmrPayload, T._getters = N._getters, T._hotUpdating = !1;
  })), yi) {
    const N = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(T, R, An({ value: T[R] }, N));
    });
  }
  return r._p.forEach((N) => {
    if (yi) {
      const R = i.run(() => N({
        store: T,
        app: r._a,
        pinia: r,
        options: a
      }));
      Object.keys(R || {}).forEach((M) => T._customProperties.add(M)), An(T, R);
    } else
      An(T, i.run(() => N({
        store: T,
        app: r._a,
        pinia: r,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && T.$state && typeof T.$state == "object" && typeof T.$state.constructor == "function" && !T.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${T.$id}".`), h && s && n.hydrate && n.hydrate(T.$state, h), c = !0, u = !0, T;
}
function ra(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  if (typeof e == "string")
    r = e, o = s ? n : t;
  else if (o = e, r = e.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(a, l) {
    const c = um();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && ni && ni._testing ? null : a) || (c ? mt(sv, null) : null), a && ji(a), process.env.NODE_ENV !== "production" && !ni)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = ni, a._s.has(r) || (s ? Eu(r, t, o, a) : ip(r, o, a), process.env.NODE_ENV !== "production" && (i._pinia = a));
    const u = a._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const d = "__hot:" + r, f = s ? Eu(d, t, o, a, !0) : ip(d, An({}, o), a, !0);
      l._hotUpdate(f), delete a.state.value[d], a._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && Gl) {
      const d = Cn();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const f = d.proxy, p = "_pStores" in f ? f._pStores : f._pStores = {};
        p[r] = u;
      }
    }
    return u;
  }
  return i.$id = r, i;
}
function ap(e) {
  {
    e = Le(e);
    const t = {};
    for (const n in e) {
      const r = e[n];
      (rt(r) || Dn(r)) && (t[n] = // ---
      ms(e, n));
    }
    return t;
  }
}
const cb = { name: "la-edit", minX: 0, minY: 0, width: 32, height: 32, raw: '<path d="M25 4.031c-.766 0-1.516.297-2.094.875L13 14.781l-.219.219-.062.313-.688 3.5-.312 1.468 1.469-.312 3.5-.688.312-.062.219-.219 9.875-9.906A2.968 2.968 0 0025 4.03zm0 1.938c.234 0 .465.12.688.343.445.446.445.93 0 1.375L16 17.376l-1.719.344.344-1.719 9.688-9.688c.222-.222.453-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2z"/>' }, ub = { name: "la-hands-helping-solid", minX: 0, minY: 0, width: 32, height: 32, raw: '<path d="M21 3.031l-.656.719c-1.469 1.617-2.68 2.34-3.688 2.813-1.008.472-1.855.613-2.687 1.25-.887.68-2.176 1.984-2.719 4.312-1.164.254-2.016.7-2.688 1.281-.664.574-1.164 1.227-1.78 1.938-.005.008.003.023 0 .031-.884 1.016-1.657 2.11-3.157 2.688l-.625.25V29h19.063c1.093-.059 1.851-.816 2.312-1.563.46-.746.715-1.554.844-2.218.332-1.692.937-6.563.937-6.563l.032-.093v-.094c-.032-.676-.31-1.25-.657-1.782l1.125-3.343 1.782-2.688.5-.719-.657-.593-6.562-5.688zm.063 2.75l5.218 4.532-1.375 2.03-.093.095-.032.156-.906 2.687c-.473-.195-.96-.332-1.5-.312h-.063L16 15h-1v3.875c-.14 1.09-.746 1.512-1.5 1.813-.25.101-.281.046-.5.093V14.97c-.164-3.707 1.156-4.774 2.188-5.563.285-.219 1.12-.472 2.312-1.031.996-.469 2.234-1.309 3.563-2.594zm-10 8.594c-.004.227-.075.387-.063.625v8h1s1.07-.012 2.219-.469c1.148-.457 2.535-1.527 2.781-3.406V17l5.375-.031h.031a1.662 1.662 0 011.75 1.562c-.004.016-.05.387-.062.469H20v2h3.844c-.106.773-.203 1.258-.313 2H20v2h3.219a5.002 5.002 0 01-.563 1.375c-.273.445-.508.613-.718.625H5v-7.469c1.621-.86 2.629-2.097 3.281-2.843.676-.774 1.14-1.36 1.594-1.75.297-.254.762-.399 1.188-.563z"/>' }, db = { name: "la-map-marked-alt-solid", minX: 0, minY: 0, width: 32, height: 32, raw: '<path d="M22 3c-3.3 0-6 2.7-6 6 0 .992.383 2.004.875 3.125a35.124 35.124 0 001.75 3.406 62.171 62.171 0 002.563 4.031L22 20.75l.813-1.188s1.289-1.835 2.562-4.03a35.123 35.123 0 001.75-3.407C27.617 11.004 28 9.992 28 9c0-3.3-2.7-6-6-6zM11.969 4.938L4 8.344V27.53l8.031-3.468 8 3L28 23.655v-8.718a49.143 49.143 0 01-2 3.437v3.969l-5 2.125v-1.625l-1.469-2.125c-.156-.227-.34-.496-.531-.782v4.625l-6-2.25V7.438l1.094.407a7.853 7.853 0 01.531-1.938zM22 5c2.219 0 4 1.781 4 4 0 .387-.242 1.3-.688 2.313-.445 1.011-1.074 2.16-1.687 3.218-.816 1.406-1.168 1.906-1.625 2.594-.457-.688-.809-1.188-1.625-2.594-.613-1.058-1.242-2.207-1.688-3.219C18.242 10.302 18 9.387 18 9c0-2.219 1.781-4 4-4zM11 7.5v14.844l-5 2.125V9.656zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>' }, fb = { name: "md-dragindicator-sharp", minX: 0.48, minY: 0.48, width: 23.04, height: 23.04, raw: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>' }, pb = { name: "md-querystats-outlined", minX: 0.48, minY: 0.48, width: 23.04, height: 23.04, raw: '<path fill="none" d="M0 0h24v24H0z"/><path d="M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z"/>' }, hb = () => I2(
  cb,
  ub,
  db,
  pb,
  fb,
  {
    name: "outline-logout",
    width: 24,
    height: 24,
    d: "m17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4l-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
  },
  {
    name: "dashboard-stats-total",
    width: 55,
    height: 55,
    raw: `
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5Z" fill="#3BA2B8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 19C28.3284 19 29 19.6716 29 20.5V29C29 29.8284 28.3284 30.5 27.5 30.5C26.6716 30.5 26 29.8284 26 29V20.5C26 19.6716 26.6716 19 27.5 19Z" fill="#3BA2B8"/>
        <circle cx="27.5" cy="35.5" r="1.5" fill="#3BA2B8"/>
      `
  },
  {
    name: "dashboard-stats-todo",
    width: 55,
    height: 55,
    paths: [
      {
        d: "M27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5ZM27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5Z",
        fill: "#FBBF24"
      },
      {
        d: "M28 19C28.7101 19 29.2857 19.5756 29.2857 20.2857V26.7143H35.7143C36.4244 26.7143 37 27.2899 37 28C37 28.7101 36.4244 29.2857 35.7143 29.2857H29.2857V35.7143C29.2857 36.4244 28.7101 37 28 37C27.2899 37 26.7143 36.4244 26.7143 35.7143V29.2857H20.2857C19.5756 29.2857 19 28.7101 19 28C19 27.2899 19.5756 26.7143 20.2857 26.7143L26.7143 26.7143V20.2857C26.7143 19.5756 27.2899 19 28 19Z",
        fill: "#FBBF24"
      }
    ]
  },
  {
    name: "dashboard-stats-completed",
    width: 55,
    height: 55,
    paths: [
      {
        d: "M27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5Z",
        fill: "#3CA745"
      },
      {
        d: "M36.6025 21.4101C37.1325 21.9568 37.1325 22.8432 36.6025 23.3899L25.7454 34.5899C25.2154 35.1367 24.3561 35.1367 23.8261 34.5899L18.3975 28.9899C17.8675 28.4432 17.8675 27.5568 18.3975 27.0101C18.9275 26.4633 19.7868 26.4633 20.3168 27.0101L24.7857 31.6201L34.6832 21.4101C35.2132 20.8633 36.0725 20.8633 36.6025 21.4101Z",
        fill: "#3CA745"
      }
    ]
  },
  {
    name: "dashboard-map-icon",
    width: 75,
    height: 75,
    raw: `
        <rect width="75" height="75" rx="10" fill="#22C55E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5942 25.5716C33.7199 20.4761 42.0301 20.4761 47.1558 25.5716C52.2814 30.667 52.2814 38.9284 47.1558 44.0239L37.875 53.25L28.5942 44.0239C23.4686 38.9284 23.4686 30.667 28.5942 25.5716ZM37.875 38.5256C39.9461 38.5256 41.625 36.8566 41.625 34.7977C41.625 32.7389 39.9461 31.0698 37.875 31.0698C35.8039 31.0698 34.125 32.7389 34.125 34.7977C34.125 36.8566 35.8039 38.5256 37.875 38.5256Z" fill="white"/>
        <path d="M74.25 47.25L54.375 69.75L28.5942 44.0239C23.4686 38.9284 23.4686 30.667 28.5942 25.5716C33.5066 20.6881 41.3442 20.485 46.5 24.9621V24.8561L74.25 47.25Z" fill="url(#paint0_linear_733_2084)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5942 25.5716C33.7199 20.4761 42.0301 20.4761 47.1558 25.5716C52.2814 30.667 52.2814 38.9284 47.1558 44.0239L37.875 53.25L28.5942 44.0239C23.4686 38.9284 23.4686 30.667 28.5942 25.5716ZM37.875 38.5256C39.9461 38.5256 41.625 36.8566 41.625 34.7977C41.625 32.7389 39.9461 31.0698 37.875 31.0698C35.8039 31.0698 34.125 32.7389 34.125 34.7977C34.125 36.8566 35.8039 38.5256 37.875 38.5256Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_733_2084" x1="45" y1="45.75" x2="63" y2="60.375" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1DA850"/>
        <stop offset="1" stop-color="#1DA850" stop-opacity="0"/>
        </linearGradient>
        </defs>
      `
  },
  {
    name: "dashboard-edit-icon",
    width: 75,
    height: 75,
    raw: `
        <rect width="75" height="75" rx="10" fill="#3BA2B8"/>
        <path d="M44.6375 25.8884C46.0782 24.4477 48.3996 24.4243 49.8689 25.8183C49.8931 25.8413 73.8768 46.8243 73.1505 47.598C74.615 49.0625 75.365 50.6868 73.9005 52.1513L71.6639 54.388L48.375 32.6251L43.1508 27.3751L44.6375 25.8884Z" fill="url(#paint0_linear_733_2089)" fill-opacity="0.7"/>
        <path d="M40.4734 29.9999L24.7634 45.71V51.0133L47.25 73.4997H52.5522L69.0122 57.0396L40.4734 29.9999Z" fill="url(#paint1_linear_733_2089)" fill-opacity="0.7"/>
        <path d="M44.5984 25.8483C46.0628 24.3839 48.4372 24.3839 49.9016 25.8483C51.3661 27.3128 51.3661 29.6872 49.9016 31.1516L48.415 32.6383L43.1117 27.335L44.5984 25.8483Z" fill="white"/>
        <path d="M40.46 29.9867L24.75 45.6967V51H30.0533L45.7633 35.29L40.46 29.9867Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_733_2089" x1="38.625" y1="43.1251" x2="62.625" y2="66.7501" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2F8293"/>
        <stop offset="1" stop-color="#2F8293" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_733_2089" x1="38.625" y1="43.1251" x2="62.625" y2="66.7501" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2F8293"/>
        <stop offset="1" stop-color="#2F8293" stop-opacity="0"/>
        </linearGradient>
        </defs>
      `
  },
  {
    name: "dashboard-create-icon",
    width: 75,
    height: 75,
    raw: `
        <rect width="75" height="75" rx="10" fill="#ED4569"/>
        <path d="M24.0536 37.5537C24.0536 36.4886 24.917 35.6251 25.9821 35.6251L35.625 35.6251V25.9823C35.625 24.9172 36.4884 24.0537 37.5536 24.0537C38.1179 24.0537 38.6256 24.2961 38.9782 24.6824L74.4868 55.6879L57.8898 72.9388L24.6408 38.9394C24.2787 38.5888 24.0536 38.0976 24.0536 37.5537Z" fill="url(#paint0_linear_733_2072)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 24C38.5651 24 39.4286 24.8635 39.4286 25.9286V35.5714H49.0714C50.1366 35.5714 51 36.4349 51 37.5C51 38.5651 50.1366 39.4286 49.0714 39.4286H39.4286V49.0714C39.4286 50.1366 38.5651 51 37.5 51C36.4349 51 35.5714 50.1366 35.5714 49.0714V39.4286H25.9286C24.8635 39.4286 24 38.5651 24 37.5C24 36.4349 24.8635 35.5714 25.9286 35.5714L35.5714 35.5714V25.9286C35.5714 24.8635 36.4349 24 37.5 24Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_733_2072" x1="43.5" y1="44.2501" x2="64.125" y2="63.3751" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CA3B59" stop-opacity="0.75"/>
        <stop offset="1" stop-color="#CA3B59" stop-opacity="0"/>
        </linearGradient>
        </defs>
      `
  },
  {
    name: "dopomoha-logo-icon-white",
    width: 152,
    height: 152,
    raw: `
        <path d="M152 0L152 0L152 152L0 152L0 0L152 0Z" id="dopomoha-logo-text-en" fill="none" stroke="none" />
        <g id="Group" transform="translate(0.0026855469 0)">
          <g id="Dopomoha.Kharkiv-logo-full-EN">
            <path d="M0 0L152 0L152 151.999L0 151.999L0 0Z" id="Rectangle" fill="none" fill-rule="evenodd" stroke="none" />
            <path d="M40.1196 142.084C40.1846 142.084 40.2496 142.112 40.297 142.157C40.3421 142.204 40.3695 142.269 40.3695 142.334C40.3695 142.714 40.3695 143.497 40.3695 144.439C40.3695 148.064 43.3096 151.004 46.9346 151.004C48.0771 151.004 49.2647 151.004 50.4071 151.004C54.0321 151.004 56.972 148.064 56.972 144.439C56.972 144.437 56.972 144.437 56.972 144.434C56.972 143.137 58.0222 142.084 59.3221 142.084C61.1922 142.084 63.4996 142.084 63.4996 142.084C64.7196 142.084 65.8872 141.599 66.7496 140.739C67.6122 139.877 68.0971 138.707 68.0971 137.487L68.0971 137.487C68.0971 134.947 70.1546 132.887 72.6946 132.887C77.7497 132.887 85.1621 132.887 85.1621 132.887C88.3646 132.887 90.9597 130.292 90.9597 127.089L90.9597 104.432C90.9597 101.232 88.3622 98.6345 85.1621 98.6345C81.9622 98.6345 79.3647 101.232 79.3647 104.432L79.3647 116.292C79.3647 119.054 77.1271 121.292 74.3647 121.292C62.8221 121.292 34.432 121.292 22.932 121.292C20.3769 121.292 18.232 119.367 17.9595 116.827C17.9744 111.829 17.9744 104.432 17.9744 104.432C17.9744 101.232 15.3769 98.6345 12.177 98.6345C8.97692 98.6345 6.37941 101.232 6.37941 104.432L6.37941 127.089C6.37941 130.292 8.97692 132.887 12.177 132.887L24.6445 132.887C27.1845 132.887 29.2446 134.947 29.2446 137.487C29.2446 137.487 29.2446 137.487 29.2446 137.487C29.2446 140.027 31.3021 142.084 33.8421 142.084L40.1196 142.084L40.1196 142.084ZM48.6696 44.4746C37.6521 33.6171 21.1895 34.9771 12.3545 42.5271C2.51191 50.942 1.2645 67.7394 11.077 84.5695C15.4946 92.6069 24.6746 100.744 34.4171 107.459C39.6345 111.054 44.1896 112.652 48.6696 112.652C53.1496 112.652 57.7046 111.054 62.9221 107.459C72.6671 100.744 81.8497 92.6019 86.2672 84.5595C96.0748 67.7394 94.8272 50.942 84.9847 42.5271C76.1496 34.9771 59.687 33.6171 48.6696 44.4746L48.6696 44.4746ZM43.6645 56.8171C44.7046 58.5946 46.6096 59.6871 48.6696 59.6871C50.7297 59.6871 52.6346 58.5946 53.6746 56.8171C59.6396 46.6195 71.4847 46.242 77.4497 51.3421C77.4497 51.3421 77.4497 51.3421 77.4497 51.3421C80.2846 53.7646 81.5221 57.4746 81.5221 61.7145C81.5221 66.9196 79.6921 72.8369 76.2122 78.7845C76.1847 78.8345 76.1547 78.8844 76.1272 78.9345C72.4446 85.6795 64.5171 92.2795 56.3446 97.9119C53.4921 99.877 51.1197 101.057 48.6696 101.057C46.2196 101.057 43.8496 99.877 40.9971 97.9119C32.822 92.2795 24.8945 85.6795 21.2121 78.9345C21.1846 78.8844 21.157 78.8345 21.1271 78.7845C17.6496 72.8369 15.817 66.9196 15.817 61.7145C15.817 57.4746 17.0545 53.7646 19.8896 51.3421C25.8546 46.242 37.6995 46.6195 43.6645 56.8171L43.6645 56.8171ZM67.9447 69.9021C62.1646 66.937 55.6122 65.262 48.6696 65.262L48.6696 65.262C41.912 65.262 35.3245 66.8795 29.417 69.8995C26.5696 71.3545 25.4371 74.852 26.8946 77.6994C28.352 80.5495 31.847 81.6795 34.6971 80.222C38.982 78.0319 43.7646 76.857 48.6696 76.857L48.6696 76.857C53.7071 76.857 58.4596 78.0695 62.6546 80.2194C65.5022 81.6795 68.9997 80.5545 70.4596 77.7071C71.9196 74.8595 70.7921 71.362 67.9447 69.9021L67.9447 69.9021ZM48.6696 1.00721L48.6696 1.00469C50.312 1.00469 51.887 1.65716 53.0496 2.8172C54.2096 3.97969 54.862 5.5547 54.862 7.19715L54.862 7.20219C54.8646 8.60965 55.7497 9.86468 57.0746 10.3397C60.2771 11.5146 63.2121 13.3847 65.6722 15.8446C68.2546 18.4271 70.1897 21.5346 71.3697 24.9196C72.4246 27.9396 70.8296 31.2497 67.8072 32.3047C64.7872 33.3596 61.4771 31.7621 60.4247 28.7421C59.8122 26.9896 58.8097 25.3796 57.4721 24.0422C55.1396 21.7096 51.972 20.3972 48.6722 20.3972L48.6696 20.3972C45.3671 20.3972 42.2021 21.7096 39.867 24.0422C38.5296 25.3796 37.5295 26.9896 36.9171 28.7421C35.8621 31.7621 32.5521 33.3596 29.5321 32.3047C26.5121 31.2497 24.9145 27.9396 25.9695 24.9196C27.152 21.5346 29.087 18.4271 31.6671 15.8446C34.127 13.3847 37.0646 11.5146 40.2671 10.3397C41.5921 9.86468 42.4771 8.60965 42.4771 7.20219L42.4771 7.19715C42.4771 5.5547 43.1295 3.97969 44.2921 2.8172C45.4521 1.65716 47.0271 1.00469 48.6696 1.00469L48.6696 1.00721L48.6696 1.00721Z" id="Group" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
          </g>
        </g>
      `
  },
  {
    name: "dopomoha-logo-text-en",
    width: 443,
    height: 152,
    raw: `
        <g id="Dopomoha.Kharkiv-logo-full-EN">
          <path d="M0 0L443 0L443 151.999L0 151.999L0 0Z" id="Rectangle" fill="none" fill-rule="evenodd" stroke="none" />
          <path d="M116.375 32.3609L133.705 32.3609C137.719 32.3609 141.279 33.1112 144.385 34.6119C147.492 36.113 149.9 38.2423 151.611 40.9997C153.321 43.7571 154.176 46.9854 154.176 50.6855C154.176 54.3852 153.321 57.6135 151.611 60.3709C149.9 63.1283 147.492 65.2576 144.385 66.7587C141.279 68.2594 137.719 69.0097 133.705 69.0097L116.375 69.0097L116.375 32.3609L116.375 32.3609ZM133.286 60.7374C136.428 60.7374 138.949 59.8476 140.851 58.0675C142.754 56.2874 143.705 53.8268 143.705 50.6855C143.705 47.5438 142.754 45.0831 140.851 43.3031C138.949 41.523 136.428 40.6332 133.286 40.6332L126.742 40.6332L126.742 60.7374L133.286 60.7374L133.286 60.7374ZM173.391 69.481C170.354 69.481 167.614 68.8529 165.171 67.5961C162.728 66.3398 160.817 64.5943 159.438 62.3607C158.059 60.1266 157.37 57.5962 157.37 54.769C157.37 51.9769 158.059 49.4639 159.438 47.2297C160.817 44.9961 162.719 43.2595 165.145 42.0205C167.571 40.7815 170.319 40.1618 173.391 40.1618C176.463 40.1618 179.22 40.7815 181.663 42.0205C184.106 43.2595 186.009 44.9872 187.37 47.2035C188.731 49.4199 189.412 51.9418 189.412 54.769C189.412 57.5962 188.731 60.1266 187.37 62.3607C186.009 64.5943 184.106 66.3398 181.663 67.5961C179.22 68.8529 176.463 69.481 173.391 69.481L173.391 69.481ZM173.391 61.5753C175.136 61.5753 176.567 60.9733 177.684 59.769C178.801 58.5646 179.359 56.8983 179.359 54.769C179.359 52.6748 178.801 51.0342 177.684 49.8477C176.567 48.6611 175.136 48.0676 173.391 48.0676C171.646 48.0676 170.215 48.6611 169.097 49.8477C167.981 51.0342 167.422 52.6748 167.422 54.769C167.422 56.8983 167.981 58.5646 169.097 59.769C170.215 60.9733 171.646 61.5753 173.391 61.5753L173.391 61.5753ZM211.873 40.1618C214.455 40.1618 216.803 40.7638 218.914 41.9681C221.026 43.1725 222.701 44.8824 223.94 47.0991C225.179 49.3155 225.799 51.8894 225.799 54.8214C225.799 57.7534 225.179 60.3274 223.94 62.5437C222.701 64.7605 221.026 66.4704 218.914 67.6747C216.803 68.8791 214.455 69.481 211.873 69.481C208.557 69.481 205.921 68.4864 203.967 66.4966L203.967 79.1669L194.019 79.1669L194.019 40.6332L203.495 40.6332L203.495 43.4603C205.345 41.2613 208.138 40.1618 211.873 40.1618L211.873 40.1618ZM209.778 61.5753C211.523 61.5753 212.955 60.9733 214.072 59.769C215.188 58.5646 215.747 56.9156 215.747 54.8214C215.747 52.7273 215.188 51.0778 214.072 49.8739C212.955 48.6695 211.523 48.0676 209.778 48.0676C208.033 48.0676 206.602 48.6695 205.485 49.8739C204.368 51.0778 203.809 52.7273 203.809 54.8214C203.809 56.9156 204.368 58.5646 205.485 59.769C206.602 60.9733 208.033 61.5753 209.778 61.5753L209.778 61.5753ZM244.647 69.481C241.611 69.481 238.871 68.8529 236.427 67.5961C233.984 66.3398 232.073 64.5943 230.694 62.3607C229.316 60.1266 228.626 57.5962 228.626 54.769C228.626 51.9769 229.316 49.4639 230.694 47.2297C232.073 44.9961 233.976 43.2595 236.401 42.0205C238.827 40.7815 241.576 40.1618 244.647 40.1618C247.719 40.1618 250.476 40.7815 252.92 42.0205C255.363 43.2595 257.265 44.9872 258.626 47.2035C259.987 49.4199 260.669 51.9418 260.669 54.769C260.669 57.5962 259.987 60.1266 258.626 62.3607C257.265 64.5943 255.363 66.3398 252.92 67.5961C250.476 68.8529 247.719 69.481 244.647 69.481L244.647 69.481ZM244.647 61.5753C246.393 61.5753 247.824 60.9733 248.94 59.769C250.058 58.5646 250.616 56.8983 250.616 54.769C250.616 52.6748 250.058 51.0342 248.94 49.8477C247.824 48.6611 246.393 48.0676 244.647 48.0676C242.902 48.0676 241.471 48.6611 240.354 49.8477C239.237 51.0342 238.679 52.6748 238.679 54.769C238.679 56.8983 239.237 58.5646 240.354 59.769C241.471 60.9733 242.902 61.5753 244.647 61.5753L244.647 61.5753ZM302.239 40.1618C305.729 40.1618 308.513 41.2089 310.59 43.3031C312.667 45.3972 313.705 48.5563 313.705 52.7797L313.705 69.0097L303.757 69.0097L303.757 54.4025C303.757 52.4132 303.382 50.9472 302.632 50.0045C301.881 49.0622 300.825 48.5909 299.464 48.5909C297.963 48.5909 296.759 49.1147 295.852 50.1617C294.944 51.2088 294.49 52.797 294.49 54.9263L294.49 69.0097L284.543 69.0097L284.543 54.4025C284.543 50.5282 283.111 48.5909 280.25 48.5909C278.714 48.5909 277.492 49.1147 276.585 50.1617C275.677 51.2088 275.223 52.797 275.223 54.9263L275.223 69.0097L265.276 69.0097L265.276 40.6332L274.752 40.6332L274.752 43.6171C275.799 42.4652 277.047 41.6016 278.496 41.0259C279.944 40.4497 281.524 40.1618 283.234 40.1618C285.223 40.1618 287.003 40.5283 288.574 41.2613C290.145 41.9943 291.419 43.1112 292.396 44.6118C293.513 43.1809 294.927 42.0814 296.637 41.3138C298.347 40.5456 300.214 40.1618 302.239 40.1618L302.239 40.1618ZM334.648 69.481C331.611 69.481 328.871 68.8529 326.428 67.5961C323.984 66.3398 322.073 64.5943 320.695 62.3607C319.316 60.1266 318.627 57.5962 318.627 54.769C318.627 51.9769 319.316 49.4639 320.695 47.2297C322.073 44.9961 323.975 43.2595 326.401 42.0205C328.827 40.7815 331.576 40.1618 334.648 40.1618C337.719 40.1618 340.476 40.7815 342.92 42.0205C345.363 43.2595 347.265 44.9872 348.627 47.2035C349.988 49.4199 350.668 51.9418 350.668 54.769C350.668 57.5962 349.988 60.1266 348.627 62.3607C347.265 64.5943 345.363 66.3398 342.92 67.5961C340.476 68.8529 337.719 69.481 334.648 69.481L334.648 69.481ZM334.648 61.5753C336.393 61.5753 337.824 60.9733 338.941 59.769C340.058 58.5646 340.616 56.8983 340.616 54.769C340.616 52.6748 340.058 51.0342 338.941 49.8477C337.824 48.6611 336.393 48.0676 334.648 48.0676C332.902 48.0676 331.471 48.6611 330.354 49.8477C329.237 51.0342 328.679 52.6748 328.679 54.769C328.679 56.8983 329.237 58.5646 330.354 59.769C331.471 60.9733 332.902 61.5753 334.648 61.5753L334.648 61.5753ZM373.759 40.1618C377.284 40.1618 380.12 41.2089 382.264 43.3031C384.412 45.3972 385.484 48.5563 385.484 52.7797L385.484 69.0097L375.538 69.0097L375.538 54.4025C375.538 50.5282 373.984 48.5909 370.876 48.5909C369.167 48.5909 367.796 49.1493 366.766 50.2666C365.736 51.3834 365.221 53.0587 365.221 55.2928L365.221 69.0097L355.276 69.0097L355.276 30.1619L365.221 30.1619L365.221 43.2507C366.307 42.2387 367.58 41.4706 369.046 40.9472C370.511 40.4235 372.083 40.1618 373.759 40.1618L373.759 40.1618ZM422.135 40.6332L422.135 69.0097L412.656 69.0097L412.656 66.1825C410.807 68.3815 408.018 69.481 404.282 69.481C401.698 69.481 399.349 68.8791 397.238 67.6747C395.127 66.4704 393.451 64.7516 392.215 62.5175C390.975 60.2838 390.352 57.701 390.352 54.769C390.352 51.837 390.975 49.2631 392.215 47.0467C393.451 44.8304 395.127 43.1285 397.238 41.9419C399.349 40.7553 401.698 40.1618 404.282 40.1618C407.634 40.1618 410.269 41.1392 412.188 43.0938L412.188 40.6332L422.135 40.6332L422.135 40.6332ZM406.375 61.5753C408.12 61.5753 409.553 60.9733 410.667 59.769C411.786 58.5646 412.343 56.8983 412.343 54.769C412.343 52.6748 411.786 51.0342 410.667 49.8477C409.553 48.6611 408.12 48.0676 406.375 48.0676C404.629 48.0676 403.201 48.6611 402.082 49.8477C400.964 51.0342 400.407 52.6748 400.407 54.769C400.407 56.8983 400.964 58.5646 402.082 59.769C403.201 60.9733 404.629 61.5753 406.375 61.5753L406.375 61.5753ZM432.709 69.481C431.033 69.481 429.619 68.9226 428.468 67.8058C427.316 66.6885 426.741 65.2749 426.741 63.565C426.741 61.8196 427.307 60.406 428.444 59.3238C429.577 58.2421 431 57.701 432.709 57.701C434.454 57.701 435.887 58.2421 437.005 59.3238C438.119 60.406 438.681 61.8196 438.681 63.565C438.681 65.2749 438.11 66.6885 436.977 67.8058C435.845 68.9226 434.422 69.481 432.709 69.481L432.709 69.481ZM130.511 108.067L126.637 112.204L126.637 121.366L116.375 121.366L116.375 84.7164L126.637 84.7164L126.637 99.9522L140.825 84.7164L152.239 84.7164L137.265 100.947L153.024 121.366L140.982 121.366L130.511 108.067L130.511 108.067ZM173.757 92.5178C177.283 92.5178 180.119 93.5648 182.265 95.659C184.412 97.7532 185.485 100.912 185.485 105.135L185.485 121.366L175.537 121.366L175.537 106.758C175.537 102.884 173.984 100.947 170.877 100.947C169.168 100.947 167.798 101.505 166.768 102.622C165.738 103.739 165.223 105.415 165.223 107.648L165.223 121.366L155.276 121.366L155.276 82.5178L165.223 82.5178L165.223 95.6066C166.305 94.5941 167.579 93.8265 169.045 93.3027C170.511 92.7794 172.082 92.5178 173.757 92.5178L173.757 92.5178ZM222.134 92.9886L222.134 121.366L212.658 121.366L212.658 118.538C210.808 120.737 208.016 121.837 204.281 121.837C201.698 121.837 199.351 121.235 197.239 120.031C195.127 118.826 193.452 117.108 192.213 114.873C190.974 112.64 190.354 110.057 190.354 107.125C190.354 104.193 190.974 101.619 192.213 99.4022C193.452 97.1858 195.127 95.4844 197.239 94.2978C199.351 93.1108 201.698 92.5178 204.281 92.5178C207.632 92.5178 210.267 93.4951 212.187 95.4493L212.187 92.9886L222.134 92.9886L222.134 92.9886ZM206.375 113.931C208.12 113.931 209.551 113.329 210.668 112.125C211.785 110.921 212.344 109.254 212.344 107.125C212.344 105.031 211.785 103.39 210.668 102.204C209.551 101.017 208.12 100.423 206.375 100.423C204.63 100.423 203.199 101.017 202.082 102.204C200.965 103.39 200.407 105.031 200.407 107.125C200.407 109.254 200.965 110.921 202.082 112.125C203.199 113.329 204.63 113.931 206.375 113.931L206.375 113.931ZM237.998 96.392C239.01 95.1006 240.328 94.1317 241.951 93.4862C243.574 92.8402 245.433 92.5178 247.527 92.5178L247.527 101.471C246.619 101.366 245.869 101.313 245.276 101.313C243.147 101.313 241.48 101.889 240.276 103.041C239.072 104.193 238.47 105.956 238.47 108.329L238.47 121.366L228.522 121.366L228.522 92.9886L237.998 92.9886L237.998 96.392L237.998 96.392ZM264.49 111.418L261.558 114.402L261.558 121.366L251.611 121.366L251.611 82.5178L261.558 82.5178L261.558 102.884L271.716 92.9886L283.496 92.9886L271.716 105.135L284.49 121.366L272.449 121.366L264.49 111.418L264.49 111.418ZM287.422 92.9886L297.37 92.9886L297.37 121.366L287.422 121.366L287.422 92.9886L287.422 92.9886ZM292.396 89.8474C290.581 89.8474 289.115 89.3414 287.998 88.3289C286.881 87.317 286.323 86.0602 286.323 84.5596C286.323 83.0584 286.881 81.8021 287.998 80.7897C289.115 79.7777 290.581 79.2717 292.396 79.2717C294.211 79.2717 295.677 79.7515 296.794 80.7115C297.911 81.6711 298.469 82.9016 298.469 84.4023C298.469 85.9731 297.911 87.2734 296.794 88.3027C295.677 89.3325 294.211 89.8474 292.396 89.8474L292.396 89.8474ZM333.705 92.9886L321.977 121.366L311.716 121.366L300.04 92.9886L310.25 92.9886L317.056 110.319L324.229 92.9886L333.705 92.9886L333.705 92.9886ZM40.1196 142.084C40.1846 142.084 40.2496 142.112 40.297 142.157C40.3421 142.204 40.3695 142.269 40.3695 142.334C40.3695 142.714 40.3695 143.497 40.3695 144.439C40.3695 148.064 43.3096 151.004 46.9346 151.004C48.0771 151.004 49.2647 151.004 50.4071 151.004C54.0321 151.004 56.972 148.064 56.972 144.439C56.972 144.437 56.972 144.437 56.972 144.434C56.972 143.137 58.0222 142.084 59.3221 142.084C61.1922 142.084 63.4996 142.084 63.4996 142.084C64.7196 142.084 65.8872 141.599 66.7496 140.739C67.6122 139.877 68.0971 138.707 68.0971 137.487L68.0971 137.487C68.0971 134.947 70.1546 132.887 72.6946 132.887C77.7497 132.887 85.1621 132.887 85.1621 132.887C88.3646 132.887 90.9597 130.292 90.9597 127.089L90.9597 104.432C90.9597 101.232 88.3622 98.6345 85.1621 98.6345C81.9622 98.6345 79.3647 101.232 79.3647 104.432L79.3647 116.292C79.3647 119.054 77.1271 121.292 74.3647 121.292C62.8221 121.292 34.432 121.292 22.932 121.292C20.3769 121.292 18.232 119.367 17.9595 116.827C17.9744 111.829 17.9744 104.432 17.9744 104.432C17.9744 101.232 15.3769 98.6345 12.177 98.6345C8.97692 98.6345 6.37941 101.232 6.37941 104.432L6.37941 127.089C6.37941 130.292 8.97692 132.887 12.177 132.887L24.6445 132.887C27.1845 132.887 29.2446 134.947 29.2446 137.487C29.2446 137.487 29.2446 137.487 29.2446 137.487C29.2446 140.027 31.3021 142.084 33.8421 142.084L40.1196 142.084L40.1196 142.084ZM48.6696 44.4746C37.6521 33.6171 21.1895 34.9771 12.3545 42.5271C2.51191 50.942 1.2645 67.7394 11.077 84.5695C15.4946 92.6069 24.6746 100.744 34.4171 107.459C39.6345 111.054 44.1896 112.652 48.6696 112.652C53.1496 112.652 57.7046 111.054 62.9221 107.459C72.6671 100.744 81.8497 92.6019 86.2672 84.5595C96.0748 67.7394 94.8272 50.942 84.9847 42.5271C76.1496 34.9771 59.687 33.6171 48.6696 44.4746L48.6696 44.4746ZM43.6645 56.8171C44.7046 58.5946 46.6096 59.6871 48.6696 59.6871C50.7297 59.6871 52.6346 58.5946 53.6746 56.8171C59.6396 46.6195 71.4847 46.242 77.4497 51.3421C77.4497 51.3421 77.4497 51.3421 77.4497 51.3421C80.2846 53.7646 81.5221 57.4746 81.5221 61.7145C81.5221 66.9196 79.6921 72.8369 76.2122 78.7845C76.1847 78.8345 76.1547 78.8844 76.1272 78.9345C72.4446 85.6795 64.5171 92.2795 56.3446 97.9119C53.4921 99.877 51.1197 101.057 48.6696 101.057C46.2196 101.057 43.8496 99.877 40.9971 97.9119C32.822 92.2795 24.8945 85.6795 21.2121 78.9345C21.1846 78.8844 21.157 78.8345 21.1271 78.7845C17.6496 72.8369 15.817 66.9196 15.817 61.7145C15.817 57.4746 17.0545 53.7646 19.8896 51.3421C25.8546 46.242 37.6995 46.6195 43.6645 56.8171L43.6645 56.8171ZM67.9447 69.9021C62.1646 66.937 55.6122 65.262 48.6696 65.262L48.6696 65.262C41.912 65.262 35.3245 66.8795 29.417 69.8995C26.5696 71.3545 25.4371 74.852 26.8946 77.6994C28.352 80.5495 31.847 81.6795 34.6971 80.222C38.982 78.0319 43.7646 76.857 48.6696 76.857L48.6696 76.857C53.7071 76.857 58.4596 78.0695 62.6546 80.2194C65.5022 81.6795 68.9997 80.5545 70.4596 77.7071C71.9196 74.8595 70.7921 71.362 67.9447 69.9021L67.9447 69.9021ZM48.6696 1.00721L48.6696 1.00469C50.312 1.00469 51.887 1.65716 53.0496 2.8172C54.2096 3.97969 54.862 5.5547 54.862 7.19715L54.862 7.20219C54.8646 8.60965 55.7497 9.86468 57.0746 10.3397C60.2771 11.5146 63.2121 13.3847 65.6722 15.8446C68.2546 18.4271 70.1897 21.5346 71.3697 24.9196C72.4246 27.9396 70.8296 31.2497 67.8072 32.3047C64.7872 33.3596 61.4771 31.7621 60.4247 28.7421C59.8122 26.9896 58.8097 25.3796 57.4721 24.0422C55.1396 21.7096 51.972 20.3972 48.6722 20.3972L48.6696 20.3972C45.3671 20.3972 42.2021 21.7096 39.867 24.0422C38.5296 25.3796 37.5295 26.9896 36.9171 28.7421C35.8621 31.7621 32.5521 33.3596 29.5321 32.3047C26.5121 31.2497 24.9145 27.9396 25.9695 24.9196C27.152 21.5346 29.087 18.4271 31.6671 15.8446C34.127 13.3847 37.0646 11.5146 40.2671 10.3397C41.5921 9.86468 42.4771 8.60965 42.4771 7.20219L42.4771 7.19715C42.4771 5.5547 43.1295 3.97969 44.2921 2.8172C45.4521 1.65716 47.0271 1.00469 48.6696 1.00469L48.6696 1.00721L48.6696 1.00721Z" id="Group" fill="#F3869D" fill-rule="evenodd" stroke="none" />
        </g>
      `
  }
);
const Ba = {
  appealsStatsURL: "/api/stats",
  kharkivAppealsGeodataURL: "/api/geodata/appeals",
  kharkivDistrictsGeodataURL: "/api/geodata/kharkiv-districts"
}, cl = {
  id: "id-input",
  text: "appeal-text",
  tag: "appeal-tag",
  textarea: "textarea",
  inputHalf: "half-width-input",
  inputFull: "full-width-input",
  selectHalf: "half-width-select",
  selectFull: "full-width-select"
}, mb = [
  { name: "Serial Number", semantic: "appealId" },
  { name: "Type", semantic: "type" },
  { name: "Original Text", semantic: "text" },
  { name: "Status", semantic: "status" },
  { name: "Managed By", semantic: "managedBy" },
  { name: "Submit Date", semantic: "submitDate" },
  { name: "Tag", semantic: "tag" },
  { name: "Address", semantic: "address" },
  { name: "Phone", semantic: "phone" }
].map((e) => ({
  ...e,
  tabs: [0],
  value: "",
  layout: cl.inputFull
}));
mb.reduce(
  (e, t) => ({
    ...e,
    [t.semantic]: t
  }),
  {}
);
const _9 = {
  kharkiv: "All Kharkiv",
  holodnohirskyi: "Kholodnohirskyi",
  industrialnyi: "Industrialnyi",
  kyivskyi: "Kyivskyi",
  niemyshlia: "Nemyshlyanskyi",
  novobavarskyi: "Novobavarskyi",
  osnovianskyi: "Osnovianskyi",
  saltivskiy: "Saltivskyi",
  shevchenkivskyi: "Shevchenkivskyi",
  slobidskyi: "Slobidskyi"
}, vb = "kharkiv";
var ct;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const s = {};
    for (const i of o)
      s[i] = i;
    return s;
  }, e.getValidEnumValues = (o) => {
    const s = e.objectKeys(o).filter((a) => typeof o[o[a]] != "number"), i = {};
    for (const a of s)
      i[a] = o[a];
    return e.objectValues(i);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(s) {
    return o[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const s = [];
    for (const i in o)
      Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
    return s;
  }, e.find = (o, s) => {
    for (const i of o)
      if (s(i))
        return i;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, s = " | ") {
    return o.map((i) => typeof i == "string" ? `'${i}'` : i).join(s);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, s) => typeof s == "bigint" ? s.toString() : s;
})(ct || (ct = {}));
var wu;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(wu || (wu = {}));
const ye = ct.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Ur = (e) => {
  switch (typeof e) {
    case "undefined":
      return ye.undefined;
    case "string":
      return ye.string;
    case "number":
      return isNaN(e) ? ye.nan : ye.number;
    case "boolean":
      return ye.boolean;
    case "function":
      return ye.function;
    case "bigint":
      return ye.bigint;
    case "symbol":
      return ye.symbol;
    case "object":
      return Array.isArray(e) ? ye.array : e === null ? ye.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? ye.promise : typeof Map < "u" && e instanceof Map ? ye.map : typeof Set < "u" && e instanceof Set ? ye.set : typeof Date < "u" && e instanceof Date ? ye.date : ye.object;
    default:
      return ye.unknown;
  }
}, ce = ct.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), gb = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class zn extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(s) {
      return s.message;
    }, r = { _errors: [] }, o = (s) => {
      for (const i of s.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(o);
        else if (i.code === "invalid_return_type")
          o(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          o(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(n(i));
        else {
          let a = r, l = 0;
          for (; l < i.path.length; ) {
            const c = i.path[l];
            l === i.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(n(i))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return o(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ct.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
zn.create = (e) => new zn(e);
const Vi = (e, t) => {
  let n;
  switch (e.code) {
    case ce.invalid_type:
      e.received === ye.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ce.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ct.jsonStringifyReplacer)}`;
      break;
    case ce.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ct.joinValues(e.keys, ", ")}`;
      break;
    case ce.invalid_union:
      n = "Invalid input";
      break;
    case ce.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ct.joinValues(e.options)}`;
      break;
    case ce.invalid_enum_value:
      n = `Invalid enum value. Expected ${ct.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ce.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ce.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ce.invalid_date:
      n = "Invalid date";
      break;
    case ce.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ct.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ce.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ce.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ce.custom:
      n = "Invalid input";
      break;
    case ce.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ce.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ce.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ct.assertNever(e);
  }
  return { message: n };
};
let vv = Vi;
function yb(e) {
  vv = e;
}
function ul() {
  return vv;
}
const dl = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, s = [...n, ...o.path || []], i = {
    ...o,
    path: s
  };
  let a = "";
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(i, { data: t, defaultError: a }).message;
  return {
    ...o,
    path: s,
    message: o.message || a
  };
}, bb = [];
function Ee(e, t) {
  const n = dl({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      ul(),
      Vi
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class qt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return He;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n)
      r.push({
        key: await o.key,
        value: await o.value
      });
    return qt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: s, value: i } = o;
      if (s.status === "aborted" || i.status === "aborted")
        return He;
      s.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof i.value < "u" || o.alwaysSet) && (r[s.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const He = Object.freeze({
  status: "aborted"
}), gv = (e) => ({ status: "dirty", value: e }), on = (e) => ({ status: "valid", value: e }), Su = (e) => e.status === "aborted", Cu = (e) => e.status === "dirty", Fi = (e) => e.status === "valid", fl = (e) => typeof Promise < "u" && e instanceof Promise;
var Re;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Re || (Re = {}));
class or {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const lp = (e, t) => {
  if (Fi(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new zn(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Ze(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (i, a) => i.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: r ?? a.defaultError } : { message: n ?? a.defaultError }, description: o };
}
class Xe {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ur(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ur(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new qt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ur(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (fl(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Ur(t)
    }, s = this._parseSync({ data: t, path: o.path, parent: o });
    return lp(o, s);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Ur(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), s = await (fl(o) ? o : Promise.resolve(o));
    return lp(r, s);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, s) => {
      const i = t(o), a = () => s.addIssue({
        code: ce.custom,
        ...r(o)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new Gn({
      schema: this,
      typeName: je.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return yr.create(this, this._def);
  }
  nullable() {
    return Bo.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Kn.create(this, this._def);
  }
  promise() {
    return Ds.create(this, this._def);
  }
  or(t) {
    return zi.create([this, t], this._def);
  }
  and(t) {
    return Ki.create(this, t, this._def);
  }
  transform(t) {
    return new Gn({
      ...Ze(this._def),
      schema: this,
      typeName: je.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Xi({
      ...Ze(this._def),
      innerType: this,
      defaultValue: n,
      typeName: je.ZodDefault
    });
  }
  brand() {
    return new bv({
      typeName: je.ZodBranded,
      type: this,
      ...Ze(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new vl({
      ...Ze(this._def),
      innerType: this,
      catchValue: n,
      typeName: je.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return oa.create(this, t);
  }
  readonly() {
    return yl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const xb = /^c[^\s-]{8,}$/i, Eb = /^[a-z][a-z0-9]*$/, wb = /^[0-9A-HJKMNP-TV-Z]{26}$/, Sb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Cb = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ob = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let bc;
const Tb = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Nb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, _b = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Ab(e, t) {
  return !!((t === "v4" || !t) && Tb.test(e) || (t === "v6" || !t) && Nb.test(e));
}
class Un extends Xe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== ye.string) {
      const s = this._getOrReturnCtx(t);
      return Ee(
        s,
        {
          code: ce.invalid_type,
          expected: ye.string,
          received: s.parsedType
        }
        //
      ), He;
    }
    const r = new qt();
    let o;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (o = this._getOrReturnCtx(t, o), Ee(o, {
          code: ce.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (o = this._getOrReturnCtx(t, o), Ee(o, {
          code: ce.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = t.data.length > s.value, a = t.data.length < s.value;
        (i || a) && (o = this._getOrReturnCtx(t, o), i ? Ee(o, {
          code: ce.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && Ee(o, {
          code: ce.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        Cb.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "email",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        bc || (bc = new RegExp(Ob, "u")), bc.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "emoji",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        Sb.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "uuid",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        xb.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "cuid",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        Eb.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "cuid2",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        wb.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "ulid",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), Ee(o, {
            validation: "url",
            code: ce.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "regex",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          code: ce.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), r.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          code: ce.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          code: ce.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "datetime" ? _b(s).test(t.data) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          code: ce.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? Ab(t.data, s.version) || (o = this._getOrReturnCtx(t, o), Ee(o, {
          validation: "ip",
          code: ce.invalid_string,
          message: s.message
        }), r.dirty()) : ct.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: ce.invalid_string,
      ...Re.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Re.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Re.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Re.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Re.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Re.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Re.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Re.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Re.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ...Re.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Re.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Re.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Re.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Re.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Re.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Re.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Re.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Re.errToObj(t));
  }
  trim() {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Un.create = (e) => {
  var t;
  return new Un({
    checks: [],
    typeName: je.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ze(e)
  });
};
function Db(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, s = parseInt(e.toFixed(o).replace(".", "")), i = parseInt(t.toFixed(o).replace(".", ""));
  return s % i / Math.pow(10, o);
}
class ao extends Xe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== ye.number) {
      const s = this._getOrReturnCtx(t);
      return Ee(s, {
        code: ce.invalid_type,
        expected: ye.number,
        received: s.parsedType
      }), He;
    }
    let r;
    const o = new qt();
    for (const s of this._def.checks)
      s.kind === "int" ? ct.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), o.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), o.dirty()) : s.kind === "multipleOf" ? Db(t.data, s.value) !== 0 && (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), o.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.not_finite,
        message: s.message
      }), o.dirty()) : ct.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Re.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Re.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Re.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Re.toString(n));
  }
  setLimit(t, n, r, o) {
    return new ao({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Re.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ao({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Re.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Re.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Re.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Re.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Re.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ct.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
ao.create = (e) => new ao({
  checks: [],
  typeName: je.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ze(e)
});
class lo extends Xe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== ye.bigint) {
      const s = this._getOrReturnCtx(t);
      return Ee(s, {
        code: ce.invalid_type,
        expected: ye.bigint,
        received: s.parsedType
      }), He;
    }
    let r;
    const o = new qt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), o.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), Ee(r, {
        code: ce.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), o.dirty()) : ct.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Re.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Re.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Re.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Re.toString(n));
  }
  setLimit(t, n, r, o) {
    return new lo({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Re.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new lo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Re.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
lo.create = (e) => {
  var t;
  return new lo({
    checks: [],
    typeName: je.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ze(e)
  });
};
class Bi extends Xe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== ye.boolean) {
      const r = this._getOrReturnCtx(t);
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.boolean,
        received: r.parsedType
      }), He;
    }
    return on(t.data);
  }
}
Bi.create = (e) => new Bi({
  typeName: je.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ze(e)
});
class Vo extends Xe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== ye.date) {
      const s = this._getOrReturnCtx(t);
      return Ee(s, {
        code: ce.invalid_type,
        expected: ye.date,
        received: s.parsedType
      }), He;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return Ee(s, {
        code: ce.invalid_date
      }), He;
    }
    const r = new qt();
    let o;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (o = this._getOrReturnCtx(t, o), Ee(o, {
        code: ce.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (o = this._getOrReturnCtx(t, o), Ee(o, {
        code: ce.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : ct.assertNever(s);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Vo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Re.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Re.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Vo.create = (e) => new Vo({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: je.ZodDate,
  ...Ze(e)
});
class pl extends Xe {
  _parse(t) {
    if (this._getType(t) !== ye.symbol) {
      const r = this._getOrReturnCtx(t);
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.symbol,
        received: r.parsedType
      }), He;
    }
    return on(t.data);
  }
}
pl.create = (e) => new pl({
  typeName: je.ZodSymbol,
  ...Ze(e)
});
class Ui extends Xe {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.undefined,
        received: r.parsedType
      }), He;
    }
    return on(t.data);
  }
}
Ui.create = (e) => new Ui({
  typeName: je.ZodUndefined,
  ...Ze(e)
});
class Hi extends Xe {
  _parse(t) {
    if (this._getType(t) !== ye.null) {
      const r = this._getOrReturnCtx(t);
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.null,
        received: r.parsedType
      }), He;
    }
    return on(t.data);
  }
}
Hi.create = (e) => new Hi({
  typeName: je.ZodNull,
  ...Ze(e)
});
class As extends Xe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return on(t.data);
  }
}
As.create = (e) => new As({
  typeName: je.ZodAny,
  ...Ze(e)
});
class Ro extends Xe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return on(t.data);
  }
}
Ro.create = (e) => new Ro({
  typeName: je.ZodUnknown,
  ...Ze(e)
});
class Or extends Xe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Ee(n, {
      code: ce.invalid_type,
      expected: ye.never,
      received: n.parsedType
    }), He;
  }
}
Or.create = (e) => new Or({
  typeName: je.ZodNever,
  ...Ze(e)
});
class hl extends Xe {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.void,
        received: r.parsedType
      }), He;
    }
    return on(t.data);
  }
}
hl.create = (e) => new hl({
  typeName: je.ZodVoid,
  ...Ze(e)
});
class Kn extends Xe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== ye.array)
      return Ee(n, {
        code: ce.invalid_type,
        expected: ye.array,
        received: n.parsedType
      }), He;
    if (o.exactLength !== null) {
      const i = n.data.length > o.exactLength.value, a = n.data.length < o.exactLength.value;
      (i || a) && (Ee(n, {
        code: i ? ce.too_big : ce.too_small,
        minimum: a ? o.exactLength.value : void 0,
        maximum: i ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (Ee(n, {
      code: ce.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (Ee(n, {
      code: ce.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, a) => o.type._parseAsync(new or(n, i, n.path, a)))).then((i) => qt.mergeArray(r, i));
    const s = [...n.data].map((i, a) => o.type._parseSync(new or(n, i, n.path, a)));
    return qt.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Kn({
      ...this._def,
      minLength: { value: t, message: Re.toString(n) }
    });
  }
  max(t, n) {
    return new Kn({
      ...this._def,
      maxLength: { value: t, message: Re.toString(n) }
    });
  }
  length(t, n) {
    return new Kn({
      ...this._def,
      exactLength: { value: t, message: Re.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Kn.create = (e, t) => new Kn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: je.ZodArray,
  ...Ze(t)
});
function os(e) {
  if (e instanceof St) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = yr.create(os(r));
    }
    return new St({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Kn ? new Kn({
      ...e._def,
      type: os(e.element)
    }) : e instanceof yr ? yr.create(os(e.unwrap())) : e instanceof Bo ? Bo.create(os(e.unwrap())) : e instanceof sr ? sr.create(e.items.map((t) => os(t))) : e;
}
class St extends Xe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ct.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== ye.object) {
      const c = this._getOrReturnCtx(t);
      return Ee(c, {
        code: ce.invalid_type,
        expected: ye.object,
        received: c.parsedType
      }), He;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Or && this._def.unknownKeys === "strip"))
      for (const c in o.data)
        i.includes(c) || a.push(c);
    const l = [];
    for (const c of i) {
      const u = s[c], d = o.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new or(o, d, o.path, c)),
        alwaysSet: c in o.data
      });
    }
    if (this._def.catchall instanceof Or) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (c === "strict")
        a.length > 0 && (Ee(o, {
          code: ce.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const d = o.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new or(o, d, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key;
        c.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => qt.mergeObjectSync(r, c)) : qt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Re.errToObj, new St({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, s, i, a;
          const l = (i = (s = (o = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(o, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = Re.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new St({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new St({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new St({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new St({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: je.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new St({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return ct.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new St({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return ct.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new St({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return os(this);
  }
  partial(t) {
    const n = {};
    return ct.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new St({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return ct.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof yr; )
          s = s._def.innerType;
        n[r] = s;
      }
    }), new St({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return yv(ct.objectKeys(this.shape));
  }
}
St.create = (e, t) => new St({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Or.create(),
  typeName: je.ZodObject,
  ...Ze(t)
});
St.strictCreate = (e, t) => new St({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Or.create(),
  typeName: je.ZodObject,
  ...Ze(t)
});
St.lazycreate = (e, t) => new St({
  shape: e,
  unknownKeys: "strip",
  catchall: Or.create(),
  typeName: je.ZodObject,
  ...Ze(t)
});
class zi extends Xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((a) => new zn(a.ctx.common.issues));
      return Ee(n, {
        code: ce.invalid_union,
        unionErrors: i
      }), He;
    }
    if (n.common.async)
      return Promise.all(r.map(async (s) => {
        const i = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: i
          }),
          ctx: i
        };
      })).then(o);
    {
      let s;
      const i = [];
      for (const l of r) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !s && (s = { result: u, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = i.map((l) => new zn(l));
      return Ee(n, {
        code: ce.invalid_union,
        unionErrors: a
      }), He;
    }
  }
  get options() {
    return this._def.options;
  }
}
zi.create = (e, t) => new zi({
  options: e,
  typeName: je.ZodUnion,
  ...Ze(t)
});
const Ua = (e) => e instanceof Zi ? Ua(e.schema) : e instanceof Gn ? Ua(e.innerType()) : e instanceof Wi ? [e.value] : e instanceof co ? e.options : e instanceof Yi ? Object.keys(e.enum) : e instanceof Xi ? Ua(e._def.innerType) : e instanceof Ui ? [void 0] : e instanceof Hi ? [null] : null;
class Zl extends Xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.object)
      return Ee(n, {
        code: ce.invalid_type,
        expected: ye.object,
        received: n.parsedType
      }), He;
    const r = this.discriminator, o = n.data[r], s = this.optionsMap.get(o);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (Ee(n, {
      code: ce.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), He);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const s of n) {
      const i = Ua(s.shape[t]);
      if (!i)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of i) {
        if (o.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        o.set(a, s);
      }
    }
    return new Zl({
      typeName: je.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Ze(r)
    });
  }
}
function Ou(e, t) {
  const n = Ur(e), r = Ur(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === ye.object && r === ye.object) {
    const o = ct.objectKeys(t), s = ct.objectKeys(e).filter((a) => o.indexOf(a) !== -1), i = { ...e, ...t };
    for (const a of s) {
      const l = Ou(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      i[a] = l.data;
    }
    return { valid: !0, data: i };
  } else if (n === ye.array && r === ye.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s], a = t[s], l = Ou(i, a);
      if (!l.valid)
        return { valid: !1 };
      o.push(l.data);
    }
    return { valid: !0, data: o };
  } else
    return n === ye.date && r === ye.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ki extends Xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (s, i) => {
      if (Su(s) || Su(i))
        return He;
      const a = Ou(s.value, i.value);
      return a.valid ? ((Cu(s) || Cu(i)) && n.dirty(), { status: n.value, value: a.data }) : (Ee(r, {
        code: ce.invalid_intersection_types
      }), He);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([s, i]) => o(s, i)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Ki.create = (e, t, n) => new Ki({
  left: e,
  right: t,
  typeName: je.ZodIntersection,
  ...Ze(n)
});
class sr extends Xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.array)
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.array,
        received: r.parsedType
      }), He;
    if (r.data.length < this._def.items.length)
      return Ee(r, {
        code: ce.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), He;
    !this._def.rest && r.data.length > this._def.items.length && (Ee(r, {
      code: ce.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...r.data].map((i, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new or(r, i, r.path, a)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(s).then((i) => qt.mergeArray(n, i)) : qt.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new sr({
      ...this._def,
      rest: t
    });
  }
}
sr.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new sr({
    items: e,
    typeName: je.ZodTuple,
    rest: null,
    ...Ze(t)
  });
};
class Gi extends Xe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.object)
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.object,
        received: r.parsedType
      }), He;
    const o = [], s = this._def.keyType, i = this._def.valueType;
    for (const a in r.data)
      o.push({
        key: s._parse(new or(r, a, r.path, a)),
        value: i._parse(new or(r, r.data[a], r.path, a))
      });
    return r.common.async ? qt.mergeObjectAsync(n, o) : qt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Xe ? new Gi({
      keyType: t,
      valueType: n,
      typeName: je.ZodRecord,
      ...Ze(r)
    }) : new Gi({
      keyType: Un.create(),
      valueType: t,
      typeName: je.ZodRecord,
      ...Ze(n)
    });
  }
}
class ml extends Xe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.map)
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.map,
        received: r.parsedType
      }), He;
    const o = this._def.keyType, s = this._def.valueType, i = [...r.data.entries()].map(([a, l], c) => ({
      key: o._parse(new or(r, a, r.path, [c, "key"])),
      value: s._parse(new or(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return He;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of i) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return He;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
ml.create = (e, t, n) => new ml({
  valueType: t,
  keyType: e,
  typeName: je.ZodMap,
  ...Ze(n)
});
class Fo extends Xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.set)
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.set,
        received: r.parsedType
      }), He;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (Ee(r, {
      code: ce.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (Ee(r, {
      code: ce.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function i(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return He;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const a = [...r.data.values()].map((l, c) => s._parse(new or(r, l, r.path, c)));
    return r.common.async ? Promise.all(a).then((l) => i(l)) : i(a);
  }
  min(t, n) {
    return new Fo({
      ...this._def,
      minSize: { value: t, message: Re.toString(n) }
    });
  }
  max(t, n) {
    return new Fo({
      ...this._def,
      maxSize: { value: t, message: Re.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Fo.create = (e, t) => new Fo({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: je.ZodSet,
  ...Ze(t)
});
class bs extends Xe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.function)
      return Ee(n, {
        code: ce.invalid_type,
        expected: ye.function,
        received: n.parsedType
      }), He;
    function r(a, l) {
      return dl({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ul(),
          Vi
        ].filter((c) => !!c),
        issueData: {
          code: ce.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function o(a, l) {
      return dl({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ul(),
          Vi
        ].filter((c) => !!c),
        issueData: {
          code: ce.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, i = n.data;
    if (this._def.returns instanceof Ds) {
      const a = this;
      return on(async function(...l) {
        const c = new zn([]), u = await a._def.args.parseAsync(l, s).catch((p) => {
          throw c.addIssue(r(l, p)), c;
        }), d = await Reflect.apply(i, this, u);
        return await a._def.returns._def.type.parseAsync(d, s).catch((p) => {
          throw c.addIssue(o(d, p)), c;
        });
      });
    } else {
      const a = this;
      return on(function(...l) {
        const c = a._def.args.safeParse(l, s);
        if (!c.success)
          throw new zn([r(l, c.error)]);
        const u = Reflect.apply(i, this, c.data), d = a._def.returns.safeParse(u, s);
        if (!d.success)
          throw new zn([o(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new bs({
      ...this._def,
      args: sr.create(t).rest(Ro.create())
    });
  }
  returns(t) {
    return new bs({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new bs({
      args: t || sr.create([]).rest(Ro.create()),
      returns: n || Ro.create(),
      typeName: je.ZodFunction,
      ...Ze(r)
    });
  }
}
class Zi extends Xe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Zi.create = (e, t) => new Zi({
  getter: e,
  typeName: je.ZodLazy,
  ...Ze(t)
});
class Wi extends Xe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Ee(n, {
        received: n.data,
        code: ce.invalid_literal,
        expected: this._def.value
      }), He;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Wi.create = (e, t) => new Wi({
  value: e,
  typeName: je.ZodLiteral,
  ...Ze(t)
});
function yv(e, t) {
  return new co({
    values: e,
    typeName: je.ZodEnum,
    ...Ze(t)
  });
}
class co extends Xe {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Ee(n, {
        expected: ct.joinValues(r),
        received: n.parsedType,
        code: ce.invalid_type
      }), He;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Ee(n, {
        received: n.data,
        code: ce.invalid_enum_value,
        options: r
      }), He;
    }
    return on(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return co.create(t);
  }
  exclude(t) {
    return co.create(this.options.filter((n) => !t.includes(n)));
  }
}
co.create = yv;
class Yi extends Xe {
  _parse(t) {
    const n = ct.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== ye.string && r.parsedType !== ye.number) {
      const o = ct.objectValues(n);
      return Ee(r, {
        expected: ct.joinValues(o),
        received: r.parsedType,
        code: ce.invalid_type
      }), He;
    }
    if (n.indexOf(t.data) === -1) {
      const o = ct.objectValues(n);
      return Ee(r, {
        received: r.data,
        code: ce.invalid_enum_value,
        options: o
      }), He;
    }
    return on(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Yi.create = (e, t) => new Yi({
  values: e,
  typeName: je.ZodNativeEnum,
  ...Ze(t)
});
class Ds extends Xe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.promise && n.common.async === !1)
      return Ee(n, {
        code: ce.invalid_type,
        expected: ye.promise,
        received: n.parsedType
      }), He;
    const r = n.parsedType === ye.promise ? n.data : Promise.resolve(n.data);
    return on(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ds.create = (e, t) => new Ds({
  type: e,
  typeName: je.ZodPromise,
  ...Ze(t)
});
class Gn extends Xe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === je.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, s = {
      addIssue: (i) => {
        Ee(r, i), i.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), o.type === "preprocess") {
      const i = o.transform(r.data, s);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(i).then((a) => this._def.schema._parseAsync({
        data: a,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: i,
        path: r.path,
        parent: r
      });
    }
    if (o.type === "refinement") {
      const i = (a) => {
        const l = o.refinement(a, s);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? He : (a.status === "dirty" && n.dirty(), i(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? He : (a.status === "dirty" && n.dirty(), i(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Fi(i))
          return i;
        const a = o.transform(i.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => Fi(i) ? Promise.resolve(o.transform(i.value, s)).then((a) => ({ status: n.value, value: a })) : i);
    ct.assertNever(o);
  }
}
Gn.create = (e, t, n) => new Gn({
  schema: e,
  typeName: je.ZodEffects,
  effect: t,
  ...Ze(n)
});
Gn.createWithPreprocess = (e, t, n) => new Gn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: je.ZodEffects,
  ...Ze(n)
});
class yr extends Xe {
  _parse(t) {
    return this._getType(t) === ye.undefined ? on(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yr.create = (e, t) => new yr({
  innerType: e,
  typeName: je.ZodOptional,
  ...Ze(t)
});
class Bo extends Xe {
  _parse(t) {
    return this._getType(t) === ye.null ? on(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bo.create = (e, t) => new Bo({
  innerType: e,
  typeName: je.ZodNullable,
  ...Ze(t)
});
class Xi extends Xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === ye.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Xi.create = (e, t) => new Xi({
  innerType: e,
  typeName: je.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Ze(t)
});
class vl extends Xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return fl(o) ? o.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new zn(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new zn(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
vl.create = (e, t) => new vl({
  innerType: e,
  typeName: je.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Ze(t)
});
class gl extends Xe {
  _parse(t) {
    if (this._getType(t) !== ye.nan) {
      const r = this._getOrReturnCtx(t);
      return Ee(r, {
        code: ce.invalid_type,
        expected: ye.nan,
        received: r.parsedType
      }), He;
    }
    return { status: "valid", value: t.data };
  }
}
gl.create = (e) => new gl({
  typeName: je.ZodNaN,
  ...Ze(e)
});
const Pb = Symbol("zod_brand");
class bv extends Xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class oa extends Xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? He : s.status === "dirty" ? (n.dirty(), gv(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? He : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new oa({
      in: t,
      out: n,
      typeName: je.ZodPipeline
    });
  }
}
class yl extends Xe {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return Fi(n) && (n.value = Object.freeze(n.value)), n;
  }
}
yl.create = (e, t) => new yl({
  innerType: e,
  typeName: je.ZodReadonly,
  ...Ze(t)
});
const xv = (e, t = {}, n) => e ? As.create().superRefine((r, o) => {
  var s, i;
  if (!e(r)) {
    const a = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (i = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && i !== void 0 ? i : !0, c = typeof a == "string" ? { message: a } : a;
    o.addIssue({ code: "custom", ...c, fatal: l });
  }
}) : As.create(), Rb = {
  object: St.lazycreate
};
var je;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(je || (je = {}));
const Ib = (e, t = {
  message: `Input not instance of ${e.name}`
}) => xv((n) => n instanceof e, t), Ev = Un.create, wv = ao.create, Lb = gl.create, $b = lo.create, Sv = Bi.create, kb = Vo.create, Mb = pl.create, jb = Ui.create, Vb = Hi.create, Fb = As.create, Bb = Ro.create, Ub = Or.create, Hb = hl.create, zb = Kn.create, Kb = St.create, Gb = St.strictCreate, Zb = zi.create, Wb = Zl.create, Yb = Ki.create, Xb = sr.create, Jb = Gi.create, Qb = ml.create, qb = Fo.create, e5 = bs.create, t5 = Zi.create, n5 = Wi.create, r5 = co.create, o5 = Yi.create, s5 = Ds.create, cp = Gn.create, i5 = yr.create, a5 = Bo.create, l5 = Gn.createWithPreprocess, c5 = oa.create, u5 = () => Ev().optional(), d5 = () => wv().optional(), f5 = () => Sv().optional(), p5 = {
  string: (e) => Un.create({ ...e, coerce: !0 }),
  number: (e) => ao.create({ ...e, coerce: !0 }),
  boolean: (e) => Bi.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => lo.create({ ...e, coerce: !0 }),
  date: (e) => Vo.create({ ...e, coerce: !0 })
}, h5 = He;
var Ne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Vi,
  setErrorMap: yb,
  getErrorMap: ul,
  makeIssue: dl,
  EMPTY_PATH: bb,
  addIssueToContext: Ee,
  ParseStatus: qt,
  INVALID: He,
  DIRTY: gv,
  OK: on,
  isAborted: Su,
  isDirty: Cu,
  isValid: Fi,
  isAsync: fl,
  get util() {
    return ct;
  },
  get objectUtil() {
    return wu;
  },
  ZodParsedType: ye,
  getParsedType: Ur,
  ZodType: Xe,
  ZodString: Un,
  ZodNumber: ao,
  ZodBigInt: lo,
  ZodBoolean: Bi,
  ZodDate: Vo,
  ZodSymbol: pl,
  ZodUndefined: Ui,
  ZodNull: Hi,
  ZodAny: As,
  ZodUnknown: Ro,
  ZodNever: Or,
  ZodVoid: hl,
  ZodArray: Kn,
  ZodObject: St,
  ZodUnion: zi,
  ZodDiscriminatedUnion: Zl,
  ZodIntersection: Ki,
  ZodTuple: sr,
  ZodRecord: Gi,
  ZodMap: ml,
  ZodSet: Fo,
  ZodFunction: bs,
  ZodLazy: Zi,
  ZodLiteral: Wi,
  ZodEnum: co,
  ZodNativeEnum: Yi,
  ZodPromise: Ds,
  ZodEffects: Gn,
  ZodTransformer: Gn,
  ZodOptional: yr,
  ZodNullable: Bo,
  ZodDefault: Xi,
  ZodCatch: vl,
  ZodNaN: gl,
  BRAND: Pb,
  ZodBranded: bv,
  ZodPipeline: oa,
  ZodReadonly: yl,
  custom: xv,
  Schema: Xe,
  ZodSchema: Xe,
  late: Rb,
  get ZodFirstPartyTypeKind() {
    return je;
  },
  coerce: p5,
  any: Fb,
  array: zb,
  bigint: $b,
  boolean: Sv,
  date: kb,
  discriminatedUnion: Wb,
  effect: cp,
  enum: r5,
  function: e5,
  instanceof: Ib,
  intersection: Yb,
  lazy: t5,
  literal: n5,
  map: Qb,
  nan: Lb,
  nativeEnum: o5,
  never: Ub,
  null: Vb,
  nullable: a5,
  number: wv,
  object: Kb,
  oboolean: f5,
  onumber: d5,
  optional: i5,
  ostring: u5,
  pipeline: c5,
  preprocess: l5,
  promise: s5,
  record: Jb,
  set: qb,
  strictObject: Gb,
  string: Ev,
  symbol: Mb,
  transformer: cp,
  tuple: Xb,
  undefined: jb,
  union: Zb,
  unknown: Bb,
  void: Hb,
  NEVER: h5,
  ZodIssueCode: ce,
  quotelessJson: gb,
  ZodError: zn
});
const Cv = Ne.object({
  appealId: Ne.string(),
  type: Ne.string().optional(),
  text: Ne.string().optional(),
  status: Ne.string().optional(),
  managedBy: Ne.string().optional(),
  tag: Ne.string().optional(),
  address: Ne.string().optional(),
  phone: Ne.string().optional(),
  submitDate: Ne.string().optional(),
  coordinates: Ne.string().optional(),
  updateDate: Ne.string().optional(),
  updatedBy: Ne.string().optional(),
  deadlineDate: Ne.string().optional(),
  contactName: Ne.string().optional(),
  circumstances: Ne.string().optional(),
  medicalData: Ne.string().optional(),
  updateHistory: Ne.string().optional(),
  medicineList: Ne.string().optional(),
  foodRations: Ne.string().optional(),
  hygieneKits: Ne.string().optional(),
  babyCare: Ne.string().optional(),
  petFood: Ne.string().optional(),
  budget: Ne.string().optional(),
  commencementDate: Ne.string().optional(),
  completionDate: Ne.string().optional(),
  volunteer: Ne.string().optional(),
  aidHistory: Ne.string().optional(),
  volunteersComment: Ne.string().optional(),
  photos: Ne.string().optional(),
  receipts: Ne.string().optional(),
  verificationSheet: Ne.string().optional(),
  additionalComment: Ne.string().optional()
}), tn = Ne.object({
  name: Ne.string(),
  semantic: Cv.keyof(),
  layout: Ne.string().refine(
    (e) => Object.values(cl).includes(e)
  ).default(cl.inputFull),
  tabs: Ne.array(Ne.number().min(0).max(3)).readonly().default([]),
  type: Ne.enum(["number", "text"]).default("text").optional(),
  options: Ne.array(Ne.string()).readonly().optional(),
  value: Ne.string().default(""),
  isRequired: Ne.boolean().optional(),
  isDisabled: Ne.boolean().optional(),
  isValidated: Ne.boolean().optional()
}), Md = Ne.tuple([
  tn.extend({ semantic: Ne.literal("appealId") }),
  tn.extend({ semantic: Ne.literal("type") }),
  tn.extend({ semantic: Ne.literal("text") }),
  tn.extend({ semantic: Ne.literal("status") }),
  tn.extend({ semantic: Ne.literal("managedBy") }),
  tn.extend({ semantic: Ne.literal("tag") }),
  tn.extend({ semantic: Ne.literal("address") }),
  tn.extend({ semantic: Ne.literal("coordinates") }),
  tn.extend({ semantic: Ne.literal("phone") }),
  tn.extend({ semantic: Ne.literal("submitDate") }),
  tn.extend({ semantic: Ne.literal("updateDate") }),
  tn.extend({ semantic: Ne.literal("updatedBy") }),
  tn.extend({ semantic: Ne.literal("deadlineDate") })
]).rest(tn), m5 = Md.transform((e) => e.reduce(
  (t, n) => ({
    ...t,
    [n.semantic]: n
  }),
  {}
)).refine(
  (e) => Ne.record(Cv.keyof(), tn).safeParse(e).success
), v5 = [
  { label: "Essentials", number: 0 },
  { label: "Verification", number: 1 },
  { label: "Delivery", number: 2 }
], Tu = (e, t = 0) => t + Math.random() * (e - t), Ps = (e, t = 0) => Math.floor(Tu(t, e)), g5 = (e = new Date(2022, 1, 26)) => {
  const t = e.valueOf(), r = (/* @__PURE__ */ new Date()).valueOf() - t;
  return new Date(t + Ps(r));
}, y5 = (e) => e[Ps(e.length)], b5 = () => Ps(10), x5 = (e = !0) => {
  const t = y5([
    "098",
    "067",
    "093",
    "063",
    "095",
    "050",
    "066",
    "073",
    "096",
    "097"
  ]), n = Array(e ? 7 : 6).fill(0).map(b5).join("");
  return `+38${t}${n}`;
}, ri = (e) => e[Ps(e.length)], E5 = [
  {
    minLat: 36.17,
    maxLat: 36.36,
    minLng: 49.925,
    maxLng: 50.04
  },
  {
    minLat: 36.17,
    maxLat: 36.36,
    minLng: 49.925,
    maxLng: 50.04
  },
  {
    minLat: 36.17,
    maxLat: 36.36,
    minLng: 50.01,
    maxLng: 50.048
  },
  {
    minLat: 36.22,
    maxLat: 36.27,
    minLng: 49.89,
    maxLng: 50.08
  },
  {
    minLat: 36.135,
    maxLat: 36.18,
    minLng: 49.925,
    maxLng: 50
  },
  {
    minLat: 36.37,
    maxLat: 36.42,
    minLng: 49.91,
    maxLng: 49.99
  }
], w5 = ({
  minLat: e,
  minLng: t,
  maxLat: n,
  maxLng: r
}) => [Tu(n, e), Tu(r, t)], S5 = () => w5(ri(E5));
var Ov = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Nv(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var _n = function() {
  var e = function(u, d, f) {
    this.errors = [], f.raw === void 0 && (this.errors.push("Empty input for node"), f.raw = ""), u instanceof _n.Grammar ? (this.grammar = u, this.parent = null, this.depth = 0, this.childIndex = 0) : (this.grammar = u.grammar, this.parent = u, this.depth = u.depth + 1, this.childIndex = d), this.raw = f.raw, this.type = f.type, this.isExpanded = !1, this.grammar || this.errors.push("No grammar specified for this node " + this);
  };
  e.prototype.toString = function() {
    return "Node('" + this.raw + "' " + this.type + " d:" + this.depth + ")";
  }, e.prototype.expandChildren = function(u, d) {
    if (this.children = [], this.finishedText = "", this.childRule = u, this.childRule !== void 0) {
      var f = _n.parse(u);
      f.errors.length > 0 && (this.errors = this.errors.concat(f.errors));
      for (var p = 0; p < f.length; p++)
        this.children[p] = new e(this, p, f[p]), d || this.children[p].expand(d), this.finishedText += this.children[p].finishedText;
    } else
      this.errors.push("No child rule provided, can't expand children");
  }, e.prototype.expand = function(u) {
    if (!this.isExpanded)
      switch (this.isExpanded = !0, this.expansionErrors = [], this.type) {
        case -1:
          this.expandChildren(this.raw, u);
          break;
        case 0:
          this.finishedText = this.raw;
          break;
        case 1:
          this.preactions = [], this.postactions = [];
          var d = _n.parseTag(this.raw);
          this.symbol = d.symbol, this.modifiers = d.modifiers;
          for (var f = 0; f < d.preactions.length; f++)
            this.preactions[f] = new t(this, d.preactions[f].raw);
          for (var f = 0; f < d.postactions.length; f++)
            ;
          for (var f = 0; f < this.preactions.length; f++)
            this.preactions[f].type === 0 && this.postactions.push(this.preactions[f].createUndo());
          for (var f = 0; f < this.preactions.length; f++)
            this.preactions[f].activate();
          this.finishedText = this.raw;
          var p = this.grammar.selectRule(this.symbol, this, this.errors);
          this.expandChildren(p, u);
          for (var f = 0; f < this.modifiers.length; f++) {
            var h = this.modifiers[f], v = [];
            if (h.indexOf("(") > 0) {
              var m = /\(([^)]+)\)/, b = m.exec(this.modifiers[f]);
              if (!(!b || b.length < 2)) {
                var v = b[1].split(",");
                h = this.modifiers[f].substring(0, h.indexOf("("));
              }
            }
            var x = this.grammar.modifiers[h];
            x ? this.finishedText = x(this.finishedText, v) : (this.errors.push("Missing modifier " + h), this.finishedText += "((." + h + "))");
          }
          for (var f = 0; f < this.postactions.length; f++)
            this.postactions[f].activate();
          break;
        case 2:
          this.action = new t(this, this.raw), this.action.activate(), this.finishedText = "";
          break;
      }
  }, e.prototype.clearEscapeChars = function() {
    this.finishedText = this.finishedText.replace(/\\\\/g, "DOUBLEBACKSLASH").replace(/\\/g, "").replace(/DOUBLEBACKSLASH/g, "\\");
  };
  function t(u, d) {
    this.node = u;
    var f = d.split(":");
    this.target = f[0], f.length === 1 ? this.type = 2 : (this.rule = f[1], this.rule === "POP" ? this.type = 1 : this.type = 0);
  }
  t.prototype.createUndo = function() {
    return this.type === 0 ? new t(this.node, this.target + ":POP") : null;
  }, t.prototype.activate = function() {
    var u = this.node.grammar;
    switch (this.type) {
      case 0:
        this.ruleSections = this.rule.split(","), this.finishedRules = [], this.ruleNodes = [];
        for (var d = 0; d < this.ruleSections.length; d++) {
          var f = new e(u, 0, {
            type: -1,
            raw: this.ruleSections[d]
          });
          f.expand(), this.finishedRules.push(f.finishedText);
        }
        u.pushRules(this.target, this.finishedRules, this);
        break;
      case 1:
        u.popRules(this.target);
        break;
      case 2:
        u.flatten(this.target, !0);
        break;
    }
  }, t.prototype.toText = function() {
    switch (this.type) {
      case 0:
        return this.target + ":" + this.rule;
      case 1:
        return this.target + ":POP";
      case 2:
        return "((some function))";
      default:
        return "((Unknown Action))";
    }
  };
  function n(u, d) {
    this.raw = d, this.grammar = u, this.falloff = 1, Array.isArray(d) ? this.defaultRules = d : (typeof d == "string" || d instanceof String) && (this.defaultRules = [d]);
  }
  n.prototype.selectRule = function(u) {
    if (this.conditionalRule) {
      var d = this.grammar.expand(this.conditionalRule, !0);
      if (this.conditionalValues[d]) {
        var f = this.conditionalValues[d].selectRule(u);
        if (f != null)
          return f;
      }
    }
    if (this.ranking)
      for (var p = 0; p < this.ranking.length; p++) {
        var f = this.ranking.selectRule();
        if (f != null)
          return f;
      }
    if (this.defaultRules !== void 0) {
      var h = 0, v = this.distribution;
      switch (v || (v = this.grammar.distribution), v) {
        case "shuffle":
          (!this.shuffledDeck || this.shuffledDeck.length === 0) && (this.shuffledDeck = r(Array.apply(null, {
            length: this.defaultRules.length
          }).map(Number.call, Number), this.falloff)), h = this.shuffledDeck.pop();
          break;
        case "weighted":
          u.push("Weighted distribution not yet implemented");
          break;
        case "falloff":
          u.push("Falloff distribution not yet implemented");
          break;
        default:
          h = Math.floor(Math.pow(Math.random(), this.falloff) * this.defaultRules.length);
          break;
      }
      return this.defaultUses || (this.defaultUses = []), this.defaultUses[h] = ++this.defaultUses[h] || 1, this.defaultRules[h];
    }
    return u.push("No default rules defined for " + this), null;
  }, n.prototype.clearState = function() {
    this.defaultUses && (this.defaultUses = []);
  };
  function r(u, d) {
    for (var f = u.length, p, h; f !== 0; )
      h = Math.floor(Math.random() * f), f -= 1, p = u[f], u[f] = u[h], u[h] = p;
    return u;
  }
  var o = function(u, d, f) {
    this.key = d, this.grammar = u, this.rawRules = f, this.baseRules = new n(this.grammar, f), this.clearState();
  };
  o.prototype.clearState = function() {
    this.stack = [this.baseRules], this.uses = [], this.baseRules.clearState();
  }, o.prototype.pushRules = function(u) {
    var d = new n(this.grammar, u);
    this.stack.push(d);
  }, o.prototype.popRules = function() {
    this.stack.pop();
  }, o.prototype.selectRule = function(u, d) {
    return this.uses.push({
      node: u
    }), this.stack.length === 0 ? (d.push("The rule stack for '" + this.key + "' is empty, too many pops?"), "((" + this.key + "))") : this.stack[this.stack.length - 1].selectRule();
  }, o.prototype.getActiveRules = function() {
    return this.stack.length === 0 ? null : this.stack[this.stack.length - 1].selectRule();
  }, o.prototype.rulesToJSON = function() {
    return JSON.stringify(this.rawRules);
  };
  var s = function(u, d) {
    this.modifiers = {}, this.loadFromRawObj(u);
  };
  s.prototype.clearState = function() {
    for (var u = Object.keys(this.symbols), d = 0; d < u.length; d++)
      this.symbols[u[d]].clearState();
  }, s.prototype.addModifiers = function(u) {
    for (var d in u)
      u.hasOwnProperty(d) && (this.modifiers[d] = u[d]);
  }, s.prototype.loadFromRawObj = function(u) {
    if (this.raw = u, this.symbols = {}, this.subgrammars = [], this.raw)
      for (var d in this.raw)
        this.raw.hasOwnProperty(d) && (this.symbols[d] = new o(this, d, this.raw[d]));
  }, s.prototype.createRoot = function(u) {
    var d = new e(this, 0, {
      type: -1,
      raw: u
    });
    return d;
  }, s.prototype.expand = function(u, d) {
    var f = this.createRoot(u);
    return f.expand(), d || f.clearEscapeChars(), f;
  }, s.prototype.flatten = function(u, d) {
    var f = this.expand(u, d);
    return f.finishedText;
  }, s.prototype.toJSON = function() {
    for (var u = Object.keys(this.symbols), d = [], f = 0; f < u.length; f++) {
      var p = u[f];
      d.push(' "' + p + '" : ' + this.symbols[p].rulesToJSON());
    }
    return `{
` + d.join(`,
`) + `
}`;
  }, s.prototype.pushRules = function(u, d, f) {
    this.symbols[u] === void 0 ? (this.symbols[u] = new o(this, u, d), f && (this.symbols[u].isDynamic = !0)) : this.symbols[u].pushRules(d);
  }, s.prototype.popRules = function(u) {
    this.symbols[u] || this.errors.push("Can't pop: no symbol for key " + u), this.symbols[u].popRules();
  }, s.prototype.selectRule = function(u, d, f) {
    if (this.symbols[u]) {
      var p = this.symbols[u].selectRule(d, f);
      return p;
    }
    for (var h = 0; h < this.subgrammars.length; h++)
      if (this.subgrammars[h].symbols[u])
        return this.subgrammars[h].symbols[u].selectRule();
    return f.push("No symbol for '" + u + "'"), "((" + u + "))";
  }, _n = {
    createGrammar: function(u) {
      return new s(u);
    },
    // Parse the contents of a tag
    parseTag: function(u) {
      for (var d = {
        symbol: void 0,
        preactions: [],
        postactions: [],
        modifiers: []
      }, f = _n.parse(u), p = void 0, h = 0; h < f.length; h++)
        if (f[h].type === 0)
          if (p === void 0)
            p = f[h].raw;
          else
            throw "multiple main sections in " + u;
        else
          d.preactions.push(f[h]);
      if (p !== void 0) {
        var v = p.split(".");
        d.symbol = v[0], d.modifiers = v.slice(1);
      }
      return d;
    },
    parse: function(u) {
      var d = 0, f = !1, p = [], h = !1, v = [], m = 0, b = "", x = void 0;
      if (u === null) {
        var p = [];
        return p.errors = v, p;
      }
      function g(S, T, D) {
        T - S < 1 && (D === 1 && v.push(S + ": empty tag"), D === 2 && v.push(S + ": empty action"));
        var _;
        x !== void 0 ? _ = b + "\\" + u.substring(x + 1, T) : _ = u.substring(S, T), p.push({
          type: D,
          raw: _
        }), x = void 0, b = "";
      }
      for (var y = 0; y < u.length; y++)
        if (h)
          h = !1;
        else {
          var E = u.charAt(y);
          switch (E) {
            case "[":
              d === 0 && !f && (m < y && g(m, y, 0), m = y + 1), d++;
              break;
            case "]":
              d--, d === 0 && !f && (g(m, y, 2), m = y + 1);
              break;
            case "#":
              d === 0 && (f ? (g(m, y, 1), m = y + 1) : (m < y && g(m, y, 0), m = y + 1), f = !f);
              break;
            case "\\":
              h = !0, b = b + u.substring(m, y), m = y + 1, x = y;
              break;
          }
        }
      return m < u.length && g(m, u.length, 0), f && v.push("Unclosed tag"), d > 0 && v.push("Too many ["), d < 0 && v.push("Too many ]"), p = p.filter(function(S) {
        return !(S.type === 0 && S.raw.length === 0);
      }), p.errors = v, p;
    }
  };
  function i(u) {
    var d = u.toLowerCase();
    return d === "a" || d === "e" || d === "i" || d === "o" || d === "u";
  }
  function a(u) {
    return u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u >= "0" && u <= "9";
  }
  function l(u) {
    return u.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  var c = {
    replace: function(u, d) {
      return u.replace(new RegExp(l(d[0]), "g"), d[1]);
    },
    capitalizeAll: function(u) {
      for (var d = "", f = !0, p = 0; p < u.length; p++)
        a(u.charAt(p)) ? f ? (d += u.charAt(p).toUpperCase(), f = !1) : d += u.charAt(p) : (f = !0, d += u.charAt(p));
      return d;
    },
    capitalize: function(u) {
      return u.charAt(0).toUpperCase() + u.substring(1);
    },
    a: function(u) {
      if (u.length > 0) {
        if (u.charAt(0).toLowerCase() === "u" && u.length > 2 && u.charAt(2).toLowerCase() === "i")
          return "a " + u;
        if (i(u.charAt(0)))
          return "an " + u;
      }
      return "a " + u;
    },
    firstS: function(u) {
      console.log(u);
      var d = u.split(" "), f = c.s(d[0]) + " " + d.slice(1).join(" ");
      return console.log(f), f;
    },
    s: function(u) {
      switch (u.charAt(u.length - 1)) {
        case "s":
          return u + "es";
        case "h":
          return u + "es";
        case "x":
          return u + "es";
        case "y":
          return i(u.charAt(u.length - 2)) ? u + "s" : u.substring(0, u.length - 1) + "ies";
        default:
          return u + "s";
      }
    },
    ed: function(u) {
      switch (u.charAt(u.length - 1)) {
        case "s":
          return u + "ed";
        case "e":
          return u + "d";
        case "h":
          return u + "ed";
        case "x":
          return u + "ed";
        case "y":
          return i(u.charAt(u.length - 2)) ? u + "d" : u.substring(0, u.length - 1) + "ied";
        default:
          return u + "ed";
      }
    }
  };
  return _n.baseEngModifiers = c, _n.TraceryNode = e, _n.Grammar = s, _n.Symbol = o, _n.RuleSet = n, _n;
}(), _v = _n;
const C5 = [
  "Emily Johnson",
  "David Anderson",
  "Sarah Martinez",
  "John Smith",
  "Lisa Brown",
  "Michael Davis",
  "Jessica Wilson",
  "Robert Taylor",
  "Olivia Harris",
  "William Clark"
], Nu = [
  "Serhii Skrypal",
  "Olena Kovalenko",
  "Kateryna Yurchenko",
  "Volodymyr Shevchenko",
  "Natalia Hrytsenko",
  "Andrii Voznyi",
  "Anastasiia Koval",
  "Dmytro Ivanenko",
  "Mariya Sokolets"
], ss = {
  type: [
    "New Appeal",
    "In Verification",
    "Self Sufficient",
    "Aid Eligible",
    "Curated",
    "Blacklist"
  ],
  tag: ["Food", "Medicine", "Hygiene", "Custom"],
  status: [
    "Not Started",
    "Verified",
    "In Progress",
    "Completed",
    "Partially Done",
    "No Answer",
    "Obsolete"
  ],
  managedBy: Nu,
  volunteer: Nu
}, O5 = {
  openings: [
    "",
    `Please help!
`,
    "Urgent! ",
    `Dear volunteers, asking for your help again!
`
  ],
  introductions: [
    "We are a family of #numbers#",
    "After my family has evacuated, I stayed behind with my #disabilities# #familyMembers#",
    "We are a group of displaced individuals in Kharkiv",
    "We are a local community"
  ],
  disabilities: ["elderly", "disabled", "hospitalized"],
  familyMembers: ["grandmother", "grandfather", "mother"],
  numbers: ["three", "four", "five", "six", "seven"],
  circumstances: [
    "struggling to make ends meet due to the ongoing crisis",
    "forced to leave our homes due to the conflict",
    "displaced by russian invasion",
    "with no means to keep ourselves warm during these harsh times",
    "who’ve lost everything when shelling destroyed our home"
  ],
  pleads: [
    "Our children are hungry, and we desperately need",
    "We are in dire need of",
    "Many of us are in need of"
  ],
  resources: [
    "food and clean water to survive",
    "warm blankets and winter clothing as the temperatures continue to drop",
    "basic medical supplies and medications",
    "psychological support and counseling services to cope with these experiences",
    "warm meals, blankets, and hygiene kits to survive"
  ],
  motivators: [
    "Any assistance you can provide will make a significant difference in our lives.",
    "Your kind donations can help us stay safe and comfortable this winter.",
    "Your support can help us access the necessary healthcare and medicine to stay healthy and resilient.",
    "Your assistance can bring hope and healing to our community.",
    "With your help we can get through these tough times"
  ],
  messages: [
    `We are a family of five in Kharkiv, Ukraine, struggling to make ends meet due to the ongoing crisis.
Our children are hungry, and we desperately need food and clean water to survive.
Any assistance you can provide will make a significant difference in our lives.`,
    `Please help! Our elderly neighbors here are in dire need of warm blankets and winter clothing as the temperatures continue to drop.
They have no means to keep themselves warm during these harsh times.
Your kind donations can help them stay safe and comfortable this winter.`,
    `We are a group of displaced individuals in Kharkiv, forced to leave our homes due to the conflict.
Many of us are in need of basic medical supplies and medications.
Your support can help us access the necessary healthcare and medicine to stay healthy and resilient.`,
    `In Kharkiv, there is a local community of children who have been traumatized by the ongoing conflict.
They urgently require psychological support and counseling services to help them cope with their experiences.
Your assistance can bring hope and healing to these young lives.`,
    `A shelter in Kharkiv is in need of warm meals, blankets, and hygiene kits to survive.
Lets help them to get through these tough times together`
  ]
}, T5 = {
  streets: [
    "Street",
    "Avenue",
    "Lane",
    "Boulevard",
    "Road",
    "Drive",
    "Alley",
    "Plaza"
  ],
  animals: [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Cheetah",
    "Hippopotamus",
    "Kangaroo",
    "Zebra",
    "Dolphin",
    "Penguin",
    "Koala",
    "Gorilla",
    "Polar Bear",
    "Camel",
    "Rhinoceros",
    "Leopard",
    "Hawk",
    "Ostrich",
    "Crocodile",
    "Panda"
  ]
}, N5 = {
  ...O5,
  ...T5,
  volunteersEng: [...C5],
  volunteers: [...Nu, "#volunteersEng#"],
  addresses: ["#animals# #streets#"],
  stories: [
    `#openings##introductions#, #circumstances#.

#pleads# #resources#

#motivators#`
  ],
  origin: ["#stories#", "#messages#"]
}, _u = _v.createGrammar(
  N5
);
_u.addModifiers(_v.baseEngModifiers);
const {
  id: _5,
  inputFull: Qo,
  inputHalf: Tn,
  selectFull: up,
  selectHalf: xc,
  text: A5,
  textarea: vo
} = cl, bl = [
  {
    name: "Serial Number",
    semantic: "appealId",
    layout: _5,
    tabs: [0],
    type: "number",
    value: "",
    isRequired: !0,
    isDisabled: !0
  },
  {
    name: "Type",
    semantic: "type",
    layout: xc,
    options: ss.type,
    tabs: [0],
    value: "",
    isRequired: !1,
    isValidated: !0
  },
  {
    name: "Original Text",
    semantic: "text",
    layout: A5,
    tabs: [0],
    value: "",
    isRequired: !0
  },
  {
    name: "Status",
    semantic: "status",
    layout: up,
    options: ss.status,
    tabs: [0],
    value: "",
    isRequired: !1,
    isValidated: !0
  },
  {
    name: "Managed By",
    semantic: "managedBy",
    layout: up,
    options: ss.managedBy,
    tabs: [0],
    value: "",
    isRequired: !1,
    isValidated: !1
  },
  {
    name: "Tag",
    semantic: "tag",
    layout: xc,
    options: ss.tag,
    tabs: [0],
    value: "",
    isRequired: !1
  },
  {
    name: "Address",
    semantic: "address",
    layout: Qo,
    tabs: [0, 1, 2],
    value: "",
    isRequired: !1
  },
  {
    name: "Coordinates",
    semantic: "coordinates",
    layout: Qo,
    tabs: [1, 2],
    value: "",
    isRequired: !1
  },
  {
    name: "Phone",
    semantic: "phone",
    layout: Tn,
    tabs: [0, 1, 2],
    value: "",
    isRequired: !1
  },
  {
    name: "Submit Date",
    semantic: "submitDate",
    layout: Tn,
    tabs: [0, 1],
    value: "",
    isRequired: !0
  },
  {
    name: "Updated On",
    semantic: "updateDate",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Updated By",
    semantic: "updatedBy",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Deadline Date",
    semantic: "deadlineDate",
    layout: Tn,
    tabs: [0, 1],
    value: "",
    isRequired: !1
  },
  {
    name: "Contact Name",
    semantic: "contactName",
    layout: Qo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Life Circumstances",
    semantic: "circumstances",
    layout: vo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Ailments & Diagnoses",
    semantic: "medicalData",
    layout: vo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Update History",
    semantic: "updateHistory",
    layout: vo,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Medicine List",
    semantic: "medicineList",
    layout: vo,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Food Rations",
    semantic: "foodRations",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Hygiene Kits",
    semantic: "hygieneKits",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Baby Care",
    semantic: "babyCare",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Pet Food",
    semantic: "petFood",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Budget",
    semantic: "budget",
    layout: Tn,
    tabs: [1],
    value: "",
    isRequired: !1
  },
  {
    name: "Start Date",
    semantic: "commencementDate",
    layout: Tn,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Completion",
    semantic: "completionDate",
    layout: Tn,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Volunteer",
    semantic: "volunteer",
    layout: xc,
    options: ss.volunteer,
    tabs: [2],
    value: "",
    isRequired: !1,
    isValidated: !1
  },
  {
    name: "Aid History",
    semantic: "aidHistory",
    layout: vo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Volunteer’s Comment",
    semantic: "volunteersComment",
    layout: vo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Photos",
    semantic: "photos",
    layout: Qo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Receipts",
    semantic: "receipts",
    layout: Qo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Verification Sheet",
    semantic: "verificationSheet",
    layout: Qo,
    tabs: [2],
    value: "",
    isRequired: !1
  },
  {
    name: "Additional Comments",
    semantic: "additionalComment",
    layout: vo,
    tabs: [2],
    value: "",
    isRequired: !1
  }
], D5 = () => {
  const e = [], { type: t, managedBy: n, status: r, tag: o } = ss;
  for (let s = 1; s < 4290; s++) {
    const i = `${_u.flatten("#addresses#")}, ${Ps(42) + 1}, ap. ${Ps(24) + 1}`, a = x5(!1), l = ri(r);
    e[s] = bl.map((c) => {
      switch (c.semantic) {
        case "appealId":
          return { ...c, value: String(s) };
        case "type":
          return { ...c, value: ri(t) };
        case "text":
          return {
            ...c,
            value: `${_u.flatten(
              "#origin#"
            )}

${i}
${a}`
          };
        case "status":
          return { ...c, value: l };
        case "managedBy":
          return { ...c, value: ri(n) };
        case "tag":
          return { ...c, value: ri(o) };
        case "address":
          return { ...c, value: i };
        case "coordinates":
          return Math.random() * 15 > 1 || l === "Obsolete" || l === "No Answer" ? { ...c } : { ...c, value: S5().join(", ") };
        case "phone":
          return { ...c, value: a };
        case "submitDate":
          return {
            ...c,
            value: g5().toLocaleDateString("en-UK")
          };
        default:
          return { ...c };
      }
    });
  }
  return e;
}, Av = D5(), P5 = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" }
  }
}, R5 = (e, t = []) => ({
  name: e,
  ...P5,
  features: t
}), Ec = 500, Tt = function() {
  return {
    columnsArray: bl,
    data: Av,
    script: {
      host: { close: () => console.log("Sidebar closed") },
      run: {
        withSuccessHandler: (e) => (Tt.script.run.onSuccess = e, Tt.script.run),
        withFailureHandler: (e) => (Tt.script.run.onFailure = e, Tt.script.run),
        onSuccess: (...e) => {
        },
        onFailure: (e) => {
          console.log(e);
        },
        querySingleAppeal: async (e) => {
          try {
            await wc(Ec);
            const t = Tt.data[Number(e)];
            if (!t)
              throw "No data available";
            return Tt.script.run.onSuccess(t);
          } catch (t) {
            Tt.script.run.onFailure(t);
          }
        },
        createNewRow: async () => {
          try {
            await wc(Ec);
            const e = [...bl], t = Tt.data.length;
            return e[0].value = String(t), Tt.data.push(e), Tt.script.run.onSuccess(e);
          } catch (e) {
            Tt.script.run.onFailure(e);
          }
        },
        updateRowById: async (e, t) => {
          try {
            return await wc(Ec), Tt.data[Number(t)] = e, Tt.script.run.onSuccess();
          } catch (n) {
            Tt.script.run.onFailure(n);
          }
        },
        log: console.log
      }
    }
  };
}(), wc = (e = 10, t = () => {
}) => new Promise((n, r) => {
  try {
    setTimeout(() => {
      n(t());
    }, e);
  } catch (o) {
    r(o);
  }
}), Sc = {
  selectError: "Can’t find an appeal with this number",
  requiredError: "This is a required field",
  validationError: "Choose one of the promted options"
}, jd = ra("app-state", () => {
  const e = W(!1), t = W(!1), n = W(!1), r = W(!0), o = W(!1), s = W(!0), i = W(!1), a = Ln({
    selectError: {
      isError: !1,
      message: Sc.selectError
    },
    requiredError: {
      isError: !1,
      message: Sc.requiredError
    },
    validationError: {
      isError: !1,
      message: Sc.validationError
    }
  });
  return {
    errors: a,
    isAppealEditorOpen: i,
    isDataCardExpanded: o,
    isSelectFormOpen: r,
    isCreating: t,
    isLoading: e,
    isSaving: n,
    isPristine: s,
    onCardExpand: () => o.value = !o.value,
    onClearErrors: () => {
      a.selectError.isError = !1;
    },
    onCloseSelectForm: () => r.value = !1,
    onModifyInput: () => s.value = !1,
    onOpenSelectForm: () => r.value = !0
  };
}), sa = ra("appeals", () => {
  const e = jd(), { onClearErrors: t, onCloseSelectForm: n, onOpenSelectForm: r } = e, o = W(""), s = W(), i = W([]), a = W({}), l = W(!0), c = W(!1), u = W(!0), d = (D) => {
    var N;
    const _ = Md.parse(D);
    i.value = Ln(_), a.value = m5.parse(i.value), s.value = (N = a.value.appealId) == null ? void 0 : N.value, e.isPristine = !0, e.isAppealEditorOpen = !0;
  }, f = (D) => (t(), e.isLoading = !0, Tt.script.run.withSuccessHandler(p).withFailureHandler(h).querySingleAppeal(D)), p = (D) => {
    try {
      d(D), n(), u.value = !1, e.isLoading = !1;
    } catch (_) {
      h(_);
    }
  }, h = (D) => {
    Tt.script.run.log(D), e.isLoading = !1, e.isAppealEditorOpen = !1, e.errors.selectError.isError = !0;
  }, v = () => (e.isCreating = !0, Tt.script.run.withSuccessHandler(m).withFailureHandler(b).createNewRow()), m = (D) => {
    try {
      d(D), n(), e.isCreating = !1, u.value = !0;
    } catch (_) {
      b(_);
    }
  }, b = (D) => {
    Tt.script.run.log(D), e.isCreating = !1, e.isAppealEditorOpen = !1;
  }, x = () => {
    const D = i.value[0].value;
    return e.isSaving = !0, Tt.script.run.withSuccessHandler(g).withFailureHandler(y).updateRowById(i.value, D);
  }, g = () => {
    u.value = !1, e.isPristine = !0, e.isSaving = !1, o.value = s.value ?? o.value, l.value = !0, c.value = !1;
  }, y = (D) => {
    Tt.script.run.log(D);
  };
  return {
    currentAppealId: s,
    selectedAppealId: o,
    columnsArray: i,
    labeledColumns: a,
    isCreatingNewAppeal: c,
    isEditingExistingAppeal: l,
    isNewAppeal: u,
    editExistingAppeal: () => {
      if (!(l.value || !(e.isPristine || window.confirm(
        "Your edits will be lost! Are you sure you want to discard all changes?"
      )))) {
        if (l.value = !0, c.value = !1, s.value && s.value !== o.value && !u.value)
          return f(s.value);
        r();
      }
    },
    createNewAppeal: async () => {
      if (!(c.value || !(e.isPristine || window.confirm(
        "Your edits will be lost! Are you sure you want to discard all changes?"
      )))) {
        if (l.value = !1, c.value = !0, u.value && s.value) {
          f(s.value), u.value = !0;
          return;
        }
        await v(), o.value = s.value ?? o.value;
      }
    },
    onCreateAppeal: v,
    onSelectAppeal: f,
    onSaveAppealData: x,
    onLoadSavedAppeal: g,
    onLoadCreatedAppeal: m,
    onRejectAppealData: async (D) => {
      if (D)
        return Tt.script.host.close();
      window.confirm(
        "Are you sure you want to discard entered data?"
      ) && (Tt.script.host.close(), u.value = !1, e.isPristine = !0);
    }
  };
});
function Vd(e) {
  return Pl() ? (td(e), !0) : !1;
}
function Cc() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const s = () => t(o);
      return Vd(s), {
        off: s
      };
    },
    off: t,
    trigger: (o) => Promise.all(Array.from(e).map((s) => o ? s(o) : s()))
  };
}
function vr(e) {
  return typeof e == "function" ? e() : A(e);
}
const Dv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const I5 = () => {
};
function dp(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function L5(e, ...t) {
  return t.some((n) => n in e);
}
function Oc(...e) {
  if (e.length !== 1)
    return ms(...e);
  const t = e[0];
  return typeof t == "function" ? js(Rh(() => ({ get: t, set: I5 }))) : W(t);
}
function Au(e, t = !1) {
  function n(d, { flush: f = "sync", deep: p = !1, timeout: h, throwOnTimeout: v } = {}) {
    let m = null;
    const x = [new Promise((g) => {
      m = Lt(
        e,
        (y) => {
          d(y) !== t && (m == null || m(), g(y));
        },
        {
          flush: f,
          deep: p,
          immediate: !0
        }
      );
    })];
    return h != null && x.push(
      dp(h, v).then(() => vr(e)).finally(() => m == null ? void 0 : m())
    ), Promise.race(x);
  }
  function r(d, f) {
    if (!rt(d))
      return n((y) => y === d, f);
    const { flush: p = "sync", deep: h = !1, timeout: v, throwOnTimeout: m } = f ?? {};
    let b = null;
    const g = [new Promise((y) => {
      b = Lt(
        [e, d],
        ([E, S]) => {
          t !== (E === S) && (b == null || b(), y(E));
        },
        {
          flush: p,
          deep: h,
          immediate: !0
        }
      );
    })];
    return v != null && g.push(
      dp(v, m).then(() => vr(e)).finally(() => (b == null || b(), vr(e)))
    ), Promise.race(g);
  }
  function o(d) {
    return n((f) => !!f, d);
  }
  function s(d) {
    return r(null, d);
  }
  function i(d) {
    return r(void 0, d);
  }
  function a(d) {
    return n(Number.isNaN, d);
  }
  function l(d, f) {
    return n((p) => {
      const h = Array.from(p);
      return h.includes(d) || h.includes(vr(d));
    }, f);
  }
  function c(d) {
    return u(1, d);
  }
  function u(d = 1, f) {
    let p = -1;
    return n(() => (p += 1, p >= d), f);
  }
  return Array.isArray(vr(e)) ? {
    toMatch: n,
    toContains: l,
    changed: c,
    changedTimes: u,
    get not() {
      return Au(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: o,
    toBeNull: s,
    toBeNaN: a,
    toBeUndefined: i,
    changed: c,
    changedTimes: u,
    get not() {
      return Au(e, !t);
    }
  };
}
function $5(e) {
  return Au(e);
}
function k5(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = W(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function a() {
    o.value = !1, i();
  }
  function l(...c) {
    i(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...c);
    }, vr(t));
  }
  return r && (o.value = !0, Dv && l()), Vd(a), {
    isPending: js(o),
    start: l,
    stop: a
  };
}
const Pv = Dv ? window : void 0;
function M5() {
  const e = W(!1);
  return Cn() && ht(() => {
    e.value = !0;
  }), e;
}
function j5(e) {
  const t = M5();
  return fe(() => (t.value, !!e()));
}
function V5(e, t = {}) {
  const { window: n = Pv } = t, r = j5(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const s = W(!1), i = (c) => {
    s.value = c.matches;
  }, a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", i) : o.removeListener(i));
  }, l = Qt(() => {
    r.value && (a(), o = n.matchMedia(vr(e)), "addEventListener" in o ? o.addEventListener("change", i) : o.addListener(i), s.value = o.matches);
  });
  return Vd(() => {
    l(), a(), o = void 0;
  }), s;
}
const F5 = {
  json: "application/json",
  text: "text/plain"
};
function fp(e) {
  return e && L5(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function Tc(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries([...e.entries()]) : e;
}
function B5(e, ...t) {
  var n;
  const r = typeof AbortController == "function";
  let o = {}, s = {
    immediate: !0,
    refetch: !1,
    timeout: 0,
    updateDataOnError: !1
  };
  const i = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  t.length > 0 && (fp(t[0]) ? s = { ...s, ...t[0] } : o = t[0]), t.length > 1 && fp(t[1]) && (s = { ...s, ...t[1] });
  const {
    fetch: a = (n = Pv) == null ? void 0 : n.fetch,
    initialData: l,
    timeout: c
  } = s, u = Cc(), d = Cc(), f = Cc(), p = W(!1), h = W(!1), v = W(!1), m = W(null), b = hs(null), x = hs(null), g = hs(l || null), y = fe(() => r && h.value);
  let E, S;
  const T = () => {
    r && (E == null || E.abort(), E = new AbortController(), E.signal.onabort = () => v.value = !0, o = {
      ...o,
      signal: E.signal
    });
  }, D = (P) => {
    h.value = P, p.value = !P;
  };
  c && (S = k5(T, c, { immediate: !1 }));
  let _ = 0;
  const N = async (P = !1) => {
    var V;
    T(), D(!0), x.value = null, m.value = null, v.value = !1, _ += 1;
    const B = _, Ce = {
      method: i.method,
      headers: {}
    };
    if (i.payload) {
      const te = Tc(Ce.headers), ne = vr(i.payload);
      !i.payloadType && ne && Object.getPrototypeOf(ne) === Object.prototype && !(ne instanceof FormData) && (i.payloadType = "json"), i.payloadType && (te["Content-Type"] = (V = F5[i.payloadType]) != null ? V : i.payloadType), Ce.body = i.payloadType === "json" ? JSON.stringify(ne) : ne;
    }
    let We = !1;
    const Ve = {
      url: vr(e),
      options: {
        ...Ce,
        ...o
      },
      cancel: () => {
        We = !0;
      }
    };
    if (s.beforeFetch && Object.assign(Ve, await s.beforeFetch(Ve)), We || !a)
      return D(!1), Promise.resolve(null);
    let ee = null;
    return S && S.start(), new Promise((te, ne) => {
      var he;
      a(
        Ve.url,
        {
          ...Ce,
          ...Ve.options,
          headers: {
            ...Tc(Ce.headers),
            ...Tc((he = Ve.options) == null ? void 0 : he.headers)
          }
        }
      ).then(async (oe) => {
        if (b.value = oe, m.value = oe.status, ee = await oe[i.type](), !oe.ok)
          throw g.value = l || null, new Error(oe.statusText);
        return s.afterFetch && ({ data: ee } = await s.afterFetch({
          data: ee,
          response: oe
        })), g.value = ee, u.trigger(oe), te(oe);
      }).catch(async (oe) => {
        let I = oe.message || oe.name;
        return s.onFetchError && ({ error: I, data: ee } = await s.onFetchError({
          data: ee,
          error: oe,
          response: b.value
        })), x.value = I, s.updateDataOnError && (g.value = ee), d.trigger(oe), P ? ne(oe) : te(null);
      }).finally(() => {
        B === _ && D(!1), S && S.stop(), f.trigger(null);
      });
    });
  }, R = Oc(s.refetch);
  Lt(
    [
      R,
      Oc(e)
    ],
    ([P]) => P && N(),
    { deep: !0 }
  );
  const M = {
    isFinished: p,
    statusCode: m,
    response: b,
    error: x,
    data: g,
    isFetching: h,
    canAbort: y,
    aborted: v,
    abort: T,
    execute: N,
    onFetchResponse: u.on,
    onFetchError: d.on,
    onFetchFinally: f.on,
    // method
    get: $("GET"),
    put: $("PUT"),
    post: $("POST"),
    delete: $("DELETE"),
    patch: $("PATCH"),
    head: $("HEAD"),
    options: $("OPTIONS"),
    // type
    json: G("json"),
    text: G("text"),
    blob: G("blob"),
    arrayBuffer: G("arrayBuffer"),
    formData: G("formData")
  };
  function $(P) {
    return (V, B) => {
      if (!h.value)
        return i.method = P, i.payload = V, i.payloadType = B, rt(i.payload) && Lt(
          [
            R,
            Oc(i.payload)
          ],
          ([Ce]) => Ce && N(),
          { deep: !0 }
        ), {
          ...M,
          then(Ce, We) {
            return H().then(Ce, We);
          }
        };
    };
  }
  function H() {
    return new Promise((P, V) => {
      $5(p).toBe(!0).then(() => P(M)).catch((B) => V(B));
    });
  }
  function G(P) {
    return () => {
      if (!h.value)
        return i.type = P, {
          ...M,
          then(V, B) {
            return H().then(V, B);
          }
        };
    };
  }
  return s.immediate && Promise.resolve().then(() => N()), {
    ...M,
    then(P, V) {
      return H().then(P, V);
    }
  };
}
var Rv = {}, Iv = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return Array.isArray(n) ? n.map((r) => t(r)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([r, o]) => [
      r,
      t(o)
    ])) : n;
  }
})(Iv);
var U5 = {
  content: [],
  presets: [],
  darkMode: "media",
  // or 'class'
  theme: {
    accentColor: ({ theme: e }) => ({
      ...e("colors"),
      auto: "auto"
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9"
    },
    backdropBlur: ({ theme: e }) => e("blur"),
    backdropBrightness: ({ theme: e }) => e("brightness"),
    backdropContrast: ({ theme: e }) => e("contrast"),
    backdropGrayscale: ({ theme: e }) => e("grayscale"),
    backdropHueRotate: ({ theme: e }) => e("hueRotate"),
    backdropInvert: ({ theme: e }) => e("invert"),
    backdropOpacity: ({ theme: e }) => e("opacity"),
    backdropSaturate: ({ theme: e }) => e("saturate"),
    backdropSepia: ({ theme: e }) => e("sepia"),
    backgroundColor: ({ theme: e }) => e("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e }) => e("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    borderColor: ({ theme: e }) => ({
      ...e("colors"),
      DEFAULT: e("colors.gray.200", "currentColor")
    }),
    borderOpacity: ({ theme: e }) => e("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    borderSpacing: ({ theme: e }) => ({
      ...e("spacing")
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none"
    },
    boxShadowColor: ({ theme: e }) => e("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    caretColor: ({ theme: e }) => e("colors"),
    colors: ({ colors: e }) => ({
      inherit: e.inherit,
      current: e.current,
      transparent: e.transparent,
      black: e.black,
      white: e.white,
      slate: e.slate,
      gray: e.gray,
      zinc: e.zinc,
      neutral: e.neutral,
      stone: e.stone,
      red: e.red,
      orange: e.orange,
      amber: e.amber,
      yellow: e.yellow,
      lime: e.lime,
      green: e.green,
      emerald: e.emerald,
      teal: e.teal,
      cyan: e.cyan,
      sky: e.sky,
      blue: e.blue,
      indigo: e.indigo,
      violet: e.violet,
      purple: e.purple,
      fuchsia: e.fuchsia,
      pink: e.pink,
      rose: e.rose
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    container: {},
    content: {
      none: "none"
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e }) => e("borderColor"),
    divideOpacity: ({ theme: e }) => e("borderOpacity"),
    divideWidth: ({ theme: e }) => e("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000"
    },
    fill: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexBasis: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%"
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1"
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1"
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gap: ({ theme: e }) => e("spacing"),
    gradientColorStops: ({ theme: e }) => e("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%"
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1"
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7"
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7"
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))"
    },
    height: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    inset: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    listStyleImage: {
      none: "none"
    },
    margin: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing")
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6"
    },
    maxHeight: ({ theme: e }) => ({
      ...e("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: t }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...t(e("screens"))
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    outlineColor: ({ theme: e }) => e("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    padding: ({ theme: e }) => e("spacing"),
    placeholderColor: ({ theme: e }) => e("colors"),
    placeholderOpacity: ({ theme: e }) => e("opacity"),
    ringColor: ({ theme: e }) => ({
      DEFAULT: e("colors.blue.500", "#3b82f6"),
      ...e("colors")
    }),
    ringOffsetColor: ({ theme: e }) => e("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    ringOpacity: ({ theme: e }) => ({
      DEFAULT: "0.5",
      ...e("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg"
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    scrollMargin: ({ theme: e }) => ({
      ...e("spacing")
    }),
    scrollPadding: ({ theme: e }) => e("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg"
    },
    space: ({ theme: e }) => ({
      ...e("spacing")
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    stroke: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2"
    },
    supports: {},
    data: {},
    textColor: ({ theme: e }) => e("colors"),
    textDecorationColor: ({ theme: e }) => e("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    textIndent: ({ theme: e }) => ({
      ...e("spacing")
    }),
    textOpacity: ({ theme: e }) => e("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left"
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e }) => ({
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    width: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    }
  },
  plugins: []
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = Iv, n = /* @__PURE__ */ r(U5);
  function r(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  const o = (0, t.cloneDeep)(n.default.theme);
})(Rv);
let Nc = Rv;
var H5 = (Nc.__esModule ? Nc : { default: Nc }).default;
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const hr = typeof window < "u";
function z5(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ut = Object.assign;
function _c(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = wn(o) ? o.map(e) : e(o);
  }
  return n;
}
const bi = () => {
}, wn = Array.isArray;
function tt(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const K5 = /\/$/, G5 = (e) => e.replace(K5, "");
function Ac(e, t, n = "/") {
  let r, o = {}, s = "", i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Y5(r ?? t, n), {
    fullPath: r + (s && "?") + s + i,
    path: r,
    query: o,
    hash: i
  };
}
function Z5(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function pp(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function hp(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && uo(t.matched[r], n.matched[o]) && Lv(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function uo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Lv(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!W5(e[n], t[n]))
      return !1;
  return !0;
}
function W5(e, t) {
  return wn(e) ? mp(e, t) : wn(t) ? mp(t, e) : e === t;
}
function mp(e, t) {
  return wn(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Y5(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return tt(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1, i, a;
  for (i = 0; i < r.length; i++)
    if (a = r[i], a !== ".")
      if (a === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/");
}
var Ji;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ji || (Ji = {}));
var xi;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(xi || (xi = {}));
function X5(e) {
  if (!e)
    if (hr) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), G5(e);
}
const J5 = /^[^#]+#/;
function Q5(e, t) {
  return e.replace(J5, "#") + t;
}
function q5(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Wl = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function e4(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          tt(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        tt(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && tt(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = q5(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function vp(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Du = /* @__PURE__ */ new Map();
function t4(e, t) {
  Du.set(e, t);
}
function n4(e) {
  const t = Du.get(e);
  return Du.delete(e), t;
}
let r4 = () => location.protocol + "//" + location.host;
function $v(e, t) {
  const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
  if (s > -1) {
    let a = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(a);
    return l[0] !== "/" && (l = "/" + l), pp(l, "");
  }
  return pp(n, e) + r + o;
}
function o4(e, t, n, r) {
  let o = [], s = [], i = null;
  const a = ({ state: f }) => {
    const p = $v(e, location), h = n.value, v = t.value;
    let m = 0;
    if (f) {
      if (n.value = p, t.value = f, i && i === h) {
        i = null;
        return;
      }
      m = v ? f.position - v.position : 0;
    } else
      r(p);
    o.forEach((b) => {
      b(n.value, h, {
        delta: m,
        type: Ji.pop,
        direction: m ? m > 0 ? xi.forward : xi.back : xi.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function c(f) {
    o.push(f);
    const p = () => {
      const h = o.indexOf(f);
      h > -1 && o.splice(h, 1);
    };
    return s.push(p), p;
  }
  function u() {
    const { history: f } = window;
    f.state && f.replaceState(ut({}, f.state, { scroll: Wl() }), "");
  }
  function d() {
    for (const f of s)
      f();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: c,
    destroy: d
  };
}
function gp(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? Wl() : null
  };
}
function s4(e) {
  const { history: t, location: n } = window, r = {
    value: $v(e, n)
  }, o = { value: t.state };
  o.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(l, c, u) {
    const d = e.indexOf("#"), f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : r4() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), o.value = c;
    } catch (p) {
      process.env.NODE_ENV !== "production" ? tt("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](f);
    }
  }
  function i(l, c) {
    const u = ut({}, t.state, gp(
      o.value.back,
      // keep back and forward entries but override current position
      l,
      o.value.forward,
      !0
    ), c, { position: o.value.position });
    s(l, u, !0), r.value = l;
  }
  function a(l, c) {
    const u = ut(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: l,
        scroll: Wl()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && tt(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), s(u.current, u, !0);
    const d = ut({}, gp(r.value, l, null), { position: u.position + 1 }, c);
    s(l, d, !1), r.value = l;
  }
  return {
    location: r,
    state: o,
    push: a,
    replace: i
  };
}
function i4(e) {
  e = X5(e);
  const t = s4(e), n = o4(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = ut({
    // it's overridden right after
    location: "",
    base: e,
    go: r,
    createHref: Q5.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function a4(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && tt(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), i4(e);
}
function l4(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function kv(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Rr = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Pu = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var yp;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(yp || (yp = {}));
const c4 = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${d4(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function Rs(e, t) {
  return process.env.NODE_ENV !== "production" ? ut(new Error(c4[e](t)), {
    type: e,
    [Pu]: !0
  }, t) : ut(new Error(), {
    type: e,
    [Pu]: !0
  }, t);
}
function cr(e, t) {
  return e instanceof Error && Pu in e && (t == null || !!(e.type & t));
}
const u4 = ["params", "query", "hash"];
function d4(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of u4)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bp = "[^/]+?", f4 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, p4 = /[.+*?^${}()[\]/\\]/g;
function h4(e, t) {
  const n = ut({}, f4, t), r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !c.length && (o += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (o += "/"), o += f.value.replace(p4, "\\$&"), p += 40;
      else if (f.type === 1) {
        const { value: h, repeatable: v, optional: m, regexp: b } = f;
        s.push({
          name: h,
          repeatable: v,
          optional: m
        });
        const x = b || bp;
        if (x !== bp) {
          p += 10;
          try {
            new RegExp(`(${x})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${x}): ` + y.message);
          }
        }
        let g = v ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        d || (g = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        m && c.length < 2 ? `(?:/${g})` : "/" + g), m && (g += "?"), o += g, p += 20, m && (p += -8), v && (p += -20), x === ".*" && (p += -50);
      }
      u.push(p);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(i), d = {};
    if (!u)
      return null;
    for (let f = 1; f < u.length; f++) {
      const p = u[f] || "", h = s[f - 1];
      d[h.name] = p && h.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function l(c) {
    let u = "", d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const p of f)
        if (p.type === 0)
          u += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: v, optional: m } = p, b = h in c ? c[h] : "";
          if (wn(b) && !v)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const x = wn(b) ? b.join("/") : b;
          if (!x)
            if (m)
              f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          u += x;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: r,
    keys: s,
    parse: a,
    stringify: l
  };
}
function m4(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function v4(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = m4(r[n], o[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (xp(r))
      return 1;
    if (xp(o))
      return -1;
  }
  return o.length - r.length;
}
function xp(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const g4 = {
  type: 0,
  value: ""
}, y4 = /[a-zA-Z0-9_]/;
function b4(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[g4]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${c}": ${p}`);
  }
  let n = 0, r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), s = [];
  }
  let a = 0, l, c = "", u = "";
  function d() {
    c && (n === 0 ? s.push({
      type: 0,
      value: c
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: c,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), c = "");
  }
  function f() {
    c += l;
  }
  for (; a < e.length; ) {
    if (l = e[a++], l === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && d(), i()) : l === ":" ? (d(), n = 1) : f();
        break;
      case 4:
        f(), n = r;
        break;
      case 1:
        l === "(" ? n = 2 : y4.test(l) ? f() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), i(), o;
}
function x4(e, t, n) {
  const r = h4(b4(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of r.keys)
      s.has(i.name) && tt(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const o = ut(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function E4(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Sp({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return r.get(u);
  }
  function s(u, d, f) {
    const p = !f, h = w4(u);
    process.env.NODE_ENV !== "production" && T4(h, d), h.aliasOf = f && f.record;
    const v = Sp(t, u), m = [
      h
    ];
    if ("alias" in u) {
      const g = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const y of g)
        m.push(ut({}, h, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: f ? f.record.components : h.components,
          path: y,
          // we might be the child of an alias
          aliasOf: f ? f.record : h
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let b, x;
    for (const g of m) {
      const { path: y } = g;
      if (d && y[0] !== "/") {
        const E = d.record.path, S = E[E.length - 1] === "/" ? "" : "/";
        g.path = d.record.path + (y && S + y);
      }
      if (process.env.NODE_ENV !== "production" && g.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (b = x4(g, d, v), process.env.NODE_ENV !== "production" && d && y[0] === "/" && N4(b, d), f ? (f.alias.push(b), process.env.NODE_ENV !== "production" && O4(f, b)) : (x = x || b, x !== b && x.alias.push(b), p && u.name && !wp(b) && i(u.name)), h.children) {
        const E = h.children;
        for (let S = 0; S < E.length; S++)
          s(E[S], b, f && f.children[S]);
      }
      f = f || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && l(b);
    }
    return x ? () => {
      i(x);
    } : bi;
  }
  function i(u) {
    if (kv(u)) {
      const d = r.get(u);
      d && (r.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1), u.record.name && r.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let d = 0;
    for (; d < n.length && v4(u, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (u.record.path !== n[d].record.path || !Mv(u, n[d])); )
      d++;
    n.splice(d, 0, u), u.record.name && !wp(u) && r.set(u.record.name, u);
  }
  function c(u, d) {
    let f, p = {}, h, v;
    if ("name" in u && u.name) {
      if (f = r.get(u.name), !f)
        throw Rs(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const x = Object.keys(u.params || {}).filter((g) => !f.keys.find((y) => y.name === g));
        x.length && tt(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      v = f.record.name, p = ut(
        // paramsFromLocation is a new object
        Ep(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          f.keys.filter((x) => !x.optional).map((x) => x.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && Ep(u.params, f.keys.map((x) => x.name))
      ), h = f.stringify(p);
    } else if ("path" in u)
      h = u.path, process.env.NODE_ENV !== "production" && !h.startsWith("/") && tt(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), f = n.find((x) => x.re.test(h)), f && (p = f.parse(h), v = f.record.name);
    else {
      if (f = d.name ? r.get(d.name) : n.find((x) => x.re.test(d.path)), !f)
        throw Rs(1, {
          location: u,
          currentLocation: d
        });
      v = f.record.name, p = ut({}, d.params, u.params), h = f.stringify(p);
    }
    const m = [];
    let b = f;
    for (; b; )
      m.unshift(b.record), b = b.parent;
    return {
      name: v,
      path: h,
      params: p,
      matched: m,
      meta: C4(m)
    };
  }
  return e.forEach((u) => s(u)), { addRoute: s, resolve: c, removeRoute: i, getRoutes: a, getRecordMatcher: o };
}
function Ep(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function w4(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: S4(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function S4(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function wp(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function C4(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function Sp(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ru(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function O4(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ru.bind(null, n)))
      return tt(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ru.bind(null, n)))
      return tt(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function T4(e, t) {
  t && t.record.name && !e.name && !e.path && tt(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function N4(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ru.bind(null, n)))
      return tt(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Mv(e, t) {
  return t.children.some((n) => n === e || Mv(e, n));
}
const jv = /#/g, _4 = /&/g, A4 = /\//g, D4 = /=/g, P4 = /\?/g, Vv = /\+/g, R4 = /%5B/g, I4 = /%5D/g, Fv = /%5E/g, L4 = /%60/g, Bv = /%7B/g, $4 = /%7C/g, Uv = /%7D/g, k4 = /%20/g;
function Fd(e) {
  return encodeURI("" + e).replace($4, "|").replace(R4, "[").replace(I4, "]");
}
function M4(e) {
  return Fd(e).replace(Bv, "{").replace(Uv, "}").replace(Fv, "^");
}
function Iu(e) {
  return Fd(e).replace(Vv, "%2B").replace(k4, "+").replace(jv, "%23").replace(_4, "%26").replace(L4, "`").replace(Bv, "{").replace(Uv, "}").replace(Fv, "^");
}
function j4(e) {
  return Iu(e).replace(D4, "%3D");
}
function V4(e) {
  return Fd(e).replace(jv, "%23").replace(P4, "%3F");
}
function F4(e) {
  return e == null ? "" : V4(e).replace(A4, "%2F");
}
function Qi(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && tt(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function B4(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Vv, " "), i = s.indexOf("="), a = Qi(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : Qi(s.slice(i + 1));
    if (a in t) {
      let c = t[a];
      wn(c) || (c = t[a] = [c]), c.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function Cp(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = j4(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (wn(r) ? r.map((s) => s && Iu(s)) : [r && Iu(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function U4(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = wn(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const H4 = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Op = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Yl = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Bd = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Lu = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Gs() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function Mr(e, t, n, r, o) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((i, a) => {
    const l = (d) => {
      d === !1 ? a(Rs(4, {
        from: n,
        to: t
      })) : d instanceof Error ? a(d) : l4(d) ? a(Rs(2, {
        from: t,
        to: d
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[o] === s && typeof d == "function" && s.push(d), i());
    }, c = e.call(r && r.instances[o], t, n, process.env.NODE_ENV !== "production" ? z4(l, t, n) : l);
    let u = Promise.resolve(c);
    if (e.length < 3 && (u = u.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        u = u.then((f) => l._called ? f : (tt(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !l._called) {
        tt(d), a(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((d) => a(d));
  });
}
function z4(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && tt(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function Dc(e, t, n, r) {
  const o = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && tt(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in s.components) {
      let a = s.components[i];
      if (process.env.NODE_ENV !== "production") {
        if (!a || typeof a != "object" && typeof a != "function")
          throw tt(`Component "${i}" in record with path "${s.path}" is not a valid component. Received "${String(a)}".`), new Error("Invalid route component");
        if ("then" in a) {
          tt(`Component "${i}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = a;
          a = () => l;
        } else
          a.__asyncLoader && // warn only once per component
          !a.__warnedDefineAsync && (a.__warnedDefineAsync = !0, tt(`Component "${i}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (K4(a)) {
          const c = (a.__vccOpts || a)[t];
          c && o.push(Mr(c, n, r, s, i));
        } else {
          let l = a();
          process.env.NODE_ENV !== "production" && !("catch" in l) && (tt(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), o.push(() => l.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
            const u = z5(c) ? c.default : c;
            s.components[i] = u;
            const f = (u.__vccOpts || u)[t];
            return f && Mr(f, n, r, s, i)();
          }));
        }
    }
  }
  return o;
}
function K4(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function $u(e) {
  const t = mt(Yl), n = mt(Bd), r = fe(() => t.resolve(A(e.to))), o = fe(() => {
    const { matched: l } = r.value, { length: c } = l, u = l[c - 1], d = n.matched;
    if (!u || !d.length)
      return -1;
    const f = d.findIndex(uo.bind(null, u));
    if (f > -1)
      return f;
    const p = Tp(l[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Tp(u) === p && // avoid comparing the child with its parent
      d[d.length - 1].path !== p ? d.findIndex(uo.bind(null, l[c - 2])) : f
    );
  }), s = fe(() => o.value > -1 && W4(n.params, r.value.params)), i = fe(() => o.value > -1 && o.value === n.matched.length - 1 && Lv(n.params, r.value.params));
  function a(l = {}) {
    return Z4(l) ? t[A(e.replace) ? "replace" : "push"](
      A(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(bi) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && hr) {
    const l = Cn();
    if (l) {
      const c = {
        route: r.value,
        isActive: s.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(c), Qt(() => {
        c.route = r.value, c.isActive = s.value, c.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: fe(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a
  };
}
const G4 = /* @__PURE__ */ De({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: $u,
  setup(e, { slots: t }) {
    const n = Ln($u(e)), { options: r } = mt(Yl), o = fe(() => ({
      [Np(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Np(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : bt("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), Hv = G4;
function Z4(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function W4(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o)
        return !1;
    } else if (!wn(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function Tp(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Np = (e, t, n) => e ?? t ?? n, Y4 = /* @__PURE__ */ De({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && J4();
    const r = mt(Lu), o = fe(() => e.route || r.value), s = mt(Op, 0), i = fe(() => {
      let c = A(s);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[c]) && !d.components; )
        c++;
      return c;
    }), a = fe(() => o.value.matched[i.value]);
    Mt(Op, fe(() => i.value + 1)), Mt(H4, a), Mt(Lu, o);
    const l = W();
    return Lt(() => [l.value, a.value, e.name], ([c, u, d], [f, p, h]) => {
      u && (u.instances[d] = c, p && p !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), c && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !uo(u, p) || !f) && (u.enterCallbacks[d] || []).forEach((v) => v(c));
    }, { flush: "post" }), () => {
      const c = o.value, u = e.name, d = a.value, f = d && d.components[u];
      if (!f)
        return _p(n.default, { Component: f, route: c });
      const p = d.props[u], h = p ? p === !0 ? c.params : typeof p == "function" ? p(c) : p : null, m = bt(f, ut({}, h, t, {
        onVnodeUnmounted: (b) => {
          b.component.isUnmounted && (d.instances[u] = null);
        },
        ref: l
      }));
      if (process.env.NODE_ENV !== "production" && hr && m.ref) {
        const b = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (wn(m.ref) ? m.ref.map((g) => g.i) : [m.ref.i]).forEach((g) => {
          g.__vrv_devtools = b;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        _p(n.default, { Component: m, route: c }) || m
      );
    };
  }
});
function _p(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const X4 = Y4;
function J4() {
  const e = Cn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    tt(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function Zs(e, t) {
  const n = ut({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => i6(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Ta(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Q4 = 0;
function q4(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = Q4++;
  Ld({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((u, d) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Zs(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const f = d.__vrv_devtools;
        u.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: zv
        });
      }
      wn(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((f) => {
        let p = Zv, h = "";
        f.isExactActive ? (p = Gv, h = "This is exactly active") : f.isActive && (p = Kv, h = "This link is active"), u.tags.push({
          label: f.route.path,
          textColor: 0,
          tooltip: h,
          backgroundColor: p
        });
      }));
    }), Lt(t.currentRoute, () => {
      l(), o.notifyComponentUpdate(), o.sendInspectorTree(a), o.sendInspectorState(a);
    });
    const s = "router:navigations:" + r;
    o.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((u, d) => {
      o.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: u },
          groupId: d.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, d) => {
      const f = {
        guard: Ta("beforeEach"),
        from: Zs(d, "Current Location during this navigation"),
        to: Zs(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: s,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: f,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, f) => {
      const p = {
        guard: Ta("afterEach")
      };
      f ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: f ? f.message : "",
          tooltip: "Navigation Failure",
          value: f
        }
      }, p.status = Ta("❌")) : p.status = Ta("✅"), p.from = Zs(d, "Current Location during this navigation"), p.to = Zs(u, "Target location"), o.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: p,
          logType: f ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const a = "router-inspector:" + r;
    o.addInspector({
      id: a,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!c)
        return;
      const u = c;
      let d = n.getRoutes().filter((f) => !f.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !f.parent.record.components);
      d.forEach(Xv), u.filter && (d = d.filter((f) => (
        // save matches state based on the payload
        ku(f, u.filter.toLowerCase())
      ))), d.forEach((f) => Yv(f, t.currentRoute.value)), u.rootNodes = d.map(Wv);
    }
    let c;
    o.on.getInspectorTree((u) => {
      c = u, u.app === e && u.inspectorId === a && l();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const f = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId);
        f && (u.state = {
          options: t6(f)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function e6(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function t6(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((r) => `${r.name}${e6(r)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((r) => r.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const zv = 15485081, Kv = 2450411, Gv = 8702998, n6 = 2282478, Zv = 16486972, r6 = 6710886;
function Wv(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: n6
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Zv
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: zv
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Gv
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Kv
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: r6
  });
  let r = n.__vd_id;
  return r == null && (r = String(o6++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(Wv)
  };
}
let o6 = 0;
const s6 = /^\/(.*)\/([a-z]*)$/;
function Yv(e, t) {
  const n = t.matched.length && uo(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => uo(r, e.record))), e.children.forEach((r) => Yv(r, t));
}
function Xv(e) {
  e.__vd_match = !1, e.children.forEach(Xv);
}
function ku(e, t) {
  const n = String(e.re).match(s6);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ku(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), s = Qi(o);
  return !t.startsWith("/") && (s.includes(t) || o.includes(t)) || s.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ku(i, t));
}
function i6(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function a6(e) {
  const t = E4(e.routes, e), n = e.parseQuery || B4, r = e.stringifyQuery || Cp, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Gs(), i = Gs(), a = Gs(), l = hs(Rr);
  let c = Rr;
  hr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = _c.bind(null, (I) => "" + I), d = _c.bind(null, F4), f = (
    // @ts-expect-error: intentionally avoid the type check
    _c.bind(null, Qi)
  );
  function p(I, q) {
    let re, pe;
    return kv(I) ? (re = t.getRecordMatcher(I), pe = q) : pe = I, t.addRoute(pe, re);
  }
  function h(I) {
    const q = t.getRecordMatcher(I);
    q ? t.removeRoute(q) : process.env.NODE_ENV !== "production" && tt(`Cannot remove non-existent route "${String(I)}"`);
  }
  function v() {
    return t.getRoutes().map((I) => I.record);
  }
  function m(I) {
    return !!t.getRecordMatcher(I);
  }
  function b(I, q) {
    if (q = ut({}, q || l.value), typeof I == "string") {
      const O = Ac(n, I, q.path), j = t.resolve({ path: O.path }, q), Z = o.createHref(O.fullPath);
      return process.env.NODE_ENV !== "production" && (Z.startsWith("//") ? tt(`Location "${I}" resolved to "${Z}". A resolved location cannot start with multiple slashes.`) : j.matched.length || tt(`No match found for location with path "${I}"`)), ut(O, j, {
        params: f(j.params),
        hash: Qi(O.hash),
        redirectedFrom: void 0,
        href: Z
      });
    }
    let re;
    if ("path" in I)
      process.env.NODE_ENV !== "production" && "params" in I && !("name" in I) && // @ts-expect-error: the type is never
      Object.keys(I.params).length && tt(`Path "${I.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), re = ut({}, I, {
        path: Ac(n, I.path, q.path).path
      });
    else {
      const O = ut({}, I.params);
      for (const j in O)
        O[j] == null && delete O[j];
      re = ut({}, I, {
        params: d(O)
      }), q.params = d(q.params);
    }
    const pe = t.resolve(re, q), ze = I.hash || "";
    process.env.NODE_ENV !== "production" && ze && !ze.startsWith("#") && tt(`A \`hash\` should always start with the character "#". Replace "${ze}" with "#${ze}".`), pe.params = u(f(pe.params));
    const ot = Z5(r, ut({}, I, {
      hash: M4(ze),
      path: pe.path
    })), w = o.createHref(ot);
    return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? tt(`Location "${I}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : pe.matched.length || tt(`No match found for location with path "${"path" in I ? I.path : I}"`)), ut({
      fullPath: ot,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ze,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === Cp ? U4(I.query) : I.query || {}
      )
    }, pe, {
      redirectedFrom: void 0,
      href: w
    });
  }
  function x(I) {
    return typeof I == "string" ? Ac(n, I, l.value.path) : ut({}, I);
  }
  function g(I, q) {
    if (c !== I)
      return Rs(8, {
        from: q,
        to: I
      });
  }
  function y(I) {
    return T(I);
  }
  function E(I) {
    return y(ut(x(I), { replace: !0 }));
  }
  function S(I) {
    const q = I.matched[I.matched.length - 1];
    if (q && q.redirect) {
      const { redirect: re } = q;
      let pe = typeof re == "function" ? re(I) : re;
      if (typeof pe == "string" && (pe = pe.includes("?") || pe.includes("#") ? pe = x(pe) : (
        // force empty params
        { path: pe }
      ), pe.params = {}), process.env.NODE_ENV !== "production" && !("path" in pe) && !("name" in pe))
        throw tt(`Invalid redirect found:
${JSON.stringify(pe, null, 2)}
 when navigating to "${I.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ut({
        query: I.query,
        hash: I.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in pe ? {} : I.params
      }, pe);
    }
  }
  function T(I, q) {
    const re = c = b(I), pe = l.value, ze = I.state, ot = I.force, w = I.replace === !0, O = S(re);
    if (O)
      return T(
        ut(x(O), {
          state: typeof O == "object" ? ut({}, ze, O.state) : ze,
          force: ot,
          replace: w
        }),
        // keep original redirectedFrom if it exists
        q || re
      );
    const j = re;
    j.redirectedFrom = q;
    let Z;
    return !ot && hp(r, pe, re) && (Z = Rs(16, { to: j, from: pe }), Ve(
      pe,
      pe,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Z ? Promise.resolve(Z) : N(j, pe)).catch((z) => cr(z) ? (
      // navigation redirects still mark the router as ready
      cr(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? z : We(z)
    ) : (
      // reject any unknown error
      B(z, j, pe)
    )).then((z) => {
      if (z) {
        if (cr(
          z,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          hp(r, b(z.to), j) && // and we have done it a couple of times
          q && // @ts-expect-error: added only in dev
          (q._count = q._count ? (
            // @ts-expect-error
            q._count + 1
          ) : 1) > 30 ? (tt(`Detected a possibly infinite redirection in a navigation guard when going from "${pe.fullPath}" to "${j.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : T(
            // keep options
            ut({
              // preserve an existing replacement but allow the redirect to override it
              replace: w
            }, x(z.to), {
              state: typeof z.to == "object" ? ut({}, ze, z.to.state) : ze,
              force: ot
            }),
            // preserve the original redirectedFrom if any
            q || j
          );
      } else
        z = M(j, pe, !0, w, ze);
      return R(j, pe, z), z;
    });
  }
  function D(I, q) {
    const re = g(I, q);
    return re ? Promise.reject(re) : Promise.resolve();
  }
  function _(I) {
    const q = ne.values().next().value;
    return q && typeof q.runWithContext == "function" ? q.runWithContext(I) : I();
  }
  function N(I, q) {
    let re;
    const [pe, ze, ot] = l6(I, q);
    re = Dc(pe.reverse(), "beforeRouteLeave", I, q);
    for (const O of pe)
      O.leaveGuards.forEach((j) => {
        re.push(Mr(j, I, q));
      });
    const w = D.bind(null, I, q);
    return re.push(w), oe(re).then(() => {
      re = [];
      for (const O of s.list())
        re.push(Mr(O, I, q));
      return re.push(w), oe(re);
    }).then(() => {
      re = Dc(ze, "beforeRouteUpdate", I, q);
      for (const O of ze)
        O.updateGuards.forEach((j) => {
          re.push(Mr(j, I, q));
        });
      return re.push(w), oe(re);
    }).then(() => {
      re = [];
      for (const O of ot)
        if (O.beforeEnter)
          if (wn(O.beforeEnter))
            for (const j of O.beforeEnter)
              re.push(Mr(j, I, q));
          else
            re.push(Mr(O.beforeEnter, I, q));
      return re.push(w), oe(re);
    }).then(() => (I.matched.forEach((O) => O.enterCallbacks = {}), re = Dc(ot, "beforeRouteEnter", I, q), re.push(w), oe(re))).then(() => {
      re = [];
      for (const O of i.list())
        re.push(Mr(O, I, q));
      return re.push(w), oe(re);
    }).catch((O) => cr(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function R(I, q, re) {
    a.list().forEach((pe) => _(() => pe(I, q, re)));
  }
  function M(I, q, re, pe, ze) {
    const ot = g(I, q);
    if (ot)
      return ot;
    const w = q === Rr, O = hr ? history.state : {};
    re && (pe || w ? o.replace(I.fullPath, ut({
      scroll: w && O && O.scroll
    }, ze)) : o.push(I.fullPath, ze)), l.value = I, Ve(I, q, re, w), We();
  }
  let $;
  function H() {
    $ || ($ = o.listen((I, q, re) => {
      if (!he.listening)
        return;
      const pe = b(I), ze = S(pe);
      if (ze) {
        T(ut(ze, { replace: !0 }), pe).catch(bi);
        return;
      }
      c = pe;
      const ot = l.value;
      hr && t4(vp(ot.fullPath, re.delta), Wl()), N(pe, ot).catch((w) => cr(
        w,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? w : cr(
        w,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (T(
        w.to,
        pe
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        cr(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !re.delta && re.type === Ji.pop && o.go(-1, !1);
      }).catch(bi), Promise.reject()) : (re.delta && o.go(-re.delta, !1), B(w, pe, ot))).then((w) => {
        w = w || M(
          // after navigation, all matched components are resolved
          pe,
          ot,
          !1
        ), w && (re.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !cr(
          w,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-re.delta, !1) : re.type === Ji.pop && cr(
          w,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(pe, ot, w);
      }).catch(bi);
    }));
  }
  let G = Gs(), P = Gs(), V;
  function B(I, q, re) {
    We(I);
    const pe = P.list();
    return pe.length ? pe.forEach((ze) => ze(I, q, re)) : (process.env.NODE_ENV !== "production" && tt("uncaught error during route navigation:"), console.error(I)), Promise.reject(I);
  }
  function Ce() {
    return V && l.value !== Rr ? Promise.resolve() : new Promise((I, q) => {
      G.add([I, q]);
    });
  }
  function We(I) {
    return V || (V = !I, H(), G.list().forEach(([q, re]) => I ? re(I) : q()), G.reset()), I;
  }
  function Ve(I, q, re, pe) {
    const { scrollBehavior: ze } = e;
    if (!hr || !ze)
      return Promise.resolve();
    const ot = !re && n4(vp(I.fullPath, 0)) || (pe || !re) && history.state && history.state.scroll || null;
    return Pn().then(() => ze(I, q, ot)).then((w) => w && e4(w)).catch((w) => B(w, I, q));
  }
  const ee = (I) => o.go(I);
  let te;
  const ne = /* @__PURE__ */ new Set(), he = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    hasRoute: m,
    getRoutes: v,
    resolve: b,
    options: e,
    push: y,
    replace: E,
    go: ee,
    back: () => ee(-1),
    forward: () => ee(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: P.add,
    isReady: Ce,
    install(I) {
      const q = this;
      I.component("RouterLink", Hv), I.component("RouterView", X4), I.config.globalProperties.$router = q, Object.defineProperty(I.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => A(l)
      }), hr && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !te && l.value === Rr && (te = !0, y(o.location).catch((ze) => {
        process.env.NODE_ENV !== "production" && tt("Unexpected error when starting the router:", ze);
      }));
      const re = {};
      for (const ze in Rr)
        Object.defineProperty(re, ze, {
          get: () => l.value[ze],
          enumerable: !0
        });
      I.provide(Yl, q), I.provide(Bd, rd(re)), I.provide(Lu, l);
      const pe = I.unmount;
      ne.add(I), I.unmount = function() {
        ne.delete(I), ne.size < 1 && (c = Rr, $ && $(), $ = null, l.value = Rr, te = !1, V = !1), pe();
      }, process.env.NODE_ENV !== "production" && hr && q4(I, q, t);
    }
  };
  function oe(I) {
    return I.reduce((q, re) => q.then(() => _(re)), Promise.resolve());
  }
  return he;
}
function l6(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((c) => uo(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((c) => uo(c, l)) || o.push(l));
  }
  return [n, r, o];
}
function Jv() {
  return mt(Yl);
}
function c6() {
  return mt(Bd);
}
const Xl = ra("dashboard", () => {
  const e = W(), t = W(), n = W(), r = W(), o = W(), s = W(), i = {
    create: e,
    edit: t,
    map: n,
    delivery: r,
    plan: o,
    top: s
  }, a = W(0), l = Jv(), c = V5(`(min-width: ${H5.screens.sm})`), u = W(!1), d = [
    { name: "dashboard" },
    { name: "stats" },
    { name: "guide" }
  ], f = async (b) => {
    a.value = b, await Pn(), d[b] != null && l.push(d[b]);
  }, p = () => {
    if (c.value && s.value)
      return s.value.scrollIntoView({
        behavior: "smooth"
      });
    window && typeof window.scroll == "function" && window.scroll({
      top: 0,
      left: 0
    });
  };
  return {
    createScrollRef: e,
    editScrollRef: t,
    deliveryScrollRef: r,
    isScreenSmallOrWider: c,
    isScreen: u,
    mapScrollRef: n,
    onChangeTab: f,
    onScrollToTop: p,
    onSelectGuideTab: async (b) => {
      var x;
      f(2), await Pn(), b && (window && typeof window.scroll == "function" && window.scroll({
        top: 0,
        behavior: "instant"
      }), (x = i[b].value) == null || x.scrollIntoView({
        behavior: "smooth"
      }));
    },
    onSelectMainTab: () => {
      f(0), p();
    },
    onSelectStatsTab: () => {
      f(1), p();
    },
    planScrollRef: o,
    selectedTab: a,
    scrollRefs: i,
    topScrollRef: s
  };
}), Pc = {
  openSidebar: 100,
  closeSidebar: 500
}, u6 = ra("map", () => {
  const e = W(), t = W(), n = W(), r = W(), o = W(), s = () => {
    if (!(!r.value || !e.value)) {
      if (f.value) {
        r.value.remove(), f.value = !1;
        return;
      }
      r.value.addTo(e.value), f.value = !0;
    }
  }, i = () => {
    if (!(!o.value || !e.value)) {
      if (d.value) {
        o.value.remove(), d.value = !1;
        return;
      }
      o.value.addTo(e.value), d.value = !0;
    }
  }, a = W(!1), l = W(!1), c = W(!0), u = W(!1), d = W(!1), f = W(!1), p = W(!1), h = Ln({
    mapPins: 12,
    districtsHover: 13
  }), v = W(), m = W(), b = () => {
    e.value && e.value.invalidateSize({
      animate: !0,
      debounceMoveend: !0,
      duration: 400,
      easeLinearity: 4,
      noMoveStart: !0,
      pan: !0
    });
  }, x = () => {
    a.value = !a.value, setTimeout(b, Pc.closeSidebar);
  }, g = () => {
    a.value = !0, setTimeout(b, Pc.openSidebar);
  }, y = () => {
    a.value = !1, setTimeout(b, Pc.closeSidebar);
  }, E = W(0), S = (G) => E.value = G, T = () => S(0), D = () => S(1), _ = () => S(2), N = Ln({
    route: []
  }), R = (G = v.value) => {
    g(), D(), !(!G || N.route.includes(G)) && (G.isAppealInDeliveryRoute = !0, N.route.push(G), G.mapPinElement && G.mapPinElement.classList.add("delivery-route"), G.onAddToDelivery && G.onAddToDelivery());
  }, M = (G) => {
    G.isAppealInDeliveryRoute = !1, G.onDeleteFromDelivery && G.onDeleteFromDelivery(), G.mapPinElement && G.mapPinElement.classList.remove("delivery-route");
  };
  return {
    appealsGeoData: n,
    controlPanelRef: r,
    delivery: N,
    isControlPanelEnabled: f,
    isInfoPanelDisplayed: p,
    isMapPopupDisplayed: c,
    isMapTooltipDisplayed: u,
    isSatelliteEnabled: d,
    isSidebarOpen: a,
    isZoomedOut: l,
    mapElementRef: t,
    mapRef: e,
    onAddToDelivery: R,
    onChangeTab: S,
    onClearDeliveryRoute: () => {
      N.route.forEach(M), N.route = [];
    },
    onCloseSidebar: y,
    onDeleteFromDelivery: (G) => {
      N.route = N.route.filter(
        ({ appealId: P }) => P !== G.appealId
      ), M(G);
    },
    onOpenDetailsTab: T,
    onOpenRoutesTab: D,
    onOpenSettingsTab: _,
    onOpenSidebar: g,
    onResetAppeal: M,
    onToggleControlPanel: s,
    onToggleSatelliteLayer: i,
    onToggleSidebar: x,
    satelliteTilesRef: o,
    selectedAppeal: v,
    selectedDistrict: m,
    selectedSidebarTab: E,
    zoomThresholds: h
  };
}), d6 = ra("user", () => ({ user: W({
  name: "Demo User",
  image: ""
}), logout: () => {
  console.log("Logging out");
} }));
var Qv = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e, t) {
  (function(r, o) {
    e.exports = o();
  })(Ov, function() {
    return (
      /******/
      function() {
        var n = {
          /***/
          686: (
            /***/
            function(s, i, a) {
              a.d(i, {
                default: function() {
                  return (
                    /* binding */
                    Ve
                  );
                }
              });
              var l = a(279), c = /* @__PURE__ */ a.n(l), u = a(370), d = /* @__PURE__ */ a.n(u), f = a(817), p = /* @__PURE__ */ a.n(f);
              function h(ee) {
                try {
                  return document.execCommand(ee);
                } catch {
                  return !1;
                }
              }
              var v = function(te) {
                var ne = p()(te);
                return h("cut"), ne;
              }, m = v;
              function b(ee) {
                var te = document.documentElement.getAttribute("dir") === "rtl", ne = document.createElement("textarea");
                ne.style.fontSize = "12pt", ne.style.border = "0", ne.style.padding = "0", ne.style.margin = "0", ne.style.position = "absolute", ne.style[te ? "right" : "left"] = "-9999px";
                var he = window.pageYOffset || document.documentElement.scrollTop;
                return ne.style.top = "".concat(he, "px"), ne.setAttribute("readonly", ""), ne.value = ee, ne;
              }
              var x = function(te, ne) {
                var he = b(te);
                ne.container.appendChild(he);
                var oe = p()(he);
                return h("copy"), he.remove(), oe;
              }, g = function(te) {
                var ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                }, he = "";
                return typeof te == "string" ? he = x(te, ne) : te instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(te == null ? void 0 : te.type) ? he = x(te.value, ne) : (he = p()(te), h("copy")), he;
              }, y = g;
              function E(ee) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(ne) {
                  return typeof ne;
                } : E = function(ne) {
                  return ne && typeof Symbol == "function" && ne.constructor === Symbol && ne !== Symbol.prototype ? "symbol" : typeof ne;
                }, E(ee);
              }
              var S = function() {
                var te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = te.action, he = ne === void 0 ? "copy" : ne, oe = te.container, I = te.target, q = te.text;
                if (he !== "copy" && he !== "cut")
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (I !== void 0)
                  if (I && E(I) === "object" && I.nodeType === 1) {
                    if (he === "copy" && I.hasAttribute("disabled"))
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if (he === "cut" && (I.hasAttribute("readonly") || I.hasAttribute("disabled")))
                      throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  } else
                    throw new Error('Invalid "target" value, use a valid Element');
                if (q)
                  return y(q, {
                    container: oe
                  });
                if (I)
                  return he === "cut" ? m(I) : y(I, {
                    container: oe
                  });
              }, T = S;
              function D(ee) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? D = function(ne) {
                  return typeof ne;
                } : D = function(ne) {
                  return ne && typeof Symbol == "function" && ne.constructor === Symbol && ne !== Symbol.prototype ? "symbol" : typeof ne;
                }, D(ee);
              }
              function _(ee, te) {
                if (!(ee instanceof te))
                  throw new TypeError("Cannot call a class as a function");
              }
              function N(ee, te) {
                for (var ne = 0; ne < te.length; ne++) {
                  var he = te[ne];
                  he.enumerable = he.enumerable || !1, he.configurable = !0, "value" in he && (he.writable = !0), Object.defineProperty(ee, he.key, he);
                }
              }
              function R(ee, te, ne) {
                return te && N(ee.prototype, te), ne && N(ee, ne), ee;
              }
              function M(ee, te) {
                if (typeof te != "function" && te !== null)
                  throw new TypeError("Super expression must either be null or a function");
                ee.prototype = Object.create(te && te.prototype, { constructor: { value: ee, writable: !0, configurable: !0 } }), te && $(ee, te);
              }
              function $(ee, te) {
                return $ = Object.setPrototypeOf || function(he, oe) {
                  return he.__proto__ = oe, he;
                }, $(ee, te);
              }
              function H(ee) {
                var te = V();
                return function() {
                  var he = B(ee), oe;
                  if (te) {
                    var I = B(this).constructor;
                    oe = Reflect.construct(he, arguments, I);
                  } else
                    oe = he.apply(this, arguments);
                  return G(this, oe);
                };
              }
              function G(ee, te) {
                return te && (D(te) === "object" || typeof te == "function") ? te : P(ee);
              }
              function P(ee) {
                if (ee === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return ee;
              }
              function V() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
                  return !1;
                if (typeof Proxy == "function")
                  return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                  })), !0;
                } catch {
                  return !1;
                }
              }
              function B(ee) {
                return B = Object.setPrototypeOf ? Object.getPrototypeOf : function(ne) {
                  return ne.__proto__ || Object.getPrototypeOf(ne);
                }, B(ee);
              }
              function Ce(ee, te) {
                var ne = "data-clipboard-".concat(ee);
                if (te.hasAttribute(ne))
                  return te.getAttribute(ne);
              }
              var We = /* @__PURE__ */ function(ee) {
                M(ne, ee);
                var te = H(ne);
                function ne(he, oe) {
                  var I;
                  return _(this, ne), I = te.call(this), I.resolveOptions(oe), I.listenClick(he), I;
                }
                return R(ne, [{
                  key: "resolveOptions",
                  value: function() {
                    var oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.action = typeof oe.action == "function" ? oe.action : this.defaultAction, this.target = typeof oe.target == "function" ? oe.target : this.defaultTarget, this.text = typeof oe.text == "function" ? oe.text : this.defaultText, this.container = D(oe.container) === "object" ? oe.container : document.body;
                  }
                  /**
                   * Adds a click event listener to the passed trigger.
                   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                   */
                }, {
                  key: "listenClick",
                  value: function(oe) {
                    var I = this;
                    this.listener = d()(oe, "click", function(q) {
                      return I.onClick(q);
                    });
                  }
                  /**
                   * Defines a new `ClipboardAction` on each click event.
                   * @param {Event} e
                   */
                }, {
                  key: "onClick",
                  value: function(oe) {
                    var I = oe.delegateTarget || oe.currentTarget, q = this.action(I) || "copy", re = T({
                      action: q,
                      container: this.container,
                      target: this.target(I),
                      text: this.text(I)
                    });
                    this.emit(re ? "success" : "error", {
                      action: q,
                      text: re,
                      trigger: I,
                      clearSelection: function() {
                        I && I.focus(), window.getSelection().removeAllRanges();
                      }
                    });
                  }
                  /**
                   * Default `action` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultAction",
                  value: function(oe) {
                    return Ce("action", oe);
                  }
                  /**
                   * Default `target` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultTarget",
                  value: function(oe) {
                    var I = Ce("target", oe);
                    if (I)
                      return document.querySelector(I);
                  }
                  /**
                   * Allow fire programmatically a copy action
                   * @param {String|HTMLElement} target
                   * @param {Object} options
                   * @returns Text copied.
                   */
                }, {
                  key: "defaultText",
                  /**
                   * Default `text` lookup function.
                   * @param {Element} trigger
                   */
                  value: function(oe) {
                    return Ce("text", oe);
                  }
                  /**
                   * Destroy lifecycle.
                   */
                }, {
                  key: "destroy",
                  value: function() {
                    this.listener.destroy();
                  }
                }], [{
                  key: "copy",
                  value: function(oe) {
                    var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    return y(oe, I);
                  }
                  /**
                   * Allow fire programmatically a cut action
                   * @param {String|HTMLElement} target
                   * @returns Text cutted.
                   */
                }, {
                  key: "cut",
                  value: function(oe) {
                    return m(oe);
                  }
                  /**
                   * Returns the support of the given action, or all actions if no action is
                   * given.
                   * @param {String} [action]
                   */
                }, {
                  key: "isSupported",
                  value: function() {
                    var oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], I = typeof oe == "string" ? [oe] : oe, q = !!document.queryCommandSupported;
                    return I.forEach(function(re) {
                      q = q && !!document.queryCommandSupported(re);
                    }), q;
                  }
                }]), ne;
              }(c()), Ve = We;
            }
          ),
          /***/
          828: (
            /***/
            function(s) {
              var i = 9;
              if (typeof Element < "u" && !Element.prototype.matches) {
                var a = Element.prototype;
                a.matches = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
              }
              function l(c, u) {
                for (; c && c.nodeType !== i; ) {
                  if (typeof c.matches == "function" && c.matches(u))
                    return c;
                  c = c.parentNode;
                }
              }
              s.exports = l;
            }
          ),
          /***/
          438: (
            /***/
            function(s, i, a) {
              var l = a(828);
              function c(f, p, h, v, m) {
                var b = d.apply(this, arguments);
                return f.addEventListener(h, b, m), {
                  destroy: function() {
                    f.removeEventListener(h, b, m);
                  }
                };
              }
              function u(f, p, h, v, m) {
                return typeof f.addEventListener == "function" ? c.apply(null, arguments) : typeof h == "function" ? c.bind(null, document).apply(null, arguments) : (typeof f == "string" && (f = document.querySelectorAll(f)), Array.prototype.map.call(f, function(b) {
                  return c(b, p, h, v, m);
                }));
              }
              function d(f, p, h, v) {
                return function(m) {
                  m.delegateTarget = l(m.target, p), m.delegateTarget && v.call(f, m);
                };
              }
              s.exports = u;
            }
          ),
          /***/
          879: (
            /***/
            function(s, i) {
              i.node = function(a) {
                return a !== void 0 && a instanceof HTMLElement && a.nodeType === 1;
              }, i.nodeList = function(a) {
                var l = Object.prototype.toString.call(a);
                return a !== void 0 && (l === "[object NodeList]" || l === "[object HTMLCollection]") && "length" in a && (a.length === 0 || i.node(a[0]));
              }, i.string = function(a) {
                return typeof a == "string" || a instanceof String;
              }, i.fn = function(a) {
                var l = Object.prototype.toString.call(a);
                return l === "[object Function]";
              };
            }
          ),
          /***/
          370: (
            /***/
            function(s, i, a) {
              var l = a(879), c = a(438);
              function u(h, v, m) {
                if (!h && !v && !m)
                  throw new Error("Missing required arguments");
                if (!l.string(v))
                  throw new TypeError("Second argument must be a String");
                if (!l.fn(m))
                  throw new TypeError("Third argument must be a Function");
                if (l.node(h))
                  return d(h, v, m);
                if (l.nodeList(h))
                  return f(h, v, m);
                if (l.string(h))
                  return p(h, v, m);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
              }
              function d(h, v, m) {
                return h.addEventListener(v, m), {
                  destroy: function() {
                    h.removeEventListener(v, m);
                  }
                };
              }
              function f(h, v, m) {
                return Array.prototype.forEach.call(h, function(b) {
                  b.addEventListener(v, m);
                }), {
                  destroy: function() {
                    Array.prototype.forEach.call(h, function(b) {
                      b.removeEventListener(v, m);
                    });
                  }
                };
              }
              function p(h, v, m) {
                return c(document.body, h, v, m);
              }
              s.exports = u;
            }
          ),
          /***/
          817: (
            /***/
            function(s) {
              function i(a) {
                var l;
                if (a.nodeName === "SELECT")
                  a.focus(), l = a.value;
                else if (a.nodeName === "INPUT" || a.nodeName === "TEXTAREA") {
                  var c = a.hasAttribute("readonly");
                  c || a.setAttribute("readonly", ""), a.select(), a.setSelectionRange(0, a.value.length), c || a.removeAttribute("readonly"), l = a.value;
                } else {
                  a.hasAttribute("contenteditable") && a.focus();
                  var u = window.getSelection(), d = document.createRange();
                  d.selectNodeContents(a), u.removeAllRanges(), u.addRange(d), l = u.toString();
                }
                return l;
              }
              s.exports = i;
            }
          ),
          /***/
          279: (
            /***/
            function(s) {
              function i() {
              }
              i.prototype = {
                on: function(a, l, c) {
                  var u = this.e || (this.e = {});
                  return (u[a] || (u[a] = [])).push({
                    fn: l,
                    ctx: c
                  }), this;
                },
                once: function(a, l, c) {
                  var u = this;
                  function d() {
                    u.off(a, d), l.apply(c, arguments);
                  }
                  return d._ = l, this.on(a, d, c);
                },
                emit: function(a) {
                  var l = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[a] || []).slice(), u = 0, d = c.length;
                  for (u; u < d; u++)
                    c[u].fn.apply(c[u].ctx, l);
                  return this;
                },
                off: function(a, l) {
                  var c = this.e || (this.e = {}), u = c[a], d = [];
                  if (u && l)
                    for (var f = 0, p = u.length; f < p; f++)
                      u[f].fn !== l && u[f].fn._ !== l && d.push(u[f]);
                  return d.length ? c[a] = d : delete c[a], this;
                }
              }, s.exports = i, s.exports.TinyEmitter = i;
            }
          )
          /******/
        }, r = {};
        function o(s) {
          if (r[s])
            return r[s].exports;
          var i = r[s] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return n[s](i, i.exports, o), i.exports;
        }
        return function() {
          o.n = function(s) {
            var i = s && s.__esModule ? (
              /******/
              function() {
                return s.default;
              }
            ) : (
              /******/
              function() {
                return s;
              }
            );
            return o.d(i, { a: i }), i;
          };
        }(), function() {
          o.d = function(s, i) {
            for (var a in i)
              o.o(i, a) && !o.o(s, a) && Object.defineProperty(s, a, { enumerable: !0, get: i[a] });
          };
        }(), function() {
          o.o = function(s, i) {
            return Object.prototype.hasOwnProperty.call(s, i);
          };
        }(), o(686);
      }().default
    );
  });
})(Qv);
var f6 = Qv.exports;
const p6 = /* @__PURE__ */ Tv(f6), h6 = (e) => {
  const t = (e == null ? void 0 : e.appendToBody) === void 0 ? !0 : e.appendToBody;
  return {
    toClipboard(n, r) {
      return new Promise((o, s) => {
        const i = document.createElement("button"), a = new p6(i, {
          text: () => n,
          action: () => "copy",
          container: r !== void 0 ? r : document.body
        });
        a.on("success", (l) => {
          a.destroy(), o(l);
        }), a.on("error", (l) => {
          a.destroy(), s(l);
        }), t && document.body.appendChild(i), i.click(), t && document.body.removeChild(i);
      });
    }
  };
}, Mu = (e) => {
  console.log(e);
}, m6 = () => {
  const e = u6(), {
    appealsGeoData: t,
    delivery: n,
    isControlPanelEnabled: r,
    isInfoPanelDisplayed: o,
    isMapPopupDisplayed: s,
    isMapTooltipDisplayed: i,
    isSatelliteEnabled: a,
    isSidebarOpen: l,
    isZoomedOut: c,
    mapElementRef: u,
    mapRef: d,
    satelliteTilesRef: f,
    selectedAppeal: p,
    selectedDistrict: h,
    selectedSidebarTab: v,
    zoomThresholds: m
  } = ro(e), {
    onAddToDelivery: b,
    onChangeTab: x,
    onClearDeliveryRoute: g,
    onCloseSidebar: y,
    onDeleteFromDelivery: E,
    onOpenRoutesTab: S,
    onResetAppeal: T,
    onToggleControlPanel: D,
    onToggleSatelliteLayer: _,
    onToggleSidebar: N
  } = e;
  return ht(async () => {
    try {
      const R = await import("./leaflet-src-8e1a9985.js").then((M) => M.l);
      if (!d.value || !u.value) {
        const {
          districtParams: M,
          kharkivCityBounds: $,
          kharkivRegionBounds: H,
          useControlPanel: G,
          useDistrictsLayer: P,
          useInfoPanel: V,
          useAppealsLayer: B,
          useTileLayers: Ce
        } = await import("./index-de2226d6.js"), { coordinates: We, zoomLevel: Ve } = M[vb], ee = R.map("map", {
          zoomControl: !1,
          doubleClickZoom: !1
        }).setView(We, Ve);
        if (!ee)
          return Mu("No map was created"), {};
        d.value = ee, ee.fitBounds($, {
          animate: !0
        }), ee.setMaxBounds(H), ee.on("drag", () => {
          ee.panInsideBounds(H, { animate: !0 });
        }), ee.on("zoomend", (pe) => {
          c.value = pe.target._zoom < m.value.mapPins;
        }), c.value = Ve < m.value.mapPins;
        const { esriWorldImageryLayer: te, openStreetMapLayer: ne } = Ce();
        f.value = te;
        const { onAddAppealsToMap: he, appealGroupLayer: oe } = B(), { districtsGroupLayer: I } = await P({
          map: ee
        }), { controlPanel: q } = G({
          esriWorldImageryLayer: te,
          openStreetMapLayer: ne,
          districtsGroupLayer: I,
          appealGroupLayer: oe
        }), { infoPanel: re } = V();
        he(), ne.addTo(ee), I.addTo(ee), oe.addTo(ee), a.value && te.addTo(ee), r.value && q.addTo(ee), o.value && re.addTo(ee);
      } else {
        const M = d.value.getContainer();
        u.value.replaceWith(M);
      }
    } catch (R) {
      Mu(R);
    }
  }), {
    appealsGeoData: t,
    delivery: n,
    isControlPanelEnabled: r,
    isInfoPanelDisplayed: o,
    isMapPopupDisplayed: s,
    isMapTooltipDisplayed: i,
    isSatelliteEnabled: a,
    isSidebarOpen: l,
    isZoomedOut: c,
    mapElementRef: u,
    mapRef: d,
    onAddToDelivery: b,
    onChangeTab: x,
    onClearDeliveryRoute: g,
    onCloseSidebar: y,
    onDeleteFromDelivery: E,
    onOpenRoutesTab: S,
    onResetAppeal: T,
    onToggleSatelliteLayer: _,
    onToggleSidebar: N,
    onToggleControlPanel: D,
    selectedAppeal: p,
    selectedDistrict: h,
    selectedSidebarTab: v,
    zoomThresholds: m
  };
}, qv = (e, t, n = "modelValue", r = (o) => o) => fe({
  get: () => e[n],
  set: (o) => t(`update:${n}`, r(o))
}), v6 = { class: "flex h-full w-full min-w-page flex-col items-stretch bg-slate-50" }, g6 = /* @__PURE__ */ De({
  __name: "App",
  setup(e) {
    const t = sa(), n = [
      {
        path: { name: "edit" },
        name: "Edit",
        action: t.editExistingAppeal
      },
      {
        path: { name: "create" },
        name: "New Appeal",
        action: t.createNewAppeal
      },
      {
        path: { name: "map" },
        name: "Map",
        action: () => {
        }
      }
    ], r = d6();
    return (o, s) => {
      const i = Wn("RouterView");
      return Q(), le("div", v6, [
        U(i, {
          username: A(r).user.name,
          "avatar-url": A(r).user.image,
          logout: A(r).logout,
          features: n
        }, null, 8, ["username", "avatar-url", "logout"])
      ]);
    };
  }
});
function Ap(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z",
      "clip-rule": "evenodd"
    })
  ]);
}
const y6 = ["href"], b6 = ["href", "disabled"], Ut = /* @__PURE__ */ De({
  __name: "AppLink",
  props: {
    custom: { type: Boolean },
    activeClass: {},
    exactActiveClass: {},
    ariaCurrentValue: {},
    to: {},
    replace: { type: Boolean },
    inactiveClass: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, { navigate: n, href: r, isActive: o } = $u(t), s = typeof t.to == "string" && t.to.startsWith("http");
    return (i, a) => A(s) ? (Q(), le("a", mi({ key: 0 }, i.$attrs, {
      href: A(r),
      target: "_blank"
    }), [
      Os(i.$slots, "default")
    ], 16, y6)) : (Q(), xn(A(Hv), mi({ key: 1 }, i.$props, { custom: "" }), {
      default: me(() => [
        C("a", mi(i.$attrs, {
          href: A(r),
          class: A(o) ? i.activeClass : i.inactiveClass,
          disabled: i.disabled || A(o),
          onClick: a[0] || (a[0] = //@ts-ignore
          (...l) => A(n) && A(n)(...l))
        }), [
          Os(i.$slots, "default")
        ], 16, b6)
      ]),
      _: 3
    }, 16));
  }
}), x6 = ["id", "name", "onInput"], E6 = ["onClick"], w6 = { class: "absolute top-full z-10 flex max-h-72 min-w-full flex-col items-stretch overflow-y-auto bg-white p-3 pr-6 shadow-md" }, S6 = ["onClick"], C6 = /* @__PURE__ */ De({
  __name: "ComboBox",
  props: {
    options: {
      type: Array,
      required: !0
    },
    semantic: { type: String, required: !0 },
    value: { type: String, default: "" },
    layout: { type: String, required: !0 },
    isValidated: { type: Boolean, default: !1 }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const n = t, r = e, o = fe({
      get: () => r.value,
      set: (S) => n("update:value", S)
    }), s = W(!1), i = W(!1), a = W(!1), l = W(), c = W(), u = W(), d = fe(() => {
      let T = 0;
      return i.value ? r.options : r.options.filter((D = "") => D.toLowerCase().includes(o.value.toLowerCase()) && T < 10 ? (T++, !0) : !1);
    }), f = () => !r.options.includes(o.value), p = () => s.value = !0, h = () => s.value = !1, v = () => s.value = !s.value, m = async () => {
      var S;
      await Pn(), (S = c.value) == null || S.focus();
    }, b = () => {
      p(), i.value = !1;
    }, x = async () => {
      const S = l.value === u.value;
      await Pn(), setTimeout(() => {
        r.isValidated && (a.value = f()), !S && l.value !== c.value && h(), l.value = null;
      }, 150);
    }, g = async () => {
      i.value = !0, await Pn(), v(), m();
    }, y = (S) => {
      l.value = S.target;
    }, E = (S) => {
      x(), o.value = S, r.isValidated && (a.value = f()), m();
    };
    return (S, T) => (Q(), le("div", {
      class: "relative",
      onFocusout: x
    }, [
      Hn(C("input", {
        id: e.semantic,
        ref_key: "autosuggest",
        ref: c,
        "onUpdate:modelValue": T[0] || (T[0] = (D) => o.value = D),
        name: e.semantic,
        class: be([
          e.layout,
          "form-input w-full",
          a.value ? "border-danger" : ""
        ]),
        type: "text",
        onInput: _t(b, ["prevent"]),
        onFocus: y
      }, null, 42, x6), [
        [Mo, o.value]
      ]),
      C("button", {
        ref_key: "button",
        ref: u,
        class: "btn btn-dropdown absolute bottom-0 right-0 top-0 w-10 rounded-l-none border-y border-r border-stone-400 bg-slate-200 bg-opacity-0 opacity-40 before:border-slate-600 hover:bg-opacity-100 hover:opacity-60",
        type: "button",
        tabindex: "-1",
        onFocus: y,
        onClick: _t(g, ["prevent"])
      }, null, 40, E6),
      Hn(C("ul", w6, [
        (Q(!0), le(Ye, null, tr(d.value, (D) => (Q(), le("li", { key: D }, [
          C("a", {
            class: "block py-2",
            href: "#",
            onClick: _t((_) => E(D), ["prevent"])
          }, at(D), 9, S6)
        ]))), 128))
      ], 512), [
        [Cr, s.value && d.value.length]
      ])
    ], 32));
  }
}), O6 = { class: "w-full px-micro pb-1 pt-3 micro:px-sm micro:py-4 sm:px-md" }, T6 = { class: "flex justify-center gap-2 micro:gap-4" }, N6 = ["tabindex", "onClick"], _6 = /* @__PURE__ */ De({
  __name: "TabsPanel",
  props: {
    tabs: {},
    activeTab: {},
    showAll: { type: Boolean }
  },
  emits: ["update:activeTab"],
  setup(e) {
    const n = e.showAll || W(!1);
    return (r, o) => (Q(), le("div", O6, [
      Hn(C("ul", T6, [
        (Q(!0), le(Ye, null, tr(r.tabs, (s) => (Q(), le("li", {
          key: s.number,
          class: "col-span-3"
        }, [
          C("button", {
            class: be([
              "rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base",
              s.number === r.activeTab ? "cursor-default bg-slate-200 text-sm child-[span]:text-slate-600" : "btn-link"
            ]),
            "aria-current": "page",
            type: "button",
            tabindex: s.number === r.activeTab ? "-1" : "0",
            onClick: _t((i) => r.$emit("update:activeTab", s.number), ["prevent"])
          }, [
            C("span", null, at(s.label), 1)
          ], 10, N6)
        ]))), 128))
      ], 512), [
        [Cr, !A(n)]
      ])
    ]));
  }
}), Ud = (e) => (Uh("data-v-4ce9855e"), e = e(), Hh(), e), A6 = { class: "grid grid-cols-12" }, D6 = {
  key: 0,
  class: "col-span-12 mb-4 md:mb-1"
}, P6 = /* @__PURE__ */ Ud(() => /* @__PURE__ */ C("h1", { class: "mb-1 mt-0 text-lg md:mb-2 md:mt-2 md:text-xl" }, " Create New Appeal ", -1)), R6 = /* @__PURE__ */ Ud(() => /* @__PURE__ */ C("span", { class: "border-b border-dotted border-slate-600 transition-colors" }, "Select Appeal", -1)), I6 = {
  class: "btn mt-px grid h-4 w-4 place-items-center rounded-full bg-amber-500 p-1 text-sm text-white md:h-5 md:w-5",
  tabindex: "-1"
}, L6 = {
  key: 1,
  class: "col-span-5 px-0 sm:col-span-6 md:col-span-12"
}, $6 = /* @__PURE__ */ Ud(() => /* @__PURE__ */ C("p", { class: "mb-1 pb-1 text-xs font-bold leading-none micro:text-sm" }, " Appeal: ", -1)), k6 = { class: "mb-2 mt-0 leading-none" }, M6 = {
  class: "btn mb-px grid h-8 w-8 place-items-center rounded-full bg-amber-500 p-1 text-sm text-white",
  tabindex: "-1"
}, j6 = { class: "pt-1 text-sm italic leading-none sm:text-base" }, V6 = { class: "col-span-7 text-xs leading-none micro:text-sm sm:col-span-6 sm:text-base md:col-span-12 md:mt-6" }, F6 = { class: "pr-0" }, B6 = { class: "pr-0" }, U6 = {
  key: 0,
  class: "card-footer mt-2 grid grid-cols-12 items-baseline gap-0.5 leading-none"
}, H6 = {
  key: 0,
  class: "my-2 mr-1 rounded-full bg-sky-800 px-2 pb-1 pt-0.5 text-xs tracking-wide text-white opacity-75 sm:text-sm"
}, z6 = { class: "col-span-4 px-1 text-sm micro:text-base sm:text-lg md:col-span-3 md:hidden lg:col-span-2" }, K6 = /* @__PURE__ */ De({
  __name: "AppealDataCard",
  props: {
    labeledColumns: {},
    isDataCardExpanded: { type: Boolean },
    isNewAppeal: { type: Boolean },
    onDataCardExpand: { type: Function },
    onOpenSelectForm: { type: Function }
  },
  emits: ["update:cardHeight"],
  setup(e, { emit: t }) {
    const n = e, r = [
      { semantic: "type", label: "Type" },
      { semantic: "status", label: "Status" },
      { semantic: "submitDate", label: "Date" },
      { semantic: "deadlineDate", label: "Deadline" }
    ], o = fe(
      () => r.filter(
        ({ semantic: l }) => {
          var c;
          return !!((c = n.labeledColumns[l]) != null && c.value);
        }
      )
    ), s = W(), i = t, a = () => {
      s.value && i("update:cardHeight", s.value.clientHeight);
    };
    return ht(a), Fs(a), (l, c) => {
      var u, d, f, p, h;
      return Q(), le("div", {
        ref_key: "dataCardRef",
        ref: s,
        class: be([
          "card rounded-none border-0 border-b bg-slate-100 pb-3 pt-4 md:rounded-none",
          l.isDataCardExpanded ? "fixed-top" : ""
        ])
      }, [
        C("div", A6, [
          l.isNewAppeal || !l.labeledColumns.appealId ? (Q(), le("div", D6, [
            P6,
            C("div", null, [
              U(A(Ut), {
                to: { name: "edit" },
                class: "flex items-center gap-2 text-xs text-slate-600 transition-colors focus:text-amber-500 child-[.btn]:hover:bg-opacity-70 child-[.btn]:focus:bg-opacity-70 hover-parent:child-[span]:border-amber-500 hover-parent:child-[span]:text-amber-500 md:text-sm",
                title: "Select Existing Appeal",
                onClick: l.onOpenSelectForm
              }, {
                default: me(() => [
                  R6,
                  C("button", I6, [
                    U(A(Ap), { class: "h-2 w-2 text-white md:h-3 md:w-3" })
                  ])
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])) : (Q(), le("div", L6, [
            $6,
            C("h4", k6, [
              U(A(Ut), {
                to: { name: "edit" },
                class: "flex items-center gap-2 text-4xl font-bold text-slate-600 hover:text-amber-500 focus:text-amber-500 child-[.btn]:hover:bg-opacity-70 child-[.btn]:focus:bg-opacity-70",
                title: "Обрати інший запит",
                onClick: l.onOpenSelectForm
              }, {
                default: me(() => [
                  ae(at(l.labeledColumns.appealId.value) + " ", 1),
                  C("button", M6, [
                    U(A(Ap), { class: "h-5 w-5 text-white" })
                  ])
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            C("p", j6, at((u = l.labeledColumns.managedBy) != null && u.value ? "Assigned to " + l.labeledColumns.managedBy.value : "Not Assigned"), 1)
          ])),
          C("div", V6, [
            (Q(!0), le(Ye, null, tr(o.value, ({ semantic: v, label: m }) => {
              var b;
              return Q(), le("div", {
                key: v,
                class: "mb-2 grid grid-cols-2"
              }, [
                C("div", F6, at(m), 1),
                C("div", B6, at(((b = l.labeledColumns[v]) == null ? void 0 : b.value) || "–"), 1)
              ]);
            }), 128))
          ])
        ]),
        (d = l.labeledColumns.text) != null && d.value || (f = l.labeledColumns.tag) != null && f.value ? (Q(), le("div", U6, [
          C("div", {
            class: be([
              "md;col-span-12 md:mt-5 md:h-full md:whitespace-pre-wrap md:text-base",
              l.isDataCardExpanded ? "max-vh-50 col-span-12 mt-1 break-words text-xs micro:text-sm" : "col-span-8 h-6 overflow-hidden text-ellipsis whitespace-nowrap text-xs micro:text-sm md:col-span-9 lg:col-span-10"
            ])
          }, at((p = l.labeledColumns.text) == null ? void 0 : p.value), 3),
          C("div", {
            class: be([
              "max-vh-50 col-span-12 py-1.5 text-sm sm:gap-1",
              l.isDataCardExpanded ? "flex" : "hidden md:flex"
            ])
          }, [
            (h = l.labeledColumns.tag) != null && h.value ? (Q(), le("span", H6, at(l.labeledColumns.tag.value), 1)) : Sr("", !0)
          ], 2),
          C("div", z6, [
            C("button", {
              type: "button",
              class: "btn-link",
              onClick: c[0] || (c[0] = _t(
                //@ts-ignore
                (...v) => l.onDataCardExpand && l.onDataCardExpand(...v),
                ["prevent"]
              ))
            }, [
              C("span", null, at(l.isDataCardExpanded ? "Collapse" : "Expand"), 1)
            ])
          ])
        ])) : Sr("", !0)
      ], 2);
    };
  }
});
const Hd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, G6 = /* @__PURE__ */ Hd(K6, [["__scopeId", "data-v-4ce9855e"]]), Z6 = ["disabled"], W6 = { class: "mr-4 flex items-center md:mr-5" }, Y6 = /* @__PURE__ */ C("span", {
  class: "loader",
  role: "status",
  "aria-hidden": "true"
}, null, -1), X6 = [
  Y6
], J6 = ["disabled"], Q6 = /* @__PURE__ */ De({
  __name: "FormButtons",
  props: {
    isFixed: {
      type: Boolean,
      default: !0
    },
    isPristine: {
      type: Boolean,
      required: !0
    },
    isLoading: {
      type: Boolean,
      required: !0
    }
  },
  setup(e) {
    const { onSaveAppealData: t, onRejectAppealData: n } = sa();
    return (r, o) => (Q(), le("div", {
      class: be([
        "border-t border-slate-300 bg-slate-200 sm:rounded-t-md",
        e.isFixed ? "container sticky bottom-0" : ""
      ])
    }, [
      C("div", {
        class: be([
          "mx-0 mt-0 flex justify-between gap-10 px-micro sm:px-sm",
          e.isFixed ? "py-2.5" : "py-3"
        ])
      }, [
        C("button", {
          type: "button",
          class: "btn-primary btn me-2 transition-all sm:py-2 sm:text-lg",
          disabled: e.isPristine || e.isLoading,
          onClick: o[0] || (o[0] = _t(
            //@ts-ignore
            (...s) => A(t) && A(t)(...s),
            ["prevent"]
          ))
        }, [
          Hn(C("div", W6, X6, 512), [
            [Cr, e.isLoading]
          ]),
          ae(" Save Appeal ")
        ], 8, Z6),
        C("button", {
          disabled: e.isPristine || e.isLoading,
          type: "button",
          class: "btn btn-link ml-2 px-1 text-sm micro:text-base sm:text-lg",
          onClick: o[1] || (o[1] = _t(
            () => A(n) && A(n)(e.isPristine),
            ["prevent"]
          ))
        }, " Discard ", 8, J6)
      ], 2)
    ], 2));
  }
}), q6 = { class: "mb-1 grid grid-cols-12 items-center py-1 lg:py-1.5" }, e3 = ["for"], t3 = ["id", "disabled", "name", "value"], n3 = ["id", "type", "disabled", "name", "value"], r3 = /* @__PURE__ */ De({
  __name: "FormField",
  props: {
    value: { type: [String], required: !0, default: "" },
    layout: {
      type: String,
      default: "full-width-input"
    },
    semantic: { type: String, required: !0 },
    name: { type: String, required: !0 },
    type: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    tabs: {
      type: Array,
      default: () => []
    },
    showAll: { type: Boolean, default: !1 },
    options: {
      type: Array,
      default: () => []
    },
    isValidated: { type: Boolean, default: !1 },
    isRequired: { type: Boolean, default: !1 },
    isDisabled: { type: Boolean, default: !1 },
    isNewAppeal: { type: Boolean, required: !0 },
    activeTab: { type: Number, required: !0 }
  },
  setup(e, { emit: t }) {
    const n = t, r = e, o = fe(() => r.layout === "textarea" || r.layout === "appeal-text"), s = fe(() => o.value || r.layout.includes("full-width")), i = fe(() => r.layout.includes("select")), a = W(), { onModifyInput: l } = jd(), c = qv(
      r,
      n,
      "value",
      (v) => (l(), v)
    ), u = async () => {
      if (a.value) {
        a.value.style.height = "auto", await Pn();
        const v = 500, m = a.value.scrollHeight + 10, b = m < v ? m : v;
        a.value.style.height = b + "px";
      }
    }, { activeTab: d, showAll: f } = ro(r);
    ht(u), Lt([c, d, f], u);
    const p = (v) => {
      const m = v.target;
      c.value = m.value;
    }, h = (v) => {
      c.value = v;
    };
    return (v, m) => Hn((Q(), le("div", q6, [
      C("label", {
        class: be([
          "lg:text-lg",
          s.value ? "col-span-12 mb-1" : "col-span-5 micro:col-span-4 sm:col-span-3 md:col-span-4"
        ]),
        for: e.semantic
      }, at(e.name) + ": ", 11, e3),
      C("div", {
        class: be([
          "grid",
          s.value ? "col-span-12" : "col-span-7 micro:col-span-8 sm:col-span-9 md:col-span-8"
        ])
      }, [
        o.value ? (Q(), le("textarea", {
          key: 0,
          id: e.semantic,
          ref_key: "textareaRef",
          ref: a,
          type: "text",
          disabled: e.isDisabled && !e.isNewAppeal,
          name: e.semantic,
          class: be([e.layout, "form-input w-full"]),
          value: A(c),
          onInput: p
        }, null, 42, t3)) : i.value ? (Q(), xn(A(C6), {
          key: 1,
          disabled: e.isDisabled && !e.isNewAppeal,
          semantic: e.semantic,
          options: e.options,
          layout: e.layout,
          "is-validated": e.isValidated,
          value: A(c),
          "onUpdate:value": h
        }, null, 8, ["disabled", "semantic", "options", "layout", "is-validated", "value"])) : (Q(), le("input", {
          key: 2,
          id: e.semantic,
          type: e.type || "text",
          disabled: e.isDisabled && (e.semantic === "appealId" || !e.isNewAppeal),
          name: e.semantic,
          class: be([e.layout, "form-input w-full"]),
          value: A(c),
          onInput: p
        }, null, 42, n3))
      ], 2)
    ], 512)), [
      [Cr, e.tabs.includes(A(d)) || A(f)]
    ]);
  }
}), o3 = ["onKeyup"], s3 = { class: "flex flex-col items-stretch px-micro py-2 pt-3 micro:px-sm sm:px-md" }, i3 = { class: "row mb-1 mt-1 p-2 pb-4" }, a3 = { class: "pb-2 text-center sm:pb-4" }, l3 = /* @__PURE__ */ De({
  __name: "EditAppealDataForm",
  props: {
    spreadsheetData: {
      type: Object,
      default: () => ({ columns: [] })
    },
    isSaving: {
      type: Boolean,
      required: !0
    },
    isNewAppeal: {
      type: Boolean,
      default: !0
    },
    isPristine: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, n = W(0), r = W(!1), { onSaveAppealData: o } = sa(), s = () => {
      t.isPristine || o();
    };
    return (i, a) => (Q(), le("form", {
      class: "tab-content pt-4",
      novalidate: "",
      onKeyup: Rd(_t(s, ["ctrl"]), ["enter"])
    }, [
      U(A(_6), {
        activeTab: n.value,
        "onUpdate:activeTab": a[0] || (a[0] = (l) => n.value = l),
        tabs: A(v5),
        "show-all": r.value
      }, null, 8, ["activeTab", "tabs", "show-all"]),
      C("div", s3, [
        (Q(!0), le(Ye, null, tr(e.spreadsheetData.columnsArray, (l) => (Q(), le("div", {
          key: l.semantic
        }, [
          U(r3, {
            value: l.value,
            "onUpdate:value": (c) => l.value = c,
            semantic: l.semantic,
            layout: l.layout,
            name: l.name,
            type: l.type,
            "show-all": r.value,
            "active-tab": n.value,
            tabs: l.tabs,
            options: l.options,
            "is-new-appeal": e.isNewAppeal,
            "is-validated": l.isValidated,
            "is-required": l.isRequired,
            "is-disabled": l.isDisabled,
            placeholder: ""
          }, null, 8, ["value", "onUpdate:value", "semantic", "layout", "name", "type", "show-all", "active-tab", "tabs", "options", "is-new-appeal", "is-validated", "is-required", "is-disabled"])
        ]))), 128))
      ]),
      C("div", i3, [
        C("div", a3, [
          C("a", {
            class: "my-4 border-b border-dotted border-slate-700 pb-px text-sm hover:border-primary-800 focus:ring-0 sm:my-6 sm:text-base",
            href: "#",
            onClick: a[1] || (a[1] = _t(() => r.value = !r.value, ["prevent"]))
          }, at(r.value ? "Collapse" : "Show All"), 1)
        ])
      ]),
      U(Q6, {
        "is-pristine": e.isPristine,
        "is-loading": e.isSaving
      }, null, 8, ["is-pristine", "is-loading"])
    ], 40, o3));
  }
}), c3 = { id: "select-form-long" }, u3 = { class: "mb-2 pb-2" }, d3 = { class: "flex w-full flex-col gap-1 sm:gap-2" }, f3 = /* @__PURE__ */ C("label", {
  class: "pr-1 text-slate-400 sm:text-lg",
  for: "select-serial-number"
}, " Serial number: ", -1), p3 = {
  key: 0,
  class: "invalid-feedback"
}, h3 = { class: "flex flex-col gap-1 pt-1 micro:flex-row micro:items-center micro:justify-between" }, m3 = ["disabled", "onClick"], v3 = { class: "mr-4 flex items-center md:mr-5" }, g3 = /* @__PURE__ */ C("span", {
  class: "loader",
  role: "status",
  "aria-hidden": "true"
}, null, -1), y3 = [
  g3
], b3 = /* @__PURE__ */ C("span", { class: "link-default border-b border-dotted border-slate-900 border-opacity-90 hover:border-primary-500" }, " Back ", -1), x3 = [
  b3
], E3 = ["onClick"], w3 = {
  class: "link-default border-b border-dotted border-slate-900 border-opacity-90 hover:border-primary-500",
  role: "status",
  "aria-hidden": "true"
}, S3 = /* @__PURE__ */ C("span", { class: "link-default border-b border-dotted border-slate-900 border-opacity-90 hover:border-primary-500" }, " Create New Appeal ", -1), C3 = /* @__PURE__ */ De({
  __name: "SelectSingleAppealForm",
  props: {
    isAppealOpen: {
      type: Boolean,
      required: !0
    },
    isLoading: {
      type: Boolean,
      required: !0
    },
    isCreating: {
      type: Boolean,
      required: !0
    },
    selectedAppealId: {
      type: String,
      required: !0
    },
    currentAppealId: {
      type: String,
      default: ""
    },
    selectError: {
      type: Object,
      default: () => ({})
    },
    onReject: {
      type: Function,
      default: () => () => {
      }
    },
    onConfirm: {
      type: Function,
      default: () => () => {
      }
    },
    onCreate: {
      type: Function,
      default: () => () => {
      }
    }
  },
  setup(e, { emit: t }) {
    const n = t, r = e, o = qv(
      r,
      n,
      "selectedAppealId",
      (c) => String(c)
    ), s = fe(
      () => !r.selectedAppealId || r.isLoading || r.isCreating || r.isAppealOpen && r.selectedAppealId === r.currentAppealId
    ), i = W(!0), a = () => r.onConfirm(o.value), l = () => r.onCreate();
    return (c, u) => (Q(), le("div", null, [
      C("form", c3, [
        C("div", u3, [
          C("div", d3, [
            f3,
            Hn(C("input", {
              id: "select-serial-number",
              "onUpdate:modelValue": u[0] || (u[0] = (d) => rt(o) ? o.value = d : null),
              name: "select-serial-number",
              class: be([
                e.selectError.isError && "is-invalid",
                "w-full rounded-sm sm:text-xl"
              ]),
              type: "number",
              role: "searchbox"
            }, null, 2), [
              [
                Mo,
                A(o),
                void 0,
                { number: !0 }
              ]
            ]),
            e.selectError.isError ? (Q(), le("div", p3, at(e.selectError.message), 1)) : Sr("", !0)
          ])
        ]),
        C("nav", h3, [
          C("button", {
            type: "submit",
            class: "btn w-full bg-primary-800 px-6 text-white enabled:hover:shadow micro:w-auto sm:px-8 sm:py-3 sm:text-xl",
            disabled: s.value,
            onClick: _t(a, ["prevent"])
          }, [
            Hn(C("div", v3, y3, 512), [
              [Cr, e.isLoading]
            ]),
            ae(" Edit Appeal Details ")
          ], 8, m3),
          e.isAppealOpen ? (Q(), le("button", {
            key: 0,
            type: "button",
            class: "text-muted btn btn-link me-1 ms-2 px-0 sm:text-lg",
            onClick: u[1] || (u[1] = _t(
              //@ts-ignore
              (...d) => e.onReject && e.onReject(...d),
              ["prevent"]
            ))
          }, x3)) : i.value ? (Q(), le("button", {
            key: 1,
            type: "button",
            class: "btn me-1 ms-2 px-0 micro:w-auto sm:px-8 sm:py-3 sm:text-xl",
            onClick: _t(l, ["prevent"])
          }, [
            Hn(C("span", w3, null, 512), [
              [Cr, e.isCreating]
            ]),
            S3
          ], 8, E3)) : Sr("", !0)
        ])
      ])
    ]));
  }
}), O3 = { class: "container flex flex-grow flex-col items-center p-0 sm:px-4 sm:pt-4" }, T3 = { class: "card" }, N3 = /* @__PURE__ */ C("h1", { class: "tracking-snug mb-4 mt-4" }, "Select an Appeal", -1), _3 = { class: "w-full max-w-5xl sm:-mt-7" }, A3 = {
  key: 0,
  class: "w-full md:grid md:grid-cols-12"
}, Dp = /* @__PURE__ */ De({
  __name: "AppealsNavigatorPage",
  setup(e) {
    const t = jd(), { onOpenSelectForm: n, onCardExpand: r, onCloseSelectForm: o } = t, {
      isLoading: s,
      isCreating: i,
      isSaving: a,
      isPristine: l,
      isAppealEditorOpen: c,
      isSelectFormOpen: u,
      isDataCardExpanded: d
    } = ap(t), f = sa(), { onSelectAppeal: p, onCreateAppeal: h } = f, { currentAppealId: v, selectedAppealId: m, isNewAppeal: b } = ap(f);
    return (x, g) => (Q(), le("div", O3, [
      Hn(C("div", T3, [
        N3,
        U(A(C3), {
          selectedAppealId: A(m),
          "onUpdate:selectedAppealId": g[0] || (g[0] = (y) => rt(m) ? m.value = y : null),
          "current-appeal-id": A(v),
          "is-loading": A(s),
          "is-creating": A(i),
          "is-appeal-open": A(c),
          "on-reject": A(o),
          "on-confirm": A(p),
          "on-create": A(h),
          "select-error": A(t).errors.selectError
        }, null, 8, ["selectedAppealId", "current-appeal-id", "is-loading", "is-creating", "is-appeal-open", "on-reject", "on-confirm", "on-create", "select-error"])
      ], 512), [
        [Cr, A(u)]
      ]),
      C("div", _3, [
        A(u) ? Sr("", !0) : (Q(), le("div", A3, [
          U(A(G6), {
            class: "md:col-span-5",
            "labeled-columns": A(f).labeledColumns,
            "is-data-card-expanded": A(d),
            "on-data-card-expand": A(r),
            "on-open-select-form": A(n)
          }, null, 8, ["labeled-columns", "is-data-card-expanded", "on-data-card-expand", "on-open-select-form"]),
          U(A(l3), {
            class: "md:col-span-7",
            "spreadsheet-data": A(f),
            "current-serial-number": A(v),
            "is-pristine": A(l),
            "is-loading": A(s),
            "is-creating": A(i),
            "is-saving": A(a),
            "is-new-appeal": A(b),
            onSelectSerialNumber: g[1] || (g[1] = (y) => A(p)(y))
          }, null, 8, ["spreadsheet-data", "current-serial-number", "is-pristine", "is-loading", "is-creating", "is-saving", "is-new-appeal"])
        ]))
      ])
    ]));
  }
});
function Vt(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Vt), r;
}
var fo = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(fo || {}), Gr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Gr || {});
function Gt({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var s;
  let i = tg(r, n), a = Object.assign(o, { props: i });
  if (e || t & 2 && i.static)
    return Rc(a);
  if (t & 1) {
    let l = (s = i.unmount) == null || s ? 0 : 1;
    return Vt(l, { 0() {
      return null;
    }, 1() {
      return Rc({ ...o, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Rc(a);
}
function Rc({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var s, i;
  let { as: a, ...l } = Jl(e, ["unmount", "static"]), c = (s = n.default) == null ? void 0 : s.call(n, r), u = {};
  if (r) {
    let d = !1, f = [];
    for (let [p, h] of Object.entries(r))
      typeof h == "boolean" && (d = !0), h === !0 && f.push(p);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (a === "template") {
    if (c = eg(c ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = c ?? [];
      if (!P3(d) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((v) => v.trim()).filter((v, m, b) => b.indexOf(v) === m).sort((v, m) => v.localeCompare(m)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let p = tg((i = d.props) != null ? i : {}, l), h = En(d, p);
      for (let v in p)
        v.startsWith("on") && (h.props || (h.props = {}), h.props[v] = p[v]);
      return h;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return bt(a, Object.assign({}, l, u), { default: () => c });
}
function eg(e) {
  return e.flatMap((t) => t.type === Ye ? eg(t.children) : [t]);
}
function tg(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...s) {
      let i = n[r];
      for (let a of i) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        a(o, ...s);
      }
    } });
  return t;
}
function D3(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Jl(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function P3(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let R3 = 0;
function I3() {
  return ++R3;
}
function In() {
  return I3();
}
var yt = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(yt || {});
function ge(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let ng = Symbol("Context");
var Ht = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ht || {});
function L3() {
  return Ql() !== null;
}
function Ql() {
  return mt(ng, null);
}
function zd(e) {
  Mt(ng, e);
}
function Pp(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function ql(e, t) {
  let n = W(Pp(e.value.type, e.value.as));
  return ht(() => {
    n.value = Pp(e.value.type, e.value.as);
  }), Qt(() => {
    var r;
    n.value || ge(t) && ge(t) instanceof HTMLButtonElement && !((r = ge(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var $3 = Object.defineProperty, k3 = (e, t, n) => t in e ? $3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rp = (e, t, n) => (k3(e, typeof t != "symbol" ? t + "" : t, n), n);
class M3 {
  constructor() {
    Rp(this, "current", this.detect()), Rp(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let ia = new M3();
function Bs(e) {
  if (ia.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ge(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let ju = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var kt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(kt || {}), Zr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Zr || {}), j3 = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(j3 || {});
function ec(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ju)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Kd = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Kd || {});
function rg(e, t = 0) {
  var n;
  return e === ((n = Bs(e)) == null ? void 0 : n.body) ? !1 : Vt(t, { 0() {
    return e.matches(ju);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(ju))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var V3 = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(V3 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let F3 = ["textarea", "input"].join(",");
function B3(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, F3)) != null ? n : !1;
}
function is(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), s = t(r);
    if (o === null || s === null)
      return 0;
    let i = o.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function yn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var s;
  let i = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, a = Array.isArray(e) ? n ? is(e) : e : ec(e);
  o.length > 0 && a.length > 1 && (a = a.filter((h) => !o.includes(h))), r = r ?? i.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(r)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = a.length, p;
  do {
    if (d >= f || d + f <= 0)
      return 0;
    let h = c + d;
    if (t & 16)
      h = (h + f) % f;
    else {
      if (h < 0)
        return 3;
      if (h >= f)
        return 1;
    }
    p = a[h], p == null || p.focus(u), d += l;
  } while (p !== i.activeElement);
  return t & 6 && B3(p) && p.select(), 2;
}
function Na(e, t, n) {
  ia.isServer || Qt((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function og(e, t, n) {
  ia.isServer || Qt((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function U3(e, t, n = fe(() => !0)) {
  function r(s, i) {
    if (!n.value || s.defaultPrevented)
      return;
    let a = i(s);
    if (a === null || !a.getRootNode().contains(a))
      return;
    let l = function c(u) {
      return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let c of l) {
      if (c === null)
        continue;
      let u = c instanceof HTMLElement ? c : ge(c);
      if (u != null && u.contains(a) || s.composed && s.composedPath().includes(u))
        return;
    }
    return !rg(a, Kd.Loose) && a.tabIndex !== -1 && s.preventDefault(), t(s, a);
  }
  let o = W(null);
  Na("pointerdown", (s) => {
    var i, a;
    n.value && (o.value = ((a = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : a[0]) || s.target);
  }, !0), Na("mousedown", (s) => {
    var i, a;
    n.value && (o.value = ((a = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : a[0]) || s.target);
  }, !0), Na("click", (s) => {
    o.value && (r(s, () => o.value), o.value = null);
  }, !0), Na("touchend", (s) => r(s, () => s.target instanceof HTMLElement ? s.target : null), !0), og("blur", (s) => r(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Uo = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Uo || {});
let Ho = /* @__PURE__ */ De({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...o } = e, s = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Gt({ ourProps: s, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function H3(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let o of r.elements)
      if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
        o.click();
        return;
      }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
function z3(e, t, n) {
  let r = W(n == null ? void 0 : n.value), o = fe(() => e.value !== void 0);
  return [fe(() => o.value ? e.value : r.value), function(s) {
    return o.value || (r.value = s), t == null ? void 0 : t(s);
  }];
}
function sg(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Gd() {
  let e = [], t = { addEventListener(n, r, o, s) {
    return n.addEventListener(r, o, s), t.add(() => n.removeEventListener(r, o, s));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return sg(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let s = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: s });
    });
  }, group(n) {
    let r = Gd();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
var gr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(gr || {});
function ig() {
  let e = W(0);
  return og("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function K3(e, t, n, r) {
  ia.isServer || Qt((o) => {
    e = e ?? window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
let Ip = Symbol("PortalParentContext");
function G3() {
  let e = mt(Ip, null), t = W([]);
  function n(s) {
    return t.value.push(s), e && e.register(s), () => r(s);
  }
  function r(s) {
    let i = t.value.indexOf(s);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(s);
  }
  let o = { register: n, unregister: r, portals: t };
  return [t, /* @__PURE__ */ De({ name: "PortalWrapper", setup(s, { slots: i }) {
    return Mt(Ip, o), () => {
      var a;
      return (a = i.default) == null ? void 0 : a.call(i);
    };
  } })];
}
let Z3 = Symbol("DescriptionContext");
function W3({ slot: e = W({}), name: t = "Description", props: n = {} } = {}) {
  let r = W([]);
  function o(s) {
    return r.value.push(s), () => {
      let i = r.value.indexOf(s);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return Mt(Z3, { register: o, slot: e, name: t, props: n }), fe(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
function Y3({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = W(null), o = Bs(r);
  function s() {
    var i;
    let a = [];
    for (let l of e)
      l !== null && (l instanceof HTMLElement ? a.push(l) : "value" in l && l.value instanceof HTMLElement && a.push(l.value));
    if (t != null && t.value)
      for (let l of t.value)
        a.push(l);
    for (let l of (i = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? i : [])
      l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(ge(r)) || a.some((c) => l.contains(c)) || a.push(l));
    return a;
  }
  return { resolveContainers: s, contains(i) {
    return s().some((a) => a.contains(i));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return n != null ? null : bt(Ho, { features: Uo.Hidden, ref: r });
  } };
}
var X3 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(X3 || {});
let ag = Symbol("DisclosureContext");
function Zd(e) {
  let t = mt(ag, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Zd), n;
  }
  return t;
}
let lg = Symbol("DisclosurePanelContext");
function J3() {
  return mt(lg, null);
}
let Q3 = /* @__PURE__ */ De({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let r = W(e.defaultOpen ? 0 : 1), o = W(null), s = W(null), i = { buttonId: W(`headlessui-disclosure-button-${In()}`), panelId: W(`headlessui-disclosure-panel-${In()}`), disclosureState: r, panel: o, button: s, toggleDisclosure() {
    r.value = Vt(r.value, { 0: 1, 1: 0 });
  }, closeDisclosure() {
    r.value !== 1 && (r.value = 1);
  }, close(a) {
    i.closeDisclosure();
    let l = (() => a ? a instanceof HTMLElement ? a : a.value instanceof HTMLElement ? ge(a) : ge(i.button) : ge(i.button))();
    l == null || l.focus();
  } };
  return Mt(ag, i), zd(fe(() => Vt(r.value, { 0: Ht.Open, 1: Ht.Closed }))), () => {
    let { defaultOpen: a, ...l } = e, c = { open: r.value === 0, close: i.close };
    return Gt({ theirProps: l, ourProps: {}, slot: c, slots: t, attrs: n, name: "Disclosure" });
  };
} }), q3 = /* @__PURE__ */ De({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Zd("DisclosureButton"), s = J3(), i = fe(() => s === null ? !1 : s.value === o.panelId.value);
  ht(() => {
    i.value || e.id !== null && (o.buttonId.value = e.id);
  }), Sn(() => {
    i.value || (o.buttonId.value = null);
  });
  let a = W(null);
  r({ el: a, $el: a }), i.value || Qt(() => {
    o.button.value = a.value;
  });
  let l = ql(fe(() => ({ as: e.as, type: t.type })), a);
  function c() {
    var f;
    e.disabled || (i.value ? (o.toggleDisclosure(), (f = ge(o.button)) == null || f.focus()) : o.toggleDisclosure());
  }
  function u(f) {
    var p;
    if (!e.disabled)
      if (i.value)
        switch (f.key) {
          case yt.Space:
          case yt.Enter:
            f.preventDefault(), f.stopPropagation(), o.toggleDisclosure(), (p = ge(o.button)) == null || p.focus();
            break;
        }
      else
        switch (f.key) {
          case yt.Space:
          case yt.Enter:
            f.preventDefault(), f.stopPropagation(), o.toggleDisclosure();
            break;
        }
  }
  function d(f) {
    switch (f.key) {
      case yt.Space:
        f.preventDefault();
        break;
    }
  }
  return () => {
    var f;
    let p = { open: o.disclosureState.value === 0 }, { id: h, ...v } = e, m = i.value ? { ref: a, type: l.value, onClick: c, onKeydown: u } : { id: (f = o.buttonId.value) != null ? f : h, ref: a, type: l.value, "aria-expanded": o.disclosureState.value === 0, "aria-controls": o.disclosureState.value === 0 || ge(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: c, onKeydown: u, onKeyup: d };
    return Gt({ ourProps: m, theirProps: v, slot: p, attrs: t, slots: n, name: "DisclosureButton" });
  };
} }), ex = /* @__PURE__ */ De({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Zd("DisclosurePanel");
  ht(() => {
    e.id !== null && (o.panelId.value = e.id);
  }), Sn(() => {
    o.panelId.value = null;
  }), r({ el: o.panel, $el: o.panel }), Mt(lg, o.panelId);
  let s = Ql(), i = fe(() => s !== null ? (s.value & Ht.Open) === Ht.Open : o.disclosureState.value === 0);
  return () => {
    var a;
    let l = { open: o.disclosureState.value === 0, close: o.close }, { id: c, ...u } = e, d = { id: (a = o.panelId.value) != null ? a : c, ref: o.panel };
    return Gt({ ourProps: d, theirProps: u, slot: l, attrs: t, slots: n, features: fo.RenderStrategy | fo.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var tx = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(tx || {});
let cg = Symbol("PopoverContext");
function Wd(e) {
  let t = mt(cg, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${fg.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Wd), n;
  }
  return t;
}
let nx = Symbol("PopoverGroupContext");
function ug() {
  return mt(nx, null);
}
let dg = Symbol("PopoverPanelContext");
function rx() {
  return mt(dg, null);
}
let fg = /* @__PURE__ */ De({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n, expose: r }) {
  var o;
  let s = W(null);
  r({ el: s, $el: s });
  let i = W(1), a = W(null), l = W(null), c = W(null), u = W(null), d = fe(() => Bs(s)), f = fe(() => {
    var E, S;
    if (!ge(a) || !ge(u))
      return !1;
    for (let $ of document.querySelectorAll("body > *"))
      if (Number($ == null ? void 0 : $.contains(ge(a))) ^ Number($ == null ? void 0 : $.contains(ge(u))))
        return !0;
    let T = ec(), D = T.indexOf(ge(a)), _ = (D + T.length - 1) % T.length, N = (D + 1) % T.length, R = T[_], M = T[N];
    return !((E = ge(u)) != null && E.contains(R)) && !((S = ge(u)) != null && S.contains(M));
  }), p = { popoverState: i, buttonId: W(null), panelId: W(null), panel: u, button: a, isPortalled: f, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    i.value = Vt(i.value, { 0: 1, 1: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(E) {
    p.closePopover();
    let S = (() => E ? E instanceof HTMLElement ? E : E.value instanceof HTMLElement ? ge(E) : ge(p.button) : ge(p.button))();
    S == null || S.focus();
  } };
  Mt(cg, p), zd(fe(() => Vt(i.value, { 0: Ht.Open, 1: Ht.Closed })));
  let h = { buttonId: p.buttonId, panelId: p.panelId, close() {
    p.closePopover();
  } }, v = ug(), m = v == null ? void 0 : v.registerPopover, [b, x] = G3(), g = Y3({ mainTreeNodeRef: v == null ? void 0 : v.mainTreeNodeRef, portals: b, defaultContainers: [a, u] });
  function y() {
    var E, S, T, D;
    return (D = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? D : ((E = d.value) == null ? void 0 : E.activeElement) && (((S = ge(a)) == null ? void 0 : S.contains(d.value.activeElement)) || ((T = ge(u)) == null ? void 0 : T.contains(d.value.activeElement)));
  }
  return Qt(() => m == null ? void 0 : m(h)), K3((o = d.value) == null ? void 0 : o.defaultView, "focus", (E) => {
    var S, T;
    E.target !== window && E.target instanceof HTMLElement && i.value === 0 && (y() || a && u && (g.contains(E.target) || (S = ge(p.beforePanelSentinel)) != null && S.contains(E.target) || (T = ge(p.afterPanelSentinel)) != null && T.contains(E.target) || p.closePopover()));
  }, !0), U3(g.resolveContainers, (E, S) => {
    var T;
    p.closePopover(), rg(S, Kd.Loose) || (E.preventDefault(), (T = ge(a)) == null || T.focus());
  }, fe(() => i.value === 0)), () => {
    let E = { open: i.value === 0, close: p.close };
    return bt(Ye, [bt(x, {}, () => Gt({ theirProps: { ...e, ...n }, ourProps: { ref: s }, slot: E, slots: t, attrs: n, name: "Popover" })), bt(g.MainTreeNode)]);
  };
} }), ox = /* @__PURE__ */ De({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${In()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Wd("PopoverButton"), s = fe(() => Bs(o.button));
  r({ el: o.button, $el: o.button }), ht(() => {
    o.buttonId.value = e.id;
  }), Sn(() => {
    o.buttonId.value = null;
  });
  let i = ug(), a = i == null ? void 0 : i.closeOthers, l = rx(), c = fe(() => l === null ? !1 : l.value === o.panelId.value), u = W(null), d = `headlessui-focus-sentinel-${In()}`;
  c.value || Qt(() => {
    o.button.value = u.value;
  });
  let f = ql(fe(() => ({ as: e.as, type: t.type })), u);
  function p(g) {
    var y, E, S, T, D;
    if (c.value) {
      if (o.popoverState.value === 1)
        return;
      switch (g.key) {
        case yt.Space:
        case yt.Enter:
          g.preventDefault(), (E = (y = g.target).click) == null || E.call(y), o.closePopover(), (S = ge(o.button)) == null || S.focus();
          break;
      }
    } else
      switch (g.key) {
        case yt.Space:
        case yt.Enter:
          g.preventDefault(), g.stopPropagation(), o.popoverState.value === 1 && (a == null || a(o.buttonId.value)), o.togglePopover();
          break;
        case yt.Escape:
          if (o.popoverState.value !== 0)
            return a == null ? void 0 : a(o.buttonId.value);
          if (!ge(o.button) || (T = s.value) != null && T.activeElement && !((D = ge(o.button)) != null && D.contains(s.value.activeElement)))
            return;
          g.preventDefault(), g.stopPropagation(), o.closePopover();
          break;
      }
  }
  function h(g) {
    c.value || g.key === yt.Space && g.preventDefault();
  }
  function v(g) {
    var y, E;
    e.disabled || (c.value ? (o.closePopover(), (y = ge(o.button)) == null || y.focus()) : (g.preventDefault(), g.stopPropagation(), o.popoverState.value === 1 && (a == null || a(o.buttonId.value)), o.togglePopover(), (E = ge(o.button)) == null || E.focus()));
  }
  function m(g) {
    g.preventDefault(), g.stopPropagation();
  }
  let b = ig();
  function x() {
    let g = ge(o.panel);
    if (!g)
      return;
    function y() {
      Vt(b.value, { [gr.Forwards]: () => yn(g, kt.First), [gr.Backwards]: () => yn(g, kt.Last) }) === Zr.Error && yn(ec().filter((E) => E.dataset.headlessuiFocusGuard !== "true"), Vt(b.value, { [gr.Forwards]: kt.Next, [gr.Backwards]: kt.Previous }), { relativeTo: ge(o.button) });
    }
    y();
  }
  return () => {
    let g = o.popoverState.value === 0, y = { open: g }, { id: E, ...S } = e, T = c.value ? { ref: u, type: f.value, onKeydown: p, onClick: v } : { ref: u, id: E, type: f.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": ge(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: p, onKeyup: h, onClick: v, onMousedown: m };
    return bt(Ye, [Gt({ ourProps: T, theirProps: { ...t, ...S }, slot: y, attrs: t, slots: n, name: "PopoverButton" }), g && !c.value && o.isPortalled.value && bt(Ho, { id: d, features: Uo.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })]);
  };
} }), sx = /* @__PURE__ */ De({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${In()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let { focus: o } = e, s = Wd("PopoverPanel"), i = fe(() => Bs(s.panel)), a = `headlessui-focus-sentinel-before-${In()}`, l = `headlessui-focus-sentinel-after-${In()}`;
  r({ el: s.panel, $el: s.panel }), ht(() => {
    s.panelId.value = e.id;
  }), Sn(() => {
    s.panelId.value = null;
  }), Mt(dg, s.panelId), Qt(() => {
    var m, b;
    if (!o || s.popoverState.value !== 0 || !s.panel)
      return;
    let x = (m = i.value) == null ? void 0 : m.activeElement;
    (b = ge(s.panel)) != null && b.contains(x) || yn(ge(s.panel), kt.First);
  });
  let c = Ql(), u = fe(() => c !== null ? (c.value & Ht.Open) === Ht.Open : s.popoverState.value === 0);
  function d(m) {
    var b, x;
    switch (m.key) {
      case yt.Escape:
        if (s.popoverState.value !== 0 || !ge(s.panel) || i.value && !((b = ge(s.panel)) != null && b.contains(i.value.activeElement)))
          return;
        m.preventDefault(), m.stopPropagation(), s.closePopover(), (x = ge(s.button)) == null || x.focus();
        break;
    }
  }
  function f(m) {
    var b, x, g, y, E;
    let S = m.relatedTarget;
    S && ge(s.panel) && ((b = ge(s.panel)) != null && b.contains(S) || (s.closePopover(), ((g = (x = ge(s.beforePanelSentinel)) == null ? void 0 : x.contains) != null && g.call(x, S) || (E = (y = ge(s.afterPanelSentinel)) == null ? void 0 : y.contains) != null && E.call(y, S)) && S.focus({ preventScroll: !0 })));
  }
  let p = ig();
  function h() {
    let m = ge(s.panel);
    if (!m)
      return;
    function b() {
      Vt(p.value, { [gr.Forwards]: () => {
        var x;
        yn(m, kt.First) === Zr.Error && ((x = ge(s.afterPanelSentinel)) == null || x.focus());
      }, [gr.Backwards]: () => {
        var x;
        (x = ge(s.button)) == null || x.focus({ preventScroll: !0 });
      } });
    }
    b();
  }
  function v() {
    let m = ge(s.panel);
    if (!m)
      return;
    function b() {
      Vt(p.value, { [gr.Forwards]: () => {
        let x = ge(s.button), g = ge(s.panel);
        if (!x)
          return;
        let y = ec(), E = y.indexOf(x), S = y.slice(0, E + 1), T = [...y.slice(E + 1), ...S];
        for (let D of T.slice())
          if (D.dataset.headlessuiFocusGuard === "true" || g != null && g.contains(D)) {
            let _ = T.indexOf(D);
            _ !== -1 && T.splice(_, 1);
          }
        yn(T, kt.First, { sorted: !1 });
      }, [gr.Backwards]: () => {
        var x;
        yn(m, kt.Previous) === Zr.Error && ((x = ge(s.button)) == null || x.focus());
      } });
    }
    b();
  }
  return () => {
    let m = { open: s.popoverState.value === 0, close: s.close }, { id: b, focus: x, ...g } = e, y = { ref: s.panel, id: b, onKeydown: d, onFocusout: o && s.popoverState.value === 0 ? f : void 0, tabIndex: -1 };
    return Gt({ ourProps: y, theirProps: { ...t, ...g }, attrs: t, slot: m, slots: { ...n, default: (...E) => {
      var S;
      return [bt(Ye, [u.value && s.isPortalled.value && bt(Ho, { id: a, ref: s.beforePanelSentinel, features: Uo.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: h }), (S = n.default) == null ? void 0 : S.call(n, ...E), u.value && s.isPortalled.value && bt(Ho, { id: l, ref: s.afterPanelSentinel, features: Uo.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v })])];
    } }, features: fo.RenderStrategy | fo.Static, visible: u.value, name: "PopoverPanel" });
  };
} }), pg = Symbol("LabelContext");
function hg() {
  let e = mt(pg, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, hg), t;
  }
  return e;
}
function ix({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = W([]);
  function o(s) {
    return r.value.push(s), () => {
      let i = r.value.indexOf(s);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return Mt(pg, { register: o, slot: e, name: t, props: n }), fe(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let ax = /* @__PURE__ */ De({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${In()}` } }, setup(e, { slots: t, attrs: n }) {
  let r = hg();
  return ht(() => Sn(r.register(e.id))), () => {
    let { name: o = "Label", slot: s = {}, props: i = {} } = r, { id: a, passive: l, ...c } = e, u = { ...Object.entries(i).reduce((d, [f, p]) => Object.assign(d, { [f]: A(p) }), {}), id: a };
    return l && (delete u.onClick, delete u.htmlFor, delete c.onClick), Gt({ ourProps: u, theirProps: c, slot: s, attrs: n, slots: t, name: o });
  };
} }), mg = Symbol("GroupContext"), Lp = /* @__PURE__ */ De({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = W(null), o = ix({ name: "SwitchLabel", props: { htmlFor: fe(() => {
    var i;
    return (i = r.value) == null ? void 0 : i.id;
  }), onClick(i) {
    r.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), r.value.click(), r.value.focus({ preventScroll: !0 }));
  } } }), s = W3({ name: "SwitchDescription" });
  return Mt(mg, { switchRef: r, labelledby: o, describedby: s }), () => Gt({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} }), $p = /* @__PURE__ */ De({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${In()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let s = mt(mg, null), [i, a] = z3(fe(() => e.modelValue), (m) => t("update:modelValue", m), fe(() => e.defaultChecked));
  function l() {
    a(!i.value);
  }
  let c = W(null), u = s === null ? c : s.switchRef, d = ql(fe(() => ({ as: e.as, type: n.type })), u);
  o({ el: u, $el: u });
  function f(m) {
    m.preventDefault(), l();
  }
  function p(m) {
    m.key === yt.Space ? (m.preventDefault(), l()) : m.key === yt.Enter && H3(m.currentTarget);
  }
  function h(m) {
    m.preventDefault();
  }
  let v = fe(() => {
    var m, b;
    return (b = (m = ge(u)) == null ? void 0 : m.closest) == null ? void 0 : b.call(m, "form");
  });
  return ht(() => {
    Lt([v], () => {
      if (!v.value || e.defaultChecked === void 0)
        return;
      function m() {
        a(e.defaultChecked);
      }
      return v.value.addEventListener("reset", m), () => {
        var b;
        (b = v.value) == null || b.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: m, name: b, value: x, form: g, ...y } = e, E = { checked: i.value }, S = { id: m, ref: u, role: "switch", type: d.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: f, onKeyup: p, onKeypress: h };
    return bt(Ye, [b != null && i.value != null ? bt(Ho, D3({ features: Uo.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, form: g, name: b, value: x })) : null, Gt({ ourProps: S, theirProps: { ...n, ...Jl(y, ["modelValue", "defaultChecked"]) }, slot: E, attrs: n, slots: r, name: "Switch" })]);
  };
} }), kp = ax, lx = /* @__PURE__ */ De({ props: { onFocus: { type: Function, required: !0 } }, setup(e) {
  let t = W(!0);
  return () => t.value ? bt(Ho, { as: "button", type: "button", features: Uo.Focusable, onFocus(n) {
    n.preventDefault();
    let r, o = 50;
    function s() {
      var i;
      if (o-- <= 0) {
        r && cancelAnimationFrame(r);
        return;
      }
      if ((i = e.onFocus) != null && i.call(e)) {
        t.value = !1, cancelAnimationFrame(r);
        return;
      }
      r = requestAnimationFrame(s);
    }
    r = requestAnimationFrame(s);
  } }) : null;
} });
var cx = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(cx || {}), ux = ((e) => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(ux || {});
let vg = Symbol("TabsContext");
function aa(e) {
  let t = mt(vg, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, aa), n;
  }
  return t;
}
let Yd = Symbol("TabsSSRContext"), gg = /* @__PURE__ */ De({ name: "TabGroup", emits: { change: (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: !1 }, manual: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  var o;
  let s = W((o = e.selectedIndex) != null ? o : e.defaultIndex), i = W([]), a = W([]), l = fe(() => e.selectedIndex !== null), c = fe(() => l.value ? e.selectedIndex : s.value);
  function u(v) {
    var m;
    let b = is(d.tabs.value, ge), x = is(d.panels.value, ge), g = b.filter((y) => {
      var E;
      return !((E = ge(y)) != null && E.hasAttribute("disabled"));
    });
    if (v < 0 || v > b.length - 1) {
      let y = Vt(s.value === null ? 0 : Math.sign(v - s.value), { [-1]: () => 1, 0: () => Vt(Math.sign(v), { [-1]: () => 0, 0: () => 0, 1: () => 1 }), 1: () => 0 }), E = Vt(y, { 0: () => b.indexOf(g[0]), 1: () => b.indexOf(g[g.length - 1]) });
      E !== -1 && (s.value = E), d.tabs.value = b, d.panels.value = x;
    } else {
      let y = b.slice(0, v), E = [...b.slice(v), ...y].find((T) => g.includes(T));
      if (!E)
        return;
      let S = (m = b.indexOf(E)) != null ? m : d.selectedIndex.value;
      S === -1 && (S = d.selectedIndex.value), s.value = S, d.tabs.value = b, d.panels.value = x;
    }
  }
  let d = { selectedIndex: fe(() => {
    var v, m;
    return (m = (v = s.value) != null ? v : e.defaultIndex) != null ? m : null;
  }), orientation: fe(() => e.vertical ? "vertical" : "horizontal"), activation: fe(() => e.manual ? "manual" : "auto"), tabs: i, panels: a, setSelectedIndex(v) {
    c.value !== v && r("change", v), l.value || u(v);
  }, registerTab(v) {
    var m;
    if (i.value.includes(v))
      return;
    let b = i.value[s.value];
    i.value.push(v), i.value = is(i.value, ge);
    let x = (m = i.value.indexOf(b)) != null ? m : s.value;
    x !== -1 && (s.value = x);
  }, unregisterTab(v) {
    let m = i.value.indexOf(v);
    m !== -1 && i.value.splice(m, 1);
  }, registerPanel(v) {
    a.value.includes(v) || (a.value.push(v), a.value = is(a.value, ge));
  }, unregisterPanel(v) {
    let m = a.value.indexOf(v);
    m !== -1 && a.value.splice(m, 1);
  } };
  Mt(vg, d);
  let f = W({ tabs: [], panels: [] }), p = W(!1);
  ht(() => {
    p.value = !0;
  }), Mt(Yd, fe(() => p.value ? null : f.value));
  let h = fe(() => e.selectedIndex);
  return ht(() => {
    Lt([h], () => {
      var v;
      return u((v = e.selectedIndex) != null ? v : e.defaultIndex);
    }, { immediate: !0 });
  }), Qt(() => {
    if (!l.value || c.value == null || d.tabs.value.length <= 0)
      return;
    let v = is(d.tabs.value, ge);
    v.some((m, b) => ge(d.tabs.value[b]) !== ge(m)) && d.setSelectedIndex(v.findIndex((m) => ge(m) === ge(d.tabs.value[c.value])));
  }), () => {
    let v = { selectedIndex: s.value };
    return bt(Ye, [i.value.length <= 0 && bt(lx, { onFocus: () => {
      for (let m of i.value) {
        let b = ge(m);
        if ((b == null ? void 0 : b.tabIndex) === 0)
          return b.focus(), !0;
      }
      return !1;
    } }), Gt({ theirProps: { ...n, ...Jl(e, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: v, slots: t, attrs: n, name: "TabGroup" })]);
  };
} }), yg = /* @__PURE__ */ De({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n }) {
  let r = aa("TabList");
  return () => {
    let o = { selectedIndex: r.selectedIndex.value }, s = { role: "tablist", "aria-orientation": r.orientation.value };
    return Gt({ ourProps: s, theirProps: e, slot: o, attrs: t, slots: n, name: "TabList" });
  };
} }), xs = /* @__PURE__ */ De({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-tabs-tab-${In()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = aa("Tab"), s = W(null);
  r({ el: s, $el: s }), ht(() => o.registerTab(s)), Sn(() => o.unregisterTab(s));
  let i = mt(Yd), a = fe(() => {
    if (i.value) {
      let m = i.value.tabs.indexOf(e.id);
      return m === -1 ? i.value.tabs.push(e.id) - 1 : m;
    }
    return -1;
  }), l = fe(() => {
    let m = o.tabs.value.indexOf(s);
    return m === -1 ? a.value : m;
  }), c = fe(() => l.value === o.selectedIndex.value);
  function u(m) {
    var b;
    let x = m();
    if (x === Zr.Success && o.activation.value === "auto") {
      let g = (b = Bs(s)) == null ? void 0 : b.activeElement, y = o.tabs.value.findIndex((E) => ge(E) === g);
      y !== -1 && o.setSelectedIndex(y);
    }
    return x;
  }
  function d(m) {
    let b = o.tabs.value.map((x) => ge(x)).filter(Boolean);
    if (m.key === yt.Space || m.key === yt.Enter) {
      m.preventDefault(), m.stopPropagation(), o.setSelectedIndex(l.value);
      return;
    }
    switch (m.key) {
      case yt.Home:
      case yt.PageUp:
        return m.preventDefault(), m.stopPropagation(), u(() => yn(b, kt.First));
      case yt.End:
      case yt.PageDown:
        return m.preventDefault(), m.stopPropagation(), u(() => yn(b, kt.Last));
    }
    if (u(() => Vt(o.orientation.value, { vertical() {
      return m.key === yt.ArrowUp ? yn(b, kt.Previous | kt.WrapAround) : m.key === yt.ArrowDown ? yn(b, kt.Next | kt.WrapAround) : Zr.Error;
    }, horizontal() {
      return m.key === yt.ArrowLeft ? yn(b, kt.Previous | kt.WrapAround) : m.key === yt.ArrowRight ? yn(b, kt.Next | kt.WrapAround) : Zr.Error;
    } })) === Zr.Success)
      return m.preventDefault();
  }
  let f = W(!1);
  function p() {
    var m;
    f.value || (f.value = !0, !e.disabled && ((m = ge(s)) == null || m.focus({ preventScroll: !0 }), o.setSelectedIndex(l.value), sg(() => {
      f.value = !1;
    })));
  }
  function h(m) {
    m.preventDefault();
  }
  let v = ql(fe(() => ({ as: e.as, type: t.type })), s);
  return () => {
    var m;
    let b = { selected: c.value }, { id: x, ...g } = e, y = { ref: s, onKeydown: d, onMousedown: h, onClick: p, id: x, role: "tab", type: v.value, "aria-controls": (m = ge(o.panels.value[l.value])) == null ? void 0 : m.id, "aria-selected": c.value, tabIndex: c.value ? 0 : -1, disabled: e.disabled ? !0 : void 0 };
    return Gt({ ourProps: y, theirProps: g, slot: b, attrs: t, slots: n, name: "Tab" });
  };
} }), bg = /* @__PURE__ */ De({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = aa("TabPanels");
  return () => {
    let o = { selectedIndex: r.selectedIndex.value };
    return Gt({ theirProps: e, ourProps: {}, slot: o, attrs: n, slots: t, name: "TabPanels" });
  };
} }), Es = /* @__PURE__ */ De({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-tabs-panel-${In()}` }, tabIndex: { type: Number, default: 0 } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = aa("TabPanel"), s = W(null);
  r({ el: s, $el: s }), ht(() => o.registerPanel(s)), Sn(() => o.unregisterPanel(s));
  let i = mt(Yd), a = fe(() => {
    if (i.value) {
      let u = i.value.panels.indexOf(e.id);
      return u === -1 ? i.value.panels.push(e.id) - 1 : u;
    }
    return -1;
  }), l = fe(() => {
    let u = o.panels.value.indexOf(s);
    return u === -1 ? a.value : u;
  }), c = fe(() => l.value === o.selectedIndex.value);
  return () => {
    var u;
    let d = { selected: c.value }, { id: f, tabIndex: p, ...h } = e, v = { ref: s, id: f, role: "tabpanel", "aria-labelledby": (u = ge(o.tabs.value[l.value])) == null ? void 0 : u.id, tabIndex: c.value ? p : -1 };
    return !c.value && e.unmount && !e.static ? bt(Ho, { as: "span", ...v }) : Gt({ ourProps: v, theirProps: h, slot: d, attrs: t, slots: n, features: fo.Static | fo.RenderStrategy, visible: c.value, name: "TabPanel" });
  };
} });
function dx(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Ic(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _a(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Vu = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Vu || {});
function fx(e, t) {
  let n = Gd();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [s, i] = [r, o].map((a) => {
    let [l = 0] = a.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return l;
  });
  return s !== 0 ? n.setTimeout(() => t("finished"), s + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Mp(e, t, n, r, o, s) {
  let i = Gd(), a = s !== void 0 ? dx(s) : () => {
  };
  return _a(e, ...o), Ic(e, ...t, ...n), i.nextFrame(() => {
    _a(e, ...n), Ic(e, ...r), i.add(fx(e, (l) => (_a(e, ...r, ...t), Ic(e, ...o), a(l))));
  }), i.add(() => _a(e, ...t, ...n, ...r, ...o)), i.add(() => a("cancelled")), i.dispose;
}
function go(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Xd = Symbol("TransitionContext");
var px = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(px || {});
function hx() {
  return mt(Xd, null) !== null;
}
function mx() {
  let e = mt(Xd, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function vx() {
  let e = mt(Jd, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Jd = Symbol("NestingContext");
function tc(e) {
  return "children" in e ? tc(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function xg(e) {
  let t = W([]), n = W(!1);
  ht(() => n.value = !0), Sn(() => n.value = !1);
  function r(s, i = Gr.Hidden) {
    let a = t.value.findIndex(({ id: l }) => l === s);
    a !== -1 && (Vt(i, { [Gr.Unmount]() {
      t.value.splice(a, 1);
    }, [Gr.Hidden]() {
      t.value[a].state = "hidden";
    } }), !tc(t) && n.value && (e == null || e()));
  }
  function o(s) {
    let i = t.value.find(({ id: a }) => a === s);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: s, state: "visible" }), () => r(s, Gr.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let Eg = fo.RenderStrategy, gx = /* @__PURE__ */ De({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let s = W(0);
  function i() {
    s.value |= Ht.Opening, t("beforeEnter");
  }
  function a() {
    s.value &= ~Ht.Opening, t("afterEnter");
  }
  function l() {
    s.value |= Ht.Closing, t("beforeLeave");
  }
  function c() {
    s.value &= ~Ht.Closing, t("afterLeave");
  }
  if (!hx() && L3())
    return () => bt(wg, { ...e, onBeforeEnter: i, onAfterEnter: a, onBeforeLeave: l, onAfterLeave: c }, r);
  let u = W(null), d = fe(() => e.unmount ? Gr.Unmount : Gr.Hidden);
  o({ el: u, $el: u });
  let { show: f, appear: p } = mx(), { register: h, unregister: v } = vx(), m = W(f.value ? "visible" : "hidden"), b = { value: !0 }, x = In(), g = { value: !1 }, y = xg(() => {
    !g.value && m.value !== "hidden" && (m.value = "hidden", v(x), c());
  });
  ht(() => {
    let $ = h(x);
    Sn($);
  }), Qt(() => {
    if (d.value === Gr.Hidden && x) {
      if (f.value && m.value !== "visible") {
        m.value = "visible";
        return;
      }
      Vt(m.value, { hidden: () => v(x), visible: () => h(x) });
    }
  });
  let E = go(e.enter), S = go(e.enterFrom), T = go(e.enterTo), D = go(e.entered), _ = go(e.leave), N = go(e.leaveFrom), R = go(e.leaveTo);
  ht(() => {
    Qt(() => {
      if (m.value === "visible") {
        let $ = ge(u);
        if ($ instanceof Comment && $.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function M($) {
    let H = b.value && !p.value, G = ge(u);
    !G || !(G instanceof HTMLElement) || H || (g.value = !0, f.value && i(), f.value || l(), $(f.value ? Mp(G, E, S, T, D, (P) => {
      g.value = !1, P === Vu.Finished && a();
    }) : Mp(G, _, N, R, D, (P) => {
      g.value = !1, P === Vu.Finished && (tc(y) || (m.value = "hidden", v(x), c()));
    })));
  }
  return ht(() => {
    Lt([f], ($, H, G) => {
      M(G), b.value = !1;
    }, { immediate: !0 });
  }), Mt(Jd, y), zd(fe(() => Vt(m.value, { visible: Ht.Open, hidden: Ht.Closed }) | s.value)), () => {
    let { appear: $, show: H, enter: G, enterFrom: P, enterTo: V, entered: B, leave: Ce, leaveFrom: We, leaveTo: Ve, ...ee } = e, te = { ref: u }, ne = { ...ee, ...p.value && f.value && ia.isServer ? { class: be([n.class, ee.class, ...E, ...S]) } : {} };
    return Gt({ theirProps: ne, ourProps: te, slot: {}, slots: r, attrs: n, features: Eg, visible: m.value === "visible", name: "TransitionChild" });
  };
} }), yx = gx, wg = /* @__PURE__ */ De({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = Ql(), s = fe(() => e.show === null && o !== null ? (o.value & Ht.Open) === Ht.Open : e.show);
  Qt(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = W(s.value ? "visible" : "hidden"), a = xg(() => {
    i.value = "hidden";
  }), l = W(!0), c = { show: s, appear: fe(() => e.appear || !l.value) };
  return ht(() => {
    Qt(() => {
      l.value = !1, s.value ? i.value = "visible" : tc(a) || (i.value = "hidden");
    });
  }), Mt(Jd, a), Mt(Xd, c), () => {
    let u = Jl(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return Gt({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [bt(yx, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...d, ...u }, r.default)] }, attrs: {}, features: Eg, visible: i.value === "visible", name: "Transition" });
  };
} });
function bx(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
      "clip-rule": "evenodd"
    })
  ]);
}
const xx = /* @__PURE__ */ C("div", { class: "col-span-1 -mt-1.5 self-start whitespace-nowrap" }, " Total count: ", -1), Ex = { class: "col-span-1 mb-1.5 font-remissis text-3xl text-slate-600 xl:text-4xl" }, wx = /* @__PURE__ */ C("div", { class: "col-span-1 -mt-1.5 self-start whitespace-nowrap" }, " Completed: ", -1), Sx = { class: "col-span-1 mb-1.5 font-remissis text-3xl text-slate-600 xl:text-4xl" }, Cx = /* @__PURE__ */ C("div", { class: "col-span-1 -mt-1.5 self-start whitespace-nowrap" }, "To do:", -1), Ox = { class: "col-span-1 mb-1.5 font-remissis text-3xl text-slate-600 xl:text-4xl" }, Sg = /* @__PURE__ */ De({
  __name: "GeneralStats",
  props: {
    complete: {},
    total: {},
    todo: {},
    variant: {}
  },
  setup(e) {
    return (t, n) => {
      const r = Wn("v-icon");
      return Q(), le("div", {
        class: be([
          t.variant === "horizontal" ? "flex flex-col gap-4 rounded-xl bg-slate-100 p-6 lg:col-span-2 lg:grid lg:grid-cols-3 lg:gap-8" : [
            "flex flex-col gap-4 rounded-t-xl bg-slate-100 p-6",
            "xl:px-9 xl:pb-4 xl:pt-9"
          ]
        ])
      }, [
        C("div", {
          class: be([
            "grid grid-cols-[min-content_minmax(3.75rem,_1fr)]",
            (!t.variant || t.variant === "vertical") && "gap-x-8 xl:gap-x-12",
            t.variant === "horizontal" && "gap-x-4 xl:gap-x-6"
          ])
        }, [
          U(r, {
            name: "dashboard-stats-total",
            filled: !0,
            class: "col-span-1 row-span-2 h-[3.75rem] w-[3.75rem] text-6xl xl:w-[4.5rem] xl:text-7xl"
          }),
          xx,
          C("div", Ex, at(t.total), 1)
        ], 2),
        C("div", {
          class: be([
            "grid grid-cols-[min-content_minmax(3.75rem,_1fr)]",
            (!t.variant || t.variant === "vertical") && "gap-x-8 xl:gap-x-12",
            t.variant === "horizontal" && "gap-x-4 xl:gap-x-6"
          ])
        }, [
          U(r, {
            name: "dashboard-stats-completed",
            filled: !0,
            class: "col-span-1 row-span-2 h-[3.75rem] w-[3.75rem] text-6xl xl:w-[4.5rem] xl:text-7xl"
          }),
          wx,
          C("div", Sx, at(t.complete), 1)
        ], 2),
        C("div", {
          class: be([
            "grid grid-cols-[min-content_minmax(3.75rem,_1fr)]",
            (!t.variant || t.variant === "vertical") && "gap-x-8 xl:gap-x-12",
            t.variant === "horizontal" && "gap-x-4 xl:gap-x-6"
          ])
        }, [
          U(r, {
            name: "dashboard-stats-todo",
            filled: !0,
            class: "col-span-1 row-span-2 h-[3.75rem] w-[3.75rem] text-6xl xl:w-[4.5rem] xl:text-7xl"
          }),
          Cx,
          C("div", Ox, at(t.todo), 1)
        ], 2)
      ], 2);
    };
  }
});
function Cg(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function Tx(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    })
  ]);
}
function Nx(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
function _x(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
    })
  ]);
}
function Ax(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    })
  ]);
}
function Dx(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function Px(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
}
function Rx(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    })
  ]);
}
function Ix(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    })
  ]);
}
function Lx(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
    })
  ]);
}
function $x(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
    })
  ]);
}
const Lc = /* @__PURE__ */ De({
  __name: "StatsIcon",
  props: {
    iconName: {}
  },
  setup(e) {
    const t = {
      notStarted: Cg,
      verified: Tx,
      inProgress: Nx,
      food: _x,
      medicine: Ax,
      other: Dx,
      curated: Px,
      eligible: Rx,
      selfSufficient: Ix,
      blackList: Lx,
      verification: $x
    }, n = e;
    return (r, o) => (Q(), xn(vd(t[n.iconName])));
  }
}), qo = /* @__PURE__ */ De({
  __name: "GuideButton",
  props: {
    color: {},
    size: {}
  },
  setup(e) {
    return (t, n) => (Q(), le("span", {
      class: be(["mx-0.5 inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] border border-b-2", {
        "min-h-[2.2em] min-w-[2.2em] px-2.5 text-base": t.size === "md",
        "min-h-[1.6em] min-w-[1.6em] px-1.5 text-sm": !t.size || t.size === "sm",
        "border-slate-200 bg-slate-100": !t.color || t.color === "neutral",
        "border-primary-900 bg-primary-600 text-white": t.color === "primary"
      }])
    }, [
      Os(t.$slots, "default")
    ], 2));
  }
}), wo = /* @__PURE__ */ De({
  __name: "GuidePageLabel",
  props: {
    to: {}
  },
  setup(e) {
    return (t, n) => (Q(), xn(vd(t.to ? A(Ut) : "span"), {
      to: t.to,
      class: be([
        "mx-0.5 inline-flex items-baseline justify-center gap-1 whitespace-nowrap rounded-[0.25rem] border border-b-2",
        "min-h-[1.6em] min-w-[1.6em] px-1.5 text-sm",
        "border-slate-200 bg-slate-100 text-slate-700"
      ])
    }, {
      default: me(() => [
        U(A(Cg), { class: "h-[0.8125rem] w-[0.8125rem] self-center" }),
        Os(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), kx = { class: "grid sm:mt-4 sm:gap-6 sm:overflow-y-auto lg:grid-cols-2 xl:gap-8" }, Mx = {
  class: /* @__PURE__ */ be([
    "bg-white px-6 py-3 text-lg",
    "sm:col-span-1 sm:mt-0 sm:rounded-xl sm:p-8 sm:shadow-lg",
    "xl:px-8"
  ])
}, jx = /* @__PURE__ */ C("h2", { class: "mb-6 text-2xl xl:text-3xl" }, "Features", -1), Vx = { class: "flex flex-col items-stretch gap-6 xl:gap-8" }, Fx = /* @__PURE__ */ C("h3", {
  class: /* @__PURE__ */ be([
    "col-span-1 -mt-1.5 self-start pt-0 text-slate-600 transition-opacity",
    "group-hover:opacity-60 group-focus:opacity-60",
    "xl:mb-[0.3125rem] xl:text-2xl"
  ])
}, " Edit Appeal ", -1), Bx = { class: "col-span-1 flex xl:self-end" }, Ux = ["disabled", "onClick"], Hx = /* @__PURE__ */ C("h3", {
  class: /* @__PURE__ */ be([
    "col-span-1 -mt-1.5 text-slate-600 transition-colors",
    "group-hover:text-primary-600 group-focus:text-primary-600",
    "xl:text-2xl"
  ])
}, " Add Appeal ", -1), zx = /* @__PURE__ */ C("p", { class: "text-md col-span-1 self-end overflow-visible text-base leading-6 xl:text-lg xl:leading-7" }, [
  /* @__PURE__ */ ae(" Create a new appeal "),
  /* @__PURE__ */ C("br"),
  /* @__PURE__ */ ae("and save it to database ")
], -1), Kx = /* @__PURE__ */ C("h3", {
  class: /* @__PURE__ */ be([
    "col-span-1 -mt-1.5 text-slate-600 transition-colors",
    "group-hover:text-primary-600 group-focus:text-primary-600",
    "xl:text-2xl"
  ])
}, " Map & Routes ", -1), Gx = /* @__PURE__ */ C("p", { class: "text-md col-span-1 mb-1.5 self-end text-base leading-6 xl:mb-2 xl:text-lg xl:leading-7" }, [
  /* @__PURE__ */ ae(" Review appeals on the map"),
  /* @__PURE__ */ C("br"),
  /* @__PURE__ */ ae("and create a delivery route ")
], -1), Zx = {
  class: /* @__PURE__ */ be([
    "my-0 flex flex-col items-stretch bg-white p-6 text-lg",
    "sm:col-span-1 sm:rounded-xl sm:p-8 sm:shadow-lg",
    "xl:px-8 xl:pb-8"
  ])
}, Wx = /* @__PURE__ */ C("h2", { class: "mb-1.5 text-2xl xl:mb-6 xl:text-3xl" }, "Stats", -1), Yx = {
  key: 0,
  class: "loader grid place-items-center rounded-t-xl bg-slate-100"
}, Xx = {
  key: 1,
  class: "grid place-items-center rounded-t-xl bg-slate-100"
}, Jx = /* @__PURE__ */ C("span", { class: "border-b border-dotted border-slate-500 transition group-hover:border-primary-600 group-hover:text-primary-600 group-focus:border-primary-600 group-focus:text-primary-600" }, "Full statistics", -1), Qx = {
  class: /* @__PURE__ */ be([
    "mt-0 bg-white p-6 pb-3 text-base leading-7",
    "sm:col-span-1 sm:rounded-xl sm:p-8 sm:shadow-lg",
    "xl:px-8 xl:text-xl xl:leading-8"
  ])
}, qx = /* @__PURE__ */ C("h2", { class: "mb-3 text-2xl xl:mb-5 xl:text-3xl" }, "About this CRM", -1), e7 = { class: "mb-4 h-fit xl:mb-5" }, t7 = { class: "h-fit" }, n7 = /* @__PURE__ */ C("a", {
  target: "_blank",
  href: "https://genechk.github.io/projects-showcase/contacts/"
}, " contact the developer", -1), r7 = {
  class: /* @__PURE__ */ be([
    "mt-0 bg-white p-6 text-base",
    "sm:col-span-1 sm:rounded-xl sm:p-8 sm:shadow-lg",
    "xl:px-8 xl:text-xl xl:leading-8"
  ])
}, o7 = /* @__PURE__ */ C("h2", { class: "mb-3 text-2xl xl:mb-5 xl:text-3xl" }, "Getting Started", -1), s7 = { class: "text-link-list -ml-px flex list-inside list-decimal flex-col gap-6" }, i7 = /* @__PURE__ */ De({
  __name: "DashboardTab",
  props: {
    isPending: { type: Boolean },
    isError: { type: Boolean },
    stats: {}
  },
  setup(e) {
    const t = sa(), { onSelectGuideTab: n, onSelectStatsTab: r } = Xl(), o = W(""), s = Jv(), i = () => {
      o.value && (t.selectedAppealId = String(o.value), t.onSelectAppeal(o.value), s.push({ name: "edit" }));
    }, a = W();
    return (l, c) => {
      const u = Wn("v-icon");
      return Q(), le("main", kx, [
        C("nav", Mx, [
          jx,
          C("div", Vx, [
            C("div", {
              class: be([
                "group grid h-[4.125rem] cursor-pointer grid-cols-[min-content_minmax(4.5rem,_1fr)] gap-x-5",
                "xl:h-[5rem] xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8"
              ]),
              onClick: c[1] || (c[1] = //@ts-ignore
              (...d) => {
                var f, p;
                return ((f = a.value) == null ? void 0 : f.focus) && ((p = a.value) == null ? void 0 : p.focus(...d));
              })
            }, [
              U(u, {
                name: "dashboard-edit-icon",
                filled: !0,
                class: be([
                  "col-span-1 row-span-2 h-[4.125rem] w-[4.125rem] text-7xl transition-opacity",
                  "group-hover:opacity-80 group-focus:opacity-80",
                  "xl:h-[5rem] xl:w-[5rem] xl:text-8xl"
                ])
              }),
              Fx,
              C("form", Bx, [
                Hn(C("input", {
                  ref_key: "inputRef",
                  ref: a,
                  "onUpdate:modelValue": c[0] || (c[0] = (d) => o.value = d),
                  "aria-label": "Appeal Serial Number",
                  type: "number",
                  class: "rounded-left form-input h-10 w-full max-w-[15rem] xl:h-12",
                  placeholder: "Type in serial number"
                }, null, 512), [
                  [Mo, o.value]
                ]),
                C("button", {
                  class: "grid h-10 w-10 place-items-center rounded-r-md bg-primary-600 p-2 transition-all enabled:hover:bg-opacity-80 disabled:opacity-40 xl:h-12 xl:w-14",
                  type: "submit",
                  disabled: !o.value,
                  onClick: _t(i, ["prevent"])
                }, [
                  U(A(bx), { class: "h-6 w-6 text-white" })
                ], 8, Ux)
              ])
            ], 2),
            U(A(Ut), {
              to: { name: "create" },
              class: be([
                "group grid h-[4.125rem] grid-cols-[min-content_minmax(4.5rem,_1fr)] gap-x-5",
                "xl:h-[5rem] xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8"
              ]),
              onClick: A(t).onCreateAppeal
            }, {
              default: me(() => [
                U(u, {
                  name: "dashboard-create-icon",
                  filled: !0,
                  class: be([
                    "col-span-1 row-span-2 h-[4.125rem] w-[4.125rem] text-7xl transition-opacity",
                    "group-hover:opacity-80 group-focus:opacity-80",
                    "xl:h-[5rem] xl:w-[5rem] xl:text-8xl"
                  ])
                }),
                Hx,
                zx
              ]),
              _: 1
            }, 8, ["class", "onClick"]),
            U(A(Ut), {
              to: { name: "map" },
              class: be([
                "group grid h-[4.125rem] grid-cols-[min-content_minmax(4.5rem,_1fr)] gap-x-5",
                "xl:h-[5rem] xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8"
              ])
            }, {
              default: me(() => [
                U(u, {
                  name: "dashboard-map-icon",
                  filled: !0,
                  class: be([
                    "col-span-1 row-span-2 h-[4.125rem] w-[4.125rem] text-7xl transition-opacity",
                    "group-hover:opacity-80 group-focus:opacity-80",
                    "xl:h-[5rem] xl:w-[5rem] xl:text-8xl"
                  ])
                }),
                Kx,
                Gx
              ]),
              _: 1
            }, 8, ["class"])
          ])
        ]),
        C("section", Zx, [
          Wx,
          l.isPending || !l.stats && !l.isError ? (Q(), le("div", Yx)) : !l.stats || l.isError ? (Q(), le("div", Xx, " Failed to load stats ")) : (Q(), xn(A(Sg), {
            key: 2,
            class: be([
              "flex flex-col gap-4 rounded-t-xl bg-slate-100 p-6",
              "xl:px-9 xl:pb-4 xl:pt-9"
            ]),
            complete: l.stats.complete,
            todo: l.stats.todo,
            total: l.stats.total
          }, null, 8, ["complete", "todo", "total"])),
          U(A(Ut), {
            to: { name: "stats" },
            class: be([
              "group grid h-12 place-items-center rounded-b-xl bg-slate-200 text-base transition-colors",
              "enabled:hover:bg-opacity-80 enabled:focus:bg-opacity-80",
              "xl:h-16 xl:text-xl"
            ]),
            onClick: A(r)
          }, {
            default: me(() => [
              Jx
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        C("section", Qx, [
          qx,
          C("p", e7, [
            ae(" This is the interface for processing Dopomoha.Kharkiv Foundation’s appeals for Humanitarian Aid. It will allow you to edit information about appeals that already are registered in the database; to create and process new appeals; to review appeals location on the "),
            U(A(wo), { to: "/appeals/map" }, {
              default: me(() => [
                ae("Map")
              ]),
              _: 1
            }),
            ae(" and plan routes based on their geography. ")
          ]),
          C("p", t7, [
            ae(" Gradually "),
            U(A(Ut), {
              to: { name: "guide" },
              onClick: c[2] || (c[2] = () => A(n)("plan"))
            }, {
              default: me(() => [
                ae(" more features will be added")
              ]),
              _: 1
            }),
            ae(". If you see a bug, come up with an idea for the new feature or decide to give us a feedback on existing ones, be sure to "),
            n7,
            ae(". ")
          ])
        ]),
        C("nav", r7, [
          o7,
          C("ol", s7, [
            C("li", null, [
              U(A(Ut), {
                to: { name: "guide" },
                class: "border-b border-dotted border-slate-500 hover:border-primary-600 focus:border-primary-600",
                onClick: c[3] || (c[3] = _t(() => A(n)("create"), ["prevent"]))
              }, {
                default: me(() => [
                  ae(" Creating New Appeals ")
                ]),
                _: 1
              })
            ]),
            C("li", null, [
              U(A(Ut), {
                to: { name: "guide" },
                class: "border-b border-dotted border-slate-500 hover:border-primary-600 focus:border-primary-600",
                onClick: c[4] || (c[4] = _t(() => A(n)("edit"), ["prevent"]))
              }, {
                default: me(() => [
                  ae(" Editing Existing Appeals ")
                ]),
                _: 1
              })
            ]),
            C("li", null, [
              U(A(Ut), {
                to: { name: "guide" },
                class: "border-b border-dotted border-slate-500 hover:border-primary-600 focus:border-primary-600",
                onClick: c[5] || (c[5] = _t(() => A(n)("map"), ["prevent"]))
              }, {
                default: me(() => [
                  ae(" Using Map to Work With Appeals ")
                ]),
                _: 1
              })
            ]),
            C("li", null, [
              U(A(Ut), {
                to: { name: "guide" },
                class: "border-b border-dotted border-slate-500 hover:border-primary-600",
                onClick: c[6] || (c[6] = _t(() => A(n)("delivery"), ["prevent"]))
              }, {
                default: me(() => [
                  ae(" Composing and Sharing Routes ")
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
}), a7 = "" + new URL("dopomoha-logo-icon.png", import.meta.url).href;
function Og(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
      "clip-rule": "evenodd"
    })
  ]);
}
const l7 = { class: "rounded-xl bg-white p-6 pb-12 text-lg shadow-lg sm:mt-4 sm:p-8" }, c7 = /* @__PURE__ */ C("h1", { class: "mb-4 mt-1 text-2xl leading-snug md:mt-2 md:text-3xl" }, " Getting Started ", -1), u7 = /* @__PURE__ */ C("div", { class: "mb-3 flex items-center" }, [
  /* @__PURE__ */ C("img", {
    class: "hidden aspect-auto w-32 select-none sm:visible",
    src: a7,
    alt: "Допо.Лого"
  }),
  /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, " This is the interface for processing Dopomoha.Kharkiv Foundation’s appeals for Humanitarian Aid. It will allow you to edit information about appeals that already are registered in the database; creating and process new appeals; review appeals location on the map and plan routes based on their geography. ")
], -1), d7 = { class: "mb-6" }, f7 = { class: "md:text-md mb-4 text-base italic leading-7" }, p7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, [
  /* @__PURE__ */ ae(" Freshly created appeal is assigned the first avaiable "),
  /* @__PURE__ */ C("em", null, "serial number"),
  /* @__PURE__ */ ae(". Numbers are assigned sequentially. We determine if number is available by checking the appeal’s full text. If it’s missing, all other fields are ignored in favor of the new appeal. ")
], -1), h7 = { class: "mb-6" }, m7 = { class: "md:text-md mb-4 text-base italic leading-7" }, v7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, " Edited fields will be updated in the database only after your appeal is saved. ", -1), g7 = { class: "mb-6" }, y7 = { class: "md:text-md mb-4 text-base leading-7" }, b7 = { class: "mb-6" }, x7 = { class: "md:text-md mb-4 text-base leading-7" }, E7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, [
  /* @__PURE__ */ ae(" By default the route will contain only the basic data about appeals in it, required for delivery: their "),
  /* @__PURE__ */ C("em", null, "serial numbers"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("em", null, "addresses"),
  /* @__PURE__ */ ae(" and "),
  /* @__PURE__ */ C("em", null, "phone numbers"),
  /* @__PURE__ */ ae(". Adding any other information to the route is currently not supported. ")
], -1), w7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, " You can add appeals to the route in any order you want, just don’t forget to change their order later. Rule of thumb is to keep the route as short and tight as possible. If you see a lot of outliers, try grouping them into another routel. If that’s not possible, just sort them all together at the beginning or the end of the route, and drop in a short comment that warns the delivering volunteer about them. ", -1), S7 = { class: "md:text-md mb-4 text-base leading-7" }, C7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, [
  /* @__PURE__ */ C("strong", null, "That’s it, you’re done!"),
  /* @__PURE__ */ ae(" Nice work, and hopefully done much quicker than previously. ")
], -1), O7 = { class: "mb-6 mt-10" }, T7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, " Gradually, more features will be added: ", -1), N7 = { class: "mb-4 flex list-inside list-none flex-col gap-2.5 pl-6 text-base leading-7" }, _7 = /* @__PURE__ */ C("li", { class: "relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700" }, [
  /* @__PURE__ */ C("p", null, [
    /* @__PURE__ */ ae(" Integration with "),
    /* @__PURE__ */ C("a", {
      target: "_blank",
      href: "https://t.me/dopomoha_kharkiv_bot"
    }, "Chat bot")
  ])
], -1), A7 = /* @__PURE__ */ C("li", { class: "relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700" }, [
  /* @__PURE__ */ C("p", null, "Advanced search in appeals")
], -1), D7 = { class: "relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700" }, P7 = /* @__PURE__ */ C("li", { class: "relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700" }, [
  /* @__PURE__ */ C("p", null, "Improved workflow for curated appeals")
], -1), R7 = /* @__PURE__ */ C("p", { class: "md:text-md mb-4 text-base leading-7" }, [
  /* @__PURE__ */ ae(" If you see a bug, come up with an idea for the new feature or decide to give us a feedback on existing ones, be sure to "),
  /* @__PURE__ */ C("a", {
    target: "_blank",
    href: "https://genechk.github.io/projects-showcase/contacts/"
  }, "contact the developer"),
  /* @__PURE__ */ ae(". ")
], -1), I7 = /* @__PURE__ */ C("span", null, "Back to Dashboard", -1), L7 = /* @__PURE__ */ De({
  __name: "GuideTab",
  setup(e) {
    const t = Xl(), { onSelectMainTab: n } = t, {
      createScrollRef: r,
      editScrollRef: o,
      mapScrollRef: s,
      deliveryScrollRef: i,
      planScrollRef: a
    } = ro(t);
    return (l, c) => (Q(), le("main", l7, [
      c7,
      u7,
      C("div", d7, [
        C("h3", {
          ref_key: "createScrollRef",
          ref: r,
          class: "mb-1.5"
        }, " 1. Adding New Appeals ", 512),
        C("p", f7, [
          ae(" Go to "),
          U(A(wo), { to: "/appeals/create" }, {
            default: me(() => [
              ae("Create Appeal")
            ]),
            _: 1
          }),
          ae(" page → Add appeal’s full text → Fill in the remaining known data → Press "),
          U(A(qo), { color: "primary" }, {
            default: me(() => [
              ae("Save Appeal")
            ]),
            _: 1
          }),
          ae(" button. ")
        ]),
        p7
      ]),
      C("div", h7, [
        C("h3", {
          ref_key: "editScrollRef",
          ref: o,
          class: "mb-1.5"
        }, " 2. Editing Existing Appeals ", 512),
        C("p", m7, [
          ae(" Enter the appeal’s "),
          U(A(qo), { class: "bg-slate-200 font-mono text-xs not-italic lg:text-sm" }, {
            default: me(() => [
              ae("Serial Number")
            ]),
            _: 1
          }),
          ae(" on the "),
          U(A(wo), { to: "/appeals/dashboard" }, {
            default: me(() => [
              ae("Dashboard")
            ]),
            _: 1
          }),
          ae(" or "),
          U(A(wo), { to: "/appeals/edit" }, {
            default: me(() => [
              ae("Edit Appeal")
            ]),
            _: 1
          }),
          ae(" page → Update data as needed → Press "),
          U(A(qo), { color: "primary" }, {
            default: me(() => [
              ae("Save Appeal")
            ]),
            _: 1
          }),
          ae(" button. ")
        ]),
        v7
      ]),
      C("div", g7, [
        C("h3", {
          ref_key: "mapScrollRef",
          ref: s,
          class: "mb-1.5"
        }, " 3. Working With Map ", 512),
        C("p", y7, [
          ae(" The "),
          U(A(wo), { to: "/appeals/map" }, {
            default: me(() => [
              ae("Map")
            ]),
            _: 1
          }),
          ae(" page by default displays all appeals that have valid coordinates in them. Their map pins will have different colors and icons, depending on the appeal’s completion status. ")
        ])
      ]),
      C("div", b7, [
        C("h3", {
          ref_key: "deliveryScrollRef",
          ref: i,
          class: "mb-1.5"
        }, " 4. Composing and Sharing Routes ", 512),
        C("p", x7, [
          ae(" Clicking on any appeal on the "),
          U(A(wo), { to: "/appeals/map" }, {
            default: me(() => [
              ae("Map")
            ]),
            _: 1
          }),
          ae(" will reveal its context menu, which has an "),
          U(A(qo), { color: "primary" }, {
            default: me(() => [
              ae("Add to route")
            ]),
            _: 1
          }),
          ae(" button. Use it to add that appeal to the current route. It also will open the "),
          U(A(qo), null, {
            default: me(() => [
              ae("Route Tab")
            ]),
            _: 1
          }),
          ae(" in the sidebar. ")
        ]),
        E7,
        w7,
        C("p", S7, [
          ae(" After you finish preparing your route, just use the "),
          U(A(qo), { color: "primary" }, {
            default: me(() => [
              ae("Copy")
            ]),
            _: 1
          }),
          ae(" button to copy and paste route data to your chat with volunteer. Be sure to include any additional information they should know about this delivery. ")
        ]),
        C7
      ]),
      C("div", O7, [
        C("h2", {
          ref_key: "planScrollRef",
          ref: a,
          class: "mb-3.5 text-2xl font-bold leading-snug"
        }, " Future Plans ", 512),
        T7,
        C("ul", N7, [
          _7,
          A7,
          C("li", D7, [
            C("p", null, [
              ae(" Filters by appeal type and status on the "),
              U(A(wo), { to: "/appeals/map" }, {
                default: me(() => [
                  ae("Map")
                ]),
                _: 1
              })
            ])
          ]),
          P7
        ]),
        R7
      ]),
      U(A(Ut), {
        to: { name: "dashboard" },
        class: "group btn-link mb-6 mt-12 flex flex-col items-center gap-1.5 child-[span]:duration-100 md:hidden",
        onClick: A(n)
      }, {
        default: me(() => [
          U(A(Og), { class: "h-5 text-slate-400 transition-colors group-hover:text-primary-600" }),
          I7
        ]),
        _: 1
      }, 8, ["onClick"])
    ]));
  }
}), $c = (e) => Object.keys(e), $7 = {
  class: /* @__PURE__ */ be([
    "max-w-3xl rounded-xl bg-white p-6 pb-12 text-lg shadow-lg",
    "sm:mt-4 sm:p-8",
    "xl:max-w-4xl"
  ])
}, k7 = /* @__PURE__ */ C("h1", { class: "mb-1.5 mt-1 text-2xl leading-snug md:mt-2 md:text-3xl" }, " Appeals Stats ", -1), M7 = { class: "mb-6 text-base font-bold tracking-wide text-neutral-400" }, j7 = { class: "font-remissis" }, V7 = {
  key: 0,
  class: "loader grid place-items-center rounded-xl bg-slate-100"
}, F7 = {
  key: 1,
  class: "grid place-items-center rounded-t-xl bg-slate-100"
}, B7 = {
  key: 2,
  class: "grid gap-8 lg:grid-cols-2"
}, U7 = { class: "rounded-xl border-2 border-dashed border-black p-5 lg:order-1 lg:col-span-1" }, H7 = /* @__PURE__ */ C("h3", { class: "-mt-9 mb-2.5 text-xl" }, [
  /* @__PURE__ */ C("span", { class: "-ml-0.5 border-2 border-white bg-white" }, " By completion status ")
], -1), z7 = { class: "col-span-2 grid items-center" }, K7 = { class: "col-span-7 text-base" }, G7 = { class: "col-span-3 text-base" }, Z7 = { class: "rounded-xl border-2 border-dashed border-black p-5 lg:order-3 lg:col-span-1" }, W7 = /* @__PURE__ */ C("h3", { class: "-mt-9 mb-2.5 text-xl" }, [
  /* @__PURE__ */ C("span", { class: "-ml-0.5 border-2 border-white bg-white" }, " By category ")
], -1), Y7 = { class: "col-span-2 grid items-center" }, X7 = { class: "col-span-7 text-base" }, J7 = { class: "col-span-3 text-base" }, Q7 = { class: "rounded-xl border-2 border-dashed border-black p-5 md:order-2 md:col-span-1 md:row-span-2" }, q7 = /* @__PURE__ */ C("h3", { class: "-mt-9 mb-2.5 text-xl" }, [
  /* @__PURE__ */ C("span", { class: "-ml-0.5 border-2 border-white bg-white" }, " By Eligibility")
], -1), eE = { class: "col-span-2 grid items-center" }, tE = { class: "col-span-7 text-base" }, nE = { class: "col-span-3 text-base" }, rE = /* @__PURE__ */ C("span", null, "Back to Dashboard", -1), oE = /* @__PURE__ */ De({
  __name: "StatsTab",
  props: {
    stats: {},
    isPending: { type: Boolean },
    isError: { type: Boolean }
  },
  setup(e) {
    const { onSelectMainTab: t } = Xl(), n = W(
      (/* @__PURE__ */ new Date()).toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    );
    ht(async () => {
      n.value = (/* @__PURE__ */ new Date()).toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    });
    const r = {
      notStarted: "Not started",
      verified: "Verified",
      inProgress: "In progress"
    }, o = {
      food: "Food",
      medicine: "Medicine",
      other: "Other"
    }, s = {
      curated: "Curated",
      eligible: "Aid Eligible",
      selfSufficient: "Self Sufficient",
      blackList: "Blacklist",
      verification: "In Verification"
    };
    return (i, a) => (Q(), le("main", $7, [
      k7,
      C("p", M7, [
        ae(" Most recent update: "),
        C("span", j7, at(n.value), 1)
      ]),
      i.isPending || !i.stats && !i.isError ? (Q(), le("div", V7)) : !i.stats || i.isError ? (Q(), le("div", F7, " Failed to load page ")) : (Q(), le("div", B7, [
        U(A(Sg), {
          class: "flex flex-col gap-4 rounded-t-xl bg-slate-100 p-6 lg:col-span-2 lg:flex-row lg:gap-8",
          complete: i.stats.complete,
          todo: i.stats.todo,
          total: i.stats.total,
          variant: "horizontal"
        }, null, 8, ["complete", "todo", "total"]),
        C("div", U7, [
          H7,
          (Q(!0), le(Ye, null, tr(A($c)(r), (l) => (Q(), le("div", {
            key: l,
            class: "grid grid-cols-12 items-center gap-4 py-2.5 font-remissis"
          }, [
            C("div", z7, [
              U(A(Lc), {
                "icon-name": l,
                class: "w-6"
              }, null, 8, ["icon-name"])
            ]),
            C("p", K7, at(r[l]) + ":", 1),
            C("p", G7, at(i.stats[l]), 1)
          ]))), 128))
        ]),
        C("div", Z7, [
          W7,
          (Q(!0), le(Ye, null, tr(A($c)(o), (l) => (Q(), le("div", {
            key: l,
            class: "grid grid-cols-12 items-center gap-4 py-2.5 font-remissis"
          }, [
            C("div", Y7, [
              U(A(Lc), {
                "icon-name": l,
                class: "w-6"
              }, null, 8, ["icon-name"])
            ]),
            C("p", X7, at(o[l]) + ": ", 1),
            C("p", J7, at(i.stats[l]), 1)
          ]))), 128))
        ]),
        C("div", Q7, [
          q7,
          (Q(!0), le(Ye, null, tr(A($c)(s), (l) => (Q(), le("div", {
            key: l,
            class: "grid grid-cols-12 items-center gap-4 py-2.5 font-remissis"
          }, [
            C("div", eE, [
              U(A(Lc), {
                "icon-name": l,
                class: "w-6"
              }, null, 8, ["icon-name"])
            ]),
            C("p", tE, at(s[l]) + ":", 1),
            C("p", nE, at(i.stats[l]), 1)
          ]))), 128))
        ])
      ])),
      C("a", {
        href: "",
        class: "group btn-link mb-6 mt-12 flex flex-col items-center gap-1.5 child-[span]:duration-100 md:hidden",
        onClick: a[0] || (a[0] = _t(
          //@ts-ignore
          (...l) => A(t) && A(t)(...l),
          ["prevent"]
        ))
      }, [
        U(A(Og), { class: "h-5 text-slate-400 transition-colors group-hover:text-primary-600" }),
        rE
      ])
    ]));
  }
}), sE = ["disabled"], iE = /* @__PURE__ */ C("span", null, " Dashboard ", -1), aE = [
  iE
], lE = ["disabled"], cE = /* @__PURE__ */ C("span", null, " Stats ", -1), uE = [
  cE
], dE = ["disabled"], fE = /* @__PURE__ */ C("span", null, " Guide ", -1), pE = [
  fE
], hE = {
  class: /* @__PURE__ */ be([
    "flex w-full flex-row items-start pb-8",
    "sm:col-span-4 sm:h-full sm:overflow-y-auto sm:pr-4",
    "md:pr-6",
    "lg:col-span-6 lg:pb-10"
  ])
}, kc = /* @__PURE__ */ De({
  __name: "DashboardPage",
  setup(e) {
    const t = Xl(), { onChangeTab: n, onScrollToTop: r } = t, { isScreenSmallOrWider: o, selectedTab: s, topScrollRef: i } = ro(t), { name: a } = c6();
    switch (a) {
      case "stats":
        s.value = 1;
      case "guide":
        s.value = 2;
      case "dashboard":
      default:
        s.value = 0;
    }
    const {
      isFetching: l,
      error: c,
      data: u
    } = B5(Ba.appealsStatsURL).json();
    return (d, f) => (Q(), xn(A(gg), {
      as: "section",
      vertical: A(o),
      "selected-index": A(s),
      class: be([
        "grid gap-2",
        "sm:h-full sm:grid-cols-6 sm:items-start sm:gap-3 sm:overflow-y-auto sm:overflow-x-hidden sm:pl-4",
        "md:pl-6",
        "lg:grid-cols-8"
      ]),
      onChange: A(n)
    }, {
      default: me(() => [
        U(A(yg), {
          class: be([
            "flex w-full justify-center gap-2 px-micro pb-1 pt-3",
            "micro:gap-4 micro:px-sm micro:text-base",
            "sm:col-span-2 sm:flex-col sm:items-start sm:px-md sm:pt-4"
          ])
        }, {
          default: me(() => [
            U(A(xs), { as: "template" }, {
              default: me(({ selected: p }) => [
                C("button", {
                  disabled: p,
                  class: be([
                    "rounded-md px-2 py-1 transition child-[span]:transition-colors",
                    "micro:px-3 micro:py-2 micro:text-base",
                    "md:px-3.5 md:py-1.5 md:text-lg",
                    p ? "cursor-default bg-slate-200 text-sm child-[span]:text-slate-600" : "btn-link"
                  ]),
                  onClick: f[0] || (f[0] = //@ts-ignore
                  (...h) => A(r) && A(r)(...h))
                }, aE, 10, sE)
              ]),
              _: 1
            }),
            U(A(xs), { as: "template" }, {
              default: me(({ selected: p }) => [
                C("button", {
                  disabled: p,
                  class: be([
                    "rounded-md px-2 py-1 transition child-[span]:transition-colors",
                    "micro:px-3 micro:py-2 micro:text-base",
                    "md:px-3.5 md:py-1.5 md:text-lg",
                    p ? "cursor-default bg-slate-200 text-sm child-[span]:text-slate-600" : "btn-link"
                  ]),
                  onClick: f[1] || (f[1] = //@ts-ignore
                  (...h) => A(r) && A(r)(...h))
                }, uE, 10, lE)
              ]),
              _: 1
            }),
            U(A(xs), { as: "template" }, {
              default: me(({ selected: p }) => [
                C("button", {
                  disabled: p,
                  class: be([
                    "rounded-md px-2 py-1 transition child-[span]:transition-colors",
                    "micro:px-3 micro:py-2 micro:text-base",
                    "md:px-3.5 md:py-1.5 md:text-lg",
                    p ? "cursor-default bg-slate-200 text-sm child-[span]:text-slate-600" : "btn-link"
                  ]),
                  onClick: f[2] || (f[2] = //@ts-ignore
                  (...h) => A(r) && A(r)(...h))
                }, pE, 10, dE)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        C("div", hE, [
          C("div", {
            ref_key: "topScrollRef",
            ref: i,
            class: "h-0 w-0"
          }, null, 512),
          U(A(bg), {
            class: be(["w-full max-w-3xl", "xl:max-w-5xl"])
          }, {
            default: me(() => [
              U(A(Es), { as: "template" }, {
                default: me(() => [
                  U(A(i7), {
                    "is-error": !!A(c),
                    "is-pending": A(l),
                    stats: A(u)
                  }, null, 8, ["is-error", "is-pending", "stats"])
                ]),
                _: 1
              }),
              U(A(Es), { as: "template" }, {
                default: me(() => [
                  U(A(oE), {
                    "is-error": !!A(c),
                    "is-pending": A(l),
                    stats: A(u)
                  }, null, 8, ["is-error", "is-pending", "stats"])
                ]),
                _: 1
              }),
              U(A(Es), { as: "template" }, {
                default: me(() => [
                  U(A(L7))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["vertical", "selected-index", "onChange"]));
  }
}), mE = {
  class: /* @__PURE__ */ be([
    "col-span-1 -mt-1.5 text-lg text-white transition-transform",
    "sm:text-xl",
    "group-hover:translate-x-1",
    "xl:text-2xl"
  ])
}, Aa = /* @__PURE__ */ De({
  __name: "SingleFeature",
  props: {
    icon: {}
  },
  setup(e) {
    return (t, n) => {
      const r = Wn("v-icon");
      return Q(), le("div", {
        class: be([
          "group grid cursor-default grid-cols-[min-content_minmax(4.5rem,_1fr)] items-center gap-x-6",
          "xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8"
        ])
      }, [
        U(r, {
          name: t.icon,
          class: be([
            "mb-2 h-[2rem] w-[2rem] text-white transition-transform",
            "sm:mb-2.5 sm:h-[2.5rem] sm:w-[2.5rem]",
            "group-hover:scale-110",
            "xl:h-[3.5rem] xl:w-[3.5rem]"
          ])
        }, null, 8, ["name"]),
        C("h3", mE, [
          Os(t.$slots, "default")
        ])
      ], 2);
    };
  }
});
function vE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function yE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
      "clip-rule": "evenodd"
    })
  ]);
}
const xE = { class: "markdown-body" }, EE = /* @__PURE__ */ Od("<p>The app is an interface for managing and editing an overwhelming amount of appeals for aid coming from people in areas affected by war, specifically Kharkiv and Kharkiv region, Ukraine.</p><p>This is a simplified demo of a larger app which I’ve built in the late 2022 and was improving throughout 2023.</p><h6>Technologies used</h6><p><code>Typescript</code>, <code>Vite</code>, <code>Vue3</code>, <code>Pinia</code>, <code>Tailwind</code>, <code>HeadlessUI</code> and <code>zod</code>.</p>", 4), wE = /* @__PURE__ */ C("h6", null, "Additionally used in production:", -1), SE = /* @__PURE__ */ C("p", null, [
  /* @__PURE__ */ C("code", null, "Nuxt3"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Passport"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Node.js"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Express"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Helmet"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Grammy"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Ramda"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Mocha + Chai"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Sinon"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Supertest"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Leaflet"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "JWT"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Iron session"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "IoRedis"),
  /* @__PURE__ */ ae(", "),
  /* @__PURE__ */ C("code", null, "Google APIs")
], -1), CE = /* @__PURE__ */ Od('<h3>History and motivation</h3><p>After Russia has invaded Ukraine in 2024, a lot of people in regions nearing the front line were suddenly left without means of survival. They’ve started to seek aid, and local volunteers have joined their efforts to help those people in their hour of need.</p><p>However, that brought up a number of challenges. Incoming appeals and requests had to be stored in a single database. They had to be checked for duplicates, verified and updated.</p><p>Moreover, it was necessary to group those appeals by proximity (i. e., same city district), by type of necessity (food, medicine and / or hygiene). And while the appeal was processed, it’s status had to be updated as well, since it came through different phases, and had multiple volunteers attached to it.</p><p>All that information initially was managed manually in the single Google Spreadsheet, which we used as a database. Even though it was obvious that this wasn’t an efficient solution, it was a solution nonetheless. At least until we developed common workflow patterns, which allowed to start bringing in some much needed automation.</p><h3>Demo app details</h3><p>This demo shows a simplified UI created for that automation. The part of the app which it represents was designed to separate workflows and volunteer’s responsibilities at the different stages of appeal processing.</p><p>Simply put, it shows only the data which you need at the moment.</p><p>An app is accessible from both mobile and desktop, and allows to instantly navigate to any appeal using its id.</p><p>(The <code>appealId</code> is the only parameter needed, because it is the singular piece of data used to synchronize knowledge about current processing details between multiple volunteers)</p><h3>Production CRM details</h3><p>Currently production launch includes a full-stack app and a telegram bot that both provide access to the main DB of appeals.</p><p>Telegram bot is written with <code>Node.js</code>, <code>Grammy</code> and <code>Google Sheets API</code>. It also has an additional CRUD API for database access (<code>Node.js</code> + <code>Express</code>)</p><p>Full-stack CRM is pretty close to this demo, although it is restricted and requires an OAuth2 authentication (<code>Nuxt3</code> + <code>Passport</code>)</p><h3>Contact</h3><p>If you are interested in learning more about this app’s development, or possibly in hiring me to develop another automation workflow for you project, feel free to contact me:</p><ul><li><em>Email:</em> <a href="genek.tomashko@gmail.com">genek.tomashko@gmail.com</a></li><li><em>Phone:</em> <a href="tel:+380986774620">+38 098 677-46-20</a></li><li><em>Telegram:</em> <a href="https://t.me/gehecnk">genechk</a></li><li><em>LinkedIn:</em> <a href="https://www.linkedin.com/in/genechk/">genechk</a></li></ul>', 17), OE = {
  __name: "AppDescription",
  setup(e, { expose: t }) {
    return t({ frontmatter: {} }), (r, o) => (Q(), le("div", xE, [
      EE,
      U(A(Q3), null, {
        default: me(({ open: s }) => [
          U(A(q3), { class: "flex w-full justify-between rounded-lg bg-slate-100 transition-colors px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" }, {
            default: me(() => [
              wE,
              U(A(gE), {
                class: be([s ? "rotate-180 transform" : "", "h-5 w-5 text-slate-500 transition-transform"])
              }, null, 8, ["class"])
            ]),
            _: 2
          }, 1024),
          U(zl, {
            "enter-active-class": "transition duration-100 ease-out",
            "enter-from-class": "transform scale-95 opacity-0",
            "enter-to-class": "transform scale-100 opacity-100",
            "leave-active-class": "transition duration-75 ease-out",
            "leave-from-class": "transform scale-100 opacity-100",
            "leave-to-class": "transform scale-95 opacity-0"
          }, {
            default: me(() => [
              U(A(ex), { class: "pt-4" }, {
                default: me(() => [
                  SE
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      CE
    ]));
  }
}, TE = {
  class: /* @__PURE__ */ be([
    "relative flex min-h-screen w-full min-w-[360px] flex-col items-center overflow-hidden",
    "bg-gradient-to-br from-indigo-500 to-green-500 bg-fixed",
    "md:grid md:grid-cols-2"
  ])
}, NE = { class: "z-0 grid h-screen place-items-center items-center p-8 sm:h-full" }, _E = { class: "grid place-items-center" }, AE = { class: "flex flex-col gap-3 sm:gap-4" }, DE = { class: "relative my-4 select-none border-y-2 border-dotted border-white/50 py-4 text-[clamp(1.5rem,2vw+0.75rem,3.75rem)] text-white opacity-80" }, PE = { class: "z-1 relative h-screen w-full overflow-y-auto 2xl:p-4" }, RE = {
  class: /* @__PURE__ */ be([
    "mx-auto flex h-full w-full flex-col overflow-y-auto bg-white/60 pt-8",
    "2xl:max-w-3xl 2xl:rounded-3xl 2xl:shadow 2xl:shadow-slate-500/25"
  ])
}, IE = /* @__PURE__ */ C("header", { class: "mb-3 px-8 text-2xl text-slate-600 lg:text-3xl" }, [
  /* @__PURE__ */ C("h2", null, "Appeals for Humanitarian Aid CRM")
], -1), LE = { class: "flex-1 overflow-y-auto px-8" }, $E = {
  class: /* @__PURE__ */ be([
    "prose prose-lg prose-h3:mb-1 prose-h4:mb-0 prose-p:first:mt-0",
    "prose-code:mx-px prose-code:whitespace-nowrap prose-code:rounded-full prose-code:bg-slate-700 prose-code:px-2 prose-code:pb-0.5 prose-code:pt-px prose-code:font-normal prose-code:text-slate-100 prose-code:before:content-[] prose-code:after:content-[]",
    "prose-ul:pl-3.5 prose-li:marker:text-slate-700/25",
    "prose-a:text-sky-700 prose-a:no-underline"
  ])
}, kE = { class: "bg-white/30 px-8 pb-2.5 pt-1.5" }, ME = /* @__PURE__ */ C("span", null, " Got it, show me the app already ", -1), jE = /* @__PURE__ */ De({
  __name: "HomePage",
  setup(e) {
    return (t, n) => {
      const r = Wn("v-icon");
      return Q(), le("div", TE, [
        C("section", NE, [
          C("div", _E, [
            C("div", AE, [
              C("h1", DE, [
                ae(" Start Volunteering Today "),
                U(r, {
                  class: "absolute left-0 top-0 aspect-auto h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] select-none self-start",
                  name: "dopomoha-logo-icon-white",
                  "aria-label": "logo"
                })
              ]),
              U(A(Aa), { icon: "la-hands-helping-solid" }, {
                default: me(() => [
                  ae(" Get Involved ")
                ]),
                _: 1
              }),
              U(A(Aa), { icon: "la-edit" }, {
                default: me(() => [
                  ae(" Create & Edit Appeals ")
                ]),
                _: 1
              }),
              U(A(Aa), { icon: "md-querystats-outlined" }, {
                default: me(() => [
                  ae(" Review Statistics ")
                ]),
                _: 1
              }),
              U(A(Aa), { icon: "la-map-marked-alt-solid" }, {
                default: me(() => [
                  ae(" Manage Aid Delivery ")
                ]),
                _: 1
              }),
              U(A(Ut), {
                class: be([
                  "btn btn-login mt-4 w-auto rounded-full font-remissis text-lg",
                  "text-sky-600 hover:bg-yellow-300 hover:text-sky-500",
                  "sm:mt-3 sm:text-2xl"
                ]),
                to: { name: "dashboard" }
              }, {
                default: me(() => [
                  ae(" Get Started ")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        C("section", PE, [
          C("div", RE, [
            IE,
            C("main", LE, [
              C("div", $E, [
                U(A(OE))
              ])
            ]),
            C("footer", kE, [
              U(A(Ut), {
                class: "btn btn-link text-base text-sky-800 hover:border-primary-800 child-[span]:border-sky-800 child-[span]:transition-colors child-[span]:hover-parent:border-primary-800",
                to: { name: "dashboard" }
              }, {
                default: me(() => [
                  ME
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
function VE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const FE = { class: "flex flex-col items-stretch gap-4 overflow-y-auto" }, BE = { class: "font-remissis text-lg" }, UE = ["disabled"], HE = {
  key: 0,
  class: "grid grid-cols-[6rem_1fr] gap-5"
}, zE = { class: "font-bold" }, KE = { class: "max-w-md whitespace-pre-wrap break-words" }, GE = /* @__PURE__ */ De({
  __name: "AppealDetails",
  props: {
    onAddToDelivery: { type: Function },
    changeTab: { type: Function },
    presentationData: {},
    selectedAppeal: {}
  },
  setup(e) {
    return (t, n) => {
      var r, o;
      return Q(), le("div", FE, [
        C("h3", BE, " Appeal " + at(((r = t.selectedAppeal) == null ? void 0 : r.appealId) || "isn’t selected"), 1),
        t.selectedAppeal ? (Q(), le(Ye, { key: 0 }, [
          C("div", null, [
            C("button", {
              class: "btn-primary btn flex w-auto items-center gap-2 py-2 pl-3 pr-4 text-sm",
              disabled: !t.selectedAppeal || !!t.selectedAppeal.isAppealInDeliveryRoute,
              onClick: n[0] || (n[0] = () => t.onAddToDelivery())
            }, [
              U(A(VE), { class: "h-6 w-6 text-white" }),
              ae(" " + at((o = t.selectedAppeal) != null && o.isAppealInDeliveryRoute ? "Appeal added to route" : "Add to route"), 1)
            ], 8, UE)
          ]),
          (Q(!0), le(Ye, null, tr(t.presentationData, ({ name: s, semantic: i }) => (Q(), le(Ye, { key: i }, [
            t.selectedAppeal[i] ? (Q(), le("div", HE, [
              C("div", zE, at(s), 1),
              C("div", KE, at(t.selectedAppeal[i] || "—"), 1)
            ])) : Sr("", !0)
          ], 64))), 128))
        ], 64)) : Sr("", !0)
      ]);
    };
  }
});
function ZE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
    })
  ]);
}
function WE(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
var Tg = { exports: {} };
const YE = /* @__PURE__ */ Nv(N2);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function jp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(n), !0).forEach(function(r) {
      XE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ha(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ha = function(t) {
    return typeof t;
  } : Ha = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ha(e);
}
function XE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $n() {
  return $n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $n.apply(this, arguments);
}
function JE(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function QE(e, t) {
  if (e == null)
    return {};
  var n = JE(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      r = s[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function qE(e) {
  return ew(e) || tw(e) || nw(e) || rw();
}
function ew(e) {
  if (Array.isArray(e))
    return Fu(e);
}
function tw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function nw(e, t) {
  if (e) {
    if (typeof e == "string")
      return Fu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fu(e, t);
  }
}
function Fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function rw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ow = "1.14.0";
function br(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var _r = br(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), la = br(/Edge/i), Vp = br(/firefox/i), Ei = br(/safari/i) && !br(/chrome/i) && !br(/android/i), Ng = br(/iP(ad|od|hone)/i), sw = br(/chrome/i) && br(/android/i), _g = {
  capture: !1,
  passive: !1
};
function qe(e, t, n) {
  e.addEventListener(t, n, !_r && _g);
}
function Je(e, t, n) {
  e.removeEventListener(t, n, !_r && _g);
}
function xl(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function iw(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Vn(e, t, n, r) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && xl(e, t) : xl(e, t)) || r && e === n)
        return e;
      if (e === n)
        break;
    } while (e = iw(e));
  }
  return null;
}
var Fp = /\s+/g;
function wt(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var r = (" " + e.className + " ").replace(Fp, " ").replace(" " + t + " ", " ");
      e.className = (r + (n ? " " + t : "")).replace(Fp, " ");
    }
}
function Oe(e, t, n) {
  var r = e && e.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function Io(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var r = Oe(e, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function Ag(e, t, n) {
  if (e) {
    var r = e.getElementsByTagName(t), o = 0, s = r.length;
    if (n)
      for (; o < s; o++)
        n(r[o], o);
    return r;
  }
  return [];
}
function rr() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Et(e, t, n, r, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var s, i, a, l, c, u, d;
    if (e !== window && e.parentNode && e !== rr() ? (s = e.getBoundingClientRect(), i = s.top, a = s.left, l = s.bottom, c = s.right, u = s.height, d = s.width) : (i = 0, a = 0, l = window.innerHeight, c = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !_r))
      do
        if (o && o.getBoundingClientRect && (Oe(o, "transform") !== "none" || n && Oe(o, "position") !== "static")) {
          var f = o.getBoundingClientRect();
          i -= f.top + parseInt(Oe(o, "border-top-width")), a -= f.left + parseInt(Oe(o, "border-left-width")), l = i + s.height, c = a + s.width;
          break;
        }
      while (o = o.parentNode);
    if (r && e !== window) {
      var p = Io(o || e), h = p && p.a, v = p && p.d;
      p && (i /= v, a /= h, d /= h, u /= v, l = i + u, c = a + d);
    }
    return {
      top: i,
      left: a,
      bottom: l,
      right: c,
      width: d,
      height: u
    };
  }
}
function Bp(e, t, n) {
  for (var r = Wr(e, !0), o = Et(e)[t]; r; ) {
    var s = Et(r)[n], i = void 0;
    if (n === "top" || n === "left" ? i = o >= s : i = o <= s, !i)
      return r;
    if (r === rr())
      break;
    r = Wr(r, !1);
  }
  return !1;
}
function Is(e, t, n, r) {
  for (var o = 0, s = 0, i = e.children; s < i.length; ) {
    if (i[s].style.display !== "none" && i[s] !== Me.ghost && (r || i[s] !== Me.dragged) && Vn(i[s], n.draggable, e, !1)) {
      if (o === t)
        return i[s];
      o++;
    }
    s++;
  }
  return null;
}
function Qd(e, t) {
  for (var n = e.lastElementChild; n && (n === Me.ghost || Oe(n, "display") === "none" || t && !xl(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function Nt(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Me.clone && (!t || xl(e, t)) && n++;
  return n;
}
function Up(e) {
  var t = 0, n = 0, r = rr();
  if (e)
    do {
      var o = Io(e), s = o.a, i = o.d;
      t += e.scrollLeft * s, n += e.scrollTop * i;
    } while (e !== r && (e = e.parentNode));
  return [t, n];
}
function aw(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] === e[n][r])
          return Number(n);
    }
  return -1;
}
function Wr(e, t) {
  if (!e || !e.getBoundingClientRect)
    return rr();
  var n = e, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = Oe(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return rr();
        if (r || t)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return rr();
}
function lw(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Mc(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var wi;
function Dg(e, t) {
  return function() {
    if (!wi) {
      var n = arguments, r = this;
      n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), wi = setTimeout(function() {
        wi = void 0;
      }, t);
    }
  };
}
function cw() {
  clearTimeout(wi), wi = void 0;
}
function Pg(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function qd(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Hp(e, t) {
  Oe(e, "position", "absolute"), Oe(e, "top", t.top), Oe(e, "left", t.left), Oe(e, "width", t.width), Oe(e, "height", t.height);
}
function jc(e) {
  Oe(e, "position", ""), Oe(e, "top", ""), Oe(e, "left", ""), Oe(e, "width", ""), Oe(e, "height", "");
}
var Jt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function uw() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(o) {
          if (!(Oe(o, "display") === "none" || o === Me.ghost)) {
            e.push({
              target: o,
              rect: Et(o)
            });
            var s = ir({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var i = Io(o, !0);
              i && (s.top -= i.f, s.left -= i.e);
            }
            o.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(r) {
      e.push(r);
    },
    removeAnimationState: function(r) {
      e.splice(aw(e, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof r == "function" && r();
        return;
      }
      var s = !1, i = 0;
      e.forEach(function(a) {
        var l = 0, c = a.target, u = c.fromRect, d = Et(c), f = c.prevFromRect, p = c.prevToRect, h = a.rect, v = Io(c, !0);
        v && (d.top -= v.f, d.left -= v.e), c.toRect = d, c.thisAnimationDuration && Mc(f, d) && !Mc(u, d) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - d.top) / (h.left - d.left) === (u.top - d.top) / (u.left - d.left) && (l = fw(h, f, p, o.options)), Mc(d, u) || (c.prevFromRect = u, c.prevToRect = d, l || (l = o.options.animation), o.animate(c, h, d, l)), l && (s = !0, i = Math.max(i, l), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, l), c.thisAnimationDuration = l);
      }), clearTimeout(t), s ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, i) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, o, s, i) {
      if (i) {
        Oe(r, "transition", ""), Oe(r, "transform", "");
        var a = Io(this.el), l = a && a.a, c = a && a.d, u = (o.left - s.left) / (l || 1), d = (o.top - s.top) / (c || 1);
        r.animatingX = !!u, r.animatingY = !!d, Oe(r, "transform", "translate3d(" + u + "px," + d + "px,0)"), this.forRepaintDummy = dw(r), Oe(r, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), Oe(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          Oe(r, "transition", ""), Oe(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, i);
      }
    }
  };
}
function dw(e) {
  return e.offsetWidth;
}
function fw(e, t, n, r) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation;
}
var es = [], Vc = {
  initializeByDefault: !0
}, ca = {
  mount: function(t) {
    for (var n in Vc)
      Vc.hasOwnProperty(n) && !(n in t) && (t[n] = Vc[n]);
    es.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), es.push(t);
  },
  pluginEvent: function(t, n, r) {
    var o = this;
    this.eventCanceled = !1, r.cancel = function() {
      o.eventCanceled = !0;
    };
    var s = t + "Global";
    es.forEach(function(i) {
      n[i.pluginName] && (n[i.pluginName][s] && n[i.pluginName][s](ir({
        sortable: n
      }, r)), n.options[i.pluginName] && n[i.pluginName][t] && n[i.pluginName][t](ir({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(t, n, r, o) {
    es.forEach(function(a) {
      var l = a.pluginName;
      if (!(!t.options[l] && !a.initializeByDefault)) {
        var c = new a(t, n, t.options);
        c.sortable = t, c.options = t.options, t[l] = c, $n(r, c.defaults);
      }
    });
    for (var s in t.options)
      if (t.options.hasOwnProperty(s)) {
        var i = this.modifyOption(t, s, t.options[s]);
        typeof i < "u" && (t.options[s] = i);
      }
  },
  getEventProperties: function(t, n) {
    var r = {};
    return es.forEach(function(o) {
      typeof o.eventProperties == "function" && $n(r, o.eventProperties.call(n[o.pluginName], t));
    }), r;
  },
  modifyOption: function(t, n, r) {
    var o;
    return es.forEach(function(s) {
      t[s.pluginName] && s.optionListeners && typeof s.optionListeners[n] == "function" && (o = s.optionListeners[n].call(t[s.pluginName], r));
    }), o;
  }
};
function oi(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, o = e.targetEl, s = e.cloneEl, i = e.toEl, a = e.fromEl, l = e.oldIndex, c = e.newIndex, u = e.oldDraggableIndex, d = e.newDraggableIndex, f = e.originalEvent, p = e.putSortable, h = e.extraEventProperties;
  if (t = t || n && n[Jt], !!t) {
    var v, m = t.options, b = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !_r && !la ? v = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(r, !0, !0)), v.to = i || n, v.from = a || n, v.item = o || n, v.clone = s, v.oldIndex = l, v.newIndex = c, v.oldDraggableIndex = u, v.newDraggableIndex = d, v.originalEvent = f, v.pullMode = p ? p.lastPutMode : void 0;
    var x = ir(ir({}, h), ca.getEventProperties(r, t));
    for (var g in x)
      v[g] = x[g];
    n && n.dispatchEvent(v), m[b] && m[b].call(t, v);
  }
}
var pw = ["evt"], an = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = r.evt, s = QE(r, pw);
  ca.pluginEvent.bind(Me)(t, n, ir({
    dragEl: ue,
    parentEl: Ct,
    ghostEl: Ge,
    rootEl: xt,
    nextEl: So,
    lastDownEl: za,
    cloneEl: Ot,
    cloneHidden: Hr,
    dragStarted: si,
    putSortable: Ft,
    activeSortable: Me.active,
    originalEvent: o,
    oldIndex: ds,
    oldDraggableIndex: Si,
    newIndex: vn,
    newDraggableIndex: jr,
    hideGhostForTarget: $g,
    unhideGhostForTarget: kg,
    cloneNowHidden: function() {
      Hr = !0;
    },
    cloneNowShown: function() {
      Hr = !1;
    },
    dispatchSortableEvent: function(a) {
      nn({
        sortable: n,
        name: a,
        originalEvent: o
      });
    }
  }, s));
};
function nn(e) {
  oi(ir({
    putSortable: Ft,
    cloneEl: Ot,
    targetEl: ue,
    rootEl: xt,
    oldIndex: ds,
    oldDraggableIndex: Si,
    newIndex: vn,
    newDraggableIndex: jr
  }, e));
}
var ue, Ct, Ge, xt, So, za, Ot, Hr, ds, vn, Si, jr, Da, Ft, as = !1, El = !1, wl = [], yo, kn, Fc, Bc, zp, Kp, si, ts, Ci, Oi = !1, Pa = !1, Ka, Zt, Uc = [], Bu = !1, Sl = [], nc = typeof document < "u", Ra = Ng, Gp = la || _r ? "cssFloat" : "float", hw = nc && !sw && !Ng && "draggable" in document.createElement("div"), Rg = function() {
  if (nc) {
    if (_r)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ig = function(t, n) {
  var r = Oe(t), o = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = Is(t, 0, n), i = Is(t, 1, n), a = s && Oe(s), l = i && Oe(i), c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + Et(s).width, u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(i).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && a.float && a.float !== "none") {
    var d = a.float === "left" ? "left" : "right";
    return i && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return s && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || c >= o && r[Gp] === "none" || i && r[Gp] === "none" && c + u > o) ? "vertical" : "horizontal";
}, mw = function(t, n, r) {
  var o = r ? t.left : t.top, s = r ? t.right : t.bottom, i = r ? t.width : t.height, a = r ? n.left : n.top, l = r ? n.right : n.bottom, c = r ? n.width : n.height;
  return o === a || s === l || o + i / 2 === a + c / 2;
}, vw = function(t, n) {
  var r;
  return wl.some(function(o) {
    var s = o[Jt].options.emptyInsertThreshold;
    if (!(!s || Qd(o))) {
      var i = Et(o), a = t >= i.left - s && t <= i.right + s, l = n >= i.top - s && n <= i.bottom + s;
      if (a && l)
        return r = o;
    }
  }), r;
}, Lg = function(t) {
  function n(s, i) {
    return function(a, l, c, u) {
      var d = a.options.group.name && l.options.group.name && a.options.group.name === l.options.group.name;
      if (s == null && (i || d))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (i && s === "clone")
        return s;
      if (typeof s == "function")
        return n(s(a, l, c, u), i)(a, l, c, u);
      var f = (i ? a : l).options.group.name;
      return s === !0 || typeof s == "string" && s === f || s.join && s.indexOf(f) > -1;
    };
  }
  var r = {}, o = t.group;
  (!o || Ha(o) != "object") && (o = {
    name: o
  }), r.name = o.name, r.checkPull = n(o.pull, !0), r.checkPut = n(o.put), r.revertClone = o.revertClone, t.group = r;
}, $g = function() {
  !Rg && Ge && Oe(Ge, "display", "none");
}, kg = function() {
  !Rg && Ge && Oe(Ge, "display", "");
};
nc && document.addEventListener("click", function(e) {
  if (El)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), El = !1, !1;
}, !0);
var bo = function(t) {
  if (ue) {
    t = t.touches ? t.touches[0] : t;
    var n = vw(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var o in t)
        t.hasOwnProperty(o) && (r[o] = t[o]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[Jt]._onDragOver(r);
    }
  }
}, gw = function(t) {
  ue && ue.parentNode[Jt]._isOutsideThisEl(t.target);
};
function Me(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = $n({}, t), e[Jt] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Ig(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(i, a) {
      i.setData("Text", a.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Me.supportPointer !== !1 && "PointerEvent" in window && !Ei,
    emptyInsertThreshold: 5
  };
  ca.initializePlugins(this, e, n);
  for (var r in n)
    !(r in t) && (t[r] = n[r]);
  Lg(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : hw, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? qe(e, "pointerdown", this._onTapStart) : (qe(e, "mousedown", this._onTapStart), qe(e, "touchstart", this._onTapStart)), this.nativeDraggable && (qe(e, "dragover", this), qe(e, "dragenter", this)), wl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), $n(this, uw());
}
Me.prototype = /** @lends Sortable.prototype */
{
  constructor: Me,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (ts = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, ue) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, o = this.options, s = o.preventOnFilter, i = t.type, a = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (a || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, u = o.filter;
      if (Ow(r), !ue && !(/mousedown|pointerdown/.test(i) && t.button !== 0 || o.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Ei && l && l.tagName.toUpperCase() === "SELECT") && (l = Vn(l, o.draggable, r, !1), !(l && l.animated) && za !== l)) {
        if (ds = Nt(l), Si = Nt(l, o.draggable), typeof u == "function") {
          if (u.call(this, t, l, this)) {
            nn({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: l,
              toEl: r,
              fromEl: r
            }), an("filter", n, {
              evt: t
            }), s && t.cancelable && t.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(d) {
          if (d = Vn(c, d.trim(), r, !1), d)
            return nn({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: r,
              toEl: r
            }), an("filter", n, {
              evt: t
            }), !0;
        }), u)) {
          s && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !Vn(c, o.handle, r, !1) || this._prepareDragStart(t, a, l);
      }
    }
  },
  _prepareDragStart: function(t, n, r) {
    var o = this, s = o.el, i = o.options, a = s.ownerDocument, l;
    if (r && !ue && r.parentNode === s) {
      var c = Et(r);
      if (xt = s, ue = r, Ct = ue.parentNode, So = ue.nextSibling, za = r, Da = i.group, Me.dragged = ue, yo = {
        target: ue,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, zp = yo.clientX - c.left, Kp = yo.clientY - c.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, ue.style["will-change"] = "all", l = function() {
        if (an("delayEnded", o, {
          evt: t
        }), Me.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Vp && o.nativeDraggable && (ue.draggable = !0), o._triggerDragStart(t, n), nn({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), wt(ue, i.chosenClass, !0);
      }, i.ignore.split(",").forEach(function(u) {
        Ag(ue, u.trim(), Hc);
      }), qe(a, "dragover", bo), qe(a, "mousemove", bo), qe(a, "touchmove", bo), qe(a, "mouseup", o._onDrop), qe(a, "touchend", o._onDrop), qe(a, "touchcancel", o._onDrop), Vp && this.nativeDraggable && (this.options.touchStartThreshold = 4, ue.draggable = !0), an("delayStart", this, {
        evt: t
      }), i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(la || _r))) {
        if (Me.eventCanceled) {
          this._onDrop();
          return;
        }
        qe(a, "mouseup", o._disableDelayedDrag), qe(a, "touchend", o._disableDelayedDrag), qe(a, "touchcancel", o._disableDelayedDrag), qe(a, "mousemove", o._delayedDragTouchMoveHandler), qe(a, "touchmove", o._delayedDragTouchMoveHandler), i.supportPointer && qe(a, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(l, i.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ue && Hc(ue), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    Je(t, "mouseup", this._disableDelayedDrag), Je(t, "touchend", this._disableDelayedDrag), Je(t, "touchcancel", this._disableDelayedDrag), Je(t, "mousemove", this._delayedDragTouchMoveHandler), Je(t, "touchmove", this._delayedDragTouchMoveHandler), Je(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? qe(document, "pointermove", this._onTouchMove) : n ? qe(document, "touchmove", this._onTouchMove) : qe(document, "mousemove", this._onTouchMove) : (qe(ue, "dragend", this), qe(xt, "dragstart", this._onDragStart));
    try {
      document.selection ? Ga(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (as = !1, xt && ue) {
      an("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && qe(document, "dragover", gw);
      var r = this.options;
      !t && wt(ue, r.dragClass, !1), wt(ue, r.ghostClass, !0), Me.active = this, t && this._appendGhost(), nn({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (kn) {
      this._lastX = kn.clientX, this._lastY = kn.clientY, $g();
      for (var t = document.elementFromPoint(kn.clientX, kn.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(kn.clientX, kn.clientY), t !== n); )
        n = t;
      if (ue.parentNode[Jt]._isOutsideThisEl(t), n)
        do {
          if (n[Jt]) {
            var r = void 0;
            if (r = n[Jt]._onDragOver({
              clientX: kn.clientX,
              clientY: kn.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      kg();
    }
  },
  _onTouchMove: function(t) {
    if (yo) {
      var n = this.options, r = n.fallbackTolerance, o = n.fallbackOffset, s = t.touches ? t.touches[0] : t, i = Ge && Io(Ge, !0), a = Ge && i && i.a, l = Ge && i && i.d, c = Ra && Zt && Up(Zt), u = (s.clientX - yo.clientX + o.x) / (a || 1) + (c ? c[0] - Uc[0] : 0) / (a || 1), d = (s.clientY - yo.clientY + o.y) / (l || 1) + (c ? c[1] - Uc[1] : 0) / (l || 1);
      if (!Me.active && !as) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (Ge) {
        i ? (i.e += u - (Fc || 0), i.f += d - (Bc || 0)) : i = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: d
        };
        var f = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
        Oe(Ge, "webkitTransform", f), Oe(Ge, "mozTransform", f), Oe(Ge, "msTransform", f), Oe(Ge, "transform", f), Fc = u, Bc = d, kn = s;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ge) {
      var t = this.options.fallbackOnBody ? document.body : xt, n = Et(ue, !0, Ra, !0, t), r = this.options;
      if (Ra) {
        for (Zt = t; Oe(Zt, "position") === "static" && Oe(Zt, "transform") === "none" && Zt !== document; )
          Zt = Zt.parentNode;
        Zt !== document.body && Zt !== document.documentElement ? (Zt === document && (Zt = rr()), n.top += Zt.scrollTop, n.left += Zt.scrollLeft) : Zt = rr(), Uc = Up(Zt);
      }
      Ge = ue.cloneNode(!0), wt(Ge, r.ghostClass, !1), wt(Ge, r.fallbackClass, !0), wt(Ge, r.dragClass, !0), Oe(Ge, "transition", ""), Oe(Ge, "transform", ""), Oe(Ge, "box-sizing", "border-box"), Oe(Ge, "margin", 0), Oe(Ge, "top", n.top), Oe(Ge, "left", n.left), Oe(Ge, "width", n.width), Oe(Ge, "height", n.height), Oe(Ge, "opacity", "0.8"), Oe(Ge, "position", Ra ? "absolute" : "fixed"), Oe(Ge, "zIndex", "100000"), Oe(Ge, "pointerEvents", "none"), Me.ghost = Ge, t.appendChild(Ge), Oe(Ge, "transform-origin", zp / parseInt(Ge.style.width) * 100 + "% " + Kp / parseInt(Ge.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, o = t.dataTransfer, s = r.options;
    if (an("dragStart", this, {
      evt: t
    }), Me.eventCanceled) {
      this._onDrop();
      return;
    }
    an("setupClone", this), Me.eventCanceled || (Ot = qd(ue), Ot.draggable = !1, Ot.style["will-change"] = "", this._hideClone(), wt(Ot, this.options.chosenClass, !1), Me.clone = Ot), r.cloneId = Ga(function() {
      an("clone", r), !Me.eventCanceled && (r.options.removeCloneOnHide || xt.insertBefore(Ot, ue), r._hideClone(), nn({
        sortable: r,
        name: "clone"
      }));
    }), !n && wt(ue, s.dragClass, !0), n ? (El = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Je(document, "mouseup", r._onDrop), Je(document, "touchend", r._onDrop), Je(document, "touchcancel", r._onDrop), o && (o.effectAllowed = "move", s.setData && s.setData.call(r, o, ue)), qe(document, "drop", r), Oe(ue, "transform", "translateZ(0)")), as = !0, r._dragStartId = Ga(r._dragStarted.bind(r, n, t)), qe(document, "selectstart", r), si = !0, Ei && Oe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, o, s, i, a = this.options, l = a.group, c = Me.active, u = Da === l, d = a.sort, f = Ft || c, p, h = this, v = !1;
    if (Bu)
      return;
    function m(B, Ce) {
      an(B, h, ir({
        evt: t,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: i,
        dragRect: o,
        targetRect: s,
        canSort: d,
        fromSortable: f,
        target: r,
        completed: x,
        onMove: function(Ve, ee) {
          return Ia(xt, n, ue, o, Ve, Et(Ve), t, ee);
        },
        changed: g
      }, Ce));
    }
    function b() {
      m("dragOverAnimationCapture"), h.captureAnimationState(), h !== f && f.captureAnimationState();
    }
    function x(B) {
      return m("dragOverCompleted", {
        insertion: B
      }), B && (u ? c._hideClone() : c._showClone(h), h !== f && (wt(ue, Ft ? Ft.options.ghostClass : c.options.ghostClass, !1), wt(ue, a.ghostClass, !0)), Ft !== h && h !== Me.active ? Ft = h : h === Me.active && Ft && (Ft = null), f === h && (h._ignoreWhileAnimating = r), h.animateAll(function() {
        m("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (r === ue && !ue.animated || r === n && !r.animated) && (ts = null), !a.dragoverBubble && !t.rootEl && r !== document && (ue.parentNode[Jt]._isOutsideThisEl(t.target), !B && bo(t)), !a.dragoverBubble && t.stopPropagation && t.stopPropagation(), v = !0;
    }
    function g() {
      vn = Nt(ue), jr = Nt(ue, a.draggable), nn({
        sortable: h,
        name: "change",
        toEl: n,
        newIndex: vn,
        newDraggableIndex: jr,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = Vn(r, a.draggable, n, !0), m("dragOver"), Me.eventCanceled)
      return v;
    if (ue.contains(t.target) || r.animated && r.animatingX && r.animatingY || h._ignoreWhileAnimating === r)
      return x(!1);
    if (El = !1, c && !a.disabled && (u ? d || (i = Ct !== xt) : Ft === this || (this.lastPutMode = Da.checkPull(this, c, ue, t)) && l.checkPut(this, c, ue, t))) {
      if (p = this._getDirection(t, r) === "vertical", o = Et(ue), m("dragOverValid"), Me.eventCanceled)
        return v;
      if (i)
        return Ct = xt, b(), this._hideClone(), m("revert"), Me.eventCanceled || (So ? xt.insertBefore(ue, So) : xt.appendChild(ue)), x(!0);
      var y = Qd(n, a.draggable);
      if (!y || Ew(t, p, this) && !y.animated) {
        if (y === ue)
          return x(!1);
        if (y && n === t.target && (r = y), r && (s = Et(r)), Ia(xt, n, ue, o, r, s, t, !!r) !== !1)
          return b(), n.appendChild(ue), Ct = n, g(), x(!0);
      } else if (y && xw(t, p, this)) {
        var E = Is(n, 0, a, !0);
        if (E === ue)
          return x(!1);
        if (r = E, s = Et(r), Ia(xt, n, ue, o, r, s, t, !1) !== !1)
          return b(), n.insertBefore(ue, E), Ct = n, g(), x(!0);
      } else if (r.parentNode === n) {
        s = Et(r);
        var S = 0, T, D = ue.parentNode !== n, _ = !mw(ue.animated && ue.toRect || o, r.animated && r.toRect || s, p), N = p ? "top" : "left", R = Bp(r, "top", "top") || Bp(ue, "top", "top"), M = R ? R.scrollTop : void 0;
        ts !== r && (T = s[N], Oi = !1, Pa = !_ && a.invertSwap || D), S = ww(t, r, s, p, _ ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, Pa, ts === r);
        var $;
        if (S !== 0) {
          var H = Nt(ue);
          do
            H -= S, $ = Ct.children[H];
          while ($ && (Oe($, "display") === "none" || $ === Ge));
        }
        if (S === 0 || $ === r)
          return x(!1);
        ts = r, Ci = S;
        var G = r.nextElementSibling, P = !1;
        P = S === 1;
        var V = Ia(xt, n, ue, o, r, s, t, P);
        if (V !== !1)
          return (V === 1 || V === -1) && (P = V === 1), Bu = !0, setTimeout(bw, 30), b(), P && !G ? n.appendChild(ue) : r.parentNode.insertBefore(ue, P ? G : r), R && Pg(R, 0, M - R.scrollTop), Ct = ue.parentNode, T !== void 0 && !Pa && (Ka = Math.abs(T - Et(r)[N])), g(), x(!0);
      }
      if (n.contains(ue))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Je(document, "mousemove", this._onTouchMove), Je(document, "touchmove", this._onTouchMove), Je(document, "pointermove", this._onTouchMove), Je(document, "dragover", bo), Je(document, "mousemove", bo), Je(document, "touchmove", bo);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Je(t, "mouseup", this._onDrop), Je(t, "touchend", this._onDrop), Je(t, "pointerup", this._onDrop), Je(t, "touchcancel", this._onDrop), Je(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (vn = Nt(ue), jr = Nt(ue, r.draggable), an("drop", this, {
      evt: t
    }), Ct = ue && ue.parentNode, vn = Nt(ue), jr = Nt(ue, r.draggable), Me.eventCanceled) {
      this._nulling();
      return;
    }
    as = !1, Pa = !1, Oi = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Uu(this.cloneId), Uu(this._dragStartId), this.nativeDraggable && (Je(document, "drop", this), Je(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ei && Oe(document.body, "user-select", ""), Oe(ue, "transform", ""), t && (si && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), Ge && Ge.parentNode && Ge.parentNode.removeChild(Ge), (xt === Ct || Ft && Ft.lastPutMode !== "clone") && Ot && Ot.parentNode && Ot.parentNode.removeChild(Ot), ue && (this.nativeDraggable && Je(ue, "dragend", this), Hc(ue), ue.style["will-change"] = "", si && !as && wt(ue, Ft ? Ft.options.ghostClass : this.options.ghostClass, !1), wt(ue, this.options.chosenClass, !1), nn({
      sortable: this,
      name: "unchoose",
      toEl: Ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), xt !== Ct ? (vn >= 0 && (nn({
      rootEl: Ct,
      name: "add",
      toEl: Ct,
      fromEl: xt,
      originalEvent: t
    }), nn({
      sortable: this,
      name: "remove",
      toEl: Ct,
      originalEvent: t
    }), nn({
      rootEl: Ct,
      name: "sort",
      toEl: Ct,
      fromEl: xt,
      originalEvent: t
    }), nn({
      sortable: this,
      name: "sort",
      toEl: Ct,
      originalEvent: t
    })), Ft && Ft.save()) : vn !== ds && vn >= 0 && (nn({
      sortable: this,
      name: "update",
      toEl: Ct,
      originalEvent: t
    }), nn({
      sortable: this,
      name: "sort",
      toEl: Ct,
      originalEvent: t
    })), Me.active && ((vn == null || vn === -1) && (vn = ds, jr = Si), nn({
      sortable: this,
      name: "end",
      toEl: Ct,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    an("nulling", this), xt = ue = Ct = Ge = So = Ot = za = Hr = yo = kn = si = vn = jr = ds = Si = ts = Ci = Ft = Da = Me.dragged = Me.ghost = Me.clone = Me.active = null, Sl.forEach(function(t) {
      t.checked = !0;
    }), Sl.length = Fc = Bc = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        ue && (this._onDragOver(t), yw(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, r = this.el.children, o = 0, s = r.length, i = this.options; o < s; o++)
      n = r[o], Vn(n, i.draggable, this.el, !1) && t.push(n.getAttribute(i.dataIdAttr) || Cw(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var r = {}, o = this.el;
    this.toArray().forEach(function(s, i) {
      var a = o.children[i];
      Vn(a, this.options.draggable, o, !1) && (r[s] = a);
    }, this), n && this.captureAnimationState(), t.forEach(function(s) {
      r[s] && (o.removeChild(r[s]), o.appendChild(r[s]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return Vn(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var r = this.options;
    if (n === void 0)
      return r[t];
    var o = ca.modifyOption(this, t, n);
    typeof o < "u" ? r[t] = o : r[t] = n, t === "group" && Lg(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    an("destroy", this);
    var t = this.el;
    t[Jt] = null, Je(t, "mousedown", this._onTapStart), Je(t, "touchstart", this._onTapStart), Je(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Je(t, "dragover", this), Je(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), wl.splice(wl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Hr) {
      if (an("hideClone", this), Me.eventCanceled)
        return;
      Oe(Ot, "display", "none"), this.options.removeCloneOnHide && Ot.parentNode && Ot.parentNode.removeChild(Ot), Hr = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Hr) {
      if (an("showClone", this), Me.eventCanceled)
        return;
      ue.parentNode == xt && !this.options.group.revertClone ? xt.insertBefore(Ot, ue) : So ? xt.insertBefore(Ot, So) : xt.appendChild(Ot), this.options.group.revertClone && this.animate(ue, Ot), Oe(Ot, "display", ""), Hr = !1;
    }
  }
};
function yw(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ia(e, t, n, r, o, s, i, a) {
  var l, c = e[Jt], u = c.options.onMove, d;
  return window.CustomEvent && !_r && !la ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = e, l.dragged = n, l.draggedRect = r, l.related = o || t, l.relatedRect = s || Et(t), l.willInsertAfter = a, l.originalEvent = i, e.dispatchEvent(l), u && (d = u.call(c, l, i)), d;
}
function Hc(e) {
  e.draggable = !1;
}
function bw() {
  Bu = !1;
}
function xw(e, t, n) {
  var r = Et(Is(n.el, 0, n.options, !0)), o = 10;
  return t ? e.clientX < r.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < r.top - o || e.clientY < r.bottom && e.clientX < r.left;
}
function Ew(e, t, n) {
  var r = Et(Qd(n.el, n.options.draggable)), o = 10;
  return t ? e.clientX > r.right + o || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + o;
}
function ww(e, t, n, r, o, s, i, a) {
  var l = r ? e.clientY : e.clientX, c = r ? n.height : n.width, u = r ? n.top : n.left, d = r ? n.bottom : n.right, f = !1;
  if (!i) {
    if (a && Ka < c * o) {
      if (!Oi && (Ci === 1 ? l > u + c * s / 2 : l < d - c * s / 2) && (Oi = !0), Oi)
        f = !0;
      else if (Ci === 1 ? l < u + Ka : l > d - Ka)
        return -Ci;
    } else if (l > u + c * (1 - o) / 2 && l < d - c * (1 - o) / 2)
      return Sw(t);
  }
  return f = f || i, f && (l < u + c * s / 2 || l > d - c * s / 2) ? l > u + c / 2 ? 1 : -1 : 0;
}
function Sw(e) {
  return Nt(ue) < Nt(e) ? 1 : -1;
}
function Cw(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function Ow(e) {
  Sl.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var r = t[n];
    r.checked && Sl.push(r);
  }
}
function Ga(e) {
  return setTimeout(e, 0);
}
function Uu(e) {
  return clearTimeout(e);
}
nc && qe(document, "touchmove", function(e) {
  (Me.active || as) && e.cancelable && e.preventDefault();
});
Me.utils = {
  on: qe,
  off: Je,
  css: Oe,
  find: Ag,
  is: function(t, n) {
    return !!Vn(t, n, t, !1);
  },
  extend: lw,
  throttle: Dg,
  closest: Vn,
  toggleClass: wt,
  clone: qd,
  index: Nt,
  nextTick: Ga,
  cancelNextTick: Uu,
  detectDirection: Ig,
  getChild: Is
};
Me.get = function(e) {
  return e[Jt];
};
Me.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (Me.utils = ir(ir({}, Me.utils), r.utils)), ca.mount(r);
  });
};
Me.create = function(e, t) {
  return new Me(e, t);
};
Me.version = ow;
var It = [], ii, Hu, zu = !1, zc, Kc, Cl, ai;
function Tw() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? qe(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? qe(document, "touchmove", this._handleFallbackAutoScroll) : qe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Je(document, "dragover", this._handleAutoScroll) : (Je(document, "pointermove", this._handleFallbackAutoScroll), Je(document, "touchmove", this._handleFallbackAutoScroll), Je(document, "mousemove", this._handleFallbackAutoScroll)), Zp(), Za(), cw();
    },
    nulling: function() {
      Cl = Hu = ii = zu = ai = zc = Kc = null, It.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var o = this, s = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(s, i);
      if (Cl = n, r || this.options.forceAutoScrollFallback || la || _r || Ei) {
        Gc(n, this.options, a, r);
        var l = Wr(a, !0);
        zu && (!ai || s !== zc || i !== Kc) && (ai && Zp(), ai = setInterval(function() {
          var c = Wr(document.elementFromPoint(s, i), !0);
          c !== l && (l = c, Za()), Gc(n, o.options, c, r);
        }, 10), zc = s, Kc = i);
      } else {
        if (!this.options.bubbleScroll || Wr(a, !0) === rr()) {
          Za();
          return;
        }
        Gc(n, this.options, Wr(a, !1), !1);
      }
    }
  }, $n(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Za() {
  It.forEach(function(e) {
    clearInterval(e.pid);
  }), It = [];
}
function Zp() {
  clearInterval(ai);
}
var Gc = Dg(function(e, t, n, r) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, s = (e.touches ? e.touches[0] : e).clientY, i = t.scrollSensitivity, a = t.scrollSpeed, l = rr(), c = !1, u;
    Hu !== n && (Hu = n, Za(), ii = t.scroll, u = t.scrollFn, ii === !0 && (ii = Wr(n, !0)));
    var d = 0, f = ii;
    do {
      var p = f, h = Et(p), v = h.top, m = h.bottom, b = h.left, x = h.right, g = h.width, y = h.height, E = void 0, S = void 0, T = p.scrollWidth, D = p.scrollHeight, _ = Oe(p), N = p.scrollLeft, R = p.scrollTop;
      p === l ? (E = g < T && (_.overflowX === "auto" || _.overflowX === "scroll" || _.overflowX === "visible"), S = y < D && (_.overflowY === "auto" || _.overflowY === "scroll" || _.overflowY === "visible")) : (E = g < T && (_.overflowX === "auto" || _.overflowX === "scroll"), S = y < D && (_.overflowY === "auto" || _.overflowY === "scroll"));
      var M = E && (Math.abs(x - o) <= i && N + g < T) - (Math.abs(b - o) <= i && !!N), $ = S && (Math.abs(m - s) <= i && R + y < D) - (Math.abs(v - s) <= i && !!R);
      if (!It[d])
        for (var H = 0; H <= d; H++)
          It[H] || (It[H] = {});
      (It[d].vx != M || It[d].vy != $ || It[d].el !== p) && (It[d].el = p, It[d].vx = M, It[d].vy = $, clearInterval(It[d].pid), (M != 0 || $ != 0) && (c = !0, It[d].pid = setInterval((function() {
        r && this.layer === 0 && Me.active._onTouchMove(Cl);
        var G = It[this.layer].vy ? It[this.layer].vy * a : 0, P = It[this.layer].vx ? It[this.layer].vx * a : 0;
        typeof u == "function" && u.call(Me.dragged.parentNode[Jt], P, G, e, Cl, It[this.layer].el) !== "continue" || Pg(It[this.layer].el, P, G);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && f !== l && (f = Wr(f, !1)));
    zu = c;
  }
}, 30), Mg = function(t) {
  var n = t.originalEvent, r = t.putSortable, o = t.dragEl, s = t.activeSortable, i = t.dispatchSortableEvent, a = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (n) {
    var c = r || s;
    a();
    var u = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(u.clientX, u.clientY);
    l(), c && !c.el.contains(d) && (i("spill"), this.onSpill({
      dragEl: o,
      putSortable: r
    }));
  }
};
function ef() {
}
ef.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var o = Is(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Mg
};
$n(ef, {
  pluginName: "revertOnSpill"
});
function tf() {
}
tf.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable, o = r || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Mg
};
$n(tf, {
  pluginName: "removeOnSpill"
});
var Nn;
function Nw() {
  function e() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return e.prototype = {
    dragStart: function(n) {
      var r = n.dragEl;
      Nn = r;
    },
    dragOverValid: function(n) {
      var r = n.completed, o = n.target, s = n.onMove, i = n.activeSortable, a = n.changed, l = n.cancel;
      if (i.options.swap) {
        var c = this.sortable.el, u = this.options;
        if (o && o !== c) {
          var d = Nn;
          s(o) !== !1 ? (wt(o, u.swapClass, !0), Nn = o) : Nn = null, d && d !== Nn && wt(d, u.swapClass, !1);
        }
        a(), r(!0), l();
      }
    },
    drop: function(n) {
      var r = n.activeSortable, o = n.putSortable, s = n.dragEl, i = o || this.sortable, a = this.options;
      Nn && wt(Nn, a.swapClass, !1), Nn && (a.swap || o && o.options.swap) && s !== Nn && (i.captureAnimationState(), i !== r && r.captureAnimationState(), _w(s, Nn), i.animateAll(), i !== r && r.animateAll());
    },
    nulling: function() {
      Nn = null;
    }
  }, $n(e, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Nn
      };
    }
  });
}
function _w(e, t) {
  var n = e.parentNode, r = t.parentNode, o, s;
  !n || !r || n.isEqualNode(t) || r.isEqualNode(e) || (o = Nt(e), s = Nt(t), n.isEqualNode(r) && o < s && s++, n.insertBefore(t, n.children[o]), r.insertBefore(e, r.children[s]));
}
var Ue = [], mn = [], Ws, Mn, Ys = !1, ln = !1, ns = !1, gt, Xs, La;
function Aw() {
  function e(t) {
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
    t.options.supportPointer ? qe(document, "pointerup", this._deselectMultiDrag) : (qe(document, "mouseup", this._deselectMultiDrag), qe(document, "touchend", this._deselectMultiDrag)), qe(document, "keydown", this._checkKeyDown), qe(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(o, s) {
        var i = "";
        Ue.length && Mn === t ? Ue.forEach(function(a, l) {
          i += (l ? ", " : "") + a.textContent;
        }) : i = s.textContent, o.setData("Text", i);
      }
    };
  }
  return e.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(n) {
      var r = n.dragEl;
      gt = r;
    },
    delayEnded: function() {
      this.isMultiDrag = ~Ue.indexOf(gt);
    },
    setupClone: function(n) {
      var r = n.sortable, o = n.cancel;
      if (this.isMultiDrag) {
        for (var s = 0; s < Ue.length; s++)
          mn.push(qd(Ue[s])), mn[s].sortableIndex = Ue[s].sortableIndex, mn[s].draggable = !1, mn[s].style["will-change"] = "", wt(mn[s], this.options.selectedClass, !1), Ue[s] === gt && wt(mn[s], this.options.chosenClass, !1);
        r._hideClone(), o();
      }
    },
    clone: function(n) {
      var r = n.sortable, o = n.rootEl, s = n.dispatchSortableEvent, i = n.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || Ue.length && Mn === r && (Wp(!0, o), s("clone"), i()));
    },
    showClone: function(n) {
      var r = n.cloneNowShown, o = n.rootEl, s = n.cancel;
      this.isMultiDrag && (Wp(!1, o), mn.forEach(function(i) {
        Oe(i, "display", "");
      }), r(), La = !1, s());
    },
    hideClone: function(n) {
      var r = this;
      n.sortable;
      var o = n.cloneNowHidden, s = n.cancel;
      this.isMultiDrag && (mn.forEach(function(i) {
        Oe(i, "display", "none"), r.options.removeCloneOnHide && i.parentNode && i.parentNode.removeChild(i);
      }), o(), La = !0, s());
    },
    dragStartGlobal: function(n) {
      n.sortable, !this.isMultiDrag && Mn && Mn.multiDrag._deselectMultiDrag(), Ue.forEach(function(r) {
        r.sortableIndex = Nt(r);
      }), Ue = Ue.sort(function(r, o) {
        return r.sortableIndex - o.sortableIndex;
      }), ns = !0;
    },
    dragStarted: function(n) {
      var r = this, o = n.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (o.captureAnimationState(), this.options.animation)) {
          Ue.forEach(function(i) {
            i !== gt && Oe(i, "position", "absolute");
          });
          var s = Et(gt, !1, !0, !0);
          Ue.forEach(function(i) {
            i !== gt && Hp(i, s);
          }), ln = !0, Ys = !0;
        }
        o.animateAll(function() {
          ln = !1, Ys = !1, r.options.animation && Ue.forEach(function(i) {
            jc(i);
          }), r.options.sort && $a();
        });
      }
    },
    dragOver: function(n) {
      var r = n.target, o = n.completed, s = n.cancel;
      ln && ~Ue.indexOf(r) && (o(!1), s());
    },
    revert: function(n) {
      var r = n.fromSortable, o = n.rootEl, s = n.sortable, i = n.dragRect;
      Ue.length > 1 && (Ue.forEach(function(a) {
        s.addAnimationState({
          target: a,
          rect: ln ? Et(a) : i
        }), jc(a), a.fromRect = i, r.removeAnimationState(a);
      }), ln = !1, Dw(!this.options.removeCloneOnHide, o));
    },
    dragOverCompleted: function(n) {
      var r = n.sortable, o = n.isOwner, s = n.insertion, i = n.activeSortable, a = n.parentEl, l = n.putSortable, c = this.options;
      if (s) {
        if (o && i._hideClone(), Ys = !1, c.animation && Ue.length > 1 && (ln || !o && !i.options.sort && !l)) {
          var u = Et(gt, !1, !0, !0);
          Ue.forEach(function(f) {
            f !== gt && (Hp(f, u), a.appendChild(f));
          }), ln = !0;
        }
        if (!o)
          if (ln || $a(), Ue.length > 1) {
            var d = La;
            i._showClone(r), i.options.animation && !La && d && mn.forEach(function(f) {
              i.addAnimationState({
                target: f,
                rect: Xs
              }), f.fromRect = Xs, f.thisAnimationDuration = null;
            });
          } else
            i._showClone(r);
      }
    },
    dragOverAnimationCapture: function(n) {
      var r = n.dragRect, o = n.isOwner, s = n.activeSortable;
      if (Ue.forEach(function(a) {
        a.thisAnimationDuration = null;
      }), s.options.animation && !o && s.multiDrag.isMultiDrag) {
        Xs = $n({}, r);
        var i = Io(gt, !0);
        Xs.top -= i.f, Xs.left -= i.e;
      }
    },
    dragOverAnimationComplete: function() {
      ln && (ln = !1, $a());
    },
    drop: function(n) {
      var r = n.originalEvent, o = n.rootEl, s = n.parentEl, i = n.sortable, a = n.dispatchSortableEvent, l = n.oldIndex, c = n.putSortable, u = c || this.sortable;
      if (r) {
        var d = this.options, f = s.children;
        if (!ns)
          if (d.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), wt(gt, d.selectedClass, !~Ue.indexOf(gt)), ~Ue.indexOf(gt))
            Ue.splice(Ue.indexOf(gt), 1), Ws = null, oi({
              sortable: i,
              rootEl: o,
              name: "deselect",
              targetEl: gt,
              originalEvt: r
            });
          else {
            if (Ue.push(gt), oi({
              sortable: i,
              rootEl: o,
              name: "select",
              targetEl: gt,
              originalEvt: r
            }), r.shiftKey && Ws && i.el.contains(Ws)) {
              var p = Nt(Ws), h = Nt(gt);
              if (~p && ~h && p !== h) {
                var v, m;
                for (h > p ? (m = p, v = h) : (m = h, v = p + 1); m < v; m++)
                  ~Ue.indexOf(f[m]) || (wt(f[m], d.selectedClass, !0), Ue.push(f[m]), oi({
                    sortable: i,
                    rootEl: o,
                    name: "select",
                    targetEl: f[m],
                    originalEvt: r
                  }));
              }
            } else
              Ws = gt;
            Mn = u;
          }
        if (ns && this.isMultiDrag) {
          if (ln = !1, (s[Jt].options.sort || s !== o) && Ue.length > 1) {
            var b = Et(gt), x = Nt(gt, ":not(." + this.options.selectedClass + ")");
            if (!Ys && d.animation && (gt.thisAnimationDuration = null), u.captureAnimationState(), !Ys && (d.animation && (gt.fromRect = b, Ue.forEach(function(y) {
              if (y.thisAnimationDuration = null, y !== gt) {
                var E = ln ? Et(y) : b;
                y.fromRect = E, u.addAnimationState({
                  target: y,
                  rect: E
                });
              }
            })), $a(), Ue.forEach(function(y) {
              f[x] ? s.insertBefore(y, f[x]) : s.appendChild(y), x++;
            }), l === Nt(gt))) {
              var g = !1;
              Ue.forEach(function(y) {
                if (y.sortableIndex !== Nt(y)) {
                  g = !0;
                  return;
                }
              }), g && a("update");
            }
            Ue.forEach(function(y) {
              jc(y);
            }), u.animateAll();
          }
          Mn = u;
        }
        (o === s || c && c.lastPutMode !== "clone") && mn.forEach(function(y) {
          y.parentNode && y.parentNode.removeChild(y);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = ns = !1, mn.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), Je(document, "pointerup", this._deselectMultiDrag), Je(document, "mouseup", this._deselectMultiDrag), Je(document, "touchend", this._deselectMultiDrag), Je(document, "keydown", this._checkKeyDown), Je(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(n) {
      if (!(typeof ns < "u" && ns) && Mn === this.sortable && !(n && Vn(n.target, this.options.draggable, this.sortable.el, !1)) && !(n && n.button !== 0))
        for (; Ue.length; ) {
          var r = Ue[0];
          wt(r, this.options.selectedClass, !1), Ue.shift(), oi({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: r,
            originalEvt: n
          });
        }
    },
    _checkKeyDown: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, $n(e, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(n) {
        var r = n.parentNode[Jt];
        !r || !r.options.multiDrag || ~Ue.indexOf(n) || (Mn && Mn !== r && (Mn.multiDrag._deselectMultiDrag(), Mn = r), wt(n, r.options.selectedClass, !0), Ue.push(n));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(n) {
        var r = n.parentNode[Jt], o = Ue.indexOf(n);
        !r || !r.options.multiDrag || !~o || (wt(n, r.options.selectedClass, !1), Ue.splice(o, 1));
      }
    },
    eventProperties: function() {
      var n = this, r = [], o = [];
      return Ue.forEach(function(s) {
        r.push({
          multiDragElement: s,
          index: s.sortableIndex
        });
        var i;
        ln && s !== gt ? i = -1 : ln ? i = Nt(s, ":not(." + n.options.selectedClass + ")") : i = Nt(s), o.push({
          multiDragElement: s,
          index: i
        });
      }), {
        items: qE(Ue),
        clones: [].concat(mn),
        oldIndicies: r,
        newIndicies: o
      };
    },
    optionListeners: {
      multiDragKey: function(n) {
        return n = n.toLowerCase(), n === "ctrl" ? n = "Control" : n.length > 1 && (n = n.charAt(0).toUpperCase() + n.substr(1)), n;
      }
    }
  });
}
function Dw(e, t) {
  Ue.forEach(function(n, r) {
    var o = t.children[n.sortableIndex + (e ? Number(r) : 0)];
    o ? t.insertBefore(n, o) : t.appendChild(n);
  });
}
function Wp(e, t) {
  mn.forEach(function(n, r) {
    var o = t.children[n.sortableIndex + (e ? Number(r) : 0)];
    o ? t.insertBefore(n, o) : t.appendChild(n);
  });
}
function $a() {
  Ue.forEach(function(e) {
    e !== gt && e.parentNode && e.parentNode.removeChild(e);
  });
}
Me.mount(new Tw());
Me.mount(tf, ef);
const Pw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: Aw,
  Sortable: Me,
  Swap: Nw,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), Rw = /* @__PURE__ */ Nv(Pw);
(function(e, t) {
  (function(r, o) {
    e.exports = o(YE, Rw);
  })(typeof self < "u" ? self : Ov, function(n, r) {
    return (
      /******/
      function(o) {
        var s = {};
        function i(a) {
          if (s[a])
            return s[a].exports;
          var l = s[a] = {
            /******/
            i: a,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return o[a].call(l.exports, l, l.exports, i), l.l = !0, l.exports;
        }
        return i.m = o, i.c = s, i.d = function(a, l, c) {
          i.o(a, l) || Object.defineProperty(a, l, { enumerable: !0, get: c });
        }, i.r = function(a) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
        }, i.t = function(a, l) {
          if (l & 1 && (a = i(a)), l & 8 || l & 4 && typeof a == "object" && a && a.__esModule)
            return a;
          var c = /* @__PURE__ */ Object.create(null);
          if (i.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: a }), l & 2 && typeof a != "string")
            for (var u in a)
              i.d(c, u, (function(d) {
                return a[d];
              }).bind(null, u));
          return c;
        }, i.n = function(a) {
          var l = a && a.__esModule ? (
            /******/
            function() {
              return a.default;
            }
          ) : (
            /******/
            function() {
              return a;
            }
          );
          return i.d(l, "a", l), l;
        }, i.o = function(a, l) {
          return Object.prototype.hasOwnProperty.call(a, l);
        }, i.p = "", i(i.s = "fb15");
      }({
        /***/
        "00ee": (
          /***/
          function(o, s, i) {
            var a = i("b622"), l = a("toStringTag"), c = {};
            c[l] = "z", o.exports = String(c) === "[object z]";
          }
        ),
        /***/
        "0366": (
          /***/
          function(o, s, i) {
            var a = i("1c0b");
            o.exports = function(l, c, u) {
              if (a(l), c === void 0)
                return l;
              switch (u) {
                case 0:
                  return function() {
                    return l.call(c);
                  };
                case 1:
                  return function(d) {
                    return l.call(c, d);
                  };
                case 2:
                  return function(d, f) {
                    return l.call(c, d, f);
                  };
                case 3:
                  return function(d, f, p) {
                    return l.call(c, d, f, p);
                  };
              }
              return function() {
                return l.apply(c, arguments);
              };
            };
          }
        ),
        /***/
        "057f": (
          /***/
          function(o, s, i) {
            var a = i("fc6a"), l = i("241c").f, c = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], d = function(f) {
              try {
                return l(f);
              } catch {
                return u.slice();
              }
            };
            o.exports.f = function(p) {
              return u && c.call(p) == "[object Window]" ? d(p) : l(a(p));
            };
          }
        ),
        /***/
        "06cf": (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("d1e7"), c = i("5c6c"), u = i("fc6a"), d = i("c04e"), f = i("5135"), p = i("0cfb"), h = Object.getOwnPropertyDescriptor;
            s.f = a ? h : function(m, b) {
              if (m = u(m), b = d(b, !0), p)
                try {
                  return h(m, b);
                } catch {
                }
              if (f(m, b))
                return c(!l.f.call(m, b), m[b]);
            };
          }
        ),
        /***/
        "0cfb": (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("d039"), c = i("cc12");
            o.exports = !a && !l(function() {
              return Object.defineProperty(c("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7;
            });
          }
        ),
        /***/
        "13d5": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("d58f").left, c = i("a640"), u = i("ae40"), d = c("reduce"), f = u("reduce", { 1: 0 });
            a({ target: "Array", proto: !0, forced: !d || !f }, {
              reduce: function(h) {
                return l(this, h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }
        ),
        /***/
        "14c3": (
          /***/
          function(o, s, i) {
            var a = i("c6b6"), l = i("9263");
            o.exports = function(c, u) {
              var d = c.exec;
              if (typeof d == "function") {
                var f = d.call(c, u);
                if (typeof f != "object")
                  throw TypeError("RegExp exec method returned something other than an Object or null");
                return f;
              }
              if (a(c) !== "RegExp")
                throw TypeError("RegExp#exec called on incompatible receiver");
              return l.call(c, u);
            };
          }
        ),
        /***/
        "159b": (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("fdbc"), c = i("17c2"), u = i("9112");
            for (var d in l) {
              var f = a[d], p = f && f.prototype;
              if (p && p.forEach !== c)
                try {
                  u(p, "forEach", c);
                } catch {
                  p.forEach = c;
                }
            }
          }
        ),
        /***/
        "17c2": (
          /***/
          function(o, s, i) {
            var a = i("b727").forEach, l = i("a640"), c = i("ae40"), u = l("forEach"), d = c("forEach");
            o.exports = !u || !d ? function(p) {
              return a(this, p, arguments.length > 1 ? arguments[1] : void 0);
            } : [].forEach;
          }
        ),
        /***/
        "1be4": (
          /***/
          function(o, s, i) {
            var a = i("d066");
            o.exports = a("document", "documentElement");
          }
        ),
        /***/
        "1c0b": (
          /***/
          function(o, s) {
            o.exports = function(i) {
              if (typeof i != "function")
                throw TypeError(String(i) + " is not a function");
              return i;
            };
          }
        ),
        /***/
        "1c7e": (
          /***/
          function(o, s, i) {
            var a = i("b622"), l = a("iterator"), c = !1;
            try {
              var u = 0, d = {
                next: function() {
                  return { done: !!u++ };
                },
                return: function() {
                  c = !0;
                }
              };
              d[l] = function() {
                return this;
              }, Array.from(d, function() {
                throw 2;
              });
            } catch {
            }
            o.exports = function(f, p) {
              if (!p && !c)
                return !1;
              var h = !1;
              try {
                var v = {};
                v[l] = function() {
                  return {
                    next: function() {
                      return { done: h = !0 };
                    }
                  };
                }, f(v);
              } catch {
              }
              return h;
            };
          }
        ),
        /***/
        "1d80": (
          /***/
          function(o, s) {
            o.exports = function(i) {
              if (i == null)
                throw TypeError("Can't call method on " + i);
              return i;
            };
          }
        ),
        /***/
        "1dde": (
          /***/
          function(o, s, i) {
            var a = i("d039"), l = i("b622"), c = i("2d00"), u = l("species");
            o.exports = function(d) {
              return c >= 51 || !a(function() {
                var f = [], p = f.constructor = {};
                return p[u] = function() {
                  return { foo: 1 };
                }, f[d](Boolean).foo !== 1;
              });
            };
          }
        ),
        /***/
        "23cb": (
          /***/
          function(o, s, i) {
            var a = i("a691"), l = Math.max, c = Math.min;
            o.exports = function(u, d) {
              var f = a(u);
              return f < 0 ? l(f + d, 0) : c(f, d);
            };
          }
        ),
        /***/
        "23e7": (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("06cf").f, c = i("9112"), u = i("6eeb"), d = i("ce4e"), f = i("e893"), p = i("94ca");
            o.exports = function(h, v) {
              var m = h.target, b = h.global, x = h.stat, g, y, E, S, T, D;
              if (b ? y = a : x ? y = a[m] || d(m, {}) : y = (a[m] || {}).prototype, y)
                for (E in v) {
                  if (T = v[E], h.noTargetGet ? (D = l(y, E), S = D && D.value) : S = y[E], g = p(b ? E : m + (x ? "." : "#") + E, h.forced), !g && S !== void 0) {
                    if (typeof T == typeof S)
                      continue;
                    f(T, S);
                  }
                  (h.sham || S && S.sham) && c(T, "sham", !0), u(y, E, T, h);
                }
            };
          }
        ),
        /***/
        "241c": (
          /***/
          function(o, s, i) {
            var a = i("ca84"), l = i("7839"), c = l.concat("length", "prototype");
            s.f = Object.getOwnPropertyNames || function(d) {
              return a(d, c);
            };
          }
        ),
        /***/
        "25f0": (
          /***/
          function(o, s, i) {
            var a = i("6eeb"), l = i("825a"), c = i("d039"), u = i("ad6d"), d = "toString", f = RegExp.prototype, p = f[d], h = c(function() {
              return p.call({ source: "a", flags: "b" }) != "/a/b";
            }), v = p.name != d;
            (h || v) && a(RegExp.prototype, d, function() {
              var b = l(this), x = String(b.source), g = b.flags, y = String(g === void 0 && b instanceof RegExp && !("flags" in f) ? u.call(b) : g);
              return "/" + x + "/" + y;
            }, { unsafe: !0 });
          }
        ),
        /***/
        "2ca0": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("06cf").f, c = i("50c4"), u = i("5a34"), d = i("1d80"), f = i("ab13"), p = i("c430"), h = "".startsWith, v = Math.min, m = f("startsWith"), b = !p && !m && !!function() {
              var x = l(String.prototype, "startsWith");
              return x && !x.writable;
            }();
            a({ target: "String", proto: !0, forced: !b && !m }, {
              startsWith: function(g) {
                var y = String(d(this));
                u(g);
                var E = c(v(arguments.length > 1 ? arguments[1] : void 0, y.length)), S = String(g);
                return h ? h.call(y, S, E) : y.slice(E, E + S.length) === S;
              }
            });
          }
        ),
        /***/
        "2d00": (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("342f"), c = a.process, u = c && c.versions, d = u && u.v8, f, p;
            d ? (f = d.split("."), p = f[0] + f[1]) : l && (f = l.match(/Edge\/(\d+)/), (!f || f[1] >= 74) && (f = l.match(/Chrome\/(\d+)/), f && (p = f[1]))), o.exports = p && +p;
          }
        ),
        /***/
        "342f": (
          /***/
          function(o, s, i) {
            var a = i("d066");
            o.exports = a("navigator", "userAgent") || "";
          }
        ),
        /***/
        "35a1": (
          /***/
          function(o, s, i) {
            var a = i("f5df"), l = i("3f8c"), c = i("b622"), u = c("iterator");
            o.exports = function(d) {
              if (d != null)
                return d[u] || d["@@iterator"] || l[a(d)];
            };
          }
        ),
        /***/
        "37e8": (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("9bf2"), c = i("825a"), u = i("df75");
            o.exports = a ? Object.defineProperties : function(f, p) {
              c(f);
              for (var h = u(p), v = h.length, m = 0, b; v > m; )
                l.f(f, b = h[m++], p[b]);
              return f;
            };
          }
        ),
        /***/
        "3bbe": (
          /***/
          function(o, s, i) {
            var a = i("861d");
            o.exports = function(l) {
              if (!a(l) && l !== null)
                throw TypeError("Can't set " + String(l) + " as a prototype");
              return l;
            };
          }
        ),
        /***/
        "3ca3": (
          /***/
          function(o, s, i) {
            var a = i("6547").charAt, l = i("69f3"), c = i("7dd0"), u = "String Iterator", d = l.set, f = l.getterFor(u);
            c(String, "String", function(p) {
              d(this, {
                type: u,
                string: String(p),
                index: 0
              });
            }, function() {
              var h = f(this), v = h.string, m = h.index, b;
              return m >= v.length ? { value: void 0, done: !0 } : (b = a(v, m), h.index += b.length, { value: b, done: !1 });
            });
          }
        ),
        /***/
        "3f8c": (
          /***/
          function(o, s) {
            o.exports = {};
          }
        ),
        /***/
        4160: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("17c2");
            a({ target: "Array", proto: !0, forced: [].forEach != l }, {
              forEach: l
            });
          }
        ),
        /***/
        "428f": (
          /***/
          function(o, s, i) {
            var a = i("da84");
            o.exports = a;
          }
        ),
        /***/
        "44ad": (
          /***/
          function(o, s, i) {
            var a = i("d039"), l = i("c6b6"), c = "".split;
            o.exports = a(function() {
              return !Object("z").propertyIsEnumerable(0);
            }) ? function(u) {
              return l(u) == "String" ? c.call(u, "") : Object(u);
            } : Object;
          }
        ),
        /***/
        "44d2": (
          /***/
          function(o, s, i) {
            var a = i("b622"), l = i("7c73"), c = i("9bf2"), u = a("unscopables"), d = Array.prototype;
            d[u] == null && c.f(d, u, {
              configurable: !0,
              value: l(null)
            }), o.exports = function(f) {
              d[u][f] = !0;
            };
          }
        ),
        /***/
        "44e7": (
          /***/
          function(o, s, i) {
            var a = i("861d"), l = i("c6b6"), c = i("b622"), u = c("match");
            o.exports = function(d) {
              var f;
              return a(d) && ((f = d[u]) !== void 0 ? !!f : l(d) == "RegExp");
            };
          }
        ),
        /***/
        4930: (
          /***/
          function(o, s, i) {
            var a = i("d039");
            o.exports = !!Object.getOwnPropertySymbols && !a(function() {
              return !String(Symbol());
            });
          }
        ),
        /***/
        "4d64": (
          /***/
          function(o, s, i) {
            var a = i("fc6a"), l = i("50c4"), c = i("23cb"), u = function(d) {
              return function(f, p, h) {
                var v = a(f), m = l(v.length), b = c(h, m), x;
                if (d && p != p) {
                  for (; m > b; )
                    if (x = v[b++], x != x)
                      return !0;
                } else
                  for (; m > b; b++)
                    if ((d || b in v) && v[b] === p)
                      return d || b || 0;
                return !d && -1;
              };
            };
            o.exports = {
              // `Array.prototype.includes` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.includes
              includes: u(!0),
              // `Array.prototype.indexOf` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
              indexOf: u(!1)
            };
          }
        ),
        /***/
        "4de4": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("b727").filter, c = i("1dde"), u = i("ae40"), d = c("filter"), f = u("filter");
            a({ target: "Array", proto: !0, forced: !d || !f }, {
              filter: function(h) {
                return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }
        ),
        /***/
        "4df4": (
          /***/
          function(o, s, i) {
            var a = i("0366"), l = i("7b0b"), c = i("9bdd"), u = i("e95a"), d = i("50c4"), f = i("8418"), p = i("35a1");
            o.exports = function(v) {
              var m = l(v), b = typeof this == "function" ? this : Array, x = arguments.length, g = x > 1 ? arguments[1] : void 0, y = g !== void 0, E = p(m), S = 0, T, D, _, N, R, M;
              if (y && (g = a(g, x > 2 ? arguments[2] : void 0, 2)), E != null && !(b == Array && u(E)))
                for (N = E.call(m), R = N.next, D = new b(); !(_ = R.call(N)).done; S++)
                  M = y ? c(N, g, [_.value, S], !0) : _.value, f(D, S, M);
              else
                for (T = d(m.length), D = new b(T); T > S; S++)
                  M = y ? g(m[S], S) : m[S], f(D, S, M);
              return D.length = S, D;
            };
          }
        ),
        /***/
        "4fad": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("6f53").entries;
            a({ target: "Object", stat: !0 }, {
              entries: function(u) {
                return l(u);
              }
            });
          }
        ),
        /***/
        "50c4": (
          /***/
          function(o, s, i) {
            var a = i("a691"), l = Math.min;
            o.exports = function(c) {
              return c > 0 ? l(a(c), 9007199254740991) : 0;
            };
          }
        ),
        /***/
        5135: (
          /***/
          function(o, s) {
            var i = {}.hasOwnProperty;
            o.exports = function(a, l) {
              return i.call(a, l);
            };
          }
        ),
        /***/
        5319: (
          /***/
          function(o, s, i) {
            var a = i("d784"), l = i("825a"), c = i("7b0b"), u = i("50c4"), d = i("a691"), f = i("1d80"), p = i("8aa5"), h = i("14c3"), v = Math.max, m = Math.min, b = Math.floor, x = /\$([$&'`]|\d\d?|<[^>]*>)/g, g = /\$([$&'`]|\d\d?)/g, y = function(E) {
              return E === void 0 ? E : String(E);
            };
            a("replace", 2, function(E, S, T, D) {
              var _ = D.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, N = D.REPLACE_KEEPS_$0, R = _ ? "$" : "$0";
              return [
                // `String.prototype.replace` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                function(H, G) {
                  var P = f(this), V = H == null ? void 0 : H[E];
                  return V !== void 0 ? V.call(H, P, G) : S.call(String(P), H, G);
                },
                // `RegExp.prototype[@@replace]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                function($, H) {
                  if (!_ && N || typeof H == "string" && H.indexOf(R) === -1) {
                    var G = T(S, $, this, H);
                    if (G.done)
                      return G.value;
                  }
                  var P = l($), V = String(this), B = typeof H == "function";
                  B || (H = String(H));
                  var Ce = P.global;
                  if (Ce) {
                    var We = P.unicode;
                    P.lastIndex = 0;
                  }
                  for (var Ve = []; ; ) {
                    var ee = h(P, V);
                    if (ee === null || (Ve.push(ee), !Ce))
                      break;
                    var te = String(ee[0]);
                    te === "" && (P.lastIndex = p(V, u(P.lastIndex), We));
                  }
                  for (var ne = "", he = 0, oe = 0; oe < Ve.length; oe++) {
                    ee = Ve[oe];
                    for (var I = String(ee[0]), q = v(m(d(ee.index), V.length), 0), re = [], pe = 1; pe < ee.length; pe++)
                      re.push(y(ee[pe]));
                    var ze = ee.groups;
                    if (B) {
                      var ot = [I].concat(re, q, V);
                      ze !== void 0 && ot.push(ze);
                      var w = String(H.apply(void 0, ot));
                    } else
                      w = M(I, V, q, re, ze, H);
                    q >= he && (ne += V.slice(he, q) + w, he = q + I.length);
                  }
                  return ne + V.slice(he);
                }
              ];
              function M($, H, G, P, V, B) {
                var Ce = G + $.length, We = P.length, Ve = g;
                return V !== void 0 && (V = c(V), Ve = x), S.call(B, Ve, function(ee, te) {
                  var ne;
                  switch (te.charAt(0)) {
                    case "$":
                      return "$";
                    case "&":
                      return $;
                    case "`":
                      return H.slice(0, G);
                    case "'":
                      return H.slice(Ce);
                    case "<":
                      ne = V[te.slice(1, -1)];
                      break;
                    default:
                      var he = +te;
                      if (he === 0)
                        return ee;
                      if (he > We) {
                        var oe = b(he / 10);
                        return oe === 0 ? ee : oe <= We ? P[oe - 1] === void 0 ? te.charAt(1) : P[oe - 1] + te.charAt(1) : ee;
                      }
                      ne = P[he - 1];
                  }
                  return ne === void 0 ? "" : ne;
                });
              }
            });
          }
        ),
        /***/
        5692: (
          /***/
          function(o, s, i) {
            var a = i("c430"), l = i("c6cd");
            (o.exports = function(c, u) {
              return l[c] || (l[c] = u !== void 0 ? u : {});
            })("versions", []).push({
              version: "3.6.5",
              mode: a ? "pure" : "global",
              copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            });
          }
        ),
        /***/
        "56ef": (
          /***/
          function(o, s, i) {
            var a = i("d066"), l = i("241c"), c = i("7418"), u = i("825a");
            o.exports = a("Reflect", "ownKeys") || function(f) {
              var p = l.f(u(f)), h = c.f;
              return h ? p.concat(h(f)) : p;
            };
          }
        ),
        /***/
        "5a34": (
          /***/
          function(o, s, i) {
            var a = i("44e7");
            o.exports = function(l) {
              if (a(l))
                throw TypeError("The method doesn't accept regular expressions");
              return l;
            };
          }
        ),
        /***/
        "5c6c": (
          /***/
          function(o, s) {
            o.exports = function(i, a) {
              return {
                enumerable: !(i & 1),
                configurable: !(i & 2),
                writable: !(i & 4),
                value: a
              };
            };
          }
        ),
        /***/
        "5db7": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("a2bf"), c = i("7b0b"), u = i("50c4"), d = i("1c0b"), f = i("65f0");
            a({ target: "Array", proto: !0 }, {
              flatMap: function(h) {
                var v = c(this), m = u(v.length), b;
                return d(h), b = f(v, 0), b.length = l(b, v, v, m, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), b;
              }
            });
          }
        ),
        /***/
        6547: (
          /***/
          function(o, s, i) {
            var a = i("a691"), l = i("1d80"), c = function(u) {
              return function(d, f) {
                var p = String(l(d)), h = a(f), v = p.length, m, b;
                return h < 0 || h >= v ? u ? "" : void 0 : (m = p.charCodeAt(h), m < 55296 || m > 56319 || h + 1 === v || (b = p.charCodeAt(h + 1)) < 56320 || b > 57343 ? u ? p.charAt(h) : m : u ? p.slice(h, h + 2) : (m - 55296 << 10) + (b - 56320) + 65536);
              };
            };
            o.exports = {
              // `String.prototype.codePointAt` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
              codeAt: c(!1),
              // `String.prototype.at` method
              // https://github.com/mathiasbynens/String.prototype.at
              charAt: c(!0)
            };
          }
        ),
        /***/
        "65f0": (
          /***/
          function(o, s, i) {
            var a = i("861d"), l = i("e8b5"), c = i("b622"), u = c("species");
            o.exports = function(d, f) {
              var p;
              return l(d) && (p = d.constructor, typeof p == "function" && (p === Array || l(p.prototype)) ? p = void 0 : a(p) && (p = p[u], p === null && (p = void 0))), new (p === void 0 ? Array : p)(f === 0 ? 0 : f);
            };
          }
        ),
        /***/
        "69f3": (
          /***/
          function(o, s, i) {
            var a = i("7f9a"), l = i("da84"), c = i("861d"), u = i("9112"), d = i("5135"), f = i("f772"), p = i("d012"), h = l.WeakMap, v, m, b, x = function(_) {
              return b(_) ? m(_) : v(_, {});
            }, g = function(_) {
              return function(N) {
                var R;
                if (!c(N) || (R = m(N)).type !== _)
                  throw TypeError("Incompatible receiver, " + _ + " required");
                return R;
              };
            };
            if (a) {
              var y = new h(), E = y.get, S = y.has, T = y.set;
              v = function(_, N) {
                return T.call(y, _, N), N;
              }, m = function(_) {
                return E.call(y, _) || {};
              }, b = function(_) {
                return S.call(y, _);
              };
            } else {
              var D = f("state");
              p[D] = !0, v = function(_, N) {
                return u(_, D, N), N;
              }, m = function(_) {
                return d(_, D) ? _[D] : {};
              }, b = function(_) {
                return d(_, D);
              };
            }
            o.exports = {
              set: v,
              get: m,
              has: b,
              enforce: x,
              getterFor: g
            };
          }
        ),
        /***/
        "6eeb": (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("9112"), c = i("5135"), u = i("ce4e"), d = i("8925"), f = i("69f3"), p = f.get, h = f.enforce, v = String(String).split("String");
            (o.exports = function(m, b, x, g) {
              var y = g ? !!g.unsafe : !1, E = g ? !!g.enumerable : !1, S = g ? !!g.noTargetGet : !1;
              if (typeof x == "function" && (typeof b == "string" && !c(x, "name") && l(x, "name", b), h(x).source = v.join(typeof b == "string" ? b : "")), m === a) {
                E ? m[b] = x : u(b, x);
                return;
              } else
                y ? !S && m[b] && (E = !0) : delete m[b];
              E ? m[b] = x : l(m, b, x);
            })(Function.prototype, "toString", function() {
              return typeof this == "function" && p(this).source || d(this);
            });
          }
        ),
        /***/
        "6f53": (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("df75"), c = i("fc6a"), u = i("d1e7").f, d = function(f) {
              return function(p) {
                for (var h = c(p), v = l(h), m = v.length, b = 0, x = [], g; m > b; )
                  g = v[b++], (!a || u.call(h, g)) && x.push(f ? [g, h[g]] : h[g]);
                return x;
              };
            };
            o.exports = {
              // `Object.entries` method
              // https://tc39.github.io/ecma262/#sec-object.entries
              entries: d(!0),
              // `Object.values` method
              // https://tc39.github.io/ecma262/#sec-object.values
              values: d(!1)
            };
          }
        ),
        /***/
        "73d9": (
          /***/
          function(o, s, i) {
            var a = i("44d2");
            a("flatMap");
          }
        ),
        /***/
        7418: (
          /***/
          function(o, s) {
            s.f = Object.getOwnPropertySymbols;
          }
        ),
        /***/
        "746f": (
          /***/
          function(o, s, i) {
            var a = i("428f"), l = i("5135"), c = i("e538"), u = i("9bf2").f;
            o.exports = function(d) {
              var f = a.Symbol || (a.Symbol = {});
              l(f, d) || u(f, d, {
                value: c.f(d)
              });
            };
          }
        ),
        /***/
        7839: (
          /***/
          function(o, s) {
            o.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf"
            ];
          }
        ),
        /***/
        "7b0b": (
          /***/
          function(o, s, i) {
            var a = i("1d80");
            o.exports = function(l) {
              return Object(a(l));
            };
          }
        ),
        /***/
        "7c73": (
          /***/
          function(o, s, i) {
            var a = i("825a"), l = i("37e8"), c = i("7839"), u = i("d012"), d = i("1be4"), f = i("cc12"), p = i("f772"), h = ">", v = "<", m = "prototype", b = "script", x = p("IE_PROTO"), g = function() {
            }, y = function(_) {
              return v + b + h + _ + v + "/" + b + h;
            }, E = function(_) {
              _.write(y("")), _.close();
              var N = _.parentWindow.Object;
              return _ = null, N;
            }, S = function() {
              var _ = f("iframe"), N = "java" + b + ":", R;
              return _.style.display = "none", d.appendChild(_), _.src = String(N), R = _.contentWindow.document, R.open(), R.write(y("document.F=Object")), R.close(), R.F;
            }, T, D = function() {
              try {
                T = document.domain && new ActiveXObject("htmlfile");
              } catch {
              }
              D = T ? E(T) : S();
              for (var _ = c.length; _--; )
                delete D[m][c[_]];
              return D();
            };
            u[x] = !0, o.exports = Object.create || function(N, R) {
              var M;
              return N !== null ? (g[m] = a(N), M = new g(), g[m] = null, M[x] = N) : M = D(), R === void 0 ? M : l(M, R);
            };
          }
        ),
        /***/
        "7dd0": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("9ed3"), c = i("e163"), u = i("d2bb"), d = i("d44e"), f = i("9112"), p = i("6eeb"), h = i("b622"), v = i("c430"), m = i("3f8c"), b = i("ae93"), x = b.IteratorPrototype, g = b.BUGGY_SAFARI_ITERATORS, y = h("iterator"), E = "keys", S = "values", T = "entries", D = function() {
              return this;
            };
            o.exports = function(_, N, R, M, $, H, G) {
              l(R, N, M);
              var P = function(oe) {
                if (oe === $ && Ve)
                  return Ve;
                if (!g && oe in Ce)
                  return Ce[oe];
                switch (oe) {
                  case E:
                    return function() {
                      return new R(this, oe);
                    };
                  case S:
                    return function() {
                      return new R(this, oe);
                    };
                  case T:
                    return function() {
                      return new R(this, oe);
                    };
                }
                return function() {
                  return new R(this);
                };
              }, V = N + " Iterator", B = !1, Ce = _.prototype, We = Ce[y] || Ce["@@iterator"] || $ && Ce[$], Ve = !g && We || P($), ee = N == "Array" && Ce.entries || We, te, ne, he;
              if (ee && (te = c(ee.call(new _())), x !== Object.prototype && te.next && (!v && c(te) !== x && (u ? u(te, x) : typeof te[y] != "function" && f(te, y, D)), d(te, V, !0, !0), v && (m[V] = D))), $ == S && We && We.name !== S && (B = !0, Ve = function() {
                return We.call(this);
              }), (!v || G) && Ce[y] !== Ve && f(Ce, y, Ve), m[N] = Ve, $)
                if (ne = {
                  values: P(S),
                  keys: H ? Ve : P(E),
                  entries: P(T)
                }, G)
                  for (he in ne)
                    (g || B || !(he in Ce)) && p(Ce, he, ne[he]);
                else
                  a({ target: N, proto: !0, forced: g || B }, ne);
              return ne;
            };
          }
        ),
        /***/
        "7f9a": (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("8925"), c = a.WeakMap;
            o.exports = typeof c == "function" && /native code/.test(l(c));
          }
        ),
        /***/
        "825a": (
          /***/
          function(o, s, i) {
            var a = i("861d");
            o.exports = function(l) {
              if (!a(l))
                throw TypeError(String(l) + " is not an object");
              return l;
            };
          }
        ),
        /***/
        "83ab": (
          /***/
          function(o, s, i) {
            var a = i("d039");
            o.exports = !a(function() {
              return Object.defineProperty({}, 1, { get: function() {
                return 7;
              } })[1] != 7;
            });
          }
        ),
        /***/
        8418: (
          /***/
          function(o, s, i) {
            var a = i("c04e"), l = i("9bf2"), c = i("5c6c");
            o.exports = function(u, d, f) {
              var p = a(d);
              p in u ? l.f(u, p, c(0, f)) : u[p] = f;
            };
          }
        ),
        /***/
        "861d": (
          /***/
          function(o, s) {
            o.exports = function(i) {
              return typeof i == "object" ? i !== null : typeof i == "function";
            };
          }
        ),
        /***/
        8875: (
          /***/
          function(o, s, i) {
            var a, l, c;
            (function(u, d) {
              l = [], a = d, c = typeof a == "function" ? a.apply(s, l) : a, c !== void 0 && (o.exports = c);
            })(typeof self < "u" ? self : this, function() {
              function u() {
                var d = Object.getOwnPropertyDescriptor(document, "currentScript");
                if (!d && "currentScript" in document && document.currentScript || d && d.get !== u && document.currentScript)
                  return document.currentScript;
                try {
                  throw new Error();
                } catch (T) {
                  var f = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, p = /@([^@]*):(\d+):(\d+)\s*$/ig, h = f.exec(T.stack) || p.exec(T.stack), v = h && h[1] || !1, m = h && h[2] || !1, b = document.location.href.replace(document.location.hash, ""), x, g, y, E = document.getElementsByTagName("script");
                  v === b && (x = document.documentElement.outerHTML, g = new RegExp("(?:[^\\n]+?\\n){0," + (m - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), y = x.replace(g, "$1").trim());
                  for (var S = 0; S < E.length; S++)
                    if (E[S].readyState === "interactive" || E[S].src === v || v === b && E[S].innerHTML && E[S].innerHTML.trim() === y)
                      return E[S];
                  return null;
                }
              }
              return u;
            });
          }
        ),
        /***/
        8925: (
          /***/
          function(o, s, i) {
            var a = i("c6cd"), l = Function.toString;
            typeof a.inspectSource != "function" && (a.inspectSource = function(c) {
              return l.call(c);
            }), o.exports = a.inspectSource;
          }
        ),
        /***/
        "8aa5": (
          /***/
          function(o, s, i) {
            var a = i("6547").charAt;
            o.exports = function(l, c, u) {
              return c + (u ? a(l, c).length : 1);
            };
          }
        ),
        /***/
        "8bbf": (
          /***/
          function(o, s) {
            o.exports = n;
          }
        ),
        /***/
        "90e3": (
          /***/
          function(o, s) {
            var i = 0, a = Math.random();
            o.exports = function(l) {
              return "Symbol(" + String(l === void 0 ? "" : l) + ")_" + (++i + a).toString(36);
            };
          }
        ),
        /***/
        9112: (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("9bf2"), c = i("5c6c");
            o.exports = a ? function(u, d, f) {
              return l.f(u, d, c(1, f));
            } : function(u, d, f) {
              return u[d] = f, u;
            };
          }
        ),
        /***/
        9263: (
          /***/
          function(o, s, i) {
            var a = i("ad6d"), l = i("9f7f"), c = RegExp.prototype.exec, u = String.prototype.replace, d = c, f = function() {
              var m = /a/, b = /b*/g;
              return c.call(m, "a"), c.call(b, "a"), m.lastIndex !== 0 || b.lastIndex !== 0;
            }(), p = l.UNSUPPORTED_Y || l.BROKEN_CARET, h = /()??/.exec("")[1] !== void 0, v = f || h || p;
            v && (d = function(b) {
              var x = this, g, y, E, S, T = p && x.sticky, D = a.call(x), _ = x.source, N = 0, R = b;
              return T && (D = D.replace("y", ""), D.indexOf("g") === -1 && (D += "g"), R = String(b).slice(x.lastIndex), x.lastIndex > 0 && (!x.multiline || x.multiline && b[x.lastIndex - 1] !== `
`) && (_ = "(?: " + _ + ")", R = " " + R, N++), y = new RegExp("^(?:" + _ + ")", D)), h && (y = new RegExp("^" + _ + "$(?!\\s)", D)), f && (g = x.lastIndex), E = c.call(T ? y : x, R), T ? E ? (E.input = E.input.slice(N), E[0] = E[0].slice(N), E.index = x.lastIndex, x.lastIndex += E[0].length) : x.lastIndex = 0 : f && E && (x.lastIndex = x.global ? E.index + E[0].length : g), h && E && E.length > 1 && u.call(E[0], y, function() {
                for (S = 1; S < arguments.length - 2; S++)
                  arguments[S] === void 0 && (E[S] = void 0);
              }), E;
            }), o.exports = d;
          }
        ),
        /***/
        "94ca": (
          /***/
          function(o, s, i) {
            var a = i("d039"), l = /#|\.prototype\./, c = function(h, v) {
              var m = d[u(h)];
              return m == p ? !0 : m == f ? !1 : typeof v == "function" ? a(v) : !!v;
            }, u = c.normalize = function(h) {
              return String(h).replace(l, ".").toLowerCase();
            }, d = c.data = {}, f = c.NATIVE = "N", p = c.POLYFILL = "P";
            o.exports = c;
          }
        ),
        /***/
        "99af": (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("d039"), c = i("e8b5"), u = i("861d"), d = i("7b0b"), f = i("50c4"), p = i("8418"), h = i("65f0"), v = i("1dde"), m = i("b622"), b = i("2d00"), x = m("isConcatSpreadable"), g = 9007199254740991, y = "Maximum allowed index exceeded", E = b >= 51 || !l(function() {
              var _ = [];
              return _[x] = !1, _.concat()[0] !== _;
            }), S = v("concat"), T = function(_) {
              if (!u(_))
                return !1;
              var N = _[x];
              return N !== void 0 ? !!N : c(_);
            }, D = !E || !S;
            a({ target: "Array", proto: !0, forced: D }, {
              concat: function(N) {
                var R = d(this), M = h(R, 0), $ = 0, H, G, P, V, B;
                for (H = -1, P = arguments.length; H < P; H++)
                  if (B = H === -1 ? R : arguments[H], T(B)) {
                    if (V = f(B.length), $ + V > g)
                      throw TypeError(y);
                    for (G = 0; G < V; G++, $++)
                      G in B && p(M, $, B[G]);
                  } else {
                    if ($ >= g)
                      throw TypeError(y);
                    p(M, $++, B);
                  }
                return M.length = $, M;
              }
            });
          }
        ),
        /***/
        "9bdd": (
          /***/
          function(o, s, i) {
            var a = i("825a");
            o.exports = function(l, c, u, d) {
              try {
                return d ? c(a(u)[0], u[1]) : c(u);
              } catch (p) {
                var f = l.return;
                throw f !== void 0 && a(f.call(l)), p;
              }
            };
          }
        ),
        /***/
        "9bf2": (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("0cfb"), c = i("825a"), u = i("c04e"), d = Object.defineProperty;
            s.f = a ? d : function(p, h, v) {
              if (c(p), h = u(h, !0), c(v), l)
                try {
                  return d(p, h, v);
                } catch {
                }
              if ("get" in v || "set" in v)
                throw TypeError("Accessors not supported");
              return "value" in v && (p[h] = v.value), p;
            };
          }
        ),
        /***/
        "9ed3": (
          /***/
          function(o, s, i) {
            var a = i("ae93").IteratorPrototype, l = i("7c73"), c = i("5c6c"), u = i("d44e"), d = i("3f8c"), f = function() {
              return this;
            };
            o.exports = function(p, h, v) {
              var m = h + " Iterator";
              return p.prototype = l(a, { next: c(1, v) }), u(p, m, !1, !0), d[m] = f, p;
            };
          }
        ),
        /***/
        "9f7f": (
          /***/
          function(o, s, i) {
            var a = i("d039");
            function l(c, u) {
              return RegExp(c, u);
            }
            s.UNSUPPORTED_Y = a(function() {
              var c = l("a", "y");
              return c.lastIndex = 2, c.exec("abcd") != null;
            }), s.BROKEN_CARET = a(function() {
              var c = l("^r", "gy");
              return c.lastIndex = 2, c.exec("str") != null;
            });
          }
        ),
        /***/
        a2bf: (
          /***/
          function(o, s, i) {
            var a = i("e8b5"), l = i("50c4"), c = i("0366"), u = function(d, f, p, h, v, m, b, x) {
              for (var g = v, y = 0, E = b ? c(b, x, 3) : !1, S; y < h; ) {
                if (y in p) {
                  if (S = E ? E(p[y], y, f) : p[y], m > 0 && a(S))
                    g = u(d, f, S, l(S.length), g, m - 1) - 1;
                  else {
                    if (g >= 9007199254740991)
                      throw TypeError("Exceed the acceptable array length");
                    d[g] = S;
                  }
                  g++;
                }
                y++;
              }
              return g;
            };
            o.exports = u;
          }
        ),
        /***/
        a352: (
          /***/
          function(o, s) {
            o.exports = r;
          }
        ),
        /***/
        a434: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("23cb"), c = i("a691"), u = i("50c4"), d = i("7b0b"), f = i("65f0"), p = i("8418"), h = i("1dde"), v = i("ae40"), m = h("splice"), b = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), x = Math.max, g = Math.min, y = 9007199254740991, E = "Maximum allowed length exceeded";
            a({ target: "Array", proto: !0, forced: !m || !b }, {
              splice: function(T, D) {
                var _ = d(this), N = u(_.length), R = l(T, N), M = arguments.length, $, H, G, P, V, B;
                if (M === 0 ? $ = H = 0 : M === 1 ? ($ = 0, H = N - R) : ($ = M - 2, H = g(x(c(D), 0), N - R)), N + $ - H > y)
                  throw TypeError(E);
                for (G = f(_, H), P = 0; P < H; P++)
                  V = R + P, V in _ && p(G, P, _[V]);
                if (G.length = H, $ < H) {
                  for (P = R; P < N - H; P++)
                    V = P + H, B = P + $, V in _ ? _[B] = _[V] : delete _[B];
                  for (P = N; P > N - H + $; P--)
                    delete _[P - 1];
                } else if ($ > H)
                  for (P = N - H; P > R; P--)
                    V = P + H - 1, B = P + $ - 1, V in _ ? _[B] = _[V] : delete _[B];
                for (P = 0; P < $; P++)
                  _[P + R] = arguments[P + 2];
                return _.length = N - H + $, G;
              }
            });
          }
        ),
        /***/
        a4d3: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("da84"), c = i("d066"), u = i("c430"), d = i("83ab"), f = i("4930"), p = i("fdbf"), h = i("d039"), v = i("5135"), m = i("e8b5"), b = i("861d"), x = i("825a"), g = i("7b0b"), y = i("fc6a"), E = i("c04e"), S = i("5c6c"), T = i("7c73"), D = i("df75"), _ = i("241c"), N = i("057f"), R = i("7418"), M = i("06cf"), $ = i("9bf2"), H = i("d1e7"), G = i("9112"), P = i("6eeb"), V = i("5692"), B = i("f772"), Ce = i("d012"), We = i("90e3"), Ve = i("b622"), ee = i("e538"), te = i("746f"), ne = i("d44e"), he = i("69f3"), oe = i("b727").forEach, I = B("hidden"), q = "Symbol", re = "prototype", pe = Ve("toPrimitive"), ze = he.set, ot = he.getterFor(q), w = Object[re], O = l.Symbol, j = c("JSON", "stringify"), Z = M.f, z = $.f, se = N.f, de = H.f, X = V("symbols"), ie = V("op-symbols"), Y = V("string-to-symbol-registry"), Se = V("symbol-to-string-registry"), xe = V("wks"), Te = l.QObject, $e = !Te || !Te[re] || !Te[re].findChild, Ke = d && h(function() {
              return T(z({}, "a", {
                get: function() {
                  return z(this, "a", { value: 7 }).a;
                }
              })).a != 7;
            }) ? function(ke, _e, Ie) {
              var et = Z(w, _e);
              et && delete w[_e], z(ke, _e, Ie), et && ke !== w && z(w, _e, et);
            } : z, st = function(ke, _e) {
              var Ie = X[ke] = T(O[re]);
              return ze(Ie, {
                type: q,
                tag: ke,
                description: _e
              }), d || (Ie.description = _e), Ie;
            }, L = p ? function(ke) {
              return typeof ke == "symbol";
            } : function(ke) {
              return Object(ke) instanceof O;
            }, k = function(_e, Ie, et) {
              _e === w && k(ie, Ie, et), x(_e);
              var it = E(Ie, !0);
              return x(et), v(X, it) ? (et.enumerable ? (v(_e, I) && _e[I][it] && (_e[I][it] = !1), et = T(et, { enumerable: S(0, !1) })) : (v(_e, I) || z(_e, I, S(1, {})), _e[I][it] = !0), Ke(_e, it, et)) : z(_e, it, et);
            }, F = function(_e, Ie) {
              x(_e);
              var et = y(Ie), it = D(et).concat(Fe(et));
              return oe(it, function(sn) {
                (!d || we.call(et, sn)) && k(_e, sn, et[sn]);
              }), _e;
            }, J = function(_e, Ie) {
              return Ie === void 0 ? T(_e) : F(T(_e), Ie);
            }, we = function(_e) {
              var Ie = E(_e, !0), et = de.call(this, Ie);
              return this === w && v(X, Ie) && !v(ie, Ie) ? !1 : et || !v(this, Ie) || !v(X, Ie) || v(this, I) && this[I][Ie] ? et : !0;
            }, Pe = function(_e, Ie) {
              var et = y(_e), it = E(Ie, !0);
              if (!(et === w && v(X, it) && !v(ie, it))) {
                var sn = Z(et, it);
                return sn && v(X, it) && !(v(et, I) && et[I][it]) && (sn.enumerable = !0), sn;
              }
            }, Be = function(_e) {
              var Ie = se(y(_e)), et = [];
              return oe(Ie, function(it) {
                !v(X, it) && !v(Ce, it) && et.push(it);
              }), et;
            }, Fe = function(_e) {
              var Ie = _e === w, et = se(Ie ? ie : y(_e)), it = [];
              return oe(et, function(sn) {
                v(X, sn) && (!Ie || v(w, sn)) && it.push(X[sn]);
              }), it;
            };
            if (f || (O = function() {
              if (this instanceof O)
                throw TypeError("Symbol is not a constructor");
              var _e = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Ie = We(_e), et = function(it) {
                this === w && et.call(ie, it), v(this, I) && v(this[I], Ie) && (this[I][Ie] = !1), Ke(this, Ie, S(1, it));
              };
              return d && $e && Ke(w, Ie, { configurable: !0, set: et }), st(Ie, _e);
            }, P(O[re], "toString", function() {
              return ot(this).tag;
            }), P(O, "withoutSetter", function(ke) {
              return st(We(ke), ke);
            }), H.f = we, $.f = k, M.f = Pe, _.f = N.f = Be, R.f = Fe, ee.f = function(ke) {
              return st(Ve(ke), ke);
            }, d && (z(O[re], "description", {
              configurable: !0,
              get: function() {
                return ot(this).description;
              }
            }), u || P(w, "propertyIsEnumerable", we, { unsafe: !0 }))), a({ global: !0, wrap: !0, forced: !f, sham: !f }, {
              Symbol: O
            }), oe(D(xe), function(ke) {
              te(ke);
            }), a({ target: q, stat: !0, forced: !f }, {
              // `Symbol.for` method
              // https://tc39.github.io/ecma262/#sec-symbol.for
              for: function(ke) {
                var _e = String(ke);
                if (v(Y, _e))
                  return Y[_e];
                var Ie = O(_e);
                return Y[_e] = Ie, Se[Ie] = _e, Ie;
              },
              // `Symbol.keyFor` method
              // https://tc39.github.io/ecma262/#sec-symbol.keyfor
              keyFor: function(_e) {
                if (!L(_e))
                  throw TypeError(_e + " is not a symbol");
                if (v(Se, _e))
                  return Se[_e];
              },
              useSetter: function() {
                $e = !0;
              },
              useSimple: function() {
                $e = !1;
              }
            }), a({ target: "Object", stat: !0, forced: !f, sham: !d }, {
              // `Object.create` method
              // https://tc39.github.io/ecma262/#sec-object.create
              create: J,
              // `Object.defineProperty` method
              // https://tc39.github.io/ecma262/#sec-object.defineproperty
              defineProperty: k,
              // `Object.defineProperties` method
              // https://tc39.github.io/ecma262/#sec-object.defineproperties
              defineProperties: F,
              // `Object.getOwnPropertyDescriptor` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
              getOwnPropertyDescriptor: Pe
            }), a({ target: "Object", stat: !0, forced: !f }, {
              // `Object.getOwnPropertyNames` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
              getOwnPropertyNames: Be,
              // `Object.getOwnPropertySymbols` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
              getOwnPropertySymbols: Fe
            }), a({ target: "Object", stat: !0, forced: h(function() {
              R.f(1);
            }) }, {
              getOwnPropertySymbols: function(_e) {
                return R.f(g(_e));
              }
            }), j) {
              var lt = !f || h(function() {
                var ke = O();
                return j([ke]) != "[null]" || j({ a: ke }) != "{}" || j(Object(ke)) != "{}";
              });
              a({ target: "JSON", stat: !0, forced: lt }, {
                // eslint-disable-next-line no-unused-vars
                stringify: function(_e, Ie, et) {
                  for (var it = [_e], sn = 1, ac; arguments.length > sn; )
                    it.push(arguments[sn++]);
                  if (ac = Ie, !(!b(Ie) && _e === void 0 || L(_e)))
                    return m(Ie) || (Ie = function(Yg, ha) {
                      if (typeof ac == "function" && (ha = ac.call(this, Yg, ha)), !L(ha))
                        return ha;
                    }), it[1] = Ie, j.apply(null, it);
                }
              });
            }
            O[re][pe] || G(O[re], pe, O[re].valueOf), ne(O, q), Ce[I] = !0;
          }
        ),
        /***/
        a630: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("4df4"), c = i("1c7e"), u = !c(function(d) {
              Array.from(d);
            });
            a({ target: "Array", stat: !0, forced: u }, {
              from: l
            });
          }
        ),
        /***/
        a640: (
          /***/
          function(o, s, i) {
            var a = i("d039");
            o.exports = function(l, c) {
              var u = [][l];
              return !!u && a(function() {
                u.call(null, c || function() {
                  throw 1;
                }, 1);
              });
            };
          }
        ),
        /***/
        a691: (
          /***/
          function(o, s) {
            var i = Math.ceil, a = Math.floor;
            o.exports = function(l) {
              return isNaN(l = +l) ? 0 : (l > 0 ? a : i)(l);
            };
          }
        ),
        /***/
        ab13: (
          /***/
          function(o, s, i) {
            var a = i("b622"), l = a("match");
            o.exports = function(c) {
              var u = /./;
              try {
                "/./"[c](u);
              } catch {
                try {
                  return u[l] = !1, "/./"[c](u);
                } catch {
                }
              }
              return !1;
            };
          }
        ),
        /***/
        ac1f: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("9263");
            a({ target: "RegExp", proto: !0, forced: /./.exec !== l }, {
              exec: l
            });
          }
        ),
        /***/
        ad6d: (
          /***/
          function(o, s, i) {
            var a = i("825a");
            o.exports = function() {
              var l = a(this), c = "";
              return l.global && (c += "g"), l.ignoreCase && (c += "i"), l.multiline && (c += "m"), l.dotAll && (c += "s"), l.unicode && (c += "u"), l.sticky && (c += "y"), c;
            };
          }
        ),
        /***/
        ae40: (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("d039"), c = i("5135"), u = Object.defineProperty, d = {}, f = function(p) {
              throw p;
            };
            o.exports = function(p, h) {
              if (c(d, p))
                return d[p];
              h || (h = {});
              var v = [][p], m = c(h, "ACCESSORS") ? h.ACCESSORS : !1, b = c(h, 0) ? h[0] : f, x = c(h, 1) ? h[1] : void 0;
              return d[p] = !!v && !l(function() {
                if (m && !a)
                  return !0;
                var g = { length: -1 };
                m ? u(g, 1, { enumerable: !0, get: f }) : g[1] = 1, v.call(g, b, x);
              });
            };
          }
        ),
        /***/
        ae93: (
          /***/
          function(o, s, i) {
            var a = i("e163"), l = i("9112"), c = i("5135"), u = i("b622"), d = i("c430"), f = u("iterator"), p = !1, h = function() {
              return this;
            }, v, m, b;
            [].keys && (b = [].keys(), "next" in b ? (m = a(a(b)), m !== Object.prototype && (v = m)) : p = !0), v == null && (v = {}), !d && !c(v, f) && l(v, f, h), o.exports = {
              IteratorPrototype: v,
              BUGGY_SAFARI_ITERATORS: p
            };
          }
        ),
        /***/
        b041: (
          /***/
          function(o, s, i) {
            var a = i("00ee"), l = i("f5df");
            o.exports = a ? {}.toString : function() {
              return "[object " + l(this) + "]";
            };
          }
        ),
        /***/
        b0c0: (
          /***/
          function(o, s, i) {
            var a = i("83ab"), l = i("9bf2").f, c = Function.prototype, u = c.toString, d = /^\s*function ([^ (]*)/, f = "name";
            a && !(f in c) && l(c, f, {
              configurable: !0,
              get: function() {
                try {
                  return u.call(this).match(d)[1];
                } catch {
                  return "";
                }
              }
            });
          }
        ),
        /***/
        b622: (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("5692"), c = i("5135"), u = i("90e3"), d = i("4930"), f = i("fdbf"), p = l("wks"), h = a.Symbol, v = f ? h : h && h.withoutSetter || u;
            o.exports = function(m) {
              return c(p, m) || (d && c(h, m) ? p[m] = h[m] : p[m] = v("Symbol." + m)), p[m];
            };
          }
        ),
        /***/
        b64b: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("7b0b"), c = i("df75"), u = i("d039"), d = u(function() {
              c(1);
            });
            a({ target: "Object", stat: !0, forced: d }, {
              keys: function(p) {
                return c(l(p));
              }
            });
          }
        ),
        /***/
        b727: (
          /***/
          function(o, s, i) {
            var a = i("0366"), l = i("44ad"), c = i("7b0b"), u = i("50c4"), d = i("65f0"), f = [].push, p = function(h) {
              var v = h == 1, m = h == 2, b = h == 3, x = h == 4, g = h == 6, y = h == 5 || g;
              return function(E, S, T, D) {
                for (var _ = c(E), N = l(_), R = a(S, T, 3), M = u(N.length), $ = 0, H = D || d, G = v ? H(E, M) : m ? H(E, 0) : void 0, P, V; M > $; $++)
                  if ((y || $ in N) && (P = N[$], V = R(P, $, _), h)) {
                    if (v)
                      G[$] = V;
                    else if (V)
                      switch (h) {
                        case 3:
                          return !0;
                        case 5:
                          return P;
                        case 6:
                          return $;
                        case 2:
                          f.call(G, P);
                      }
                    else if (x)
                      return !1;
                  }
                return g ? -1 : b || x ? x : G;
              };
            };
            o.exports = {
              // `Array.prototype.forEach` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
              forEach: p(0),
              // `Array.prototype.map` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.map
              map: p(1),
              // `Array.prototype.filter` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.filter
              filter: p(2),
              // `Array.prototype.some` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.some
              some: p(3),
              // `Array.prototype.every` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.every
              every: p(4),
              // `Array.prototype.find` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.find
              find: p(5),
              // `Array.prototype.findIndex` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
              findIndex: p(6)
            };
          }
        ),
        /***/
        c04e: (
          /***/
          function(o, s, i) {
            var a = i("861d");
            o.exports = function(l, c) {
              if (!a(l))
                return l;
              var u, d;
              if (c && typeof (u = l.toString) == "function" && !a(d = u.call(l)) || typeof (u = l.valueOf) == "function" && !a(d = u.call(l)) || !c && typeof (u = l.toString) == "function" && !a(d = u.call(l)))
                return d;
              throw TypeError("Can't convert object to primitive value");
            };
          }
        ),
        /***/
        c430: (
          /***/
          function(o, s) {
            o.exports = !1;
          }
        ),
        /***/
        c6b6: (
          /***/
          function(o, s) {
            var i = {}.toString;
            o.exports = function(a) {
              return i.call(a).slice(8, -1);
            };
          }
        ),
        /***/
        c6cd: (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("ce4e"), c = "__core-js_shared__", u = a[c] || l(c, {});
            o.exports = u;
          }
        ),
        /***/
        c740: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("b727").findIndex, c = i("44d2"), u = i("ae40"), d = "findIndex", f = !0, p = u(d);
            d in [] && Array(1)[d](function() {
              f = !1;
            }), a({ target: "Array", proto: !0, forced: f || !p }, {
              findIndex: function(v) {
                return l(this, v, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), c(d);
          }
        ),
        /***/
        c8ba: (
          /***/
          function(o, s) {
            var i;
            i = function() {
              return this;
            }();
            try {
              i = i || new Function("return this")();
            } catch {
              typeof window == "object" && (i = window);
            }
            o.exports = i;
          }
        ),
        /***/
        c975: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("4d64").indexOf, c = i("a640"), u = i("ae40"), d = [].indexOf, f = !!d && 1 / [1].indexOf(1, -0) < 0, p = c("indexOf"), h = u("indexOf", { ACCESSORS: !0, 1: 0 });
            a({ target: "Array", proto: !0, forced: f || !p || !h }, {
              indexOf: function(m) {
                return f ? d.apply(this, arguments) || 0 : l(this, m, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }
        ),
        /***/
        ca84: (
          /***/
          function(o, s, i) {
            var a = i("5135"), l = i("fc6a"), c = i("4d64").indexOf, u = i("d012");
            o.exports = function(d, f) {
              var p = l(d), h = 0, v = [], m;
              for (m in p)
                !a(u, m) && a(p, m) && v.push(m);
              for (; f.length > h; )
                a(p, m = f[h++]) && (~c(v, m) || v.push(m));
              return v;
            };
          }
        ),
        /***/
        caad: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("4d64").includes, c = i("44d2"), u = i("ae40"), d = u("indexOf", { ACCESSORS: !0, 1: 0 });
            a({ target: "Array", proto: !0, forced: !d }, {
              includes: function(p) {
                return l(this, p, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), c("includes");
          }
        ),
        /***/
        cc12: (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("861d"), c = a.document, u = l(c) && l(c.createElement);
            o.exports = function(d) {
              return u ? c.createElement(d) : {};
            };
          }
        ),
        /***/
        ce4e: (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("9112");
            o.exports = function(c, u) {
              try {
                l(a, c, u);
              } catch {
                a[c] = u;
              }
              return u;
            };
          }
        ),
        /***/
        d012: (
          /***/
          function(o, s) {
            o.exports = {};
          }
        ),
        /***/
        d039: (
          /***/
          function(o, s) {
            o.exports = function(i) {
              try {
                return !!i();
              } catch {
                return !0;
              }
            };
          }
        ),
        /***/
        d066: (
          /***/
          function(o, s, i) {
            var a = i("428f"), l = i("da84"), c = function(u) {
              return typeof u == "function" ? u : void 0;
            };
            o.exports = function(u, d) {
              return arguments.length < 2 ? c(a[u]) || c(l[u]) : a[u] && a[u][d] || l[u] && l[u][d];
            };
          }
        ),
        /***/
        d1e7: (
          /***/
          function(o, s, i) {
            var a = {}.propertyIsEnumerable, l = Object.getOwnPropertyDescriptor, c = l && !a.call({ 1: 2 }, 1);
            s.f = c ? function(d) {
              var f = l(this, d);
              return !!f && f.enumerable;
            } : a;
          }
        ),
        /***/
        d28b: (
          /***/
          function(o, s, i) {
            var a = i("746f");
            a("iterator");
          }
        ),
        /***/
        d2bb: (
          /***/
          function(o, s, i) {
            var a = i("825a"), l = i("3bbe");
            o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
              var c = !1, u = {}, d;
              try {
                d = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, d.call(u, []), c = u instanceof Array;
              } catch {
              }
              return function(p, h) {
                return a(p), l(h), c ? d.call(p, h) : p.__proto__ = h, p;
              };
            }() : void 0);
          }
        ),
        /***/
        d3b7: (
          /***/
          function(o, s, i) {
            var a = i("00ee"), l = i("6eeb"), c = i("b041");
            a || l(Object.prototype, "toString", c, { unsafe: !0 });
          }
        ),
        /***/
        d44e: (
          /***/
          function(o, s, i) {
            var a = i("9bf2").f, l = i("5135"), c = i("b622"), u = c("toStringTag");
            o.exports = function(d, f, p) {
              d && !l(d = p ? d : d.prototype, u) && a(d, u, { configurable: !0, value: f });
            };
          }
        ),
        /***/
        d58f: (
          /***/
          function(o, s, i) {
            var a = i("1c0b"), l = i("7b0b"), c = i("44ad"), u = i("50c4"), d = function(f) {
              return function(p, h, v, m) {
                a(h);
                var b = l(p), x = c(b), g = u(b.length), y = f ? g - 1 : 0, E = f ? -1 : 1;
                if (v < 2)
                  for (; ; ) {
                    if (y in x) {
                      m = x[y], y += E;
                      break;
                    }
                    if (y += E, f ? y < 0 : g <= y)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                for (; f ? y >= 0 : g > y; y += E)
                  y in x && (m = h(m, x[y], y, b));
                return m;
              };
            };
            o.exports = {
              // `Array.prototype.reduce` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
              left: d(!1),
              // `Array.prototype.reduceRight` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
              right: d(!0)
            };
          }
        ),
        /***/
        d784: (
          /***/
          function(o, s, i) {
            i("ac1f");
            var a = i("6eeb"), l = i("d039"), c = i("b622"), u = i("9263"), d = i("9112"), f = c("species"), p = !l(function() {
              var x = /./;
              return x.exec = function() {
                var g = [];
                return g.groups = { a: "7" }, g;
              }, "".replace(x, "$<a>") !== "7";
            }), h = function() {
              return "a".replace(/./, "$0") === "$0";
            }(), v = c("replace"), m = function() {
              return /./[v] ? /./[v]("a", "$0") === "" : !1;
            }(), b = !l(function() {
              var x = /(?:)/, g = x.exec;
              x.exec = function() {
                return g.apply(this, arguments);
              };
              var y = "ab".split(x);
              return y.length !== 2 || y[0] !== "a" || y[1] !== "b";
            });
            o.exports = function(x, g, y, E) {
              var S = c(x), T = !l(function() {
                var $ = {};
                return $[S] = function() {
                  return 7;
                }, ""[x]($) != 7;
              }), D = T && !l(function() {
                var $ = !1, H = /a/;
                return x === "split" && (H = {}, H.constructor = {}, H.constructor[f] = function() {
                  return H;
                }, H.flags = "", H[S] = /./[S]), H.exec = function() {
                  return $ = !0, null;
                }, H[S](""), !$;
              });
              if (!T || !D || x === "replace" && !(p && h && !m) || x === "split" && !b) {
                var _ = /./[S], N = y(S, ""[x], function($, H, G, P, V) {
                  return H.exec === u ? T && !V ? { done: !0, value: _.call(H, G, P) } : { done: !0, value: $.call(G, H, P) } : { done: !1 };
                }, {
                  REPLACE_KEEPS_$0: h,
                  REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
                }), R = N[0], M = N[1];
                a(String.prototype, x, R), a(
                  RegExp.prototype,
                  S,
                  g == 2 ? function($, H) {
                    return M.call($, this, H);
                  } : function($) {
                    return M.call($, this);
                  }
                );
              }
              E && d(RegExp.prototype[S], "sham", !0);
            };
          }
        ),
        /***/
        d81d: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("b727").map, c = i("1dde"), u = i("ae40"), d = c("map"), f = u("map");
            a({ target: "Array", proto: !0, forced: !d || !f }, {
              map: function(h) {
                return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }
        ),
        /***/
        da84: (
          /***/
          function(o, s, i) {
            (function(a) {
              var l = function(c) {
                return c && c.Math == Math && c;
              };
              o.exports = // eslint-disable-next-line no-undef
              l(typeof globalThis == "object" && globalThis) || l(typeof window == "object" && window) || l(typeof self == "object" && self) || l(typeof a == "object" && a) || // eslint-disable-next-line no-new-func
              Function("return this")();
            }).call(this, i("c8ba"));
          }
        ),
        /***/
        dbb4: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("83ab"), c = i("56ef"), u = i("fc6a"), d = i("06cf"), f = i("8418");
            a({ target: "Object", stat: !0, sham: !l }, {
              getOwnPropertyDescriptors: function(h) {
                for (var v = u(h), m = d.f, b = c(v), x = {}, g = 0, y, E; b.length > g; )
                  E = m(v, y = b[g++]), E !== void 0 && f(x, y, E);
                return x;
              }
            });
          }
        ),
        /***/
        dbf1: (
          /***/
          function(o, s, i) {
            (function(a) {
              i.d(s, "a", function() {
                return c;
              });
              function l() {
                return typeof window < "u" ? window.console : a.console;
              }
              var c = l();
            }).call(this, i("c8ba"));
          }
        ),
        /***/
        ddb0: (
          /***/
          function(o, s, i) {
            var a = i("da84"), l = i("fdbc"), c = i("e260"), u = i("9112"), d = i("b622"), f = d("iterator"), p = d("toStringTag"), h = c.values;
            for (var v in l) {
              var m = a[v], b = m && m.prototype;
              if (b) {
                if (b[f] !== h)
                  try {
                    u(b, f, h);
                  } catch {
                    b[f] = h;
                  }
                if (b[p] || u(b, p, v), l[v]) {
                  for (var x in c)
                    if (b[x] !== c[x])
                      try {
                        u(b, x, c[x]);
                      } catch {
                        b[x] = c[x];
                      }
                }
              }
            }
          }
        ),
        /***/
        df75: (
          /***/
          function(o, s, i) {
            var a = i("ca84"), l = i("7839");
            o.exports = Object.keys || function(u) {
              return a(u, l);
            };
          }
        ),
        /***/
        e01a: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("83ab"), c = i("da84"), u = i("5135"), d = i("861d"), f = i("9bf2").f, p = i("e893"), h = c.Symbol;
            if (l && typeof h == "function" && (!("description" in h.prototype) || // Safari 12 bug
            h().description !== void 0)) {
              var v = {}, m = function() {
                var S = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), T = this instanceof m ? new h(S) : S === void 0 ? h() : h(S);
                return S === "" && (v[T] = !0), T;
              };
              p(m, h);
              var b = m.prototype = h.prototype;
              b.constructor = m;
              var x = b.toString, g = String(h("test")) == "Symbol(test)", y = /^Symbol\((.*)\)[^)]+$/;
              f(b, "description", {
                configurable: !0,
                get: function() {
                  var S = d(this) ? this.valueOf() : this, T = x.call(S);
                  if (u(v, S))
                    return "";
                  var D = g ? T.slice(7, -1) : T.replace(y, "$1");
                  return D === "" ? void 0 : D;
                }
              }), a({ global: !0, forced: !0 }, {
                Symbol: m
              });
            }
          }
        ),
        /***/
        e163: (
          /***/
          function(o, s, i) {
            var a = i("5135"), l = i("7b0b"), c = i("f772"), u = i("e177"), d = c("IE_PROTO"), f = Object.prototype;
            o.exports = u ? Object.getPrototypeOf : function(p) {
              return p = l(p), a(p, d) ? p[d] : typeof p.constructor == "function" && p instanceof p.constructor ? p.constructor.prototype : p instanceof Object ? f : null;
            };
          }
        ),
        /***/
        e177: (
          /***/
          function(o, s, i) {
            var a = i("d039");
            o.exports = !a(function() {
              function l() {
              }
              return l.prototype.constructor = null, Object.getPrototypeOf(new l()) !== l.prototype;
            });
          }
        ),
        /***/
        e260: (
          /***/
          function(o, s, i) {
            var a = i("fc6a"), l = i("44d2"), c = i("3f8c"), u = i("69f3"), d = i("7dd0"), f = "Array Iterator", p = u.set, h = u.getterFor(f);
            o.exports = d(Array, "Array", function(v, m) {
              p(this, {
                type: f,
                target: a(v),
                // target
                index: 0,
                // next index
                kind: m
                // kind
              });
            }, function() {
              var v = h(this), m = v.target, b = v.kind, x = v.index++;
              return !m || x >= m.length ? (v.target = void 0, { value: void 0, done: !0 }) : b == "keys" ? { value: x, done: !1 } : b == "values" ? { value: m[x], done: !1 } : { value: [x, m[x]], done: !1 };
            }, "values"), c.Arguments = c.Array, l("keys"), l("values"), l("entries");
          }
        ),
        /***/
        e439: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("d039"), c = i("fc6a"), u = i("06cf").f, d = i("83ab"), f = l(function() {
              u(1);
            }), p = !d || f;
            a({ target: "Object", stat: !0, forced: p, sham: !d }, {
              getOwnPropertyDescriptor: function(v, m) {
                return u(c(v), m);
              }
            });
          }
        ),
        /***/
        e538: (
          /***/
          function(o, s, i) {
            var a = i("b622");
            s.f = a;
          }
        ),
        /***/
        e893: (
          /***/
          function(o, s, i) {
            var a = i("5135"), l = i("56ef"), c = i("06cf"), u = i("9bf2");
            o.exports = function(d, f) {
              for (var p = l(f), h = u.f, v = c.f, m = 0; m < p.length; m++) {
                var b = p[m];
                a(d, b) || h(d, b, v(f, b));
              }
            };
          }
        ),
        /***/
        e8b5: (
          /***/
          function(o, s, i) {
            var a = i("c6b6");
            o.exports = Array.isArray || function(c) {
              return a(c) == "Array";
            };
          }
        ),
        /***/
        e95a: (
          /***/
          function(o, s, i) {
            var a = i("b622"), l = i("3f8c"), c = a("iterator"), u = Array.prototype;
            o.exports = function(d) {
              return d !== void 0 && (l.Array === d || u[c] === d);
            };
          }
        ),
        /***/
        f5df: (
          /***/
          function(o, s, i) {
            var a = i("00ee"), l = i("c6b6"), c = i("b622"), u = c("toStringTag"), d = l(function() {
              return arguments;
            }()) == "Arguments", f = function(p, h) {
              try {
                return p[h];
              } catch {
              }
            };
            o.exports = a ? l : function(p) {
              var h, v, m;
              return p === void 0 ? "Undefined" : p === null ? "Null" : typeof (v = f(h = Object(p), u)) == "string" ? v : d ? l(h) : (m = l(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : m;
            };
          }
        ),
        /***/
        f772: (
          /***/
          function(o, s, i) {
            var a = i("5692"), l = i("90e3"), c = a("keys");
            o.exports = function(u) {
              return c[u] || (c[u] = l(u));
            };
          }
        ),
        /***/
        fb15: (
          /***/
          function(o, s, i) {
            if (i.r(s), typeof window < "u") {
              var a = window.document.currentScript;
              {
                var l = i("8875");
                a = l(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: l });
              }
              var c = a && a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
              c && (i.p = c[1]);
            }
            i("99af"), i("4de4"), i("4160"), i("c975"), i("d81d"), i("a434"), i("159b"), i("a4d3"), i("e439"), i("dbb4"), i("b64b");
            function u(L, k, F) {
              return k in L ? Object.defineProperty(L, k, {
                value: F,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : L[k] = F, L;
            }
            function d(L, k) {
              var F = Object.keys(L);
              if (Object.getOwnPropertySymbols) {
                var J = Object.getOwnPropertySymbols(L);
                k && (J = J.filter(function(we) {
                  return Object.getOwnPropertyDescriptor(L, we).enumerable;
                })), F.push.apply(F, J);
              }
              return F;
            }
            function f(L) {
              for (var k = 1; k < arguments.length; k++) {
                var F = arguments[k] != null ? arguments[k] : {};
                k % 2 ? d(Object(F), !0).forEach(function(J) {
                  u(L, J, F[J]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(F)) : d(Object(F)).forEach(function(J) {
                  Object.defineProperty(L, J, Object.getOwnPropertyDescriptor(F, J));
                });
              }
              return L;
            }
            function p(L) {
              if (Array.isArray(L))
                return L;
            }
            i("e01a"), i("d28b"), i("e260"), i("d3b7"), i("3ca3"), i("ddb0");
            function h(L, k) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(L)))) {
                var F = [], J = !0, we = !1, Pe = void 0;
                try {
                  for (var Be = L[Symbol.iterator](), Fe; !(J = (Fe = Be.next()).done) && (F.push(Fe.value), !(k && F.length === k)); J = !0)
                    ;
                } catch (lt) {
                  we = !0, Pe = lt;
                } finally {
                  try {
                    !J && Be.return != null && Be.return();
                  } finally {
                    if (we)
                      throw Pe;
                  }
                }
                return F;
              }
            }
            i("a630"), i("fb6a"), i("b0c0"), i("25f0");
            function v(L, k) {
              (k == null || k > L.length) && (k = L.length);
              for (var F = 0, J = new Array(k); F < k; F++)
                J[F] = L[F];
              return J;
            }
            function m(L, k) {
              if (L) {
                if (typeof L == "string")
                  return v(L, k);
                var F = Object.prototype.toString.call(L).slice(8, -1);
                if (F === "Object" && L.constructor && (F = L.constructor.name), F === "Map" || F === "Set")
                  return Array.from(L);
                if (F === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))
                  return v(L, k);
              }
            }
            function b() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            function x(L, k) {
              return p(L) || h(L, k) || m(L, k) || b();
            }
            function g(L) {
              if (Array.isArray(L))
                return v(L);
            }
            function y(L) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(L))
                return Array.from(L);
            }
            function E() {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            function S(L) {
              return g(L) || y(L) || m(L) || E();
            }
            var T = i("a352"), D = /* @__PURE__ */ i.n(T);
            function _(L) {
              L.parentElement !== null && L.parentElement.removeChild(L);
            }
            function N(L, k, F) {
              var J = F === 0 ? L.children[0] : L.children[F - 1].nextSibling;
              L.insertBefore(k, J);
            }
            var R = i("dbf1");
            i("13d5"), i("4fad"), i("ac1f"), i("5319");
            function M(L) {
              var k = /* @__PURE__ */ Object.create(null);
              return function(J) {
                var we = k[J];
                return we || (k[J] = L(J));
              };
            }
            var $ = /-(\w)/g, H = M(function(L) {
              return L.replace($, function(k, F) {
                return F.toUpperCase();
              });
            });
            i("5db7"), i("73d9");
            var G = ["Start", "Add", "Remove", "Update", "End"], P = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], V = ["Move"], B = [V, G, P].flatMap(function(L) {
              return L;
            }).map(function(L) {
              return "on".concat(L);
            }), Ce = {
              manage: V,
              manageAndEmit: G,
              emit: P
            };
            function We(L) {
              return B.indexOf(L) !== -1;
            }
            i("caad"), i("2ca0");
            var Ve = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
            function ee(L) {
              return Ve.includes(L);
            }
            function te(L) {
              return ["transition-group", "TransitionGroup"].includes(L);
            }
            function ne(L) {
              return ["id", "class", "role", "style"].includes(L) || L.startsWith("data-") || L.startsWith("aria-") || L.startsWith("on");
            }
            function he(L) {
              return L.reduce(function(k, F) {
                var J = x(F, 2), we = J[0], Pe = J[1];
                return k[we] = Pe, k;
              }, {});
            }
            function oe(L) {
              var k = L.$attrs, F = L.componentData, J = F === void 0 ? {} : F, we = he(Object.entries(k).filter(function(Pe) {
                var Be = x(Pe, 2), Fe = Be[0];
                return Be[1], ne(Fe);
              }));
              return f(f({}, we), J);
            }
            function I(L) {
              var k = L.$attrs, F = L.callBackBuilder, J = he(q(k));
              Object.entries(F).forEach(function(Pe) {
                var Be = x(Pe, 2), Fe = Be[0], lt = Be[1];
                Ce[Fe].forEach(function(ke) {
                  J["on".concat(ke)] = lt(ke);
                });
              });
              var we = "[data-draggable]".concat(J.draggable || "");
              return f(f({}, J), {}, {
                draggable: we
              });
            }
            function q(L) {
              return Object.entries(L).filter(function(k) {
                var F = x(k, 2), J = F[0];
                return F[1], !ne(J);
              }).map(function(k) {
                var F = x(k, 2), J = F[0], we = F[1];
                return [H(J), we];
              }).filter(function(k) {
                var F = x(k, 2), J = F[0];
                return F[1], !We(J);
              });
            }
            i("c740");
            function re(L, k) {
              if (!(L instanceof k))
                throw new TypeError("Cannot call a class as a function");
            }
            function pe(L, k) {
              for (var F = 0; F < k.length; F++) {
                var J = k[F];
                J.enumerable = J.enumerable || !1, J.configurable = !0, "value" in J && (J.writable = !0), Object.defineProperty(L, J.key, J);
              }
            }
            function ze(L, k, F) {
              return k && pe(L.prototype, k), F && pe(L, F), L;
            }
            var ot = function(k) {
              var F = k.el;
              return F;
            }, w = function(k, F) {
              return k.__draggable_context = F;
            }, O = function(k) {
              return k.__draggable_context;
            }, j = /* @__PURE__ */ function() {
              function L(k) {
                var F = k.nodes, J = F.header, we = F.default, Pe = F.footer, Be = k.root, Fe = k.realList;
                re(this, L), this.defaultNodes = we, this.children = [].concat(S(J), S(we), S(Pe)), this.externalComponent = Be.externalComponent, this.rootTransition = Be.transition, this.tag = Be.tag, this.realList = Fe;
              }
              return ze(L, [{
                key: "render",
                value: function(F, J) {
                  var we = this.tag, Pe = this.children, Be = this._isRootComponent, Fe = Be ? {
                    default: function() {
                      return Pe;
                    }
                  } : Pe;
                  return F(we, J, Fe);
                }
              }, {
                key: "updated",
                value: function() {
                  var F = this.defaultNodes, J = this.realList;
                  F.forEach(function(we, Pe) {
                    w(ot(we), {
                      element: J[Pe],
                      index: Pe
                    });
                  });
                }
              }, {
                key: "getUnderlyingVm",
                value: function(F) {
                  return O(F);
                }
              }, {
                key: "getVmIndexFromDomIndex",
                value: function(F, J) {
                  var we = this.defaultNodes, Pe = we.length, Be = J.children, Fe = Be.item(F);
                  if (Fe === null)
                    return Pe;
                  var lt = O(Fe);
                  if (lt)
                    return lt.index;
                  if (Pe === 0)
                    return 0;
                  var ke = ot(we[0]), _e = S(Be).findIndex(function(Ie) {
                    return Ie === ke;
                  });
                  return F < _e ? 0 : Pe;
                }
              }, {
                key: "_isRootComponent",
                get: function() {
                  return this.externalComponent || this.rootTransition;
                }
              }]), L;
            }(), Z = i("8bbf");
            function z(L, k) {
              var F = L[k];
              return F ? F() : [];
            }
            function se(L) {
              var k = L.$slots, F = L.realList, J = L.getKey, we = F || [], Pe = ["header", "footer"].map(function(Ie) {
                return z(k, Ie);
              }), Be = x(Pe, 2), Fe = Be[0], lt = Be[1], ke = k.item;
              if (!ke)
                throw new Error("draggable element must have an item slot");
              var _e = we.flatMap(function(Ie, et) {
                return ke({
                  element: Ie,
                  index: et
                }).map(function(it) {
                  return it.key = J(Ie), it.props = f(f({}, it.props || {}), {}, {
                    "data-draggable": !0
                  }), it;
                });
              });
              if (_e.length !== we.length)
                throw new Error("Item slot must have only one child");
              return {
                header: Fe,
                footer: lt,
                default: _e
              };
            }
            function de(L) {
              var k = te(L), F = !ee(L) && !k;
              return {
                transition: k,
                externalComponent: F,
                tag: F ? Object(Z.resolveComponent)(L) : k ? Z.TransitionGroup : L
              };
            }
            function X(L) {
              var k = L.$slots, F = L.tag, J = L.realList, we = L.getKey, Pe = se({
                $slots: k,
                realList: J,
                getKey: we
              }), Be = de(F);
              return new j({
                nodes: Pe,
                root: Be,
                realList: J
              });
            }
            function ie(L, k) {
              var F = this;
              Object(Z.nextTick)(function() {
                return F.$emit(L.toLowerCase(), k);
              });
            }
            function Y(L) {
              var k = this;
              return function(F, J) {
                if (k.realList !== null)
                  return k["onDrag".concat(L)](F, J);
              };
            }
            function Se(L) {
              var k = this, F = Y.call(this, L);
              return function(J, we) {
                F.call(k, J, we), ie.call(k, L, J);
              };
            }
            var xe = null, Te = {
              list: {
                type: Array,
                required: !1,
                default: null
              },
              modelValue: {
                type: Array,
                required: !1,
                default: null
              },
              itemKey: {
                type: [String, Function],
                required: !0
              },
              clone: {
                type: Function,
                default: function(k) {
                  return k;
                }
              },
              tag: {
                type: String,
                default: "div"
              },
              move: {
                type: Function,
                default: null
              },
              componentData: {
                type: Object,
                required: !1,
                default: null
              }
            }, $e = ["update:modelValue", "change"].concat(S([].concat(S(Ce.manageAndEmit), S(Ce.emit)).map(function(L) {
              return L.toLowerCase();
            }))), Ke = Object(Z.defineComponent)({
              name: "draggable",
              inheritAttrs: !1,
              props: Te,
              emits: $e,
              data: function() {
                return {
                  error: !1
                };
              },
              render: function() {
                try {
                  this.error = !1;
                  var k = this.$slots, F = this.$attrs, J = this.tag, we = this.componentData, Pe = this.realList, Be = this.getKey, Fe = X({
                    $slots: k,
                    tag: J,
                    realList: Pe,
                    getKey: Be
                  });
                  this.componentStructure = Fe;
                  var lt = oe({
                    $attrs: F,
                    componentData: we
                  });
                  return Fe.render(Z.h, lt);
                } catch (ke) {
                  return this.error = !0, Object(Z.h)("pre", {
                    style: {
                      color: "red"
                    }
                  }, ke.stack);
                }
              },
              created: function() {
                this.list !== null && this.modelValue !== null && R.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
              },
              mounted: function() {
                var k = this;
                if (!this.error) {
                  var F = this.$attrs, J = this.$el, we = this.componentStructure;
                  we.updated();
                  var Pe = I({
                    $attrs: F,
                    callBackBuilder: {
                      manageAndEmit: function(lt) {
                        return Se.call(k, lt);
                      },
                      emit: function(lt) {
                        return ie.bind(k, lt);
                      },
                      manage: function(lt) {
                        return Y.call(k, lt);
                      }
                    }
                  }), Be = J.nodeType === 1 ? J : J.parentElement;
                  this._sortable = new D.a(Be, Pe), this.targetDomElement = Be, Be.__draggable_component__ = this;
                }
              },
              updated: function() {
                this.componentStructure.updated();
              },
              beforeUnmount: function() {
                this._sortable !== void 0 && this._sortable.destroy();
              },
              computed: {
                realList: function() {
                  var k = this.list;
                  return k || this.modelValue;
                },
                getKey: function() {
                  var k = this.itemKey;
                  return typeof k == "function" ? k : function(F) {
                    return F[k];
                  };
                }
              },
              watch: {
                $attrs: {
                  handler: function(k) {
                    var F = this._sortable;
                    F && q(k).forEach(function(J) {
                      var we = x(J, 2), Pe = we[0], Be = we[1];
                      F.option(Pe, Be);
                    });
                  },
                  deep: !0
                }
              },
              methods: {
                getUnderlyingVm: function(k) {
                  return this.componentStructure.getUnderlyingVm(k) || null;
                },
                getUnderlyingPotencialDraggableComponent: function(k) {
                  return k.__draggable_component__;
                },
                emitChanges: function(k) {
                  var F = this;
                  Object(Z.nextTick)(function() {
                    return F.$emit("change", k);
                  });
                },
                alterList: function(k) {
                  if (this.list) {
                    k(this.list);
                    return;
                  }
                  var F = S(this.modelValue);
                  k(F), this.$emit("update:modelValue", F);
                },
                spliceList: function() {
                  var k = arguments, F = function(we) {
                    return we.splice.apply(we, S(k));
                  };
                  this.alterList(F);
                },
                updatePosition: function(k, F) {
                  var J = function(Pe) {
                    return Pe.splice(F, 0, Pe.splice(k, 1)[0]);
                  };
                  this.alterList(J);
                },
                getRelatedContextFromMoveEvent: function(k) {
                  var F = k.to, J = k.related, we = this.getUnderlyingPotencialDraggableComponent(F);
                  if (!we)
                    return {
                      component: we
                    };
                  var Pe = we.realList, Be = {
                    list: Pe,
                    component: we
                  };
                  if (F !== J && Pe) {
                    var Fe = we.getUnderlyingVm(J) || {};
                    return f(f({}, Fe), Be);
                  }
                  return Be;
                },
                getVmIndexFromDomIndex: function(k) {
                  return this.componentStructure.getVmIndexFromDomIndex(k, this.targetDomElement);
                },
                onDragStart: function(k) {
                  this.context = this.getUnderlyingVm(k.item), k.item._underlying_vm_ = this.clone(this.context.element), xe = k.item;
                },
                onDragAdd: function(k) {
                  var F = k.item._underlying_vm_;
                  if (F !== void 0) {
                    _(k.item);
                    var J = this.getVmIndexFromDomIndex(k.newIndex);
                    this.spliceList(J, 0, F);
                    var we = {
                      element: F,
                      newIndex: J
                    };
                    this.emitChanges({
                      added: we
                    });
                  }
                },
                onDragRemove: function(k) {
                  if (N(this.$el, k.item, k.oldIndex), k.pullMode === "clone") {
                    _(k.clone);
                    return;
                  }
                  var F = this.context, J = F.index, we = F.element;
                  this.spliceList(J, 1);
                  var Pe = {
                    element: we,
                    oldIndex: J
                  };
                  this.emitChanges({
                    removed: Pe
                  });
                },
                onDragUpdate: function(k) {
                  _(k.item), N(k.from, k.item, k.oldIndex);
                  var F = this.context.index, J = this.getVmIndexFromDomIndex(k.newIndex);
                  this.updatePosition(F, J);
                  var we = {
                    element: this.context.element,
                    oldIndex: F,
                    newIndex: J
                  };
                  this.emitChanges({
                    moved: we
                  });
                },
                computeFutureIndex: function(k, F) {
                  if (!k.element)
                    return 0;
                  var J = S(F.to.children).filter(function(Fe) {
                    return Fe.style.display !== "none";
                  }), we = J.indexOf(F.related), Pe = k.component.getVmIndexFromDomIndex(we), Be = J.indexOf(xe) !== -1;
                  return Be || !F.willInsertAfter ? Pe : Pe + 1;
                },
                onDragMove: function(k, F) {
                  var J = this.move, we = this.realList;
                  if (!J || !we)
                    return !0;
                  var Pe = this.getRelatedContextFromMoveEvent(k), Be = this.computeFutureIndex(Pe, k), Fe = f(f({}, this.context), {}, {
                    futureIndex: Be
                  }), lt = f(f({}, k), {}, {
                    relatedContext: Pe,
                    draggedContext: Fe
                  });
                  return J(lt, F);
                },
                onDragEnd: function() {
                  xe = null;
                }
              }
            }), st = Ke;
            s.default = st;
          }
        ),
        /***/
        fb6a: (
          /***/
          function(o, s, i) {
            var a = i("23e7"), l = i("861d"), c = i("e8b5"), u = i("23cb"), d = i("50c4"), f = i("fc6a"), p = i("8418"), h = i("b622"), v = i("1dde"), m = i("ae40"), b = v("slice"), x = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), g = h("species"), y = [].slice, E = Math.max;
            a({ target: "Array", proto: !0, forced: !b || !x }, {
              slice: function(T, D) {
                var _ = f(this), N = d(_.length), R = u(T, N), M = u(D === void 0 ? N : D, N), $, H, G;
                if (c(_) && ($ = _.constructor, typeof $ == "function" && ($ === Array || c($.prototype)) ? $ = void 0 : l($) && ($ = $[g], $ === null && ($ = void 0)), $ === Array || $ === void 0))
                  return y.call(_, R, M);
                for (H = new ($ === void 0 ? Array : $)(E(M - R, 0)), G = 0; R < M; R++, G++)
                  R in _ && p(H, G, _[R]);
                return H.length = G, H;
              }
            });
          }
        ),
        /***/
        fc6a: (
          /***/
          function(o, s, i) {
            var a = i("44ad"), l = i("1d80");
            o.exports = function(c) {
              return a(l(c));
            };
          }
        ),
        /***/
        fdbc: (
          /***/
          function(o, s) {
            o.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          }
        ),
        /***/
        fdbf: (
          /***/
          function(o, s, i) {
            var a = i("4930");
            o.exports = a && !Symbol.sham && typeof Symbol.iterator == "symbol";
          }
        )
        /******/
      }).default
    );
  });
})(Tg);
var Iw = Tg.exports;
const Lw = /* @__PURE__ */ Tv(Iw), $w = /* @__PURE__ */ C("h3", { class: "text-lg" }, "Delivery route", -1), kw = {
  key: 0,
  class: "py-2"
}, Mw = { class: "flex items-center justify-start gap-2 rounded-sm" }, jw = { class: "list-none" }, Vw = { class: "mr-1 rounded-md bg-slate-500 px-1 py-0.5 text-xs text-white" }, Fw = ["onClick"], Bw = { class: "flex items-center gap-3" }, Uw = ["onClick"], Hw = /* @__PURE__ */ De({
  __name: "DeliveryRoute",
  props: {
    clearDeliveryRoute: { type: Function },
    deliveryRoute: {},
    deleteFromDelivery: { type: Function }
  },
  setup(e) {
    const t = e, n = fe(
      () => t.deliveryRoute.reduce((a, { appealId: l, address: c, phone: u }) => `${a}${l} — ${c} — ${u}
`, "")
    ), r = wd(t, "deliveryRoute"), { toClipboard: o } = h6(), s = W(!1), i = async () => {
      try {
        await o(n.value), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 1e3);
      } catch (a) {
        Mu(a);
      }
    };
    return (a, l) => {
      const c = Wn("v-icon");
      return Q(), le(Ye, null, [
        $w,
        !A(r) || !A(r).length ? (Q(), le("div", kw, " No appeals to deliver ")) : (Q(), le(Ye, { key: 1 }, [
          U(A(Lw), {
            modelValue: A(r),
            "onUpdate:modelValue": l[0] || (l[0] = (u) => rt(r) ? r.value = u : null),
            animation: 200,
            class: "-ml-1 mb-2 grid gap-2 py-2",
            "drag-class": "opacity-0",
            "ghost-class": "bg-slate-200/50",
            handle: ".handle",
            "item-key": "appealId",
            tag: "ul"
          }, {
            item: me(({ element: u }) => [
              C("li", Mw, [
                U(c, {
                  name: "md-dragindicator-sharp",
                  class: "handle h-full w-4 cursor-move p-0 text-slate-400"
                }),
                C("summary", jw, [
                  C("span", Vw, at(u.appealId), 1),
                  ae(" " + at(u.address) + " – " + at(u.phone), 1)
                ]),
                C("button", {
                  class: "ml-auto cursor-pointer rounded-full p-2 transition-colors",
                  title: "Remove from route",
                  onClick: _t(() => a.deleteFromDelivery(u), ["prevent"])
                }, [
                  U(A(bE), { class: "h-5 w-5 cursor-pointer text-slate-400 transition-colors hover-parent:text-primary-600 focus-parent:text-primary-600" })
                ], 8, Fw)
              ])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          C("footer", Bw, [
            C("button", {
              class: be([
                s.value ? "btn-danger flex-1" : "btn-primary",
                "group px-3 py-2 text-base"
              ]),
              onClick: _t(i, ["prevent"])
            }, [
              s.value ? (Q(), le(Ye, { key: 0 }, [
                U(A(vE), { class: "h-4 w-4 text-sky-900 transition-colors group-hover:text-red-500" }),
                ae(" Copied ")
              ], 64)) : (Q(), le(Ye, { key: 1 }, [
                U(A(ZE), { class: "h-4 w-4 text-white transition-colors" }),
                ae(" Copy ")
              ], 64))
            ], 10, Uw),
            C("button", {
              class: "btn-danger flex gap-2 pl-3",
              onClick: l[1] || (l[1] = _t(
                //@ts-ignore
                (...u) => a.clearDeliveryRoute && a.clearDeliveryRoute(...u),
                ["prevent"]
              ))
            }, [
              U(A(WE), { class: "h-4 w-4 text-cyan-700 transition-colors hover-parent:text-red-500/75 focus-parent:text-red-500" }),
              ae(" Clear ")
            ])
          ])
        ], 64))
      ], 64);
    };
  }
}), zw = /* @__PURE__ */ C("h3", { class: "text-lg" }, "Customize Map", -1), Kw = { class: "flex flex-col gap-3 py-3" }, Gw = /* @__PURE__ */ De({
  __name: "MapSettings",
  props: {
    isControlPanelEnabled: { type: Boolean },
    isSatelliteEnabled: { type: Boolean },
    onToggleControlPanel: { type: Function },
    onToggleSatelliteLayer: { type: Function }
  },
  setup(e) {
    return (t, n) => (Q(), le(Ye, null, [
      zw,
      C("div", Kw, [
        U(A(Lp), null, {
          default: me(() => [
            C("div", {
              class: "flex cursor-pointer items-center justify-between text-lg",
              onClick: n[0] || (n[0] = //@ts-ignore
              (...r) => t.onToggleControlPanel && t.onToggleControlPanel(...r))
            }, [
              U(A(kp), {
                class: "cursor-pointer",
                onClick: t.onToggleControlPanel
              }, {
                default: me(() => [
                  ae(" Enable control panel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              U(A($p), {
                "model-value": t.isControlPanelEnabled,
                class: be([t.isControlPanelEnabled ? "bg-cyan-600" : "bg-slate-400", "border-px relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/75"])
              }, {
                default: me(() => [
                  C("span", {
                    "aria-hidden": "true",
                    class: be([t.isControlPanelEnabled ? "translate-x-4" : "translate-x-0", "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm shadow-slate-800/25 ring-0 transition duration-200 ease-in-out"])
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["model-value", "class"])
            ])
          ]),
          _: 1
        }),
        U(A(Lp), null, {
          default: me(() => [
            C("div", {
              class: "flex cursor-pointer items-center justify-between text-lg",
              onClick: n[1] || (n[1] = //@ts-ignore
              (...r) => t.onToggleSatelliteLayer && t.onToggleSatelliteLayer(...r))
            }, [
              U(A(kp), {
                class: "cursor-pointer",
                onClick: t.onToggleSatelliteLayer
              }, {
                default: me(() => [
                  ae(" Satellite View ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              U(A($p), {
                "model-value": t.isSatelliteEnabled,
                class: be([t.isSatelliteEnabled ? "bg-cyan-600" : "bg-slate-400", "border-px relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/75"])
              }, {
                default: me(() => [
                  C("span", {
                    "aria-hidden": "true",
                    class: be([t.isSatelliteEnabled ? "translate-x-4" : "translate-x-0", "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm shadow-slate-800/25 ring-0 transition duration-200 ease-in-out"])
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["model-value", "class"])
            ])
          ]),
          _: 1
        })
      ])
    ], 64));
  }
});
function Zw(e, t) {
  return Q(), le("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const Ww = { class: "absolute right-6 top-6 cursor-pointer" }, Yw = /* @__PURE__ */ C("span", null, "Appeal", -1), Xw = [
  Yw
], Jw = /* @__PURE__ */ C("span", null, "Route", -1), Qw = {
  key: 0,
  class: "inline-grid h-5 w-5 place-items-center rounded-full bg-primary-600 p-0 font-remissis text-xxs not-italic text-white"
}, qw = /* @__PURE__ */ C("span", null, "Customize", -1), e8 = [
  qw
], t8 = /* @__PURE__ */ De({
  __name: "MapSidebar",
  props: {
    deliveryRoute: {},
    isControlPanelEnabled: { type: Boolean },
    isSatelliteEnabled: { type: Boolean },
    isSidebarOpen: { type: Boolean },
    onAddToDelivery: { type: Function },
    onChangeTab: { type: Function },
    onClearDeliveryRoute: { type: Function },
    onCloseSidebar: { type: Function },
    onDeleteFromDelivery: { type: Function },
    onToggleControlPanel: { type: Function },
    onToggleSatelliteLayer: { type: Function },
    selectedAppeal: {},
    selectedSidebarTab: {}
  },
  setup(e) {
    const n = wd(e, "deliveryRoute");
    return (r, o) => (Q(), xn(A(wg), {
      as: "aside",
      class: "relative z-10 flex w-full flex-col items-stretch gap-4 overflow-hidden overflow-y-auto rounded-none bg-slate-50 p-5 pb-0 pr-0 sm:max-w-md sm:shadow-md",
      enter: "transition-transform",
      "enter-from": "translate-y-full sm:translate-y-0 sm:translate-x-full",
      "enter-to": "translate-y-0 sm:translate-x-0",
      leave: "transition-transform",
      "leave-from": "translate-y-0 sm:translate-x-0",
      "leave-to": "translate-y-full sm:translate-y-0 sm:translate-x-full",
      show: r.isSidebarOpen && !!r.selectedAppeal
    }, {
      default: me(() => [
        C("div", Ww, [
          U(A(Zw), {
            class: "h-6 w-6 text-slate-700 transition-colors hover:text-primary-600",
            onClick: r.onCloseSidebar
          }, null, 8, ["onClick"])
        ]),
        U(A(gg), {
          "selected-index": r.selectedSidebarTab,
          onChange: r.onChangeTab
        }, {
          default: me(() => [
            U(A(yg), { class: "flex gap-2 micro:gap-4" }, {
              default: me(() => [
                U(A(xs), null, {
                  default: me(({ selected: s }) => [
                    C("div", {
                      class: be([
                        "flex gap-x-1.5 rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base",
                        s ? "cursor-default bg-slate-200 child-[span]:pb-px child-[span]:text-slate-600" : "btn-link child-[span]:pb-0"
                      ])
                    }, Xw, 2)
                  ]),
                  _: 1
                }),
                U(A(xs), null, {
                  default: me(({ selected: s }) => [
                    C("div", {
                      class: be([
                        "flex items-center gap-x-1.5 rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base",
                        s ? "cursor-default bg-slate-200 child-[span]:pb-px child-[span]:text-slate-600" : "btn-link child-[span]:pb-0"
                      ])
                    }, [
                      Jw,
                      A(n) && A(n).length ? (Q(), le("div", Qw, at(A(n).length), 1)) : Sr("", !0)
                    ], 2)
                  ]),
                  _: 1
                }),
                U(A(xs), null, {
                  default: me(({ selected: s }) => [
                    C("div", {
                      class: be([
                        "rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base",
                        s ? "cursor-default bg-slate-200 child-[span]:text-slate-600" : "btn-link"
                      ])
                    }, e8, 2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            U(A(bg), {
              id: "tab-panels",
              class: "overflow-y-auto pb-5 pr-5"
            }, {
              default: me(() => [
                U(A(Es), { tabindex: "-1" }, {
                  default: me(() => [
                    U(A(GE), {
                      "presentation-data": A(bl),
                      "selected-appeal": r.selectedAppeal,
                      "on-add-to-delivery": r.onAddToDelivery,
                      "change-tab": r.onChangeTab
                    }, null, 8, ["presentation-data", "selected-appeal", "on-add-to-delivery", "change-tab"])
                  ]),
                  _: 1
                }),
                U(A(Es), { tabindex: "-1" }, {
                  default: me(() => [
                    U(A(Hw), {
                      "delivery-route": A(n),
                      "onUpdate:deliveryRoute": o[0] || (o[0] = (s) => rt(n) ? n.value = s : null),
                      "clear-delivery-route": r.onClearDeliveryRoute,
                      "delete-from-delivery": r.onDeleteFromDelivery
                    }, null, 8, ["delivery-route", "clear-delivery-route", "delete-from-delivery"])
                  ]),
                  _: 1
                }),
                U(A(Es), { tabindex: "-1" }, {
                  default: me(() => [
                    U(A(Gw), {
                      "is-control-panel-enabled": r.isControlPanelEnabled,
                      "is-satellite-enabled": r.isSatelliteEnabled,
                      "on-toggle-control-panel": r.onToggleControlPanel,
                      "on-toggle-satellite-layer": r.onToggleSatelliteLayer
                    }, null, 8, ["is-control-panel-enabled", "is-satellite-enabled", "on-toggle-control-panel", "on-toggle-satellite-layer"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["selected-index", "onChange"])
      ]),
      _: 1
    }, 8, ["show"]));
  }
}), n8 = { class: "container flex flex-1 overflow-y-auto p-0" }, r8 = /* @__PURE__ */ De({
  __name: "MapPage",
  setup(e) {
    const {
      delivery: t,
      isControlPanelEnabled: n,
      isSatelliteEnabled: r,
      isSidebarOpen: o,
      isZoomedOut: s,
      mapElementRef: i,
      onAddToDelivery: a,
      onChangeTab: l,
      onClearDeliveryRoute: c,
      onCloseSidebar: u,
      onDeleteFromDelivery: d,
      onToggleControlPanel: f,
      onToggleSatelliteLayer: p,
      selectedAppeal: h,
      selectedSidebarTab: v
    } = m6();
    return (m, b) => (Q(), le("div", n8, [
      C("div", {
        class: be([
          "z-0 m-0 flex w-full flex-1 flex-col overflow-hidden p-0 sm:flex-row sm:overflow-y-auto",
          A(s) && "zoomed-in"
        ]),
        onKeydown: b[1] || (b[1] = Rd(
          //@ts-ignore
          (...x) => A(u) && A(u)(...x),
          ["esc"]
        ))
      }, [
        C("main", {
          id: "map",
          ref_key: "mapElementRef",
          ref: i,
          class: "z-0 min-h-[10rem] w-full flex-grow transition-all micro:min-h-[15rem] sm:flex-grow-0"
        }, null, 512),
        U(A(t8), {
          "delivery-route": A(t).route,
          "onUpdate:deliveryRoute": b[0] || (b[0] = (x) => A(t).route = x),
          "is-control-panel-enabled": A(n),
          "is-satellite-enabled": A(r),
          "is-sidebar-open": A(o),
          "on-add-to-delivery": A(a),
          "on-change-tab": A(l),
          "on-clear-delivery-route": A(c),
          "on-close-sidebar": A(u),
          "on-delete-from-delivery": A(d),
          "on-toggle-control-panel": A(f),
          "on-toggle-satellite-layer": A(p),
          "selected-appeal": A(h),
          "selected-sidebar-tab": A(v)
        }, null, 8, ["delivery-route", "is-control-panel-enabled", "is-satellite-enabled", "is-sidebar-open", "on-add-to-delivery", "on-change-tab", "on-clear-delivery-route", "on-close-sidebar", "on-delete-from-delivery", "on-toggle-control-panel", "on-toggle-satellite-layer", "selected-appeal", "selected-sidebar-tab"])
      ], 34)
    ]));
  }
});
var o8 = Object.defineProperty, s8 = Object.defineProperties, i8 = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, a8 = Object.prototype.hasOwnProperty, l8 = Object.prototype.propertyIsEnumerable, Xp = (e, t, n) => t in e ? o8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Js = (e, t) => {
  for (var n in t || (t = {}))
    a8.call(t, n) && Xp(e, n, t[n]);
  if (Yp)
    for (var n of Yp(t))
      l8.call(t, n) && Xp(e, n, t[n]);
  return e;
}, Jp = (e, t) => s8(e, i8(t));
const Ku = typeof window < "u";
function c8() {
  const e = W(!1);
  if (!Ku)
    return e;
  const t = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => e.value = t.matches;
  return ht(() => {
    var r;
    n(), (r = t.addEventListener) == null || r.call(t, "change", n);
  }), na(() => {
    var r;
    (r = t.removeEventListener) == null || r.call(t, "change", n);
  }), e;
}
const Qp = "cubic-bezier(0.16, 1, 0.3, 1)", u8 = {
  enterStyles: {
    transition: `all 0.35s ${Qp} 0s`,
    transform: "translateY(0px)"
  },
  leaveStyles: {
    transition: `all 0.5s ${Qp} 0s`,
    transform: "translateY(-101%)"
  }
};
function d8(e, t = {}) {
  const { enterStyles: n, leaveStyles: r } = u8, o = () => t.root || t.root === null ? A(t.root) : null, s = () => t.transitionOpacity === void 0 ? !1 : A(t.transitionOpacity), i = c8(), a = {
    resizeObserver: void 0,
    initResizeObserver: !1,
    isListeningScroll: !1,
    isHovering: !1
  }, l = hs({}), c = W(
    0
    /* READY */
  ), u = (P) => l.value = P, d = () => l.value = {}, f = (P) => c.value = P;
  function p() {
    const P = o();
    return P ?? document.documentElement;
  }
  function h() {
    const P = p();
    return P ? P.scrollTop : 0;
  }
  function v() {
    const P = A(e);
    if (!P)
      return !1;
    const { position: V, display: B } = window.getComputedStyle(P);
    return (V === "fixed" || V === "sticky") && B !== "none";
  }
  function m() {
    const P = A(e);
    if (!P)
      return 0;
    let V = P.scrollHeight;
    const { marginTop: B, marginBottom: Ce } = window.getComputedStyle(P);
    return V += Number.parseFloat(B) + Number.parseFloat(Ce), V;
  }
  function b() {
    a.resizeObserver = new ResizeObserver(() => {
      if (!a.initResizeObserver)
        return a.initResizeObserver = !0;
      H();
    });
    const P = p();
    P && a.resizeObserver.observe(P);
  }
  function x() {
    c.value !== 1 && (S(), u(Jp(Js(Js({}, n), s() ? { opacity: 1 } : {}), {
      visibility: ""
    })), f(
      1
      /* ENTER */
    ));
  }
  function g() {
    c.value !== 2 && (u(Js(Js({}, r), s() ? { opacity: 0 } : {})), f(
      2
      /* LEAVE */
    ), E());
  }
  function y(P) {
    if (S(), !A(e) || P.target !== A(e) || P.propertyName !== "transform")
      return;
    const { transform: V } = window.getComputedStyle(A(e));
    V !== "matrix(1, 0, 0, 1, 0, 0)" && u(Jp(Js({}, r), {
      visibility: "hidden"
    }));
  }
  function E() {
    const P = A(e);
    P && P.addEventListener("transitionend", y);
  }
  function S() {
    const P = A(e);
    P && P.removeEventListener("transitionend", y);
  }
  function T() {
    let P = Ku ? h() : 0;
    return () => {
      const V = h(), B = V <= m(), Ce = V < P, We = V > P, Ve = Math.abs(V - P);
      if (B)
        return x();
      Ve < 10 || (a.isHovering || (Ce ? x() : We && g()), P = h());
    };
  }
  const D = T();
  function _() {
    const P = p();
    P && ((P === document.documentElement ? document : P).addEventListener("scroll", D, { passive: !0 }), a.isListeningScroll = !0);
  }
  function N() {
    const P = p();
    P && ((P === document.documentElement ? document : P).removeEventListener("scroll", D), a.isListeningScroll = !1);
  }
  function R(P) {
    var V, B;
    a.isHovering = (B = (V = A(e)) == null ? void 0 : V.contains(P.target)) != null ? B : !1;
  }
  function M() {
    document.addEventListener("pointermove", R);
  }
  function $() {
    document.removeEventListener("pointermove", R);
  }
  function H() {
    const P = v();
    a.isListeningScroll ? P || (G(), d()) : P && (_(), M());
  }
  function G() {
    N(), $();
  }
  return Ku && Lt(
    () => [A(e), p(), i.value, A(t.watch)],
    ([P, V, B], Ce, We) => {
      !B && P && (V || V === null) && (b(), H()), We(() => {
        var Ve;
        G(), d(), (Ve = a.resizeObserver) == null || Ve.disconnect(), a.initResizeObserver = !1;
      });
    },
    { immediate: !0, flush: "post" }
  ), {
    styles: js(l),
    isLeave: fe(
      () => c.value === 2
      /* LEAVE */
    ),
    isEnter: fe(
      () => c.value === 1
      /* ENTER */
    )
  };
}
const f8 = { class: "relative grid grid-cols-2 p-0 md:flex md:h-full" }, p8 = ["src"], h8 = { class: "text-ellipsis whitespace-nowrap py-4 leading-5 opacity-60 md:py-1 md:text-sm md:leading-normal" }, m8 = { class: "flex h-full items-center gap-1" }, v8 = /* @__PURE__ */ De({
  __name: "UserSnippet",
  props: {
    username: {},
    avatarUrl: {},
    logout: { type: Function }
  },
  setup(e) {
    return (t, n) => {
      const r = Wn("v-icon");
      return Q(), xn(A(fg), null, {
        default: me(({ open: o }) => [
          C("div", f8, [
            U(A(ox), { class: "my-0 flex h-full flex-grow cursor-default select-none items-center gap-2 border-r border-dotted border-slate-500 py-0 pl-4 pr-8 md:flex-grow-0 md:cursor-pointer md:border-none md:bg-slate-100 md:py-3 md:pr-3" }, {
              default: me(() => [
                t.avatarUrl ? (Q(), le("img", {
                  key: 0,
                  src: t.avatarUrl,
                  alt: "",
                  class: "h-6 w-6 rounded-full"
                }, null, 8, p8)) : (Q(), xn(A(yE), {
                  key: 1,
                  class: "m-0 h-5 w-5 p-0 text-slate-600 opacity-60"
                })),
                C("p", h8, at(t.username), 1)
              ]),
              _: 1
            }),
            U(A(sx), {
              static: "",
              as: "div",
              class: be([o && "open", "panel"])
            }, {
              default: me(() => [
                U(A(Ut), {
                  class: "grid h-full place-items-center p-2 md:p-3",
                  to: "/",
                  onClick: t.logout
                }, {
                  default: me(() => [
                    C("span", m8, [
                      U(r, { name: "outline-logout" }),
                      ae(" Logout ")
                    ])
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["class"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const g8 = /* @__PURE__ */ Hd(v8, [["__scopeId", "data-v-21ff2b56"]]), y8 = { class: "logo flex items-center px-2 py-0" }, b8 = { class: "menu hidden flex-col items-center child-[.expanded]:text-9xl md:flex md:flex-row md:gap-6" }, x8 = { class: "menu-items flex w-full flex-col md:flex-row" }, E8 = /* @__PURE__ */ De({
  __name: "AppHeader",
  props: {
    username: {},
    avatarUrl: {},
    features: {},
    logout: { type: Function }
  },
  setup(e) {
    const t = W(!1), n = () => t.value = !t.value, r = W(null), { styles: o } = d8(r);
    return (s, i) => {
      const a = Wn("v-icon");
      return Q(), le("header", {
        ref_key: "headerRef",
        ref: r,
        class: be([
          "min-h-14 sticky top-0 z-10 flex w-full items-stretch justify-between bg-white p-0 shadow shadow-neutral-300 md:gap-2",
          t.value && "expanded max-md:flex-wrap child-[.menu]:max-md:flex child-[.menu]:max-md:w-full md:shadow"
        ]),
        style: Ms(A(o))
      }, [
        C("div", y8, [
          U(A(Ut), {
            to: { name: "dashboard" },
            class: "select-none focus:ring-0"
          }, {
            default: me(() => [
              U(a, {
                name: "dopomoha-logo-text-en",
                "aria-label": "Dopomoha.Kharkiv Logo",
                class: "min-h-[3rem] w-24"
              })
            ]),
            _: 1
          })
        ]),
        C("button", {
          class: be([
            "menu-button relative grid cursor-pointer place-items-center opacity-70 transition",
            "hover:bg-slate-100 hover:opacity-100 md:hidden",
            t.value && "active"
          ]),
          onClick: n
        }, [
          C("span", {
            class: be([
              "menu-icon relative block h-0.5 w-7 rounded-lg bg-slate-700 transition",
              "before:absolute before:left-0 before:h-0.5 before:w-full before:rounded-lg before:bg-slate-700 before:transition before:ease-in before:content-['']",
              "after:absolute after:left-0 after:h-0.5 after:w-full after:rounded-lg after:bg-slate-700 after:transition after:ease-in after:content-['']",
              t.value && "bg-transparent before:translate-y-2 before:-rotate-45 after:-translate-y-2 after:rotate-45"
            ])
          }, null, 2)
        ], 2),
        C("div", b8, [
          C("nav", x8, [
            (Q(!0), le(Ye, null, tr(s.features, (l) => (Q(), xn(A(Ut), {
              key: l.name,
              to: l.path,
              class: be([
                "mx-0 select-none px-6 py-3 focus:ring-0",
                "border-t border-dotted border-slate-500 border-opacity-100 last:border-b",
                "md:rounded-md md:border-none md:px-4 md:py-2",
                "md:ring-inset md:ring-slate-100 md:ring-offset-2 md:focus:ring-2",
                "focus:-outline-offset-4"
              ]),
              "active-class": "router-link-active cursor-default border-opacity-0 bg-slate-200 text-stone-600 shadow-inner shadow-slate-300 ring-0 md:shadow-none md:focus:ring-offset-4 md:focus:ring-offset-slate-100",
              onClick: l.action
            }, {
              default: me(() => [
                ae(at(l.name), 1)
              ]),
              _: 2
            }, 1032, ["to", "onClick"]))), 128))
          ]),
          U(g8, {
            username: s.username,
            "avatar-url": s.avatarUrl,
            logout: s.logout
          }, null, 8, ["username", "avatar-url", "logout"])
        ])
      ], 6);
    };
  }
});
const w8 = /* @__PURE__ */ Hd(E8, [["__scopeId", "data-v-f3102304"]]), S8 = { class: "flex h-full w-full min-w-page flex-col items-stretch bg-slate-50" }, C8 = /* @__PURE__ */ De({
  __name: "AppealsLayout",
  props: {
    username: {},
    avatarUrl: {},
    features: {},
    logout: { type: Function }
  },
  setup(e) {
    const t = e;
    return (n, r) => {
      const o = Wn("RouterView");
      return Q(), le("div", S8, [
        U(w8, Qu(Bl(t)), null, 16),
        U(o)
      ]);
    };
  }
}), O8 = { class: "flex h-full w-full min-w-page flex-col items-stretch bg-slate-50" }, T8 = /* @__PURE__ */ De({
  __name: "AppLayout",
  props: {
    username: {},
    avatarUrl: {},
    features: {},
    logout: { type: Function }
  },
  setup(e) {
    const t = e;
    return (n, r) => {
      const o = Wn("RouterView");
      return Q(), le("div", O8, [
        U(o, Qu(Bl(t)), null, 16)
      ]);
    };
  }
}), N8 = [
  {
    path: "/",
    component: T8,
    props: {
      username: String,
      avatarUrl: String,
      logout: Function,
      features: Array
    },
    children: [
      { path: "", component: jE },
      {
        path: "appeals",
        component: C8,
        children: [
          { path: "", redirect: { name: "dashboard" } },
          { name: "dashboard", path: "dashboard", component: kc },
          { name: "stats", path: "dashboard/stats", component: kc },
          { name: "guide", path: "dashboard/guide", component: kc },
          { name: "create", path: "create", component: Dp },
          { name: "edit", path: "edit", component: Dp },
          { name: "map", path: "map", component: r8 }
        ]
      }
    ]
  }
], _8 = a6({
  history: a4(),
  routes: N8
});
var A8 = Object.create;
function Gu() {
  var e = A8(null);
  return e.__ = void 0, delete e.__, e;
}
var jg = function(t, n, r) {
  this.path = t, this.matcher = n, this.delegate = r;
};
jg.prototype.to = function(t, n) {
  var r = this.delegate;
  if (r && r.willAddRoute && (t = r.willAddRoute(this.matcher.target, t)), this.matcher.add(this.path, t), n) {
    if (n.length === 0)
      throw new Error("You must have an argument in the function passed to `to`");
    this.matcher.addChild(this.path, t, n, this.delegate);
  }
};
var Ol = function(t) {
  this.routes = Gu(), this.children = Gu(), this.target = t;
};
Ol.prototype.add = function(t, n) {
  this.routes[t] = n;
};
Ol.prototype.addChild = function(t, n, r, o) {
  var s = new Ol(n);
  this.children[t] = s;
  var i = nf(t, s, o);
  o && o.contextEntered && o.contextEntered(n, i), r(i);
};
function nf(e, t, n) {
  function r(o, s) {
    var i = e + o;
    if (s)
      s(nf(i, t, n));
    else
      return new jg(i, t, n);
  }
  return r;
}
function D8(e, t, n) {
  for (var r = 0, o = 0; o < e.length; o++)
    r += e[o].path.length;
  t = t.substr(r);
  var s = { path: t, handler: n };
  e.push(s);
}
function Vg(e, t, n, r) {
  for (var o = t.routes, s = Object.keys(o), i = 0; i < s.length; i++) {
    var a = s[i], l = e.slice();
    D8(l, a, o[a]);
    var c = t.children[a];
    c ? Vg(l, c, n, r) : n.call(r, l);
  }
}
var P8 = function(e, t) {
  var n = new Ol();
  e(nf("", n, this.delegate)), Vg([], n, function(r) {
    t ? t(this, r) : this.add(r);
  }, this);
};
function Fg(e) {
  return e.split("/").map(rf).join("/");
}
var R8 = /%|\//g;
function rf(e) {
  return e.length < 3 || e.indexOf("%") === -1 ? e : decodeURIComponent(e).replace(R8, encodeURIComponent);
}
var I8 = /%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g;
function Bg(e) {
  return encodeURIComponent(e).replace(I8, decodeURIComponent);
}
var L8 = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g, rc = Array.isArray, $8 = Object.prototype.hasOwnProperty;
function Ug(e, t) {
  if (typeof e != "object" || e === null)
    throw new Error("You must pass an object as the second argument to `generate`.");
  if (!$8.call(e, t))
    throw new Error("You must provide param `" + t + "` to `generate`.");
  var n = e[t], r = typeof n == "string" ? n : "" + n;
  if (r.length === 0)
    throw new Error("You must provide a param `" + t + "`.");
  return r;
}
var ua = [];
ua[
  0
  /* Static */
] = function(e, t) {
  for (var n = t, r = e.value, o = 0; o < r.length; o++) {
    var s = r.charCodeAt(o);
    n = n.put(s, !1, !1);
  }
  return n;
};
ua[
  1
  /* Dynamic */
] = function(e, t) {
  return t.put(47, !0, !0);
};
ua[
  2
  /* Star */
] = function(e, t) {
  return t.put(-1, !1, !0);
};
ua[
  4
  /* Epsilon */
] = function(e, t) {
  return t;
};
var da = [];
da[
  0
  /* Static */
] = function(e) {
  return e.value.replace(L8, "\\$1");
};
da[
  1
  /* Dynamic */
] = function() {
  return "([^/]+)";
};
da[
  2
  /* Star */
] = function() {
  return "(.+)";
};
da[
  4
  /* Epsilon */
] = function() {
  return "";
};
var fa = [];
fa[
  0
  /* Static */
] = function(e) {
  return e.value;
};
fa[
  1
  /* Dynamic */
] = function(e, t) {
  var n = Ug(t, e.value);
  return At.ENCODE_AND_DECODE_PATH_SEGMENTS ? Bg(n) : n;
};
fa[
  2
  /* Star */
] = function(e, t) {
  return Ug(t, e.value);
};
fa[
  4
  /* Epsilon */
] = function() {
  return "";
};
var qp = Object.freeze({}), Tl = Object.freeze([]);
function k8(e, t, n) {
  t.length > 0 && t.charCodeAt(0) === 47 && (t = t.substr(1));
  for (var r = t.split("/"), o = void 0, s = void 0, i = 0; i < r.length; i++) {
    var a = r[i], l = 0, c = 0;
    a === "" ? c = 4 : a.charCodeAt(0) === 58 ? c = 1 : a.charCodeAt(0) === 42 ? c = 2 : c = 0, l = 2 << c, l & 12 && (a = a.slice(1), o = o || [], o.push(a), s = s || [], s.push((l & 4) !== 0)), l & 14 && n[c]++, e.push({
      type: c,
      value: rf(a)
    });
  }
  return {
    names: o || Tl,
    shouldDecodes: s || Tl
  };
}
function eh(e, t, n) {
  return e.char === t && e.negate === n;
}
var Ls = function(t, n, r, o, s) {
  this.states = t, this.id = n, this.char = r, this.negate = o, this.nextStates = s ? n : null, this.pattern = "", this._regex = void 0, this.handlers = void 0, this.types = void 0;
};
Ls.prototype.regex = function() {
  return this._regex || (this._regex = new RegExp(this.pattern)), this._regex;
};
Ls.prototype.get = function(t, n) {
  var r = this, o = this.nextStates;
  if (o !== null)
    if (rc(o))
      for (var s = 0; s < o.length; s++) {
        var i = r.states[o[s]];
        if (eh(i, t, n))
          return i;
      }
    else {
      var a = this.states[o];
      if (eh(a, t, n))
        return a;
    }
};
Ls.prototype.put = function(t, n, r) {
  var o;
  if (o = this.get(t, n))
    return o;
  var s = this.states;
  return o = new Ls(s, s.length, t, n, r), s[s.length] = o, this.nextStates == null ? this.nextStates = o.id : rc(this.nextStates) ? this.nextStates.push(o.id) : this.nextStates = [this.nextStates, o.id], o;
};
Ls.prototype.match = function(t) {
  var n = this, r = this.nextStates;
  if (!r)
    return [];
  var o = [];
  if (rc(r))
    for (var s = 0; s < r.length; s++) {
      var i = n.states[r[s]];
      th(i, t) && o.push(i);
    }
  else {
    var a = this.states[r];
    th(a, t) && o.push(a);
  }
  return o;
};
function th(e, t) {
  return e.negate ? e.char !== t && e.char !== -1 : e.char === t || e.char === -1;
}
function M8(e) {
  return e.sort(function(t, n) {
    var r = t.types || [0, 0, 0], o = r[0], s = r[1], i = r[2], a = n.types || [0, 0, 0], l = a[0], c = a[1], u = a[2];
    if (i !== u)
      return i - u;
    if (i) {
      if (o !== l)
        return l - o;
      if (s !== c)
        return c - s;
    }
    return s !== c ? s - c : o !== l ? l - o : 0;
  });
}
function j8(e, t) {
  for (var n = [], r = 0, o = e.length; r < o; r++) {
    var s = e[r];
    n = n.concat(s.match(t));
  }
  return n;
}
var oc = function(t) {
  this.length = 0, this.queryParams = t || {};
};
oc.prototype.splice = Array.prototype.splice;
oc.prototype.slice = Array.prototype.slice;
oc.prototype.push = Array.prototype.push;
function V8(e, t, n) {
  var r = e.handlers, o = e.regex();
  if (!o || !r)
    throw new Error("state not initialized");
  var s = t.match(o), i = 1, a = new oc(n);
  a.length = r.length;
  for (var l = 0; l < r.length; l++) {
    var c = r[l], u = c.names, d = c.shouldDecodes, f = qp, p = !1;
    if (u !== Tl && d !== Tl)
      for (var h = 0; h < u.length; h++) {
        p = !0;
        var v = u[h], m = s && s[i++];
        f === qp && (f = {}), At.ENCODE_AND_DECODE_PATH_SEGMENTS && d[h] ? f[v] = m && decodeURIComponent(m) : f[v] = m;
      }
    a[l] = {
      handler: c.handler,
      params: f,
      isDynamic: p
    };
  }
  return a;
}
function nh(e) {
  e = e.replace(/\+/gm, "%20");
  var t;
  try {
    t = decodeURIComponent(e);
  } catch {
    t = "";
  }
  return t;
}
var At = function() {
  this.names = Gu();
  var t = [], n = new Ls(t, 0, -1, !0, !1);
  t[0] = n, this.states = t, this.rootState = n;
};
At.prototype.add = function(t, n) {
  for (var r = this.rootState, o = "^", s = [0, 0, 0], i = new Array(t.length), a = [], l = !0, c = 0, u = 0; u < t.length; u++) {
    for (var d = t[u], f = k8(a, d.path, s), p = f.names, h = f.shouldDecodes; c < a.length; c++) {
      var v = a[c];
      v.type !== 4 && (l = !1, r = r.put(47, !1, !1), o += "/", r = ua[v.type](v, r), o += da[v.type](v));
    }
    i[u] = {
      handler: d.handler,
      names: p,
      shouldDecodes: h
    };
  }
  l && (r = r.put(47, !1, !1), o += "/"), r.handlers = i, r.pattern = o + "$", r.types = s;
  var m;
  typeof n == "object" && n !== null && n.as && (m = n.as), m && (this.names[m] = {
    segments: a,
    handlers: i
  });
};
At.prototype.handlersFor = function(t) {
  var n = this.names[t];
  if (!n)
    throw new Error("There is no route named " + t);
  for (var r = new Array(n.handlers.length), o = 0; o < n.handlers.length; o++) {
    var s = n.handlers[o];
    r[o] = s;
  }
  return r;
};
At.prototype.hasRoute = function(t) {
  return !!this.names[t];
};
At.prototype.generate = function(t, n) {
  var r = this.names[t], o = "";
  if (!r)
    throw new Error("There is no route named " + t);
  for (var s = r.segments, i = 0; i < s.length; i++) {
    var a = s[i];
    a.type !== 4 && (o += "/", o += fa[a.type](a, n));
  }
  return o.charAt(0) !== "/" && (o = "/" + o), n && n.queryParams && (o += this.generateQueryString(n.queryParams)), o;
};
At.prototype.generateQueryString = function(t) {
  var n = [], r = Object.keys(t);
  r.sort();
  for (var o = 0; o < r.length; o++) {
    var s = r[o], i = t[s];
    if (i != null) {
      var a = encodeURIComponent(s);
      if (rc(i))
        for (var l = 0; l < i.length; l++) {
          var c = s + "[]=" + encodeURIComponent(i[l]);
          n.push(c);
        }
      else
        a += "=" + encodeURIComponent(i), n.push(a);
    }
  }
  return n.length === 0 ? "" : "?" + n.join("&");
};
At.prototype.parseQueryString = function(t) {
  for (var n = t.split("&"), r = {}, o = 0; o < n.length; o++) {
    var s = n[o].split("="), i = nh(s[0]), a = i.length, l = !1, c = void 0;
    s.length === 1 ? c = "true" : (a > 2 && i.slice(a - 2) === "[]" && (l = !0, i = i.slice(0, a - 2), r[i] || (r[i] = [])), c = s[1] ? nh(s[1]) : ""), l ? r[i].push(c) : r[i] = c;
  }
  return r;
};
At.prototype.recognize = function(t) {
  var n, r = [this.rootState], o = {}, s = !1, i = t.indexOf("#");
  i !== -1 && (t = t.substr(0, i));
  var a = t.indexOf("?");
  if (a !== -1) {
    var l = t.substr(a + 1, t.length);
    t = t.substr(0, a), o = this.parseQueryString(l);
  }
  t.charAt(0) !== "/" && (t = "/" + t);
  var c = t;
  At.ENCODE_AND_DECODE_PATH_SEGMENTS ? t = Fg(t) : (t = decodeURI(t), c = decodeURI(c));
  var u = t.length;
  u > 1 && t.charAt(u - 1) === "/" && (t = t.substr(0, u - 1), c = c.substr(0, c.length - 1), s = !0);
  for (var d = 0; d < t.length && (r = j8(r, t.charCodeAt(d)), !!r.length); d++)
    ;
  for (var f = [], p = 0; p < r.length; p++)
    r[p].handlers && f.push(r[p]);
  r = M8(f);
  var h = f[0];
  return h && h.handlers && (s && h.pattern && h.pattern.slice(-5) === "(.+)$" && (c = c + "/"), n = V8(h, c, o)), n;
};
At.VERSION = "0.3.4";
At.ENCODE_AND_DECODE_PATH_SEGMENTS = !0;
At.Normalizer = {
  normalizeSegment: rf,
  normalizePath: Fg,
  encodePathSegment: Bg
};
At.prototype.map = P8;
/**
 * Minimal Event interface implementation
 *
 * Original implementation by Sven Fuchs: https://gist.github.com/995028
 * Modifications and tests by Christian Johansen.
 *
 * @author Sven Fuchs (svenfuchs@artweb-design.de)
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2011 Sven Fuchs, Christian Johansen
 */
var Vr = function(t, n, r, o) {
  this.type = t, this.bubbles = n, this.cancelable = r, this.target = o;
};
Vr.prototype = {
  stopPropagation: function() {
  },
  preventDefault: function() {
    this.defaultPrevented = !0;
  }
};
var F8 = {
  100: "Continue",
  101: "Switching Protocols",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  300: "Multiple Choice",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Request Entity Too Large",
  414: "Request-URI Too Long",
  415: "Unsupported Media Type",
  416: "Requested Range Not Satisfiable",
  417: "Expectation Failed",
  422: "Unprocessable Entity",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported"
};
function B8(e) {
  var t;
  if (typeof DOMParser < "u") {
    var n = new DOMParser();
    t = n.parseFromString(e, "text/xml");
  } else
    t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e);
  return t;
}
var U8 = {
  "Accept-Charset": !0,
  "Accept-Encoding": !0,
  Connection: !0,
  "Content-Length": !0,
  Cookie: !0,
  Cookie2: !0,
  "Content-Transfer-Encoding": !0,
  Date: !0,
  Expect: !0,
  Host: !0,
  "Keep-Alive": !0,
  Referer: !0,
  TE: !0,
  Trailer: !0,
  "Transfer-Encoding": !0,
  Upgrade: !0,
  "User-Agent": !0,
  Via: !0
};
function H8(e, t) {
  t.addEventListener(e, function(n) {
    var r = t["on" + e];
    r && typeof r == "function" && r.call(n.target, n);
  });
}
function Nl() {
  this._eventListeners = {};
  for (var e = ["loadstart", "progress", "load", "abort", "loadend"], t = e.length - 1; t >= 0; t--)
    H8(e[t], this);
}
Nl.prototype = {
  /*
    Duplicates the behavior of native XMLHttpRequest's addEventListener function
  */
  addEventListener: function(t, n) {
    this._eventListeners[t] = this._eventListeners[t] || [], this._eventListeners[t].push(n);
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's removeEventListener function
  */
  removeEventListener: function(t, n) {
    for (var r = this._eventListeners[t] || [], o = 0, s = r.length; o < s; ++o)
      if (r[o] == n)
        return r.splice(o, 1);
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's dispatchEvent function
  */
  dispatchEvent: function(t) {
    for (var n = t.type, r = this._eventListeners[n] || [], o = 0; o < r.length; o++)
      typeof r[o] == "function" ? r[o].call(this, t) : r[o].handleEvent(t);
    return !!t.defaultPrevented;
  },
  /*
    Triggers an `onprogress` event with the given parameters.
  */
  _progress: function(t, n, r) {
    var o = new Vr("progress");
    o.target = this, o.lengthComputable = t, o.loaded = n, o.total = r, this.dispatchEvent(o);
  }
};
function pt() {
  Nl.call(this), this.readyState = pt.UNSENT, this.requestHeaders = {}, this.requestBody = null, this.status = 0, this.statusText = "", this.upload = new Nl(), this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.onreadystatechange = null, this.ontimeout = null;
}
pt.prototype = new Nl();
pt.UNSENT = 0;
pt.OPENED = 1;
pt.HEADERS_RECEIVED = 2;
pt.LOADING = 3;
pt.DONE = 4;
var rh = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4,
  async: !0,
  withCredentials: !1,
  /*
    Duplicates the behavior of native XMLHttpRequest's open function
  */
  open: function(t, n, r, o, s) {
    this.method = t, this.url = n, this.async = typeof r == "boolean" ? r : !0, this.username = o, this.password = s, this.responseText = null, this.response = this.responseText, this.responseXML = null, this.responseURL = n, this.requestHeaders = {}, this.sendFlag = !1, this._readyStateChange(pt.OPENED);
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's setRequestHeader function
  */
  setRequestHeader: function(t, n) {
    if (sh(this), U8[t] || /^(Sec-|Proxy-)/.test(t))
      throw new Error('Refused to set unsafe header "' + t + '"');
    this.requestHeaders[t] ? this.requestHeaders[t] += "," + n : this.requestHeaders[t] = n;
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's send function
  */
  send: function(t) {
    if (sh(this), !/^(get|head)$/i.test(this.method)) {
      var n = !1;
      Object.keys(this.requestHeaders).forEach(function(r) {
        r.toLowerCase() === "content-type" && (n = !0);
      }), !n && !(t || "").toString().match("FormData") && (this.requestHeaders["Content-Type"] = "text/plain;charset=UTF-8"), this.requestBody = t;
    }
    this.errorFlag = !1, this.sendFlag = this.async, this._readyStateChange(pt.OPENED), typeof this.onSend == "function" && this.onSend(this), this.dispatchEvent(new Vr("loadstart", !1, !1, this));
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's abort function
  */
  abort: function() {
    this.aborted = !0, this.responseText = null, this.response = this.responseText, this.errorFlag = !0, this.requestHeaders = {}, this.dispatchEvent(new Vr("abort", !1, !1, this)), this.readyState > pt.UNSENT && this.sendFlag && (this._readyStateChange(pt.UNSENT), this.sendFlag = !1), typeof this.onerror == "function" && this.onerror();
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's getResponseHeader function
  */
  getResponseHeader: function(t) {
    if (this.readyState < pt.HEADERS_RECEIVED || /^Set-Cookie2?$/i.test(t))
      return null;
    t = t.toLowerCase();
    for (var n in this.responseHeaders)
      if (n.toLowerCase() == t)
        return this.responseHeaders[n];
    return null;
  },
  /*
    Duplicates the behavior of native XMLHttpRequest's getAllResponseHeaders function
  */
  getAllResponseHeaders: function() {
    if (this.readyState < pt.HEADERS_RECEIVED)
      return "";
    var t = "";
    for (var n in this.responseHeaders)
      this.responseHeaders.hasOwnProperty(n) && !/^Set-Cookie2?$/i.test(n) && (t += n + ": " + this.responseHeaders[n] + `\r
`);
    return t;
  },
  /*
   Duplicates the behavior of native XMLHttpRequest's overrideMimeType function
   */
  overrideMimeType: function(t) {
    typeof t == "string" && (this.forceMimeType = t.toLowerCase());
  },
  /*
    Places a FakeXMLHttpRequest object into the passed
    state.
  */
  _readyStateChange: function(t) {
    this.readyState = t, typeof this.onreadystatechange == "function" && this.onreadystatechange(new Vr("readystatechange")), this.dispatchEvent(new Vr("readystatechange")), this.readyState == pt.DONE && this.dispatchEvent(new Vr("load", !1, !1, this)), (this.readyState == pt.UNSENT || this.readyState == pt.DONE) && this.dispatchEvent(new Vr("loadend", !1, !1, this));
  },
  /*
    Sets the FakeXMLHttpRequest object's response headers and
    places the object into readyState 2
  */
  _setResponseHeaders: function(t) {
    this.responseHeaders = {};
    for (var n in t)
      t.hasOwnProperty(n) && (this.responseHeaders[n] = t[n]);
    this.forceMimeType && (this.responseHeaders["Content-Type"] = this.forceMimeType), this.async ? this._readyStateChange(pt.HEADERS_RECEIVED) : this.readyState = pt.HEADERS_RECEIVED;
  },
  /*
    Sets the FakeXMLHttpRequest object's response body and
    if body text is XML, sets responseXML to parsed document
    object
  */
  _setResponseBody: function(t) {
    z8(this), K8(this), G8(t);
    var n = this.chunkSize || 10, r = 0;
    this.responseText = "", this.response = this.responseText;
    do
      this.async && this._readyStateChange(pt.LOADING), this.responseText += t.substring(r, r + n), this.response = this.responseText, r += n;
    while (r < t.length);
    var o = this.getResponseHeader("Content-Type");
    if (this.responseText && (!o || /(text\/xml)|(application\/xml)|(\+xml)/.test(o)))
      try {
        this.responseXML = B8(this.responseText);
      } catch {
      }
    this.async ? this._readyStateChange(pt.DONE) : this.readyState = pt.DONE;
  },
  /*
      Forces a response on to the FakeXMLHttpRequest object.
  
      This is the public API for faking responses. This function
      takes a number status, headers object, and string body:
  
      ```
      xhr.respond(404, {Content-Type: 'text/plain'}, "Sorry. This object was not found.")
  
      ```
    */
  respond: function(t, n, r) {
    this._setResponseHeaders(n || {}), this.status = typeof t == "number" ? t : 200, this.statusText = F8[this.status], this._setResponseBody(r || "");
  }
};
for (var oh in rh)
  pt.prototype[oh] = rh[oh];
function sh(e) {
  if (e.readyState !== pt.OPENED)
    throw new Error("INVALID_STATE_ERR");
  if (e.sendFlag)
    throw new Error("INVALID_STATE_ERR");
}
function z8(e) {
  if (e.readyState == pt.DONE)
    throw new Error("Request done");
}
function K8(e) {
  if (e.async && e.readyState != pt.HEADERS_RECEIVED)
    throw new Error("No headers received");
}
function G8(e) {
  if (typeof e != "string") {
    var t = new Error("Attempted to respond to fake XMLHttpRequest with " + e + ", which is not a string.");
    throw t.name = "InvalidBodyException", t;
  }
}
var ih = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hg = function(t, n) {
  if (n = n.split(":")[0], t = +t, !t)
    return !1;
  switch (n) {
    case "http":
    case "ws":
      return t !== 80;
    case "https":
    case "wss":
      return t !== 443;
    case "ftp":
      return t !== 21;
    case "gopher":
      return t !== 70;
    case "file":
      return !1;
  }
  return t !== 0;
}, Z8 = Object.prototype.hasOwnProperty, W8;
function ah(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function Y8(e) {
  for (var t = /([^=?&]+)=?([^&]*)/g, n = {}, r; r = t.exec(e); ) {
    var o = ah(r[1]), s = ah(r[2]);
    o === null || s === null || o in n || (n[o] = s);
  }
  return n;
}
function X8(e, t) {
  t = t || "";
  var n = [], r, o;
  typeof t != "string" && (t = "?");
  for (o in e)
    if (Z8.call(e, o)) {
      if (r = e[o], !r && (r === null || r === W8 || isNaN(r)) && (r = ""), o = encodeURIComponent(o), r = encodeURIComponent(r), o === null || r === null)
        continue;
      n.push(o + "=" + r);
    }
  return n.length ? t + n.join("&") : "";
}
var J8 = X8, Q8 = Y8, sc = {
  stringify: J8,
  parse: Q8
}, q8 = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, e9 = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, t9 = /^[a-zA-Z]:/, n9 = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]", r9 = new RegExp("^" + n9 + "+");
function of(e) {
  return (e || "").toString().replace(r9, "");
}
var Zu = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(t, n) {
    return xr(n.protocol) ? t.replace(/\\/g, "/") : t;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d+)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], lh = { hash: 1, query: 1 };
function zg(e) {
  var t;
  typeof window < "u" ? t = window : typeof ih < "u" ? t = ih : typeof self < "u" ? t = self : t = {};
  var n = t.location || {};
  e = e || n;
  var r = {}, o = typeof e, s;
  if (e.protocol === "blob:")
    r = new ar(unescape(e.pathname), {});
  else if (o === "string") {
    r = new ar(e, {});
    for (s in lh)
      delete r[s];
  } else if (o === "object") {
    for (s in e)
      s in lh || (r[s] = e[s]);
    r.slashes === void 0 && (r.slashes = q8.test(e.href));
  }
  return r;
}
function xr(e) {
  return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}
function Kg(e, t) {
  e = of(e), t = t || {};
  var n = e9.exec(e), r = n[1] ? n[1].toLowerCase() : "", o = !!n[2], s = !!n[3], i = 0, a;
  return o ? s ? (a = n[2] + n[3] + n[4], i = n[2].length + n[3].length) : (a = n[2] + n[4], i = n[2].length) : s ? (a = n[3] + n[4], i = n[3].length) : a = n[4], r === "file:" ? i >= 2 && (a = a.slice(2)) : xr(r) ? a = n[4] : r ? o && (a = a.slice(2)) : i >= 2 && xr(t.protocol) && (a = n[4]), {
    protocol: r,
    slashes: o || xr(r),
    slashesCount: i,
    rest: a
  };
}
function o9(e, t) {
  if (e === "")
    return t;
  for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], s = !1, i = 0; r--; )
    n[r] === "." ? n.splice(r, 1) : n[r] === ".." ? (n.splice(r, 1), i++) : i && (r === 0 && (s = !0), n.splice(r, 1), i--);
  return s && n.unshift(""), (o === "." || o === "..") && n.push(""), n.join("/");
}
function ar(e, t, n) {
  if (e = of(e), !(this instanceof ar))
    return new ar(e, t, n);
  var r, o, s, i, a, l, c = Zu.slice(), u = typeof t, d = this, f = 0;
  for (u !== "object" && u !== "string" && (n = t, t = null), n && typeof n != "function" && (n = sc.parse), t = zg(t), o = Kg(e || "", t), r = !o.protocol && !o.slashes, d.slashes = o.slashes || r && t.slashes, d.protocol = o.protocol || t.protocol || "", e = o.rest, (o.protocol === "file:" && (o.slashesCount !== 2 || t9.test(e)) || !o.slashes && (o.protocol || o.slashesCount < 2 || !xr(d.protocol))) && (c[3] = [/(.*)/, "pathname"]); f < c.length; f++) {
    if (i = c[f], typeof i == "function") {
      e = i(e, d);
      continue;
    }
    s = i[0], l = i[1], s !== s ? d[l] = e : typeof s == "string" ? ~(a = e.indexOf(s)) && (typeof i[2] == "number" ? (d[l] = e.slice(0, a), e = e.slice(a + i[2])) : (d[l] = e.slice(a), e = e.slice(0, a))) : (a = s.exec(e)) && (d[l] = a[1], e = e.slice(0, a.index)), d[l] = d[l] || r && i[3] && t[l] || "", i[4] && (d[l] = d[l].toLowerCase());
  }
  n && (d.query = n(d.query)), r && t.slashes && d.pathname.charAt(0) !== "/" && (d.pathname !== "" || t.pathname !== "") && (d.pathname = o9(d.pathname, t.pathname)), d.pathname.charAt(0) !== "/" && xr(d.protocol) && (d.pathname = "/" + d.pathname), Hg(d.port, d.protocol) || (d.host = d.hostname, d.port = ""), d.username = d.password = "", d.auth && (i = d.auth.split(":"), d.username = i[0] || "", d.password = i[1] || ""), d.origin = d.protocol !== "file:" && xr(d.protocol) && d.host ? d.protocol + "//" + d.host : "null", d.href = d.toString();
}
function s9(e, t, n) {
  var r = this;
  switch (e) {
    case "query":
      typeof t == "string" && t.length && (t = (n || sc.parse)(t)), r[e] = t;
      break;
    case "port":
      r[e] = t, Hg(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, r[e] = "");
      break;
    case "hostname":
      r[e] = t, r.port && (t += ":" + r.port), r.host = t;
      break;
    case "host":
      r[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), r.port = t.pop(), r.hostname = t.join(":")) : (r.hostname = t, r.port = "");
      break;
    case "protocol":
      r.protocol = t.toLowerCase(), r.slashes = !n;
      break;
    case "pathname":
    case "hash":
      if (t) {
        var o = e === "pathname" ? "/" : "#";
        r[e] = t.charAt(0) !== o ? o + t : t;
      } else
        r[e] = t;
      break;
    default:
      r[e] = t;
  }
  for (var s = 0; s < Zu.length; s++) {
    var i = Zu[s];
    i[4] && (r[i[1]] = r[i[1]].toLowerCase());
  }
  return r.origin = r.protocol !== "file:" && xr(r.protocol) && r.host ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r;
}
function i9(e) {
  (!e || typeof e != "function") && (e = sc.stringify);
  var t, n = this, r = n.protocol;
  r && r.charAt(r.length - 1) !== ":" && (r += ":");
  var o = r + (n.slashes || xr(n.protocol) ? "//" : "");
  return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.host + n.pathname, t = typeof n.query == "object" ? e(n.query) : n.query, t && (o += t.charAt(0) !== "?" ? "?" + t : t), n.hash && (o += n.hash), o;
}
ar.prototype = { set: s9, toString: i9 };
ar.extractProtocol = Kg;
ar.location = zg;
ar.trimLeft = of;
ar.qs = sc;
var a9 = ar;
function fs(e) {
  var t = new a9(e);
  t.host || (t.href = t.href);
  var n = t.pathname;
  n.charAt(0) !== "/" && (n = "/" + n);
  var r = t.host;
  return (t.port === "80" || t.port === "443") && (r = t.hostname), {
    host: r,
    protocol: t.protocol,
    search: t.query,
    hash: t.hash,
    href: t.href,
    pathname: n,
    fullpath: n + (t.query || "") + (t.hash || "")
  };
}
var sf = (
  /** @class */
  function() {
    function e() {
      this.verbs = {
        GET: new At(),
        PUT: new At(),
        POST: new At(),
        DELETE: new At(),
        PATCH: new At(),
        HEAD: new At(),
        OPTIONS: new At()
      };
    }
    return e;
  }()
), Wu = (
  /** @class */
  function() {
    function e() {
      this.registries = {};
    }
    return e.prototype.forURL = function(t) {
      var n = fs(t).host, r = this.registries[n];
      return r === void 0 && (r = this.registries[n] = new sf(
        /*host*/
      )), r.verbs;
    }, e;
  }()
), Yt = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof Yt < "u" && Yt, un = {
  searchParams: "URLSearchParams" in Yt,
  iterable: "Symbol" in Yt && "iterator" in Symbol,
  blob: "FileReader" in Yt && "Blob" in Yt && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in Yt,
  arrayBuffer: "ArrayBuffer" in Yt
};
function l9(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (un.arrayBuffer)
  var c9 = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], u9 = ArrayBuffer.isView || function(e) {
    return e && c9.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function pa(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function af(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function lf(e) {
  var t = {
    next: function() {
      var n = e.shift();
      return { done: n === void 0, value: n };
    }
  };
  return un.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function $t(e) {
  this.map = {}, e instanceof $t ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
$t.prototype.append = function(e, t) {
  e = pa(e), t = af(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
$t.prototype.delete = function(e) {
  delete this.map[pa(e)];
};
$t.prototype.get = function(e) {
  return e = pa(e), this.has(e) ? this.map[e] : null;
};
$t.prototype.has = function(e) {
  return this.map.hasOwnProperty(pa(e));
};
$t.prototype.set = function(e, t) {
  this.map[pa(e)] = af(t);
};
$t.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
$t.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), lf(e);
};
$t.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), lf(e);
};
$t.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), lf(e);
};
un.iterable && ($t.prototype[Symbol.iterator] = $t.prototype.entries);
function Zc(e) {
  if (e.bodyUsed)
    return Promise.reject(new TypeError("Already read"));
  e.bodyUsed = !0;
}
function Gg(e) {
  return new Promise(function(t, n) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      n(e.error);
    };
  });
}
function d9(e) {
  var t = new FileReader(), n = Gg(t);
  return t.readAsArrayBuffer(e), n;
}
function f9(e) {
  var t = new FileReader(), n = Gg(t);
  return t.readAsText(e), n;
}
function p9(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function ch(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Zg() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : un.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : un.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : un.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : un.arrayBuffer && un.blob && l9(e) ? (this._bodyArrayBuffer = ch(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : un.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || u9(e)) ? this._bodyArrayBuffer = ch(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : un.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, un.blob && (this.blob = function() {
    var e = Zc(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }, this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = Zc(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else
      return this.blob().then(d9);
  }), this.text = function() {
    var e = Zc(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return f9(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(p9(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, un.formData && (this.formData = function() {
    return this.text().then(v9);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var h9 = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function m9(e) {
  var t = e.toUpperCase();
  return h9.indexOf(t) > -1 ? t : e;
}
function po(e, t) {
  if (!(this instanceof po))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof po) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new $t(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new $t(t.headers)), this.method = m9(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var r = /([?&])_=[^&]*/;
    if (r.test(this.url))
      this.url = this.url.replace(r, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var o = /\?/;
      this.url += (o.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
po.prototype.clone = function() {
  return new po(this, { body: this._bodyInit });
};
function v9(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), s = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(s));
    }
  }), t;
}
function g9(e) {
  var t = new $t(), n = e.replace(/\r?\n[\t ]+/g, " ");
  return n.split("\r").map(function(r) {
    return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r;
  }).forEach(function(r) {
    var o = r.split(":"), s = o.shift().trim();
    if (s) {
      var i = o.join(":").trim();
      t.append(s, i);
    }
  }), t;
}
Zg.call(po.prototype);
function Zn(e, t) {
  if (!(this instanceof Zn))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new $t(t.headers), this.url = t.url || "", this._initBody(e);
}
Zg.call(Zn.prototype);
Zn.prototype.clone = function() {
  return new Zn(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new $t(this.headers),
    url: this.url
  });
};
Zn.error = function() {
  var e = new Zn(null, { status: 0, statusText: "" });
  return e.type = "error", e;
};
var y9 = [301, 302, 303, 307, 308];
Zn.redirect = function(e, t) {
  if (y9.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Zn(null, { status: t, headers: { location: e } });
};
var zr = Yt.DOMException;
try {
  new zr();
} catch {
  zr = function(t, n) {
    this.message = t, this.name = n;
    var r = Error(t);
    this.stack = r.stack;
  }, zr.prototype = Object.create(Error.prototype), zr.prototype.constructor = zr;
}
function cf(e, t) {
  return new Promise(function(n, r) {
    var o = new po(e, t);
    if (o.signal && o.signal.aborted)
      return r(new zr("Aborted", "AbortError"));
    var s = new XMLHttpRequest();
    function i() {
      s.abort();
    }
    s.onload = function() {
      var l = {
        status: s.status,
        statusText: s.statusText,
        headers: g9(s.getAllResponseHeaders() || "")
      };
      l.url = "responseURL" in s ? s.responseURL : l.headers.get("X-Request-URL");
      var c = "response" in s ? s.response : s.responseText;
      setTimeout(function() {
        n(new Zn(c, l));
      }, 0);
    }, s.onerror = function() {
      setTimeout(function() {
        r(new TypeError("Network request failed"));
      }, 0);
    }, s.ontimeout = function() {
      setTimeout(function() {
        r(new TypeError("Network request failed"));
      }, 0);
    }, s.onabort = function() {
      setTimeout(function() {
        r(new zr("Aborted", "AbortError"));
      }, 0);
    };
    function a(l) {
      try {
        return l === "" && Yt.location.href ? Yt.location.href : l;
      } catch {
        return l;
      }
    }
    s.open(o.method, a(o.url), !0), o.credentials === "include" ? s.withCredentials = !0 : o.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (un.blob ? s.responseType = "blob" : un.arrayBuffer && o.headers.get("Content-Type") && o.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (s.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof $t) ? Object.getOwnPropertyNames(t.headers).forEach(function(l) {
      s.setRequestHeader(l, af(t.headers[l]));
    }) : o.headers.forEach(function(l, c) {
      s.setRequestHeader(c, l);
    }), o.signal && (o.signal.addEventListener("abort", i), s.onreadystatechange = function() {
      s.readyState === 4 && o.signal.removeEventListener("abort", i);
    }), s.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
cf.polyfill = !0;
Yt.fetch || (Yt.fetch = cf, Yt.Headers = $t, Yt.Request = po, Yt.Response = Zn);
var uh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Headers: $t,
  Request: po,
  Response: Zn,
  get DOMException() {
    return zr;
  },
  fetch: cf
});
function b9(e, t) {
  var n = ["error", "timeout", "abort", "readystatechange"], r = [], o = [
    "readyState",
    "responseText",
    "response",
    "responseXML",
    "responseURL",
    "status",
    "statusText"
  ], s = e._passthroughRequest = new t();
  s.open(e.method, e.url, e.async, e.username, e.password), e.responseType === "arraybuffer" && (o = ["readyState", "response", "status", "statusText"], s.responseType = e.responseType), "onload" in s && n.push("load"), e.async && e.responseType !== "arraybuffer" && (n.push("progress"), r.push("progress"));
  function i(f, p, h) {
    for (var v = 0; v < f.length; v++) {
      var m = f[v];
      m in p && (h[m] = p[m]);
    }
  }
  function a(f, p, h) {
    f.dispatchEvent(h), f["on" + p] && f["on" + p](h);
  }
  function l(f) {
    s["on" + f] = function(p) {
      i(o, s, e), a(e, f, p);
    };
  }
  function c(f) {
    s.upload && e.upload && e.upload["on" + f] && (s.upload["on" + f] = function(p) {
      a(e.upload, f, p);
    });
  }
  var u;
  for (u = 0; u < n.length; u++)
    l(n[u]);
  for (u = 0; u < r.length; u++)
    c(r[u]);
  e.async && (s.timeout = e.timeout, s.withCredentials = e.withCredentials), !s.timeout && s.timeout !== 0 && (s.timeout = 0);
  for (var d in e.requestHeaders)
    s.setRequestHeader(d, e.requestHeaders[d]);
  return s;
}
function x9(e) {
  function t() {
    pt.call(this);
  }
  return t.prototype = Object.create(pt.prototype), t.prototype.constructor = t, t.prototype.send = function() {
    if (this.sendArguments = arguments, !e.pretender.running)
      throw new Error("You shut down a Pretender instance while there was a pending request. That request just tried to complete. Check to see if you accidentally shut down a pretender earlier than you intended to");
    pt.prototype.send.apply(this, arguments), e.pretender.checkPassthrough(this) ? this.passthrough() : e.pretender.handleRequest(this);
  }, t.prototype.passthrough = function() {
    if (!this.sendArguments)
      throw new Error("You attempted to passthrough a FakeRequest that was never sent. Call `.send()` on the original request first");
    var r = b9(this, e.pretender._nativeXMLHttpRequest);
    return r.send.apply(r, this.sendArguments), r;
  }, t.prototype._passthroughCheck = function(n, r) {
    return this._passthroughRequest ? this._passthroughRequest[n].apply(this._passthroughRequest, r) : pt.prototype[n].apply(this, r);
  }, t.prototype.abort = function() {
    return this._passthroughCheck("abort", arguments);
  }, t.prototype.getResponseHeader = function() {
    return this._passthroughCheck("getResponseHeader", arguments);
  }, t.prototype.getAllResponseHeaders = function() {
    return this._passthroughCheck("getAllResponseHeaders", arguments);
  }, e.pretender._nativeXMLHttpRequest.prototype._passthroughCheck && console.warn("You created a second Pretender instance while there was already one running. Running two Pretender servers at once will lead to unexpected results and will be removed entirely in a future major version.Please call .shutdown() on your instances when you no longer need them to respond."), t;
}
var Wc = (
  /** @class */
  function() {
    function e() {
      this.length = 0;
    }
    return e.prototype.push = function() {
      return 0;
    }, e;
  }()
);
function Wg(e, t, n) {
  var r = 0, o = e.requestBody;
  o && (o instanceof FormData ? o.forEach(function(s) {
    s instanceof File ? r += s.size : r += s.length;
  }) : r = o.byteLength || o.size || o.length || 0), setTimeout(function() {
    if (!e.aborted && !e.status) {
      var s = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), i = n <= 0 ? 0 : s / n * r;
      e.upload._progress(!0, i, r), e._progress(!0, i, r), Wg(e, t, n);
    } else
      e.status && (e.upload._progress(!0, r, r), e._progress(!0, r, r));
  }, 50);
}
function E9(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
var dh = {};
function xo(e) {
  return function(t, n, r) {
    return this.register(e, t, n, r);
  };
}
var ic = (
  /** @class */
  function() {
    function e() {
      var t = this;
      this.hosts = new Wu(), this.handlers = [], this.get = xo("GET"), this.post = xo("POST"), this.put = xo("PUT"), this.delete = xo("DELETE"), this.patch = xo("PATCH"), this.head = xo("HEAD"), this.options = xo("OPTIONS"), this.passthrough = dh;
      var n = arguments[arguments.length - 1], r = typeof n == "object" ? n : null, o = r && r.trackRequests === !1;
      this.handledRequests = o ? new Wc() : [], this.passthroughRequests = o ? new Wc() : [], this.unhandledRequests = o ? new Wc() : [], this.requestReferences = [], this.forcePassthrough = r && r.forcePassthrough === !0, this.disableUnhandled = r && r.disableUnhandled === !0, this._nativeXMLHttpRequest = self.XMLHttpRequest, this.running = !1;
      var s = { pretender: this };
      this.ctx = s, self.XMLHttpRequest = x9(s), this._fetchProps = uh ? ["fetch", "Headers", "Request", "Response"] : [], this._fetchProps.forEach(function(l) {
        t["_native" + l] = self[l], self[l] = uh[l];
      }, this), this.running = !0;
      for (var i = r ? arguments.length - 1 : arguments.length, a = 0; a < i; a++)
        this.map(arguments[a]);
    }
    return e.prototype.map = function(t) {
      t.call(this);
    }, e.prototype.register = function(t, n, r, o) {
      if (!r)
        throw new Error("The function you tried passing to Pretender to handle " + t + " " + n + " is undefined or missing.");
      var s = r;
      s.numberOfCalls = 0, s.async = o, this.handlers.push(s);
      var i = this.hosts.forURL(n)[t];
      return i.add([
        {
          path: fs(n).fullpath,
          handler: s
        }
      ]), s;
    }, e.prototype.checkPassthrough = function(t) {
      var n = t.method.toUpperCase(), r = fs(t.url).fullpath, o = this.hosts.forURL(t.url)[n].recognize(r), s = o && o[0];
      return s && s.handler === dh || this.forcePassthrough ? (this.passthroughRequests.push(t), this.passthroughRequest(n, r, t), !0) : !1;
    }, e.prototype.handleRequest = function(t) {
      var n = t.method.toUpperCase(), r = t.url, o = this._handlerFor(n, r, t);
      if (o) {
        o.handler.numberOfCalls++;
        var s = o.handler.async;
        this.handledRequests.push(t);
        var i = this, a = function(c) {
          if (!E9(c)) {
            var u = "Remember to `return [status, headers, body];` in your route handler.";
            throw new Error("Nothing returned by handler for " + r + ". " + u);
          }
          var d = c[0], f = i.prepareHeaders(c[1]), p = i.prepareBody(c[2], f);
          i.handleResponse(t, s, function() {
            t.respond(d, f, p), i.handledRequest(n, r, t);
          });
        };
        try {
          var l = o.handler(t);
          l && typeof l.then == "function" ? l.then(function(c) {
            a(c);
          }) : a(l);
        } catch (c) {
          this.erroredRequest(n, r, t, c), this.resolve(t);
        }
      } else
        this.disableUnhandled || (this.unhandledRequests.push(t), this.unhandledRequest(n, r, t));
    }, e.prototype.handleResponse = function(t, n, r) {
      var o = typeof n == "function" ? n() : n;
      if (o = typeof o == "boolean" || typeof o == "number" ? o : 0, o === !1)
        r();
      else {
        var s = this;
        s.requestReferences.push({
          request: t,
          callback: r
        }), o !== !0 && (Wg(t, /* @__PURE__ */ new Date(), o), setTimeout(function() {
          s.resolve(t);
        }, o));
      }
    }, e.prototype.resolve = function(t) {
      for (var n = 0, r = this.requestReferences.length; n < r; n++) {
        var o = this.requestReferences[n];
        if (o.request === t) {
          o.callback(), this.requestReferences.splice(n, 1);
          break;
        }
      }
    }, e.prototype.requiresManualResolution = function(t, n) {
      var r = this._handlerFor(t.toUpperCase(), n, {});
      if (!r)
        return !1;
      var o = r.handler.async;
      return typeof o == "function" ? o() === !0 : o === !0;
    }, e.prototype.prepareBody = function(t, n) {
      return t;
    }, e.prototype.prepareHeaders = function(t) {
      return t;
    }, e.prototype.handledRequest = function(t, n, r) {
    }, e.prototype.passthroughRequest = function(t, n, r) {
    }, e.prototype.unhandledRequest = function(t, n, r) {
      throw new Error("Pretender intercepted " + t + " " + n + " but no handler was defined for this type of request");
    }, e.prototype.erroredRequest = function(t, n, r, o) {
      throw o.message = "Pretender intercepted " + t + " " + n + " but encountered an error: " + o.message, o;
    }, e.prototype.shutdown = function() {
      var t = this;
      self.XMLHttpRequest = this._nativeXMLHttpRequest, this._fetchProps.forEach(function(n) {
        self[n] = t["_native" + n];
      }, this), this.ctx.pretender = void 0, this.running = !1;
    }, e.prototype._handlerFor = function(t, n, r) {
      var o = this.hosts.forURL(n)[t], s = o.recognize(fs(n).fullpath), i = s ? s[0] : null;
      return i && (r.params = i.params, r.queryParams = s.queryParams), i;
    }, e.parseURL = fs, e.Hosts = Wu, e.Registry = sf, e;
  }()
);
ic.parseURL = fs;
ic.Hosts = Wu;
ic.Registry = sf;
const w9 = Av.filter(
  (e) => !!e && !!e[7].value
), fh = Md.transform((e) => e.reduce(
  (t, n) => ({
    ...t,
    [n.semantic]: n.value
  }),
  {}
)).transform(
  (e) => ({
    type: "Feature",
    geometry: {
      coordinates: e.coordinates.split(", "),
      type: "Point"
    },
    properties: e
  })
).array().safeParse(w9), S9 = async () => {
  if (!fh.success)
    return [
      404,
      { "Content-Type": "text/html" },
      "No geodata"
    ];
  const e = R5("KharkivAppeals", fh.data);
  return [
    200,
    { "Content-Type": "application/json" },
    JSON.stringify(e)
  ];
}, C9 = () => [
  200,
  { "Content-Type": "application/json" },
  JSON.stringify({
    // General
    total: 5609,
    complete: 2412,
    todo: 5609 - 2412,
    // Status
    notStarted: 1142,
    verified: 597,
    inProgress: 79,
    // Category
    food: 2216,
    medicine: 3980,
    other: 99,
    // Mark
    curated: 99,
    eligible: 265,
    selfSufficient: 265,
    blackList: 21,
    verification: 48
  })
], O9 = async () => {
  const e = await import("./kharkivAndRegion-a2d98a5d.js");
  return [
    200,
    { "Content-Type": "application/json" },
    JSON.stringify(e)
  ];
}, T9 = () => {
  const e = new ic();
  return e.get(Ba.appealsStatsURL, C9), e.get(
    Ba.kharkivDistrictsGeodataURL,
    O9
  ), e.get(
    Ba.kharkivAppealsGeodataURL,
    S9
  ), e;
};
T9();
hb();
const N9 = sb(), A9 = qm(g6).use(N9).use(_8).component("v-icon", L2).mount("#app");
export {
  Ba as a,
  Ov as c,
  _9 as d,
  Tv as g,
  A9 as m,
  W as r,
  ro as t,
  u6 as u
};
