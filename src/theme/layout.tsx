import Layout from 'dumi-theme-default/src/layout';

export default ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <>
        aaaaaa
        {children}
      </>
    </Layout>
  );
};
