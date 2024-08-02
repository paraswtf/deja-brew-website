export function join(...classes) {
  return classes.join(" ");
}

export function joinIf(condition, defaultClassName, ...otherClassNames) {
  return condition
    ? join(defaultClassName, ...otherClassNames)
    : defaultClassName;
}
