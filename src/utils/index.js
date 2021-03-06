/**
 * Given a string, return the object corresponding
 * to it with the provided delimiter.
 *
 * Eg. obj = { some: { prop: { hello: 'world' } } };
 *     str = 'some.prop.hello`
 *
 * Will return 'world'
 */
export function getObjectByString (obj, str) {
  const delimiter = '.'
  // Convert indexes to properties.
  str = str.replace(/\[(\w+)\]/g, delimiter + '$1')
  // Strip leading dot.
  str = '.' + str

  const regex = new RegExp('^\\' + delimiter)
  str = str.replace(regex, '')

  const a = str.split(delimiter)
  for (var i = 0; i < a.length; ++i) {
    let k = a[i]
    if (k in obj) {
      obj = obj[k]
    } else {
      return
    }
  }

  return obj
}

/**
 * Check if element has the css class on it.
 */
export function hasClass (el, className) {
  if (el.classList) {
    return el.classList.contains(className)
  }

  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

/**
 * Adds the provided css className to the element.
 */
export function addClass (el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else if (!hasClass(el, className)) {
    el.className += '  ' + className
  }
}

/**
 * Remove the provided css className from the element.
 */
export function removeClass (el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}

export const constant = c => () => c
export const buildFromKeys = (keys, fn, keyFn) => keys.reduce((build, key) => {
  build[keyFn ? keyFn(key) : key] = fn(key)
  return build
}, {})

export function isSingleRule (ruleset) {
  return isObject(ruleset) &&
         (typeof ruleset.message === 'function' ||
         typeof ruleset.validate === 'function')
}

export function isObject (val) {
  return val !== null && typeof val === 'object'
}

export function isNested (ruleset) {
  return isObject(ruleset) &&
         (typeof ruleset.$message === 'undefined' || typeof ruleset.$value === 'undefined')
}

export const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
