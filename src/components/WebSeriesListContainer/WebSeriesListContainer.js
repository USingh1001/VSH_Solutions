import {connect} from 'react-redux';
import WebSeriesList from '../WebSeriesList/WebSeriesList';

const mapStateToProps = state => {
    return{
        webSeriesList: state.webSeriesList,
        loading: state.loading
    }
}

const WebSeriesListContainer = connect(mapStateToProps)(WebSeriesList);

export default WebSeriesListContainer;