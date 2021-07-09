import React from 'react'

const Col =({desktop,mobile, children})=>{

        return(
            <div className={`col ${desktop ? "col-md-"+desktop:""} ${desktop ? "col-lg-"+desktop:""} ${desktop ? "col-xl-"+desktop:""} ${mobile ? "col-sm-"+mobile:""}`}>
                {children}
            </div>
        )
}
export default  Col
