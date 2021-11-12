import Header from '../../pages/weeklyHeader';

const layoutStyle = {
    margin: 0,
    padding: 0
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;