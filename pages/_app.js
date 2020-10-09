import '../styles/globals.css'
import withReduxSaga from 'next-redux-wrapper'
import wrapper from '../store'


function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Component {...pageProps}/>
      </div>
  )
}

export default wrapper.withRedux(withReduxSaga(MyApp))
