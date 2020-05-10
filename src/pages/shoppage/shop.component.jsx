import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.componet';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
        
    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const {match,isCollectionsFetching,isCollectionLoaded} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => 
                    <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => 
                    <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionsFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);