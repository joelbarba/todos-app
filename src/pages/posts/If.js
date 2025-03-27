export default function If({ exp, children }) {
  return <>{ exp && children}</>;
}
