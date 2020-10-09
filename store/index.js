import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import reducer from '../reducers/reducers'
import rootSaga from '../sagas/saga'


const makeStore = (context) =>{
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    )
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store;
}

const wrapper = createWrapper(makeStore)

export default wrapper
