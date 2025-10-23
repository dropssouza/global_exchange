export default function Main({ ClassName, children }) {
  return (
    <>
      <div className={ClassName}>{children}</div>
    </>
  );
}
