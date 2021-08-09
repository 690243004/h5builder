const DASH = '--'
const UNDERLINE = '__'

export function join(...arg) {
  return arg.join(' ')
}

export function createBEM(namespace) {
  return (el, mods) => bem(namespace, el, mods)
}

function prefix(name, mods) {
  if (Array.isArray(mods)) {
    return mods.map((item) => bem(name, item))
  } else if (typeof mods === 'string') {
    return [bem(name, mods)]
  } else {
    return Object.keys(mods).reduce((accumulates, key) => {
      if (mods[key]) {
        accumulates.push(name + DASH + key)
      }
      return accumulates
    }, [])
  }
}

export function bem(name, el, mods) {
  if (el === undefined) return name
  if (typeof el === 'string') {
    name = name + UNDERLINE + el
  }
  if (typeof el === 'object') {
    mods = el
  }
  return mods ? join(...prefix(name, mods)) : name
}
