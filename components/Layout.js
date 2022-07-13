import Navbar from './Navbar';

const Layout = ({ childrten }) => {
  return (
    <>
      <Navbar />
      {childrten}
    </>
  );
};

export default Layout;
