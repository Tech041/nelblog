interface ContainerProp {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProp) => {
  return <div className="px-3 lg:px-5 mx-auto">{children}</div>;
};

export default Container;
