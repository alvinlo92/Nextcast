import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import changePage from '../actions/navBar';

const mapStateToProps = (state) => ({
  page: state.page,
});

const mapDispatchToProps = (dispatch) => ({
  handlePageClick: (page) => dispatch(changePage(page)),
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
