import { defineComponent, ref, h, computed, provide, watchEffect, Fragment, onMounted, onUnmounted, reactive, inject } from 'vue';
import { B as f$1, C as a, D as o$1, V as V$1, E as w$2, F as t$1, G as b$2, R as R$1, H as o$2, P as P$2, M, I as u$4, J as t } from '../server.mjs';

let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f$1, { as: "button", type: "button", features: a.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a2 = 50;
    function r() {
      var u2;
      if (a2-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
let O = Symbol("TabsContext");
function E(a2) {
  let u2 = inject(O, null);
  if (u2 === null) {
    let i = new Error(`<${a2} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, E), i;
  }
  return u2;
}
let le = defineComponent({ name: "TabGroup", emits: { change: (a2) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a2, { slots: u2, attrs: i, emit: f2 }) {
  let e = ref(null), o$12 = ref([]), n = ref([]), c = computed(() => a2.selectedIndex !== null), p = computed(() => c.value ? a2.selectedIndex : e.value), x = { selectedIndex: e, orientation: computed(() => a2.vertical ? "vertical" : "horizontal"), activation: computed(() => a2.manual ? "manual" : "auto"), tabs: o$12, panels: n, setSelectedIndex(t2) {
    p.value !== t2 && f2("change", t2), c.value || (e.value = t2);
  }, registerTab(t2) {
    o$12.value.includes(t2) || o$12.value.push(t2);
  }, unregisterTab(t2) {
    let r = o$12.value.indexOf(t2);
    r !== -1 && o$12.value.splice(r, 1);
  }, registerPanel(t2) {
    n.value.includes(t2) || n.value.push(t2);
  }, unregisterPanel(t2) {
    let r = n.value.indexOf(t2);
    r !== -1 && n.value.splice(r, 1);
  } };
  return provide(O, x), watchEffect(() => {
    var R2;
    if (x.tabs.value.length <= 0 || a2.selectedIndex === null && e.value !== null)
      return;
    let t2 = x.tabs.value.map((T) => o$1(T)).filter(Boolean), r = t2.filter((T) => !T.hasAttribute("disabled")), s = (R2 = a2.selectedIndex) != null ? R2 : a2.defaultIndex;
    if (s < 0)
      e.value = t2.indexOf(r[0]);
    else if (s > x.tabs.value.length)
      e.value = t2.indexOf(r[r.length - 1]);
    else {
      let T = t2.slice(0, s), d2 = [...t2.slice(s), ...T].find((g) => r.includes(g));
      if (!d2)
        return;
      e.value = t2.indexOf(d2);
    }
  }), () => {
    let t2 = { selectedIndex: e.value };
    return h(Fragment, [o$12.value.length <= 0 && h(d, { onFocus: () => {
      for (let r of o$12.value) {
        let s = o$1(r);
        if ((s == null ? void 0 : s.tabIndex) === 0)
          return s.focus(), true;
      }
      return false;
    } }), V$1({ theirProps: { ...i, ...w$2(a2, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: u2, attrs: i, name: "TabGroup" })]);
  };
} }), ae = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: u2, slots: i }) {
  let f2 = E("TabList");
  return () => {
    let e = { selectedIndex: f2.selectedIndex.value }, o2 = { role: "tablist", "aria-orientation": f2.orientation.value };
    return V$1({ ourProps: o2, theirProps: a2, slot: e, attrs: u2, slots: i, name: "TabList" });
  };
} }), ne = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false } }, setup(a2, { attrs: u$1, slots: i, expose: f2 }) {
  let e = E("Tab"), o$2$1 = `headlessui-tabs-tab-${t$1()}`, n = ref(null);
  f2({ el: n, $el: n }), onMounted(() => e.registerTab(n)), onUnmounted(() => e.unregisterTab(n));
  let c = computed(() => e.tabs.value.indexOf(n)), p = computed(() => c.value === e.selectedIndex.value);
  function x(l) {
    let d2 = e.tabs.value.map((g) => o$1(g)).filter(Boolean);
    if (l.key === o$2.Space || l.key === o$2.Enter) {
      l.preventDefault(), l.stopPropagation(), e.setSelectedIndex(c.value);
      return;
    }
    switch (l.key) {
      case o$2.Home:
      case o$2.PageUp:
        return l.preventDefault(), l.stopPropagation(), P$2(d2, M.First);
      case o$2.End:
      case o$2.PageDown:
        return l.preventDefault(), l.stopPropagation(), P$2(d2, M.Last);
    }
    if (u$4(e.orientation.value, { vertical() {
      if (l.key === o$2.ArrowUp)
        return P$2(d2, M.Previous | M.WrapAround);
      if (l.key === o$2.ArrowDown)
        return P$2(d2, M.Next | M.WrapAround);
    }, horizontal() {
      if (l.key === o$2.ArrowLeft)
        return P$2(d2, M.Previous | M.WrapAround);
      if (l.key === o$2.ArrowRight)
        return P$2(d2, M.Next | M.WrapAround);
    } }))
      return l.preventDefault();
  }
  function t$2() {
    var l;
    (l = o$1(n)) == null || l.focus();
  }
  let r = ref(false);
  function s() {
    var l;
    r.value || (r.value = true, !a2.disabled && ((l = o$1(n)) == null || l.focus(), e.setSelectedIndex(c.value), t(() => {
      r.value = false;
    })));
  }
  function R2(l) {
    l.preventDefault();
  }
  let T = b$2(computed(() => ({ as: a2.as, type: u$1.type })), n);
  return () => {
    var g;
    let l = { selected: p.value }, d2 = { ref: n, onKeydown: x, onFocus: e.activation.value === "manual" ? t$2 : s, onMousedown: R2, onClick: s, id: o$2$1, role: "tab", type: T.value, "aria-controls": (g = o$1(e.panels.value[c.value])) == null ? void 0 : g.id, "aria-selected": p.value, tabIndex: p.value ? 0 : -1, disabled: a2.disabled ? true : void 0 };
    return V$1({ ourProps: d2, theirProps: a2, slot: l, attrs: u$1, slots: i, name: "Tab" });
  };
} }), re = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { slots: u2, attrs: i }) {
  let f2 = E("TabPanels");
  return () => {
    let e = { selectedIndex: f2.selectedIndex.value };
    return V$1({ theirProps: a2, ourProps: {}, slot: e, attrs: i, slots: u2, name: "TabPanels" });
  };
} }), ue = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(a2, { attrs: u2, slots: i, expose: f$1$1 }) {
  let e = E("TabPanel"), o$12 = `headlessui-tabs-panel-${t$1()}`, n = ref(null);
  f$1$1({ el: n, $el: n }), onMounted(() => e.registerPanel(n)), onUnmounted(() => e.unregisterPanel(n));
  let c = computed(() => e.panels.value.indexOf(n)), p = computed(() => c.value === e.selectedIndex.value);
  return () => {
    var r;
    let x = { selected: p.value }, t2 = { ref: n, id: o$12, role: "tabpanel", "aria-labelledby": (r = o$1(e.tabs.value[c.value])) == null ? void 0 : r.id, tabIndex: p.value ? 0 : -1 };
    return !p.value && a2.unmount && !a2.static ? h(f$1, { as: "span", ...t2 }) : V$1({ ourProps: t2, theirProps: a2, slot: x, attrs: u2, slots: i, features: R$1.Static | R$1.RenderStrategy, visible: p.value, name: "TabPanel" });
  };
} });
var Size = /* @__PURE__ */ ((Size2) => {
  Size2["SMALL"] = "sm";
  Size2["MEDIUM"] = "md";
  Size2["LARGE"] = "lg";
  Size2["EXTRA_LARGE"] = "xl";
  return Size2;
})(Size || {});
const defaultScreenConfig = {
  ["sm"]: 576,
  ["md"]: 768,
  ["lg"]: 992,
  ["xl"]: 1200
};
const useScreen = () => {
  const screenSize = reactive({
    width: 0,
    height: 0
  });
  const current = ref("sm");
  const getSize = (width) => {
    if (width === void 0)
      width = screenSize.width;
    const {
      ["sm"]: sm,
      ["md"]: md,
      ["lg"]: lg,
      ["xl"]: xl
    } = defaultScreenConfig;
    if (width < Number(sm))
      return "sm";
    if (width < Number(md))
      return "md";
    if (width < Number(lg))
      return "lg";
    if (width < Number(xl))
      return "xl";
    return "xl";
  };
  const higherThan = (size) => {
    const {
      ["sm"]: sm,
      ["md"]: md,
      ["lg"]: lg,
      ["xl"]: xl
    } = defaultScreenConfig;
    const width = screenSize.width;
    if (size === "sm")
      return width >= Number(sm);
    if (size === "md")
      return width >= Number(md);
    if (size === "lg")
      return width >= Number(lg);
    if (size === "xl")
      return width >= Number(xl);
    return false;
  };
  onUnmounted(() => {
    return;
  });
  return {
    getSize,
    screenSize,
    current,
    higherThan
  };
};

export { Size as S, ae as a, ue as b, le as l, ne as n, re as r, useScreen as u };
//# sourceMappingURL=useScreen.7505e0ed.mjs.map
