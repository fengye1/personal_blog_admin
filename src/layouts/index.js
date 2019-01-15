import BaseLayout from './layout';
function BasicLayout(props) {
  if (props.location.pathname === '/login') {
    console.log('==>');
    return <div>{props.children}</div>;
  }
  return <BaseLayout children={props.children} />;
}

export default BasicLayout;
