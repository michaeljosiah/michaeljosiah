/* @ds-bundle: {"format":4,"namespace":"MichaelJosiahDesignSystem_bafdc6","components":[{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"ContactMethod","sourcePath":"components/cards/ContactMethod.jsx"},{"name":"FeaturedArticleCard","sourcePath":"components/cards/FeaturedArticleCard.jsx"},{"name":"Panel","sourcePath":"components/cards/Panel.jsx"},{"name":"PillarCard","sourcePath":"components/cards/PillarCard.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/cards/QuoteBlock.jsx"},{"name":"StatTriad","sourcePath":"components/cards/StatTriad.jsx"},{"name":"ValueCard","sourcePath":"components/cards/ValueCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DisplayHeading","sourcePath":"components/core/DisplayHeading.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GoldRule","sourcePath":"components/core/GoldRule.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"MetaLine","sourcePath":"components/core/MetaLine.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SubscribePanel","sourcePath":"components/forms/SubscribePanel.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"CategorySidebar","sourcePath":"components/navigation/CategorySidebar.jsx"},{"name":"FilterTabs","sourcePath":"components/navigation/FilterTabs.jsx"},{"name":"SocialRail","sourcePath":"components/navigation/SocialRail.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"CTABanner","sourcePath":"components/sections/CTABanner.jsx"},{"name":"CapabilityStrip","sourcePath":"components/sections/CapabilityStrip.jsx"},{"name":"PageHero","sourcePath":"components/sections/PageHero.jsx"},{"name":"RoleList","sourcePath":"components/sections/RoleList.jsx"},{"name":"SectionHeader","sourcePath":"components/sections/SectionHeader.jsx"}],"sourceHashes":{"components/cards/ArticleCard.jsx":"3fbe0bdf99bb","components/cards/ContactMethod.jsx":"7015d9bb5d0c","components/cards/FeaturedArticleCard.jsx":"f7d76f75e1ae","components/cards/Panel.jsx":"143eb7d26f5f","components/cards/PillarCard.jsx":"579cdbffabeb","components/cards/ProjectCard.jsx":"7b7856516c39","components/cards/QuoteBlock.jsx":"b47034f982c5","components/cards/StatTriad.jsx":"0da8dab34acc","components/cards/ValueCard.jsx":"909da86692b6","components/core/Button.jsx":"5cca2af26012","components/core/DisplayHeading.jsx":"992b2c7eb760","components/core/Eyebrow.jsx":"7cc77b7dd9ad","components/core/GoldRule.jsx":"dab39ed9118e","components/core/Icon.jsx":"8df9be2f70d0","components/core/MetaLine.jsx":"556be6b510eb","components/core/Tag.jsx":"64ce64cb8432","components/forms/SearchInput.jsx":"bdfd3abb2097","components/forms/Select.jsx":"6cf606867f7f","components/forms/SubscribePanel.jsx":"fe7027f291b6","components/forms/TextField.jsx":"919b7d15682d","components/navigation/CategorySidebar.jsx":"cb9dd5522eab","components/navigation/FilterTabs.jsx":"d794af8baf74","components/navigation/SocialRail.jsx":"3c59a0e1d2e9","components/navigation/TopNav.jsx":"f8f217d62f02","components/sections/CTABanner.jsx":"c35092f0ee29","components/sections/CapabilityStrip.jsx":"e2ccba7084a0","components/sections/PageHero.jsx":"22f1c5099a60","components/sections/RoleList.jsx":"0ab7c50eff2b","components/sections/SectionHeader.jsx":"820ea7fee4cc","ui_kits/website/ContactScreen.jsx":"62d9d6e409eb","ui_kits/website/HomeScreen.jsx":"118ee358fd2a","ui_kits/website/JournalScreen.jsx":"3e6208ea101a","ui_kits/website/ProjectsScreen.jsx":"8c040aa6c7e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MichaelJosiahDesignSystem_bafdc6 = window.MichaelJosiahDesignSystem_bafdc6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Panel({
  children,
  padded = true,
  hoverable = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: hoverable && h ? 'var(--surface-card-hover)' : 'var(--surface-card)',
      border: '1px solid ' + (hoverable && h ? 'var(--line-gold)' : 'var(--line-hairline)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: hoverable && h ? 'var(--shadow-lift)' : 'var(--shadow-card)',
      padding: padded ? 'var(--pad-card)' : 0,
      transition: 'background var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Panel.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteBlock({
  quote,
  attribution,
  image,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      gap: '16px',
      padding: 'var(--pad-panel)',
      background: image ? 'url(' + image + ') right center/cover' : 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'Georgia,serif',
      fontSize: 38,
      lineHeight: .85,
      color: 'var(--gold-400)',
      flex: 'none'
    }
  }, "\u275D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-quote)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text-heading)',
      maxWidth: 'var(--max-prose)'
    }
  }, quote), attribution && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "\u2014 ", attribution)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatTriad.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTriad({
  stats = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      ...style
    }
  }), stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '0 var(--sp-7)',
      paddingLeft: i === 0 ? 0 : 'var(--sp-7)',
      borderLeft: i === 0 ? 'none' : '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h1)/1 var(--font-display)',
      color: 'var(--gold-400)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatTriad });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatTriad.jsx", error: String((e && e.message) || e) }); }

// components/core/DisplayHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  1: 'var(--fs-display-1)',
  2: 'var(--fs-display-2)',
  3: 'var(--fs-display-3)'
};
function DisplayHeading({
  lines,
  level = 2,
  as = 'h1',
  color = 'var(--text-display)',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      font: 'var(--fw-bold) ' + SZ[level] + '/var(--lh-display) var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      color,
      margin: 0,
      ...style
    }
  }), (Array.isArray(lines) ? lines : [lines]).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)));
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  color = 'var(--text-accent)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1.2 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GoldRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GoldRule({
  width = 40,
  thickness = 3,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      height: thickness,
      background: 'var(--rule-accent)',
      flex: 'none',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { GoldRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GoldRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.436.0/icons/';
const CACHE = new Map();
function Icon({
  name,
  size = 20,
  strokeColor,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(() => CACHE.get(name) || null);
  React.useEffect(() => {
    let live = true;
    if (CACHE.has(name)) {
      setSvg(CACHE.get(name));
      return;
    }
    fetch(BASE + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      const cleaned = t.replace(/<\?xml[^>]*>/, '').replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"');
      CACHE.set(name, cleaned);
      if (live) setSvg(cleaned);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      width: size,
      height: size,
      color: strokeColor || 'currentColor',
      ...style
    },
    dangerouslySetInnerHTML: svg ? {
      __html: svg
    } : undefined
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContactMethod.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactMethod({
  icon,
  label,
  value,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--line-gold)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactMethod });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContactMethod.jsx", error: String((e && e.message) || e) }); }

// components/cards/ValueCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ValueCard({
  icon,
  title,
  lines = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '12px',
      padding: 'var(--sp-6) var(--sp-4)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    style: {
      color: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))));
}
Object.assign(__ds_scope, { ValueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ValueCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: '8px 16px',
  md: '12px 22px',
  lg: '14px 26px'
};
const FS = {
  sm: 'var(--fs-micro)',
  md: 'var(--fs-label)',
  lg: 'var(--fs-body-sm)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  showIcon = true,
  disabled,
  href,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    font: 'var(--fw-semibold) ' + FS[size] + '/1 var(--font-display)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    padding: PAD[size],
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',
    opacity: disabled ? .4 : 1
  };
  const skin = variant === 'primary' ? {
    background: h && !disabled ? 'var(--action-primary-hover)' : 'var(--action-primary)',
    color: 'var(--text-on-gold)',
    boxShadow: h && !disabled ? 'var(--glow-gold)' : 'none'
  } : variant === 'secondary' ? {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: h && !disabled ? 'var(--action-ghost-border-hover)' : 'var(--line-strong)'
  } : variant === 'outline-gold' ? {
    background: h && !disabled ? 'var(--surface-gold-wash)' : 'transparent',
    color: 'var(--text-accent)',
    borderColor: h && !disabled ? 'var(--line-gold-strong)' : 'var(--line-gold)'
  } : {
    background: 'transparent',
    color: 'var(--text-accent)',
    padding: 0,
    borderRadius: 0
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), children, showIcon && icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 13 : 15,
    style: {
      transform: h && !disabled ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/PillarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillarCard({
  image,
  wordmark,
  sub,
  eyebrow,
  eyebrowTone = 'var(--text-accent)',
  title,
  blurb,
  cta,
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Panel, _extends({
    hoverable: true,
    padded: false,
    onClick: onOpen,
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: image ? 'url(' + image + ') center/cover' : 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-card)'
    }
  }), wordmark && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--pad-card)',
      top: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-light) 30px/1 var(--font-display)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--text-display)'
    }
  }, wordmark), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      font: 'var(--fw-light) var(--fs-body-sm)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: eyebrowTone
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-h1)/var(--lh-tight) var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, blurb), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    size: "sm",
    style: {
      color: eyebrowTone,
      marginTop: '4px'
    }
  }, cta)));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/MetaLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaLine({
  date,
  category,
  categoryTone = 'story',
  readTime,
  style,
  ...rest
}) {
  const cap = {
    font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--text-muted)',
      ...cap,
      ...style
    }
  }), date && /*#__PURE__*/React.createElement("span", null, date), date && category && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .55
    }
  }, "\u2022"), category && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tag-' + categoryTone + ')'
    }
  }, category), readTime && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      marginLeft: date || category ? 'auto' : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 12
  }), readTime));
}
Object.assign(__ds_scope, { MetaLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetaLine.jsx", error: String((e && e.message) || e) }); }

// components/cards/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArticleCard({
  image,
  date,
  category,
  categoryTone = 'story',
  title,
  blurb,
  readTime,
  layout = 'horizontal',
  onOpen,
  style,
  ...rest
}) {
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaLine, {
    date: date,
    category: category,
    categoryTone: categoryTone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-h3)/var(--lh-tight) var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, title), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, blurb), readTime && /*#__PURE__*/React.createElement(__ds_scope.MetaLine, {
    readTime: readTime,
    style: {
      marginTop: 'auto',
      paddingTop: '8px'
    }
  }));
  return /*#__PURE__*/React.createElement(__ds_scope.Panel, _extends({
    hoverable: true,
    padded: false,
    onClick: onOpen,
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: layout === 'horizontal' ? 'row' : 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: layout === 'horizontal' ? 128 : 'auto',
      height: layout === 'horizontal' ? 'auto' : 104,
      minHeight: layout === 'horizontal' ? 104 : 0,
      background: image ? 'url(' + image + ') center/cover' : 'var(--surface-raised)'
    }
  }), body);
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  story: 'var(--tag-story)',
  ai: 'var(--tag-ai)',
  engineering: 'var(--tag-engineering)',
  experiment: 'var(--tag-experiment)',
  life: 'var(--tag-life)'
};
function Tag({
  children,
  tone = 'story',
  filled = false,
  style,
  ...rest
}) {
  const c = TONES[tone] || tone;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-block',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: filled ? 'var(--text-on-gold)' : c,
      background: filled ? c : 'transparent',
      padding: filled ? '5px 9px' : 0,
      borderRadius: filled ? 'var(--radius-xs)' : 0,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeaturedArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeaturedArticleCard({
  image,
  badge = 'Featured',
  date,
  category,
  categoryTone = 'story',
  title,
  blurb,
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Panel, _extends({
    hoverable: true,
    padded: false,
    onClick: onOpen,
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 190,
      background: image ? 'url(' + image + ') center/cover' : 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-card)'
    }
  }), badge && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "story",
    filled: true,
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaLine, {
    date: date,
    category: category,
    categoryTone: categoryTone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-h1)/var(--lh-tight) var(--font-body)',
      color: 'var(--text-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, blurb), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    size: "sm",
    style: {
      marginTop: '4px'
    }
  }, "Read article")));
}
Object.assign(__ds_scope, { FeaturedArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeaturedArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  image,
  category,
  categoryTone = 'story',
  title,
  blurb,
  markIcon,
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Panel, _extends({
    hoverable: true,
    padded: false,
    onClick: onOpen,
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 130,
      background: image ? 'url(' + image + ') center/cover' : 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-card)'
    }
  }), markIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: markIcon,
    size: 24,
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      color: 'var(--tag-' + categoryTone + ')',
      opacity: .9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: categoryTone
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h2)/var(--lh-tight) var(--font-display)',
      letterSpacing: '.01em',
      textTransform: 'uppercase',
      color: 'var(--text-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, blurb), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    size: "sm",
    style: {
      marginTop: '4px'
    }
  }, "View project")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  placeholder = 'Search…',
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '9px 12px',
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-sm)',
      minWidth: 200,
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--text-heading)',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 14,
    style: {
      color: 'var(--text-faint)'
    }
  }));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  value,
  options = [],
  onChange,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, value, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      right: 0,
      zIndex: 20,
      minWidth: 170,
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-panel)',
      padding: '4px 0'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => {
      onChange && onChange(o);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '9px 14px',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: o === value ? 'var(--text-accent)' : 'var(--text-body)'
    }
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SubscribePanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SubscribePanel({
  title = 'Stay in the loop',
  blurb = 'Get new articles and insights delivered to your inbox.',
  placeholder = 'Your email address',
  onSubscribe,
  style,
  ...rest
}) {
  const [v, setV] = React.useState('');
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      padding: 'var(--pad-panel)',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail-open",
    size: 38,
    style: {
      color: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-h2)/var(--lh-tight) var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: '12px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: placeholder,
    style: {
      width: 180,
      padding: '11px 13px',
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      color: 'var(--text-heading)',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: () => onSubscribe && onSubscribe(v)
  }, "Subscribe")));
}
Object.assign(__ds_scope, { SubscribePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SubscribePanel.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  placeholder,
  icon,
  value,
  onChange,
  type = 'text',
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  const input = {
    width: '100%',
    background: 'transparent',
    border: 0,
    outline: 'none',
    color: 'var(--text-heading)',
    font: 'var(--type-body)',
    resize: 'none'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: '12px',
      padding: '13px 14px',
      background: 'var(--surface-inset)',
      border: '1px solid ' + (foc ? 'var(--line-gold)' : 'var(--line-soft)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), multiline ? /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: input
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: input
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    style: {
      color: foc ? 'var(--text-accent)' : 'var(--text-faint)'
    }
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategorySidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategorySidebar({
  items = [],
  active,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), items.map(it => {
    const on = it.label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      onClick: () => onSelect && onSelect(it.label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        padding: '13px 16px',
        background: on ? 'var(--surface-gold-wash)' : 'transparent',
        border: 0,
        borderLeft: '2px solid ' + (on ? 'var(--line-gold-strong)' : 'transparent'),
        color: on ? 'var(--text-accent)' : 'var(--text-body)',
        font: 'var(--fw-medium) var(--fs-label)/1 var(--font-display)',
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        transition: 'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", null, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: on ? 'var(--text-accent)' : 'var(--text-faint)'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { CategorySidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategorySidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterTabs({
  items = [],
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      ...style
    }
  }), items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onChange && onChange(it),
      style: {
        background: 'none',
        border: 0,
        padding: '8px 0',
        cursor: 'pointer',
        font: 'var(--fw-medium) var(--fs-label)/1 var(--font-display)',
        letterSpacing: 'var(--ls-nav)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-accent)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--line-gold-strong)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SocialRail({
  links = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: 'var(--rail-width)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-6)',
      borderRight: '1px solid var(--line-hairline)',
      background: 'var(--surface-shell)',
      ...style
    }
  }), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.icon,
    href: l.href || '#',
    "aria-label": l.label,
    style: {
      color: 'var(--text-muted)',
      display: 'grid',
      placeItems: 'center',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-accent)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.icon,
    size: 17
  }))));
}
Object.assign(__ds_scope, { SocialRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialRail.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopNav({
  items = [],
  active,
  onNavigate,
  logoSrc,
  brand = 'Michael Josiah',
  onToggleTheme,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-7)',
      height: 'var(--nav-height)',
      padding: '0 var(--pad-shell)',
      background: 'var(--surface-shell)',
      borderBottom: '1px solid var(--line-hairline)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      textDecoration: 'none'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 30
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-h3)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-7)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      style: {
        font: 'var(--fw-medium) var(--fs-label)/1 var(--font-display)',
        letterSpacing: 'var(--ls-nav)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-accent)' : 'var(--text-body)',
        textDecoration: 'none',
        padding: '6px 0',
        borderBottom: '2px solid ' + (on ? 'var(--line-gold-strong)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-hairline)',
      color: 'var(--text-accent)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sun",
    size: 16
  })));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/sections/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABanner({
  icon = 'compass',
  title,
  blurb,
  cta,
  onAction,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      padding: 'var(--pad-panel)',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 44,
    style: {
      color: 'var(--gold-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-h2)/var(--lh-tight) var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, title), blurb && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, blurb)), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-gold",
    onClick: onAction,
    style: {
      flex: 'none'
    }
  }, cta));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/sections/CapabilityStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CapabilityStrip({
  label = 'Built with',
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-8)',
      padding: 'var(--sp-6) 0',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { CapabilityStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CapabilityStrip.jsx", error: String((e && e.message) || e) }); }

// components/sections/PageHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageHero({
  eyebrow,
  lines,
  level = 2,
  blurb,
  image,
  children,
  minHeight = 280,
  contentWidth = '62%',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      position: 'relative',
      minHeight,
      overflow: 'hidden',
      background: image ? 'url(' + image + ') right center/cover' : 'var(--surface-page)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'var(--sp-8) var(--pad-shell)',
      maxWidth: contentWidth,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.DisplayHeading, {
    lines: lines,
    level: level
  }), /*#__PURE__*/React.createElement(__ds_scope.GoldRule, null), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: 'var(--max-prose)'
    }
  }, blurb), children));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/sections/RoleList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RoleList({
  roles = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)',
      ...style
    }
  }), roles.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: 18,
    style: {
      color: 'var(--gold-400)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-h4)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, (r.lines || []).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)))))));
}
Object.assign(__ds_scope, { RoleList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/RoleList.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  eyebrow,
  title,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-h1)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-display)',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line-hairline)'
    }
  })));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const NS = () => window.MichaelJosiahDesignSystem_bafdc6;
function ContactScreen({
  onNavigate
}) {
  const {
    PageHero,
    Eyebrow,
    TextField,
    Button,
    Icon,
    ContactMethod,
    ValueCard,
    QuoteBlock,
    Panel
  } = NS();
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    minHeight: 270,
    eyebrow: "Let's connect",
    lines: ['Ideas are', 'stronger', 'together.'],
    level: 2,
    image: "../../assets/hero-portrait.png",
    blurb: /*#__PURE__*/React.createElement(React.Fragment, null, "Whether you have a question, a project", /*#__PURE__*/React.createElement("br", null), "in mind, or just want to say hello,", /*#__PURE__*/React.createElement("br", null), "I'd love to hear from you.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-6) var(--pad-shell) var(--sp-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter-grid)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter-grid)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      padding: 'var(--pad-panel)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--sp-1)'
    }
  }, "Send a message"), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Your Name",
    icon: "user"
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Your Email",
    icon: "mail"
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Subject",
    icon: "tag"
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Your Message",
    icon: "pencil",
    multiline: true,
    rows: 4
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: '100%',
      marginTop: 'var(--sp-1)'
    },
    onClick: () => setSent(true)
  }, sent ? 'Message sent' : 'Send message'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      alignItems: 'flex-start',
      color: 'var(--text-faint)',
      font: 'var(--fw-regular) var(--fs-micro)/1.5 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12,
    style: {
      marginTop: 2,
      color: 'var(--gold-500)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "I respect your privacy. Your information", /*#__PURE__*/React.createElement("br", null), "will never be shared."))), /*#__PURE__*/React.createElement(Panel, {
    style: {
      padding: 'var(--pad-panel)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--sp-5)'
    }
  }, "Ways to connect"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(ContactMethod, {
    icon: "mail",
    label: "Email",
    value: "hello@michael.josiah.com"
  }), /*#__PURE__*/React.createElement(ContactMethod, {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/michaeljosiah"
  }), /*#__PURE__*/React.createElement(ContactMethod, {
    icon: "map-pin",
    label: "Location",
    value: "Global \\u2022 Remote-First"
  }), /*#__PURE__*/React.createElement(ContactMethod, {
    icon: "clock",
    label: "Response time",
    value: "I typically reply within 24\\u201348 hours."
  })))), /*#__PURE__*/React.createElement(Panel, {
    padded: false,
    style: {
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-panel)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Let's build something extraordinary"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--sp-3)',
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "I'm always open to discussing new ideas, creative collaborations,", /*#__PURE__*/React.createElement("br", null), "speaking opportunities, or ways technology can solve meaningful problems."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-gold",
    size: "sm",
    style: {
      marginTop: 'var(--sp-5)'
    },
    onClick: () => onNavigate('Projects')
  }, "View my projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/img-studio-desk.png) center/cover'
    }
  })), /*#__PURE__*/React.createElement(Panel, {
    padded: false,
    style: {
      display: 'flex'
    }
  }, [['heart', 'Purpose driven', ['Building with meaning', 'and impact.']], ['lightbulb', 'Innovation first', ["Exploring what's next", 'and pushing boundaries.']], ['users', 'People focused', ['Empowering creators,', 'teams and communities.']], ['shield', 'Integrity always', ['Leading with honesty,', 'clarity and respect.']]].map(([i, t, l], n) => /*#__PURE__*/React.createElement(ValueCard, {
    key: t,
    icon: i,
    title: t,
    lines: l,
    style: {
      flex: 1,
      borderLeft: n ? '1px solid var(--line-hairline)' : 'none'
    }
  }))), /*#__PURE__*/React.createElement(QuoteBlock, {
    image: "../../assets/img-horizon-ring.png",
    quote: "The best way to predict the future is to build it \u2014 together.",
    attribution: "Michael Josiah",
    style: {
      minHeight: 150,
      alignItems: 'center'
    }
  })));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const NS = () => window.MichaelJosiahDesignSystem_bafdc6;
function HomeScreen({
  onNavigate
}) {
  const {
    PageHero,
    RoleList,
    StatTriad,
    Button,
    SectionHeader,
    PillarCard,
    CapabilityStrip,
    QuoteBlock,
    SocialRail
  } = NS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(SocialRail, {
    style: {
      alignSelf: 'stretch',
      minHeight: '100%'
    },
    links: [{
      icon: 'linkedin',
      label: 'LinkedIn'
    }, {
      icon: 'instagram',
      label: 'Instagram'
    }, {
      icon: 'youtube',
      label: 'YouTube'
    }, {
      icon: 'mail',
      label: 'Email'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    minHeight: 470,
    contentWidth: "48%",
    eyebrow: "Engineer. Creator. Technologist. Dreamer. Leader.",
    lines: ['I build worlds.', "I build what's next."],
    level: 1,
    blurb: /*#__PURE__*/React.createElement(React.Fragment, null, "I merge imagination with engineering to create", /*#__PURE__*/React.createElement("br", null), "stories, platforms and AI systems that transform", /*#__PURE__*/React.createElement("br", null), "businesses and inspire the future."),
    image: "../../assets/hero-portrait.png"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('Projects')
  }, "Explore my work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    showIcon: false,
    onClick: () => onNavigate('About')
  }, "About me")), /*#__PURE__*/React.createElement(StatTriad, {
    style: {
      marginTop: 'var(--sp-7)'
    },
    stats: [{
      value: '15+',
      label: 'Years experience'
    }, {
      value: '3',
      label: 'Core pillars'
    }, {
      value: '\u221E',
      label: 'Possibilities'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 300,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 'var(--sp-8) var(--pad-shell)',
      background: 'var(--scrim-right)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(RoleList, {
    style: {
      width: 210,
      pointerEvents: 'auto'
    },
    roles: [{
      icon: 'feather',
      title: 'Storyteller',
      lines: ['I craft narratives', 'that inspire']
    }, {
      icon: 'code',
      title: 'Engineer',
      lines: ['I build platforms', 'that empower']
    }, {
      icon: 'box',
      title: 'Innovator',
      lines: ['I design systems', 'that scale']
    }, {
      icon: 'eye',
      title: 'Visionary',
      lines: ['I shape the future', 'with purpose']
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter-section) var(--pad-shell)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Three worlds. One mission.",
    title: "What I create"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter-card)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PillarCard, {
    onOpen: () => onNavigate('Projects'),
    image: "../../assets/img-story-world.png",
    wordmark: "Arke",
    sub: "Studio",
    eyebrow: "Story worlds",
    title: "Arke Studio",
    cta: "Explore Arke Studio",
    blurb: "A creative platform for writers and creators to build stories, worlds and interactive experiences."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    onOpen: () => onNavigate('Projects'),
    image: "../../assets/img-ai-lattice.png",
    wordmark: "Aonik",
    sub: "Platform",
    eyebrow: "AI platforms",
    eyebrowTone: "var(--tag-ai)",
    title: "AONIK",
    cta: "Explore Aonik",
    blurb: "AI platforms and agents for the future of business in an intelligent, agentic world."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    onOpen: () => onNavigate('Journal'),
    image: "../../assets/img-studio-desk.png",
    eyebrow: "Writing & production",
    title: "Stories That Last",
    cta: "View stories",
    blurb: "From concept to screen. I write and produce cinematic stories across books, film and interactive media."
  })), /*#__PURE__*/React.createElement(CapabilityStrip, {
    items: [{
      icon: 'brain',
      label: 'AI'
    }, {
      icon: 'cloud',
      label: 'Cloud'
    }, {
      icon: 'code',
      label: 'Code'
    }, {
      icon: 'layers',
      label: 'Data'
    }, {
      icon: 'pen-tool',
      label: 'Design'
    }, {
      icon: 'target',
      label: 'Story'
    }]
  }), /*#__PURE__*/React.createElement(QuoteBlock, {
    align: "center",
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      justifyContent: 'center'
    },
    quote: "Imagination is the beginning of creation. Technology is how we bring it to life.",
    attribution: "Michael Josiah"
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JournalScreen.jsx
try { (() => {
const NS = () => window.MichaelJosiahDesignSystem_bafdc6;
const LIST = [{
  date: 'May 20, 2025',
  cat: 'AI & Tech',
  tone: 'ai',
  title: 'The Rise of Agentic Systems',
  blurb: 'Why the next era of business will be defined by autonomous capabilities.',
  read: '6 min read',
  img: 'img-ai-lattice'
}, {
  date: 'May 12, 2025',
  cat: 'Engineering',
  tone: 'engineering',
  title: 'Engineering Meaningful Systems',
  blurb: "It's not just about code. It's about solving real problems for real people.",
  read: '8 min read',
  img: 'img-code-screens'
}, {
  date: 'May 5, 2025',
  cat: 'Leadership',
  tone: 'story',
  title: 'Leading in an Uncertain Future',
  blurb: 'Principles that ground me as I build, lead and inspire others.',
  read: '5 min read',
  img: 'img-horizon-ring'
}];
const GRID = [{
  date: 'Apr 28, 2025',
  cat: 'Storytelling',
  tone: 'story',
  title: 'The Power of Myth',
  blurb: 'Why ancient myths still shape the stories we tell today.',
  read: '7 min read',
  img: 'img-studio-desk'
}, {
  date: 'Apr 18, 2025',
  cat: 'AI & Tech',
  tone: 'ai',
  title: 'Designing with Intelligence',
  blurb: 'Human-centered AI is the key to a better future.',
  read: '6 min read',
  img: 'img-ai-lattice'
}, {
  date: 'Apr 8, 2025',
  cat: 'Life',
  tone: 'life',
  title: 'Dream. Build. Repeat.',
  blurb: 'A personal note on discipline, resilience and purpose.',
  read: '4 min read',
  img: 'img-horizon-ring'
}];
function JournalScreen() {
  const {
    PageHero,
    FilterTabs,
    SearchInput,
    FeaturedArticleCard,
    ArticleCard,
    SubscribePanel
  } = NS();
  const [tab, setTab] = React.useState('All');
  const [q, setQ] = React.useState('');
  const match = a => (tab === 'All' || a.cat === tab) && a.title.toLowerCase().includes(q.toLowerCase());
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    minHeight: 280,
    eyebrow: "Journal",
    lines: ['Thoughts.', 'Insights.', 'Ideas in progress.'],
    level: 2,
    image: "../../assets/hero-portrait.png",
    blurb: /*#__PURE__*/React.createElement(React.Fragment, null, "A space where I share ideas, lessons, experiments", /*#__PURE__*/React.createElement("br", null), "and perspectives on engineering, creativity,", /*#__PURE__*/React.createElement("br", null), "AI and the future.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-6) var(--pad-shell) var(--sp-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      padding: 'var(--sp-2) var(--sp-4)',
      background: 'var(--surface-panel)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(FilterTabs, {
    items: ['All', 'Storytelling', 'Engineering', 'AI & Tech', 'Leadership', 'Life'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(SearchInput, {
    style: {
      marginLeft: 'auto'
    },
    placeholder: "Search journal...",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--gutter-grid)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(FeaturedArticleCard, {
    image: "../../assets/img-story-world.png",
    date: "May 28, 2025",
    category: "Storytelling",
    title: "Building Worlds That Move Hearts",
    blurb: "On crafting stories that transcend entertainment and create lasting impact."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter-grid)'
    }
  }, LIST.filter(match).map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.title,
    layout: "horizontal",
    style: {
      flex: 1
    },
    image: '../../assets/' + a.img + '.png',
    date: a.date,
    category: a.cat,
    categoryTone: a.tone,
    title: a.title,
    blurb: a.blurb,
    readTime: a.read
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter-grid)',
      alignItems: 'stretch'
    }
  }, GRID.filter(match).map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.title,
    layout: "vertical",
    image: '../../assets/' + a.img + '.png',
    date: a.date,
    category: a.cat,
    categoryTone: a.tone,
    title: a.title,
    blurb: a.blurb,
    readTime: a.read
  }))), /*#__PURE__*/React.createElement(SubscribePanel, null)));
}
Object.assign(window, {
  JournalScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JournalScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
const NS = () => window.MichaelJosiahDesignSystem_bafdc6;
const PROJECTS = [{
  cat: 'Story world',
  tone: 'story',
  title: 'Awaken – Embers of the Fallen',
  mark: 'feather',
  img: 'img-story-world',
  blurb: 'A cinematic dark fantasy series exploring the hidden war between Elysians, humanity and dimensions beyond.',
  group: 'Story worlds'
}, {
  cat: 'Story platform',
  tone: 'story',
  title: 'Arke Studio',
  mark: 'triangle',
  img: 'img-studio-desk',
  blurb: 'A creative platform for writers and creators to build stories, worlds and immersive narratives together.',
  group: 'Story worlds'
}, {
  cat: 'AI platform',
  tone: 'ai',
  title: 'Aonik',
  mark: 'triangle',
  img: 'img-ai-lattice',
  blurb: 'AI platforms and agents for the future of business in an intelligent, agentic world.',
  group: 'AI platforms'
}, {
  cat: 'Engineering',
  tone: 'engineering',
  title: 'Nexus Core',
  mark: 'hexagon',
  img: 'img-code-screens',
  blurb: 'Backend infrastructure and mission systems for real-time data, security and operations at scale.',
  group: 'Engineering'
}, {
  cat: 'Tools & systems',
  tone: 'story',
  title: 'MJ Dev Suite',
  mark: 'code',
  img: 'img-code-screens',
  blurb: 'A collection of developer tools, libraries and systems designed to accelerate productivity and innovation.',
  group: 'Tools & systems'
}, {
  cat: 'Experiment',
  tone: 'experiment',
  title: 'Project Origin',
  mark: 'circle-dot',
  img: 'img-horizon-ring',
  blurb: 'Exploring the boundaries of AI, storytelling and interactive media through experimental prototypes.',
  group: 'Experiments'
}];
const CATS = [{
  label: 'All projects',
  icon: 'layout-grid',
  count: 14
}, {
  label: 'Story worlds',
  icon: 'feather',
  count: 4
}, {
  label: 'AI platforms',
  icon: 'triangle',
  count: 3
}, {
  label: 'Tools & systems',
  icon: 'wrench',
  count: 3
}, {
  label: 'Engineering',
  icon: 'layers',
  count: 2
}, {
  label: 'Entrepreneurship',
  icon: 'bar-chart-3',
  count: 1
}, {
  label: 'Experiments',
  icon: 'target',
  count: 1
}];
function ProjectsScreen({
  onNavigate
}) {
  const {
    PageHero,
    CategorySidebar,
    Select,
    ProjectCard,
    QuoteBlock,
    CTABanner
  } = NS();
  const [cat, setCat] = React.useState('All projects');
  const [sort, setSort] = React.useState('Featured');
  const list = cat === 'All projects' ? PROJECTS : PROJECTS.filter(p => p.group === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    minHeight: 300,
    eyebrow: "What I create",
    lines: ['Ideas. Engineered.', 'Built to inspire.'],
    level: 2,
    image: "../../assets/hero-portrait.png",
    blurb: /*#__PURE__*/React.createElement(React.Fragment, null, "I build stories, platforms and systems that live at the intersection", /*#__PURE__*/React.createElement("br", null), "of imagination and engineering \u2014 creating impact at scale.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 'var(--gutter-card)',
      padding: 'var(--sp-7) var(--pad-shell)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-panel)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-4) var(--sp-4) var(--sp-3)',
      font: 'var(--fw-medium) var(--fs-label)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Explore projects"), /*#__PURE__*/React.createElement(CategorySidebar, {
    items: CATS,
    active: cat,
    onSelect: setCat
  })), /*#__PURE__*/React.createElement(QuoteBlock, {
    quote: "Technology is how we bring imagination to life.",
    attribution: "Michael Josiah",
    style: {
      fontSize: 'var(--fs-h3)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      marginBottom: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-h4)/1 var(--font-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, cat), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-h4)/1 var(--font-display)',
      color: 'var(--text-accent)'
    }
  }, cat === 'All projects' ? 14 : list.length), /*#__PURE__*/React.createElement(Select, {
    style: {
      marginLeft: 'auto'
    },
    label: "Sort by:",
    value: sort,
    options: ['Featured', 'Newest', 'A\u2013Z'],
    onChange: setSort
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter-grid)',
      alignItems: 'stretch'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    image: '../../assets/' + p.img + '.png',
    category: p.cat,
    categoryTone: p.tone,
    title: p.title,
    markIcon: p.mark,
    blurb: p.blurb
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--pad-shell) var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(CTABanner, {
    title: "Have an idea worth building?",
    blurb: "Let's connect and create something extraordinary.",
    cta: "Let's build together",
    onAction: () => onNavigate('Contact')
  })));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.ContactMethod = __ds_scope.ContactMethod;

__ds_ns.FeaturedArticleCard = __ds_scope.FeaturedArticleCard;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.StatTriad = __ds_scope.StatTriad;

__ds_ns.ValueCard = __ds_scope.ValueCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GoldRule = __ds_scope.GoldRule;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MetaLine = __ds_scope.MetaLine;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SubscribePanel = __ds_scope.SubscribePanel;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.CategorySidebar = __ds_scope.CategorySidebar;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.SocialRail = __ds_scope.SocialRail;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.CapabilityStrip = __ds_scope.CapabilityStrip;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.RoleList = __ds_scope.RoleList;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();
