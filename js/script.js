(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createSVGElement = ([tag, attrs, children]) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children == null ? void 0 : children.length) {
    children.forEach((child) => {
      const childElement = createSVGElement(child);
      element.appendChild(childElement);
    });
  }
  return element;
};
const createElement = (iconNode, customAttrs = {}) => {
  const tag = "svg";
  const attrs = {
    ...defaultAttributes,
    ...customAttrs
  };
  return createSVGElement([tag, attrs, iconNode]);
};
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
  attrs[attr.name] = attr.value;
  return attrs;
}, {});
const getClassNames = (attrs) => {
  if (typeof attrs === "string") return attrs;
  if (!attrs || !attrs.class) return "";
  if (attrs.class && typeof attrs.class === "string") {
    return attrs.class.split(" ");
  }
  if (attrs.class && Array.isArray(attrs.class)) {
    return attrs.class;
  }
  return "";
};
const replaceElement = (element, { nameAttr, icons, attrs }) => {
  var _a;
  const iconName = element.getAttribute(nameAttr);
  if (iconName == null) return;
  const ComponentName = toPascalCase(iconName);
  const iconNode = icons[ComponentName];
  if (!iconNode) {
    return console.warn(
      `${element.outerHTML} icon name was not found in the provided icons object.`
    );
  }
  const elementAttrs = getAttrs(element);
  const ariaProps = hasA11yProp(elementAttrs) ? {} : { "aria-hidden": "true" };
  const iconAttrs = {
    ...defaultAttributes,
    "data-lucide": iconName,
    ...ariaProps,
    ...attrs,
    ...elementAttrs
  };
  const elementClassNames = getClassNames(elementAttrs);
  const className = getClassNames(attrs);
  const classNames = mergeClasses(
    "lucide",
    `lucide-${iconName}`,
    ...elementClassNames,
    ...className
  );
  if (classNames) {
    Object.assign(iconAttrs, {
      class: classNames
    });
  }
  const svgElement = createElement(iconNode, iconAttrs);
  return (_a = element.parentNode) == null ? void 0 : _a.replaceChild(svgElement, element);
};
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Activity = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
    }
  ]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowDown = [
  ["path", { d: "M12 5v14" }],
  ["path", { d: "m19 12-7 7-7-7" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = [
  ["path", { d: "M5 12h14" }],
  ["path", { d: "m12 5 7 7-7 7" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowUp = [
  ["path", { d: "m5 12 7-7 7 7" }],
  ["path", { d: "M12 19V5" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BookOpen = [
  ["path", { d: "M12 7v14" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    }
  ]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Calendar = [
  ["path", { d: "M8 2v4" }],
  ["path", { d: "M16 2v4" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
  ["path", { d: "M3 10h18" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = [["path", { d: "m9 18 6-6-6-6" }]];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = [["path", { d: "m15 18-6-6 6-6" }]];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheckBig = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }],
  ["path", { d: "m9 11 3 3L22 4" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Facebook = [
  ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FileText = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 9H8" }],
  ["path", { d: "M16 13H8" }],
  ["path", { d: "M16 17H8" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ImageIcon = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["circle", { cx: "9", cy: "9", r: "2" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Instagram = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Leaf = [
  [
    "path",
    { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Linkedin = [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }],
  ["rect", { width: "4", height: "12", x: "2", y: "9" }],
  ["circle", { cx: "4", cy: "4", r: "2" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = [
  ["path", { d: "M4 5h16" }],
  ["path", { d: "M4 12h16" }],
  ["path", { d: "M4 19h16" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Moon = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    }
  ]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pill = [
  ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }],
  ["path", { d: "m8.5 8.5 7 7" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = [
  ["path", { d: "m21 21-4.34-4.34" }],
  ["circle", { cx: "11", cy: "11", r: "8" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sun = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "m17.66 17.66 1.41 1.41" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m6.34 17.66-1.41 1.41" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Thermometer = [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Twitter = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
    }
  ]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const User = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "12", cy: "7", r: "4" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = [
  ["path", { d: "M18 6 6 18" }],
  ["path", { d: "m6 6 12 12" }]
];
/**
 * @license lucide v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createIcons = ({
  icons = {},
  nameAttr = "data-lucide",
  attrs = {},
  root = document,
  inTemplates
} = {}) => {
  if (!Object.values(icons).length) {
    throw new Error(
      "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
    );
  }
  if (typeof root === "undefined") {
    throw new Error("`createIcons()` only works in a browser environment.");
  }
  const elementsToReplace = Array.from(root.querySelectorAll(`[${nameAttr}]`));
  elementsToReplace.forEach((element) => replaceElement(element, { nameAttr, icons, attrs }));
  if (inTemplates) {
    const templates = Array.from(root.querySelectorAll("template"));
    templates.forEach(
      (template) => createIcons({
        icons,
        nameAttr,
        attrs,
        root: template.content,
        inTemplates
      })
    );
  }
  if (nameAttr === "data-lucide") {
    const deprecatedElements = root.querySelectorAll("[icon-name]");
    if (deprecatedElements.length > 0) {
      console.warn(
        "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
      );
      Array.from(deprecatedElements).forEach(
        (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
      );
    }
  }
};
const medicines = [
  {
    "id": "aconite-napellus",
    "name": "একোনাইট নেপালাস (Aconite Napellus)",
    "commonName": "Monkshood",
    "source": "উদ্ভিজ",
    "description": "কেন্টের মতে, এটি ঝড়ের মতো আসে এবং ঝড়ের মতো চলে যায়। হঠাৎ করে আসা যেকোনো রোগের প্রথম অবস্থায়, বিশেষ করে শুষ্ক ঠান্ডা বাতাস লেগে জ্বর বা প্রদাহ হলে এটি ব্যবহার্য। এটি স্নায়ুতন্ত্র এবং রক্তসংবহনতন্ত্রের ওপর কাজ করে।",
    "mainSymptoms": [
      "রোগের আক্রমণ অত্যন্ত হঠাৎ এবং প্রচণ্ড (Sudden and violent invasion)।",
      "চামড়া শুকনো এবং গরম, ঘাম হয় না।",
      "প্রচণ্ড জলপিপাসা, প্রচুর পরিমাণে ঠান্ডা পানি পান করতে চায়।",
      "নাড়ি দ্রুত, পূর্ণ এবং কঠিন (Full and bounding pulse)।",
      "যেকোনো ব্যথার সাথে প্রচণ্ড অস্থিরতা এবং মৃত্যুভয় থাকে।"
    ],
    "mentalSymptoms": [
      "অত্যন্ত মানসিক ও শারীরিক অস্থিরতা; রোগী এক জায়গায় স্থির থাকতে পারে না।",
      "প্রচণ্ড মৃত্যুভয় (Fear of death); রোগী মৃত্যুর সময় বা দিনক্ষণ বলে দেয়।",
      "ভবিষ্যৎ নিয়ে দুশ্চিন্তা এবং ভিড় বা রাস্তা পার হতে ভয় পায়।",
      "রোগী মনে করে তার রোগ আরোগ্য হবে না।",
      "সামান্য শব্দে বা আলোতে চমকে ওঠে।"
    ],
    "modalities": {
      "aggravation": "সন্ধ্যায় ও রাতে, গরমে, বাম পাশে শুলে, শুষ্ক ঠান্ডা বাতাসে।",
      "amelioration": "খোলা বাতাসে, বিশ্রামে।"
    }
  },
  {
    "id": "arnica-montana",
    "name": "আর্নিক মন্টানা (Arnica Montana)",
    "commonName": "Leopard's Bane",
    "source": "উদ্ভিজ (Vegetable Kingdom)",
    "description": "বোয়েরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। যেকোনো ধরণের আঘাত, থেঁতলে যাওয়া, কালশিটে পড়া বা পেশীর অতিরিক্ত খাটুনির ফলে সৃষ্ট সমস্যায় এটি অব্যর্থ। এটি রক্তনালীর ওপর কাজ করে এবং পচনশীলতা রোধ করে।",
    "mainSymptoms": [
      "শরীরের যে অংশে আঘাত লাগে বা যে অংশে শুয়ে থাকে, তা থেঁতলে যাওয়ার মতো ব্যথা (Sore, lame, bruised feeling)।",
      "বিছানা খুব শক্ত মনে হয়, তাই রোগী বারবার পাশ পরিবর্তন করে আরাম খোঁজে।",
      "আঘাতের কারণে শক বা অজ্ঞান হয়ে যাওয়া, সাথে অসাড়তা।",
      "মাথা গরম কিন্তু শরীর ঠান্ডা থাকে।",
      "শরীরের নিম্নাঙ্গে কালশিটে দাগ বা একাইমোসিস (Ecchymosis)।"
    ],
    "mentalSymptoms": [
      "রোগী অত্যন্ত স্পর্শকাতর, কেউ তার দিকে এগিয়ে এলে সে ভয় পায় যে তাকে স্পর্শ করবে (Fear of touch)।",
      "অজ্ঞান বা আচ্ছন্ন অবস্থায় থাকে, কিন্তু ডাকলে সঠিক উত্তর দেয় এবং আবার ঘুমিয়ে পড়ে।",
      "রোগী বলে তার কোনো রোগ নেই, সে সম্পূর্ণ সুস্থ (Says there is nothing the matter with him)।",
      "একাকী থাকতে পছন্দ করে এবং কথা বলতে চায় না।",
      "হঠাৎ চমকে ওঠে এবং ভয় পেয়ে ঘুম থেকে জেগে ওঠে।"
    ],
    "modalities": {
      "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়, বাম পাশে শুলে।",
      "amelioration": "মাথা নিচু করে শুলে, বিশ্রামে।"
    }
  },
  {
    "id": "belladonna",
    "name": "বেলাডোনা (Belladonna)",
    "commonName": "Deadly Nightshade",
    "source": "উদ্ভিজ",
    "description": "বোয়েরিকের মতে, এটি প্রদাহের প্রথম অবস্থায় যখন লালভাব, উত্তাপ এবং ব্যথা থাকে তখন কার্যকরী। এটি প্রধানত মস্তিষ্কের ওপর কাজ করে এবং রক্তসঞ্চালন বাড়িয়ে দেয়।",
    "mainSymptoms": [
      "আক্রান্ত স্থান উজ্জ্বল লাল, গরম এবং দপদপ করে (Redness, Heat, Throbbing)।",
      "চোখ লাল, চকচকে এবং চোখের তারা প্রসারিত (Dilated pupils)।",
      "জ্বর হঠাৎ আসে এবং খুব বেশি তাপমাত্রায় পৌঁছায়।",
      "মাথাব্যথা, মনে হয় মাথা ফেটে যাবে, বিশেষ করে কপাল এবং রগে।",
      "গলা ব্যথা, ঢোক গিলতে কষ্ট হয়, বিশেষ করে তরল খাবার গিলতে।"
    ],
    "mentalSymptoms": [
      "প্রলাপ বকা (Delirium); রোগী কামড়াতে, মারতে বা পালাতে চায়।",
      "কাল্পনিক জিনিস বা ভূত-প্রেত দেখে ভয় পায়।",
      "অত্যন্ত হিংস্র আচরণ এবং অসংলগ্ন কথাবার্তা।",
      "আলো এবং শব্দের প্রতি অত্যন্ত সংবেদনশীল।",
      "ঘুমের মধ্যে চমকে ওঠে এবং দাঁত কড়মড় করে।"
    ],
    "modalities": {
      "aggravation": "স্পর্শে, সামান্য নড়াচড়ায়, আলোতে, শব্দে, শুয়ে থাকলে।",
      "amelioration": "অর্ধ-শায়িত অবস্থায় (Semi-erect), আক্রান্ত স্থানে গরম কাপড় দিলে।"
    }
  },
  {
    "id": "bryonia-alba",
    "name": "ব্রায়োনিয়া অ্যালবা (Bryonia Alba)",
    "commonName": "White Bryony",
    "source": "উদ্ভিজ",
    "description": "কেন্টের মতে, ব্রায়োনিয়ার প্রধান বৈশিষ্ট্য হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। এটি শ্লৈষ্মিক ঝিল্লি (Mucous membranes) এবং সেরাস ঝিল্লির (Serous membranes) ওপর কাজ করে এবং শুষ্কতা সৃষ্টি করে।",
    "mainSymptoms": [
      "যেকোনো নড়াচড়ায় রোগের বৃদ্ধি (Aggravation from any motion)।",
      "অত্যন্ত শুষ্কতা - মুখ, ঠোঁট, গলা এবং মলদ্বার শুকনো থাকে।",
      "প্রচণ্ড জলপিপাসা, অনেকক্ষণ পর পর প্রচুর পরিমাণে পানি পান করে।",
      "কোষ্ঠকাঠিন্য, মল বড়, শক্ত এবং শুষ্ক।",
      "মাথাব্যথা, মনে হয় মাথা ফেটে যাবে, বিশেষ করে নড়াচড়া বা কাশলে বাড়ে।"
    ],
    "mentalSymptoms": [
      "রোগী অত্যন্ত খিটখিটে এবং রাগান্বিত থাকে।",
      "ব্যবসা বা কাজের চিন্তা সবসময় মাথায় ঘোরে, এমনকি প্রলাপ বকার সময়ও ব্যবসার কথা বলে।",
      "বাড়ি যাওয়ার জন্য অস্থির হয়ে ওঠে, যদিও সে বাড়িতেই থাকে।",
      "ভবিষ্যৎ এবং আর্থিক বিষয় নিয়ে দুশ্চিন্তা করে।",
      "একা থাকতে পছন্দ করে এবং কেউ বিরক্ত করলে রেগে যায়।"
    ],
    "modalities": {
      "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে, খাওয়ার পরে।",
      "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত স্থানে চাপ দিলে, ঠান্ডা পানীয়ে।"
    }
  },
  {
    "id": "calcarea-carb",
    "name": "ক্যালকেরিয়া কার্ব (Calcarea Carbonica)",
    "commonName": "Carbonate of Lime",
    "source": "খনিজ (Mineral Kingdom)",
    "description": "বোয়েরিকের মতে, এটি মোটা, থলথলে এবং শীতকাতর ব্যক্তিদের জন্য অত্যন্ত উপযোগী। এটি পুষ্টির অভাব এবং গ্রন্থির (Glandular) সমস্যায় দারুণ কাজ করে।",
    "mainSymptoms": [
      "অত্যন্ত শীতকাতর, সামান্য ঠান্ডাতেই রোগাক্রান্ত হয়।",
      "প্রচুর ঘাম হয়, বিশেষ করে মাথায় এবং ঘুমের মধ্যে বালিশ ভিজে যায়।",
      "ডিম খাওয়ার প্রবল ইচ্ছা (Craving for eggs) এবং অপাচ্য জিনিস (মাটি, চক) খাওয়ার প্রবণতা।",
      "হাড়ের বিকাশ ধীর, শিশুদের দাঁত উঠতে বা হাঁটতে দেরি হয়।",
      "পরিশ্রম করলে সহজেই হাঁপিয়ে ওঠে।"
    ],
    "mentalSymptoms": [
      "ভবিষ্যৎ নিয়ে অত্যন্ত চিন্তিত এবং ভয় পায় যে সে পাগল হয়ে যাবে।",
      "অন্ধকার, ভূত এবং সংক্রামক রোগের ভয়।",
      "মানসিক পরিশ্রমে অনীহা এবং সহজেই ক্লান্ত হয়ে পড়ে।",
      "অন্যেরা তার মানসিক অবস্থা বা দুর্বলতা বুঝতে পারবে এই ভয়ে থাকে।",
      "অত্যন্ত জেদী এবং একগুঁয়ে স্বভাবের।"
    ],
    "modalities": {
      "aggravation": "ঠান্ডা বাতাসে, পানিতে ভিজলে, পূর্ণিমায়, শারীরিক বা মানসিক পরিশ্রমে।",
      "amelioration": "শুষ্ক আবহাওয়ায়, ব্যথার দিকে শুলে।"
    }
  },
  {
    "id": "ignatia-amara",
    "name": "ইগ্নেশিয়া আমারা (Ignatia Amara)",
    "commonName": "St. Ignatius Bean",
    "source": "উদ্ভিজ",
    "description": "মানসিক শোক, দুঃখ, হতাশা বা প্রেমে ব্যর্থতার ফলে সৃষ্ট শারীরিক ও মানসিক সমস্যার জন্য এটি একটি অন্যতম প্রধান ওষুধ।",
    "mainSymptoms": [
      "দীর্ঘশ্বাস ফেলা এবং একা থাকতে পছন্দ করা।",
      "গলায় কিছু আটকে থাকার অনুভূতি (Globus hystericus)।",
      "পরস্পরবিরোধী লক্ষণ (যেমন- জ্বর হলে পিপাসা থাকে না, শীত করলে পিপাসা থাকে)।",
      "মাথাব্যথা, মনে হয় যেন মাথায় পেরেক ঠুকে দেওয়া হচ্ছে।",
      "খাওয়ার সময় গলার ব্যথা কমে যায়, কিন্তু খালি ঢোক গিললে ব্যথা বাড়ে।"
    ],
    "mentalSymptoms": [
      "অত্যন্ত সংবেদনশীল, সহজেই কাঁদে বা হাসে।",
      "দুঃখ বা শোক চেপে রাখার প্রবণতা।",
      "হঠাৎ মেজাজ পরিবর্তন হওয়া (Mood swings)।",
      "সান্ত্বনা দিলে রাগ বাড়ে বা বিরক্তি প্রকাশ করে।",
      "প্রেমে ব্যর্থতা বা প্রিয়জনের মৃত্যুজনিত শোক থেকে রোগের উৎপত্তি।"
    ],
    "modalities": {
      "aggravation": "সকালে, খোলা বাতাসে, কফি পান করলে, শোক বা মানসিক চাপে।",
      "amelioration": "গরম ঘরে, শক্ত চাপে, খাওয়ার সময়।"
    },
    "dosage": "সাধারণত 30C বা 200C শক্তিতে ব্যবহার করা হয়। মানসিক লক্ষণে উচ্চশক্তি ভালো কাজ করে।"
  },
  {
    "id": "lycopodium",
    "name": "লাইকোপোডিয়াম (Lycopodium Clavatum)",
    "commonName": "Club Moss",
    "source": "উদ্ভিজ",
    "description": "কেন্টের মতে, এটি পরিপাকতন্ত্র এবং যকৃতের (Liver) সমস্যার একটি প্রধান ওষুধ। এর লক্ষণগুলো সাধারণত ডান দিক থেকে শুরু হয়ে বাম দিকে যায়।",
    "mainSymptoms": [
      "পেটে প্রচুর গ্যাস হয়, বিশেষ করে পেটের নিচের অংশে (Lower abdomen)।",
      "অল্প খেলেই পেট ভরে যায় (Early satiety)।",
      "রোগের লক্ষণ বিকেল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি পায়।",
      "মিষ্টি এবং গরম খাবার খাওয়ার প্রবল ইচ্ছা।",
      "ডান দিকের রোগ (যেমন- ডান দিকের গলা ব্যথা, ডান দিকের কিডনিতে পাথর) বেশি দেখা যায়।"
    ],
    "mentalSymptoms": [
      "রোগী অত্যন্ত রাগী, একগুঁয়ে এবং কর্তৃত্বপরায়ণ (Dictatorial)।",
      "নতুন কাজ শুরু করার আগে আত্মবিশ্বাসের অভাব, কিন্তু শুরু করলে ভালো করে।",
      "একা থাকতে ভয় পায়, কিন্তু আবার মানুষের ভিড়ও পছন্দ করে না (পাশের ঘরে কেউ থাকুক তা চায়)।",
      "স্মৃতিশক্তি দুর্বল, কথা বলার সময় সঠিক শব্দ খুঁজে পায় না।",
      "সকালে ঘুম থেকে ওঠার পর মেজাজ খুব খারাপ থাকে।"
    ],
    "modalities": {
      "aggravation": "বিকেল ৪টা থেকে রাত ৮টায়, ডান দিকে শুলে, ঠান্ডা খাবারে।",
      "amelioration": "গরম খাবার ও পানীয়ে, নড়াচড়ায়, প্রস্রাব করার পর।"
    }
  },
  {
    "id": "natrum-mur",
    "name": "নেট্রাম মিউরিয়াটিকাম (Natrum Muriaticum)",
    "commonName": "Common Salt",
    "source": "খনিজ",
    "description": "দীর্ঘদিনের চাপা কষ্ট, শোক বা রাগ থেকে সৃষ্ট রোগের জন্য এটি অত্যন্ত কার্যকর। বিশেষ করে যারা অতিরিক্ত লবণ খেতে পছন্দ করে।",
    "mainSymptoms": [
      "সকাল ১০টা থেকে ১১টার দিকে মাথাব্যথা বাড়ে।",
      "ঠোঁটের কোণে বা জিভে ঘা (Cold sores)।",
      "অতিরিক্ত লবণ খাওয়ার প্রবল ইচ্ছা।",
      "প্রচুর ক্ষুধা থাকা সত্ত্বেও শরীর শুকিয়ে যায়, বিশেষ করে ঘাড়ের দিকটা।",
      "রোদে গেলে বা রোদ লাগলে মাথাব্যথা বা অন্যান্য কষ্ট বাড়ে।"
    ],
    "mentalSymptoms": [
      "সান্ত্বনা দিলে রাগ বাড়ে।",
      "অতীতের কষ্টকর স্মৃতি মনে করে কাঁদে।",
      "অত্যন্ত চাপা স্বভাবের, নিজের কষ্ট কাউকে বলতে চায় না।",
      "মানুষের সামনে প্রস্রাব করতে পারে না (Bashful kidneys)।",
      "চোর বা ডাকাতের ভয়, রাতে ঘুমানোর আগে বারবার দরজা-জানালা চেক করে।"
    ],
    "modalities": {
      "aggravation": "সকাল ১০-১১ টায়, রোদে গেলে, সান্ত্বনা দিলে।",
      "amelioration": "খোলা বাতাসে, ঠান্ডা পানিতে গোসল করলে, বিশ্রামে।"
    },
    "dosage": "30C, 200C বা 1M শক্তিতে ব্যবহৃত হয়। এটি একটি গভীর ক্রিয়াশীল ওষুধ, তাই ঘন ঘন প্রয়োগ করা উচিত নয়।"
  },
  {
    "id": "nux-vomica",
    "name": "নাক্স ভমিকা (Nux Vomica)",
    "commonName": "Poison Nut",
    "source": "উদ্ভিজ",
    "description": "কেন্টের মতে, এটি আধুনিক জীবনের স্ট্রেস, অনিয়ম, অতিরিক্ত মানসিক পরিশ্রম এবং অলস জীবনযাপনকারীদের জন্য সেরা ওষুধ। যারা অতিরিক্ত মসলাযুক্ত খাবার, কফি বা অ্যালকোহল সেবন করেন তাদের জন্য এটি বিশেষ উপযোগী।",
    "mainSymptoms": [
      "কোষ্ঠকাঠিন্য; বারবার পায়খানার বেগ হয় কিন্তু পরিষ্কার হয় না (Ineffectual urging)।",
      "খাওয়ার পরে পেটে ভারবোধ এবং ঘুম ঘুম ভাব।",
      "সকালে বমি বমি ভাব এবং তিতা স্বাদ।",
      "অত্যন্ত শীতকাতর; সামান্য ঠান্ডাও সহ্য করতে পারে না।",
      "অতিরিক্ত মসলাযুক্ত খাবার, কফি, বা অ্যালকোহল খাওয়ার প্রবল ইচ্ছা।"
    ],
    "mentalSymptoms": [
      "অত্যন্ত খিটখিটে মেজাজ (Irritable); সামান্য শব্দ বা আলো সহ্য করতে পারে না।",
      "অন্যের ভুল ধরিয়ে দিতে পছন্দ করে এবং প্রতিবাদ সহ্য করতে পারে না।",
      "কাজের প্রতি অত্যন্ত মনোযোগী এবং উচ্চাকাঙ্ক্ষী (Workaholic)।",
      "সহজেই রেগে যায় এবং রাগের মাথায় জিনিসপত্র ছুঁড়ে মারে।",
      "সকালে ঘুম থেকে ওঠার পর মেজাজ সবচেয়ে খারাপ থাকে।"
    ],
    "modalities": {
      "aggravation": "সকালে, খাওয়ার পরে, মানসিক পরিশ্রমে, ঠান্ডায়, মশলাযুক্ত খাবারে।",
      "amelioration": "সন্ধ্যায়, বিশ্রামে, গরমে, ভেজা আবহাওয়ায়।"
    }
  },
  {
    "id": "phosphorus",
    "name": "ফসফরাস (Phosphorus)",
    "commonName": "Phosphorus",
    "source": "খনিজ",
    "description": "স্নায়বিক দুর্বলতা, রক্তপাত প্রবণতা এবং শ্বাসযন্ত্রের সমস্যায় এটি ব্যাপকভাবে ব্যবহৃত হয়। লম্বা, ছিপছিপে এবং সংবেদনশীল ব্যক্তিদের জন্য এটি বেশি উপযোগী।",
    "mainSymptoms": [
      "বরফের মতো ঠান্ডা পানি পানের প্রবল ইচ্ছা।",
      "সামান্য আঘাতেই প্রচুর রক্তপাত হয়।",
      "বাম পাশে শুলে বা ঠান্ডা বাতাসে কাশি বাড়ে।",
      "খাবার খাওয়ার কিছুক্ষণ পর, খাবার পেটে গরম হলে বমি হয়ে যায়।",
      "বুকে প্রচণ্ড চাপ বা ভারবোধ অনুভব করে।"
    ],
    "mentalSymptoms": [
      "অন্ধকার, বজ্রপাত এবং একা থাকতে প্রচণ্ড ভয়।",
      "খুবই সহানুভূতিশীল এবং মিশুক স্বভাবের।",
      "অত্যন্ত সংবেদনশীল, অন্যের কষ্ট দেখলে নিজেও কষ্ট পায়।",
      "সহজেই উত্তেজিত হয়ে পড়ে এবং স্নায়বিক দুর্বলতায় ভোগে।",
      "অসুস্থ অবস্থায় একা থাকতে চায় না, সবসময় কাউকে পাশে চায়।"
    ],
    "modalities": {
      "aggravation": "বজ্রপাতের সময়, বাম পাশে শুলে, গরম খাবার বা পানীয়ে।",
      "amelioration": "ঠান্ডা খাবার বা পানীয়ে, ডান পাশে শুলে, ঘুমের পর।"
    },
    "dosage": "30C বা 200C শক্তিতে ব্যবহার করা হয়। যক্ষ্মা রোগীদের ক্ষেত্রে সাবধানে ব্যবহার করতে হয়।"
  },
  {
    "id": "pulsatilla",
    "name": "পালসেটিলা (Pulsatilla)",
    "commonName": "Wind Flower",
    "source": "উদ্ভিজ",
    "description": "বোয়েরিকের মতে, এটি নম্র, শান্ত এবং ক্রন্দনশীল স্বভাবের মহিলাদের জন্য বেশি উপযোগী। এর লক্ষণগুলো পরিবর্তনশীল এবং খোলা বাতাসে রোগী আরাম বোধ করে।",
    "mainSymptoms": [
      "লক্ষণগুলো দ্রুত পরিবর্তন হয় (Shifting symptoms), ব্যথা এক জায়গা থেকে অন্য জায়গায় যায়।",
      "তৃষ্ণাহীনতা (Thirstless), মুখ শুকনো থাকলেও পানি খেতে চায় না।",
      "গরম ঘরে বা গরমে রোগের বৃদ্ধি এবং খোলা বাতাসে আরাম।",
      "চর্বিযুক্ত খাবার বা মাখন খাওয়ার পর পেটের সমস্যা।",
      "সর্দি বা স্রাব সাধারণত ঘন এবং হলদে-সবুজ রঙের হয়।"
    ],
    "mentalSymptoms": [
      "অত্যন্ত ক্রন্দনশীল স্বভাব (Weeps easily), কথা বলার সময় কেঁদে ফেলে।",
      "সান্ত্বনা দিলে বা আদর করলে খুব খুশি হয় এবং আরাম বোধ করে।",
      "নম্র, শান্ত এবং সহজে বশ মানানো যায় এমন স্বভাব।",
      "একা থাকতে ভয় পায় এবং অন্ধকারে ভয় পায়।",
      "সহজেই অভিমান করে এবং মন খারাপ করে থাকে।"
    ],
    "modalities": {
      "aggravation": "গরমে, গরম ঘরে, চর্বিযুক্ত খাবারে, বিশ্রামে, সন্ধ্যায়।",
      "amelioration": "খোলা বাতাসে, ঠান্ডা পানীয়ে, ধীরে ধীরে হাঁটলে, সান্ত্বনা দিলে।"
    }
  },
  {
    "id": "rhus-tox",
    "name": "রাস টক্স (Rhus Tox)",
    "commonName": "Poison Ivy",
    "source": "উদ্ভিজ",
    "description": "বোয়েরিকের মতে, এটি বাত, পেশীর ব্যথা এবং চর্মরোগের প্রধান ওষুধ। বিশেষ করে যখন বিশ্রাম নিলে ব্যথা বাড়ে এবং নড়াচড়া করলে কমে।",
    "mainSymptoms": [
      "বিশ্রামে ব্যথা বাড়ে, কিন্তু নড়াচড়া শুরু করলে প্রথমে ব্যথা লাগে এবং পরে হাঁটলে আরাম বোধ হয়।",
      "বৃষ্টিতে ভিজলে বা ঘাম অবস্থায় ঠান্ডা লাগলে রোগ সৃষ্টি হয়।",
      "জিভের ডগায় লাল ত্রিভুজাকৃতি দাগ (Red triangular tip of tongue)।",
      "চামড়ায় জ্বালা করা ফুসকুড়ি বা একজিমা, যাতে অত্যন্ত চুলকানি থাকে।",
      "ঠান্ডা দুধ খাওয়ার প্রবল ইচ্ছা থাকে।"
    ],
    "mentalSymptoms": [
      "অস্থিরতা; ব্যথার জন্য রোগী এক অবস্থানে বেশিক্ষণ থাকতে পারে না।",
      "রাতে ভয় পায় এবং বিষণ্ণতায় ভোগে।",
      "আত্মহত্যার চিন্তা আসে কিন্তু মৃত্যুভয় থাকে না।",
      "মনে করে কেউ তাকে বিষ খাইয়ে মেরে ফেলবে।",
      "অতীতের কোনো ঘটনা নিয়ে সবসময় চিন্তিত থাকে।"
    ],
    "modalities": {
      "aggravation": "বিশ্রামে, ঘুমের শুরুতে, ঠান্ডা বাতাসে, বর্ষাকালে বা স্যাঁতসেঁতে আবহাওয়ায়।",
      "amelioration": "নড়াচড়ায়, গরম সেঁক দিলে, শুষ্ক আবহাওয়ায়।"
    }
  },
  {
    "id": "sepia",
    "name": "সিপিয়া (Sepia)",
    "commonName": "Cuttlefish Ink",
    "source": "প্রাণিজ",
    "description": "মহিলাদের বিভিন্ন সমস্যা, বিশেষ করে জরায়ুর সমস্যা এবং হরমোনের ভারসাম্যহীনতায় এটি একটি অন্যতম প্রধান ওষুধ।",
    "mainSymptoms": [
      "তলপেট থেকে সবকিছু নিচের দিকে বেরিয়ে আসার অনুভূতি (Bearing down sensation), তাই পা ক্রস করে বসে।",
      "নাক ও গালের ওপর বাদামী দাগ (Yellow saddle across nose)।",
      "অত্যধিক শীতকাতরতা।",
      "দুধ বা চর্বিযুক্ত খাবার সহ্য হয় না।",
      "টক বা টক জাতীয় খাবার খাওয়ার প্রবল ইচ্ছা।"
    ],
    "mentalSymptoms": [
      "পরিবার এবং প্রিয়জনদের প্রতি সম্পূর্ণ উদাসীনতা।",
      "একা থাকতে চায়, কিন্তু আবার একা থাকতে ভয়ও পায়।",
      "অত্যন্ত বিষণ্ণ এবং সহজেই কেঁদে ফেলে।",
      "কাজকর্মে অনীহা এবং সবসময় ক্লান্ত বোধ করে।",
      "সান্ত্বনা দিলে বা কেউ সহানুভূতি দেখালে রেগে যায়।"
    ],
    "modalities": {
      "aggravation": "ঠান্ডা বাতাসে, বিশ্রামে, সকালে ও সন্ধ্যায়।",
      "amelioration": "ব্যায়াম করলে, দ্রুত হাঁটলে, গরম সেঁক দিলে।"
    },
    "dosage": "30C বা 200C শক্তিতে ব্যবহৃত হয়। এটি একটি দীর্ঘ ক্রিয়াশীল ওষুধ।"
  },
  {
    "id": "silicea",
    "name": "সাইলিসিয়া (Silicea)",
    "commonName": "Pure Flint",
    "source": "খনিজ",
    "description": "শরীরের পুঁজ তৈরি হওয়ার প্রবণতা রোধ করতে এবং যেকোনো বহিরাগত বস্তু (যেমন- কাঁটা বা স্প্লিন্টার) শরীর থেকে বের করতে এটি সাহায্য করে।",
    "mainSymptoms": [
      "প্রচণ্ড শীতকাতর, সবসময় গরম কাপড় পরতে চায়।",
      "মাথা, হাত ও পায়ে প্রচুর দুর্গন্ধযুক্ত ঘাম হয়।",
      "কোষ্ঠকাঠিন্য: মল কিছুটা বেরিয়ে আবার ভেতরে ঢুকে যায় (Bashful stool)।",
      "যেকোনো ক্ষত সহজে শুকাতে চায় না, পুঁজ তৈরি হয়।",
      "মাথাব্যথা ঘাড় থেকে শুরু হয়ে চোখের ওপর এসে স্থির হয়।"
    ],
    "mentalSymptoms": [
      "আত্মবিশ্বাসের অভাব, কিন্তু কাজ শুরু করলে ঠিকমতো করতে পারে।",
      "সুঁচ বা ধারালো জিনিসের প্রতি প্রচণ্ড ভয়।",
      "অত্যন্ত জেদী এবং নিজের মতে অটল থাকে।",
      "মানসিক পরিশ্রমে সহজেই ক্লান্ত হয়ে পড়ে।",
      "নতুন মানুষের সামনে যেতে ভয় পায় বা লাজুক স্বভাবের।"
    ],
    "modalities": {
      "aggravation": "ঠান্ডা বাতাসে, শীতকালে, অমাবস্যা বা পূর্ণিমায়।",
      "amelioration": "গরম ঘরে, মাথা গরম কাপড়ে মুড়িয়ে রাখলে।"
    },
    "dosage": "30C, 200C বা উচ্চতর শক্তিতে ব্যবহৃত হয়। পুঁজ বের করার জন্য নিম্নশক্তি এবং শুকানোর জন্য উচ্চশক্তি ব্যবহৃত হয়।"
  },
  {
    "id": "sulphur",
    "name": "সালফার (Sulphur)",
    "commonName": "Brimstone",
    "source": "খনিজ",
    "description": "কেন্টের মতে, এটি অ্যান্টি-সোরিক (Anti-psoric) ওষুধের রাজা। চর্মরোগ এবং দীর্ঘস্থায়ী রোগের ক্ষেত্রে এটি অত্যন্ত গুরুত্বপূর্ণ। রোগী সাধারণত অপরিষ্কার থাকতে পছন্দ করে।",
    "mainSymptoms": [
      "চর্মরোগ এবং প্রচণ্ড চুলকানি, যা গরমে এবং রাতে বিছানায় বাড়ে।",
      "গোসল করতে অনীহা (Aversion to washing/bathing), গোসল করলে রোগ বাড়ে।",
      "সকাল ১১টার দিকে পেটে প্রচণ্ড ক্ষুধা এবং দুর্বলতা অনুভব করে।",
      "পায়ের তলায়, মাথায় এবং শরীরে জ্বালাপোড়া (Burning sensation), রাতে বিছানা থেকে পা বের করে রাখে।",
      "দাঁড়িয়ে থাকতে খুব কষ্ট হয় (Standing is the worst position)।"
    ],
    "mentalSymptoms": [
      "রোগী নিজেকে খুব জ্ঞানী এবং ধনী মনে করে (Ragged philosopher)।",
      "অপরিষ্কার এবং অগোছালো থাকতে পছন্দ করে।",
      "অত্যন্ত স্বার্থপর এবং অন্যের প্রতি উদাসীন।",
      "ধর্ম বা দর্শন নিয়ে অতিরিক্ত চিন্তাভাবনা করে।",
      "সহজেই রেগে যায় এবং খিটখিটে মেজাজের হয়।"
    ],
    "modalities": {
      "aggravation": "গরমে, বিছানার গরমে, গোসল করলে, সকাল ১১টায়, দাঁড়িয়ে থাকলে।",
      "amelioration": "শুষ্ক এবং উষ্ণ আবহাওয়ায়, ডান দিকে শুলে।"
    }
  }
];
const organonPrinciples = [
  {
    "id": 1,
    "title": "চিকিৎসকের মহৎ উদ্দেশ্য",
    "content": "চিকিৎসকের একমাত্র এবং মহৎ উদ্দেশ্য হলো রোগীকে দ্রুত, আলতোভাবে এবং স্থায়ীভাবে আরোগ্য প্রদান করা।"
  },
  {
    "id": 2,
    "title": "আরোগ্যের আদর্শ",
    "content": "আরোগ্য হতে হবে দ্রুত, কষ্টহীন এবং স্থায়ী। এটি হতে হবে সুনির্দিষ্ট নীতির ভিত্তিতে।"
  },
  {
    "id": 3,
    "title": "সদৃশ বিধান (Similia Similibus Curentur)",
    "content": "যে বস্তু সুস্থ মানুষের দেহে রোগলক্ষণ তৈরি করতে পারে, সেই বস্তুই সদৃশ লক্ষণের রোগীকে আরোগ্য করতে সক্ষম।"
  },
  {
    "id": 4,
    "title": "একক ওষুধ (Single Remedy)",
    "content": "এক সময়ে রোগীকে কেবল একটিমাত্র ওষুধ প্রয়োগ করতে হবে। মিশ্র ওষুধ ব্যবহার নিষিদ্ধ।"
  },
  {
    "id": 5,
    "title": "শক্তিকরণ (Potentization)",
    "content": "ওষুধের শক্তি যত বৃদ্ধি করা হয়, তার বস্তুবাদী গুণ কমে এবং আরোগ্যকারী ক্ষমতা বাড়ে।"
  },
  {
    "id": 6,
    "title": "জীবনী শক্তি (Vital Force)",
    "content": "সুস্থ অবস্থায় মানুষের দেহে এক আধ্যাত্মিক শক্তি বিরাজ করে যা শরীরকে সজীব রাখে ও পরিচালনা করে।"
  },
  {
    "id": 7,
    "title": "দীর্ঘস্থায়ী রোগ (Chronic Diseases)",
    "content": "যেসব রোগ ধীরে ধীরে শরীরে বাসা বাঁধে এবং সঠিক চিকিৎসা না হলে আমৃত্যু থেকে যায়, তাকে দীর্ঘস্থায়ী রোগ বলে।"
  },
  {
    "id": 8,
    "title": "ওষুধের প্রমাণীকরণ (Drug Proving)",
    "content": "সুস্থ মানুষের দেহে ওষুধ প্রয়োগ করে তার লক্ষণসমূহ লিপিবদ্ধ করার প্রক্রিয়াকে ড্রাগ প্রুভিং বলে।"
  },
  {
    "id": 9,
    "title": "মায়াজম (Miasm)",
    "content": "রোগের মূল কারণ হলো মায়াজম। সোরা, সিফিলিস ও সাইকোসিস—এই তিনটি মায়াজমই দীর্ঘস্থায়ী রোগের জন্য দায়ী।"
  },
  {
    "id": 10,
    "title": "পথ্য ও নিয়মাবলী (Diet and Regimen)",
    "content": "চিকিৎসা চলাকালীন রোগীকে সঠিক পথ্য ও নিয়ম মেনে চলতে হবে, যা আরোগ্য প্রক্রিয়াকে ত্বরান্বিত করে।"
  },
  {
    "id": 11,
    "title": "রোগলক্ষণ সমষ্টি (Totality of Symptoms)",
    "content": "রোগের নাম নয়, বরং রোগীর সামগ্রিক লক্ষণ সমষ্টির ওপর ভিত্তি করে চিকিৎসা করতে হবে।"
  },
  {
    "id": 12,
    "title": "ব্যক্তি স্বাতন্ত্র্য (Individualization)",
    "content": "প্রতিটি রোগী অনন্য, তাই একই রোগের জন্য ভিন্ন ভিন্ন রোগীর ভিন্ন ভিন্ন ওষুধের প্রয়োজন হতে পারে।"
  },
  {
    "id": 13,
    "title": "ক্ষুদ্রতম মাত্রা (Minimum Dose)",
    "content": "আরোগ্যের জন্য প্রয়োজনীয় সর্বনিম্ন মাত্রায় ওষুধ প্রয়োগ করতে হবে যাতে কোনো পার্শ্বপ্রতিক্রিয়া না হয়।"
  },
  {
    "id": 14,
    "title": "আরোগ্যের দিক (Direction of Cure)",
    "content": "আরোগ্য ভেতর থেকে বাইরে, উপর থেকে নিচে এবং গুরুত্বপূর্ণ অঙ্গ থেকে কম গুরুত্বপূর্ণ অঙ্গে ঘটে।"
  },
  {
    "id": 15,
    "title": "হোমিওপ্যাথিক এগ্রাভেশন (Homeopathic Aggravation)",
    "content": "সঠিক ওষুধ প্রয়োগের পর সাময়িকভাবে রোগের লক্ষণ বৃদ্ধি পেতে পারে, যা আরোগ্যের শুভ লক্ষণ।"
  },
  {
    "id": 16,
    "title": "সংস্কারমুক্ত পর্যবেক্ষক (Unprejudiced Observer)",
    "content": "চিকিৎসককে হতে হবে সংস্কারমুক্ত। তিনি রোগীর লক্ষণগুলো মনোযোগ দিয়ে শুনবেন এবং নিজের কোনো পূর্বধারণা রোগীর ওপর চাপিয়ে দেবেন না।"
  },
  {
    "id": 17,
    "title": "রোগের কারণ (Causa Occasionalis)",
    "content": "চিকিৎসককে রোগীর শারীরিক ও মানসিক রোগের পেছনের মূল কারণ (যেমন- মানসিক আঘাত, অস্বাস্থ্যকর পরিবেশ বা ভুল জীবনযাপন) খুঁজে বের করে তা দূর করতে হবে।"
  },
  {
    "id": 18,
    "title": "সদৃশ রোগের সংঘাত (Two Similar Diseases)",
    "content": "দেহে দুটি সদৃশ রোগ একসাথে থাকলে, শক্তিশালী রোগটি দুর্বল রোগটিকে চিরতরে ধ্বংস করে দেয়। এই নীতির ওপর ভিত্তি করেই হোমিওপ্যাথি কাজ করে।"
  },
  {
    "id": 19,
    "title": "অসদৃশ রোগের সংঘাত (Two Dissimilar Diseases)",
    "content": "দুটি অসদৃশ রোগ একসাথে হলে শক্তিশালী রোগটি দুর্বলটিকে সাময়িকভাবে দমিয়ে রাখে, কিন্তু আরোগ্য করতে পারে না।"
  },
  {
    "id": 20,
    "title": "মানসিক লক্ষণ (Mental Symptoms)",
    "content": "ওষুধ নির্বাচনের ক্ষেত্রে রোগীর মানসিক অবস্থা ও স্বভাব সবচেয়ে বেশি গুরুত্ব বহন করে, কারণ শারীরিক রোগের সাথে মানসিক অবস্থার গভীর সম্পর্ক রয়েছে।"
  }
];
const symptomCategories = [
  {
    "id": "head",
    "name": "মাথা (Head)",
    "diseases": [
      {
        "id": "headache",
        "name": "মাথাব্যথা (Headache)",
        "remedies": [
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা হঠাৎ আসে এবং হঠাৎ চলে যায়।"
            ],
            "mentalSymptoms": [
              "দপদপ করা ব্যথা (Throbbing pain), মনে হয় মাথা ফেটে যাবে।",
              "মুখমন্ডল লাল, চোখ লাল এবং গরম।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চোখ খুললে বা নড়াচড়া করলে ব্যথা লাগে।",
              "প্রচণ্ড জলপিপাসা এবং কোষ্ঠকাঠিন্য থাকে।"
            ],
            "mentalSymptoms": [
              "মেজাজ খুব খিটখিটে, একা থাকতে চায়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Glonoinum",
            "description": "এই রোগের ক্ষেত্রে Glonoinum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রৌদ্রে বা গরমে ঘোরাঘুরির ফলে প্রচণ্ড মাথাব্যথা (Sun headache)।",
              "মাথার মধ্যে রক্তসঞ্চালন বেড়ে যায়, দপদপ করে।",
              "মাথা বালিশে রাখতে পারে না, উঁচু করে রাখতে হয়।"
            ],
            "mentalSymptoms": [
              "মাথা খুব বড় মনে হয়, যেন খুলি ফেটে যাবে।"
            ],
            "modalities": {
              "aggravation": "রোদে, গরমে, মাথা নিচু করলে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Glonoinum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সকালে ঘুম থেকে ওঠার পর মাথা ভার হয়ে থাকে।",
              "শীতকাতর এবং কোষ্ঠকাঠিন্য ধাতের রোগী।"
            ],
            "mentalSymptoms": [
              "অতিরিক্ত মদ্যপান, রাত জাগা বা মানসিক পরিশ্রমের পর মাথাব্যথা।",
              "শব্দ, আলো বা গন্ধে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Natrum Mur",
            "description": "এই রোগের ক্ষেত্রে Natrum Mur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "স্কুল ছাত্র-ছাত্রীদের বা রক্তাল্পতা রোগীদের মাথাব্যথা।",
              "অতিরিক্ত লবণ খাওয়ার ইচ্ছা।",
              "চোখের দৃষ্টি ঝাপসা হয়ে আসে ব্যথার আগে।"
            ],
            "mentalSymptoms": [
              "মনে হয় হাজারটা হাতুড়ি দিয়ে মাথায় পেটাচ্ছে।"
            ],
            "modalities": {
              "aggravation": "সকাল ১০টা-১১টায়, রোদে, সান্ত্বনায়।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা স্নানে, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, অতিরিক্ত লবণ খাওয়ার ইচ্ছা, রোদে মাথাব্যথা এবং সান্ত্বনায় বৃদ্ধি নেট্রাম মিউরের প্রধান লক্ষণ। রোগী অন্তর্মুখী স্বভাবের হয়।"
          }
        ]
      },
      {
        "id": "vertigo",
        "name": "মাথা ঘোরা (Vertigo)",
        "remedies": [
          {
            "name": "Conium Mac",
            "description": "এই রোগের ক্ষেত্রে Conium Mac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বিছানায় শুয়ে পাশ ফিরলে মাথা ঘোরে।",
              "বয়স্কদের মাথা ঘোরার জন্য বিশেষ উপযোগী।",
              "মাথা ঘোরার সাথে ঘাড়ে ব্যথা থাকতে পারে।",
              "অল্প নড়াচড়াতেই মাথা ঘোরা বাড়ে।"
            ],
            "mentalSymptoms": [
              "চোখ বুজলে মনে হয় বিছানা ঘুরছে।"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium Mac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Cocculus Ind",
            "description": "এই রোগের ক্ষেত্রে Cocculus Ind একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গাড়িতে বা নৌকায় চড়লে মাথা ঘোরে (Motion sickness)।",
              "মাথা ঘোরার সাথে বমি বমি ভাব।",
              "রাত্রি জাগরণের ফলে মাথা ঘোরা।",
              "মাথা তোলার চেষ্টা করলেই মাথা ঘোরে।",
              "খাবার দেখলে বা গন্ধ পেলে বমি আসে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গাড়িতে বা নৌকায় চড়লে, ঘুম কম হলে।",
              "amelioration": "ঘরের ভেতর, শুয়ে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Cocculus Ind ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphorus",
            "description": "এই রোগের ক্ষেত্রে Phosphorus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সকালে ঘুম থেকে ওঠার পর মাথা ঘোরে।",
              "উপর দিকে তাকালে মাথা ঘোরে।",
              "খালি পেটে থাকলে মাথা ঘোরা বাড়ে।",
              "মাথা ঘোরার সাথে মূর্ছা যাওয়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বাম পাশে শুলে, ঠান্ডা বাতাসে।",
              "amelioration": "ডান পাশে শুলে, ঠান্ডা খাবারে, ঘুমালে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ফসফরাসের রোগী লম্বা, ছিপছিপে এবং রক্তস্রাব প্রবণ হয়। এদের ঠান্ডা জল, আইসক্রিম এবং লবণাক্ত খাবারের প্রতি প্রবল আকাঙ্ক্ষা থাকে।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গরম ঘরে বা বদ্ধ ঘরে মাথা ঘোরে।",
              "মাসিক ঋতুস্রাব অনিয়মিত বা বন্ধ থাকার কারণে মাথা ঘোরা।",
              "উপর দিকে তাকালে মাথা ঘোরে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Gelsemium",
            "description": "এই রোগের ক্ষেত্রে Gelsemium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথা ঘোরার সাথে তন্দ্রাচ্ছন্ন ভাব।",
              "মাথার পেছন দিক থেকে ব্যথা শুরু হয়ে পুরো মাথায় ছড়ায়।",
              "ভয় বা দুশ্চিন্তা থেকে মাথা ঘোরা।",
              "দৃষ্টিশক্তি ঝাপসা হয়ে আসে।"
            ],
            "mentalSymptoms": [
              "পায়ের নিচে মাটি সরে যাচ্ছে এমন অনুভূতি।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, মানসিক উত্তেজনায়, সকাল ১০টায়।",
              "amelioration": "প্রচুর প্রস্রাবের পর, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, দুর্বলতা, তন্দ্রাচ্ছন্নতা, তৃষ্ণাহীনতা এবং কাঁপুনি জেলসেমিয়ামের প্রধান লক্ষণ। এটি স্নায়বিক দুর্বলতা ও জ্বরের দারুণ ওষুধ।"
          }
        ]
      },
      {
        "id": "migraine",
        "name": "মাইগ্রেন (Migraine)",
        "remedies": [
          {
            "name": "Sanguinaria Can",
            "description": "এই রোগের ক্ষেত্রে Sanguinaria Can একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডানদিকের মাথাব্যথা, যা ঘাড় থেকে শুরু হয়ে ডান চোখের ওপর এসে স্থির হয়।",
              "ঋতুস্রাবের সময় মাথাব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ডান দিকে, সকালে, আলোতে।",
              "amelioration": "ঘুমালে, অন্ধকারে, বমি হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanguinaria Can ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Spigelia",
            "description": "এই রোগের ক্ষেত্রে Spigelia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বামদিকের মাথাব্যথা, যা ঘাড় থেকে শুরু হয়ে বাম চোখের ওপর আসে।",
              "হৃৎপিণ্ডের ধড়ফড়ানির সাথে মাথাব্যথা।",
              "চোখ থেকে পানি পড়ে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, সূর্যালোকের সাথে বাড়ে।",
              "amelioration": "ডান পাশে শুলে, মাথা উঁচু রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Spigelia ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Iris Versicolor",
            "description": "এই রোগের ক্ষেত্রে Iris Versicolor একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথাব্যথার সাথে প্রচুর টক বমি।",
              "সপ্তাহান্তে বা ছুটির দিনে মাথাব্যথা (Sunday headache)।",
              "পুরো মাথায় জ্বালা করা ব্যথা।"
            ],
            "mentalSymptoms": [
              "চোখের সামনে ঝাপসা দেখা বা আলোর ঝলকানি।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বিশ্রামে।",
              "amelioration": "ক্রমাগত নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Iris Versicolor ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sanguinaria",
            "description": "এই রোগের ক্ষেত্রে Sanguinaria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডান দিকের মাথাব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ডান দিকে, সকালে, আলোতে।",
              "amelioration": "ঘুমালে, অন্ধকারে, বমি হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanguinaria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "hair_fall",
        "name": "চুল পড়া (Hair Fall)",
        "remedies": [
          {
            "name": "Acid Phos",
            "description": "এই রোগের ক্ষেত্রে Acid Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চুল খুব তাড়াতাড়ি পেকে যায়।",
              "শারীরিক দুর্বলতা ও উদাসীনতা।",
              "জ্বরের পর চুল পড়া।",
              "মাথার চুল পাতলা হয়ে যাওয়া।"
            ],
            "mentalSymptoms": [
              "শোক, দুঃখ বা মানসিক আঘাতের পর চুল পড়া।"
            ],
            "modalities": {
              "aggravation": "পরিশ্রমে, কথা বললে, সঙ্গীতে, শোক বা দুশ্চিন্তায়।",
              "amelioration": "সামান্য ঘুমে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Acid Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রসবের পর বা পেটের অসুখের পর চুল পড়া।",
              "মাথার মাঝখান থেকে চুল পড়া শুরু হয়।",
              "চুল অকালে পেকে যায়।",
              "গরম খাবার পছন্দ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Wiesbaden",
            "description": "এই রোগের ক্ষেত্রে Wiesbaden একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চুল পড়া বন্ধ করতে এবং নতুন চুল গজাতে সাহায্য করে।",
              "চুল খুব দ্রুত বড় হয়।",
              "চুলের গোড়া শক্ত করে।",
              "চুলের রঙ কালো করতে সাহায্য করে।",
              "চুল রুক্ষ ও শুষ্ক হলে কার্যকরী।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঋতুস্রাবের সময়।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Wiesbaden ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphoric Acid",
            "description": "এই রোগের ক্ষেত্রে Phosphoric Acid একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চুল পাতলা হয়ে যাওয়া",
              "অল্প বয়সে চুল পেকে যাওয়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মানসিক শোক বা দুশ্চিন্তার পর চুল পড়া"
            ],
            "modalities": {
              "aggravation": "পরিশ্রমে, কথা বললে, সঙ্গীতে, শোক বা দুশ্চিন্তায়।",
              "amelioration": "সামান্য ঘুমে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Phosphoric Acid ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "dandruff",
        "name": "খুশকি (Dandruff)",
        "remedies": [
          {
            "name": "Thuja Occ",
            "description": "এই রোগের ক্ষেত্রে Thuja Occ একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদা আঁশের মতো খুশকি।",
              "চুল শুকনো ও রুক্ষ।",
              "মাথায় চুলকানি।",
              "টিকা নেওয়ার পর সমস্যা বাড়লে।",
              "চুল চটচটে ও জট পাকানো।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja Occ ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Sulph",
            "description": "এই রোগের ক্ষেত্রে Kali Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হলুদ রঙের চটচটে খুশকি।",
              "মাথা গরম ও চুলকানি।",
              "চুল পড়ে যাওয়া।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় বা গরম ঘরে বৃদ্ধি।",
              "amelioration": "খোলা বাতাসে আরাম।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sanicula",
            "description": "এই রোগের ক্ষেত্রে Sanicula একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথায় প্রচুর খুশকি, যা চিরুনি দিয়ে আঁচড়ালে পড়ে।",
              "ঘাড় ও মাথায় ঘাম।",
              "শিশুদের রিকেট বা হাড়ের সমস্যায়।",
              "পায়ের তলা জ্বালা করে।"
            ],
            "mentalSymptoms": [
              "মাথার ত্বক ও চুল খুব নোংরা মনে হয়।"
            ],
            "modalities": {
              "aggravation": "নিচের দিকে নামলে, ঠান্ডা বাতাসে, স্পর্শে।",
              "amelioration": "খোলা বাতাসে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanicula ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      }
    ]
  },
  {
    "id": "stomach",
    "name": "পেট (Stomach)",
    "diseases": [
      {
        "id": "gastritis",
        "name": "গ্যাস্ট্রিক (Gastritis)",
        "remedies": [
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "খাওয়ার এক-দুই ঘণ্টা পর পেটে ব্যথা ও ভারবোধ।",
              "বমি করার চেষ্টা করে কিন্তু বমি হয় না।",
              "মশলাযুক্ত ও গুরুপাক খাবার খাওয়ার পর সমস্যা।",
              "পেট ফাঁপা, পেটে চাপ দিলে ব্যথা।",
              "কোষ্ঠকাঠিন্য ও ঘন ঘন পায়খানার বেগ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Carbo Veg",
            "description": "এই রোগের ক্ষেত্রে Carbo Veg একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটের ওপরের অংশে প্রচুর গ্যাস জমে।",
              "সহজপাচ্য খাবারও হজম হতে চায় না।",
              "বাতাসের জন্য তীব্র আকাঙ্ক্ষা (Fan desire)।"
            ],
            "mentalSymptoms": [
              "পেট ফুলে থাকে, মনে হয় ফেটে যাবে।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, চর্বিযুক্ত খাবারে, গরমে।",
              "amelioration": "বাতাস করলে, ঢেকুর তুললে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Carbo Veg ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটের নিচের অংশে গ্যাস জমে।",
              "সামান্য খেলেই পেট ভরে যায় (Easy satiety)।",
              "গরম খাবার পছন্দ করে।",
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "China",
            "description": "এই রোগের ক্ষেত্রে China একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পুরো পেট গ্যাসে পূর্ণ থাকে।",
              "ফল বা দুধ খেলে সমস্যা বাড়ে।",
              "পেট ড্রামের মতো ফুলে থাকে।",
              "দুর্বলতা ও রক্তশূন্যতা থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য স্পর্শে, তরল পদার্থ নির্গত হলে।",
              "amelioration": "জোরে চাপ দিলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, China ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চর্বিযুক্ত খাবার, ঘি, মাখন খাওয়ার পর গ্যাস্ট্রিক।",
              "মুখে তিতা স্বাদ, বিশেষ করে সকালে।",
              "জলপিপাসা একদম থাকে না।",
              "পেট গুড়গুড় করে ও ব্যথা করে।",
              "খোলা বাতাসে থাকলে ভালো লাগে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          }
        ]
      },
      {
        "id": "acidity",
        "name": "এসিডিটি (Acidity)",
        "remedies": [
          {
            "name": "Robinia",
            "description": "এই রোগের ক্ষেত্রে Robinia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড টক ঢেকুর ও টক বমি।",
              "মাথাব্যথা ও পেটে ব্যথা।",
              "দাঁত টক হয়ে যায়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "টক খাওয়ার ইচ্ছা কিন্তু খেলে বাড়ে।",
              "amelioration": "লক্ষণ অনুযায়ী পরিবর্তনশীল।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Robinia ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Natrum Phos",
            "description": "এই রোগের ক্ষেত্রে Natrum Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জিভের পেছনে হলুদ লেপ।",
              "টক ঢেকুর ও টক বমি।",
              "শিশুদের দুধ তোলার সমস্যা।",
              "অতিরিক্ত মিষ্টি খাওয়ার ফলে এসিডিটি।",
              "পেটে কৃমি থাকার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "চিনি বা মিষ্টি খেলে, দুধ পানে, বজ্রপাতের সময়।",
              "amelioration": "ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Natrum Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Iris Versicolor",
            "description": "এই রোগের ক্ষেত্রে Iris Versicolor একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গলা থেকে পেট পর্যন্ত জ্বালাপোড়া।",
              "টক ও তিতা বমি।",
              "মাথাব্যথার সাথে এসিডিটি।",
              "ডায়রিয়ার সাথে এসিডিটি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বিশ্রামে।",
              "amelioration": "ক্রমাগত নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Iris Versicolor ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেট ফেঁপে থাকা",
              "সামান্য খেলেই পেট ভরে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "indigestion",
        "name": "বদহজম (Indigestion)",
        "remedies": [
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চর্বিযুক্ত খাবার, ঘি, মাখন খেয়ে বদহজম।",
              "মুখে তিতা স্বাদ।",
              "পানি পিপাসা থাকে না।",
              "পেট ভার ও গুড়গুড় করে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Antim Crud",
            "description": "এই রোগের ক্ষেত্রে Antim Crud একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জিভ সাদা লেপাবৃত (Milky white tongue)।",
              "অতিরিক্ত খাওয়ার ফলে বদহজম।",
              "টক ও আচার খাওয়ার ইচ্ছা।",
              "বমি বমি ভাব ও বমি।"
            ],
            "mentalSymptoms": [
              "মেজাজ খিটখিটে ও কারো দিকে তাকালে রেগে যায়।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত গরমে, ঠান্ডা জলে স্নান করলে, রোদে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে, গরম জলে স্নানে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antim Crud ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "China",
            "description": "এই রোগের ক্ষেত্রে China একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেট গ্যাসে পূর্ণ থাকে।",
              "ফল বা দুধ খেলে হজম হয় না।",
              "দুর্বলতা ও রক্তশূন্যতা।",
              "খাওয়ার পর পেট ফাঁপে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য স্পর্শে, তরল পদার্থ নির্গত হলে।",
              "amelioration": "জোরে চাপ দিলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, China ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে প্রচুর গ্যাস হয়",
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা",
              "গরম খাবার খেতে পছন্দ করে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Antimonium Crudum",
            "description": "এই রোগের ক্ষেত্রে Antimonium Crudum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত খাওয়ার পর বদহজম",
              "জিহ্বায় সাদা প্রলেপ",
              "টক জাতীয় খাবার খাওয়ার পর সমস্যা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত গরমে, ঠান্ডা জলে স্নান করলে, রোদে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে, গরম জলে স্নানে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Crudum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "nausea",
        "name": "বমি বমি ভাব (Nausea)",
        "remedies": [
          {
            "name": "Ipecac",
            "description": "এই রোগের ক্ষেত্রে Ipecac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জিভ পরিষ্কার।",
              "লালা ঝরে।",
              "গর্ভাবস্থায় বমি।",
              "অতিরিক্ত খাওয়ার পর বমি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র গরমে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ipecac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বাসি বা পচা খাবার খেয়ে বমি (Food poisoning)।",
              "বমির সাথে জ্বালাপোড়া।",
              "অল্প অল্প পানি পান করার ইচ্ছা।",
              "দুর্বলতা ও অস্থিরতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Cocculus Ind",
            "description": "এই রোগের ক্ষেত্রে Cocculus Ind একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গাড়িতে বা নৌকায় চড়লে বমি (Motion sickness)।",
              "খাবারের গন্ধ সহ্য করতে পারে না।",
              "মাথা ঘোরা ও বমি।",
              "রাত জাগার পর বমি ভাব।",
              "বিছানা থেকে মাথা তুললে বমি আসে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গাড়িতে বা নৌকায় চড়লে, ঘুম কম হলে।",
              "amelioration": "ঘরের ভেতর, শুয়ে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Cocculus Ind ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Tabacum",
            "description": "এই রোগের ক্ষেত্রে Tabacum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড বমি বমি ভাব",
              "মুখ ফ্যাকাশে হয়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "চোখ খুললে, গরমে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Tabacum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "ulcer",
        "name": "আলসার (Ulcer)",
        "remedies": [
          {
            "name": "Argentum Nit",
            "description": "এই রোগের ক্ষেত্রে Argentum Nit একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা।",
              "খাওয়ার পর পেট ফাঁপে ও ব্যথা করে।"
            ],
            "mentalSymptoms": [
              "পেটে মনে হয় কাঁচের টুকরো ফুটে আছে।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাতে, মিষ্টি খেলে।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Argentum Nit ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Bich",
            "description": "এই রোগের ক্ষেত্রে Kali Bich একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে গোল আকারের আলসার।",
              "খাওয়ার পরপরই পেটে ভারবোধ।",
              "জিভ চকচকে ও লাল।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bich ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hydrastis",
            "description": "এই রোগের ক্ষেত্রে Hydrastis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে খালি বোধ (Gone feeling)।",
              "কোষ্ঠকাঠিন্য ও হজমে দুর্বলতা।",
              "জিভ বড় ও হলুদ লেপযুক্ত।",
              "লিভারের সমস্যা।",
              "খাওয়ার প্রতি অনীহা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, গরমে।",
              "amelioration": "চাপে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hydrastis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Argentum Nitricum",
            "description": "এই রোগের ক্ষেত্রে Argentum Nitricum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে তীব্র ব্যথা",
              "উদ্বেগ ও দুশ্চিন্তার সাথে পেটের সমস্যা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাতে, মিষ্টি খেলে।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Argentum Nitricum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Bichromicum",
            "description": "এই রোগের ক্ষেত্রে Kali Bichromicum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটের একটি নির্দিষ্ট বিন্দুতে ব্যথা",
              "খাওয়ার পরপরই ব্যথা শুরু হয়",
              "বমির সাথে আঠালো শ্লেষ্মা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bichromicum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      }
    ]
  },
  {
    "id": "respiratory",
    "name": "শ্বাসতন্ত্র (Respiratory)",
    "diseases": [
      {
        "id": "cough",
        "name": "কাশি (Cough)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শুষ্ক, শক্ত কাশি, বুকে ব্যথা লাগে।",
              "কাশির সময় বুকে হাত দিয়ে চেপে ধরতে হয়।",
              "গরম ঘরে বা নড়াচড়ায় কাশি বাড়ে।",
              "প্রচণ্ড জলপিপাসা।",
              "গলা শুকিয়ে কাঠ হয়ে থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Drosera",
            "description": "এই রোগের ক্ষেত্রে Drosera একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কুকুর-কাশি (Whooping cough) বা ঘং ঘং শব্দযুক্ত কাশি।",
              "রাতে শুলে কাশি বাড়ে, বালিশে মাথা রাখলেই কাশি শুরু হয়।",
              "কাশতে কাশতে বমি হয়ে যায়।",
              "গলায় সুড়সুড় করে কাশি আসে।"
            ],
            "mentalSymptoms": [
              "কাশির সময় মনে হয় দম বন্ধ হয়ে আসবে।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতের পর, শুয়ে থাকলে, কথা বললে।",
              "amelioration": "উঠে বসলে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Drosera ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Antim Tart",
            "description": "এই রোগের ক্ষেত্রে Antim Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে প্রচুর কফ জমে, ঘড়ঘড় শব্দ হয়।",
              "কাশি দিলে কফ উঠতে চায় না।",
              "শ্বাসকষ্ট, বাতাস নেওয়ার জন্য ফ্যানের বাতাস চায়।",
              "জিভ সাদা লেপাবৃত থাকে।",
              "শিশু ও বয়স্কদের জন্য বিশেষ উপযোগী।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antim Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Rumex",
            "description": "এই রোগের ক্ষেত্রে Rumex একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গলার নিচে গর্তে (Suprasternal fossa) সুড়সুড় করে কাশি।",
              "ঠান্ডা বাতাস লাগলেই কাশি শুরু হয়।",
              "কথা বললে বা লম্বা শ্বাস নিলে কাশি বাড়ে।",
              "শুকনো, একটানা কাশি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে, কথা বললে, সন্ধ্যায় ও রাতে।",
              "amelioration": "মুখ ঢেকে রাখলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Rumex ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Ipecac",
            "description": "এই রোগের ক্ষেত্রে Ipecac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কাশির সাথে সব সময় বমি বমি ভাব থাকে।",
              "বুকের ভেতর কফ জমে সাঁই সাঁই শব্দ হয়।",
              "কাশতে কাশতে শরীর শক্ত হয়ে যায়।",
              "জিভ পরিষ্কার, কোনো লেপ থাকে না।",
              "দম বন্ধ করা কাশি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র গরমে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ipecac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "bronchitis",
        "name": "ব্রঙ্কাইটিস (Bronchitis)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শুকনো কাশি ও বুকে ব্যথা।",
              "কাশির সময় বুক চেপে ধরতে হয়।",
              "প্রচণ্ড পিপাসা।",
              "কোষ্ঠকাঠিন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Antim Tart",
            "description": "এই রোগের ক্ষেত্রে Antim Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে প্রচুর কফ জমে, ঘড়ঘড় শব্দ হয়।",
              "কাশি দিলে কফ উঠতে চায় না।",
              "শ্বাসকষ্ট ও তন্দ্রাচ্ছন্ন ভাব।",
              "বয়স্ক ও শিশুদের জন্য উপযোগী।",
              "বমি বমি ভাব।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antim Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphorus",
            "description": "এই রোগের ক্ষেত্রে Phosphorus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে চাপ ও ভারবোধ।",
              "ঠান্ডা পানি পানের ইচ্ছা।",
              "সন্ধ্যায় স্বরভঙ্গ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বাম পাশে শুলে, ঠান্ডা বাতাসে।",
              "amelioration": "ডান পাশে শুলে, ঠান্ডা খাবারে, ঘুমালে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ফসফরাসের রোগী লম্বা, ছিপছিপে এবং রক্তস্রাব প্রবণ হয়। এদের ঠান্ডা জল, আইসক্রিম এবং লবণাক্ত খাবারের প্রতি প্রবল আকাঙ্ক্ষা থাকে।"
          },
          {
            "name": "Antimonium Tart",
            "description": "এই রোগের ক্ষেত্রে Antimonium Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে প্রচুর কফ জমে থাকে",
              "কাশতে কাশতে শ্বাসকষ্ট হয়",
              "কফ সহজে বের হতে চায় না",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Spongia Tosta",
            "description": "এই রোগের ক্ষেত্রে Spongia Tosta একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শুকনো ও কর্কশ কাশি",
              "গলা শুকিয়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতের আগে, শুয়ে থাকলে, মিষ্টি খেলে।",
              "amelioration": "গরম পানীয় খেলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Spongia Tosta ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "pneumonia",
        "name": "নিউমোনিয়া (Pneumonia)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগের প্রথম অবস্থায়, হঠাৎ জ্বর ও বুকে ব্যথা।",
              "শুকনো কাশি ও শ্বাসকষ্ট।",
              "ঠান্ডা বাতাস লেগে রোগ শুরু।",
              "চামড়া গরম ও শুকনো।"
            ],
            "mentalSymptoms": [
              "অস্থিরতা ও মৃত্যুভয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দ্বিতীয় অবস্থায় যখন বুকে ব্যথা ও কাশি থাকে।",
              "কাশির সাথে রক্তমিশ্রিত কফ।",
              "জিভ শুকনো ও সাদা।",
              "প্রচণ্ড পিপাসা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগের শেষ অবস্থায় বা যখন রোগ সারে না।",
              "নাক দিয়ে শ্বাস নিতে কষ্ট, নাকের পাখা ওঠানামা করে (Fan-like motion)।",
              "ডান ফুসফুস বেশি আক্রান্ত।",
              "পেটে গ্যাস ও কোষ্ঠকাঠিন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Antimonium Tart",
            "description": "এই রোগের ক্ষেত্রে Antimonium Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে ঘড়ঘড় শব্দ",
              "শ্বাস নিতে কষ্ট হয়",
              "রোগী দুর্বল হয়ে পড়ে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "tonsillitis",
        "name": "টনসিল (Tonsillitis)",
        "remedies": [
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "টনসিল লাল, গরম ও ফোলা।",
              "গলায় দপদপ করা ব্যথা।",
              "ঢোক গিলতে কষ্ট, বিশেষ করে পানি।",
              "জ্বর ও মাথাব্যথা।",
              "ডানদিকের টনসিল বেশি আক্রান্ত।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          },
          {
            "name": "Merc Sol",
            "description": "এই রোগের ক্ষেত্রে Merc Sol একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মুখে প্রচুর লালা ও দুর্গন্ধ।",
              "জিভ ভেজা ও দাঁতের ছাপযুক্ত।",
              "গলা ব্যথা কানে ছড়িয়ে পড়ে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঘামলে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Merc Sol ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phytolacca",
            "description": "এই রোগের ক্ষেত্রে Phytolacca একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "টনসিল কালচে লাল।",
              "গলা ব্যথা কানে যায়।",
              "শরীর ব্যথা ও অস্থিরতা।",
              "ডানদিকের টনসিল ফোলা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, গরম পানীয়তে।",
              "amelioration": "শুষ্ক আবহাওয়ায়, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Phytolacca ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hepar Sulph",
            "description": "এই রোগের ক্ষেত্রে Hepar Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গলায় কাঁটা ফোটার মতো ব্যথা",
              "গলা ব্যথার সাথে পুঁজ হওয়ার সম্ভাবনা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য ঠান্ডায়, স্পর্শে, রাতে।",
              "amelioration": "গরমে, মাথা ঢেকে রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hepar Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "sinusitis",
        "name": "সাইনোসাইটিস (Sinusitis)",
        "remedies": [
          {
            "name": "Kali Bich",
            "description": "এই রোগের ক্ষেত্রে Kali Bich একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাক দিয়ে আঠালো, সুতার মতো সর্দি বের হয়।",
              "নাকের গোড়ায় ব্যথা ও চাপ।",
              "সকালে হাঁচি ও সর্দি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bich ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Silicea",
            "description": "এই রোগের ক্ষেত্রে Silicea একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দীর্ঘদিনের সাইনাসের সমস্যা।",
              "নাক বন্ধ থাকে।",
              "পুঁজ পড়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, সকালে, অমাবস্যা-পূর্ণিমায়।",
              "amelioration": "গরমে, মাথা ঢেকে রাখলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অত্যন্ত শীতকাতর, পুঁজ সৃষ্টিকারী প্রবণতা এবং অমাবস্যা-পূর্ণিমায় বৃদ্ধি সাইলেসিয়ার বৈশিষ্ট্য। এদের পায়ের ঘামে দুর্গন্ধ থাকে।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হলুদ বা সবুজ রঙের ঘন সর্দি।",
              "নাক বন্ধ থাকে, বিশেষ করে রাতে বা গরম ঘরে।",
              "ঘ্রাণশক্তি নষ্ট।",
              "তৃষ্ণাহীনতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Kali Bichromicum",
            "description": "এই রোগের ক্ষেত্রে Kali Bichromicum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাকের গোড়ায় চাপবোধ ও ব্যথা",
              "আঠালো ও হলদেটে শ্লেষ্মা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bichromicum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "skin",
    "name": "চামড়া (Skin)",
    "diseases": [
      {
        "id": "eczema",
        "name": "একজিমা (Eczema)",
        "remedies": [
          {
            "name": "Graphites",
            "description": "এই রোগের ক্ষেত্রে Graphites একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আক্রান্ত স্থান থেকে মধুর মতো চটচটে রস বের হয়।",
              "চামড়া ফাটা, মোটা ও শক্ত।",
              "কানের পেছনে বা ভাঁজে একজিমা।",
              "অতিরিক্ত চুলকানি, গরমে বাড়ে।",
              "মোটা ও কোষ্ঠকাঠিন্য ধাতের রোগীদের জন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, গরমে।",
              "amelioration": "অন্ধকারে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Graphites ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sulphur",
            "description": "এই রোগের ক্ষেত্রে Sulphur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড চুলকানি, চুলকানোর পর জ্বালা করে।",
              "রাতে বিছানার গরমে চুলকানি বাড়ে।",
              "চামড়া অপরিষ্কার, নোংরা ও রুক্ষ।",
              "গোসল করতে চায় না।",
              "মাথার তালু ও পায়ের তালু গরম থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিশ্রামে, বিছানার গরমে, সকালে (১১টায়)।",
              "amelioration": "শুষ্ক ও উষ্ণ আবহাওয়ায়, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, সালফার হলো অ্যান্টি-সোরিক ওষুধের রাজা। রোগীর স্নান করতে অনীহা, অপরিষ্কার থাকতে পছন্দ এবং সকাল ১১টায় পেটে খালি বোধ থাকে।"
          },
          {
            "name": "Rhus Tox",
            "description": "এই রোগের ক্ষেত্রে Rhus Tox একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ছোট ছোট ফুসকুড়ি, অত্যন্ত চুলকানি।",
              "আক্রান্ত স্থান লাল ও ফোলা।",
              "চুলকানোর পর অস্থিরতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রথম নড়াচড়ায়, আর্দ্র ঠান্ডায়, বিশ্রামে।",
              "amelioration": "ক্রমাগত নড়াচড়ায়, গরমে, শুষ্ক আবহাওয়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, প্রথম নড়াচড়ায় বৃদ্ধি কিন্তু ক্রমাগত নড়াচড়ায় উপশম রাস টক্সের প্রধান লক্ষণ। এটি স্যাঁতস্যাঁতে আবহাওয়ায় বৃদ্ধি পায়।"
          },
          {
            "name": "Mezereum",
            "description": "এই রোগের ক্ষেত্রে Mezereum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথায় বা মুখে একজিমা, পুরু মামড়ি পড়ে।",
              "মামড়ির নিচে পুঁজ জমে।",
              "চুলকানি ও জ্বালা, রাতে বাড়ে।",
              "ঠান্ডা বাতাসে বা ধুলে বাড়ে।",
              "চামড়া খুব স্পর্শকাতর।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, স্পর্শে।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Mezereum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Petroleum",
            "description": "এই রোগের ক্ষেত্রে Petroleum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শীতকালে একজিমা বাড়ে বা দেখা দেয়।",
              "চামড়া ফেটে যায় এবং রক্ত বের হয়।",
              "হাত ও পায়ের আঙুলের ডগায় ফাটা।",
              "চামড়া খসখসে ও শুকনো।",
              "গাড়িতে চড়লে বমি ভাব (অন্য লক্ষণের সাথে)।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গাড়িতে চড়লে, শীতে।",
              "amelioration": "গরমে, শুষ্ক আবহাওয়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Petroleum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "psoriasis",
        "name": "সোরিয়াসিস (Psoriasis)",
        "remedies": [
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চামড়া শুকনো, খসখসে ও আঁশযুক্ত।",
              "অস্থিরতা ও দুশ্চিন্তা।",
              "পিপাসা অল্প কিন্তু ঘন ঘন।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Graphites",
            "description": "এই রোগের ক্ষেত্রে Graphites একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চামড়া মোটা, শক্ত ও ফাটা।",
              "আক্রান্ত স্থান থেকে চটচটে রস বের হয়।",
              "কোষ্ঠকাঠিন্য থাকে।",
              "মোটা ও শীতকাতর রোগী।",
              "ঋতুস্রাবের সময় সমস্যা বাড়ে (মহিলাদের)।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, গরমে।",
              "amelioration": "অন্ধকারে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Graphites ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গোলাকার বা চাকা চাকা দাগ (Ringworm-like)।",
              "চামড়া বাদামী বা হলুদ রঙের।",
              "বিষণ্ণতা ও উদাসীনতা।",
              "মহিলাদের জরায়ুর সমস্যার সাথে সোরিয়াসিস।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Arsenicum Album",
            "description": "এই রোগের ক্ষেত্রে Arsenicum Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ত্বক শুষ্ক ও খসখসে",
              "তীব্র চুলকানি ও জ্বালাপোড়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Arsenicum Album ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "ringworm",
        "name": "দাদ (Ringworm)",
        "remedies": [
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শরীরের ভাঁজে বা সন্ধিস্থলে দাদ।",
              "চুলকানি ও জ্বালা।",
              "বসন্তকালে প্রাদুর্ভাব।",
              "বাদামী রঙের দাগ।",
              "ঘামাচির মতো ছোট ছোট দানা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Tellurium",
            "description": "এই রোগের ক্ষেত্রে Tellurium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সারা শরীরে দাদ, বিশেষ করে পিঠে ও মুখে।",
              "লাল রঙের চাকা চাকা দাগ।",
              "মাছের আঁশটে গন্ধ।",
              "চুলকানি ও জ্বালা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিশ্রামে, রাতে, ঠান্ডা আবহাওয়ায়, স্পর্শে।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Tellurium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bacillinum",
            "description": "এই রোগের ক্ষেত্রে Bacillinum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বংশগত বা দীর্ঘদিনের দাদ।",
              "বারবার ফিরে আসে।",
              "শুকনো ও খসখসে চামড়া।",
              "রাতের বেলা দাঁত কিড়মিড় করা।",
              "ঠান্ডা লাগার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, ভোরে, ঠান্ডা বাতাসে।",
              "amelioration": "গরমে, নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Bacillinum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "acne",
        "name": "ব্রণ (Acne)",
        "remedies": [
          {
            "name": "Berberis Aquifolium",
            "description": "এই রোগের ক্ষেত্রে Berberis Aquifolium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মুখে ছোট ছোট ফুসকুড়ি বা ব্রণ।",
              "চামড়া খসখসে ও অপরিষ্কার।",
              "ব্রণের দাগ দূর করতে কার্যকরী।",
              "মাদার টিংচার হিসেবে ব্যবহার্য।",
              "পেটের সমস্যার সাথে ব্রণ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Berberis Aquifolium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বয়ঃসন্ধিকালে মেয়েদের ব্রণ।",
              "চর্বিযুক্ত খাবার খেলে বাড়ে।",
              "মাসিক অনিয়মিত হলে।",
              "পানি পিপাসা কম।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Kali Brom",
            "description": "এই রোগের ক্ষেত্রে Kali Brom একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শক্ত ও পুঁজযুক্ত ব্রণ।",
              "ব্রণ থেকে গর্ত হয়ে যায়।",
              "স্মৃতিশক্তি দুর্বল।",
              "হাত-পা অনবরত নাড়াচাড়া করা।"
            ],
            "mentalSymptoms": [
              "মুখমন্ডল, বুক ও কাঁধে ব্রণ।"
            ],
            "modalities": {
              "aggravation": "মানসিক পরিশ্রমে, চিন্তায়, বয়ঃসন্ধিকালে।",
              "amelioration": "শারীরিক পরিশ্রমে, ব্যস্ত থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Brom ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Calcarea Sulph",
            "description": "এই রোগের ক্ষেত্রে Calcarea Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্রণে পুঁজ থাকে",
              "ব্রণ সহজে শুকাতে চায় না",
              "হলদেটে পুঁজ বের হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, বদ্ধ ঘরে, খসড়া বাতাসে।",
              "amelioration": "খোলা বাতাসে, স্নান করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Calcarea Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hepar Sulph",
            "description": "এই রোগের ক্ষেত্রে Hepar Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্রণে তীব্র ব্যথা",
              "স্পর্শ করলে ব্যথা লাগে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য ঠান্ডায়, স্পর্শে, রাতে।",
              "amelioration": "গরমে, মাথা ঢেকে রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hepar Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "warts",
        "name": "আঁচিল (Warts)",
        "remedies": [
          {
            "name": "Thuja Occ",
            "description": "এই রোগের ক্ষেত্রে Thuja Occ একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ফুলকপির মতো দেখতে আঁচিল।",
              "শরীরের যেকোনো স্থানে হতে পারে।",
              "আঁচিল থেকে রক্তপাত হলে।",
              "টিকা নেওয়ার পর আঁচিল।",
              "চামড়া তেলতেলে ও ঘামযুক্ত।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja Occ ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Causticum",
            "description": "এই রোগের ক্ষেত্রে Causticum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঙুলের ডগায় বা নখের পাশে আঁচিল।",
              "বড়, চ্যাপ্টা ও শক্ত আঁচিল।",
              "আঁচিলে ব্যথা ও জ্বালা।",
              "পুরানো পোড়া দাগের ওপর আঁচিল।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "শুষ্ক ও ঠান্ডা বাতাসে।",
              "amelioration": "আর্দ্র আবহাওয়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Causticum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nitric Acid",
            "description": "এই রোগের ক্ষেত্রে Nitric Acid একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সোনালী বা হলুদ রঙের আঁচিল।",
              "আঁচিল থেকে সহজে রক্তপাত হয়।",
              "খোঁচা লাগার মতো ব্যথা।",
              "ঠোঁট বা যৌনাঙ্গে আঁচিল।",
              "প্রস্রাবে কড়া গন্ধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, স্পর্শে।",
              "amelioration": "গাড়িতে চড়লে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Nitric Acid ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Antimonium Crudum",
            "description": "এই রোগের ক্ষেত্রে Antimonium Crudum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়ের তলায় শক্ত আঁচিল",
              "হাঁটতে গেলে ব্যথা লাগে",
              "আঁচিলের উপরিভাগ অমসৃণ",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত গরমে, ঠান্ডা জলে স্নান করলে, রোদে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে, গরম জলে স্নানে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Crudum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "mind",
    "name": "মন (Mind)",
    "diseases": [
      {
        "id": "anxiety",
        "name": "দুশ্চিন্তা ও ভয় (Anxiety)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ তীব্র ভয়, মৃত্যুর ভয়।",
              "ভিড়ের মধ্যে বা রাস্তা পার হতে ভয়।",
              "অস্থিরতা, এক জায়গায় স্থির থাকতে পারে না।",
              "বুক ধড়ফড় করে।",
              "কোনো নির্দিষ্ট ঘটনার পর ভয়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Argentum Nit",
            "description": "এই রোগের ক্ষেত্রে Argentum Nit একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পরীক্ষা বা ইন্টারভিউয়ের আগে ভয় (Anticipatory anxiety)।",
              "উঁচু স্থান থেকে পড়ার ভয়।",
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা।",
              "ভয়ে বা টেনশনে পায়খানার বেগ হয়।"
            ],
            "mentalSymptoms": [
              "সময় খুব ধীরে যাচ্ছে মনে হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাতে, মিষ্টি খেলে।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Argentum Nit ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অত্যন্ত খুতখুতে স্বভাবের (Fastidious)।"
            ],
            "mentalSymptoms": [
              "মৃত্যুভয়, মনে করে ওষুধ খেয়ে লাভ নেই।",
              "একা থাকতে ভয় পায়।",
              "আত্মহত্যার চিন্তা কিন্তু মৃত্যুর ভয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Gelsemium",
            "description": "এই রোগের ক্ষেত্রে Gelsemium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ভয়ে হাত-পা কাঁপে ও অবশ হয়ে আসে।",
              "জনসমক্ষে কথা বলতে ভয় (Stage fright)।",
              "দুঃসংবাদ শোনার পর অসুস্থতা।",
              "ভয়ে পায়খানা বা প্রস্রাব হয়ে যায়।",
              "তন্দ্রাচ্ছন্ন ভাব ও নিস্তেজতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, মানসিক উত্তেজনায়, সকাল ১০টায়।",
              "amelioration": "প্রচুর প্রস্রাবের পর, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, দুর্বলতা, তন্দ্রাচ্ছন্নতা, তৃষ্ণাহীনতা এবং কাঁপুনি জেলসেমিয়ামের প্রধান লক্ষণ। এটি স্নায়বিক দুর্বলতা ও জ্বরের দারুণ ওষুধ।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আত্মবিশ্বাসের অভাব, কিন্তু বাইরে সাহস দেখায়।",
              "নতুন দায়িত্ব নিতে ভয় পায়।",
              "বিকেলে (৪টা-৮টা) ভয় বা দুশ্চিন্তা বাড়ে।",
              "স্মৃতিশক্তি দুর্বল, নাম ভুলে যায়।",
              "একা থাকতে ভয় পায় না, কিন্তু পাশের ঘরে লোক চায়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          }
        ]
      },
      {
        "id": "depression",
        "name": "বিষণ্ণতা (Depression)",
        "remedies": [
          {
            "name": "Aurum Met",
            "description": "এই রোগের ক্ষেত্রে Aurum Met একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জীবনের প্রতি বিতৃষ্ণা, আত্মহত্যার ইচ্ছা।",
              "উচ্চ রক্তচাপ ও হৃদরোগের সমস্যা।",
              "গান-বাজনা ভালো লাগে না।"
            ],
            "mentalSymptoms": [
              "নিজেকে অপরাধী মনে করে।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, শীতে, মানসিক পরিশ্রমে।",
              "amelioration": "গরমে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aurum Met ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Ignatia",
            "description": "এই রোগের ক্ষেত্রে Ignatia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রিয়জনের মৃত্যু বা বিচ্ছেদের পর বিষণ্ণতা।",
              "দীর্ঘশ্বাস ফেলে (Sighing)।",
              "গলায় দলা আটকে থাকার অনুভূতি (Globus hystericus)।"
            ],
            "mentalSymptoms": [
              "মেজাজ পরিবর্তনশীল, এই হাসে এই কাঁদে।"
            ],
            "modalities": {
              "aggravation": "সকালে, কফিতে, তামাকের ধোঁয়ায়, মানসিক শোকে।",
              "amelioration": "খাওয়ার সময়, চাপ দিলে, দীর্ঘশ্বাস ফেললে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, শোক, দুঃখ বা মানসিক আঘাতের ফলে সৃষ্ট উপসর্গে ইগ্নেশিয়া অদ্বিতীয়। এদের লক্ষণগুলো পরস্পরবিরোধী ও পরিবর্তনশীল হয়।"
          },
          {
            "name": "Natrum Mur",
            "description": "এই রোগের ক্ষেত্রে Natrum Mur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লবণ খাওয়ার ইচ্ছা।",
              "রোদে মাথাব্যথা।",
              "একান্ত নির্জনে থাকতে পছন্দ করে।"
            ],
            "mentalSymptoms": [
              "চাপা দুঃখ, কারো সামনে কাঁদতে চায় না।"
            ],
            "modalities": {
              "aggravation": "সকাল ১০টা-১১টায়, রোদে, সান্ত্বনায়।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা স্নানে, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, অতিরিক্ত লবণ খাওয়ার ইচ্ছা, রোদে মাথাব্যথা এবং সান্ত্বনায় বৃদ্ধি নেট্রাম মিউরের প্রধান লক্ষণ। রোগী অন্তর্মুখী স্বভাবের হয়।"
          },
          {
            "name": "Aurum Metallicum",
            "description": "এই রোগের ক্ষেত্রে Aurum Metallicum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "তীব্র বিষণ্ণতা ও আত্মহত্যার ইচ্ছা",
              "রাতে ঘুম হয় না",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "নিজেকে অপরাধী মনে হয়"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, শীতে, মানসিক পরিশ্রমে।",
              "amelioration": "গরমে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aurum Metallicum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "insomnia",
        "name": "অনিদ্রা (Insomnia)",
        "remedies": [
          {
            "name": "Coffea Cruda",
            "description": "এই রোগের ক্ষেত্রে Coffea Cruda একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথায় নানা চিন্তা ও আনন্দের কারণে ঘুম আসে না।",
              "ইন্দ্রিয় খুব সজাগ, সামান্য শব্দে ঘুম ভাঙ্গে।",
              "কফি পানের অপব্যবহার।",
              "দাঁত ব্যথা বা স্নায়বিক ব্যথা।"
            ],
            "mentalSymptoms": [
              "মানসিক ও শারীরিক অস্থিরতা।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত আনন্দে, শব্দে, রাতে।",
              "amelioration": "ঘুমালে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Coffea Cruda ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রাত ৩টার পর ঘুম ভেঙ্গে যায় আর আসে না।",
              "সকালে ঘুম থেকে উঠলে ক্লান্তি।",
              "দুপুরের খাওয়ার পর ঘুম পায়।"
            ],
            "mentalSymptoms": [
              "অতিরিক্ত মানসিক পরিশ্রম ও নেশা।",
              "খিটখিটে মেজাজ।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Passiflora",
            "description": "এই রোগের ক্ষেত্রে Passiflora একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বয়স্কদের বা শিশুদের অনিদ্রা।",
              "খিঁচুনি বা ধনুষ্টংকারের পর অনিদ্রা।",
              "মাদার টিংচার হিসেবে বেশি কার্যকরী।",
              "ক্লান্তি ও দুর্বলতা।"
            ],
            "mentalSymptoms": [
              "মানসিক উত্তেজনা ও দুশ্চিন্তা।"
            ],
            "modalities": {
              "aggravation": "রাতে, মানসিক পরিশ্রমে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Passiflora ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "anger",
        "name": "রাগ (Anger)",
        "remedies": [
          {
            "name": "Chamomilla",
            "description": "এই রোগের ক্ষেত্রে Chamomilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কোলে চড়লে শান্ত থাকে।",
              "ব্যথা সহ্য করতে পারে না।"
            ],
            "mentalSymptoms": [
              "অত্যন্ত রাগী ও খিটখিটে, বিশেষ করে শিশুদের।",
              "যা চায় তাই দিতে হয়, না দিলে কান্না।",
              "রাগের সময় এক গাল লাল, অন্য গাল ফ্যাকাশে।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাগে, রাতে, কফিতে।",
              "amelioration": "কোলে নিয়ে হাঁটলে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অত্যন্ত রাগী, খিটখিটে এবং ব্যথায় অসহিষ্ণু রোগীদের জন্য এটি উপযোগী। কোলে নিলে বা ঘুরলে এরা শান্ত হয়।"
          },
          {
            "name": "Staphysagria",
            "description": "এই রোগের ক্ষেত্রে Staphysagria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অপমানিত হওয়ার পর অসুস্থতা।",
              "জিনিসপত্র ছুঁড়ে মারে।",
              "যৌন চিন্তা বেশি।",
              "চোখের পাতায় অঞ্জনী হওয়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রাগ চেপে রাখে (Suppressed anger)।"
            ],
            "modalities": {
              "aggravation": "রাগে, অপমানে, স্পর্শে।",
              "amelioration": "বিশ্রামে, রাতে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Staphysagria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রতিবাদ সহ্য করতে পারে না।",
              "অন্যের ভুল ধরে।",
              "কাজকর্মে খুব ধীরগতি পছন্দ করে না।",
              "হিংসুটে ও ঝগড়াটে।"
            ],
            "mentalSymptoms": [
              "শব্দ ও আলোতে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "memory_loss",
        "name": "স্মৃতিশক্তি হ্রাস (Memory Loss)",
        "remedies": [
          {
            "name": "Anacardium",
            "description": "এই রোগের ক্ষেত্রে Anacardium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আত্মবিশ্বাসের অভাব।",
              "কাউকে বিশ্বাস করতে পারে না।",
              "খালি পেটে মাথাব্যথা।"
            ],
            "mentalSymptoms": [
              "হঠাৎ করে সব ভুলে যায়, এমনকি নিজের নামও।",
              "পরীক্ষার আগে ভয় ও স্মৃতিভ্রম।"
            ],
            "modalities": {
              "aggravation": "খালি পেটে, মানসিক পরিশ্রমে।",
              "amelioration": "খাওয়ার সময় ও পরে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Anacardium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Baryta Carb",
            "description": "এই রোগের ক্ষেত্রে Baryta Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শিশুদের ও বয়স্কদের স্মৃতিশক্তি দুর্বল।",
              "বুদ্ধি কম ও বোকা প্রকৃতির।",
              "ঠান্ডা লাগার প্রবণতা।",
              "গ্ল্যান্ড ফোলার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "অপরিচিত লোক দেখলে ভয় পায়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, পা ধুলে।",
              "amelioration": "একা থাকলে, গরম পোশাকে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Baryta Carb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Phos",
            "description": "এই রোগের ক্ষেত্রে Kali Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "স্নায়বিক দুর্বলতার কারণে স্মৃতিশক্তি কম।",
              "বিষণ্ণতা ও ক্লান্তি।",
              "ছাত্র-ছাত্রীদের জন্য ভালো টনিক।",
              "ক্ষুধা লাগে কিন্তু খেতে পারে না।"
            ],
            "mentalSymptoms": [
              "মানসিক পরিশ্রমে মাথাব্যথা।"
            ],
            "modalities": {
              "aggravation": "মানসিক ও শারীরিক পরিশ্রমে, ঠান্ডায়, ভোরে।",
              "amelioration": "গরমে, বিশ্রামে, খাওয়ার পর।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লেখার সময় বানান ভুল করে",
              "আত্মবিশ্বাসের অভাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "কথা বলার সময় সঠিক শব্দ মনে পড়ে না"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "chest",
    "name": "বুক (Chest)",
    "diseases": [
      {
        "id": "asthma",
        "name": "হাঁপানি (Asthma)",
        "remedies": [
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাঝরাতে শ্বাসকষ্ট বাড়ে, রোগী শুতে পারে না।",
              "বসে থাকলে বা সামনের দিকে ঝুঁকলে আরাম।",
              "অস্থিরতা ও মৃত্যুভয় থাকে।"
            ],
            "mentalSymptoms": [
              "অস্থিরতা ও মৃত্যুভয় থাকে।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Ipecac",
            "description": "এই রোগের ক্ষেত্রে Ipecac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকের ভেতর কফ জমে সাঁই সাঁই শব্দ হয়।",
              "শ্বাসকষ্টের সাথে বমি বমি ভাব।",
              "কাশি দিলে কফ উঠতে চায় না।",
              "জিভ পরিষ্কার থাকে।",
              "দম বন্ধ হয়ে আসার উপক্রম।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র গরমে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ipecac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Natrum Sulph",
            "description": "এই রোগের ক্ষেত্রে Natrum Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কাশির সাথে সবুজ রঙের কফ ওঠে।",
              "বিষণ্ণতা ও আত্মহত্যার ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরবেলা (৪টা-৫টা) শ্বাসকষ্ট বাড়ে।",
              "amelioration": "বুক চেপে ধরলে আরাম বোধ হয়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Natrum Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Blatta Orientalis",
            "description": "এই রোগের ক্ষেত্রে Blatta Orientalis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ধুলোবালি বা স্যাঁতসেঁতে আবহাওয়ায় হাঁপানি",
              "কাশির সাথে প্রচুর কফ",
              "স্থূলকায় রোগীদের জন্য বেশি উপযোগী",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, স্যাঁতসেঁতে আবহাওয়ায়, ধুলোবালিতে।",
              "amelioration": "কফ উঠলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Blatta Orientalis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "palpitation",
        "name": "বুক ধড়ফড় (Palpitation)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দ্রুত ও কঠিন নাড়ি।",
              "বুকে চাপ বোধ ও শ্বাসকষ্ট।"
            ],
            "mentalSymptoms": [
              "হঠাৎ ভয় বা আতঙ্কের কারণে বুক ধড়ফড়।",
              "মৃত্যুভয় ও অস্থিরতা।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Digitalis",
            "description": "এই রোগের ক্ষেত্রে Digitalis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাড়ি অত্যন্ত ধীর ও অনিয়মিত।",
              "নীলচে ত্বক ও শ্বাসকষ্ট।",
              "হঠাৎ দুর্বলতা ও মূর্ছা যাওয়া।"
            ],
            "mentalSymptoms": [
              "মনে হয় হৃদপিণ্ড বন্ধ হয়ে যাবে।"
            ],
            "modalities": {
              "aggravation": "উঠে বসলে, খাওয়ার পর।",
              "amelioration": "শুয়ে থাকলে, খালি পেটে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Digitalis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aconite",
            "description": "এই রোগের ক্ষেত্রে Aconite একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে শুরু হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "ভয় বা আতঙ্কের কারণে বুক ধড়ফড়",
              "মৃত্যুভয় থাকে"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Spigelia",
            "description": "এই রোগের ক্ষেত্রে Spigelia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "তীব্র বুক ধড়ফড়, বাইরে থেকে দেখা যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, সূর্যালোকের সাথে বাড়ে।",
              "amelioration": "ডান পাশে শুলে, মাথা উঁচু রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Spigelia ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "chest_pain",
        "name": "বুক ব্যথা (Chest Pain)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে সুঁই ফোটানোর মতো ব্যথা।",
              "শুকনো কাশি ও পিপাসা।",
              "কোষ্ঠকাঠিন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Ranunculus Bulb",
            "description": "এই রোগের ক্ষেত্রে Ranunculus Bulb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকের পেশিতে ব্যথা।",
              "শ্বাস নিতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে বৃদ্ধি।",
              "amelioration": "লক্ষণ অনুযায়ী পরিবর্তনশীল।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ranunculus Bulb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে সুঁচ ফোটার মতো ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Kali Carb",
            "description": "এই রোগের ক্ষেত্রে Kali Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে তীক্ষ্ণ ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাত ২টা থেকে ৩টায় ব্যথা বাড়ে",
              "amelioration": "সামনে ঝুঁকে বসলে আরাম"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Carb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "pleurisy",
        "name": "প্লুরিসি (Pleurisy)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগের শুরুতে জ্বর ও বুকে ব্যথা।",
              "শুকনো কাশি।",
              "ঠান্ডা বাতাস লেগে রোগ।",
              "দ্রুত নাড়ি।"
            ],
            "mentalSymptoms": [
              "অস্থিরতা ও মৃত্যুভয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে সুঁই ফোটানোর মতো ব্যথা।",
              "শুকনো কাশি ও পিপাসা।",
              "গভীর শ্বাস নিতে পারে না।"
            ],
            "mentalSymptoms": [
              "মেজাজ খিটখিটে।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গভীর শ্বাস নিতে কষ্ট হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Aconite",
            "description": "এই রোগের ক্ষেত্রে Aconite একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ঠান্ডা লাগার পর হঠাৎ প্লুরিসি",
              "তীব্র জ্বর ও অস্থিরতা",
              "বুকে সুঁচ ফোটার মতো ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Squilla",
            "description": "এই রোগের ক্ষেত্রে Squilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কাশির সাথে বুকে তীব্র ব্যথা",
              "কাশতে কাশতে চোখ দিয়ে পানি পড়ে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে কাশির প্রকোপ বাড়ে",
              "amelioration": "লক্ষণ অনুযায়ী পরিবর্তনশীল।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Squilla ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "tuberculosis",
        "name": "যক্ষ্মা (Tuberculosis)",
        "remedies": [
          {
            "name": "Tuberculinum",
            "description": "এই রোগের ক্ষেত্রে Tuberculinum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বংশগত যক্ষ্মার ইতিহাস।",
              "ঘন ঘন ঠান্ডা লাগার প্রবণতা।",
              "রাতে ঘাম ও জ্বর।",
              "এক জায়গায় স্থির থাকতে পারে না।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বদ্ধ ঘরে, আর্দ্র আবহাওয়ায়, পরিশ্রমে।",
              "amelioration": "খোলা বাতাসে, শুষ্ক আবহাওয়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Tuberculinum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphorus",
            "description": "এই রোগের ক্ষেত্রে Phosphorus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লম্বা ও সরু গড়নের রোগী।",
              "কাশির সাথে রক্ত পড়া।",
              "বুকে চাপ ও ভারবোধ।",
              "ঠান্ডা পানি পানের ইচ্ছা।",
              "সন্ধ্যায় স্বরভঙ্গ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বাম পাশে শুলে, ঠান্ডা বাতাসে।",
              "amelioration": "ডান পাশে শুলে, ঠান্ডা খাবারে, ঘুমালে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ফসফরাসের রোগী লম্বা, ছিপছিপে এবং রক্তস্রাব প্রবণ হয়। এদের ঠান্ডা জল, আইসক্রিম এবং লবণাক্ত খাবারের প্রতি প্রবল আকাঙ্ক্ষা থাকে।"
          },
          {
            "name": "Calcarea Carb",
            "description": "এই রোগের ক্ষেত্রে Calcarea Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মোটা ও থলথলে গড়নের রোগী",
              "অল্প পরিশ্রমে হাঁপিয়ে ওঠে",
              "মাথায় প্রচুর ঘাম হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, আর্দ্র আবহাওয়ায়, শারীরিক পরিশ্রমে।",
              "amelioration": "শুষ্ক আবহাওয়ায়, ব্যথার দিকে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মোটা, থলথলে এবং শীতকাতর রোগীদের জন্য এটি উপযোগী। এদের ডিম খাওয়ার প্রবল ইচ্ছা থাকে এবং মাথায় প্রচুর ঘাম হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      }
    ]
  },
  {
    "id": "abdomen",
    "name": "পেট (Abdomen)",
    "diseases": [
      {
        "id": "colic",
        "name": "পেট ব্যথা (Colic)",
        "remedies": [
          {
            "name": "Colocynth",
            "description": "এই রোগের ক্ষেত্রে Colocynth একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাভির চারপাশে তীব্র ব্যথা।",
              "ব্যথা হঠাৎ আসে এবং হঠাৎ যায়।"
            ],
            "mentalSymptoms": [
              "রাগের পর পেটে ব্যথা।"
            ],
            "modalities": {
              "aggravation": "রাগে, খাওয়ার পর।",
              "amelioration": "পেটে চাপ দিলে, সামনের দিকে ঝুঁকে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Colocynth ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Dioscorea",
            "description": "এই রোগের ক্ষেত্রে Dioscorea একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা এক জায়গায় থাকে না, ছড়িয়ে পড়ে।",
              "নাভির চারপাশ থেকে ব্যথা শুরু হয়।",
              "গ্যাস ও পেট ফাঁপা থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে বা সন্ধ্যায় ব্যথা বাড়ে।",
              "amelioration": "পেট পেছনের দিকে বাঁকা করলে আরাম।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Dioscorea ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Mag Phos",
            "description": "এই রোগের ক্ষেত্রে Mag Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা বিদ্যুৎ চমকানোর মতো আসে।",
              "পেট ফাঁপা ও ঢেকুর থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে, শরীর বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Mag Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Magnesia Phos",
            "description": "এই রোগের ক্ষেত্রে Magnesia Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে তীব্র খিল ধরা ব্যথা",
              "ব্যথায় রোগী কুঁকড়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Magnesia Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "diarrhea",
        "name": "ডায়রিয়া (Diarrhea)",
        "remedies": [
          {
            "name": "Podophyllum",
            "description": "এই রোগের ক্ষেত্রে Podophyllum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচুর পরিমাণে দুর্গন্ধযুক্ত ও পানির মতো পায়খানা।",
              "সকালে পায়খানার বেগ বেশি থাকে।",
              "পায়খানার আগে পেটে গড়গড় শব্দ।",
              "পায়খানার পর খুব দুর্বলতা।",
              "দাঁত ওঠার সময় শিশুদের ডায়রিয়া।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, দাঁত ওঠার সময়।",
              "amelioration": "পেটে চাপ দিয়ে শুলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Podophyllum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aloe Soc",
            "description": "এই রোগের ক্ষেত্রে Aloe Soc একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার বেগ ধরে রাখা যায় না।",
              "পায়খানার সাথে প্রচুর গ্যাস বের হয়।",
              "খাওয়ার পরপরই পায়খানার বেগ।",
              "পায়ুপথে জ্বালা ও ভারবোধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, খাওয়ার পর।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aloe Soc ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aloe Socotrina",
            "description": "এই রোগের ক্ষেত্রে Aloe Socotrina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার বেগ ধরে রাখতে পারে না",
              "পেটে প্রচুর গ্যাস ও ব্যথা",
              "খাওয়ার পরপরই পায়খানার বেগ আসে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, খাওয়ার পর।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aloe Socotrina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Veratrum Album",
            "description": "এই রোগের ক্ষেত্রে Veratrum Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডায়রিয়ার সাথে প্রচুর বমি",
              "শরীর ঠান্ডা হয়ে যায় ও প্রচুর ঘাম হয়",
              "তীব্র দুর্বলতা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, ঠান্ডায়, ঋতুস্রাবের আগে ও পরে।",
              "amelioration": "গরমে, হাঁটলে, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Veratrum Album ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "constipation",
        "name": "কোষ্ঠকাঠিন্য (Constipation)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানা খুব শক্ত, শুকনো ও পোড়া পোড়া।",
              "পায়খানা করতে খুব কষ্ট হয়।",
              "প্রচণ্ড পিপাসা।",
              "মাথাব্যথা থাকে।"
            ],
            "mentalSymptoms": [
              "মেজাজ খিটখিটে।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ঘন ঘন পায়খানার বেগ কিন্তু পরিষ্কার হয় না।",
              "অনিয়মিত জীবনযাপন ও মশলাযুক্ত খাবার।",
              "শীতকাতর রোগী।",
              "বসে কাজ করা লোকদের সমস্যা।"
            ],
            "mentalSymptoms": [
              "পায়খানার পর মনে হয় আরও হবে।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Alumina",
            "description": "এই রোগের ক্ষেত্রে Alumina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার কোনো বেগ থাকে না",
              "নরম পায়খানাও অনেক কোঁত দিয়ে করতে হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আলু খেলে, সকালে ঘুম থেকে উঠলে।",
              "amelioration": "সন্ধ্যায়, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Alumina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানা খুব বড়, শক্ত ও শুষ্ক",
              "পায়খানা করতে অনেক কষ্ট হয়",
              "প্রচুর জলপিপাসা থাকে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "dysentery",
        "name": "আমাশয় (Dysentery)",
        "remedies": [
          {
            "name": "Merc Sol",
            "description": "এই রোগের ক্ষেত্রে Merc Sol একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার সাথে রক্ত ও আম।",
              "পায়খানার পরেও বেগ থাকে (Tenesmus)।",
              "ঘাম ও লালা ঝরে।",
              "পেটে কামড়ানি ব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঘামলে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Merc Sol ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদা আমাশয়, পেটে ব্যথা।",
              "বারবার পায়খানার বেগ।",
              "শীতকাতর।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Merc Cor",
            "description": "এই রোগের ক্ষেত্রে Merc Cor একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আমাশয়ের সাথে তীব্র কোঁথানি",
              "পায়খানার সাথে রক্ত ও শ্লেষ্মা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, রাতে, প্রস্রাব বা পায়খানার পর।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Merc Cor ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aloe Socotrina",
            "description": "এই রোগের ক্ষেত্রে Aloe Socotrina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জেলি বা থকথকে শ্লেষ্মাযুক্ত আমাশয়",
              "পেটে প্রচুর গ্যাস ও ব্যথা",
              "পায়খানার বেগ ধরে রাখতে পারে না",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, খাওয়ার পর।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aloe Socotrina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "appendicitis",
        "name": "অ্যাপেন্ডিসাইটিস (Appendicitis)",
        "remedies": [
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ তীব্র ব্যথা, ডানদিকের তলপেটে।",
              "দপদপ করা ব্যথা।"
            ],
            "mentalSymptoms": [
              "জ্বর ও মুখমন্ডল লাল।",
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড পিপাসা ও কোষ্ঠকাঠিন্য।",
              "শুকনো কাশি।",
              "পেট শক্ত হয়ে থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Iris Tenax",
            "description": "এই রোগের ক্ষেত্রে Iris Tenax একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অ্যাপেন্ডিসাইটিসের তীব্র ব্যথা",
              "ব্যথার স্থানে প্রচণ্ড স্পর্শকাতরতা",
              "ডান দিকের তলপেটে ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিশ্রামে।",
              "amelioration": "নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Iris Tenax ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগী ব্যথার দিকে শুয়ে থাকতে চায়",
              "কোষ্ঠকাঠিন্য থাকে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "urinary",
    "name": "মূত্রতন্ত্র (Urinary System)",
    "diseases": [
      {
        "id": "uti",
        "name": "প্রস্রাবে জ্বালাপোড়া (UTI)",
        "remedies": [
          {
            "name": "Cantharis",
            "description": "এই রোগের ক্ষেত্রে Cantharis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের আগে, সময় ও পরে তীব্র জ্বালা।",
              "ফোঁটা ফোঁটা প্রস্রাব হয়।",
              "প্রস্রাবের বেগ সব সময় থাকে।",
              "রক্তমিশ্রিত প্রস্রাব হতে পারে।",
              "তলপেটে ব্যথা ও ভারবোধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের সময়, কফি পানে, স্পর্শে।",
              "amelioration": "ঘর্ষণে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, প্রস্রাবের আগে, চলাকালীন এবং পরে প্রচণ্ড জ্বালা ও কাটার মতো ব্যথা ক্যান্থারিসের প্রধান লক্ষণ।"
          },
          {
            "name": "Apis Mel",
            "description": "এই রোগের ক্ষেত্রে Apis Mel একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের পরিমাণ খুব কম ও গরম।",
              "প্রস্রাবে জ্বালা ও হুল ফোটানো ব্যথা।",
              "তৃষ্ণাহীনতা ও চোখের নিচে ফোলা।",
              "ঘুমের মধ্যে প্রস্রাব হয়ে যাওয়া।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, স্পর্শে, বিকাল ৩টায়, বদ্ধ ঘরে।",
              "amelioration": "ঠান্ডা প্রয়োগে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হুল ফোটানোর মতো ব্যথা, জ্বালা, ফুলে যাওয়া এবং গরমে বৃদ্ধি এপিস মেলের নির্দেশক। রোগীর তৃষ্ণা থাকে না।"
          },
          {
            "name": "Sarsaparilla",
            "description": "এই রোগের ক্ষেত্রে Sarsaparilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব শেষ হওয়ার সময় তীব্র ব্যথা।",
              "বসে প্রস্রাব করতে কষ্ট, দাঁড়িয়ে করলে সহজ।",
              "প্রস্রাবে সাদা তলানি পড়ে।",
              "ডান কিডনিতে ব্যথা।"
            ],
            "mentalSymptoms": [
              "শিশুদের প্রস্রাবের আগে ও পরে কান্না।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাব শেষে, বসন্তকালে।",
              "amelioration": "দাঁড়িয়ে প্রস্রাব করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sarsaparilla ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Apis Mellifica",
            "description": "এই রোগের ক্ষেত্রে Apis Mellifica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবে হুল ফোটার মতো ব্যথা",
              "প্রস্রাব খুব কম হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, স্পর্শে, বিকাল ৩টায়, বদ্ধ ঘরে।",
              "amelioration": "ঠান্ডা প্রয়োগে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হুল ফোটানোর মতো ব্যথা, জ্বালা, ফুলে যাওয়া এবং গরমে বৃদ্ধি এপিস মেলের নির্দেশক। রোগীর তৃষ্ণা থাকে না।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "kidney_stone",
        "name": "কিডনি পাথর (Kidney Stone)",
        "remedies": [
          {
            "name": "Berberis Vulgaris",
            "description": "এই রোগের ক্ষেত্রে Berberis Vulgaris একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বাম কিডনিতে পাথর।",
              "ব্যথা কিডনি থেকে মূত্রনালী দিয়ে নিচে নামে।",
              "প্রস্রাবে তলানি পড়ে।",
              "কোমরে ব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়, দাঁড়িয়ে থাকলে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Berberis Vulgaris ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডান কিডনিতে পাথর।",
              "প্রস্রাবে লাল বালুকণা (Red sand)।",
              "পেটে গ্যাস ও কোষ্ঠকাঠিন্য।",
              "গরম খাবার পছন্দ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Sarsaparilla",
            "description": "এই রোগের ক্ষেত্রে Sarsaparilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব শেষ হওয়ার সময় তীব্র ব্যথা",
              "প্রস্রাবে সাদা বালির মতো তলানি",
              "দাঁড়িয়ে প্রস্রাব করলে সহজে হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাব শেষে, বসন্তকালে।",
              "amelioration": "দাঁড়িয়ে প্রস্রাব করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sarsaparilla ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "hematuria",
        "name": "প্রস্রাবে রক্ত (Hematuria)",
        "remedies": [
          {
            "name": "Cantharis",
            "description": "এই রোগের ক্ষেত্রে Cantharis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের সাথে রক্ত ও তীব্র জ্বালা।",
              "বারবার প্রস্রাবের বেগ।",
              "তলপেটে ব্যথা।",
              "কিডনি প্রদাহ।",
              "অস্থিরতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের সময়, কফি পানে, স্পর্শে।",
              "amelioration": "ঘর্ষণে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, প্রস্রাবের আগে, চলাকালীন এবং পরে প্রচণ্ড জ্বালা ও কাটার মতো ব্যথা ক্যান্থারিসের প্রধান লক্ষণ।"
          },
          {
            "name": "Terebinthina",
            "description": "এই রোগের ক্ষেত্রে Terebinthina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব ধোঁয়াটে বা কালচে রঙের।",
              "কিডনিতে জ্বালা ও ব্যথা।",
              "প্রস্রাবের পরিমাণ কম।",
              "জিভ চকচকে লাল।",
              "পেট ফাঁপা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, আর্দ্র আবহাওয়ায়, শুয়ে থাকলে।",
              "amelioration": "নড়াচড়ায়, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Terebinthina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hamamelis",
            "description": "এই রোগের ক্ষেত্রে Hamamelis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের সাথে প্রচুর কালচে রক্তপাত",
              "কোনো ব্যথা থাকে না",
              "রক্তপাতের কারণে দুর্বলতা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, গরমে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hamamelis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "incontinence",
        "name": "অসাড়ে প্রস্রাব (Incontinence)",
        "remedies": [
          {
            "name": "Causticum",
            "description": "এই রোগের ক্ষেত্রে Causticum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হাঁচি, কাশি বা হাসলে প্রস্রাব বেরিয়ে যায়।",
              "প্রথম ঘুমের মধ্যে শিশুদের বিছানায় প্রস্রাব।",
              "প্রস্রাবের বেগ ধরে রাখা যায় না।",
              "প্যারালাইসিস রোগীদের জন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "শুষ্ক ও ঠান্ডা বাতাসে।",
              "amelioration": "আর্দ্র আবহাওয়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Causticum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রথম ঘুমের মধ্যে বিছানায় প্রস্রাব।",
              "মহিলাদের জরায়ুর সমস্যার সাথে।",
              "প্রস্রাব ঘোলা ও দুর্গন্ধযুক্ত।",
              "উদাসী ও বিষণ্ণ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Equisetum",
            "description": "এই রোগের ক্ষেত্রে Equisetum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শিশুদের বিছানায় প্রস্রাব করা",
              "প্রস্রাবের পর মূত্রথলিতে ব্যথা",
              "প্রস্রাব পরিষ্কার ও প্রচুর পরিমাণে হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের শেষে, নড়াচড়ায়, স্পর্শে।",
              "amelioration": "শুয়ে থাকলে, বিকেলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Equisetum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kreosotum",
            "description": "এই রোগের ক্ষেত্রে Kreosotum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গভীর ঘুমের মধ্যে বিছানায় প্রস্রাব",
              "প্রস্রাবে খুব দুর্গন্ধ",
              "হঠাৎ করে প্রস্রাবের বেগ আসে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে, বিশ্রামে, দাঁত ওঠার সময়।",
              "amelioration": "গরমে, নড়াচড়ায়, গরম খাবারে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kreosotum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "retention",
        "name": "প্রস্রাব আটকে যাওয়া (Retention)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "তলপেটে ব্যথা ও অস্থিরতা।",
              "শিশুদের প্রস্রাব বন্ধ হলে।",
              "জ্বর ও পিপাসা।"
            ],
            "mentalSymptoms": [
              "ভয় বা ঠান্ডা লেগে প্রস্রাব বন্ধ।",
              "মৃত্যুভয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Arnica Mont",
            "description": "এই রোগের ক্ষেত্রে Arnica Mont একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাত লাগার পর প্রস্রাব বন্ধ।",
              "প্রসবের পর প্রস্রাব আটকে গেলে।",
              "প্রস্রাবের রাস্তায় কালশিটে দাগ।",
              "ব্যথা ও স্পর্শকাতরতা।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Aconite",
            "description": "এই রোগের ক্ষেত্রে Aconite একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শিশুদের প্রস্রাব আটকে গেলে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "ভয় বা ঠান্ডা লাগার পর প্রস্রাব আটকে যাওয়া",
              "তীব্র অস্থিরতা ও কান্না"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Cantharis",
            "description": "এই রোগের ক্ষেত্রে Cantharis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব আটকে যাওয়ার সাথে তীব্র জ্বালাপোড়া",
              "বারবার প্রস্রাবের বেগ কিন্তু প্রস্রাব হয় না",
              "তলপেটে ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের সময়, কফি পানে, স্পর্শে।",
              "amelioration": "ঘর্ষণে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, প্রস্রাবের আগে, চলাকালীন এবং পরে প্রচণ্ড জ্বালা ও কাটার মতো ব্যথা ক্যান্থারিসের প্রধান লক্ষণ।"
          },
          {
            "name": "Clematis",
            "description": "এই রোগের ক্ষেত্রে Clematis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব ফোঁটা ফোঁটা করে পড়ে",
              "প্রস্রাব করতে অনেক সময় লাগে",
              "প্রস্রাবের ধারা সরু হয়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঠান্ডা জলে ধুলে।",
              "amelioration": "খোলা বাতাসে, ঘাম হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Clematis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      }
    ]
  },
  {
    "id": "female",
    "name": "মহিলা রোগ (Female Diseases)",
    "diseases": [
      {
        "id": "menstrual_problems",
        "name": "মাসিকের সমস্যা (Menstrual Problems)",
        "remedies": [
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিক অনিয়মিত, দেরিতে হয় ও পরিমাণে কম।",
              "মাসিকের সময় পেটে ব্যথা।",
              "পায়ে ভিজলে বা ঠান্ডা লাগলে মাসিক বন্ধ।"
            ],
            "mentalSymptoms": [
              "কান্নাকাটি করে ও সান্ত্বনায় শান্ত হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিক অনিয়মিত ও অল্প।",
              "স্বামীর প্রতি ও পরিবারের প্রতি উদাসীন।",
              "যৌন মিলনে অনিহা।",
              "মুখে মেছতার দাগ।"
            ],
            "mentalSymptoms": [
              "তলপেটে ভারবোধ, মনে হয় সব বেরিয়ে আসবে (Bearing down)।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Cimicifuga",
            "description": "এই রোগের ক্ষেত্রে Cimicifuga একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিকের সময় তীব্র ব্যথা",
              "ব্যথা এক পাশ থেকে অন্য পাশে ছড়ায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঋতুস্রাবের সময়, ঠান্ডায়।",
              "amelioration": "গরমে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Cimicifuga ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "leucorrhea",
        "name": "সাদাস্রাব (Leucorrhea)",
        "remedies": [
          {
            "name": "Calcarea Carb",
            "description": "এই রোগের ক্ষেত্রে Calcarea Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দুধের মতো সাদা স্রাব।",
              "মোটা ও থলথলে মহিলা।",
              "পায়ে ঠান্ডা লাগে ও ঘামে।",
              "ডিম খাওয়ার ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, আর্দ্র আবহাওয়ায়, শারীরিক পরিশ্রমে।",
              "amelioration": "শুষ্ক আবহাওয়ায়, ব্যথার দিকে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মোটা, থলথলে এবং শীতকাতর রোগীদের জন্য এটি উপযোগী। এদের ডিম খাওয়ার প্রবল ইচ্ছা থাকে এবং মাথায় প্রচুর ঘাম হয়।"
          },
          {
            "name": "Alumina",
            "description": "এই রোগের ক্ষেত্রে Alumina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচুর পরিমাণে স্বচ্ছ ও আঠালো স্রাব।",
              "স্রাব এত বেশি যে গোড়ালি পর্যন্ত গড়িয়ে পড়ে।",
              "কোষ্ঠকাঠিন্য ও দুর্বলতা।",
              "আলু বা অপাচ্য খাবার খাওয়ার ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আলু খেলে, সকালে ঘুম থেকে উঠলে।",
              "amelioration": "সন্ধ্যায়, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Alumina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kreosotum",
            "description": "এই রোগের ক্ষেত্রে Kreosotum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদাস্রাব খুব দুর্গন্ধযুক্ত ও ক্ষয়কারক",
              "স্রাব যেখানে লাগে সেখানে চুলকায় ও জ্বলে",
              "হলদেটে রঙের স্রাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে, বিশ্রামে, দাঁত ওঠার সময়।",
              "amelioration": "গরমে, নড়াচড়ায়, গরম খাবারে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kreosotum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "dysmenorrhea",
        "name": "মাসিকের ব্যথা (Dysmenorrhea)",
        "remedies": [
          {
            "name": "Mag Phos",
            "description": "এই রোগের ক্ষেত্রে Mag Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিকের সময় তীব্র ব্যথা।",
              "ব্যথা হঠাৎ আসে ও যায়।",
              "রক্ত জমাট ও কালো।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে, শরীর বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Mag Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Chamomilla",
            "description": "এই রোগের ক্ষেত্রে Chamomilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা অসহ্য, রোগী ছটফট করে।",
              "রক্ত কালো ও চাকা চাকা।",
              "এক গাল লাল, অন্য গাল ফ্যাকাশে।"
            ],
            "mentalSymptoms": [
              "রাগী ও খিটখিটে মেজাজ।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাগে, রাতে, কফিতে।",
              "amelioration": "কোলে নিয়ে হাঁটলে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অত্যন্ত রাগী, খিটখিটে এবং ব্যথায় অসহিষ্ণু রোগীদের জন্য এটি উপযোগী। কোলে নিলে বা ঘুরলে এরা শান্ত হয়।"
          },
          {
            "name": "Magnesia Phos",
            "description": "এই রোগের ক্ষেত্রে Magnesia Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিকের সময় তীব্র খিল ধরা ব্যথা",
              "ব্যথায় রোগী কুঁকড়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Magnesia Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Colocynthis",
            "description": "এই রোগের ক্ষেত্রে Colocynthis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথার সাথে বমি বমি ভাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাগে, খাওয়ার পর।",
              "amelioration": "পেটে চাপ দিলে, সামনের দিকে ঝুঁকে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Colocynthis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Viburnum Opulus",
            "description": "এই রোগের ক্ষেত্রে Viburnum Opulus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা কোমর থেকে শুরু হয়ে উরুর দিকে নামে",
              "মাসিক শুরু হওয়ার আগে তীব্র ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Viburnum Opulus ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "menopause",
        "name": "মেনোপজ (Menopause)",
        "remedies": [
          {
            "name": "Lachesis",
            "description": "এই রোগের ক্ষেত্রে Lachesis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ গরম লাগা (Hot flashes)।",
              "গলায় কাপড় সহ্য হয় না।",
              "বাম দিক থেকে ডান দিকে রোগ ছড়ায়।",
              "অতিরিক্ত কথা বলার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঘুমের পর, বাম দিকে, গরমে, স্পর্শে।",
              "amelioration": "স্রাব নির্গত হলে, ঠান্ডা পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Lachesis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ গরম লাগা ও ঘাম।",
              "তলপেটে ভারবোধ।",
              "বিষণ্ণতা ও উদাসীনতা।",
              "যৌন মিলনে কষ্ট।",
              "একা থাকতে চায়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Sanguinaria",
            "description": "এই রোগের ক্ষেত্রে Sanguinaria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডান দিকের মাথাব্যথা",
              "হাতের তালু ও পায়ের তলায় জ্বালাপোড়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মুখমন্ডল লাল হয়ে গরম ভাপ ওঠে"
            ],
            "modalities": {
              "aggravation": "ডান দিকে, সকালে, আলোতে।",
              "amelioration": "ঘুমালে, অন্ধকারে, বমি হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanguinaria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "infertility",
        "name": "বন্ধ্যাত্ব (Infertility)",
        "remedies": [
          {
            "name": "Natrum Carb",
            "description": "এই রোগের ক্ষেত্রে Natrum Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জরায়ুর মুখ থেকে বীর্য বেরিয়ে যায়।",
              "স্নায়বিক দুর্বলতা ও শব্দে চমকে ওঠে।",
              "গরম সহ্য করতে পারে না।",
              "পায়ে দুর্বলতা।",
              "হজমে গণ্ডগোল।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মানসিক পরিশ্রমে, রোদে, গরমে, দুধ পানে।",
              "amelioration": "নড়াচড়ায়, খাওয়ার পর, কান চুলকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Natrum Carb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Borax",
            "description": "এই রোগের ক্ষেত্রে Borax একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদাস্রাব ডিমের লালার মতো।",
              "জরায়ুর মুখ গরম থাকে।",
              "মুখে ঘা হওয়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "নিচে নামতে ভয় (Downward motion)।",
              "শব্দে ভয় পায়।"
            ],
            "modalities": {
              "aggravation": "নিচের দিকে নামলে (যেমন সিঁড়ি দিয়ে), হঠাৎ শব্দে।",
              "amelioration": "চাপ দিলে, সন্ধ্যা ১১টার পর।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Borax ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Natrum Mur",
            "description": "এই রোগের ক্ষেত্রে Natrum Mur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিক অনিয়মিত",
              "সহবাসে ব্যথা বা অনীহা",
              "বিষণ্ণতা ও একাকীত্ব পছন্দ করে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকাল ১০টা-১১টায়, রোদে, সান্ত্বনায়।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা স্নানে, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, অতিরিক্ত লবণ খাওয়ার ইচ্ছা, রোদে মাথাব্যথা এবং সান্ত্বনায় বৃদ্ধি নেট্রাম মিউরের প্রধান লক্ষণ। রোগী অন্তর্মুখী স্বভাবের হয়।"
          },
          {
            "name": "Agnus Castus",
            "description": "এই রোগের ক্ষেত্রে Agnus Castus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "যৌন ইচ্ছা সম্পূর্ণ লোপ পাওয়া",
              "অতিরিক্ত যৌন মিলনের ফলে দুর্বলতা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মানসিক অবসাদ"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Agnus Castus ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "male",
    "name": "পুরুষ রোগ (Male Diseases)",
    "diseases": [
      {
        "id": "sexual_weakness",
        "name": "যৌন দুর্বলতা (Sexual Weakness)",
        "remedies": [
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ইচ্ছা আছে কিন্তু ক্ষমতা নেই।",
              "অকাল বার্ধক্য ও স্মৃতিশক্তি হ্রাস।",
              "গরম খাবার পছন্দ ও মিষ্টি প্রিয়।"
            ],
            "mentalSymptoms": [
              "মানসিক দুশ্চিন্তা ও আত্মবিশ্বাসের অভাব।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Agnus Castus",
            "description": "এই রোগের ক্ষেত্রে Agnus Castus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত যৌন অপব্যবহারের ফলে দুর্বলতা।",
              "লিঙ্গ ছোট ও শিথিল হয়ে যাওয়া।",
              "স্মৃতিশক্তি খুব দুর্বল ও বিষণ্ণতা।",
              "অকাল বার্ধক্য ও চুল পাকা।"
            ],
            "mentalSymptoms": [
              "যৌন ইচ্ছা ও ক্ষমতা উভয়ই নষ্ট।"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Agnus Castus ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Selenium",
            "description": "এই রোগের ক্ষেত্রে Selenium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "যৌন দুর্বলতা ও দ্রুত বীর্যপাত।",
              "পায়খানার সময় বা প্রস্রাবের পর বীর্যপাত।",
              "চুল পড়া ও শারীরিক দুর্বলতা।",
              "স্বপ্নদোষ ও কামউত্তেজনা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঘুমের পর, গরমে, চা পানে।",
              "amelioration": "ঠান্ডা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Selenium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "impotence",
        "name": "ধ্বজভঙ্গ (Impotence)",
        "remedies": [
          {
            "name": "Caladium Seg",
            "description": "এই রোগের ক্ষেত্রে Caladium Seg একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লিঙ্গ শিথিল, কিন্তু কামউত্তেজনা থাকে।",
              "ধূমপানের কারণে ধ্বজভঙ্গ।",
              "যৌন মিলনের সময় লিঙ্গ নেতিয়ে পড়ে।",
              "চুলকানি ও ঘাম।",
              "শব্দে চমকে ওঠে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, ঘুমালে, তামাকের ধোঁয়ায়।",
              "amelioration": "ঠান্ডা বাতাসে, ঘাম হলে, ছোট ঘুমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Caladium Seg ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Conium Mac",
            "description": "এই রোগের ক্ষেত্রে Conium Mac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লিঙ্গ উত্থান হয় না বা অল্পতেই পড়ে যায়।",
              "বয়স্কদের বা অবিবাহিতদের জন্য।",
              "মাথা ঘোরা ও দুর্বলতা।",
              "স্মৃতিশক্তি হ্রাস।"
            ],
            "mentalSymptoms": [
              "যৌন ইচ্ছা দমন করার ফলে সমস্যা।"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium Mac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লিঙ্গ শিথিল হয়ে যায়",
              "বয়স্কদের পুরুষত্বহীনতা",
              "আত্মবিশ্বাসের অভাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Caladium",
            "description": "এই রোগের ক্ষেত্রে Caladium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "যৌন ইচ্ছা প্রবল কিন্তু লিঙ্গ উত্থান হয় না",
              "ঘুমের মধ্যে বীর্যপাত",
              "তামাক খাওয়ার কুফল",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, ঘুমালে, তামাকের ধোঁয়ায়।",
              "amelioration": "ঠান্ডা বাতাসে, ঘাম হলে, ছোট ঘুমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Caladium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Conium",
            "description": "এই রোগের ক্ষেত্রে Conium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দীর্ঘদিন যৌন মিলন থেকে বিরত থাকার ফলে সমস্যা",
              "অকাল বীর্যপাত",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মানসিক অবসাদ"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "prostatitis",
        "name": "প্রোস্টেট বৃদ্ধি (Prostatitis)",
        "remedies": [
          {
            "name": "Sabal Serrulata",
            "description": "এই রোগের ক্ষেত্রে Sabal Serrulata একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রোস্টেট গ্ল্যান্ড বড় হয়ে প্রস্রাবে বাধা।",
              "রাতে বারবার প্রস্রাব করতে হয়।",
              "প্রস্রাব শুরু করতে দেরি হয়।",
              "অণ্ডকোষে ঠান্ডা বোধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, আর্দ্র আবহাওয়ায়।",
              "amelioration": "গরমে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sabal Serrulata ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Thuja Occ",
            "description": "এই রোগের ক্ষেত্রে Thuja Occ একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রোস্টেট বড় ও প্রস্রাবে জ্বালা।",
              "প্রস্রাবের ধারা সরু বা দ্বিখণ্ডিত।",
              "টিকা বা গনোরিয়ার ইতিহাস।",
              "চামড়ায় আঁচিল।",
              "স্বপ্নদোষ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja Occ ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Conium",
            "description": "এই রোগের ক্ষেত্রে Conium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রোস্টেট গ্রন্থি শক্ত হয়ে যাওয়া",
              "প্রস্রাব থেমে থেমে হওয়া",
              "বয়স্কদের প্রোস্টেটের সমস্যা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Thuja",
            "description": "এই রোগের ক্ষেত্রে Thuja একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের ধারা দুই ভাগে বিভক্ত হয়ে যায়",
              "গনোরিয়ার ইতিহাস থাকলে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "প্রস্রাবের পর মনে হয় আরও রয়ে গেছে"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "spermatorrhea",
        "name": "ধাতুক্ষয় (Spermatorrhea)",
        "remedies": [
          {
            "name": "Acid Phos",
            "description": "এই রোগের ক্ষেত্রে Acid Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত শুক্রক্ষয়ের ফলে দুর্বলতা।",
              "উদাসীনতা ও স্মৃতিশক্তি হ্রাস।",
              "প্রস্রাবের সাথে ধাতু যায়।",
              "চুল পড়া ও অকাল পক্কতা।"
            ],
            "mentalSymptoms": [
              "শারীরিক ও মানসিক ক্লান্তি।"
            ],
            "modalities": {
              "aggravation": "পরিশ্রমে, কথা বললে, সঙ্গীতে, শোক বা দুশ্চিন্তায়।",
              "amelioration": "সামান্য ঘুমে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Acid Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "China",
            "description": "এই রোগের ক্ষেত্রে China একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বীর্যপাতে অত্যন্ত দুর্বলতা।",
              "কানে ভোঁ ভোঁ শব্দ।",
              "পেটে গ্যাস ও হজমে সমস্যা।",
              "রক্তশূন্যতা ও ফ্যাকাশে চেহারা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য স্পর্শে, তরল পদার্থ নির্গত হলে।",
              "amelioration": "জোরে চাপ দিলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, China ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Selenium",
            "description": "এই রোগের ক্ষেত্রে Selenium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ঘুমের মধ্যে বা মলত্যাগের সময় বীর্যপাত",
              "যৌন চিন্তার ফলে বীর্যপাত",
              "চুল পড়ে যাওয়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঘুমের পর, গরমে, চা পানে।",
              "amelioration": "ঠান্ডা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Selenium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Staphysagria",
            "description": "এই রোগের ক্ষেত্রে Staphysagria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত হস্তমৈথুনের ফলে ধাতুক্ষয়",
              "অপরাধবোধ ও বিষণ্ণতা",
              "স্মৃতিশক্তি হ্রাস",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাগে, অপমানে, স্পর্শে।",
              "amelioration": "বিশ্রামে, রাতে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Staphysagria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "hydrocele",
        "name": "একশিরা (Hydrocele)",
        "remedies": [
          {
            "name": "Rhododendron",
            "description": "এই রোগের ক্ষেত্রে Rhododendron একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অণ্ডকোষ ফোলা ও ব্যথা।",
              "বাম অণ্ডকোষ বেশি আক্রান্ত।",
              "শিরায় টান ধরা ব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঝড়-বৃষ্টির আগে ব্যথা বাড়ে।",
              "amelioration": "চলাফেরা করলে ব্যথা কমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Rhododendron ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অণ্ডকোষ ফোলা ও ঝুলে পড়া।",
              "তৃষ্ণাহীনতা।",
              "নম্র ও শান্ত স্বভাব।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Clematis",
            "description": "এই রোগের ক্ষেত্রে Clematis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অণ্ডকোষ শক্ত হয়ে ফুলে যাওয়া",
              "গনোরিয়ার ইতিহাস থাকলে",
              "ডান দিকের অণ্ডকোষে ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঠান্ডা জলে ধুলে।",
              "amelioration": "খোলা বাতাসে, ঘাম হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Clematis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      }
    ]
  }
];

const blogPosts = [
  {
    id: 1,
    title: "শীতকালীন সর্দি-কাশি ও হোমিওপ্যাথি",
    excerpt: "শীতের শুরুতে সর্দি-কাশিতে একোনাইট এবং ব্রায়োনিয়া কীভাবে কাজ করে?",
    content: "শীতকাল আসার সাথে সাথেই সর্দি-কাশির প্রকোপ বেড়ে যায়। বিশেষ করে ঋতু পরিবর্তনের এই সময়ে ছোট থেকে বড় সবাই ঠান্ডা জনিত সমস্যায় ভুগতে পারেন। হোমিওপ্যাথি চিকিৎসায় শীতকালীন সর্দি-কাশির জন্য অত্যন্ত কার্যকরী কিছু ওষুধ রয়েছে যা দ্রুত আরোগ্য প্রদান করে এবং শরীরের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।\n\nশীতের শুরুতে হঠাৎ ঠান্ডা বাতাস লেগে যদি সর্দি-জ্বর শুরু হয়, এবং রোগী অত্যন্ত অস্থিরতা অনুভব করেন, তবে **একোনাইট ন্যাপেলাস (Aconite Napellus)** জাদুর মতো কাজ করে। এটি রোগের প্রাথমিক অবস্থায় ব্যবহার করলে রোগ আর বাড়তে পারে না।\n\nযদি সর্দি-কাশির সাথে বুকে ব্যথা থাকে এবং নড়াচড়া করলে সেই ব্যথা বাড়ে, তবে **ব্রায়োনিয়া অ্যালবা (Bryonia Alba)** উপযুক্ত ওষুধ। এই রোগীদের ঠোঁট-জিহ্বা শুকিয়ে যায় এবং প্রচুর জল পিপাসা থাকে। তারা চুপচাপ শুয়ে থাকতে পছন্দ করেন।\n\nশীতকালে নাক দিয়ে পাতলা জল পড়া, হাঁচি এবং সেই সাথে নাকে জ্বালা থাকলে **আর্সেনিক অ্যালবাম (Arsenic Album)** খুব ভালো কাজ করে। এই রোগীদের গরম পানীয় পানে আরাম বোধ হয় এবং তারা খুব দুর্বলতা অনুভব করেন। বিশেষ করে মধ্যরাতে তাদের কষ্ট বাড়ে।\n\nবৃষ্টিতে ভিজে বা স্যাঁতস্যাঁতে আবহাওয়ায় থাকার ফলে যদি সর্দি-কাশি বা গায়ে ব্যথা হয়, তবে **রাস টক্স (Rhus Tox)** অব্যর্থ। আর যদি আর্দ্র আবহাওয়ায় বা কুয়াশায় থাকার ফলে নাক বন্ধ হয়ে যায় এবং সর্দি জমে থাকে, তবে **ডালকামারা (Dulcamara)** ব্যবহার করা উচিত।\n\n**প্রতিরোধ ও সতর্কতা:**\nশীতকালে সর্দি-কাশি থেকে বাঁচতে গরম কাপড় পরা এবং ঠান্ডা বাতাস এড়িয়ে চলা জরুরি। কুসুম গরম জল পান করা এবং ভিটামিন সি যুক্ত ফলমূল (যেমন কমলা, লেবু) খাওয়া রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে। ধুলোবালি এড়িয়ে চলা এবং বাইরে বের হলে মাস্ক ব্যবহার করা উচিত। যদি সর্দি-কাশির সাথে শ্বাসকষ্ট, বুকে তীব্র ব্যথা বা উচ্চ মাত্রার জ্বর থাকে, তবে দ্রুত চিকিৎসকের পরামর্শ নেওয়া প্রয়োজন। সঠিক লক্ষন মিলিয়ে হোমিওপ্যাথি ওষুধ সেবন করলে শীতকালীন সর্দি-কাশি থেকে দ্রুত এবং পার্শ্বপ্রতিক্রিয়া মুক্ত আরোগ্য লাভ করা সম্ভব।",
    date: "২০২৩-১০-১৫",
    author: "ডাঃ রফিক আহমেদ",
    category: "ঋতুভিত্তিক রোগ",
    image: "https://picsum.photos/seed/cold/800/600"
  },
  {
    id: 2,
    title: "শিশুদের দাঁত ওঠার সমস্যা",
    excerpt: "শিশুদের দাঁত ওঠার সময় কান্নাকাটি ও পেটের সমস্যায় ক্যামোমিলা।",
    content: "শিশুদের দাঁত ওঠার সময়টি মা-বাবা এবং শিশু উভয়ের জন্যই বেশ কষ্টকর হতে পারে। এই সময়ে শিশুরা খিটখিটে হয়ে যায়, কান্নাকাটি করে এবং অনেক সময় পেটের সমস্যায় ভোগে। হোমিওপ্যাথি চিকিৎসায় দাঁত ওঠার কষ্ট লাঘবে চমৎকার কিছু ওষুধ রয়েছে।\n\n**ক্যামোমিলা (Chamomilla):** দাঁত ওঠার সময় যদি শিশু অত্যন্ত খিটখিটে হয়ে যায়, কিছুতেই শান্ত হতে চায় না, এবং কোলে চড়ে বেড়াতে চায়, তবে ক্যামোমিলা প্রধান ওষুধ। এই শিশুদের এক গাল লাল এবং অন্য গাল ফ্যাকাশে হতে দেখা যায়। তাদের পায়খানা সাধারণত সবুজ রঙের এবং দুর্গন্ধযুক্ত হয়।\n\n**ক্যালকেরিয়া কার্ব (Calcarea Carb):** যে সব শিশু দেখতে নাদুসনুদুস, মোটা এবং থলথলে, তাদের দাঁত উঠতে দেরি হলে ক্যালকেরিয়া কার্ব খুব ভালো কাজ করে। এই শিশুদের মাথায় প্রচুর ঘাম হয়, বিশেষ করে ঘুমের সময়।\n\n**বেলাডোনা (Belladonna):** দাঁত ওঠার সময় যদি শিশুর তীব্র জ্বর থাকে, মুখমণ্ডল লাল হয়ে যায় এবং হঠাৎ করে চমকে ওঠে, তবে বেলাডোনা অব্যর্থ।\n\n**প্রতিরোধ ও সতর্কতা:**\nদাঁত ওঠার সময় শিশুদের মাড়ি সুড়সুড় করে, তাই তারা হাতের কাছে যা পায় তাই কামড়াতে চায়। এই সময় পরিষ্কার এবং নিরাপদ টিথার (Teether) দেওয়া যেতে পারে। শিশুর পেট পরিষ্কার রাখা এবং পুষ্টিকর খাবার দেওয়া জরুরি। যদি জ্বর বা ডায়রিয়া খুব বেশি হয়, তবে দ্রুত চিকিৎসকের পরামর্শ নেওয়া উচিত। সঠিক লক্ষণ মিলিয়ে হোমিওপ্যাথি ওষুধ সেবন করলে শিশুদের দাঁত ওঠার কষ্ট দ্রুত লাঘব হয়।",
    date: "২০২৩-১০-১৮",
    author: "ডাঃ সালমা বেগম",
    category: "শিশু স্বাস্থ্য",
    image: "https://picsum.photos/seed/baby/800/600"
  },
  {
    id: 3,
    title: "গ্যাস্ট্রিক ও এসিডিটির স্থায়ী সমাধান",
    excerpt: "নাক্স ভূমিকা ও কার্বো ভেজ দিয়ে কীভাবে গ্যাস্ট্রিকের সমস্যা থেকে মুক্তি পাবেন।",
    content: "গ্যাস্ট্রিক ও এসিডিটির সমস্যা বর্তমানে একটি সাধারণ ব্যাপার হয়ে দাঁড়িয়েছে। অনিয়মিত খাদ্যাভ্যাস, অতিরিক্ত ফাস্ট ফুড খাওয়া, এবং মানসিক চাপের কারণে অনেকেই এই সমস্যায় ভোগেন। হোমিওপ্যাথি চিকিৎসায় গ্যাস্ট্রিক ও এসিডিটির জন্য অত্যন্ত কার্যকরী কিছু ওষুধ রয়েছে যা দ্রুত এবং স্থায়ী আরোগ্য প্রদান করে।\n\n**নাক্স ভূমিকা (Nux Vomica):** যারা অতিরিক্ত ফাস্ট ফুড, মশলাযুক্ত খাবার, চা, কফি বা অ্যালকোহল পান করেন এবং যাদের কোষ্ঠকাঠিন্যের সমস্যা আছে, তাদের গ্যাস্ট্রিকের জন্য নাক্স ভূমিকা অত্যন্ত কার্যকরী। এই রোগীদের পেট ভার হয়ে থাকে এবং বারবার মলত্যাগের ইচ্ছা হয় কিন্তু পরিষ্কার হয় না।\n\n**কার্বো ভেজ (Carbo Veg):** পেটে প্রচুর গ্যাস হলে, বিশেষ করে পেটের উপরের অংশে গ্যাস জমলে এবং ঢেকুর উঠলে কার্বো ভেজ খুব ভালো কাজ করে। এই রোগীদের হজম শক্তি খুব দুর্বল থাকে এবং সামান্য খাবার খেলেই পেট ফুলে যায়।\n\n**লাইকোপোডিয়াম (Lycopodium):** পেটের নিচের অংশে গ্যাস জমলে, বিকেল ৪টা থেকে রাত ৮টা পর্যন্ত কষ্ট বাড়লে এবং মিষ্টি খাওয়ার প্রবল ইচ্ছা থাকলে লাইকোপোডিয়াম উপযুক্ত ওষুধ। এই রোগীরা অল্প খেলেই পেট ভরে যায় বলে মনে করেন।\n\n**প্রতিরোধ ও সতর্কতা:**\nগ্যাস্ট্রিক ও এসিডিটি থেকে বাঁচতে সঠিক খাদ্যাভ্যাস গড়ে তোলা জরুরি। সময়মতো খাবার খাওয়া, প্রচুর পরিমাণে জল পান করা, এবং অতিরিক্ত মশলাযুক্ত ও ভাজাভুজি খাবার এড়িয়ে চলা উচিত। নিয়মিত ব্যায়াম এবং মানসিক চাপ মুক্ত জীবনযাপন গ্যাস্ট্রিকের সমস্যা কমাতে সাহায্য করে। সঠিক লক্ষণ মিলিয়ে হোমিওপ্যাথি ওষুধ সেবন করলে গ্যাস্ট্রিক ও এসিডিটি থেকে স্থায়ীভাবে মুক্তি পাওয়া সম্ভব।",
    date: "২০২৩-১০-২০",
    author: "ডাঃ রফিক আহমেদ",
    category: "পাকস্থলীর রোগ",
    image: "https://picsum.photos/seed/gastric/800/600"
  },
  {
    id: 4,
    title: "পেটের সমস্যা ও গ্যাস্ট্রিক",
    excerpt: "কার্বো ভেজ, লাইকোপোডিয়াম, চায়না ও পালসেটিলার ব্যবহার।",
    content: "পেটের সমস্যা ও গ্যাস্ট্রিকের চিকিৎসায় হোমিওপ্যাথি খুব কার্যকরী।\n\n**কার্বো ভেজ (Carbo Veg):** পেটে প্রচুর গ্যাস হলে, বিশেষ করে পেটের উপরের অংশে গ্যাস জমলে এবং ঢেকুর উঠলে কার্বো ভেজ খুব ভালো কাজ করে। সাধারণ খাবার খেলেও গ্যাস হয়। বাতাসের জন্য প্রবল আকাঙ্ক্ষা থাকে, তাই তারা জানলা খুলে রাখতে বা ফ্যান চালাতে বলেন।\n\n**লাইকোপোডিয়াম (Lycopodium):** পেটের নিচের অংশে গ্যাস জমলে এবং বিকেলে (বিকেল ৪টা থেকে রাত ৮টা) সমস্যা বাড়লে লাইকোপোডিয়াম ব্যবহার করা হয়। এদের ক্ষুধা থাকে কিন্তু অল্প খেলেই পেট ভরে যায়। গরম খাবার খেতে এরা পছন্দ করে এবং মিষ্টি প্রিয় হয়।\n\n**চায়না (China):** পুরো পেট গ্যাসে ভর্তি মনে হলে এবং পেট ফাঁপা থাকলে চায়না ভালো কাজ করে। ফল বা দুধ খেলে এদের সমস্যা বাড়ে। পেটের অসুখের কারণে দুর্বলতা দেখা দিলে এটি খুব উপকারী।\n\n**পালসেটিলা (Pulsatilla):** রিচ ফুড বা চর্বিযুক্ত খাবার (যেমন পোলাও, বিরিয়ানি) খাওয়ার পর গ্যাস্ট্রিক হলে পালসেটিলা কার্যকরী। এদের জল পিপাসা খুব কম থাকে এবং খোলা বাতাসে হাঁটলে ভালো লাগে।\n\n**জীবনযাত্রার পরিবর্তন:**\nগ্যাস্ট্রিক থেকে মুক্তি পেতে ওষুধের পাশাপাশি কিছু নিয়ম মেনে চলা জরুরি। প্রচুর পরিমাণে জল পান করা, সময়মতো খাবার খাওয়া এবং বাইরের ভাজাপোড়া খাবার বর্জন করা উচিত। খাবার ভালো করে চিবিয়ে খাওয়া এবং খাওয়ার পরপরই শুয়ে না পড়া হজমে সহায়তা করে। ধুমপান ও মদ্যপান পরিহার করা এবং নিয়মিত হাঁটাচলা বা ব্যায়াম করা গ্যাস্ট্রিকের সমস্যা কমাতে সাহায্য করে। মানসিক চাপ কমানো এবং পর্যাপ্ত ঘুম নিশ্চিত করাও এসিডিটি নিয়ন্ত্রণে গুরুত্বপূর্ণ ভূমিকা পালন করে।",
    date: "২০২৪-০১-০৫",
    author: "ডাঃ ফারহানা রহমান",
    category: "পাকস্থলী",
    image: "https://picsum.photos/seed/stomach/800/600"
  },
  {
    id: 5,
    title: "চর্মরোগ ও হোমিওপ্যাথি চিকিৎসা",
    excerpt: "একজিমা, দাদ ও সোরিয়াসিসে সালফার ও গ্রাফাইটিস।",
    content: "চর্মরোগ বা স্কিন ডিজিজ একটি বিরক্তিকর এবং অনেক সময় দীর্ঘস্থায়ী সমস্যা। মলম বা বাহ্যিক প্রয়োগের ওষুধ দিয়ে চর্মরোগ চাপা দিলে তা পরবর্তীতে হাঁপানি বা অন্য জটিল রোগের রূপ নিতে পারে। তাই হোমিওপ্যাথি চিকিৎসায় চর্মরোগকে ভেতর থেকে নির্মূল করার ওপর জোর দেওয়া হয়।\n\n**সালফার (Sulphur):** চর্মরোগের চিকিৎসায় সালফারকে বলা হয় 'রাজা'। যদি চর্মরোগে প্রচণ্ড চুলকানি থাকে, বিশেষ করে রাতে বিছানার গরমে চুলকানি বাড়ে, এবং চুলকানোর পর জ্বালা করে, তবে সালফার প্রধান ওষুধ। এই রোগীরা সাধারণত অপরিষ্কার থাকতে পছন্দ করে, গোসল করতে চায় না এবং মিষ্টি খেতে পছন্দ করে। তাদের হাতের তালু ও পায়ের তলা গরম থাকে।\n\n**গ্রাফাইটিস (Graphites):** একজিমা বা চর্মরোগ থেকে যদি মধুর মতো চটচটে আঠালো রস বের হয়, তবে গ্রাফাইটিস অব্যর্থ। এটি সাধারণত কানের পেছনে, চোখের পাতায় বা ভাঁজযুক্ত স্থানে বেশি হয়। এই রোগীরা সাধারণত মোটা ও শীতকাতুরে হয় এবং তাদের কোষ্ঠকাঠিন্যের সমস্যা থাকে।\n\n**মেজেরিয়াম (Mezereum):** মাথায় বা শরীরে মোটা মামড়িযুক্ত চর্মরোগ হলে মেজেরিয়াম ব্যবহার করা হয়। মামড়ির নিচে পুঁজ জমে থাকে এবং অসহ্য চুলকানি হয়।\n\n**পেট্রোলিয়াম (Petroleum):** শীতকালে যদি হাত-পায়ের চামড়া ফেটে যায় এবং চর্মরোগ বাড়ে, তবে পেট্রোলিয়াম খুব ভালো কাজ করে। এদের ত্বক খুব খসখসে ও শুকনো হয়।\n\n**রাস টক্স (Rhus Tox):** ছোট ছোট ফুসকুড়ি, সাথে প্রচণ্ড চুলকানি ও জ্বালা, এবং গরম ছ্যাক দিলে আরাম বোধ হলে রাস টক্স কার্যকরী। বিশেষ করে বর্ষাকালে বা ভিজে আবহাওয়ায় চর্মরোগ বাড়লে এটি ব্যবহার করা হয়।\n\n**সতর্কতা ও যত্ন:**\nচর্মরোগের চিকিৎসায় ধৈর্য ধরা প্রয়োজন। চিকিৎসকের পরামর্শ ছাড়া কোনো মলম ব্যবহার করা উচিত নয়, কারণ এতে রোগ সাময়িকভাবে কমলেও পরে আরও ভয়াবহ আকারে ফিরে আসতে পারে। পরিষ্কার-পরিচ্ছন্ন থাকা, নিয়মিত গোসল করা এবং সুতি কাপড় পরা চর্মরোগ প্রতিরোধে সহায়ক। এলার্জি হয় এমন খাবার (যেমন চিংড়ি, ইলিশ, বেগুন) এড়িয়ে চলা উচিত। প্রচুর জল ও শাকসবজি খেলে ত্বক ভালো থাকে।",
    date: "২০২৪-০১-২০",
    author: "ডাঃ কে. এম. আলী",
    category: "চর্মরোগ",
    image: "https://picsum.photos/seed/skin/800/600"
  },
  {
    id: 6,
    title: "মানসিক স্বাস্থ্য ও হোমিওপ্যাথি",
    excerpt: "দুশ্চিন্তা, ভয় ও বিষণ্ণতায় ইগনেশিয়া ও নেট্রাম মিউর।",
    content: "শরীর ও মন একে অপরের পরিপূরক। মনের অসুখ শরীরের ওপর গভীর প্রভাব ফেলে। হোমিওপ্যাথি চিকিৎসায় মানসিক স্বাস্থ্যের ওপর বিশেষ গুরুত্ব দেওয়া হয় এবং মনের লক্ষণ বিচার করে চিকিৎসা প্রদান করা হয়।\n\n**ইগনেশিয়া (Ignatia):** কোনো প্রিয়জনের মৃত্যু, বিচ্ছেদ, বা বড় কোনো মানসিক আঘাত থেকে সৃষ্ট সমস্যায় ইগনেশিয়া প্রধান ওষুধ। রোগী দীর্ঘশ্বাস ফেলে, চুপচাপ বসে থাকে এবং নিজের মনে কাঁদতে থাকে। তাদের মেজাজ খুব পরিবর্তনশীল হয়—এই হাসছে, আবার এই কাঁদছে। গলার কাছে দলা পাকিয়ে আছে এমন অনুভূতি (Globus Hystericus) হতে পারে।\n\n**নেট্রাম মিউর (Natrum Mur):** যারা মনের দুঃখ মনেই চেপে রাখেন, কারো সাথে শেয়ার করতে চান না, এবং একা থাকতে পছন্দ করেন, তাদের জন্য নেট্রাম মিউর। সান্ত্বনা দিলে এদের রাগ বা দুঃখ আরও বেড়ে যায়। এরা খুব লবণ প্রিয় হয় এবং রোদে গেলে মাথাব্যথা করে। পুরনো কোনো দুঃখের স্মৃতি মনে করে এরা কষ্ট পায়।\n\n**অরাম মেটালিকাম (Aurum Metallicum):** গভীর বিষণ্ণতা বা ডিপ্রেশনের জন্য এটি একটি শক্তিশালী ওষুধ। রোগীর মনে বেঁচে থাকার কোনো ইচ্ছা থাকে না, এমনকি আত্মহত্যার প্রবণতাও দেখা দিতে পারে। তারা নিজেকে খুব দোষী মনে করে এবং জীবনের প্রতি সম্পূর্ণ হতাশ হয়ে পড়ে।\n\n**পালসেটিলা (Pulsatilla):** খুব আবেগপ্রবণ, অল্পতেই কেঁদে ফেলে এবং নম্র স্বভাবের রোগীদের জন্য পালসেটিলা। এরা একা থাকতে ভয় পায় এবং সবসময় সঙ্গ চায়। এদের মন খুব পরিবর্তনশীল এবং সহানুভূতি বা সান্ত্বনা পেলে এরা ভালো বোধ করে।\n\n**নাক্স ভমিকা (Nux Vomica):** যারা খুব খিটখিটে, রাগী এবং কাজের চাপে সবসময় ব্যস্ত থাকেন, তাদের মানসিক ক্লান্তিতে নাক্স ভমিকা ভালো কাজ করে। এরা অন্যের সামান্য ভুলও সহ্য করতে পারে না।\n\n**মানসিক প্রশান্তি:**\nমানসিক স্বাস্থ্য ভালো রাখতে ওষুধের পাশাপাশি ইতিবাচক চিন্তা, মেডিটেশন এবং প্রিয়জনদের সাথে সময় কাটানো জরুরি। পর্যাপ্ত ঘুম এবং সুষম খাদ্য গ্রহণ মনের ওপর ভালো প্রভাব ফেলে। প্রয়োজনে প্রফেশনাল কাউন্সিলিং নেওয়া যেতে পারে। মনের কথা চেপে না রেখে বিশ্বাসযোগ্য কারো সাথে শেয়ার করলে মানসিক চাপ কমে।",
    date: "২০২৪-০২-১০",
    author: "ডাঃ নাসরিন আক্তার",
    category: "মানসিক স্বাস্থ্য",
    image: "https://picsum.photos/seed/mind/800/600"
  },
  {
    id: 7,
    title: "বাত ব্যথা ও আরথ্রাইটিস",
    excerpt: "রাস টক্স ও ব্রায়োনিয়া কখন ব্যবহার করবেন?",
    content: "বাত ব্যথা বা আরথ্রাইটিস বয়স্কদের একটি সাধারণ সমস্যা হলেও বর্তমানে কম বয়সীদের মধ্যেও এটি দেখা যাচ্ছে। গিঁটে গিঁটে ব্যথা, ফোলা এবং নড়াচড়ায় কষ্ট হওয়া এর প্রধান লক্ষণ। হোমিওপ্যাথি চিকিৎসায় বাতের ব্যথার চমৎকার সমাধান রয়েছে।\n\n**রাস টক্স (Rhus Tox):** বাতের ব্যথায় রাস টক্স বহুল ব্যবহৃত একটি ওষুধ। এর প্রধান লক্ষণ হলো—বিশ্রাম নিলে বা চুপচাপ বসে থাকলে ব্যথা বাড়ে, কিন্তু নড়াচড়া বা হাঁটাহাঁটি করলে ব্যথা কমে যায়। সকালে ঘুম থেকে ওঠার পর বা দীর্ঘক্ষণ বসে থাকার পর প্রথম নড়াচড়ায় খুব কষ্ট হয়, কিন্তু কিছুক্ষণ হাঁটলে আরাম লাগে। বর্ষাকালে বা স্যাঁতস্যাঁতে আবহাওয়ায় এদের ব্যথা বাড়ে। গরম সেঁক দিলে এরা আরাম পায়।\n\n**ব্রায়োনিয়া (Bryonia):** রাস টক্সের ঠিক বিপরীত লক্ষণে ব্রায়োনিয়া কাজ করে। এদের ব্যথা নড়াচড়া করলে বাড়ে এবং চুপচাপ শুয়ে বা বসে থাকলে কমে। আক্রান্ত স্থান টিপলে বা চাপ দিয়ে রাখলে আরাম বোধ হয়। এদের প্রচণ্ড জল পিপাসা থাকে এবং কোষ্ঠকাঠিন্য দেখা যায়।\n\n**লিডাম পাল (Ledum Pal):** বাত ব্যথা যদি পায়ের দিক থেকে শুরু হয়ে ওপরের দিকে ওঠে, তবে লিডাম পাল কার্যকরী। আক্রান্ত স্থান ঠান্ডা থাকে কিন্তু রোগী গরম সহ্য করতে পারে না, ঠান্ডা জল বা বরফ দিলে আরাম পায়। ছোট ছোট জয়েন্টে বাতের ব্যথায় এটি ভালো কাজ করে।\n\n**কলচিকাম (Colchicum):** বাতের ব্যথার সাথে যদি আক্রান্ত স্থান খুব স্পর্শকাতর হয়, কেউ কাছে আসলেও রোগী ভয় পায় যে ব্যথা লাগবে, তবে কলচিকাম ব্যবহার করা হয়। খাবারের গন্ধে এদের বমি ভাব হয়।\n\n**কস্টিকাম (Causticum):** শীতকালে বা শুষ্ক ঠান্ডা বাতাসে বাত ব্যথা বাড়লে কস্টিকাম উপযোগী। এদের আক্রান্ত অঙ্গ সংকুচিত হয়ে যায় বা ছোট হয়ে যায়। ব্যথার সাথে অবশ ভাব থাকতে পারে।\n\n**ব্যায়াম ও খাদ্যাভ্যাস:**\nবাতের ব্যথায় সঠিক ওষুধের পাশাপাশি নিয়মিত হালকা ব্যায়াম এবং ওজন নিয়ন্ত্রণে রাখা জরুরি। ফিজিওথেরাপি বা যোগব্যায়াম ব্যথার উপশমে সাহায্য করতে পারে। ইউরিক এসিড বাড়ায় এমন খাবার (যেমন লাল মাংস, ডাল, পুঁইশাক) এড়িয়ে চলা উচিত। প্রচুর জল পান করা এবং ওমেগা-৩ ফ্যাটি এসিড যুক্ত খাবার খাওয়া হাড়ের স্বাস্থ্যের জন্য উপকারী।",
    date: "২০২৪-০২-২৫",
    author: "ডাঃ মোঃ ইব্রাহিম",
    category: "বাত ব্যথা",
    image: "https://picsum.photos/seed/pain/800/600"
  },
  {
    id: 8,
    title: "মহিলাদের হরমোনজনিত সমস্যা",
    excerpt: "মাসিকের অনিয়ম ও পিসিওএস (PCOS) চিকিৎসায় পালসেটিলা ও সিপিয়া।",
    content: "মহিলাদের হরমোনজনিত সমস্যা যেমন পিসিওএস (PCOS), মাসিকের অনিয়ম, এবং থাইরয়েডের সমস্যা বর্তমানে খুব সাধারণ হয়ে দাঁড়িয়েছে। হোমিওপ্যাথি চিকিৎসায় হরমোনের ভারসাম্য ফিরিয়ে এনে এসব সমস্যার স্থায়ী সমাধান করা সম্ভব।\n\n**পালসেটিলা (Pulsatilla):** মহিলাদের হরমোনজনিত সমস্যায় পালসেটিলা একটি প্রধান ওষুধ। বিশেষ করে যাদের মাসিক অনিয়মিত, দেরিতে হয় বা পরিমাণে খুব কম হয়। বয়ঃসন্ধিকালে মাসিক শুরু হতে দেরি হলে এটি খুব কার্যকরী। এই রোগীরা সাধারণত শান্ত, নম্র এবং লাজুক স্বভাবের হয়। তারা গরম সহ্য করতে পারে না এবং খোলা বাতাসে ভালো বোধ করে। তাদের জল পিপাসা খুব কম থাকে।\n\n**সিপিয়া (Sepia):** জরায়ুর বিভিন্ন সমস্যা এবং হরমোনের ভারসাম্যহীনতায় সিপিয়া চমৎকার কাজ করে। এই রোগীরা খুব খিটখিটে, উদাসীন এবং পরিবারের প্রতি কর্তব্যবিমুখ হয়ে পড়ে। তাদের মনে হয় জরায়ু যেন নিচের দিকে বেরিয়ে আসবে, তাই তারা দুই পা ক্রস করে বসে। মাসিকের সময় তলপেটে ব্যথা এবং সাদা স্রাবের সমস্যা থাকতে পারে।\n\n**ক্যালকেরিয়া কার্ব (Calcarea Carb):** যে সব মহিলা একটু মোটা, ফর্সা এবং থলথলে স্বাস্থ্যের অধিকারী, তাদের মাসিকের সমস্যায় এটি ব্যবহৃত হয়। এদের মাসিক সময়ের আগেই হয় এবং পরিমাণে বেশি হয়। এরা খুব শীতকাতুরে হয় এবং ডিম খেতে পছন্দ করে। সামান্য পরিশ্রমেই এদের শ্বাসকষ্ট হয় এবং ঘাম হয়।\n\n**ল্যাকেসিস (Lachesis):** মেনোপোজ বা মাসিক বন্ধ হওয়ার সময়কালীন সমস্যায় ল্যাকেসিস খুব কার্যকরী। এদের গরম একদম সহ্য হয় না, গলার কাছে কাপড় বা গয়না পরতে পারে না। ঘুম ভাঙার পর এদের কষ্ট বাড়ে। এরা খুব বাচাল প্রকৃতির হয় এবং এক বিষয় থেকে অন্য বিষয়ে কথা বলে।\n\n**থুজা (Thuja):** পিসিওএস বা ওভারিতে সিস্ট থাকলে এবং শরীরে অবাঞ্ছিত লোম দেখা দিলে থুজা ব্যবহার করা হয়। এদের শরীরে আঁচিল থাকার প্রবণতা থাকে।\n\n**জীবনধারা ও পুষ্টি:**\nহরমোনজনিত সমস্যায় জীবনযাত্রার পরিবর্তন, সুষম খাদ্য গ্রহণ এবং দুশ্চিন্তামুক্ত থাকা ওষুধের মতোই গুরুত্বপূর্ণ। নিয়মিত ব্যায়াম বা হাঁটাচলা ওজন নিয়ন্ত্রণে রাখতে সাহায্য করে, যা পিসিওএস নিয়ন্ত্রণে অত্যন্ত জরুরি। প্রক্রিয়াজাত খাবার ও অতিরিক্ত চিনি বর্জন করা উচিত। পর্যাপ্ত ঘুম এবং মানসিক প্রশান্তি হরমোনের ভারসাম্য বজায় রাখতে সহায়তা করে।",
    date: "২০২৪-০৩-০৫",
    author: "ডাঃ ফাতেমা জোহরা",
    category: "মহিলা স্বাস্থ্য",
    image: "https://picsum.photos/seed/women/800/600"
  },
  {
    id: 9,
    title: "শিশুদের কৃমি ও তার প্রতিকার",
    excerpt: "সিনা ও টিউক্রিয়াম কৃমির সমস্যায় কতটা কার্যকরী?",
    content: "শিশুদের স্বাস্থ্যের ওপর কৃমির প্রভাব অনেক বেশি। কৃমির কারণে শিশুরা অপুষ্টিতে ভোগে, খিটখিটে হয়ে যায় এবং তাদের শারীরিক ও মানসিক বিকাশ বাধাগ্রস্ত হয়। হোমিওপ্যাথি চিকিৎসায় কৃমির খুব ভালো ওষুধ রয়েছে যা কোনো পার্শ্বপ্রতিক্রিয়া ছাড়াই কৃমি দূর করে।\n\n**সিনা (Cina):** শিশুদের কৃমির সমস্যায় সিনা সবচেয়ে বেশি ব্যবহৃত ওষুধ। এর লক্ষণগুলো খুব স্পষ্ট—শিশু অত্যন্ত খিটখিটে ও রাগী হয়, কিছুতেই সন্তুষ্ট হয় না। তারা সবসময় নাক খোঁটে বা ঘষে। ঘুমের মধ্যে দাঁত কাটে (Teeth Grinding) এবং চমকে ওঠে। তাদের ক্ষুধা খুব বেশি থাকে, খাওয়ার পরপরই আবার খেতে চায়। মিষ্টি খাওয়ার প্রবল ইচ্ছা থাকে। প্রস্রাব সাদা রঙের হতে পারে।\n\n**টিউক্রিয়াম (Teucrium):** ছোট ছোট সুতা কৃমি বা গুড়োকৃমিতে টিউক্রিয়াম খুব কার্যকরী। মলদ্বারে প্রচণ্ড চুলকানি হয়, বিশেষ করে সন্ধ্যার পর বা বিছানার গরমে চুলকানি বাড়ে। শিশু অনবরত মলদ্বার চুলকাতে থাকে। নাকের পলি্পাসের জন্যও এটি একটি ভালো ওষুধ।\n\n**স্যান্টোনিন (Santonin):** সিনার লক্ষণের মতোই কিন্তু কিছুটা কম তীব্র হলে স্যান্টোনিন ব্যবহার করা হয়। চোখের নিচে কালি পড়ে, মুখ ফ্যাকাশে দেখায় এবং সকালে মুখে দুর্গন্ধ থাকে। পেটে ব্যথা এবং বমি বমি ভাব থাকতে পারে।\n\n**ক্যালকেরিয়া কার্ব (Calcarea Carb):** কৃমির ধাত দূর করতে বা বারবার কৃমি হওয়ার প্রবণতা কমাতে ক্যালকেরিয়া কার্ব সাহায্য করে। বিশেষ করে মোটা, থলথলে এবং মাথায় ঘাম হওয়া শিশুদের জন্য এটি উপযোগী। এরা মাটি, চক বা পেন্সিল খেতে পছন্দ করে।\n\n**সালফার (Sulphur):** কৃমির চিকিৎসার শেষে বা বারবার কৃমি হলে সালফার ব্যবহার করা হয়। মলদ্বারে লালচে ভাব এবং চুলকানি থাকে। শিশু অপরিষ্কার থাকতে পছন্দ করে।\n\n**পরিচ্ছন্নতা ও সতর্কতা:**\nকৃমি থেকে বাঁচতে শিশুদের নখ ছোট রাখা, খাওয়ার আগে হাত ধোয়া এবং খালি পায়ে না হাঁটার অভ্যাস গড়ে তোলা জরুরি। পরিবারের একজনের কৃমি হলে সবারই চিকিৎসা নেওয়া উচিত। কাঁচা ফলমূল ও শাকসবজি ভালো করে ধুয়ে খাওয়া এবং বিশুদ্ধ জল পান করা কৃমি প্রতিরোধে সাহায্য করে। নিয়মিত কৃমির ওষুধ সেবন করলে শিশুরা সুস্থ ও সবল থাকে।",
    date: "২০২৪-০৩-১৫",
    author: "ডাঃ আব্দুল্লাহ আল মামুন",
    category: "শিশু স্বাস্থ্য",
    image: "https://picsum.photos/seed/worm/800/600"
  },
  {
    id: 10,
    title: "মাইগ্রেন ও দীর্ঘস্থায়ী মাথাব্যথা",
    excerpt: "ন্যাট্রাম মিউর ও স্যাঙ্গুইনেরিয়া কখন খাবেন?",
    content: "মাইগ্রেন এক ধরণের বিশেষ মাথাব্যথা যা সাধারণত মাথার একপাশে হয় এবং এর সাথে বমি বমি ভাব বা বমি হতে পারে। আলো বা শব্দে এই ব্যথা বাড়ে। হোমিওপ্যাথি চিকিৎসায় মাইগ্রেনের খুব ভালো সমাধান রয়েছে।\n\n**ন্যাট্রাম মিউর (Natrum Mur):** মাইগ্রেনের ব্যথায় ন্যাট্রাম মিউর খুব জনপ্রিয়। এর ব্যথা সাধারণত সূর্যোদয়ের সাথে শুরু হয়, দুপুরে বাড়ে এবং সূর্যাস্তের সাথে সাথে কমতে থাকে। মনে হয় যেন মাথার ভেতর ছোট ছোট হাতুড়ি দিয়ে পেটানো হচ্ছে। স্কুল বা কলেজের ছাত্রছাত্রী বা যারা পড়াশোনা নিয়ে থাকেন তাদের মাথাব্যথায় এটি ভালো কাজ করে। অতিরিক্ত লবণ খাওয়ার প্রবণতা এবং রোদে গেলে মাথাব্যথা বাড়া এর প্রধান লক্ষণ।\n\n**স্যাঙ্গুইনেরিয়া (Sanguinaria):** ডানদিকের মাথাব্যথায় এটি বিশেষ কার্যকরী। ব্যথা ঘাড়ের ডানদিক থেকে শুরু হয়ে ডান চোখের ওপর এসে স্থির হয়। দিনে ব্যথা বাড়ে এবং বমি হলে কিছুটা আরাম পাওয়া যায়। মেনোপোজের সময় মহিলাদের মাথাব্যথায় এটি ভালো কাজ করে।\n\n**স্পাইজেলিয়া (Spigelia):** বামদিকের মাথাব্যথায় স্পাইজেলিয়া অব্যর্থ। ব্যথা ঘাড়ের বামদিক থেকে শুরু হয়ে বাম চোখের ওপর এসে দাঁড়ায়। ব্যথা খুব তীব্র হয় এবং স্নায়ুশূলের মতো মনে হয়। নড়াচড়া, শব্দ বা স্পর্শে ব্যথা বাড়ে।\n\n**আইরিস ভার্সিকোলার (Iris Versicolor):** মাইগ্রেনের সাথে যদি খুব বেশি এসিডিটি বা টক বমি হয়, তবে আইরিস ভার্সিকোলার ব্যবহার করা হয়। চোখের সামনে ঝাপসা দেখা বা আলোর ঝলকানি দেখার পর মাথাব্যথা শুরু হলে এটি কার্যকরী। সপ্তাহান্তে বা ছুটির দিনে মাথাব্যথা (Weekend Headache) হওয়া এর একটি অদ্ভুত লক্ষণ।\n\n**গ্লোনয়িন (Glonoine):** রোদে ঘোরাঘুরি বা আগুনের তাপে কাজ করার ফলে দপদপানি মাথাব্যথা হলে গ্লোনয়িন ভালো কাজ করে। মনে হয় মাথা ফেটে যাবে। মাথায় রক্ত উঠে মুখ লাল হয়ে যায়।\n\n**ট্রিগার ও নিয়ন্ত্রণ:**\nমাইগ্রেনের রোগীদের নিয়মিত ঘুম, প্রচুর জল পান এবং অতিরিক্ত রোদ বা আলো এড়িয়ে চলা উচিত। চকলেট, পনির, কফি বা অতিরিক্ত চিনিযুক্ত খাবার মাইগ্রেনের ব্যথা বাড়াতে পারে, তাই এগুলো এড়িয়ে চলা ভালো। মেডিটেশন বা যোগব্যায়াম মানসিক চাপ কমাতে এবং মাইগ্রেন নিয়ন্ত্রণে রাখতে সাহায্য করে।",
    date: "২০২৪-০৩-২৫",
    author: "ডাঃ শারমিন সুলতানা",
    category: "স্নায়ুতন্ত্র",
    image: "https://picsum.photos/seed/headache/800/600"
  },
  {
    id: 11,
    title: "কিডনি পাথর ও হোমিওপ্যাথি",
    excerpt: "বার্বারিস ভালগারিস ও লাইকোপোডিয়ামের ভূমিকা।",
    content: "কিডনি পাথর বা রেনাল স্টোন বর্তমানে খুব পরিচিত একটি সমস্যা। জল কম খাওয়া, অতিরিক্ত আমিষ গ্রহণ এবং প্রস্রাব আটকে রাখা এর প্রধান কারণ। হোমিওপ্যাথি ওষুধের মাধ্যমে অপারেশন ছাড়াই ছোট ও মাঝারি আকারের পাথর বের করা সম্ভব।\n\n**বার্বারিস ভালগারিস (Berberis Vulgaris):** কিডনি পাথরের চিকিৎসায় এটি সবচেয়ে বহুল ব্যবহৃত ওষুধ। বিশেষ করে বাম দিকের কিডনিতে পাথর হলে এটি জাদুর মতো কাজ করে। ব্যথা কিডনি থেকে শুরু হয়ে প্রস্রাবের নালী দিয়ে নিচের দিকে বা উরুর দিকে ছড়িয়ে পড়ে। প্রস্রাবে জ্বালা-পোড়া থাকে এবং প্রস্রাবের তলানি লালচে বা ইটের গুঁড়োর মতো হয়। নড়াচড়া করলে বা ঝাঁকুনি লাগলে ব্যথা বাড়ে।\n\n**লাইকোপোডিয়াম (Lycopodium):** ডান দিকের কিডনিতে পাথর হলে লাইকোপোডিয়াম প্রধান ওষুধ। প্রস্রাবের আগে পিঠে বা কোমরে খুব ব্যথা হয়, কিন্তু প্রস্রাব করার পর ব্যথা কমে যায়। প্রস্রাবে লাল বালুকণা বা তলানি দেখা যায়। পেটে প্রচুর গ্যাস থাকে এবং বিকেল ৪টা থেকে রাত ৮টা পর্যন্ত কষ্ট বাড়ে।\n\n**সার্সাপ্যারিলা (Sarsaparilla):** প্রস্রাব করার শেষে যদি অসহ্য যন্ত্রণা হয়, তবে সার্সাপ্যারিলা ব্যবহার করা হয়। রোগী দাঁড়িয়ে প্রস্রাব করলে কিছুটা সহজে হয় কিন্তু বসে করলে কষ্ট হয়। ডান কিডনির পাথরে এটি বেশি কার্যকরী। শিশুদের প্রস্রাবের সময় কান্নাকাটি করা এবং প্রস্রাবে সাদা তলানি পড়া এর লক্ষণ।\n\n**হাইড্রেঞ্জিয়া (Hydrangea):** একে 'স্টোন ব্রেকার' বা পাথর ভাঙার ওষুধ বলা হয়। এটি পাথর ভেঙে ছোট ছোট টুকরো করে বের করে দিতে সাহায্য করে। প্রস্রাবে সাদা তলানি বা লবণের মতো পদার্থ দেখা যায়। কিডনি অঞ্চলে ব্যথা এবং প্রস্রাবের বেগ থাকলেও প্রস্রাব শুরু হতে দেরি হয়।\n\n**ক্যান্থারিস (Cantharis):** পাথরের কারণে যদি প্রস্রাবে প্রচণ্ড জ্বালা এবং রক্ত যায়, তবে ক্যান্থারিস ব্যবহার করা হয়। ফোঁটা ফোঁটা প্রস্রাব হয় এবং প্রতিবারই জ্বালা করে।\n\n**খাদ্যাভ্যাস ও প্রতিরোধ:**\nকিডনি পাথর প্রতিরোধে প্রতিদিন অন্তত ৩-৪ লিটার জল পান করা এবং অক্সালেট যুক্ত খাবার (যেমন পালং শাক, টমেটো, চকলেট) পরিমিত খাওয়া উচিত। অতিরিক্ত লবণ ও প্রাণীজ প্রোটিন (যেমন মাংস) এড়িয়ে চলা ভালো। লেবুর শরবত বা সাইট্রাস ফল কিডনি পাথর প্রতিরোধে সাহায্য করে। প্রস্রাব আটকে না রাখা এবং নিয়মিত ব্যায়াম করা কিডনির সুস্থতার জন্য জরুরি।",
    date: "২০২৪-০৪-০৫",
    author: "ডাঃ মোঃ রিয়াজ উদ্দিন",
    category: "কিডনি রোগ",
    image: "https://picsum.photos/seed/kidney/800/600"
  },
  {
    id: 12,
    title: "উচ্চ রক্তচাপ ও হৃদরোগ",
    excerpt: "রাউলফিয়া ও ক্র্যাটিগাস কীভাবে কাজ করে?",
    content: "উচ্চ রক্তচাপ বা হাইপারটেনশনকে 'নীরব ঘাতক' বলা হয়। এটি হৃদরোগ, স্ট্রোক এবং কিডনি সমস্যার ঝুঁকি বাড়ায়। হোমিওপ্যাথি চিকিৎসায় লক্ষণ অনুযায়ী ওষুধ সেবন করলে রক্তচাপ নিয়ন্ত্রণে রাখা সম্ভব।\n\n**রাউলফিয়া সার্পেন্টিনা (Rauwolfia Serpentina):** উচ্চ রক্তচাপ নিয়ন্ত্রণে এটি মাদার টিংচার হিসেবে খুব জনপ্রিয়। এটি তাৎক্ষণিকভাবে রক্তচাপ কমাতে সাহায্য করে। তবে এটি মূল রোগের চিকিৎসা নয়, বরং উপশমকারী হিসেবে কাজ করে। দীর্ঘস্থায়ী সমাধানের জন্য লক্ষনভিত্তিক ওষুধ প্রয়োজন।\n\n**ক্র্যাটিগাস (Crataegus):** একে হৃদপিণ্ডের টনিক বলা হয়। এটি হৃদপেশিকে শক্তিশালী করে এবং রক্ত সঞ্চালন স্বাভাবিক রাখতে সাহায্য করে। উচ্চ রক্তচাপের সাথে যদি বুকে ব্যথা, শ্বাসকষ্ট বা হৃদস্পন্দন অনিয়মিত হয়, তবে এটি খুব কার্যকরী। এটি ধমনীর গাত্রে জমে থাকা চর্বি গলাতেও সাহায্য করে।\n\n**অরাম মেটালিকাম (Aurum Metallicum):** উচ্চ রক্তচাপের সাথে যদি রোগী খুব বিষণ্ণ থাকে, জীবনের প্রতি বিতৃষ্ণা থাকে এবং আত্মহত্যার কথা ভাবে, তবে অরাম মেটালিকাম উপযুক্ত। এদের মুখমন্ডল লালচে দেখায় এবং রাতে কষ্ট বাড়ে।\n\n**গ্লোনয়িন (Glonoine):** হঠাৎ রক্তচাপ বেড়ে গিয়ে মাথায় প্রচণ্ড দপদপানি ব্যথা হলে গ্লোনয়িন ব্যবহার করা হয়। মনে হয় মাথা ফেটে যাবে। রোদে গেলে বা আগুনের তাপে থাকলে সমস্যা বাড়ে। ঘাড়ের ধমনী দপদপ করে।\n\n**ন্যাট্রাম মিউর (Natrum Mur):** যারা অতিরিক্ত লবণ খেতে পছন্দ করেন এবং মানসিক চাপে ভোগেন, তাদের উচ্চ রক্তচাপে ন্যাট্রাম মিউর ভালো কাজ করে। সকালে ঘুম থেকে ওঠার পর মাথাব্যথা এবং বুক ধড়ফড় করা এর লক্ষণ।\n\n**জীবনধারা পরিবর্তন:**\nউচ্চ রক্তচাপ নিয়ন্ত্রণে রাখতে ওষুধের পাশাপাশি লবণের ব্যবহার কমানো, নিয়মিত হাঁটা এবং দুশ্চিন্তামুক্ত থাকা অত্যন্ত জরুরি। ওজন নিয়ন্ত্রণে রাখা এবং ধূমপান বর্জন করা হৃদরোগের ঝুঁকি কমায়। নিয়মিত রক্তচাপ মাপা এবং চিকিৎসকের পরামর্শ অনুযায়ী চলা সুস্থ থাকার চাবিকাঠি।",
    date: "২০২৪-০৪-১৫",
    author: "ডাঃ কামরুল হাসান",
    category: "হৃদরোগ",
    image: "https://picsum.photos/seed/heart/800/600"
  },
  {
    id: 13,
    title: "চুল পড়া ও অকাল পক্কতা",
    excerpt: "উইজবডেন ও এসিড ফসের ব্যবহার।",
    content: "চুল পড়া বা অকাল পক্কতা নারী-পুরুষ উভয়ের জন্যই একটি চিন্তার বিষয়। পুষ্টিহীনতা, হরমোনের সমস্যা, খুশকি বা বংশগত কারণে চুল পড়তে পারে। হোমিওপ্যাথি চিকিৎসায় চুলের গোড়া মজবুত করে চুল পড়া রোধ করা সম্ভব।\n\n**উইজবডেন (Wiesbaden):** চুল পড়ার চিকিৎসায় উইজবডেন খুব কার্যকরী। এটি চুলের গোড়া শক্ত করে এবং নতুন চুল গজাতে সাহায্য করে। চুল খুব দ্রুত বড় হয় এবং ঘন হয়। এটি সাধারণত ৩০ বা ২০০ শক্তিতে ব্যবহার করা হয়।\n\n**জাবোরান্ডি (Jaborandi):** মাদার টিংচার হিসেবে জাবোরান্ডি তেল বা লোশন আকারে চুলে মাখলে খুব ভালো ফল পাওয়া যায়। এটি চুল পাকা রোধ করে এবং চুল কালো করতে সাহায্য করে। বাহ্যিক ব্যবহারের পাশাপাশি এটি সেবনও করা যেতে পারে।\n\n**এসিড ফস (Acid Phos):** কোনো বড় শোক, দুঃখ বা মানসিক আঘাতের পর থেকে যদি চুল পড়া শুরু হয় বা চুল পেকে যায়, তবে এসিড ফস অব্যর্থ। অল্প বয়সে চুল পেকে যাওয়া এবং শারীরিক ও মানসিক দুর্বলতা এর প্রধান লক্ষণ। চুল খুব পাতলা হয়ে যায় এবং জট পাকিয়ে যায়।\n\n**লাইকোপোডিয়াম (Lycopodium):** অল্প বয়সে টাক পড়া, বিশেষ করে মাথার মাঝখানে বা কপালে টাক পড়লে লাইকোপোডিয়াম ব্যবহার করা হয়। পেটের সমস্যা, লিভারের দুর্বলতা এবং অকাল বার্ধক্যের ছাপ থাকলে এটি ভালো কাজ করে। প্রসবের পর মহিলাদের চুল পড়লেও এটি কার্যকরী।\n\n**সাইলিশিয়া (Silicea):** পুষ্টিহীনতার কারণে চুল পড়লে এবং নখ ভেঙে যাওয়ার প্রবণতা থাকলে সাইলিশিয়া ভালো কাজ করে। এদের হাত-পা সবসময় ঘামে এবং দুর্গন্ধ হয়।\n\n**ফ্লোরিক এসিড (Fluoric Acid):** টাইফয়েড বা দীর্ঘস্থায়ী জ্বরের পর চুল পড়লে এটি ব্যবহার করা হয়। চুল খুব রুক্ষ ও শুষ্ক হয়ে যায়।\n\n**চুলের যত্ন ও পুষ্টি:**\nচুল পড়া রোধে সুষম খাবার গ্রহণ, প্রচুর জল পান এবং চুলের যত্ন নেওয়া প্রয়োজন। প্রোটিন সমৃদ্ধ খাবার (যেমন ডিম, মাছ, ডাল) এবং ভিটামিন ই যুক্ত খাবার চুলের স্বাস্থ্যের জন্য ভালো। রাসায়নিক শ্যাম্পু বা কালার ব্যবহার থেকে বিরত থাকা উচিত। সপ্তাহে অন্তত দুইদিন চুলে তেল ম্যাসাজ করা রক্ত সঞ্চালন বাড়ায় এবং চুলের গোড়া মজবুত করে।",
    date: "২০২৪-০৪-২৫",
    author: "ডাঃ নুসরাত জাহান",
    category: "চুল ও ত্বক",
    image: "https://picsum.photos/seed/hair/800/600"
  }
];
const initIcons = () => {
  createIcons({
    icons: {
      Leaf,
      Search,
      BookOpen,
      Activity,
      FileText,
      Menu,
      X,
      ChevronRight,
      Phone,
      Mail,
      MapPin,
      Facebook,
      Twitter,
      Instagram,
      Linkedin,
      Calendar,
      ArrowRight,
      Moon,
      Sun
    }
  });
};
const renderNavbar = () => {
  var _a, _b;
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const currentPath = window.location.pathname;
  const isActive = (path) => {
    const currentFile = currentPath.split("/").pop() || "index.html";
    const targetFile = path.replace("./", "").replace("/", "") || "index.html";
    return currentFile === targetFile ? "text-teal-700 bg-teal-50 font-semibold" : "text-slate-600 hover:text-teal-700 hover:bg-teal-50 font-medium";
  };
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const currentTheme = savedTheme || systemTheme;
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <div class="flex items-center">
          <a href="./index.html" class="flex-shrink-0 flex items-center gap-3 group transition-transform hover:scale-105">
            <div class="bg-gradient-to-br from-teal-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/30 transition-all">
              <i data-lucide="leaf" class="h-6 w-6 text-white"></i>
            </div>
            <span class="font-bold text-xl text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors">সবার জন্য হোমিওপ্যাথি</span>
          </a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-4">
          <div class="flex items-center space-x-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-100 shadow-sm">
            <a href="./index.html" class="${isActive("./index.html")} px-4 py-2 rounded-full text-sm transition-all duration-200">হোম</a>
            <a href="./materia-medica.html" class="${isActive("./materia-medica.html")} px-4 py-2 rounded-full text-sm transition-all duration-200">মেটেরিয়া মেডিকা</a>
            <a href="./organon.html" class="${isActive("./organon.html")} px-4 py-2 rounded-full text-sm transition-all duration-200">অর্গানন</a>
            <a href="./symptoms.html" class="${isActive("./symptoms.html")} px-4 py-2 rounded-full text-sm transition-all duration-200">লক্ষণ ভিত্তিক</a>
            <a href="./blog.html" class="${isActive("./blog.html")} px-4 py-2 rounded-full text-sm transition-all duration-200">ব্লগ</a>
          </div>

          <button id="theme-toggle" class="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-colors border border-slate-200 shadow-sm" aria-label="Toggle Dark Mode">
            <i data-lucide="${currentTheme === "dark" ? "sun" : "moon"}" class="h-5 w-5"></i>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-3">
          <button id="mobile-theme-toggle" class="p-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors" aria-label="Toggle Dark Mode">
            <i data-lucide="${currentTheme === "dark" ? "sun" : "moon"}" class="h-6 w-6"></i>
          </button>
          <button id="mobile-menu-btn" class="text-slate-600 hover:text-teal-700 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors">
            <i data-lucide="menu" class="h-6 w-6"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl z-50">
      <div class="px-4 pt-4 pb-6 space-y-2">
        <a href="./index.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">হোম</a>
        <a href="./materia-medica.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">মেটেরিয়া মেডিকা</a>
        <a href="./organon.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">অর্গানন</a>
        <a href="./symptoms.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">লক্ষণ ভিত্তিক</a>
        <a href="./blog.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">ব্লগ</a>
      </div>
    </div>
  `;
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const iconName = isDark ? "sun" : "moon";
    const themeBtns = [document.getElementById("theme-toggle"), document.getElementById("mobile-theme-toggle")];
    themeBtns.forEach((btn2) => {
      if (btn2) {
        btn2.innerHTML = `<i data-lucide="${iconName}" class="h-5 w-5"></i>`;
      }
    });
    createIcons({
      icons: { Moon, Sun },
      nameAttr: "data-lucide",
      attrs: { class: "h-5 w-5" }
    });
  };
  (_a = document.getElementById("theme-toggle")) == null ? void 0 : _a.addEventListener("click", toggleTheme);
  (_b = document.getElementById("mobile-theme-toggle")) == null ? void 0 : _b.addEventListener("click", toggleTheme);
};
const renderFooter = () => {
  const footer = document.getElementById("footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="bg-gradient-to-br from-teal-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-teal-900/50">
              <i data-lucide="leaf" class="h-6 w-6 text-white"></i>
            </div>
            <span class="font-bold text-xl text-white tracking-tight">সবার জন্য হোমিওপ্যাথি</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            প্রাকৃতিক আরোগ্যের পথে আপনার বিশ্বস্ত সঙ্গী। আমরা বিশ্বাস করি সবার জন্য নিরাপদ এবং পার্শ্বপ্রতিক্রিয়াহীন চিকিৎসা।
          </p>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <span class="w-1 h-6 bg-teal-500 rounded-full"></span>
            দ্রুত লিঙ্ক
          </h3>
          <ul class="space-y-3 text-slate-400">
            <li><a href="./materia-medica.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> মেটেরিয়া মেডিকা</a></li>
            <li><a href="./organon.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> অর্গানন অফ মেডিসিন</a></li>
            <li><a href="./symptoms.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> লক্ষণ ভিত্তিক চিকিৎসা</a></li>
            <li><a href="./blog.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> স্বাস্থ্য ব্লগ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <span class="w-1 h-6 bg-blue-500 rounded-full"></span>
            যোগাযোগ
          </h3>
          <ul class="space-y-4 text-slate-400">
            <li class="flex items-start gap-3 group">
              <div class="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-900/50 transition-colors">
                <i data-lucide="phone" class="h-4 w-4 text-teal-400"></i>
              </div>
              <span class="mt-1">+৮৮০ ১৭১১-০০০০০০</span>
            </li>
            <li class="flex items-start gap-3 group">
              <div class="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-900/50 transition-colors">
                <i data-lucide="mail" class="h-4 w-4 text-teal-400"></i>
              </div>
              <span class="mt-1">info@homeopathybd.com</span>
            </li>
            <li class="flex items-start gap-3 group">
              <div class="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-900/50 transition-colors">
                <i data-lucide="map-pin" class="h-4 w-4 text-teal-400"></i>
              </div>
              <span class="mt-1">ঢাকা, বাংলাদেশ</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
            সোশ্যাল মিডিয়া
          </h3>
          <div class="flex space-x-4">
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg shadow-black/20 hover:shadow-blue-600/20 hover:-translate-y-1"><i data-lucide="facebook" class="h-5 w-5"></i></a>
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-sky-500 transition-all shadow-lg shadow-black/20 hover:shadow-sky-500/20 hover:-translate-y-1"><i data-lucide="twitter" class="h-5 w-5"></i></a>
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-pink-600 transition-all shadow-lg shadow-black/20 hover:shadow-pink-600/20 hover:-translate-y-1"><i data-lucide="instagram" class="h-5 w-5"></i></a>
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-blue-700 transition-all shadow-lg shadow-black/20 hover:shadow-blue-700/20 hover:-translate-y-1"><i data-lucide="linkedin" class="h-5 w-5"></i></a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-slate-800 mt-12 pt-8 text-center">
        <p class="text-slate-500 text-sm">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} সবার জন্য হোমিওপ্যাথি। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </div>
  `;
};
const renderHome = () => {
  var _a, _b;
  const app = document.getElementById("app-home");
  if (!app) return;
  const slides = [
    {
      image: "https://picsum.photos/seed/health/1920/1080",
      title: "প্রাকৃতিক আরোগ্যের পথে",
      subtitle: "পার্শ্বপ্রতিক্রিয়াহীন ও নিরাপদ চিকিৎসা"
    },
    {
      image: "https://picsum.photos/seed/medicine/1920/1080",
      title: "সুস্থ জীবনের জন্য হোমিওপ্যাথি",
      subtitle: "আপনার এবং আপনার পরিবারের সুস্বাস্থ্যের জন্য"
    },
    {
      image: "https://picsum.photos/seed/doctor/1920/1080",
      title: "অভিজ্ঞ চিকিৎসকের পরামর্শ",
      subtitle: "সঠিক লক্ষণ বিচার করে চিকিৎসা"
    },
    {
      image: "https://picsum.photos/seed/hospital/1920/1080",
      title: "সম্পূর্ণ পার্শ্বপ্রতিক্রিয়াহীন",
      subtitle: "শিশুদের ও বয়স্কদের জন্য নিরাপদ"
    }
  ];
  app.innerHTML = `
    <!-- Hero Slider -->
    <div class="relative h-[500px] md:h-[600px] overflow-hidden group">
      <div id="slider-track" class="h-full w-full relative">
        ${slides.map((slide, index) => `
          <div class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out slide-item ${index === 0 ? "opacity-100 z-10 slide-active" : "opacity-0 z-0"}">
            <div class="absolute inset-0 bg-slate-900/40 z-10"></div>
            <div class="w-full h-full overflow-hidden">
              <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover slide-image" referrerPolicy="no-referrer" />
            </div>
            <div class="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div class="max-w-4xl slide-content">
                 <div class="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
                    <i data-lucide="leaf" class="h-4 w-4 text-teal-300"></i>
                    <span>হোমিওপ্যাথি</span>
                 </div>
                 <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                   ${slide.title}
                 </h1>
                 <p class="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                   ${slide.subtitle}
                 </p>
                 <a href="#search-section" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/30 inline-flex items-center gap-2">
                   শুরু করুন <i data-lucide="arrow-right" class="h-5 w-5"></i>
                 </a>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Navigation Arrows -->
      <button id="prev-slide" class="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/10 transform hover:scale-110">
        <i data-lucide="chevron-left" class="h-8 w-8"></i>
      </button>
      <button id="next-slide" class="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/10 transform hover:scale-110">
        <i data-lucide="chevron-right" class="h-8 w-8"></i>
      </button>

      <!-- Dots -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        ${slides.map((_, i) => `
          <button class="slider-dot w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}" data-index="${i}"></button>
        `).join("")}
      </div>
    </div>
    
    <!-- Search Section (Moved down) -->
    <div id="search-section" class="relative -mt-8 z-20 max-w-2xl mx-auto px-4 mb-16">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative">
          <input type="text" id="home-search" placeholder="ওষুধ বা রোগের নাম লিখুন..." 
            class="w-full pl-14 pr-6 py-5 rounded-full border border-slate-200 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none text-lg shadow-xl shadow-slate-200/50 transition-all placeholder:text-slate-400 text-slate-700"
          />
          <div class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
            <i data-lucide="search" class="h-6 w-6"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <a href="./materia-medica.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
          <i data-lucide="book-open" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">মেটেরিয়া মেডিকা</h3>
        <p class="text-slate-500 leading-relaxed">বিভিন্ন ওষুধের বিস্তারিত বিবরণ এবং লক্ষণসমূহ জানুন।</p>
      </a>
      
      <a href="./organon.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-blue-600">
          <i data-lucide="file-text" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">অর্গানন অফ মেডিসিন</h3>
        <p class="text-slate-500 leading-relaxed">হ্যানিম্যানের চিকিৎসা দর্শনের মূলনীতিসমূহ।</p>
      </a>

      <a href="./symptoms.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 text-purple-600">
          <i data-lucide="activity" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">লক্ষণ ভিত্তিক</h3>
        <p class="text-slate-500 leading-relaxed">রোগের লক্ষণ অনুযায়ী সঠিক ওষুধ নির্বাচন করুন।</p>
      </a>

      <a href="./blog.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 text-orange-600">
          <i data-lucide="leaf" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-orange-700 transition-colors">স্বাস্থ্য ব্লগ</h3>
        <p class="text-slate-500 leading-relaxed">হোমিওপ্যাথি বিষয়ক বিভিন্ন প্রবন্ধ ও টিপস।</p>
      </a>
    </div>

    <!-- About Section -->
    <div class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-slate-900 mb-8">কেন হোমিওপ্যাথি বেছে নেবেন?</h2>
            <div class="space-y-8">
              <div class="flex gap-5 group">
                <div class="bg-teal-50 p-4 rounded-2xl h-fit group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
                  <i data-lucide="leaf" class="h-6 w-6"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-slate-900 mb-2">পার্শ্বপ্রতিক্রিয়াহীন</h3>
                  <p class="text-slate-600 leading-relaxed">প্রাকৃতিক উপাদান থেকে তৈরি, তাই শরীরের কোনো ক্ষতি করে না।</p>
                </div>
              </div>
              <div class="flex gap-5 group">
                <div class="bg-teal-50 p-4 rounded-2xl h-fit group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
                  <i data-lucide="activity" class="h-6 w-6"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-slate-900 mb-2">স্থায়ী আরোগ্য</h3>
                  <p class="text-slate-600 leading-relaxed">রোগের মূল কারণ নির্মূল করে স্থায়ী সমাধান দেয়।</p>
                </div>
              </div>
              <div class="flex gap-5 group">
                <div class="bg-teal-50 p-4 rounded-2xl h-fit group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
                  <i data-lucide="book-open" class="h-6 w-6"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-slate-900 mb-2">ব্যক্তিভিত্তিক চিকিৎসা</h3>
                  <p class="text-slate-600 leading-relaxed">প্রতিটি রোগীর শারীরিক ও মানসিক লক্ষণ বিচার করে ওষুধ দেওয়া হয়।</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-lg relative overflow-hidden">
            <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <blockquote class="text-2xl font-medium text-slate-800 italic mb-8 relative z-10 leading-relaxed">
              "চিকিৎসকের একমাত্র এবং মহৎ উদ্দেশ্য হলো রোগীকে দ্রুত, আলতোভাবে এবং স্থায়ীভাবে আরোগ্য প্রদান করা।"
            </blockquote>
            <div class="flex items-center gap-5">
              <img src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/5/54/Christian_Friedrich_Samuel_Hahnemann._Lithograph_by_R._De_C_Wellcome_V0002506.jpg&w=128&h=128&fit=cover" alt="Samuel Hahnemann" class="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-teal-100" referrerpolicy="no-referrer" />
              <div>
                <div class="font-bold text-xl text-slate-900">স্যামুয়েল হ্যানিম্যান</div>
                <div class="text-teal-600 font-medium">হোমিওপ্যাথির জনক</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="py-24 bg-white relative overflow-hidden" id="faq-section">
      <div class="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">সাধারণ জিজ্ঞাসা</span>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">হোমিওপ্যাথি নিয়ে আপনাদের প্রশ্ন</h2>
          <p class="text-slate-600 max-w-2xl mx-auto text-lg">
            হোমিওপ্যাথি চিকিৎসা সম্পর্কে মানুষের মনে থাকা সাধারণ কিছু প্রশ্নের উত্তর নিচে দেওয়া হলো।
          </p>
        </div>

        <div class="space-y-4">
          <!-- FAQ Item 1 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথি ঔষধ কি কাজ করতে অনেক দেরি হয়?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>এটি একটি সাধারণ ভুল ধারণা। তরুণ বা নতুন রোগ (Acute diseases) যেমন- জ্বর, সর্দি, ডায়রিয়ার ক্ষেত্রে সঠিক হোমিওপ্যাথিক ঔষধ খুব দ্রুত, এমনকি কয়েক মিনিটের মধ্যেও কাজ শুরু করতে পারে। তবে দীর্ঘস্থায়ী বা ক্রনিক রোগের (Chronic diseases) ক্ষেত্রে রোগটি যেহেতু অনেক দিন ধরে শরীরে বাসা বেঁধে থাকে, তাই সেটি সম্পূর্ণ নির্মূল করতে কিছুটা সময় লাগতে পারে।</p>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">অ্যালোপ্যাথি ঔষধের সাথে কি হোমিওপ্যাথি খাওয়া যাবে?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>হ্যাঁ, বেশিরভাগ ক্ষেত্রেই অ্যালোপ্যাথি ঔষধের পাশাপাশি হোমিওপ্যাথি ঔষধ সেবন করা যায়। তবে দুটি ঔষধ খাওয়ার মাঝে অন্তত ৩০ মিনিট থেকে ১ ঘণ্টার ব্যবধান রাখা উচিত। বিশেষ করে ডায়াবেটিস বা উচ্চ রক্তচাপের মতো রোগের ক্ষেত্রে হঠাৎ করে অ্যালোপ্যাথি ঔষধ বন্ধ করা ঠিক নয়। এ বিষয়ে অবশ্যই আপনার চিকিৎসকের পরামর্শ নেওয়া উচিত।</p>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথি ঔষধের কি কোনো পার্শ্বপ্রতিক্রিয়া (Side effects) আছে?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>হোমিওপ্যাথি ঔষধ অত্যন্ত সূক্ষ্ম মাত্রায় (Potentized form) প্রয়োগ করা হয়, তাই সঠিক নিয়মে এবং সঠিক মাত্রায় সেবন করলে এর কোনো ক্ষতিকর পার্শ্বপ্রতিক্রিয়া নেই। এটি শিশু, গর্ভবতী মহিলা এবং বয়স্কদের জন্যও সম্পূর্ণ নিরাপদ। তবে চিকিৎসকের পরামর্শ ছাড়া নিজে নিজে ভুল ঔষধ বা অতিরিক্ত মাত্রায় ঔষধ সেবন করলে সাময়িক সমস্যা হতে পারে।</p>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথি ঔষধ খাওয়ার সময় কি অনেক কিছু নিষেধ থাকে?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>সাধারণত ঔষধ খাওয়ার ১৫-২০ মিনিট আগে ও পরে কিছু না খাওয়ার পরামর্শ দেওয়া হয়, যাতে মুখের ভেতর ঔষধটি ভালোভাবে শোষিত হতে পারে। অতিরিক্ত উগ্র গন্ধযুক্ত খাবার (যেমন- কাঁচা পেঁয়াজ, রসুন, কফি) ঔষধের কার্যকারিতা কমিয়ে দিতে পারে, তাই এগুলো এড়িয়ে চলা ভালো। তবে রোগের ধরন অনুযায়ী চিকিৎসক নির্দিষ্ট কিছু খাবার নিষেধ করতে পারেন।</p>
            </div>
          </div>
          
          <!-- FAQ Item 5 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথিতে কি রোগের শুরুতে রোগ বেড়ে যায়?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>কখনো কখনো সঠিক ঔষধ প্রয়োগের পর রোগের লক্ষণ সাময়িকভাবে সামান্য বৃদ্ধি পেতে পারে, যাকে 'হোমিওপ্যাথিক অ্যাগ্রাভেশন' (Homeopathic Aggravation) বলা হয়। এটি আসলে একটি ভালো লক্ষণ, যা প্রমাণ করে যে ঔষধটি সঠিকভাবে কাজ শুরু করেছে এবং শরীরের জীবনীশক্তি (Vital Force) রোগের বিরুদ্ধে লড়াই করছে। এই বৃদ্ধি সাধারণত খুব অল্প সময়ের জন্য হয় এবং এরপর রোগী দ্রুত সুস্থ হতে থাকেন।</p>
            </div>
          </div>

          <!-- FAQ Item 6 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথি ঔষধ কীভাবে সংরক্ষণ করতে হয়?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>হোমিওপ্যাথি ঔষধ সবসময় পরিষ্কার, শুষ্ক এবং ঠান্ডা জায়গায় রাখা উচিত। সরাসরি সূর্যের আলো, তীব্র গন্ধযুক্ত বস্তু (যেমন- পারফিউম, কর্পূর, ন্যাপথলিন) এবং ইলেকট্রনিক ডিভাইস (যেমন- মোবাইল, মাইক্রোওয়েভ) থেকে দূরে রাখা ভালো। ঔষধের শিশির মুখ ভালোভাবে বন্ধ রাখতে হবে।</p>
            </div>
          </div>

          <!-- FAQ Item 7 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">শিশুদের জন্য কি হোমিওপ্যাথি নিরাপদ?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>হ্যাঁ, শিশুদের জন্য হোমিওপ্যাথি অত্যন্ত নিরাপদ এবং কার্যকরী। এর মিষ্টি স্বাদের কারণে শিশুরা সহজেই এই ঔষধ খেতে পছন্দ করে। শিশুদের রোগ প্রতিরোধ ক্ষমতা বাড়াতে এবং বিভিন্ন সাধারণ রোগ (যেমন- সর্দি, কাশি, পেটের সমস্যা) সারাতে হোমিওপ্যাথি খুব ভালো কাজ করে।</p>
            </div>
          </div>

          <!-- FAQ Item 8 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">গর্ভাবস্থায় কি হোমিওপ্যাথি ঔষধ খাওয়া যায়?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>গর্ভাবস্থায় হোমিওপ্যাথি ঔষধ সম্পূর্ণ নিরাপদ, কারণ এতে কোনো ক্ষতিকর রাসায়নিক বা পার্শ্বপ্রতিক্রিয়া নেই। তবে গর্ভাবস্থায় যেকোনো ঔষধ সেবনের আগে অবশ্যই একজন অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকের পরামর্শ নেওয়া উচিত।</p>
            </div>
          </div>

          <!-- FAQ Item 9 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথি ঔষধ কি শুধু মিষ্টি বড়ি (Pills) আকারেই দেওয়া হয়?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>না, হোমিওপ্যাথি ঔষধ শুধু মিষ্টি বড়ি বা গ্লোবিউলস (Globules) আকারেই দেওয়া হয় না। এটি তরল (Liquid), পাউডার (Powder) বা ট্যাবলেট (Tablet) আকারেও দেওয়া হতে পারে। রোগের ধরন এবং রোগীর অবস্থার ওপর ভিত্তি করে চিকিৎসক ঔষধের রূপ নির্ধারণ করেন।</p>
            </div>
          </div>

          <!-- FAQ Item 10 -->
          <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-md">
            <button class="faq-toggle w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" aria-expanded="false">
              <span class="font-semibold text-lg text-slate-800">হোমিওপ্যাথি চিকিৎসায় কি প্যাথলজিক্যাল টেস্ট (যেমন- রক্ত পরীক্ষা, এক্স-রে) প্রয়োজন হয়?</span>
              <span class="faq-icon text-teal-600 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div class="faq-content px-6 pb-5 text-slate-600 hidden">
              <p>হ্যাঁ, প্রয়োজন হতে পারে। যদিও হোমিওপ্যাথি মূলত রোগীর শারীরিক ও মানসিক লক্ষণের ওপর ভিত্তি করে চিকিৎসা করে, তবে রোগের সঠিক নির্ণয়, রোগের গভীরতা বোঝা এবং চিকিৎসার অগ্রগতি পর্যবেক্ষণের জন্য অনেক সময় প্যাথলজিক্যাল টেস্ট বা রিপোর্টের প্রয়োজন হয়।</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Blog Section -->
    <div class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-6">সাম্প্রতিক স্বাস্থ্য কথা</h2>
          <p class="text-slate-600 max-w-2xl mx-auto text-lg">
            আমাদের বিশেষজ্ঞ ডাক্তারদের লেখা সর্বশেষ ব্লগ এবং পরামর্শ।
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${blogPosts.slice(0, 3).map((post) => `
            <a href="./blog.html" class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-100 transition-all duration-300 group flex flex-col h-full">
              <div class="h-56 bg-slate-100 relative overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-600 shadow-sm">
                  ${post.category}
                </div>
              </div>
              <div class="p-8 flex flex-col flex-grow">
                <div class="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <i data-lucide="calendar" class="h-4 w-4"></i>
                  <span>${post.date}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">${post.title}</h3>
                <p class="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">${post.excerpt}</p>
                <div class="flex items-center gap-2 text-teal-600 font-bold text-sm mt-auto group/btn">
                  পড়ুন <i data-lucide="arrow-right" class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          `).join("")}
        </div>
        <div class="text-center mt-12">
          <a href="./blog.html" class="inline-flex items-center gap-2 bg-white text-slate-700 hover:text-teal-700 border border-slate-200 hover:border-teal-200 px-8 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
            সব ব্লগ দেখুন <i data-lucide="arrow-right" class="h-4 w-4"></i>
          </a>
        </div>
      </div>
    </div>
  `;
  let currentSlide = 0;
  const totalSlides = slides.length;
  const dots = document.querySelectorAll(".slider-dot");
  const slideItems = document.querySelectorAll(".slide-item");
  const updateSlider = () => {
    slideItems.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.remove("opacity-0", "z-0");
        slide.classList.add("opacity-100", "z-10", "slide-active");
      } else {
        slide.classList.remove("opacity-100", "z-10", "slide-active");
        slide.classList.add("opacity-0", "z-0");
      }
    });
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("bg-white", "w-8");
        dot.classList.remove("bg-white/50");
      } else {
        dot.classList.remove("bg-white", "w-8");
        dot.classList.add("bg-white/50");
      }
    });
  };
  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  };
  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  };
  let timer = setInterval(nextSlide, 5e3);
  const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5e3);
  };
  (_a = document.getElementById("next-slide")) == null ? void 0 : _a.addEventListener("click", () => {
    nextSlide();
    resetTimer();
  });
  (_b = document.getElementById("prev-slide")) == null ? void 0 : _b.addEventListener("click", () => {
    prevSlide();
    resetTimer();
  });
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index || "0");
      currentSlide = index;
      updateSlider();
      resetTimer();
    });
  });
  const searchInput = document.getElementById("home-search");
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        window.location.href = `./materia-medica.html?q=${encodeURIComponent(searchInput.value)}`;
      }
    });
  }
  createIcons({ icons: { Leaf, Search, BookOpen, Activity, FileText, Calendar, ArrowRight, ChevronLeft, ChevronRight } });
};
const renderMateriaMedica = () => {
  const app = document.getElementById("app-materia");
  if (!app) return;
  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get("q") || "";
  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">মেটেরিয়া মেডিকা</h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          হোমিওপ্যাথিক ওষুধের বিস্তারিত বিবরণ, উৎস এবং লক্ষণসমূহ।
        </p>
      </div>

      <div class="max-w-2xl mx-auto mb-16">
        <div class="relative group">
          <input type="text" id="med-search" value="${initialQuery}" placeholder="ওষুধ খুঁজুন..." 
            class="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all shadow-sm group-hover:shadow-md text-lg placeholder:text-slate-400 text-slate-700"
          />
          <div class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
            <i data-lucide="search" class="h-6 w-6"></i>
          </div>
        </div>
      </div>

      <div id="med-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Medicines will be injected here -->
      </div>
    </div>
    
    <!-- Modal Container -->
    <div id="med-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100">
        <div id="med-modal-content"></div>
      </div>
    </div>
  `;
  const grid = document.getElementById("med-grid");
  const searchInput = document.getElementById("med-search");
  const modal = document.getElementById("med-modal");
  const modalContent = document.getElementById("med-modal-content");
  const renderList = (filter) => {
    if (!grid) return;
    const filtered = medicines.filter(
      (m) => m.name.toLowerCase().includes(filter.toLowerCase()) || m.mainSymptoms.some((s) => s.toLowerCase().includes(filter.toLowerCase()))
    );
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-20">
        <div class="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="search" class="h-8 w-8 text-slate-400"></i>
        </div>
        <p class="text-slate-500 text-lg">কোনো ওষুধ পাওয়া যায়নি</p>
      </div>`;
      return;
    }
    grid.innerHTML = filtered.map((m) => `
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-100 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div class="flex items-start justify-between mb-6 relative">
          <div class="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
            <i data-lucide="leaf" class="h-6 w-6"></i>
          </div>
          <span class="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 group-hover:border-teal-200 transition-colors">
            ${m.source}
          </span>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">${m.name}</h3>
        <p class="text-sm text-slate-500 mb-6 italic font-medium">${m.commonName}</p>
        <p class="text-slate-600 text-sm line-clamp-3 mb-8 flex-grow leading-relaxed">${m.description}</p>
        <button data-id="${m.id}" class="view-details w-full mt-auto flex items-center justify-center gap-2 bg-slate-50 text-slate-700 py-3 rounded-xl hover:bg-teal-600 hover:text-white transition-all font-semibold text-sm group-hover:shadow-lg group-hover:shadow-teal-500/20">
          বিস্তারিত দেখুন <i data-lucide="chevron-right" class="h-4 w-4"></i>
        </button>
      </div>
    `).join("");
    document.querySelectorAll(".view-details").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        openModal(id);
      });
    });
    createIcons({ icons: { Leaf, ChevronRight, Search } });
  };
  const openModal = (id) => {
    var _a;
    const med = medicines.find((m) => m.id === id);
    if (!med || !modal || !modalContent) return;
    modalContent.innerHTML = `
      <div class="relative">
        <div class="bg-slate-900 text-white p-8 sticky top-0 z-10">
          <div class="flex justify-between items-start">
            <div>
              <h2 class="text-3xl font-bold mb-2">${med.name}</h2>
              <div class="flex items-center gap-3 text-slate-300 text-sm">
                <span class="bg-slate-800 px-3 py-1 rounded-full">${med.commonName}</span>
                <span>•</span>
                <span class="bg-slate-800 px-3 py-1 rounded-full">${med.source}</span>
              </div>
            </div>
            <button id="close-modal" class="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
              <i data-lucide="x" class="h-6 w-6"></i>
            </button>
          </div>
        </div>
        
        <div class="p-8 space-y-10">
          <div>
            <h3 class="flex items-center gap-2 font-bold text-slate-900 text-lg mb-4 border-b border-slate-100 pb-3">
              <i data-lucide="file-text" class="h-5 w-5 text-teal-600"></i> বর্ণনা
            </h3>
            <p class="text-slate-600 leading-relaxed text-lg">${med.description}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
              <h3 class="font-bold text-teal-900 mb-4 flex items-center gap-2 text-lg">
                <i data-lucide="activity" class="h-5 w-5 text-teal-600"></i> প্রধান লক্ষণ
              </h3>
              <ul class="space-y-3">
                ${med.mainSymptoms.map((s) => `<li class="flex gap-3 text-slate-700 leading-relaxed"><span class="text-teal-500 font-bold text-lg leading-none">•</span>${s}</li>`).join("")}
              </ul>
            </div>

            <div class="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
              <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                <i data-lucide="book-open" class="h-5 w-5 text-blue-600"></i> মানসিক লক্ষণ
              </h3>
              <ul class="space-y-3">
                ${med.mentalSymptoms.map((s) => `<li class="flex gap-3 text-slate-700 leading-relaxed"><span class="text-blue-500 font-bold text-lg leading-none">•</span>${s}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i data-lucide="thermometer" class="h-5 w-5 text-slate-600"></i> হ্রাস-বৃদ্ধি (Modalities)
            </h3>
            <div class="grid md:grid-cols-2 gap-6 text-sm">
              <div class="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                <span class="font-bold text-red-600 block mb-2 flex items-center gap-2"><i data-lucide="arrow-up" class="h-4 w-4"></i> বৃদ্ধি (Aggravation):</span>
                <p class="text-slate-600 leading-relaxed">${med.modalities.aggravation}</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <span class="font-bold text-green-600 block mb-2 flex items-center gap-2"><i data-lucide="arrow-down" class="h-4 w-4"></i> উপশম (Amelioration):</span>
                <p class="text-slate-600 leading-relaxed">${med.modalities.amelioration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    createIcons({ icons: { X, FileText, Activity, BookOpen, Thermometer, ArrowUp, ArrowDown } });
    (_a = document.getElementById("close-modal")) == null ? void 0 : _a.addEventListener("click", closeModal);
  };
  const closeModal = () => {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };
  if (searchInput) {
    searchInput.addEventListener("input", (e) => renderList(e.target.value));
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  renderList(initialQuery);
};
const renderOrganon = () => {
  const app = document.getElementById("app-organon");
  if (!app) return;
  app.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">অর্গানন অফ মেডিসিন</h1>
        <p class="text-slate-600 text-lg">
          স্যামুয়েল হ্যানিম্যান প্রবর্তিত হোমিওপ্যাথির মূলনীতিসমূহ।
        </p>
      </div>

      <div class="space-y-8">
        ${organonPrinciples.map((principle, index) => `
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-300 group">
            <div class="flex gap-6 items-start">
              <div class="hidden md:flex bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                ${principle.id}
              </div>
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <span class="md:hidden bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                    ${principle.id}
                  </span>
                  <h3 class="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">${principle.title}</h3>
                </div>
                <p class="text-slate-600 leading-relaxed text-lg">
                  ${principle.content}
                </p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
};
const renderSymptoms = () => {
  const app = document.getElementById("app-symptoms");
  if (!app) return;
  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">লক্ষণ ভিত্তিক চিকিৎসা</h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          শরীরের বিভিন্ন অংশের লক্ষণ অনুযায়ী রোগ ও তার প্রতিকার খুঁজুন।
        </p>
      </div>

      <div class="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
        ${symptomCategories.map((category) => `
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
            <div class="bg-purple-50/50 p-6 border-b border-purple-100">
              <h2 class="text-2xl font-bold text-purple-900 flex items-center gap-3">
                <div class="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <i data-lucide="activity" class="h-6 w-6"></i>
                </div>
                ${category.name}
              </h2>
            </div>
            <div class="p-8">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${category.diseases.map((disease) => `
                  <button 
                    data-cat="${category.id}" 
                    data-dis="${disease.id}"
                    class="disease-btn text-left p-5 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50 hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <div class="font-bold text-slate-800 group-hover:text-purple-900 mb-2 text-lg">${disease.name}</div>
                    <div class="text-xs text-slate-500 flex items-center gap-1 font-medium group-hover:text-purple-600">
                      উপযুক্ত ওষুধ দেখুন <i data-lucide="chevron-right" class="h-3 w-3 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Modal -->
    <div id="symptom-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100">
        <div id="symptom-modal-content"></div>
      </div>
    </div>
  `;
  const modal = document.getElementById("symptom-modal");
  const modalContent = document.getElementById("symptom-modal-content");
  const openModal = (catId, disId) => {
    var _a;
    const category = symptomCategories.find((c) => c.id === catId);
    const disease = category == null ? void 0 : category.diseases.find((d) => d.id === disId);
    if (!disease || !modal || !modalContent) return;
    modalContent.innerHTML = `
      <div class="relative">
        <div class="bg-slate-900 text-white p-8 sticky top-0 z-10 flex justify-between items-center">
          <div>
            <h2 class="text-3xl font-bold mb-1">${disease.name}</h2>
            <p class="text-slate-400 text-sm mt-1">সবচেয়ে উপযুক্ত ৫টি ওষুধ ও লক্ষণ</p>
          </div>
          <button id="close-sym-modal" class="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
            <i data-lucide="x" class="h-6 w-6"></i>
          </button>
        </div>
        
        <div class="p-8 grid md:grid-cols-2 gap-6 bg-slate-50">
          ${disease.remedies.map((remedy, idx) => `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group">
              <div class="flex items-center gap-4 mb-4 border-b border-slate-100 pb-3">
                <span class="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  ${idx + 1}
                </span>
                <h3 class="font-bold text-xl text-slate-900 group-hover:text-purple-700 transition-colors">${remedy.name}</h3>
              </div>
              
              <div class="space-y-4">
                ${remedy.description ? `
                <div class="text-sm text-slate-600 italic bg-slate-50 p-3 rounded-lg border border-slate-100">
                  ${remedy.description}
                </div>
                ` : ''}

                <div>
                  <h4 class="font-semibold text-teal-700 text-sm mb-2 flex items-center gap-1">
                    <i data-lucide="activity" class="h-4 w-4"></i> প্রধান লক্ষণ
                  </h4>
                  <ul class="space-y-2">
                    ${(remedy.mainSymptoms || remedy.symptoms || []).map((s) => `
                      <li class="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <i data-lucide="check-circle" class="h-3.5 w-3.5 text-teal-500 mt-0.5 flex-shrink-0"></i>
                        <span>${s}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>

                ${remedy.mentalSymptoms && remedy.mentalSymptoms.length > 0 ? `
                <div>
                  <h4 class="font-semibold text-blue-700 text-sm mb-2 flex items-center gap-1">
                    <i data-lucide="book-open" class="h-4 w-4"></i> মানসিক লক্ষণ
                  </h4>
                  <ul class="space-y-2">
                    ${remedy.mentalSymptoms.map((s) => `
                      <li class="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <i data-lucide="check-circle" class="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0"></i>
                        <span>${s}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>
                ` : ''}

                ${remedy.modalities ? `
                <div class="bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                  <h4 class="font-semibold text-orange-800 text-sm mb-2 flex items-center gap-1">
                    <i data-lucide="thermometer" class="h-4 w-4"></i> হ্রাস-বৃদ্ধি
                  </h4>
                  <div class="space-y-1 text-xs text-slate-600">
                    <p><span class="font-medium text-red-600">বৃদ্ধি:</span> ${remedy.modalities.aggravation}</p>
                    <p><span class="font-medium text-green-600">উপশম:</span> ${remedy.modalities.amelioration}</p>
                  </div>
                </div>
                ` : ''}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    createIcons({ icons: { X, CheckCircle: CircleCheckBig, Activity, ChevronRight, Pill, BookOpen, Thermometer } });
    (_a = document.getElementById("close-sym-modal")) == null ? void 0 : _a.addEventListener("click", closeModal);
  };
  const closeModal = () => {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };
  document.querySelectorAll(".disease-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const el = e.currentTarget;
      openModal(el.dataset.cat, el.dataset.dis);
    });
  });
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
};
const renderBlog = () => {
  const app = document.getElementById("app-blog");
  if (!app) return;
  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">স্বাস্থ্য ব্লগ</h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          হোমিওপ্যাথি চিকিৎসা বিষয়ক বিভিন্ন প্রবন্ধ, টিপস এবং পরামর্শ।
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${blogPosts.map((post) => `
          <article class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-100 transition-all duration-300 group flex flex-col h-full">
            <div class="h-56 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
              <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">
                ${post.category}
              </div>
            </div>
            <div class="p-8 flex flex-col flex-grow">
              <div class="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <i data-lucide="calendar" class="h-4 w-4"></i>
                <span>${post.date}</span>
                <span>•</span>
                <span class="text-orange-600 font-medium">${post.author}</span>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors line-clamp-2">${post.title}</h2>
              <p class="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">${post.excerpt}</p>
              <button data-id="${post.id}" class="blog-read-more flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors mt-auto group/btn">
                আরও পড়ুন <i data-lucide="arrow-right" class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </article>
        `).join("")}
      </div>
    </div>

    <!-- Blog Modal -->
    <div id="blog-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100">
        <div id="blog-modal-content" class="h-full flex flex-col"></div>
      </div>
    </div>
  `;
  const modal = document.getElementById("blog-modal");
  const modalContent = document.getElementById("blog-modal-content");
  const openModal = (postId) => {
    var _a;
    const post = blogPosts.find((p) => p.id === postId);
    if (!post || !modal || !modalContent) return;
    modalContent.innerHTML = `
      <div class="relative h-full overflow-y-auto">
        <button id="close-blog-modal" class="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors shadow-lg border border-white/30">
          <i data-lucide="x" class="h-6 w-6"></i>
        </button>
        
        <div class="h-64 md:h-80 w-full relative">
           <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" referrerPolicy="no-referrer" />
           <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
           <div class="absolute bottom-0 left-0 p-8 text-white w-full">
             <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block shadow-sm">${post.category}</span>
             <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-2 text-shadow-sm">${post.title}</h2>
           </div>
        </div>

        <div class="p-8 md:p-10 bg-white">
          <div class="flex items-center gap-6 text-slate-500 text-sm mb-8 border-b border-slate-100 pb-6">
            <div class="flex items-center gap-2">
              <i data-lucide="calendar" class="h-4 w-4 text-orange-500"></i>
              <span>${post.date}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="user" class="h-4 w-4 text-orange-500"></i>
              <span class="font-medium text-slate-700">${post.author}</span>
            </div>
          </div>
          
          <div class="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            ${post.content.split("\n").map((para) => `<p class="mb-4">${para}</p>`).join("")}
          </div>
        </div>
      </div>
    `;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    createIcons({ icons: { X, Calendar, User } });
    (_a = document.getElementById("close-blog-modal")) == null ? void 0 : _a.addEventListener("click", closeModal);
  };
  const closeModal = () => {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };
  document.querySelectorAll(".blog-read-more").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const el = e.currentTarget;
      const id = parseInt(el.dataset.id || "0", 10);
      if (id) openModal(id);
    });
  });
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  createIcons({ icons: { Image: ImageIcon, Calendar, ArrowRight } });
};
const initApp = () => {
  renderNavbar();
  renderHome();
  renderFooter();
  renderMateriaMedica();
  renderOrganon();
  renderSymptoms();
  renderBlog();
  initIcons();
  
  // Initialize FAQ Toggles
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');
      
      // Close all other FAQs
      faqToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          otherToggle.setAttribute('aria-expanded', 'false');
          otherToggle.nextElementSibling.classList.add('hidden');
          otherToggle.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current FAQ
      toggle.setAttribute('aria-expanded', !isExpanded);
      if (isExpanded) {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
