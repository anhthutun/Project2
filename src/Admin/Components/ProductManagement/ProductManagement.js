import React from 'react'
import Menu from '../../Menu'
import "../../Styles/uniProduct.css"
import { Row, Col } from 'react-bootstrap'
import ButtonDetail from "./ModalDetail"
import ButtonDelete from "./ModalDelete"
import ButtonCreate from './ModalCreate'
import ModalSearch from './ModalSearchUniProduct'
import { Link } from 'react-router-dom'
import Header from '../Header'
// import ModalCreate from './ModalCreate'
export default class ProductManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: "",
            product_id: "",
            price: " ",
            description: " ",
            suplier: "",
            quantity: "",
            discount: "",
            discount_price: "",
            ori_price: "",
            id: "",
            tag: "",
            image: [{
                file: null,
                imgUrl: '',
                alt: '',
                content: '',
                isDeleted: false
            }],

            check_variable: {
                isLogin: "false"
            }
        }

    }
    componentDidMount() {
        console.log("props " + JSON.stringify(this.props))
    }
    // làm list để chọn cho tag sản phẩm
    render() {
        console.log(JSON.stringify(this.props))
        let show;
        if (this.props.listUniProduct) {
            show = this.props.listUniProduct.map((item, key) => {
                let update = "update" + key;
                let deleteData = "delete" + key
                return (
                    <tr key={key}>
                        <td colSpan="1" className="initLoad">{item.product_id} </td>
                        <td colSpan="1" className="initLoad">{item.product_name} </td>
                        <td className="initLoad">
                            {item.suplier}
                            {/* <img src={require(item.image.imgUrl)}></img> */}
                        </td>
                        <td colSpan="1" className="initLoad"> {item.price}</td>
                        <td colSpan="1" className="initLoad"> {item.discount}</td>
                        <td colSpan="1" className="initLoad"> {item.quantity}</td>
                        <td colSpan="1" className="initLoad"> {item.ori_price}</td>
                        <td colSpan="1" className="initLoad"> {item.tag}</td>
                        <td colSpan="2">
                            <ButtonDetail item={item} update={update} {...this.props} />
                            <ButtonDelete item={item} deleteData={deleteData} {...this.props} />

                        </td>

                    </tr>
                )
            })
        }
        return (
            <div className="wrap-home">

                <Row>
                    <Col lg={2} className="wrap-menu">
                        <Menu  ></Menu>
                    </Col>
                    <Col lg={10} className='wrap-content'>
                        <Header {...this.props} />
                        <section className="body-content" >
                            <ModalSearch {...this.props} />
                            <ButtonCreate  {...this.props} />
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="">
                                            <th>MSP</th>
                                            <th>Tên sản phẩm  </th>
                                            <th>Nhà cung cấp</th>
                                            <th>Giá bán</th>
                                            <th>Giảm giá</th>
                                            <th>Số lượng</th>
                                            <th>Giá nhập</th>
                                            <th>Tag</th>
                                            <th colSpan={2} >Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {show}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </Col>
                </Row>
            </div >
        )
    }
}