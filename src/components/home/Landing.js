import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner/index';
import MoviesContainer from './MoviesContainer'

const Landing = (props) => {
        
        const {loading} = props;

        return (
            <div className='container'>
                <SearchForm />
                {loading? <Spinner /> : <MoviesContainer />}
            </div>
        )
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);
