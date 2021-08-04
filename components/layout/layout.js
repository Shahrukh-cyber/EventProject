import { Fragment } from "react"


const Layout = (props) => {
 return (
  <Fragment>
   <main>
    {props.children}
   </main>
  </Fragment>
 )
}

export default Layout
